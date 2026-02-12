---
phase: quick-2
plan: 01
subsystem: website-ui
tags: [screenshots, visual-enhancement, lightbox, carousel, ux]
completed: 2026-02-12
duration: 291s

dependency_graph:
  requires: []
  provides:
    - "ProductStory scenario cards with embedded screenshots"
    - "FeatureGallery section with categorized screenshot navigation"
    - "Hero carousel with rotating screenshots"
    - "Unified lightbox pattern across all screenshot displays"
  affects:
    - "src/pages/index.astro"
    - "src/components/sections/ProductStory.astro"
    - "src/components/sections/Hero.astro"

tech_stack:
  added:
    - "Astro scoped scripts for carousel and tab navigation"
    - "CSS transitions for crossfade and hover effects"
    - "Lightbox pattern with backdrop blur"
  patterns:
    - "Lazy loading for all screenshots except hero first slide"
    - "Accessibility: prefers-reduced-motion support"
    - "Mobile-responsive: horizontal scroll tabs, responsive grids"

key_files:
  created:
    - path: "src/components/sections/FeatureGallery.astro"
      purpose: "Category-based screenshot gallery with 12 screenshots organized in 6 tabs"
  modified:
    - path: "src/components/sections/ProductStory.astro"
      changes: "Added screenshot below Met Rondo text in each of 5 scenario cards with lightbox"
    - path: "src/components/sections/Hero.astro"
      changes: "Replaced single screenshot with rotating carousel of 5 screenshots, dot navigation"
    - path: "src/pages/index.astro"
      changes: "Imported FeatureGallery, placed between ProductStory and Origin"

decisions: []

metrics:
  tasks_completed: 3
  files_created: 1
  files_modified: 3
  duration_seconds: 291
  commits: 3
---

# Quick Task 2: Add Screenshots to Scenario Cards Feature

**One-liner:** Integrated 12 app screenshots across website with scenario card embeds, categorized feature gallery, and hero carousel with crossfade rotation.

## What Was Built

Added visual proof of Rondo's capabilities throughout the rondo.club website by integrating all 12 product screenshots in three strategic locations:

1. **ProductStory scenario cards** - Each of the 5 cards now displays a relevant screenshot below the "Met Rondo:" text, making the product tangible
2. **FeatureGallery section** - New dedicated section with all 12 screenshots organized in 6 category tabs (Leden, Contributie, VOG, Teams, Commissies, Tuchtzaken)
3. **Hero carousel** - Enhanced hero section with rotating set of 5 overview screenshots, auto-advancing every 4 seconds with smooth crossfade

All screenshots are clickable and open in a full-size lightbox overlay. Three separate lightbox implementations (ps-lightbox for ProductStory, fg-lightbox for FeatureGallery, lightbox for Hero) prevent namespace collisions.

## Tasks Completed

| # | Task | Commit | Files |
|---|------|--------|-------|
| 1 | Add screenshots to ProductStory scenario cards with lightbox | fce0322 | ProductStory.astro |
| 2 | Create FeatureGallery section with all 12 screenshots by category | 62460ac | FeatureGallery.astro, index.astro |
| 3 | Enhance hero with multiple rotating screenshots | 67ce1fd | Hero.astro |

## Implementation Details

### Task 1: ProductStory Screenshot Integration

Added screenshot mapping to each scenario card:
- "Een nieuw lid..." → screenshot-persoons-detail-scherm.png
- "Wie heeft er al een VOG?" → screenshot-vog-overzicht.png
- "Ouders met meerdere kinderen?" → screenshot-contributie-per-lid.png
- "Je wil een mailing sturen" → screenshot-team-detail.png
- "Niet iedereen hoeft alles te zien" → screenshot-commissie-detail.png

Screenshots styled with rounded corners, shadow, hover scale effect. Lightbox (ps-lightbox) triggered on click with close via X button, backdrop click, or Escape key. All screenshots use lazy loading.

### Task 2: FeatureGallery Section

Created new section with 6 category tabs organizing all 12 screenshots:
- **Leden**: ledenlijst, persoonsdetail
- **Contributie**: contributie-overzicht, contributie-per-lid
- **VOG**: vog-overzicht, vog-acties
- **Teams**: teams-overzicht, team-detail
- **Commissies**: commissie-overzicht, commissie-detail
- **Tuchtzaken**: tuchtzaken, persoons-detail-tucht

Tab navigation implemented with JavaScript (querySelectorAll<HTMLElement> for TypeScript compatibility). Active tab styled with electric-cyan background, inactive with slate-100. Horizontal scroll on mobile for tab overflow. Screenshots displayed in 2-column grid on desktop, single column on mobile. Each screenshot has Dutch caption and lightbox (fg-lightbox).

Placed between ProductStory and Origin sections for natural flow: see scenarios → see detailed screenshots → understand origin story.

### Task 3: Hero Carousel

Replaced single static screenshot with rotating carousel:
- 5 screenshots: leden-lijst, vog-overzicht, contributie-overzicht, teams-overzicht, commissie-overzicht
- Auto-rotate every 4 seconds with 0.6s crossfade transition
- Dot indicators below screenshot (8px circles, electric-cyan for active)
- Pause rotation on hover, resume on mouse leave
- Clicking dot jumps to that slide and resets timer
- First slide uses loading="eager", others "lazy"
- Respects prefers-reduced-motion (no auto-rotate if reduced motion detected)
- Lightbox shows current slide's image when opened

CSS changes: screenshot-frame now has position: relative, aspect-ratio: 16/10 to prevent layout shift. Hero slides absolutely positioned with opacity transitions.

## Verification

- `npm run build` succeeded without errors
- All 12 unique screenshots referenced in built index.html
- 5 ProductStory cards each contain their mapped screenshot
- FeatureGallery section present with 6 tab buttons and 12 screenshot items
- Hero contains 5 hero-slide elements and 5 hero-dot elements
- Page remains responsive on mobile (verified grid layouts and tab scroll)
- Lazy loading attributes applied correctly (eager for hero first slide, lazy for all others)

## Success Criteria Met

- [x] All 5 ProductStory cards have clickable screenshots below "Met Rondo:" text
- [x] FeatureGallery section displays all 12 screenshots in 6 categorized tabs
- [x] Hero cycles through 5 screenshots with crossfade animation and dot navigation
- [x] Every screenshot on the page opens in a lightbox when clicked
- [x] Build passes, no console errors, responsive on mobile

## Performance & Accessibility

- Lazy loading for all screenshots except hero first slide reduces initial page weight
- prefers-reduced-motion support: carousel doesn't auto-rotate if user has reduced motion preference
- All lightbox triggers and close buttons have proper aria-label attributes
- Keyboard support: Escape key closes lightboxes
- Aspect-ratio CSS prevents layout shift during image loading

## Deviations from Plan

None - plan executed exactly as written.

## Self-Check: PASSED

Created files verified:
```
FOUND: src/components/sections/FeatureGallery.astro
```

Modified files verified:
```
FOUND: src/components/sections/ProductStory.astro
FOUND: src/components/sections/Hero.astro
FOUND: src/pages/index.astro
```

Commits verified:
```
FOUND: fce0322
FOUND: 62460ac
FOUND: 67ce1fd
```

All files created/modified, all commits present, all 12 screenshots referenced in built HTML.
