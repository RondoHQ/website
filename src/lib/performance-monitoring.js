// Rebuild performance payloads from an allowlist; error-event filters do not cover traces.
const segments = new Set(["api", "contact", "turnstile", "email", "en", "nl", "privacybeleid", "voorwaarden", "privacy", "terms", "features", "pricing", "demo"]);
const operations = new Set(['pageload', 'navigation', 'http.client', 'http.server', 'resource.script', 'resource.css', 'resource.img', 'resource.link', 'resource.other', 'ui.long-task', 'ui.long-animation-frame', 'browser', 'function']);
const statuses = new Set(['ok', 'unknown_error', 'internal_error', 'cancelled', 'deadline_exceeded', 'not_found', 'permission_denied', 'unauthenticated', 'resource_exhausted', 'invalid_argument', 'unavailable']);
const hex = (value, length) => typeof value === 'string' && new RegExp(`^[a-f0-9]{${length}}$`, 'i').test(value) ? value : undefined;
export function safePath(value = '/') {
  try {
    const url = new URL(String(value).replace(/^(GET|POST|PUT|PATCH|DELETE|OPTIONS|HEAD) /, ''), 'https://monitoring.invalid');
    return '/' + url.pathname.split('/').filter(Boolean).slice(0, 10).map(part => segments.has(part) ? part : ':id').join('/');
  } catch { return '/:unknown'; }
}
function traceContext(span = {}) {
  return {
    trace_id: hex(span.trace_id, 32), span_id: hex(span.span_id, 16), parent_span_id: hex(span.parent_span_id, 16),
    op: operations.has(span.op) ? span.op : 'function',
    status: statuses.has(span.status) ? span.status : undefined,
  };
}
export function sanitizeTransaction(event) {
  return {
    event_id: hex(event.event_id, 32), type: 'transaction',
    transaction: safePath(event.transaction), transaction_info: { source: 'route' },
    start_timestamp: event.start_timestamp, timestamp: event.timestamp,
    platform: event.platform, release: event.release, environment: event.environment,
    contexts: { trace: traceContext(event.contexts?.trace) },
    spans: (event.spans || []).slice(0, 100).map(span => ({
      ...traceContext(span), start_timestamp: span.start_timestamp, timestamp: span.timestamp,
      description: span.op?.startsWith('resource.') ? 'static resource' : safePath(span.description),
    })),
  };
}
