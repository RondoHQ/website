import { createSchemaMap } from '@jdevalk/astro-seo-graph';

export const GET = createSchemaMap({
  siteUrl: 'https://rondo.club',
  entries: [
    {
      path: '/schema/site.json',
      lastModified: new Date(),
    },
  ],
});
