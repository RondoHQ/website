import { test, mock } from 'node:test';
import assert from 'node:assert/strict';
mock.module('@sentry/cloudflare', { namedExports: { sentryPagesPlugin: factory => factory } });
const { onRequest: options } = await import('../functions/api/_middleware.js');
function context(env = {}, method = 'POST') {
  return { request: new Request('https://rondo.club/api/contact', { method }), env };
}
const event = { transaction: 'POST /api/contact?token=PRIVATE', contexts: { trace: {} }, request: { data: 'PRIVATE' } };
test('daily budget, unavailable KV and disable switch fail closed', async () => {
  assert.equal(await options(context()).beforeSendTransaction(event), null);
  assert.equal(options(context({ GLITCHTIP_PERFORMANCE: 'false' })).tracesSampleRate, 0);
  assert.equal(options(context({}, 'OPTIONS')).tracesSampleRate, 0);
  assert.equal(await options(context({ PERFORMANCE_BUDGET: { get: async () => '1000' } })).beforeSendTransaction(event), null);
  assert.equal(await options(context({ PERFORMANCE_BUDGET: { get: async () => { throw new Error('offline'); } } })).beforeSendTransaction(event), null);
});
test('normal contact transaction is filtered and consumes one budget unit', async () => {
  let write;
  const config = options(context({ PERFORMANCE_BUDGET: { get: async () => '3', put: async (...args) => { write = args; } } }));
  const clean = await config.beforeSendTransaction(event);
  assert.equal(clean.transaction, '/api/contact');
  assert.doesNotMatch(JSON.stringify(clean), /PRIVATE/);
  assert.equal(write[1], '4');
  assert.equal(write[2].expirationTtl, 172800);
});
test('diagnostics transport bypasses monitoring to avoid recursive transactions and contact budget use', () => {
  let called = 0;
  const result = options({ request: new Request('https://rondo.club/api/diagnostics', { method: 'POST' }), env: {}, next: () => { called++; return 'unmonitored'; } });
  assert.equal(result, 'unmonitored');
  assert.equal(called, 1);
});
