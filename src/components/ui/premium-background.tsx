import { cn } from '@/lib/utils';

/**
 * Decorative premium background built from CSS gradients (no heavy images).
 * `variant` controls the mood; purely presentational and aria-hidden.
 */
export function PremiumBackground({
  variant = 'light',
  className,
}: {
  variant?: 'light' | 'navy';
  className?: string;
}) {
  if (variant === 'navy') {
    return (
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-gradient-navy',
          className,
        )}
      >
        <div className="absolute -left-32 -top-32 size-[36rem] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 size-[40rem] rounded-full bg-navy-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="bg-dot-grid absolute inset-0 opacity-[0.15]" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 -z-10 overflow-hidden',
        className,
      )}
    >
      <div className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-gold-200/30 blur-3xl" />
      <div className="absolute -left-40 top-1/3 size-[30rem] rounded-full bg-navy-100/50 blur-3xl" />
      <div className="bg-dot-grid absolute inset-0 opacity-60" />
    </div>
  );
}
