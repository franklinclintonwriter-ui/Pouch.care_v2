import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { divisions } from '@/data/divisions';
import { leaders } from '@/data/leadership';
import { news } from '@/data/news';
import { insights } from '@/data/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    '',
    '/about',
    '/verification',
    '/documents',
    '/business',
    '/leadership',
    '/governance',
    '/investor-relations',
    '/newsroom',
    '/insights',
    '/careers',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/accessibility',
    '/sitemap',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const dynamicRoutes = [
    ...divisions.map((d) => `/business/${d.slug}`),
    ...leaders.map((l) => `/leadership/${l.slug}`),
    ...news.map((n) => `/newsroom/${n.slug}`),
    ...insights.map((i) => `/insights/${i.slug}`),
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
