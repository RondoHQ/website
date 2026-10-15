import { test, mock, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { sanitizeErrorEvent, isProductionHost, monitoringRelease } from '../src/lib/error-monitoring-config.js';

test('monitoring release matches the published package version', () => {
  const { version } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
  assert.equal(monitoringRelease, `rondo-website@${version}`);
});

const captured = [];
mock.module('@sentry/cloudflare', { namedExports: {
  captureException: (error, context) => captured.push({ error, context }),
} });
const { onRequestPost } = await import('../functions/api/contact.js');
const originalFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = originalFetch; captured.length = 0; });

function request(fields = {}) {
  const data = new FormData();
  for (const [key, value] of Object.entries({
    name: 'Test', email: 'test@example.invalid', club_name: 'Test club',
    message: 'PRIVATE FORM CONTENT', 'cf-turnstile-response': 'PRIVATE TOKEN', ...fields,
  })) data.set(key, value);
  return { request: new Request('https://rondo.club/api/contact', { method: 'POST', body: data }), env: {} };
}
const json = (value, status = 200) => new Response(JSON.stringify(value), { status });

test('only production hostnames enable browser reporting', () => {
  assert.ok(isProductionHost('rondo.club'));
  assert.ok(isProductionHost('www.rondo.club'));
  for (const host of ['localhost', 'rondo.club.example.com', 'website-58l.pages.dev']) assert.equal(isProductionHost(host), false);
});

test('event allowlist removes sensitive data while preserving the stack location', () => {
  const event = sanitizeErrorEvent({
    event_id: 'abc', release: 'rondo-website@0.2.0', environment: 'production',
    user: { email: 'PRIVATE EMAIL' }, request: { data: 'PRIVATE FORM CONTENT' },
    extra: { secret: 'PRIVATE TOKEN' }, breadcrumbs: [{ message: 'PRIVATE BREADCRUMB' }],
    message: 'PRIVATE MESSAGE', tags: { stage: 'email', email: 'PRIVATE EMAIL' },
    exception: { values: [{ type: 'TypeError', value: 'PRIVATE MESSAGE', stacktrace: { frames: [{
      filename: 'https://rondo.club/_astro/form.abc.js?secret=PRIVATE TOKEN#PRIVATE',
      function: 'send', lineno: 20, colno: 5, vars: { email: 'PRIVATE EMAIL' },
      context_line: 'PRIVATE SOURCE',
    }, { filename: 'https://third-party.invalid/PRIVATE.js' }] } }] },
  });
  assert.doesNotMatch(JSON.stringify(event), /PRIVATE/);
  assert.equal(event.exception.values[0].stacktrace.frames[0].filename, 'https://rondo.club/_astro/form.abc.js');
  assert.equal(event.exception.values[0].stacktrace.frames[0].lineno, 20);
  assert.equal(event.exception.values[0].stacktrace.frames[1].filename, '[redacted]');
  assert.deepEqual(event.tags, { stage: 'email' });
  assert.equal(sanitizeErrorEvent({ tags: { stage: 'PRIVATE' } }).tags, undefined);
});

test('honeypot and missing verification produce no events or outbound requests', async () => {
  globalThis.fetch = () => { throw new Error('Unexpected fetch'); };
  assert.equal((await onRequestPost(request({ website: 'spam' }))).status, 200);
  assert.equal((await onRequestPost(request({ 'cf-turnstile-response': '' }))).status, 400);
  assert.equal(captured.length, 0);
});

test('invalid Turnstile token is not an operational error', async () => {
  globalThis.fetch = async () => json({ success: false, 'error-codes': ['invalid-input-response'] });
  assert.equal((await onRequestPost(request())).status, 400);
  assert.equal(captured.length, 0);
});

test('Turnstile service and configuration failures are reported', async () => {
  globalThis.fetch = async () => json({}, 503);
  assert.equal((await onRequestPost(request())).status, 500);
  assert.equal(captured[0].context.tags.stage, 'turnstile');
  globalThis.fetch = async () => json({ success: false, 'error-codes': ['invalid-input-secret'] });
  assert.equal((await onRequestPost(request())).status, 400);
  assert.equal(captured.length, 2);
});

test('mail provider rejection reports one event without reading its response body', async () => {
  globalThis.fetch = async (url) => url.includes('turnstile')
    ? json({ success: true }) : json({ error: 'PRIVATE PROVIDER RESPONSE' }, 502);
  assert.equal((await onRequestPost(request())).status, 500);
  assert.equal(captured.length, 1);
  assert.equal(captured[0].context.tags.stage, 'email');
  assert.doesNotMatch(captured[0].error.message, /PRIVATE/);
});

test('network and KV failures keep the correct processing stage', async () => {
  globalThis.fetch = async (url) => {
    if (url.includes('turnstile')) return json({ success: true });
    throw new TypeError('Network failed');
  };
  assert.equal((await onRequestPost(request())).status, 500);
  assert.equal(captured[0].context.tags.stage, 'email');
  const context = request();
  context.env.RATE_LIMIT = { get: async () => { throw new Error('KV unavailable'); } };
  assert.equal((await onRequestPost(context)).status, 500);
  assert.equal(captured[1].context.tags.stage, 'rate-limit');
});

test('validation, rate limits, and successful delivery do not report errors', async () => {
  globalThis.fetch = async () => json({ success: true });
  assert.equal((await onRequestPost(request({ email: 'invalid' }))).status, 400);
  const context = request();
  context.env.RATE_LIMIT = { get: async () => '5' };
  assert.equal((await onRequestPost(context)).status, 429);
  assert.equal((await onRequestPost(request())).status, 200);
  assert.equal(captured.length, 0);
});

test('malformed form bodies return 400 without an operational alert', async () => {
  const response = await onRequestPost({ request: new Request('https://rondo.club/api/contact', { method: 'POST', body: 'invalid' }), env: {} });
  assert.equal(response.status, 400);
  assert.equal(captured.length, 0);
});
