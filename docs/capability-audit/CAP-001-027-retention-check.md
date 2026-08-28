# CAP-001 through CAP-027 retention check

Checked on 2026-08-28 after the website updates for newer Rondo Club capabilities.

## Scope

This is a regression check for the earlier website baseline, with emphasis on:

- Sportlink, Laposta and FreeScout synchronization (`CAP-001`, `CAP-007`, `CAP-008`);
- VOG status and reminders (`CAP-005`, `CAP-006`);
- dues, invoicing, payments and finance controls (`CAP-011` through `CAP-022`);
- the remaining baseline capabilities through `CAP-027`.

## Results

- `capabilities.csv` still contains exactly `CAP-001` through `CAP-027` in sequence.
- `website-coverage-matrix.csv` contains the same 27 IDs in the same sequence.
- Every screenshot asset referenced by these coverage rows exists under `public/`.
- The mapped synchronization, VOG, finance, Wallet, scanner, data-ownership and European-hosting copy remains present in the current website source.
- The static build still emits the homepage, role pages, `/made-in-europe/` and `/privacybeleid/` without adding or removing baseline routes.
- CAP-027 had a pre-existing shifted CSV row: `clear`, `none` and its copy reference were under the wrong headers. The row now names `dedicated trust pages` as its section and keeps the infrastructure recommendation in the final column.

## Deliberately unchanged

- No `todo` proof in `proof-index.md` was promoted to `captured` or `verified` by this retention check.
- Placeholder or implicit screenshot classifications remain unchanged where an operational proof flow is still outstanding.
- No public product claim, route or screenshot was added as part of P1-5.
