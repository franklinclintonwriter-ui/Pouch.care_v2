import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Run on the Edge runtime so Cloudflare Pages (next-on-pages) can serve it.
export const runtime = 'edge';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Never expose private source documents to crawlers.
        disallow: ['/private/', '/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
