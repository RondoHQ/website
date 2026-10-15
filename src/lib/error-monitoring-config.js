// Public ingestion key, not a GlitchTip management credential.
export const monitoringDsn = 'https://c21a19c2aa4c42dbb6f0952a940c9d13@errors.rondo.club/5';
// Keep in sync with package.json (enforced by tests). Pages' bundled Wrangler
// cannot parse JSON import attributes, so this module uses plain JavaScript.
export const monitoringRelease = 'rondo-website@0.4.1';
export const isProductionHost = (hostname) => ['rondo.club', 'www.rondo.club'].includes(hostname);

const stages = new Set(['form-data', 'turnstile', 'rate-limit', 'email', 'contact-browser']);
const errorTypes = new Set(['Error', 'TypeError', 'ReferenceError', 'SyntaxError', 'RangeError', 'URIError', 'EvalError']);

// Explicit allowlist: no form values, raw messages, request data, user details,
// breadcrumbs, URLs with query parameters, or source-code context leave the app.
export function sanitizeErrorEvent(event) {
  const stage = stages.has(event.tags?.stage) ? event.tags.stage : undefined;
  return {
    event_id: event.event_id,
    timestamp: event.timestamp,
    platform: event.platform,
    level: event.level,
    release: event.release,
    environment: event.environment,
    sdk: event.sdk,
    tags: stage ? { stage } : undefined,
    exception: event.exception && {
      values: event.exception.values?.map((value) => ({
        type: errorTypes.has(value.type) ? value.type : 'Error',
        value: stage ? `Rondo website error: ${stage}` : 'Rondo website JavaScript error',
        mechanism: value.mechanism && { type: value.mechanism.type, handled: value.mechanism.handled },
        stacktrace: value.stacktrace && {
          frames: value.stacktrace.frames?.map((frame) => ({
            filename: safeFilename(frame.filename),
            function: frame.function,
            lineno: frame.lineno,
            colno: frame.colno,
            in_app: frame.in_app,
          })),
        },
      })),
    },
  };
}

function safeFilename(filename) {
  if (!filename) return undefined;
  const clean = filename.split(/[?#]/)[0];
  if (/^https:\/\/(www\.)?rondo\.club\/_astro\/[\w.-]+\.js$/.test(clean)) return clean;
  if (/^[\w./-]+\.(m?js|ts)$/.test(clean) && !clean.startsWith('/')) return clean;
  return '[redacted]';
}
