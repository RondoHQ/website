# CAP-036 room reservations and presentations evidence

Captured on 2026-08-28 against the current Rondo Club checkout and authenticated production interface.

## Verified

- Production shows `Ruimtes` as `Admin-only`: only administrators can see and configure the feature.
- `RoomBookingsTest` passed: 10 tests, 53 assertions.
- `FeatureTogglesTest` passed: 6 tests, 16 assertions.
- `roomUtils.test.mjs` passed: 4 tests.
- Automated coverage confirms feature gating, role-derived booking contexts, private availability, manager boundaries, conflict rejection, safe extension, current-reservation presentation authorization, timezone-explicit booking values and immediate availability-cache updates.
- Dutch and English product copy is stored only in `drafts/CAP-036-room-reservations-copy.md`; no public route or navigation entry was added.

## Still operationally open

- Enable the intended role for a controlled production pilot and test the complete booking lifecycle, including calendar export.
- Complete a real laptop → Rondo Player → TV presentation on the club network, including start, stop, extension and automatic return to Club TV.
- Test holder, extra presenter and unauthorized-user behavior at reservation boundaries.
- Record Chrome and Edge behavior, accessibility findings, and whether guest or VLAN isolation requires TURN.
