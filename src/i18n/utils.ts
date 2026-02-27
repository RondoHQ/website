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
  '/voor-secretaris': '/for-secretary',
  '/voor-penningmeester': '/for-treasurer',
  '/voor-toegang': '/for-gate-volunteer',
  '/voor-bestuur-ict': '/for-board-it',
  '/voor-ledenadministratie': '/for-member-administration',
  '/voor-communicatie': '/for-communication',
};
const reverseSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap).map(([k, v]) => [v, k])
);

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path || '/';
}

function withTrailingSlash(path: string): string {
  if (path === '/') return '/';
  return `${path}/`;
}

/**
 * Returns the alternate language path for hreflang tags.
 */
export function getAlternatePaths(currentPath: string): { nl: string; en: string } {
  const normalizedCurrent = normalizePath(currentPath);
  const isEnglish = normalizedCurrent.startsWith('/en');
  if (isEnglish) {
    const enPath = normalizedCurrent.replace(/^\/en/, '') || '/';
    const nlPath = reverseSlugMap[enPath] || enPath;
    return {
      nl: withTrailingSlash(normalizePath(nlPath)),
      en: withTrailingSlash(normalizedCurrent),
    };
  }
  const enSlug = slugMap[normalizedCurrent] || normalizedCurrent;
  return {
    nl: withTrailingSlash(normalizedCurrent),
    en: enSlug === '/' ? '/en/' : withTrailingSlash(`/en${enSlug}`),
  };
}
