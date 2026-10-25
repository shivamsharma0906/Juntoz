/**
 * URL and Instagram Normalization Utilities
 */

const TRACKING_PARAMS = new Set([
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'fbclid',
  'gclid',
  'igshid',
  'mc_eid',
  '_ga',
  '_gl',
  'msclkid',
  'dclid',
]);

/**
 * Normalizes a website or page URL:
 * - Prepends https:// if no scheme is provided
 * - Strips UTM and advertising tracking parameters
 * - Cleans trailing slash when appropriate
 */
export function normalizeWebsiteUrl(raw: string): string {
  if (!raw) return '';
  let str = raw.trim();
  if (!str) return '';

  if (!/^https?:\/\//i.test(str)) {
    str = `https://${str}`;
  }

  try {
    const url = new URL(str);

    // Remove known tracking query parameters
    const toDelete: string[] = [];
    url.searchParams.forEach((_, key) => {
      const lower = key.toLowerCase();
      if (TRACKING_PARAMS.has(lower) || lower.startsWith('utm_')) {
        toDelete.push(key);
      }
    });

    toDelete.forEach((param) => url.searchParams.delete(param));

    let clean = url.toString();
    // Remove trailing slash if only the root path remains
    if (clean.endsWith('/') && url.pathname === '/') {
      clean = clean.slice(0, -1);
    }
    return clean;
  } catch {
    return str;
  }
}

/**
 * Normalizes an Instagram input to '@handle':
 * Accepts:
 *   - '@hudabeauty' -> '@hudabeauty'
 *   - 'hudabeauty' -> '@hudabeauty'
 *   - 'https://instagram.com/hudabeauty' -> '@hudabeauty'
 *   - 'https://www.instagram.com/hudabeauty/?hl=en' -> '@hudabeauty'
 */
export function normalizeInstagramHandle(raw: string): string {
  if (!raw) return '';
  const str = raw.trim();
  if (!str) return '';

  // Handle full URL inputs
  try {
    const candidateUrl = str.startsWith('http') ? str : `https://${str}`;
    const url = new URL(candidateUrl);
    if (url.hostname.includes('instagram.com')) {
      const segments = url.pathname.split('/').filter(Boolean);
      if (segments.length > 0) {
        const potentialHandle = segments[0];
        // Exclude system paths
        if (!['p', 'reel', 'reels', 'stories', 'explore', 'direct'].includes(potentialHandle.toLowerCase())) {
          return `@${potentialHandle.replace(/^@/, '')}`;
        }
      }
    }
  } catch {
    // Not a valid URL, continue to regex cleanup
  }

  // Handle direct handle or path fragments
  const cleaned = str
    .replace(/^https?:\/\/(www\.)?instagram\.com\/?/i, '')
    .replace(/[/?#].*$/, '')
    .trim();

  if (!cleaned) return '';
  return `@${cleaned.replace(/^@/, '')}`;
}

/**
 * Parses and deduplicates raw text containing multiple URLs or domains
 * (split by newlines, commas, or spaces)
 */
export function parseBulkUrls(rawText: string): string[] {
  if (!rawText || !rawText.trim()) return [];

  const tokens = rawText
    .split(/[\n,;\s]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);

  const normalizedSet = new Set<string>();

  for (const token of tokens) {
    const normalized = normalizeWebsiteUrl(token);
    if (normalized) {
      normalizedSet.add(normalized);
    }
  }

  return Array.from(normalizedSet);
}
