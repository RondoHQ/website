# Copy and Structure Backlog

Backlog generated from `capabilities.csv` and `website-coverage-matrix.csv`.

## P0 (do first)

1. Create a dedicated **"Access & Check-in"** subsection under Product.
- Include Apple Wallet pass, Google Wallet pass, and built-in scanner.
- Add one screenshot each for pass and scanner outcome states.
- Maps to: `CAP-023`, `CAP-024`, `CAP-025`.

2. Add a dedicated **"Finance Dashboard"** visual block.
- Place near `InvoicingHighlight` and in `FeatureGallery`.
- Include KPI definitions (open invoices, overdue amount, actions needed).
- Maps to: `CAP-022`.

3. Introduce a **"Proof-first" claim pattern**.
- Every high-impact claim must have one linked artifact in gallery or FAQ.
- Applies to payments, reminders, status updates, passes/scanner.
- Maps to: `CAP-011`..`CAP-025`.

## P1 (next)

1. Add a **"How syncing works"** explainer near Integration.
- Frequency, retries, conflict handling, what happens on failures.
- Maps to: `CAP-001`, `CAP-007`, `CAP-008`.

2. Add **compliance mini-section** for VOG.
- Explain reminders, ownership, and role visibility.
- Maps to: `CAP-005`, `CAP-006`, `CAP-004`.

3. Add **finance lifecycle diagram**.
- Rule -> invoice -> reminder -> payment -> status -> dashboard.
- Maps to: `CAP-011`..`CAP-022`.

4. Add one **treasurer-oriented FAQ cluster**.
- Reconciliation, payment lag, manual overrides, exports.
- Maps to: `CAP-019`, `CAP-021`, `CAP-026`.

## P2 (hardening)

1. Add **evidence freshness tags** in relevant sections.
- "Last validated on YYYY-MM-DD" per major flow.

2. Add **release checklist gate**.
- New feature cannot be announced on site without capability row + proof row.

3. Add **content ownership model**.
- Product owner signs off `capabilities.csv`.
- Marketing owner signs off `website-coverage-matrix.csv`.

## Information architecture recommendations

1. Keep top-level IA focused on outcomes:
- Product
- Finance
- Integrations
- Compliance
- Pricing
- Demo

2. Add jump links in Product page:
- Member admin
- VOG
- Finance dashboard
- Wallet passes & scanner

3. Add "for role" content anchors:
- Secretary
- Treasurer
- Gate volunteer
- Board/ICT

## Definition of done for website updates

An item is done only when:
1. Capability row exists and status is `verified`.
2. Proof file is linked in `proof-index.md`.
3. Coverage row is `clear` in `website-coverage-matrix.csv`.
4. Copy has been reviewed for NL + EN consistency.
