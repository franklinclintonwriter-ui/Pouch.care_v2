import type { Metadata } from 'next';
import { SITE_URL, siteConfig } from './site';

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
  keywords?: string[];
  /** Absolute or root-relative image path to use for OG/Twitter cards. */
  image?: string;
}

/** Build consistent, SEO-complete metadata for a page. */
export function buildMetadata({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
  authors,
  keywords,
  image,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`
    : `${SITE_URL}/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    authors: authors?.map((name) => ({ name })),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

/** Organization JSON-LD structured data. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    foundingDate: '2025-06-18',
    foundingLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressCountry: 'BD' },
    },
    description: siteConfig.description,
    identifier: 'C-202769/2025',
  };
}

/** WebSite JSON-LD structured data. */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: SITE_URL,
    inLanguage: 'en',
  };
}

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

/** BreadcrumbList JSON-LD structured data. */
export function breadcrumbJsonLd(entries: BreadcrumbEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: entries.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: `${SITE_URL}${entry.path === '/' ? '' : entry.path}`,
    })),
  };
}

/** Article JSON-LD structured data for news/insights. */
export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    author: { '@type': 'Organization', name: input.author },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.svg` },
    },
    mainEntityOfPage: `${SITE_URL}${input.path}`,
  };
}
