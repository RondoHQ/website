import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import seoGraph from '@jdevalk/astro-seo-graph/integration';

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
      ]
    }),
    seoGraph({
      validateH1: true,
      validateDuplicateMeta: true,
      validateSchema: true,
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['mini.local']
    }
  }
});
