import { isProductionHost, monitoringDsn } from '../../src/lib/error-monitoring-config.js';

const MAX_BYTES = 65536;
const encoder = new TextEncoder();
const reply = (status, headers = {}) => new Response(null, { status, headers: { 'Cache-Control': 'no-store', ...headers } });

// Read incrementally: Content-Length is optional and cannot be trusted.
async function readEnvelope(request) {
  if (Number(request.headers.get('Content-Length')) > MAX_BYTES) return null;
  if (!request.body) return null;
  const reader = request.body.getReader();
  const chunks = [];
  let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BYTES) { await reader.cancel(); return null; }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return bytes;
}

function validEnvelope(bytes) {
  try {
    const lines = new TextDecoder('utf-8', { fatal: true }).decode(bytes).split('\n');
    if (lines.at(-1) === '') lines.pop();
    if (lines.length !== 3) return false;
    const header = JSON.parse(lines[0]);
    const item = JSON.parse(lines[1]);
    const event = JSON.parse(lines[2]);
    return header?.dsn === monitoringDsn
      && /^[a-f0-9]{32}$/i.test(header.event_id)
      && event?.event_id === header.event_id
      && ['event', 'transaction'].includes(item?.type)
      && (item.type === 'transaction' ? event.type === 'transaction' : !event.type || event.type === 'event')
      && (item.length === undefined || item.length === encoder.encode(lines[2]).byteLength);
  } catch { return false; }
}

async function withinBudget(env, request) {
  if (!env.PERFORMANCE_BUDGET) return false;
  // No raw IPs in storage; these counters are deliberately separate from contact tracing.
  const minute = Math.floor(Date.now() / 60000);
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const hash = await crypto.subtle.digest('SHA-256', encoder.encode(`${minute}:${ip}`));
  const key = Array.from(new Uint8Array(hash), b => b.toString(16).padStart(2, '0')).join('');
  const counters = [[`diagnostics:minute:${key}`, 20, 120], [`diagnostics:day:${new Date().toISOString().slice(0, 10)}`, 2000, 172800]];
  // KV is eventually consistent: these are soft ceilings, not atomic quotas.
  for (const [name, limit, expirationTtl] of counters) {
    const count = Number(await env.PERFORMANCE_BUDGET.get(name) || 0);
    if (!Number.isFinite(count) || count < 0 || count >= limit) return false;
    await env.PERFORMANCE_BUDGET.put(name, String(count + 1), { expirationTtl });
  }
  return true;
}

export async function onRequest({ request, env }) {
  if (request.method !== 'POST') return reply(405, { Allow: 'POST' });
  const url = new URL(request.url);
  if (!isProductionHost(url.hostname) || request.headers.get('Origin') !== url.origin
    || request.headers.get('Sec-Fetch-Site') === 'cross-site') return reply(403);
  if (env.GLITCHTIP_TUNNEL === 'false') return reply(503);
  try {
    const bytes = await readEnvelope(request);
    if (bytes === null) return reply(413);
    if (!validEnvelope(bytes)) return reply(400);
    if (!await withinBudget(env, request)) return reply(429, { 'Retry-After': '60' });
    // Never derive a destination from untrusted envelope input or forward browser headers.
    const dsn = new URL(monitoringDsn);
    const upstream = await fetch(`https://errors.rondo.club/api/5/envelope/?sentry_key=${dsn.username}&sentry_version=7`, {
      method: 'POST', body: bytes, redirect: 'manual', signal: AbortSignal.timeout(3000),
      headers: { 'Content-Type': 'application/x-sentry-envelope' },
    });
    await upstream.body?.cancel();
    const headers = {};
    for (const name of ['Retry-After', 'X-Sentry-Rate-Limits']) {
      const value = upstream.headers.get(name);
      if (value) headers[name] = value;
    }
    return reply(upstream.ok ? 204 : upstream.status === 429 ? 429 : 502, headers);
  } catch { return reply(503); }
}
