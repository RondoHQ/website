import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://rondo.club',
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
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['mini.local']
    }
  }
});
