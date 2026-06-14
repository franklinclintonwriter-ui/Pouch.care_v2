import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Icon } from '@/components/ui/icon';
import type { BusinessDivision } from '@/lib/types';

export function BusinessDivisionCard({
  division,
}: {
  division: BusinessDivision;
}) {
  return (
    <Link
      href={`/business/${division.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-300/70 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="flex items-center justify-between">
        <span className="flex size-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-gold-50 group-hover:text-gold-700">
          <Icon name={division.icon} className="size-6" />
        </span>
        <ArrowUpRight
          className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-navy-900">
        {division.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {division.summary}
      </p>
      <span className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">
        Explore division
      </span>
    </Link>
  );
}
