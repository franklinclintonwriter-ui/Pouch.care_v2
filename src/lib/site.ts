import { company } from '@/data/company';

/** Canonical site URL, configurable via env for different deployments. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.pouchcare.com'
).replace(/\/$/, '');

export const siteConfig = {
  name: company.legalName,
  shortName: company.shortName,
  url: SITE_URL,
  description: company.summary,
  locale: 'en_US',
  twitter: '@pouchcare',
  ogImage: `${SITE_URL}/api/og`,
};

export type SiteConfig = typeof siteConfig;
