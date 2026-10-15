# Figma website implementation

Reference: [Rondo homepage, frame 4031:955](https://www.figma.com/design/vdG39pyXrS4SFjHyiEfJuz/rondo-website?node-id=4031-955).

The homepage and shared site components use Figtree, the reference palette, pill buttons, the restrained header, gradient-topped role cards, and alternating product stories. Exact Figma assets are stored in `public/design/`; their source nodes and hashes are recorded in `figma-assets.json`. Browser chrome in the source frame is context, not site content. The same styles apply to Dutch and English routes, role pages, contact forms, and legal pages.

## Intentional adaptations

- Current product copy and digital membership pass terminology remain authoritative. Existing ten role paths and all additional product stories are retained, so the page is longer than the six-role Figma reference.
- The supplied committee screenshot replaces the rotating hero slideshow; the existing gallery retains all screenshot categories and enlargement controls. The hero screenshot opens a native modal dialog with Escape dismissal and focus restoration.
- Header navigation collapses at 1100px; role cards become two columns, then one at 600px. The homepage hero and product story rows stack below 900px. Role-page heroes stack below 960px.
- Mobile decorative artwork stays at the right edge to keep text on a solid teal surface.
- The Figma design has no mobile or secondary-page layouts; these are responsive extensions of its typography, colors, surfaces and shared components.

## Fonts and assets

Figtree regular was downloaded from Google Fonts and is self-hosted as `public/fonts/figtree-400.ttf`. Its SIL Open Font License is included alongside it. Existing self-hosted Figtree 600/700/800 fonts are reused. No temporary Figma asset URLs ship in the implementation.

## Validation and preview

`npm run build` checks Astro/TypeScript and generates all 31 pages, including internal links, headings, metadata and image-alt checks. Local preview: `npm run preview -- --host 127.0.0.1 --port 4322`.

Browser checks cover desktop and mobile Dutch/English homepages, role pages, contact and legal pages, no horizontal overflow on six representative routes at 320px, mobile menu/Escape dismissal, hero dialog/focus return, FAQ expansion and gallery tab selection. The contact form was inspected without submitting any message. Production deployment remains pending user approval.
