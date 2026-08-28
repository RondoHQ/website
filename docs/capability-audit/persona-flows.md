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

---

## Flow 6: Tournament Coordinator + Team Manager

**Goal:** confirm the complete invitation and registration workflow.

**Capabilities:** `CAP-030`

1. Create a tournament with a deadline and pricing rules.
2. Invite the current staff of one test team.
3. Open the invitation as the team manager and submit team, player-count and contact details.
4. Confirm the coordinator overview updates its progress and amount.
5. Extend the deadline and verify the manager can see the change.

**Evidence to capture**
- Tournament setup and invitation
- Manager registration flow
- Coordinator progress before and after submission

**Pass criteria**
- Team staff and progress are based on current Rondo team data.
- The coordinator can see a complete registration without a separate spreadsheet.

---

## Flow 7: Club TV Editor

**Goal:** validate the public marketing scope of Club TV.

**Capabilities:** `CAP-031`, `CAP-040`

1. Create one announcement, one image and one Sportlink matchday scene.
2. Build a scheduled playlist and assign it to a test display.
3. Configure sponsor visibility with two different priorities.
4. Verify the browser preview and the physical display.
5. Confirm the display returns to its playlist after a temporary override.

**Evidence to capture**
- Content and playlist editor
- Browser preview
- Physical screen photo
- Sponsor rotation across multiple cycles

**Pass criteria**
- Public match information contains no private fields.
- Timing, scheduling and sponsor rotation match the saved configuration.

---

## Flow 8: Member/Parent Self-service + Member Administrator

**Goal:** validate editable household data and controlled Sportlink return flow.

**Capabilities:** `CAP-032`, `CAP-033`, `CAP-038`, `CAP-042`

1. Activate an existing member and a parent/guardian account.
2. Change an allowed email, phone and household address.
3. Edit one minor child's allowed contact fields and verify another parent's read-only boundary.
4. Verify email confirmation and the resulting Sportlink/change-log states.
5. Open each eligible Wallet pass and permanently revoke one test pass.

**Evidence to capture**
- Activation and household cards
- Edit and email-verification states
- Change log with successful and Action needed examples
- Wallet choice and revoked scan result

**Pass criteria**
- Users can only edit data within their household authorization scope.
- Rondo makes delayed or failed Sportlink processing visible to administrators.

---

## Flow 9: Volunteer Coordinator (season operations)

**Goal:** validate planning, assignment and statistics as one coordinator workflow.

**Capabilities:** `CAP-034`, `CAP-035`, `CAP-041`

1. Plan both halves of a test season and publish the first half.
2. Assign one member directly and inspect the sortable signup overview.
3. Download the calendar feed and verify the assigned shift.
4. Reconcile dashboard occupancy, obligation progress and one upcoming shortage.
5. Upload official IVA, Social Hygiene and invalid test evidence and verify each state.

**Evidence to capture**
- Season planning and member assignment
- Signup overview and calendar event
- Statistics dashboard with reconciliation sheet
- IVA evidence states

**Pass criteria**
- Planning changes are reflected consistently in signups, calendars and statistics.
- Qualification states distinguish automatic verification from manual review.

---

## Flow 10: Member Administration (data quality and safety)

**Goal:** validate sensitive record maintenance without losing history or causing communication errors.

**Capabilities:** `CAP-037`, `CAP-047`

1. Filter a test dataset by overlapping person characteristics.
2. Merge a duplicate household member with roles and relationships.
3. Compare the resulting profile and related records with the pre-merge export.
4. Mark a test person as deceased through the source-data path.
5. Verify read-only behavior and exclusion from every automated communication path.

**Evidence to capture**
- Filter result and merge review
- Before/after relationship export
- Deceased record state
- Communication exclusion log

**Pass criteria**
- Merge retains required roles, relationships and history.
- Deceased-person safety applies centrally, not only in one user interface.

---

## Flow 11: Board/ICT + Treasurer Hardening

**Goal:** validate lower-priority interoperability, permissions and finance exception claims.

**Capabilities:** `CAP-044`, `CAP-045`, `CAP-046`

1. Exercise representative accounts against field scopes, routes and REST endpoints.
2. Test Ruimtes, Kleding and Club TV in off, admin-only and on states.
3. Discover and execute the read-only Abilities/MCP schemas with allowed and denied accounts.
4. Mark a test invoice expired and inspect reminders, payment link, dashboard and history.

**Evidence to capture**
- Permission and feature-toggle matrix
- Abilities schemas and authorization responses
- Expired invoice lifecycle screenshots

**Pass criteria**
- UI visibility and server authorization agree.
- An expired invoice no longer behaves like an ordinarily collectible invoice.
