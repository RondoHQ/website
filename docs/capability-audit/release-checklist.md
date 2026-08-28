# Capability claim release checklist

Complete this gate before publishing any new or strengthened capability claim.

## Release record

- Release date:
- Website commit:
- Product version or commit:
- Capability IDs:
- Target environment:
- Product owner:
- QA/ops owner:
- Website/marketing owner:
- Release owner:

One person may fill multiple roles, but every role must contain a name.

## Product truth

- [ ] Each changed claim maps to a row in `capabilities.csv`.
- [ ] The current product behavior, intended audience and role boundaries match the claim.
- [ ] The controlled scenario passed against the product version recorded above.
- [ ] Proof is linked in `proof-index.md`, marked `verified` and tagged `freshness: current`.
- [ ] External-service, device and production-only limitations are stated as caveats or completed checks.
- [ ] Product owner approves the claim and caveats.

## Website and marketing

- [ ] The coverage row is `clear` and points to the exact public copy and evidence.
- [ ] Dutch and English describe the same behavior, audience and limitations.
- [ ] Screenshots and recordings are current, privacy-safe and contain no credentials or private identifiers.
- [ ] Feature availability is described accurately for the target club and toggle state.
- [ ] Website/marketing owner approves wording, placement and assets.

## Release verification

- [ ] Website checks and production build pass.
- [ ] The changed NL and EN routes render correctly in the release preview.
- [ ] Navigation, internal links, metadata and image alternatives remain valid.
- [ ] After publication, the changed live routes and the exact claim text are verified.
- [ ] Release owner records the final decision below.

## Decision

- [ ] Publish
- [ ] Do not publish

Decision date:

Release owner:

Blocking items or follow-up:

## Existing evidence debt

Missing or stale proof for an unchanged existing claim stays in the backlog and does not block an unrelated release. It becomes blocking as soon as the release changes that claim or its supporting product behavior.
