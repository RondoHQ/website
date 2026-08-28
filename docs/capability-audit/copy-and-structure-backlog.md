# Copy and Structure Backlog

Backlog generated from `capabilities.csv` and `website-coverage-matrix.csv`.

## Audit snapshot: 2026-08-28

- `CAP-030` through `CAP-047` cover product work added after the previous website-content baseline.
- Production screen checks confirmed Toernooien, Club TV, Mijn gegevens, vrijwilligersstatistieken and Ruimtes.
- These checks do not by themselves mark capabilities as `verified`; the proof flows remain required.
- Ruimtes is `admin_only` and must not be presented as generally available.
- Match-bound access statistics still require a real home-match field test.

## P0 implementation backlog

### P0-1: Repair commercial-model consistency — completed 2026-08-28

**Outcome:** every NL/EN page describes the sponsorship model consistently.

1. Replace the FAQ wording that still calls Rondo a paid offer.
2. Remove remaining current-copy references to the former price page and price-comparison model.
3. Use the current sponsorship terms: no Rondo licence fee, agreed Your.Online label sponsorship, third-party usage costs and no included FreeScout hosting.

**Acceptance criteria**

- Repository search finds no public claim that Rondo has a paid plan or former price page.
- NL and EN express the same commercial conditions.
- Existing legal pages remain aligned with the homepage.

### P0-2: Publish Tournament content — implemented 2026-08-28, validation pending

**Outcome:** visitors can understand the tournament workflow and the responsible role.

1. Add a homepage ProductStory or equivalent section for tournament registration.
2. Add NL/EN role pages for the tournament coordinator.
3. Cover setup, staff invitations, manager registration, deadlines, progress and amounts.
4. Add a real, redacted screenshot of tournament progress.

**Maps to:** `CAP-030`.

**Acceptance criteria**

- NL/EN navigation exposes the role page.
- Claims match the completed Flow 6 evidence.
- Screenshot contains no personal data.

### P0-3: Publish Club TV content — implemented 2026-08-28, product-flow validation pending

**Outcome:** Club TV is visible as a major Rondo product area.

1. Add a homepage section covering Sportlink matchday information, announcements, media, playlists and sponsor rotation.
2. Add NL/EN role pages for the Club TV editor.
3. Include a browser-preview screenshot and a photo of an actual display.
4. Keep pairing, remote shutdown and signed-update mechanics out of general marketing copy.

**Maps to:** `CAP-031` and the Club TV portion of `CAP-040`.

**Acceptance criteria**

- The page explains the editor outcome before technical details.
- Claims match a verified playlist-to-display flow.
- Public screenshots contain no player credentials or private sponsor contacts.

### P0-4: Update member self-service and Sportlink sync copy

**Outcome:** the site no longer presents Mijn gegevens as view-only or Sportlink as one-way only.

1. Update the secretary role page and FAQ with editable own, household and minor-child fields.
2. Explain email verification and authorization boundaries.
3. Update the integration story to show controlled return changes to Sportlink.
4. Explain the 24-month change log, processing delay and Action needed state.
5. Mention direct Apple/Google Wallet access from Mijn gegevens.

**Maps to:** `CAP-032`, `CAP-033`, `CAP-038`, `CAP-042`.

**Acceptance criteria**

- Copy distinguishes viewing, editing, verification and synchronization.
- No claim suggests that every field is editable or instantly processed.
- NL and EN use the same boundaries.

### P0-5: Expand the volunteer-coordinator story

**Outcome:** the role page reflects the current season-management workflow.

1. Add whole-season planning in halves, direct member assignment and the full signup overview.
2. Add calendar download and the statistics-dashboard outcomes.
3. Explain automatic IVA verification separately from manual approval.
4. Replace `/screenshot-diensten-placeholder.svg` with real planning and dashboard screenshots.

**Maps to:** `CAP-034`, `CAP-035`, `CAP-041`.

**Acceptance criteria**

- Page covers plan, fill, monitor and follow-up as one flow.
- Dashboard labels have documented KPI definitions.
- Placeholder asset and its TODO are removed after real screenshots exist.

### P0-6: Replace remaining sponsor proof placeholders

**Outcome:** existing sponsor claims use current product evidence.

1. Replace `/screenshot-sponsors-placeholder.svg` on the homepage and sponsor role page.
2. Show company and personal sponsors, contact relations and logo state.
3. Add logo import/self-service and Club TV visibility without exposing contact details.

**Maps to:** `CAP-040`.

**Acceptance criteria**

- The placeholder and its TODO are removed.
- NL/EN captions describe the exact screen shown.
- Sponsor self-service and administrator actions are not conflated.

## P1 backlog

1. Add guided person merging and overlapping-characteristic filters to the member-administration role page (`CAP-037`).
2. Extend access copy with pass choice and revocation after lifecycle proof; publish match statistics only after the real-match field test (`CAP-038`, `CAP-039`).
3. Expand IVA/Social Hygiene evidence and sponsor management beyond the P0 summaries (`CAP-040`, `CAP-041`).
4. Prepare room-reservation/presentation copy, but keep it unpublished while production is `admin_only` (`CAP-036`).
5. Retain the earlier sync, VOG and finance evidence work for `CAP-001` through `CAP-027`.

## P2 backlog

1. Add account activation, guardian linking and optional PWA installation detail (`CAP-042`).
2. Explain the complete feedback lifecycle in support copy (`CAP-043`).
3. Add concrete role, field-scope and configurable-feature examples to board/ICT copy (`CAP-044`).
4. Add read-only authenticated Abilities/MCP information only for board/ICT audiences (`CAP-045`).
5. Add invoice-expiration and deceased-person safety details after their validation flows pass (`CAP-046`, `CAP-047`).
6. Add evidence freshness tags, a release checklist gate and explicit product/marketing ownership to the audit process.

## Information architecture recommendations

1. Keep top-level navigation focused on Product, Finance, Integrations, Compliance, Sponsorship and Demo.
2. Add Product anchors for Members, Volunteers, Tournaments, Club TV, Finance, Sponsors and Access.
3. Add role routes for Tournament coordinator and Club TV editor.
4. Keep Rooms out of public navigation until it is enabled for intended users.
5. Keep Abilities/MCP within Board/ICT rather than top-level navigation.

## Definition of done for website updates

An item is done only when:
1. Capability row exists and status is `verified`.
2. Proof file is linked in `proof-index.md`.
3. Coverage row is `clear` in `website-coverage-matrix.csv`.
4. Copy has been reviewed for NL + EN consistency.
