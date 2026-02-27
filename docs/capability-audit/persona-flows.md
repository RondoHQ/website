# Persona Validation Flows

Use these flows to validate what Rondo Club can actually do today.

## How to run

- Run each flow end-to-end with one test account per role.
- Record all results in `capabilities.csv` (`claimed` -> `verified` / `not-verified`).
- Store evidence files under `docs/capability-audit/proofs/`.

## Flow 1: Secretary (core membership operations)

**Goal:** confirm member admin, team/committee operations, and communication sync.

**Capabilities:** `CAP-001`, `CAP-002`, `CAP-007`, `CAP-009`, `CAP-010`

1. Create a new member in source system and run sync.
2. Open member profile and verify complete fields.
3. Assign member to a team and a committee.
4. Validate team and committee overviews update correctly.
5. Confirm member appears in Laposta target list.

**Evidence to capture**
- Sync run output
- Member profile screenshot
- Team detail screenshot
- Committee detail screenshot
- Laposta list before/after export

**Pass criteria**
- No manual reconciliation required between systems.
- Member appears consistently across profile, team, committee, and mailing list.

---

## Flow 2: Treasurer (invoicing + follow-up)

**Goal:** confirm the full finance loop from rule setup to payment follow-up.

**Capabilities:** `CAP-011` to `CAP-022`

1. Configure dues rules for at least two categories.
2. Generate bulk invoices.
3. Assign installment plan to one member.
4. Send invoice and trigger reminder path on overdue invoice.
5. Complete one iDEAL payment in test mode.
6. Verify automatic status update.
7. Open finance dashboard and verify totals/actions.

**Evidence to capture**
- Rule config screenshot
- Bulk invoice summary
- Reminder email samples (day 14/day 21)
- Payment event/status timeline
- Finance dashboard screenshot with KPI values

**Pass criteria**
- Invoice lifecycle is trackable without spreadsheets.
- Dashboard KPIs match ledger totals.

---

## Flow 3: Gate Volunteer (membership pass check)

**Goal:** validate digital pass workflow and scanner reliability.

**Capabilities:** `CAP-023`, `CAP-024`, `CAP-025`

1. Issue Apple and Google pass for a valid member.
2. Scan both passes in the web scanner.
3. Change member status to inactive/expired.
4. Re-scan and confirm scanner reflects invalid status.

**Evidence to capture**
- Apple Wallet pass screenshot
- Google Wallet pass screenshot
- Scanner result video (valid + invalid)

**Pass criteria**
- Scanner result is immediate and unambiguous for valid/invalid states.

---

## Flow 4: VOG Coordinator (compliance)

**Goal:** ensure VOG tracking and reminders are operational.

**Capabilities:** `CAP-005`, `CAP-006`

1. Mark one VOG as expired and one as valid.
2. Filter VOG overview by status.
3. Trigger reminder workflow and validate recipients/content.

**Evidence to capture**
- VOG overview filtered screenshot
- Reminder email + delivery record

**Pass criteria**
- Expired VOGs are clearly visible and actionable.

---

## Flow 5: Board + ICT Reviewer (governance and risk)

**Goal:** validate data ownership, portability, hosting, and open-source claims.

**Capabilities:** `CAP-026`, `CAP-027`, `CAP-028`, `CAP-029`

1. Execute full data export and inspect data scope.
2. Confirm hosting locations and subprocessor list.
3. Validate relevant GitHub repos and licenses.
4. Execute demo walkthrough script and check for stale/broken paths.

**Evidence to capture**
- Export package and checklist
- Hosting/subprocessor verification note
- GitHub snapshot note
- Demo walkthrough video

**Pass criteria**
- Claims around ownership, hosting, and openness are materially true and current.
