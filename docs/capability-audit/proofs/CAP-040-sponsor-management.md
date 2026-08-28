# CAP-040 sponsor management evidence

Captured on 2026-08-28 against the current Rondo Club checkout and authenticated production interface.

## Verified

- The authenticated sponsor overview exposes separate organisation and personal-sponsor filters, sponsor roles, active or archived status, and logo state.
- `SponsorCompaniesTest` passed: 11 tests, 51 assertions.
- `MembershipPassSponsorTest` passed: 11 tests, 34 assertions.
- `NarrowcastingContentTest` passed: 5 tests, 27 assertions.
- The tests cover organisation and personal sponsor records, contacts, source uniqueness, own-company logo authorization, Club TV priority validation, the six-sponsor `Always` limit, archiving without deleting the person, sponsor Wallet variants and safe sponsor-only Club TV content.
- The website uses current sponsor screenshots without exposing contact details.

## Still operationally open

- Create and archive controlled organisation and personal sponsors in production.
- Replace a logo through sponsor self-service and confirm that another organisation remains inaccessible.
- Observe the resulting priority and logo changes on a real Club TV screen through a complete rotation.
