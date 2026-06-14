import { describe, it, expect } from 'vitest';
import {
  documents,
  resolveDocumentStatus,
  getDocumentBySlug,
} from './documents';

describe('resolveDocumentStatus', () => {
  it('returns the static status for non-date-dependent documents', () => {
    const incorporation = getDocumentBySlug('certificate-of-incorporation')!;
    expect(resolveDocumentStatus(incorporation)).toBe('verified');
  });

  it('marks a date-dependent license as renewal-required after expiry', () => {
    const license = getDocumentBySlug('trade-license-export-import')!;
    const afterExpiry = new Date('2025-12-01');
    expect(resolveDocumentStatus(license, afterExpiry)).toBe(
      'renewal-required',
    );
  });

  it('marks a date-dependent license as active before expiry', () => {
    const license = getDocumentBySlug('trade-license-export-import')!;
    const beforeExpiry = new Date('2025-01-01');
    expect(resolveDocumentStatus(license, beforeExpiry)).toBe('active');
  });
});

describe('document privacy guarantees', () => {
  it('never discloses obviously sensitive fields in disclosedFields', () => {
    const forbidden = /nid|passport|signature|phone|home address|qr/i;
    documents.forEach((doc) => {
      doc.disclosedFields.forEach((field) => {
        expect(forbidden.test(field.label)).toBe(false);
        expect(forbidden.test(field.value)).toBe(false);
      });
    });
  });
});
