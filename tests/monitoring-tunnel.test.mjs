import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { createEventEnvelope, dsnFromString, serializeEnvelope } from '@sentry/core';
import { monitoringDsn } from '../src/lib/error-monitoring-config.js';
import { onRequest } from '../functions/api/diagnostics.js';

const originalFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = originalFetch; });
const id = 'a'.repeat(32);
const envelope = (type = 'transaction') => serializeEnvelope(createEventEnvelope(
  { event_id: id, ...(type === 'transaction' ? { type, transaction: '/en', contexts: { trace: { op: 'pageload' } } } : { exception: { values: [{ type: 'Error', value: 'Sanitized error' }] } }) },
  dsnFromString(monitoringDsn), undefined, '/api/diagnostics',
));
const budget = () => {
  const values = new Map();
  return { get: async key => values.get(key), put: async (key, value) => { values.set(key, value); } };
};
function context(body = envelope(), overrides = {}) {
  return {
    request: new Request('https://rondo.club/api/diagnostics', { method: 'POST', headers: {
      Origin: 'https://rondo.club', 'CF-Connecting-IP': '192.0.2.1', Cookie: 'PRIVATE', Authorization: 'SECRET',
    }, body, ...overrides }),
    env: { PERFORMANCE_BUDGET: budget() },
  };
}

test('real SDK error and transaction envelopes use only the fixed destination and no private headers', async () => {
  for (const type of ['event', 'transaction']) {
    const body = envelope(type);
    globalThis.fetch = async (url, options) => {
      assert.equal(new URL(url).origin, 'https://errors.rondo.club');
      assert.equal(new URL(url).pathname, '/api/5/envelope/');
      assert.equal(options.redirect, 'manual');
      assert.equal(new TextDecoder().decode(options.body), body);
      assert.deepEqual(options.headers, { 'Content-Type': 'application/x-sentry-envelope' });
      assert.ok(options.signal instanceof AbortSignal);
      return new Response('PRIVATE upstream data', { headers: { 'Set-Cookie': 'SECRET' } });
    };
    const response = await onRequest(context(body));
    assert.equal(response.status, 204);
    assert.equal(await response.text(), '');
    assert.equal(response.headers.get('Set-Cookie'), null);
    assert.equal(response.headers.get('Cache-Control'), 'no-store');
  }
});

test('foreign origins, other projects, malformed items and oversized streaming bodies never reach GlitchTip', async () => {
  globalThis.fetch = () => { throw new Error('Must not send'); };
  for (const origin of ['', 'https://evil.invalid', 'https://rondo.club.evil.invalid']) {
    assert.equal((await onRequest(context(envelope(), { headers: { Origin: origin } }))).status, 403);
  }
  for (const body of ['invalid', envelope().replace(monitoringDsn, 'https://key@127.0.0.1/1'), envelope().replace('"type":"transaction"', '"type":"attachment"'), envelope() + '\n{}\n{}']) {
    assert.equal((await onRequest(context(body))).status, 400);
  }
  assert.equal((await onRequest(context('x'.repeat(65537)))).status, 413);
  const stream = new ReadableStream({ start(controller) { controller.enqueue(new Uint8Array(40000)); controller.enqueue(new Uint8Array(40000)); controller.close(); } });
  assert.equal((await onRequest(context(stream, { duplex: 'half' }))).status, 413);
  assert.equal((await onRequest(context(null, { method: 'GET' }))).status, 405);
});

test('budgets fail closed, enforce both ceilings, and use ephemeral hashed IP keys', async () => {
  globalThis.fetch = async () => new Response(null, { status: 204 });
  const ctx = context();
  const keys = [];
  const kv = budget();
  ctx.env.PERFORMANCE_BUDGET = { get: kv.get, put: async (key, value, options) => { keys.push(key); await kv.put(key, value, options); } };
  for (let n = 0; n < 20; n++) assert.equal((await onRequest({ ...ctx, request: ctx.request.clone() })).status, 204);
  assert.equal((await onRequest({ ...ctx, request: ctx.request.clone() })).status, 429);
  assert.doesNotMatch(keys.join(','), /192\.0\.2\.1/);
  assert.equal((await onRequest({ ...context(), env: {} })).status, 429);
  assert.equal((await onRequest({ ...context(), env: { PERFORMANCE_BUDGET: { get: async key => key.includes(':day:') ? '2000' : '0', put: async () => {} } } })).status, 429);
  assert.equal((await onRequest({ ...context(), env: { PERFORMANCE_BUDGET: { get: async () => { throw new Error('offline'); } } } })).status, 503);
  assert.equal((await onRequest({ ...context(), env: { GLITCHTIP_TUNNEL: 'false' } })).status, 503);
});

test('upstream throttling propagates while redirects and failures cannot escape the fixed endpoint', async () => {
  globalThis.fetch = async () => new Response('private', { status: 429, headers: { 'Retry-After': '120', 'X-Sentry-Rate-Limits': '120:transaction' } });
  const response = await onRequest(context());
  assert.equal(response.status, 429);
  assert.equal(response.headers.get('Retry-After'), '120');
  assert.equal(response.headers.get('X-Sentry-Rate-Limits'), '120:transaction');
  globalThis.fetch = async () => new Response(null, { status: 302, headers: { Location: 'https://evil.invalid' } });
  assert.equal((await onRequest(context())).status, 502);
  globalThis.fetch = async () => { throw new Error('timeout'); };
  assert.equal((await onRequest(context())).status, 503);
});
