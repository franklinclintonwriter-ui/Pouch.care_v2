import type { LegalDocument, VerificationStatus } from '@/lib/types';

/**
 * Public-safe legal document registry.
 *
 * PRIVACY: These records contain only metadata and public-safe summaries.
 * Sensitive fields are listed in `maskedFields` purely to communicate that
 * they exist in the source document and are intentionally withheld. Raw
 * document scans must NEVER be added to /public — see README privacy policy.
 */
export const documents: LegalDocument[] = [
  {
    id: 'doc-incorporation',
    slug: 'certificate-of-incorporation',
    title: 'Certificate of Incorporation',
    category: 'Incorporation',
    issuingAuthority:
      'Registrar of Joint Stock Companies & Firms (RJSC), Bangladesh',
    entityName: 'Pouch Care International Ltd.',
    businessCategory: 'Private Limited Company',
    issueDate: '2025-06-18',
    issueDateLabel: '18 June 2025',
    validUntil: null,
    validUntilLabel: null,
    referenceLabel: 'Certificate No. C-202769/2025',
    status: 'verified',
    publicSummary:
      'Certifies that Pouch Care International Ltd. is incorporated under the Companies Act, 1994 as a private company limited by shares, with corporate legal personality from the date of incorporation.',
    disclosedFields: [
      { label: 'Entity', value: 'Pouch Care International Ltd.' },
      { label: 'Company type', value: 'Private company limited by shares' },
      { label: 'Incorporated under', value: 'the Companies Act, 1994' },
      { label: 'Certificate number', value: 'C-202769/2025' },
      { label: 'Date of incorporation', value: '18 June 2025' },
    ],
    maskedFields: [
      'Registrar signature',
      'Official seal & QR verification code',
      'Internal filing reference identifiers',
    ],
    featured: true,
  },
  {
    id: 'doc-moa-aoa',
    slug: 'memorandum-and-articles-of-association',
    title: 'Memorandum & Articles of Association',
    category: 'Constitution',
    issuingAuthority: 'RJSC, Bangladesh',
    entityName: 'Pouch Care International Ltd.',
    businessCategory: 'Corporate Constitution',
    issueDate: '2025-06-18',
    issueDateLabel: '18 June 2025',
    validUntil: null,
    validUntilLabel: null,
    referenceLabel: 'Constitutional documents (MOA/AOA)',
    status: 'verified',
    publicSummary:
      'Private company limited by shares with diversified objects covering trade, e-commerce, digital marketing, IT/ITES, agriculture, consultancy, and related operations. The MOA establishes the scope of business; the AOA sets out internal governance rules.',
    disclosedFields: [
      { label: 'Entity', value: 'Pouch Care International Ltd.' },
      { label: 'Structure', value: 'Limited by shares' },
      {
        label: 'Objects',
        value: 'Diversified — trade, digital, IT/ITES, agriculture, advisory',
      },
    ],
    maskedFields: [
      'Subscriber NID / personal identifiers',
      'Personal addresses of subscribers',
      'Share allotment personal details',
      'Subscriber signatures & witness information',
    ],
    featured: true,
  },
  {
    id: 'doc-trade-license-eximp',
    slug: 'trade-license-export-import',
    title: 'Trade License — Export Import',
    category: 'Licensing',
    issuingAuthority: '4 No Haluaghat Union Parishad',
    entityName: 'M/S Pouch Care Enterprise',
    businessCategory: 'Export Import',
    issueDate: '2024-11-07',
    issueDateLabel: '07 November 2024',
    validUntil: '2025-06-30',
    validUntilLabel: '30 June 2025',
    referenceLabel: 'Trade License (Export Import)',
    // Status is computed at render time when date-dependent; default reflects
    // the renewal cycle. See resolveDocumentStatus().
    status: 'renewal-required',
    statusIsDateDependent: true,
    publicSummary:
      'Trade license authorising export and import business activity for M/S Pouch Care Enterprise, issued by 4 No Haluaghat Union Parishad. Public preview shows masked, public-safe fields only.',
    disclosedFields: [
      { label: 'Entity', value: 'M/S Pouch Care Enterprise' },
      { label: 'Business type', value: 'Export Import' },
      { label: 'Issuing authority', value: '4 No Haluaghat Union Parishad' },
      { label: 'Issued', value: '07 November 2024' },
      { label: 'Valid until', value: '30 June 2025' },
    ],
    maskedFields: [
      'License holder personal NID',
      'Personal phone number',
      'Private residential address',
      'Holder signature & official seal',
    ],
    featured: true,
  },
];

/**
 * Resolve the public status of a document, accounting for date-dependent
 * licensing (e.g. trade licenses that require renewal after expiry).
 */
export function resolveDocumentStatus(
  doc: LegalDocument,
  now: Date = new Date(),
): VerificationStatus {
  if (doc.statusIsDateDependent && doc.validUntil) {
    const expiry = new Date(doc.validUntil);
    return now > expiry ? 'renewal-required' : 'active';
  }
  return doc.status;
}

export function getDocumentBySlug(slug: string): LegalDocument | undefined {
  return documents.find((d) => d.slug === slug);
}

export const documentCategories: {
  category: LegalDocument['category'];
  description: string;
}[] = [
  {
    category: 'Incorporation',
    description: 'Formation and legal personality of the company.',
  },
  {
    category: 'Constitution',
    description: 'Memorandum & Articles defining objects and governance.',
  },
  {
    category: 'Licensing',
    description: 'Operating licenses and sector authorisations.',
  },
  {
    category: 'Compliance',
    description: 'Statutory filings, returns and regulatory records.',
  },
  {
    category: 'Governance',
    description: 'Board, audit and accountability documentation.',
  },
];
