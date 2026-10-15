import { sentryPagesPlugin } from '@sentry/cloudflare';
import { isProductionHost, monitoringDsn, monitoringRelease, sanitizeErrorEvent } from '../../src/lib/error-monitoring-config.js';
import { sanitizeTransaction } from '../../src/lib/performance-monitoring.js';

// Per-request state stays in the options closure; the shared KV provides a daily budget.
const monitoredRequest = sentryPagesPlugin(context => ({
  dsn: context.env.GLITCHTIP_DSN || monitoringDsn,
  enabled: isProductionHost(new URL(context.request.url).hostname) || Boolean(context.env.GLITCHTIP_DSN),
  release: monitoringRelease,
  environment: isProductionHost(new URL(context.request.url).hostname) ? 'production' : 'test',
  sendDefaultPii: false,
  dataCollection: { userInfo: false, cookies: false, httpHeaders: false, httpBodies: [], urlQueryParams: false },
  maxBreadcrumbs: 0,
  traceLifecycle: 'static',
  tracesSampleRate: context.env.GLITCHTIP_PERFORMANCE === 'false' || context.request.method !== 'POST' ? 0 : 1,
  tracePropagationTargets: [],
  sendClientReports: false,
  beforeSend: sanitizeErrorEvent,
  beforeSendTransaction: async event => {
    if (context.env.GLITCHTIP_PERFORMANCE === 'false') return null;
    // Fail closed if the budget cannot be checked. KV is eventually consistent:
    // this is a soft 1,000/day ceiling, not an exact concurrent-request quota.
    try {
      if (!context.env.PERFORMANCE_BUDGET) return null;
      const key = `performance:contact:${new Date().toISOString().slice(0, 10)}`;
      const count = Number(await context.env.PERFORMANCE_BUDGET.get(key) || 0);
      if (!Number.isFinite(count) || count >= 1000) return null;
      await context.env.PERFORMANCE_BUDGET.put(key, String(count + 1), { expirationTtl: 172800 });
      return sanitizeTransaction(event);
    } catch { return null; }
  },
}));

// A tunnel must not generate another event about its own ingestion request.
export const onRequest = context => new URL(context.request.url).pathname.replace(/\/+$/, '') === '/api/diagnostics'
  ? context.next() : monitoredRequest(context);
