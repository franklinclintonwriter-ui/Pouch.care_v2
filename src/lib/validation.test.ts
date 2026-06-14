import { describe, it, expect } from 'vitest';
import {
  hasUniqueKeys,
  isValidSlug,
  isValidIsoDate,
  hasRequiredStrings,
} from './validation';
import { divisions } from '@/data/divisions';
import { leaders } from '@/data/leadership';
import { news } from '@/data/news';
import { insights } from '@/data/insights';
import { documents } from '@/data/documents';

describe('validation helpers', () => {
  it('detects unique keys', () => {
    expect(hasUniqueKeys([{ id: 'a' }, { id: 'b' }], 'id')).toBe(true);
    expect(hasUniqueKeys([{ id: 'a' }, { id: 'a' }], 'id')).toBe(false);
  });

  it('validates slugs', () => {
    expect(isValidSlug('trading-import-export')).toBe(true);
    expect(isValidSlug('Bad Slug')).toBe(false);
    expect(isValidSlug('')).toBe(false);
  });

  it('validates ISO dates', () => {
    expect(isValidIsoDate('2025-06-18')).toBe(true);
    expect(isValidIsoDate('18-06-2025')).toBe(false);
    expect(isValidIsoDate('not-a-date')).toBe(false);
  });

  it('checks required string fields', () => {
    expect(hasRequiredStrings({ a: 'x', b: 'y' }, ['a', 'b'])).toBe(true);
    expect(hasRequiredStrings({ a: 'x', b: '' }, ['a', 'b'])).toBe(false);
  });
});

describe('content data integrity', () => {
  it('all divisions have unique, valid slugs', () => {
    expect(hasUniqueKeys(divisions, 'slug')).toBe(true);
    divisions.forEach((d) => expect(isValidSlug(d.slug)).toBe(true));
  });

  it('all leaders have unique, valid slugs', () => {
    expect(hasUniqueKeys(leaders, 'slug')).toBe(true);
    leaders.forEach((l) => expect(isValidSlug(l.slug)).toBe(true));
  });

  it('news + insights have unique slugs and valid dates', () => {
    expect(hasUniqueKeys(news, 'slug')).toBe(true);
    expect(hasUniqueKeys(insights, 'slug')).toBe(true);
    [...news, ...insights].forEach((p) => {
      expect(isValidSlug(p.slug)).toBe(true);
      expect(isValidIsoDate(p.date)).toBe(true);
    });
  });

  it('documents have unique ids and required public-safe fields', () => {
    expect(hasUniqueKeys(documents, 'id')).toBe(true);
    documents.forEach((doc) => {
      expect(
        hasRequiredStrings(doc, [
          'title',
          'issuingAuthority',
          'entityName',
          'publicSummary',
        ]),
      ).toBe(true);
      // Privacy guarantee: masked fields must be declared for every record.
      expect(doc.maskedFields.length).toBeGreaterThan(0);
    });
  });
});
