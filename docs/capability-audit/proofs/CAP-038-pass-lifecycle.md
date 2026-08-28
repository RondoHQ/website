# CAP-038 membership pass lifecycle evidence

Captured on 2026-08-28 against the current Rondo Club checkout and authenticated production interface.

## Verified

- `Mijn gegevens` shows direct Apple Wallet and Google Wallet actions for eligible people.
- A person with several current roles receives the `Welke pas wil je toevoegen?` choice before the Wallet action.
- `HouseholdMembershipPassTest` passed: 8 tests, 114 assertions.
- `MembershipPassLifecycleTest` passed: 6 tests, 21 assertions.
- The tests cover role choice, sponsor/member combinations, session-bound Wallet actions, eligibility, exact selected pass type, pass-version revocation and the rule that reactivation does not restore an older QR code.
- The public website screenshot contains role labels only and exposes no member contact details or Wallet action tokens.

## Still operationally open

- Add both Apple Wallet and Google Wallet variants on real devices.
- Change a test person’s relevant pass entitlement and scan the older pass to capture the revoked result.
- CAP-039 match-bound anonymous statistics remain unpublished until the separate real home-match field test is complete.
