---
phase: quick
plan: 1
type: execute
wave: 1
depends_on: []
files_modified:
  - src/components/ui/Button.astro
  - src/components/sections/Hero.astro
autonomous: true
must_haves:
  truths:
    - "Hero section shows two CTA buttons side by side"
    - "Secondary button links to https://demo.rondo.club"
    - "Demo credentials (demo/demo) are communicated near the button"
    - "Primary CTA remains visually dominant"
  artifacts:
    - path: "src/components/ui/Button.astro"
      provides: "outline variant for secondary CTA styling"
      contains: "outline"
    - path: "src/components/sections/Hero.astro"
      provides: "Demo CTA button next to primary CTA"
      contains: "demo.rondo.club"
  key_links:
    - from: "src/components/sections/Hero.astro"
      to: "src/components/ui/Button.astro"
      via: "Button component with outline variant"
      pattern: "variant.*outline"
---

<objective>
Add a secondary demo CTA button to the hero section that links to demo.rondo.club and communicates demo credentials.

Purpose: Let visitors immediately try Rondo without contacting anyone, reducing friction and increasing conversions.
Output: Updated Hero section with two CTA buttons and demo credential hint.
</objective>

<execution_context>
@/Users/joostdevalk/.claude/get-shit-done/workflows/execute-plan.md
@/Users/joostdevalk/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@src/components/sections/Hero.astro
@src/components/ui/Button.astro
@src/styles/global.css
</context>

<tasks>

<task type="auto">
  <name>Task 1: Add outline variant to Button component and add demo CTA to Hero</name>
  <files>src/components/ui/Button.astro, src/components/sections/Hero.astro</files>
  <action>
**Button.astro — Add outline variant:**

1. Add `'outline'` to the `variant` type union: `'primary' | 'secondary' | 'glass' | 'outline'`
2. Add outline variant class in `variantClasses`: `outline: 'btn-outline text-electric-cyan border-2 border-electric-cyan'`
3. Add `.btn-outline` styles in the `<style>` block:
   ```css
   .btn-outline {
     background: transparent;
     border: 2px solid #0891B2;
     color: #0891B2;
   }
   .btn-outline:hover {
     background: rgba(8, 145, 178, 0.08);
     transform: translateY(-2px);
     box-shadow: 0 10px 20px rgba(8, 145, 178, 0.15);
   }
   ```

**Hero.astro — Add demo CTA button:**

1. Wrap the existing `<Button>` and the new demo button in a flex container div:
   ```html
   <div class="hero-cta-group">
     <Button variant="primary" href="#product">
       Bekijk wat Rondo doet
     </Button>
     <Button variant="outline" href="https://demo.rondo.club" class="demo-btn">
       Probeer de demo
     </Button>
   </div>
   ```
2. Below the `hero-cta-group` div, add a small credential hint:
   ```html
   <p class="demo-hint">
     Inloggen met gebruikersnaam <strong>demo</strong> en wachtwoord <strong>demo</strong>
   </p>
   ```
3. Add styles for the new elements in the Hero `<style>` block:
   ```css
   .hero-cta-group {
     display: flex;
     flex-wrap: wrap;
     gap: 1rem;
     align-items: center;
   }

   .demo-hint {
     font-size: 0.8125rem;
     color: #94A3B8;
     margin-top: 0.75rem;
   }

   .demo-hint strong {
     color: #64748B;
     font-weight: 600;
   }
   ```

The outline button should open in the same tab (no target="_blank") since users may want to navigate back. The credential hint uses subtle gray tones to avoid visual competition with the CTAs.
  </action>
  <verify>
    Run `npm run build` in /Users/joostdevalk/Code/rondo/website — build succeeds with no errors. Then run `npm run dev` and visually confirm at localhost that:
    1. Two buttons appear side by side in the hero section
    2. "Probeer de demo" button has outline styling (transparent bg, cyan border)
    3. Credential hint text appears below the buttons
    4. Buttons stack properly on narrow viewports (flex-wrap handles this)
    5. The demo button links to https://demo.rondo.club
  </verify>
  <done>
    Hero section displays two CTA buttons: primary "Bekijk wat Rondo doet" (gradient fill) and outline "Probeer de demo" (cyan border, transparent background) linking to https://demo.rondo.club. Below the buttons, a subtle hint reads "Inloggen met gebruikersnaam demo en wachtwoord demo". Buttons wrap on mobile. Build passes cleanly.
  </done>
</task>

</tasks>

<verification>
- `npm run build` completes without errors
- Hero section renders two buttons side by side on desktop, stacked on mobile
- Primary button remains visually dominant (filled gradient vs outline)
- Demo button href points to https://demo.rondo.club
- Demo credentials are clearly communicated in hint text
</verification>

<success_criteria>
- Two CTA buttons visible in hero section with clear visual hierarchy
- Demo button links to https://demo.rondo.club
- Demo credentials (demo/demo) shown near the button
- No build errors, responsive layout works
</success_criteria>

<output>
After completion, create `.planning/quick/1-add-demo-cta-button-to-hero-section-link/1-SUMMARY.md`
</output>
