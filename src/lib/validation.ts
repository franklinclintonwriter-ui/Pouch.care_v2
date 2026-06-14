/**
 * Lightweight runtime/data-integrity helpers. Used by tests and safe to call
 * in development to catch malformed content data early.
 */

/** Returns true if every item has a unique value for the given key. */
export function hasUniqueKeys<T>(items: T[], key: keyof T): boolean {
  const seen = new Set<unknown>();
  for (const item of items) {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
  }
  return true;
}

/** A slug must be lowercase, url-safe and non-empty. */
export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

/** ISO date (YYYY-MM-DD) validity check. */
export function isValidIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value);
  return !Number.isNaN(date.getTime());
}

/** Ensure no non-empty string field is missing across required keys. */
export function hasRequiredStrings<T>(item: T, keys: (keyof T)[]): boolean {
  return keys.every((key) => {
    const value = item[key];
    return typeof value === 'string' && value.trim().length > 0;
  });
}
