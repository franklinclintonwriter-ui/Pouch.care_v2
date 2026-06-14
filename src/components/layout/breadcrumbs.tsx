import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd, type BreadcrumbEntry } from '@/lib/seo';
import { cn } from '@/lib/utils';

interface BreadcrumbsProps {
  entries: BreadcrumbEntry[];
  invert?: boolean;
  className?: string;
}

/** Accessible breadcrumb trail with matching BreadcrumbList JSON-LD. */
export function Breadcrumbs({ entries, invert, className }: BreadcrumbsProps) {
  const all: BreadcrumbEntry[] = [{ name: 'Home', path: '/' }, ...entries];

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <SEOJsonLd data={breadcrumbJsonLd(all)} />
      <ol
        className={cn(
          'flex flex-wrap items-center gap-1.5 text-sm',
          invert ? 'text-ivory/70' : 'text-muted-foreground',
        )}
      >
        {all.map((entry, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={entry.path} className="flex items-center gap-1.5">
              {i === 0 ? (
                <Link
                  href={entry.path}
                  className="inline-flex items-center gap-1 hover:text-gold-600"
                >
                  <Home className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">{entry.name}</span>
                </Link>
              ) : isLast ? (
                <span
                  aria-current="page"
                  className={cn(
                    'font-medium',
                    invert ? 'text-ivory' : 'text-navy-800',
                  )}
                >
                  {entry.name}
                </span>
              ) : (
                <Link href={entry.path} className="hover:text-gold-600">
                  {entry.name}
                </Link>
              )}
              {!isLast && (
                <ChevronRight
                  className="size-3.5 opacity-50"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
