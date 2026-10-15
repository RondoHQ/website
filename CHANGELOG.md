# Changelog

## [0.4.1] - 2026-10-15

### Fixed

- Preserve all published page names when grouping performance measurements.

## [0.4.0] - 2026-10-15

### Added

- Privacy-filtered GlitchTip performance measurements with bounded data volume and an independent performance disable switch.

## [0.3.1] - 2026-10-15

### Fixed
- Keep monitoring configuration compatible with the Cloudflare Pages Functions bundler.

## [0.3.0] - 2026-10-15

### Changed
- Restore the approved Figma design and updated demo screenshots on the main branch, retaining GlitchTip monitoring and contact form retry handling.

## [0.2.1] - 2026-10-15

### Fixed
- Refresh the one-time Turnstile token after failed contact requests so visitors can retry without reloading.

## [0.2.0] - 2026-10-15

### Added
- GlitchTip error reporting for production browser errors and contact form service failures.
- Privacy filtering that excludes form content, personal data, request details, and raw error messages.
- Automated checks for error filtering and contact form failure handling.
