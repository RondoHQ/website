# Changelog

## [0.2.1] - 2026-10-15

### Fixed
- Refresh the one-time Turnstile token after failed contact requests so visitors can retry without reloading.

## [0.2.0] - 2026-10-15

### Added
- GlitchTip error reporting for production browser errors and contact form service failures.
- Privacy filtering that excludes form content, personal data, request details, and raw error messages.
- Automated checks for error filtering and contact form failure handling.
