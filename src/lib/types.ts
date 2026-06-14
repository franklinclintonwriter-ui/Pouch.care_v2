/**
 * Shared domain types for Pouch Care International Ltd.
 *
 * PRIVACY NOTE: None of these types should ever carry raw sensitive personal
 * data (NID/passport numbers, personal phones/emails, signatures, QR codes,
 * private home addresses). Public-safe, masked, or metadata-only fields only.
 */

export type LucideIconName = string;

/** Verification / lifecycle status used across documents and badges. */
export type VerificationStatus =
  | 'verified'
  | 'active'
  | 'renewal-required'
  | 'archived'
  | 'pending';

export interface CompanyProfile {
  legalName: string;
  shortName: string;
  tradingNames: string[];
  companyType: string;
  jurisdiction: string;
  incorporatedUnder: string;
  incorporationDate: string; // ISO 8601
  incorporationDateLabel: string;
  certificateNumber: string;
  registrar: string;
  tagline: string;
  missionStatement: string;
  visionStatement: string;
  summary: string;
  objects: string[];
  publicContact: {
    email: string;
    addressLine: string;
    country: string;
    note: string;
  };
}

export interface LegalDocument {
  id: string;
  slug: string;
  title: string;
  category: DocumentCategory;
  issuingAuthority: string;
  entityName: string;
  businessCategory: string;
  issueDate: string | null; // ISO 8601
  issueDateLabel: string | null;
  validUntil: string | null; // ISO 8601
  validUntilLabel: string | null;
  referenceLabel: string; // e.g. masked certificate reference
  status: VerificationStatus;
  /** Status that depends on the current date being after `validUntil`. */
  statusIsDateDependent?: boolean;
  publicSummary: string;
  /** Public-safe fields that ARE shown. */
  disclosedFields: { label: string; value: string }[];
  /** Sensitive fields acknowledged but masked in the public preview. */
  maskedFields: string[];
  featured?: boolean;
}

export type DocumentCategory =
  | 'Incorporation'
  | 'Constitution'
  | 'Licensing'
  | 'Compliance'
  | 'Governance';

export interface BusinessDivision {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIconName;
  tagline: string;
  summary: string;
  heroStatement: string;
  legalBasis: string;
  services: string[];
  operatingModel: { title: string; description: string }[];
  industriesServed: string[];
  compliance: string[];
  roadmap: { phase: string; title: string; description: string }[];
  caseStudyPlaceholder: {
    title: string;
    description: string;
  };
  order: number;
}

export interface LeaderProfile {
  slug: string;
  name: string;
  role: string;
  shortRole: string;
  initials: string;
  summary: string;
  message: string;
  focusAreas: string[];
  responsibilities: string[];
  isBoardMember: boolean;
  order: number;
}

export interface TimelineItem {
  id: string;
  date: string; // ISO 8601 or year
  dateLabel: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: LucideIconName;
}

export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // ISO 8601
  dateLabel: string;
  readingTime: string;
  body: string[]; // paragraphs
}

export interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  author: string;
  date: string; // ISO 8601
  dateLabel: string;
  readingTime: string;
  body: string[];
}

export type InsightCategory =
  | 'Bangladesh Business'
  | 'Import & Export'
  | 'Digital Marketing'
  | 'E-commerce'
  | 'IT & ITES'
  | 'Agriculture'
  | 'Company Updates';

export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIconName;
  children?: NavigationItem[];
}

export interface NavGroup {
  label: string;
  href?: string;
  /** Columns of links shown in the desktop mega menu. */
  columns?: {
    heading: string;
    items: NavigationItem[];
  }[];
  featured?: {
    title: string;
    description: string;
    href: string;
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
