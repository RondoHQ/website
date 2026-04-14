import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import seoGraph from '@jdevalk/astro-seo-graph/integration';

// Only submit to IndexNow from Cloudflare Pages or when explicitly opted in,
// so local builds don't keep pinging the endpoint.
const isProdBuild = !!process.env.CF_PAGES || process.env.INDEXNOW === '1';
const indexNowConfig = isProdBuild
  ? {
      key: '175c547dd7d29e4d6a36c4e40014aa31',
      host: 'rondo.club',
      siteUrl: 'https://rondo.club',
    }
  : undefined;

export default defineConfig({
  site: 'https://rondo.club',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'always'
  },
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: true,
      policy: [
        {
          userAgent: '*',
          allow: '/'
        }
      ],
      transform(content) {
        return `${content.trimEnd()}\nSchemamap: https://rondo.club/schemamap.xml\n`;
      },
    }),
    seoGraph({
      validateH1: true,
      validateUniqueMetadata: true,
      validateImageAlt: true,
      // Relax title min to 15 — our "Page — Rondo" brand pattern
      // is legitimate for non-article pages. Description default stays.
      validateMetadataLength: {
        title: { min: 15, max: 65 },
        description: { min: 70, max: 200 },
      },
      validateInternalLinks: true,
      indexNow: indexNowConfig,
      llmsTxt: {
        title: 'Rondo',
        siteUrl: 'https://rondo.club',
        summary: 'Ledenadministratie voor sportverenigingen. Member administration software for sports clubs.',
      },
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['mini.local']
    }
  }
});
