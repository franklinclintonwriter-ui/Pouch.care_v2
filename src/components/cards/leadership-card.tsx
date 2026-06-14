import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { LeaderProfile } from '@/lib/types';

export function LeadershipCard({ leader }: { leader: LeaderProfile }) {
  return (
    <Link
      href={`/leadership/${leader.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-300/70 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="flex items-center gap-4">
        <span
          className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-navy text-xl font-semibold text-gold-300"
          aria-hidden="true"
        >
          {leader.initials}
        </span>
        <div>
          <h3 className="text-lg font-semibold text-navy-900">{leader.name}</h3>
          <p className="text-sm font-medium text-gold-700">{leader.role}</p>
        </div>
      </div>
      <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {leader.summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">
        View profile
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </span>
    </Link>
  );
}
