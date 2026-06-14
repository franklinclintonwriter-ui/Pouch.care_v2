import Link from 'next/link';
import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PostCardProps {
  href: string;
  title: string;
  excerpt: string;
  category: string;
  dateLabel: string;
  readingTime?: string;
  featured?: boolean;
  image?: string;
}

/** Unified card for both Newsroom (NewsCard) and Insights (BlogCard). */
export function PostCard({
  href,
  title,
  excerpt,
  category,
  dateLabel,
  readingTime,
  featured,
  image,
}: PostCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-300/70 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-navy">
        {image ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent"
            />
          </>
        ) : (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(193,146,42,0.25),transparent_55%)]"
            />
            <span className="relative font-serif text-2xl font-semibold text-ivory/90">
              Pouch Care
            </span>
          </>
        )}
        <Badge variant="gold" className="absolute left-4 top-4">
          {category}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold leading-snug text-navy-900 group-hover:text-navy-700">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            {dateLabel}
          </span>
          {readingTime ? (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              {readingTime}
            </span>
          ) : (
            <ArrowUpRight
              className="size-4 text-gold-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
      {featured ? <span className="sr-only">Featured</span> : null}
    </Link>
  );
}
