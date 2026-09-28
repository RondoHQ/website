---
name: "Rondo marketing website"
description: "The approved Rondo Figma identity applied to the bilingual sports-club website."
colors:
  hero-teal: "#008480"
  heading-navy: "#172A72"
  navy: "#001153"
  teal: "#00908B"
  mint: "#71DBA8"
  purple: "#993399"
  cta-purple: "#8F0488"
  cta-purple-hover: "#74056F"
  secondary-hover: "#5DCC96"
  surface-header: "#F8FDF6"
  surface-mint: "#F2F9F9"
  surface-lilac: "#F4F7FD"
  white: "#FFFFFF"
  body-slate: "#334155"
  muted-slate: "#475569"
  border-soft: "#CBD5E1"
  placeholder: "#94A3B8"
  selection: "#DDEFE9"
typography:
  display:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: 1
  headline:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.14
  title:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.1
  story-title:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.4
  hero-subline:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "26px"
  button:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
rounded:
  field: "0.5rem"
  faq: "0.75rem"
  panel: "1rem"
  story: "20px"
  card-bottom: "0 0 1.25rem 1.25rem"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  grid: "32px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.cta-purple}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.cta-purple-hover}"
  button-secondary:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.navy}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.secondary-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.purple}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-glass:
    backgroundColor: "{colors.surface-mint}"
    textColor: "{colors.body-slate}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  role-card:
    backgroundColor: "{colors.surface-mint}"
    textColor: "{colors.body-slate}"
    rounded: "{rounded.card-bottom}"
    padding: "2.35rem 1.5rem 1.5rem"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.field}"
    padding: "0.75rem 1rem"
    width: "100%"
  header:
    backgroundColor: "{colors.surface-header}"
    textColor: "{colors.body-slate}"
---

# Design System: Rondo marketing website

## Overview

**Creative North Star: "The approved Rondo Figma reference"**

The approved Rondo homepage frame is the visual authority: confident Figtree typography, a teal hero, purple pill actions, pale surfaces, and colorful exported artwork. These choices support the existing sports-club product and its Dutch and English content.

This document records the implemented system, not a new creative proposal. The homepage header, hero, role cards, and product-story treatment follow the supplied reference; the role detail, contact, legal, Europe, and error pages apply the same identity to their existing layouts. Those secondary compositions are implementation extrapolations, not additional supplied Figma frames.

Source: [Rondo Figma homepage, node 4031:955](https://www.figma.com/design/vdG39pyXrS4SFjHyiEfJuz/?node-id=4031-955). Product and language constraints are recorded in `PRODUCT.md`. Implementation sources are `src/styles/global.css`, shared UI components in `src/components/ui/`, `Header.astro`, `Hero.astro`, `RolePaths.astro`, `ProductStory.astro`, and `src/components/pages/RolePage.astro`.

**Key Characteristics:**
- Figtree for headings, body copy, controls, and navigation.
- White headline and supporting copy on the teal homepage hero.
- Navy section headings, purple actions, and teal card headings.
- Flat mint cards with colored top accents; white story panels on lilac.
- Local original identity artwork and real product screenshots.

## Colors

The palette combines saturated teal and purple with dark navy type and very pale green, mint, and lilac backgrounds; frontmatter values are normative.

### Primary
- **Hero teal** fills the homepage and role-detail heroes; white text sits above it.
- **Heading navy** gives main headings a solid color, including the legacy “gradient text” helper.
- **CTA purple** fills primary actions; its darker hover token supplies feedback.

### Secondary
- **Purple** colors outlined actions, product-story titles, active language links, and keyboard outlines.
- **Teal** supplies links, small accents, and role-detail card top borders.
- **Mint** supports secondary actions; its hover token is a stronger green.

### Neutral
- **Navy** is the default text and light-surface icon color; body and muted slate soften supporting prose.
- **Header surface** is pale green; mint is the common card surface; lilac supports long sections and secondary pages.
- **White** is the page base, story-panel fill, and input fill.
- **Soft border** separates fields, panels, and navigation; placeholder slate is reserved for input hints.

The three homepage card accents are horizontal green, violet, and orange gradients, defined in `global.css` and carried as extension tokens in the sidecar. They decorate the narrow card edge; they do not fill heading text.

## Typography

Figtree is served locally from `public/fonts/`, with regular (400), semibold (600), bold (700), and extra-bold (800) files and system/sans-serif fallbacks. Body copy defaults to the frontmatter body role. Primary section headings use the headline role; homepage role-card titles use title, and story-panel titles use story-title.

The desktop homepage display is white and bold. It reduces to 52px at widths up to 1200px, then uses `clamp(36px, 6.5vw, 56px)` with line-height 1.05 at 900px and below. Supporting hero copy reduces to 18px with line-height 1.4 there. The role-detail title has its own `clamp(2rem, 5vw, 3.5rem)` scale and line-height 1.1.

Keep the hierarchy appropriate to the page: legal pages use compact headings and long-form line-height 1.75; the contact title has its own fluid scale. The error page retains an extra-bold heading. These are existing surface-specific choices, not replacements for homepage typography.

## Layout

The reference-led homepage content container caps at 78rem (1248px), with 24px side gutters and 20px gutters at 600px and below. Its main desktop grids use 32px gaps. Centered section-intro containers cap at 40rem while keeping their text left-aligned.

- **Header:** 96px minimum desktop height; 88px with the mobile menu at 1100px and below. Navigation switches to a full-width dropdown. The logo scales down only at 380px and below.
- **Homepage hero:** equal text/screenshot columns; stacks at 900px and below. Desktop padding is 56px above and 60px below; mobile padding is 40px. The purple decoration moves to `left: calc(100% - 32px)` when stacked, keeping it beyond readable copy.
- **Homepage roles:** three columns above 1100px, two at 1100px and below, one at 600px and below; smaller grids use 24px gaps. All ten current roles remain present. Cards stretch, with their action anchored at the bottom.
- **Product story:** two equal columns and alternating screenshot order; one column at 900px and below. Panels use 31px by 39px desktop padding and 24px mobile padding.
- **Role details:** two hero columns from 960px; one below. Mobile artwork is pushed further past the right edge. Detail-card grids use three columns from 900px and one below, with 16px gaps. Their screenshot pair variants retain portrait/pass and landscape-specific proportions.
- **Secondary surfaces:** preserve the narrower contact and legal reading layouts. Contact uses a 42rem form wrapper; legal white panels cap at 48rem. These pages inherit the palette, fonts, header, and footer rather than copying homepage composition.

## Elevation & Depth

Depth is primarily tonal: mint cards against white, and white panels against lilac. The homepage role cards are flat. Product screenshots and the scrolled sticky header share a soft two-part shadow (`-4px -2px 10px #0000000F, 6px 6px 16px #00000014`). Existing contact panels, diagram panels, gallery images, and lightboxes retain their contextual shadows; the site is not universally shadowless. See sidecar shadow tokens for representative values.

The “glass” button and panel names remain compatibility labels in code; their current styles use solid surfaces and borders, with no blur requirement.

## Shapes

Actions are pills. Homepage role cards have square top corners and rounded bottom corners, capped with a 6px gradient strip cycling green, violet, and orange. Role-detail cards use the same bottom-corner shape with a solid teal top border. Story panels round all four corners. Inputs use smaller rounded corners; screenshots and ordinary panels use the panel radius. Decorative SVGs may be clipped at section edges but must not obscure text.

## Components

### Buttons

The shared button exposes primary, secondary, glass, and outline variants. All use the frontmatter button typography, pill radius, and padding. The outline variant has a 1px purple border and faint purple hover fill; glass has a soft border and selection-color hover fill. Hero outline actions become white with a translucent white hover fill. State transitions last 200ms. The page-wide keyboard focus outline is 3px purple with 4px offset. Role-detail actions are separate existing links using bold weight and the same pill/color language.

### Cards and product stories

Mint role cards use a colored top edge and no resting shadow. Homepage cards contain a bold teal title, slate description, and outlined CTA; product-story panels use a white bordered surface, purple title, teal solution label, and local check icon. Keep the existing product screenshot content and enlargement behavior.

### Inputs and feedback

White fields have a soft 1px border, field radius, and 12px by 16px padding. Default fields focus with a primary-purple border and a subtle cyan ring. The actual contact form overrides this to teal with `0 0 0 3px rgba(0, 144, 139, 0.18)`; this is a contextual implementation detail. Textareas resize vertically. Contact feedback uses green success and red error treatments, while required fields and labels retain their functional behavior.

### Navigation

The sticky pale header uses the exact logo icon and wordmark as two local SVGs. Desktop links are 18px slate text; hover and the active language are purple. The mobile toggle exposes its expanded state, closes on Escape, and returns focus to the toggle. Keep bilingual route switching and the error page's existing hidden language switcher.

### FAQ and screenshots

Native details/summary rows have subtle borders, rounded corners, bold questions, and a teal plus/minus indicator. Real screenshots remain enlargeable; overlays darken the backdrop and expose a close action. Honor `prefers-reduced-motion`: the global stylesheet reduces animations and transitions and disables smooth scrolling.

### Identity assets

Use the exact files in `public/design/`: `logo-icon.svg`, `logo-wordmark.svg`, `hero-background.svg`, `shape-purple.svg`, `shape-orange.svg`, `shape-green.svg`, `check.svg`, `committees.png`, and `person-detail.png`. The homepage hero uses `committees.png`; the original screenshot gallery and role-page screenshots remain available for their existing content. Decorative images have empty alternative text and are hidden from assistive technology; screenshots have meaningful alternatives.

## Do's and Don'ts

### Do
- Do use the approved local logo and artwork exports without redrawing them.
- Do keep the same visual tokens and components across Dutch and English.
- Do preserve existing role routes, current wording, commercial terms, and product screenshots when applying this style.
- Do keep mobile decoration at the outer edge so white hero text stays on teal.
- Do preserve keyboard focus, screenshot enlargement, form feedback, and reduced-motion behavior.

### Don't
- Don't treat older Figma wording or role counts as authority to remove current content.
- Don't turn the homepage hero composition into a requirement for every secondary page.
- Don't replace the supplied artwork with approximate gradients or newly generated shapes.
- Don't add another heading font or restore gradient-filled heading text.
- Don't claim secondary page layouts were supplied by Figma; they are consistent extensions of its identity.
