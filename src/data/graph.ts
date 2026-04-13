import {
  makeIds,
  buildWebSite,
  buildWebPage,
  buildPiece,
  assembleGraph,
  type GraphEntity,
} from '@jdevalk/seo-graph-core';
import type { Lang } from '../i18n/utils';

const SITE_URL = 'https://rondo.club';

export const ids = makeIds({
  siteUrl: SITE_URL,
  personUrl: 'https://joost.blog/',
});

export const RONDO_ORG_ID = `${SITE_URL}/#/schema.org/Organization/rondo`;

function asEntity(value: unknown): GraphEntity {
  return value as GraphEntity;
}

function buildOrganization(): GraphEntity {
  return asEntity(
    buildPiece({
      '@type': 'Organization',
      '@id': RONDO_ORG_ID,
      name: 'Rondo',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/rondo-logo.svg`,
        width: '512',
        height: '512',
      },
      founder: { '@id': ids.person },
      sameAs: ['https://github.com/jdevalk/rondo-club'],
    }),
  );
}

function buildJoost(): GraphEntity {
  return asEntity(
    buildPiece({
      '@type': 'Person',
      '@id': ids.person,
      name: 'Joost de Valk',
      url: 'https://joost.blog/',
      image: {
        '@type': 'ImageObject',
        '@id': ids.personImage,
        url: `${SITE_URL}/joost-de-valk-320.webp`,
        width: '320',
        height: '320',
        caption: 'Joost de Valk',
      },
      jobTitle: 'Founder',
      worksFor: { '@id': RONDO_ORG_ID },
      sameAs: [
        'https://joost.blog/',
        'https://www.linkedin.com/in/jdevalk/',
        'https://github.com/jdevalk',
      ],
      description:
        'Founder of Yoast SEO and Rondo. Builds software for sports clubs.',
      knowsAbout: [
        'SEO',
        'WordPress',
        'Open source',
        'Sports club administration',
      ],
    }),
  );
}

function buildSoftware(): GraphEntity {
  return asEntity(
    buildPiece({
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#/schema.org/SoftwareApplication/rondo`,
      name: 'Rondo',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Ledenadministratie voor sportverenigingen. Beheer leden, teams en planning op één plek.',
      url: SITE_URL,
      author: { '@id': RONDO_ORG_ID },
      publisher: { '@id': RONDO_ORG_ID },
      offers: {
        '@type': 'Offer',
        price: '250',
        priceCurrency: 'EUR',
      },
    }),
  );
}

function buildSiteEntity(lang: Lang): GraphEntity {
  return asEntity(
    buildWebSite(
      {
        url: `${SITE_URL}/`,
        name: 'Rondo',
        description:
          lang === 'en'
            ? 'Member management for sports clubs.'
            : 'Ledenadministratie voor sportverenigingen.',
        publisher: { '@id': RONDO_ORG_ID },
        inLanguage: lang === 'en' ? 'en-GB' : 'nl-NL',
      },
      ids,
    ),
  );
}

interface PageGraphInput {
  lang: Lang;
  url: string;
  name: string;
  description?: string;
  pageType?: 'WebPage' | 'ProfilePage' | 'CollectionPage';
  faq?: Array<{ question: string; answer: string }>;
}

export function buildPageGraph(input: PageGraphInput) {
  const { lang, url, name, description, pageType = 'WebPage', faq } = input;

  const webPage = asEntity(
    buildWebPage(
      {
        url,
        name,
        description,
        isPartOf: { '@id': ids.website },
        inLanguage: lang === 'en' ? 'en-GB' : 'nl-NL',
        about: { '@id': RONDO_ORG_ID },
      },
      ids,
      pageType,
    ),
  );

  const entities: GraphEntity[] = [
    buildSiteEntity(lang),
    buildOrganization(),
    buildJoost(),
    buildSoftware(),
    webPage,
  ];

  if (faq && faq.length > 0) {
    entities.push(
      asEntity(
        buildPiece({
          '@type': 'FAQPage',
          '@id': `${url}#faq`,
          isPartOf: { '@id': url },
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }),
      ),
    );
  }

  return assembleGraph(entities);
}
