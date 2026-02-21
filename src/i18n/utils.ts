export type Lang = 'nl' | 'en';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'nl';
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === 'nl') return path;
  return `/en${path}`;
}

// Map Dutch page slugs to English equivalents and vice versa
const slugMap: Record<string, string> = {
  '/privacybeleid': '/privacy',
  '/voorwaarden': '/terms',
};
const reverseSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap).map(([k, v]) => [v, k])
);

/**
 * Returns the alternate language path for hreflang tags.
 */
export function getAlternatePaths(currentPath: string): { nl: string; en: string } {
  const isEnglish = currentPath.startsWith('/en');
  if (isEnglish) {
    const enPath = currentPath.replace(/^\/en/, '') || '/';
    const nlPath = reverseSlugMap[enPath] || enPath;
    return { nl: nlPath, en: currentPath };
  }
  const enSlug = slugMap[currentPath] || currentPath;
  return {
    nl: currentPath,
    en: `/en${enSlug === '/' ? '/' : enSlug}`,
  };
}
