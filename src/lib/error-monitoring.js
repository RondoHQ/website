import { sanitizeTransaction, safePath } from './performance-monitoring';
import { init, captureException, browserTracingIntegration } from '@sentry/browser';
import { isProductionHost, monitoringDsn, monitoringRelease, sanitizeErrorEvent } from './error-monitoring-config';

if (isProductionHost(window.location.hostname)) {
  init({
    dsn: monitoringDsn,
    tunnel: '/api/diagnostics',
    release: monitoringRelease,
    environment: 'production',
    sendDefaultPii: false,
    dataCollection: { userInfo: false, cookies: false, httpHeaders: false, httpBodies: [], urlQueryParams: false },
    maxBreadcrumbs: 0,
    traceLifecycle: 'static',
    tracesSampleRate: import.meta.env.PUBLIC_GLITCHTIP_PERFORMANCE === 'false' ? 0 : 0.1,
    tracePropagationTargets: [],
    beforeSendTransaction: sanitizeTransaction,
    sendClientReports: false,
    beforeSend: sanitizeErrorEvent,
    integrations: defaults => [
      ...defaults.filter(integration => !['BrowserSession', 'Breadcrumbs', 'HttpContext'].includes(integration.name)),
      ...(import.meta.env.PUBLIC_GLITCHTIP_PERFORMANCE === 'false' ? [] : [browserTracingIntegration({
        beforeStartSpan: options => ({ ...options, name: safePath(options.name) }),
      })]),
    ],
  });
}

export function reportContactError() {
  if (isProductionHost(window.location.hostname)) {
    captureException(new Error('Contact form request failed'), { tags: { stage: 'contact-browser' } });
  }
}
