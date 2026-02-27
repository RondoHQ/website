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
