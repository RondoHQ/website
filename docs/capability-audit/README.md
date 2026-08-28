# Rondo Club Capability Audit Pack

This folder is the working set for a repeatable **product capability audit** and a **website claims/IA review**.

## Files

- `capabilities.csv`: single source of truth for capabilities and claims.
- `persona-flows.md`: scenario-based walkthroughs to verify capabilities in the app.
- `proof-index.md`: list of required evidence per capability.
- `website-coverage-matrix.csv`: mapping from capability to page/section and claim quality.
- `section-copy-edits.md`: exact NL/EN copy proposals by section and translation key.
- `screenshot-capture-list.md`: concrete screenshot filenames and capture targets.
- `copy-and-structure-backlog.md`: prioritized website copy and structure changes.

## Current audit baseline

- Product history reviewed through `rondo-club` commit `6c13ab69` (2026-08-27).
- Production navigation and read-only screens checked on 2026-08-28 against Rondo Club `35.10.10`.
- Newly identified capabilities start at `CAP-030`.
- A live screen check confirms that a route exists and renders; it does not replace the end-to-end proof required to mark a capability `verified`.
- Rooms are currently `admin_only` in production and remain `internal` until the feature is enabled for its intended users.

## Suggested cadence

1. Run persona flows in the live app (or staging).
2. Attach proof for each capability in `proof-index.md`.
3. Mark rows in `capabilities.csv` as `verified` or `not-verified`.
4. Update `website-coverage-matrix.csv` after each website copy change.
5. Pull from `copy-and-structure-backlog.md` into implementation sprints.

## Status model

- `claimed`: currently present in product/site copy but not yet re-verified in this audit cycle.
- `verified`: tested end-to-end with fresh proof.
- `not-verified`: claim exists but failed or could not be validated.
- `internal`: exists but not intended for public marketing.

## Website coverage model

- `clear`: the website describes the current capability accurately.
- `partial`: the website mentions the area but omits material current behavior.
- `missing`: the capability is not covered on the website.
- `internal`: do not market this as generally available yet.
