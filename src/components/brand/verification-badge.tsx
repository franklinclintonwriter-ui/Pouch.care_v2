import { ShieldCheck, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';

interface VerificationBadgeProps {
  icon?: string;
  label: string;
  sublabel?: string;
  tone?: 'emerald' | 'gold' | 'navy';
  className?: string;
}

const tones = {
  emerald:
    'border-emerald/30 bg-emerald/10 [&_.vb-icon]:text-emerald-700 [&_.vb-icon]:[color:hsl(var(--emerald))]',
  gold: 'border-gold-300/60 bg-gold-50 [&_.vb-icon]:text-gold-700',
  navy: 'border-white/15 bg-white/5 [&_.vb-icon]:text-gold-300',
};

const labelTone = {
  emerald: 'text-navy-900',
  gold: 'text-navy-900',
  navy: 'text-ivory',
};

const sublabelTone = {
  emerald: 'text-muted-foreground',
  gold: 'text-muted-foreground',
  navy: 'text-ivory/60',
};

/** Premium trust badge used in hero and verification surfaces. */
export function VerificationBadge({
  icon,
  label,
  sublabel,
  tone = 'emerald',
  className,
}: VerificationBadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2.5 rounded-full border px-3.5 py-2 backdrop-blur',
        tones[tone],
        className,
      )}
    >
      <span className="vb-icon flex size-5 shrink-0 items-center justify-center">
        {icon ? (
          <Icon name={icon} className="size-4" />
        ) : (
          <ShieldCheck className="size-4" aria-hidden="true" />
        )}
      </span>
      <span className="flex flex-col leading-tight">
        <span className={cn('text-xs font-semibold', labelTone[tone])}>
          {label}
        </span>
        {sublabel ? (
          <span className={cn('text-[11px]', sublabelTone[tone])}>
            {sublabel}
          </span>
        ) : null}
      </span>
    </div>
  );
}

export type { LucideIcon };
