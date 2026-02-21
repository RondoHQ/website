import type { Lang } from '../i18n/utils';
import { t } from '../i18n/translations';

export const siteMetadata = {
  title: "Rondo — Ledenadministratie voor sportverenigingen",
  description: "Niemand weet welke ledenlijst de juiste is. Met Rondo stroomt ledendata automatisch van Sportlink naar overal waar je het nodig hebt.",
  url: "https://rondo.club",
  ogImage: "https://rondo.club/og-image.png",
  locale: "nl_NL",
  siteName: "Rondo"
};

export function getLocalizedMetadata(lang: Lang) {
  return {
    title: t('site.title', lang),
    description: t('site.description', lang),
    url: lang === 'en' ? 'https://rondo.club/en/' : 'https://rondo.club',
    ogImage: "https://rondo.club/og-image.png",
    locale: lang === 'en' ? 'en_GB' : 'nl_NL',
    siteName: "Rondo"
  };
}
