import { Check, Loader2, Circle } from 'lucide-react';
import type { TimelineItem } from '@/lib/types';
import { cn } from '@/lib/utils';

const statusMeta = {
  completed: {
    label: 'Completed',
    Icon: Check,
    dot: 'bg-emerald text-white [background-color:hsl(var(--emerald))]',
    text: 'text-emerald-700 [color:hsl(var(--emerald))]',
  },
  'in-progress': {
    label: 'In progress',
    Icon: Loader2,
    dot: 'bg-gold-500 text-navy-900',
    text: 'text-gold-700',
  },
  planned: {
    label: 'Planned',
    Icon: Circle,
    dot: 'bg-navy-100 text-navy-500',
    text: 'text-muted-foreground',
  },
} as const;

export function Timeline({
  items,
  invert,
}: {
  items: TimelineItem[];
  invert?: boolean;
}) {
  return (
    <ol className="relative space-y-8 pl-2">
      <span
        aria-hidden="true"
        className={cn(
          'absolute bottom-2 left-[15px] top-2 w-px',
          invert ? 'bg-white/15' : 'bg-border',
        )}
      />
      {items.map((item) => {
        const meta = statusMeta[item.status];
        return (
          <li key={item.id} className="relative pl-12">
            <span
              className={cn(
                'absolute left-0 top-0 flex size-8 items-center justify-center rounded-full ring-4',
                meta.dot,
                invert ? 'ring-navy-950' : 'ring-background',
              )}
            >
              <meta.Icon className="size-4" aria-hidden="true" />
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span
                className={cn(
                  'text-xs font-semibold uppercase tracking-[0.14em]',
                  invert ? 'text-gold-300' : 'text-gold-700',
                )}
              >
                {item.dateLabel}
              </span>
              <span className={cn('text-xs font-medium', meta.text)}>
                · {meta.label}
              </span>
            </div>
            <h3
              className={cn(
                'mt-1 text-base font-semibold',
                invert ? 'text-ivory' : 'text-navy-900',
              )}
            >
              {item.title}
            </h3>
            <p
              className={cn(
                'mt-1 text-sm leading-relaxed',
                invert ? 'text-ivory/65' : 'text-muted-foreground',
              )}
            >
              {item.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
