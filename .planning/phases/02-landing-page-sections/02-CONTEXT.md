# Phase 2: Landing Page Sections - Context

**Gathered:** 2026-02-06
**Status:** Ready for planning

<domain>
## Phase Boundary

Deliver complete static landing page with Dutch-first content: hero section, product storytelling, integration diagram, and pricing. Uses the glass morphism design system from Phase 1. Contact form is Phase 3 — this phase creates a scroll-to-contact CTA that will link to it.

</domain>

<decisions>
## Implementation Decisions

### Hero & first impression
- Problem-first headline tone: call out the pain point directly ("Klaar met..." style — scattered data, missing mailing list entries, outdated spreadsheets)
- Split layout: headline + subtext on left, product screenshot on right
- Primary CTA: "Bekijk wat Rondo doet" — scrolls down to product sections (educate before asking for contact)
- User will provide a real Rondo Club screenshot for the hero

### Product storytelling
- One unified story, not separate Club vs Sync sections — tell how the whole system works together
- Scenario-based content: walk through real club scenarios ("Een nieuw lid meldt zich aan...") showing how Rondo handles them
- Core message: no more scattered data — everyone has the right info, everywhere, without manual work. No more sheets going around, no more people missing from mailing lists, no more outdated info
- Emphasis on simplicity and data correctness everywhere

### Integration diagram
- Claude's discretion on diagram style (flowchart, hub-and-spoke, or other) — pick what works best with glass morphism aesthetic
- Must show: Rondo Club, Rondo Sync, Sportlink, Laposta, FreeScout and how they connect
- Standalone visual section between product story and pricing

### Pricing presentation
- All-in-one pricing: €250/year base + €0.50/member/year
- Static examples with three club sizes: 250 leden, 500 leden, 1000 leden
- Framing: all-in-one value — "Alles inbegrepen, geen verrassingen" — emphasize simplicity and transparency
- No trust signals or extras — keep it clean, just the pricing
- CTA button in pricing section that scrolls to contact form (Phase 3 target)

### Page flow & navigation
- Section order: Hero → Product story → Integration diagram → Pricing → Footer
- Header: sticky glass morphism header, always visible while scrolling
- Navigation: anchor links to page sections — "Product", "Prijzen", "Contact" — with smooth-scroll
- Footer: minimal — copyright + legal links only (privacybeleid, voorwaarden)

### Claude's Discretion
- Integration diagram visual style and layout
- Exact Dutch copy/wording (following the tone decisions above)
- Section transition treatments and spacing
- Mobile responsive behavior of split hero layout
- Screenshot presentation style (shadow, frame, angle)

</decisions>

<specifics>
## Specific Ideas

- Hero headline should call out real pain: spreadsheets, missing mailing list entries, outdated member data going around
- Product scenarios should feel relatable to a club board member — use situations they actually deal with
- "Bekijk wat Rondo doet" as hero CTA positions the page as educational, not pushy
- Pricing section CTA scrolls to contact — creates a natural conversion path even before Phase 3 builds the actual form

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 02-landing-page-sections*
*Context gathered: 2026-02-06*
