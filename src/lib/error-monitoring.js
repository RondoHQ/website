import { init, captureException } from '@sentry/browser';
import { isProductionHost, monitoringDsn, monitoringRelease, sanitizeErrorEvent } from './error-monitoring-config';

if (isProductionHost(window.location.hostname)) {
  init({
    dsn: monitoringDsn,
    release: monitoringRelease,
    environment: 'production',
    sendDefaultPii: false,
    maxBreadcrumbs: 0,
    tracesSampleRate: 0,
    sendClientReports: false,
    beforeSend: sanitizeErrorEvent,
    integrations: defaults => defaults.filter(integration => !['BrowserSession', 'Breadcrumbs', 'HttpContext'].includes(integration.name)),
  });
}

export function reportContactError() {
  if (isProductionHost(window.location.hostname)) {
    captureException(new Error('Contact form request failed'), { tags: { stage: 'contact-browser' } });
  }
}
