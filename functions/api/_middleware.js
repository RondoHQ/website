import { sentryPagesPlugin } from '@sentry/cloudflare';
import { isProductionHost, monitoringDsn, monitoringRelease, sanitizeErrorEvent } from '../../src/lib/error-monitoring-config.js';

export const onRequest = sentryPagesPlugin(context => ({
  dsn: context.env.GLITCHTIP_DSN || monitoringDsn,
  enabled: isProductionHost(new URL(context.request.url).hostname) || Boolean(context.env.GLITCHTIP_DSN),
  release: monitoringRelease,
  environment: isProductionHost(new URL(context.request.url).hostname) ? 'production' : 'test',
  sendDefaultPii: false,
  maxBreadcrumbs: 0,
  tracesSampleRate: 0,
  sendClientReports: false,
  beforeSend: sanitizeErrorEvent,
}));
