---
phase: quick-2
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - src/components/sections/ProductStory.astro
  - src/components/sections/FeatureGallery.astro
  - src/components/sections/Hero.astro
  - src/pages/index.astro
autonomous: true
must_haves:
  truths:
    - "Each of the 5 scenario cards shows a relevant screenshot below the Met Rondo text"
    - "Screenshots in cards are clickable and open in a lightbox at full size"
    - "A new feature gallery section shows all 12 screenshots organized by category"
    - "The hero shows multiple screenshots instead of just one"
    - "All screenshots are responsive and load lazily (except hero)"
  artifacts:
    - path: "src/components/sections/ProductStory.astro"
      provides: "Scenario cards with embedded screenshots and lightbox"
    - path: "src/components/sections/FeatureGallery.astro"
      provides: "New section with all 12 screenshots organized by category"
    - path: "src/components/sections/Hero.astro"
      provides: "Updated hero with multiple screenshot display"
    - path: "src/pages/index.astro"
      provides: "FeatureGallery imported and placed between ProductStory and Origin"
  key_links:
    - from: "src/pages/index.astro"
      to: "src/components/sections/FeatureGallery.astro"
      via: "Astro component import"
      pattern: "import FeatureGallery"
---

<objective>
Integrate app screenshots throughout the rondo.club website: add screenshots to the 5 ProductStory scenario cards, create a new feature gallery section with all 12 screenshots organized by category, and enhance the hero with multiple screenshots.

Purpose: Screenshots provide visual proof of Rondo's capabilities, making the product tangible for prospects evaluating the software. This transforms the site from text-heavy descriptions to a visual, compelling product showcase.
Output: Updated ProductStory with per-card screenshots, new FeatureGallery section, enhanced Hero with multiple screenshots.
</objective>

<execution_context>
@/Users/joostdevalk/.claude/get-shit-done/workflows/execute-plan.md
@/Users/joostdevalk/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@src/pages/index.astro
@src/components/sections/ProductStory.astro
@src/components/sections/Hero.astro
@src/components/ui/Card.astro
@src/styles/global.css
</context>

<tasks>

<task type="auto">
  <name>Task 1: Add screenshots to ProductStory scenario cards with lightbox</name>
  <files>src/components/sections/ProductStory.astro</files>
  <action>
Update ProductStory.astro to add a screenshot image below the "Met Rondo:" paragraph in each of the 5 scenario cards. Each screenshot should be:
- Wrapped in a `<button>` with class `card-screenshot-trigger` and a `data-screenshot` attribute containing the image path (for lightbox functionality)
- Using the same visual treatment as the hero screenshot frame (rounded corners, shadow, hover scale effect, cursor: zoom-in)
- Using `loading="lazy"` for performance
- Placed after the second `<p>` (the "Met Rondo:" paragraph), still inside the Card slot content

Screenshot mapping (use these exact filenames from /public/):
1. "Een nieuw lid..." -> `/screenshot-persoons-detail-scherm.png` alt="Rondo Club persoonsdetail scherm"
2. "Wie heeft er al een VOG?" -> `/screenshot-vog-overzicht.png` alt="VOG overzicht met statusbadges"
3. "Ouders met meerdere kinderen?" -> `/screenshot-contributie-per-lid.png` alt="Contributie per lid met gezinskorting"
4. "Je wil een mailing sturen" -> `/screenshot-team-detail.png` alt="Team detail met ledengroepen"
5. "Niet iedereen hoeft alles te zien" -> `/screenshot-commissie-detail.png` alt="Commissie detail met toegangsbeheer"

Add a shared lightbox at the bottom of the component (same pattern as Hero.astro lightbox but with dynamic image src). Use a single lightbox element whose `src` gets updated via JS when any card screenshot is clicked.

Add a `<script>` block:
- Query all `.card-screenshot-trigger` buttons
- On click, read `data-screenshot` attribute, set the lightbox img src and show lightbox
- Include close on X button, click backdrop, Escape key (same as Hero pattern)

Add scoped `<style>` for:
- `.card-screenshot-trigger`: border: none, padding: 0, width: 100%, border-radius: 0.5rem, overflow: hidden, cursor: zoom-in, margin-top: 1rem, box-shadow: 0 4px 12px rgba(0,0,0,0.1), transition: transform 0.2s ease, box-shadow 0.2s ease, display: block, background: #F8FAFC
- `.card-screenshot-trigger:hover`: transform: scale(1.02), box-shadow: 0 8px 24px rgba(0,0,0,0.15)
- `.card-screenshot-trigger img`: width: 100%, height: auto, display: block, border-radius: 0.5rem
- Reuse the same lightbox styles from Hero.astro (`.ps-lightbox`, `.ps-lightbox.active`, `.ps-lightbox-img`, `.ps-lightbox-close`) - prefix with `ps-` to avoid collision with Hero lightbox
  </action>
  <verify>Run `npm run build` from /Users/joostdevalk/Code/rondo/website — build succeeds with no errors. Visually inspect that each Card in the built HTML contains an img tag with the correct screenshot path.</verify>
  <done>All 5 scenario cards display their mapped screenshot below the "Met Rondo:" text. Screenshots are clickable and open in a lightbox overlay. Lightbox closes on X, backdrop click, or Escape.</done>
</task>

<task type="auto">
  <name>Task 2: Create FeatureGallery section with all 12 screenshots by category</name>
  <files>src/components/sections/FeatureGallery.astro, src/pages/index.astro</files>
  <action>
Create a new file `src/components/sections/FeatureGallery.astro` with a category-based screenshot gallery.

**Section structure:**
- Section with `id="features"` and consistent padding (`py-20`)
- Max width container (`max-w-7xl mx-auto px-4`)
- Section header: h2 with `gradient-text` class: "Rondo in beeld", subtitle paragraph: "Bekijk hoe Rondo Club eruitziet. Klik op een scherm om te vergroten."
- Category tabs implemented as a horizontal button bar (not JS tabs - use CSS scroll for mobile):
  - 6 category buttons: Leden, Contributie, VOG, Teams, Commissies, Tuchtzaken
  - Active state: bg electric-cyan, white text. Inactive: bg slate-100, slate-600 text, hover slate-200
  - Default active: "Leden"
  - On click: show that category's screenshots, hide others. Use `data-category` attributes.
- Screenshot grid below tabs: `grid grid-cols-1 md:grid-cols-2 gap-6`
- Each screenshot in a card-like container with:
  - Rounded corners (1rem), shadow, hover scale effect
  - A small caption below the image in slate-500 text
  - Clickable to open lightbox (same pattern as Task 1 - shared lightbox at bottom)

**Category -> screenshot mapping with Dutch captions:**
- Leden:
  - screenshot-leden-lijst.png -> "Ledenlijst met zoeken en filteren"
  - screenshot-persoons-detail-scherm.png -> "Compleet persoonsprofiel"
- Contributie:
  - screenshot-contributie-overzicht.png -> "Contributie-overzicht per seizoen"
  - screenshot-contributie-per-lid.png -> "Contributie per lid met gezinskorting"
- VOG:
  - screenshot-vog-overzicht.png -> "VOG-overzicht met statusbadges"
  - screenshot-vog-acties.png -> "VOG-acties en herinneringen"
- Teams:
  - screenshot-teams-overzicht.png -> "Alle teams in een overzicht"
  - screenshot-team-detail.png -> "Team detail met spelers en begeleiders"
- Commissies:
  - screenshot-commissie-overzicht.png -> "Commissies en werkgroepen"
  - screenshot-commissie-detail.png -> "Commissie samenstelling en rollen"
- Tuchtzaken:
  - screenshot-tuchtzaken.png -> "Tuchtzaken overzicht"
  - screenshot-persoons-detail-scherm-tucht.png -> "Tuchtzaak detail bij persoon"

**JavaScript (in `<script>` block):**
- On tab click: add `active` class to clicked tab, remove from others
- Show screenshots matching `data-category`, hide others (use display none/grid)
- Initialize with "Leden" category visible

**Styling (scoped `<style>`):**
- Tab bar: flex, gap-2, overflow-x-auto on mobile, padding-bottom 2px (scrollbar space), -webkit-overflow-scrolling: touch
- Tab buttons: px-4 py-2, rounded-full, font-semibold, text-sm, white-space: nowrap, border: none, cursor: pointer, transition: all 0.2s
- Active tab: background #0891B2, color white
- Inactive tab: background #F1F5F9, color #475569, hover background #E2E8F0
- Screenshot containers: same card-like frame as hero screenshot (rounded, shadow, hover scale)
- Caption: text-sm, color slate-500, margin-top 0.5rem, text-center
- Category grids: use `[data-category]` attribute with display:none/grid toggling
- Lightbox: same pattern as Task 1 (ps-lightbox prefix or fg-lightbox to avoid collision)

**In `src/pages/index.astro`:**
- Import FeatureGallery
- Place it between `<ProductStory />` and `<Origin />` in the main content
  </action>
  <verify>Run `npm run build` from /Users/joostdevalk/Code/rondo/website — build succeeds. Check that the built index.html contains the FeatureGallery section with all 12 screenshot image references and the 6 category tabs.</verify>
  <done>New FeatureGallery section renders between ProductStory and Origin. Shows 6 category tabs. Clicking a tab shows that category's screenshots in a 2-column grid. Each screenshot is clickable and opens in a lightbox. Default tab is "Leden".</done>
</task>

<task type="auto">
  <name>Task 3: Enhance hero with multiple rotating screenshots</name>
  <files>src/components/sections/Hero.astro</files>
  <action>
Update Hero.astro to show a stack of screenshots that auto-rotates, replacing the single static screenshot.

**Visual approach: stacked card rotation**
Keep the existing `.hero-screenshot` container. Inside, show the current screenshot in the same frame style, but cycle through multiple screenshots with a smooth crossfade.

**Screenshots to rotate (5 diverse views):**
1. `/screenshot-leden-lijst.png` alt="Rondo Club ledenlijst"
2. `/screenshot-vog-overzicht.png` alt="VOG tracking overzicht"
3. `/screenshot-contributie-overzicht.png` alt="Contributie overzicht"
4. `/screenshot-teams-overzicht.png` alt="Teams overzicht"
5. `/screenshot-commissie-overzicht.png` alt="Commissies overzicht"

**Implementation:**
- Replace the single `<img>` inside `.screenshot-frame` with 5 stacked images, all absolutely positioned within the frame
- Each image has class `hero-slide` and a `data-index` attribute (0-4)
- Only the active slide has `opacity: 1`, others `opacity: 0` with `transition: opacity 0.6s ease`
- The `.screenshot-frame` button should keep its lightbox trigger behavior, but the lightbox img src should update to match the currently visible slide

**Add small dot indicators below the screenshot frame:**
- 5 small dots (8px circles), horizontal flex, centered, gap 8px, margin-top 1rem
- Active dot: bg electric-cyan. Inactive: bg slate-300
- Dots are also clickable to jump to that slide

**JavaScript updates:**
- Auto-rotate every 4 seconds using setInterval
- Pause rotation on hover over `.hero-screenshot` container
- Resume on mouse leave
- On dot click: go to that slide, reset timer
- On screenshot-frame click: open lightbox with current slide's src
- Update the lightbox img src to match current slide before showing
- Respect `prefers-reduced-motion`: if reduced motion, do NOT auto-rotate, just show first image statically (dots still work for manual navigation)

**CSS updates:**
- `.screenshot-frame`: add `position: relative`, `aspect-ratio: 16/10` (to prevent layout shift while images load), `overflow: hidden`
- `.hero-slide`: position: absolute, inset: 0, width: 100%, height: 100%, object-fit: cover, opacity: 0, transition: opacity 0.6s ease
- `.hero-slide.active`: opacity: 1
- `.hero-dots`: display: flex, justify-content: center, gap: 0.5rem, margin-top: 1rem
- `.hero-dot`: width: 8px, height: 8px, border-radius: 50%, border: none, padding: 0, cursor: pointer, background: #CBD5E1, transition: background 0.2s
- `.hero-dot.active`: background: #0891B2
- All hero slides use `loading="lazy"` EXCEPT the first one (index 0) which uses `loading="eager"` since it's above the fold

**Keep the existing lightbox markup** but update the script to set `lightbox-img.src` to the current slide's src when opening.
  </action>
  <verify>Run `npm run build` from /Users/joostdevalk/Code/rondo/website — build succeeds. Check the built Hero HTML contains all 5 screenshot images and the dot navigation elements.</verify>
  <done>Hero displays a rotating set of 5 screenshots with smooth crossfade every 4 seconds. Dot indicators show current slide and allow manual navigation. Rotation pauses on hover. Clicking the screenshot opens the current image in lightbox. Respects prefers-reduced-motion.</done>
</task>

</tasks>

<verification>
- `npm run build` succeeds without errors
- All 12 screenshots from /public/ are referenced somewhere on the page
- 5 scenario cards each show their mapped screenshot
- FeatureGallery section shows between ProductStory and Origin with tab navigation
- Hero rotates through 5 screenshots with dot navigation
- All lightboxes function (open on click, close on X/backdrop/Escape)
- Page remains responsive on mobile (screenshots scale, tabs scroll horizontally)
- No layout shift from lazy-loaded images (aspect ratios maintained)
</verification>

<success_criteria>
- All 5 ProductStory cards have clickable screenshots below "Met Rondo:" text
- FeatureGallery section displays all 12 screenshots in 6 categorized tabs
- Hero cycles through 5 screenshots with crossfade animation and dot navigation
- Every screenshot on the page opens in a lightbox when clicked
- Build passes, no console errors, responsive on mobile
</success_criteria>

<output>
After completion, create `.planning/quick/2-add-screenshots-to-scenario-cards-featur/2-SUMMARY.md`
</output>
