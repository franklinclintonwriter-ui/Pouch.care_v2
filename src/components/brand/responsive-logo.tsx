import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * Wordmark logo built in pure SVG/markup (no image asset) so it stays crisp
 * at any size and adapts to light/dark surfaces.
 */
export function ResponsiveLogo({
  invert = false,
  className,
  href = '/',
}: {
  invert?: boolean;
  className?: string;
  href?: string | null;
}) {
  const mark = (
    <span className={cn('group inline-flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'flex size-9 items-center justify-center rounded-lg bg-gradient-gold text-navy-900 shadow-gold',
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M5 19V7.5C5 5.567 6.567 4 8.5 4H13a5 5 0 0 1 0 10H9"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-base font-semibold tracking-tight',
            invert ? 'text-ivory' : 'text-navy-900',
          )}
        >
          Pouch Care
        </span>
        <span
          className={cn(
            'text-[10px] font-medium uppercase tracking-[0.22em]',
            invert ? 'text-gold-300' : 'text-gold-700',
          )}
        >
          International Ltd.
        </span>
      </span>
    </span>
  );

  if (href === null) return mark;

  return (
    <Link
      href={href}
      className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Pouch Care International Ltd. — home"
    >
      {mark}
    </Link>
  );
}
