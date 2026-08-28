# Audit Runbook (90-minute session)

## Objective

Produce a verified list of current Rondo Club capabilities and a concrete copy/IA action list for the website.

## Ownership

| Role | Accountable for | Approval |
|---|---|---|
| Product owner | Current product behavior, test scope, proof quality, capability status and caveats | Confirms that the claim matches the product and its intended audience |
| QA/ops owner | Running the controlled scenario, recording environment and result, and capturing privacy-safe evidence | Confirms that the scenario passed in the recorded environment |
| Website/marketing owner | Claim wording, NL/EN parity, placement, screenshots, coverage status and evidence references | Confirms that the public presentation stays within the approved proof |
| Release owner | Completing the release checklist and stopping publication when a blocking item remains | Gives the final publish or no-publish decision |

One person may hold multiple roles, but every audit or release record must name the people performing these roles before work starts.

## Preparation (15 min)

1. Record the named owners, audit date, product version or commit and target environment.
2. Duplicate production-like dataset in staging.
3. Create role accounts: secretary, treasurer, gate volunteer, VOG coordinator.
4. Open these files side-by-side:
- `capabilities.csv`
- `persona-flows.md`
- `proof-index.md`
- `website-coverage-matrix.csv`
- `release-checklist.md`

## Execution (60 min)

1. Run Flow 1 and Flow 2 first (highest business impact).
2. Capture proof artifacts immediately with `CAP-xxx` filenames and record `captured` and `review-by` dates in `proof-index.md`.
3. Update each capability status in `capabilities.csv`.
4. Mark website coverage rows that are inaccurate or weak.

## Debrief (15 min)

1. Confirm list of `not-verified` and disputed claims.
2. Promote top 5 copy/IA fixes into sprint tasks.
3. Assign product-evidence and website/marketing owners plus target dates in `copy-and-structure-backlog.md`.
4. Complete `release-checklist.md` for every release that adds or strengthens a capability claim.

## Evidence freshness

Use one freshness tag on every `captured` or `verified` proof-index row:

- `freshness: current; captured: YYYY-MM-DD; review-by: YYYY-MM-DD`
- `freshness: review-due; captured: YYYY-MM-DD; review-by: YYYY-MM-DD`
- `freshness: stale; captured: YYYY-MM-DD; review-by: YYYY-MM-DD`

Evidence is `current` for 90 days unless the product behavior, role boundary, external integration or public wording changes sooner. Passing the review date changes the tag to `review-due`; a relevant product change makes it `stale` immediately. `todo` proof has implicit `freshness: missing`.

Refreshing evidence means rerunning the relevant controlled scenario against the current product version, not merely changing the dates.

## Release gate

Use [release-checklist.md](release-checklist.md) before publishing a new or strengthened capability claim. Any unchecked blocking item means no publish.

Existing public claims with missing or stale evidence must remain visible in the backlog, but they do not block an unrelated release unless that release changes the claim or its supporting product behavior.

## Rules

- No capability is considered marketable without proof.
- No hero-level claim without a gallery/FAQ corroborating element.
- All approved copy changes must be mirrored in NL and EN.
- `captured` means evidence exists but still has an open verification step; only `verified` and `current` evidence can approve a new or strengthened public claim.
- Product approval and website/marketing approval are separate decisions, even when one person performs both roles.
