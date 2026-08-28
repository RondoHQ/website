# CAP-047 Deceased-person safety evidence

Captured on 2026-08-28 against the current Rondo Club checkout.

## Verified

- `DeceasedPeopleTest` passed: 2 tests, 10 assertions.
- A recorded date of death excludes the person from normal lists while an explicit filter keeps the historical record available.
- The central communication policy returns no email addresses for a deceased person, including invoice-recipient resolution.
- A deceased person is not eligible for volunteer work.
- The authenticated profile removes edit controls, keeps historical contact data and explains that Rondo no longer uses it for automatic communication.
- Member self-service rejects changes to a deceased profile as read-only.

## Still operationally open

- Capture a privacy-safe authenticated profile showing the read-only state and historical-information notice.
- Capture the explicit deceased-person filter and resulting historical record without exposing personal data.
