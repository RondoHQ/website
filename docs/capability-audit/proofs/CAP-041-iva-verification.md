# CAP-041 IVA and Social Hygiene evidence

Captured on 2026-08-28 against the current Rondo Club checkout and authenticated production interface.

## Verified

- The authenticated `IVA en Sociale Hygiëne` overview distinguishes evidence waiting for review from valid evidence and states that approved evidence remains valid indefinitely.
- The privacy-safe website screenshot contains no person rows or certificate links.
- `IvaCertificateParserTest` passed: 14 tests, 36 assertions.
- `IvaApprovalNotificationTest` passed: 6 tests, 24 assertions.
- `IvaReviewNotificationTest` passed: 4 tests, 21 assertions.
- The tests cover both supported official PDF generations, name and two-year date checks, rejection of unknown or malformed documents, indefinite validity after manual approval, unique reviewer notifications, direct review links and duplicate-notification throttling.

## Still operationally open

- Upload a supported official IVA PDF, photo or screenshot, Social Hygiene diploma and invalid document through a controlled member account.
- Capture each resulting automatic approval, manual review or rejection state without exposing the evidence files.
