import { Icon } from '@/components/ui/icon';
import type { StatItem } from '@/lib/types';
import { cn } from '@/lib/utils';

export function StatsCard({
  stat,
  invert,
}: {
  stat: StatItem;
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1',
        invert
          ? 'border-white/10 bg-white/5 hover:border-white/20'
          : 'border-border bg-card shadow-soft hover:border-gold-300/70 hover:shadow-elevated',
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-gold transition-transform duration-300 group-hover:scale-x-100"
      />
      <span
        className={cn(
          'flex size-10 items-center justify-center rounded-lg',
          invert ? 'bg-white/10 text-gold-300' : 'bg-gold-50 text-gold-700',
        )}
      >
        <Icon name={stat.icon} className="size-5" />
      </span>
      <p
        className={cn(
          'mt-5 text-4xl font-semibold tracking-tight',
          invert ? 'text-ivory' : 'text-navy-900',
        )}
      >
        {stat.value}
      </p>
      <p
        className={cn(
          'mt-1 text-sm font-semibold',
          invert ? 'text-ivory/90' : 'text-navy-800',
        )}
      >
        {stat.label}
      </p>
      <p
        className={cn(
          'mt-2 text-sm leading-relaxed',
          invert ? 'text-ivory/60' : 'text-muted-foreground',
        )}
      >
        {stat.description}
      </p>
    </div>
  );
}
