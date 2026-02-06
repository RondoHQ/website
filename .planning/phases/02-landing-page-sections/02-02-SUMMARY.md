---
phase: 02-landing-page-sections
plan: 02
subsystem: ui
tags: [astro-components, landing-page, svg-diagram, pricing, dutch-content, scenario-cards]

# Dependency graph
requires:
  - phase: 01-foundation-and-design-system
    provides: "Glass morphism UI components (Card, Button), theme colors"
  - phase: 02-landing-page-sections
    plan: 01
    provides: "Page skeleton with Header, Hero, Footer, smooth-scroll CSS"
provides:
  - "Product story with 3 scenario-based cards (new member, VOG, mailing)"
  - "Integration diagram SVG showing 6 systems (Sportlink, Nikki, Rondo Sync, Rondo Club, Laposta, FreeScout)"
  - "Pricing section with formula and 3 example calculations"
  - "Complete landing page with all sections wired"
affects: [03-contact-form]

# Tech tracking
tech-stack:
  added: []
  patterns: [inline-svg-diagram, data-driven-pricing-cards, scenario-based-storytelling]

key-files:
  created:
    - src/components/sections/ProductStory.astro
    - src/components/sections/IntegrationDiagram.astro
    - src/components/sections/Pricing.astro
  modified:
    - src/pages/index.astro

key-decisions:
  - "Unified product story with scenarios, not separate Club vs Sync sections"
  - "Hub-and-spoke SVG diagram with Rondo products in primary cyan color"
  - "Data-driven pricing examples using frontmatter array"
  - "VOG scenario card instead of team change (user feedback)"
  - "Nikki added as data source flowing contributiedata to Rondo Sync (user feedback)"

patterns-established:
  - "Scenario-based storytelling: pain point in gray-400, solution with cyan highlight"
  - "Inline SVG with scoped CSS classes for diagram styling"
  - "Data-driven card rendering from frontmatter arrays"

# Metrics
duration: 3min
completed: 2026-02-06
---

# Phase 02 Plan 02: Product Story, Integration Diagram, and Pricing Summary

**Scenario-based product storytelling (3 cards), inline SVG integration diagram (6 systems), and transparent pricing with formula + 3 example calculations — completing the full Dutch landing page**

## Performance

- **Duration:** ~3 min
- **Started:** 2026-02-06
- **Completed:** 2026-02-06
- **Tasks:** 3/3 (2 auto + 1 human-verify checkpoint)
- **Files modified:** 4

## Accomplishments
- Product story section with 3 scenario-based cards: new member signup, VOG tracking, mailing list management
- Integration diagram showing 6 connected systems: Sportlink Club, Nikki, Rondo Sync, Rondo Club, Laposta, FreeScout
- Pricing section with all-in-one formula (€250 + €0,50/lid) and 3 examples (250/500/1000 leden)
- Complete landing page wired: Hero → Product Story → Integration Diagram → Pricing → Footer
- All navigation anchors functional (#product, #prijzen)

## Task Commits

Each task was committed atomically:

1. **Task 1: Create ProductStory and IntegrationDiagram sections** - `25a499a` (feat)
2. **Task 2: Create Pricing section and wire complete landing page** - `d5984f0` (feat)
3. **Task 3: Visual verification checkpoint** - human feedback applied:
   - `4a7a847` (fix) - VOG scenario card, Nikki node, Rondo Sync primary color, remove import label
   - `dc72eb7` (fix) - Nikki arrow corrected to point at Rondo Sync with contributiedata label

## Files Created/Modified

**Created:**
- `src/components/sections/ProductStory.astro` - 3 scenario cards with Dutch content
- `src/components/sections/IntegrationDiagram.astro` - Inline SVG hub-and-spoke diagram
- `src/components/sections/Pricing.astro` - Formula card + 3 example cards + CTA

**Modified:**
- `src/pages/index.astro` - Complete landing page with all sections

## Decisions Made

- Unified product story (not separate Club/Sync sections) — per CONTEXT.md
- VOG scenario instead of team change — user feedback during verification
- Nikki as contributiedata source to Rondo Sync — user feedback during verification
- Rondo Sync styled same as Rondo Club (primary cyan) — user feedback

## Deviations from Plan

### User-Requested Changes

**1. VOG scenario card replaced team change card**
- **Found during:** Checkpoint verification
- **Change:** "Een speler wisselt van team" → "Wie heeft er al een VOG?"
- **Committed in:** 4a7a847

**2. Integration diagram: Nikki added, Rondo Sync restyled**
- **Found during:** Checkpoint verification
- **Change:** Added Nikki node with contributiedata arrow to Sync, gave Sync primary color, removed import label
- **Committed in:** 4a7a847, dc72eb7

---

**Total deviations:** 2 user-requested changes during verification
**Impact on plan:** Content adjustments only. No scope creep.

## Issues Encountered

None - all tasks completed successfully. User feedback applied during checkpoint.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

**Phase 2 complete:**
- Full landing page with all sections
- Navigation anchors working (#product, #prijzen)
- Pricing CTA targets #contact (ready for Phase 3)
- All content in Dutch
- No blockers for Phase 3

---
*Phase: 02-landing-page-sections*
*Completed: 2026-02-06*
