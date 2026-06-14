import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  as?: 'h2' | 'h3';
  className?: string;
  invert?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Tag = 'h2',
  className,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]',
            invert ? 'text-gold-300' : 'text-gold-700',
          )}
        >
          <span
            className={cn(
              'h-px w-6',
              invert ? 'bg-gold-300/60' : 'bg-gold-500/60',
            )}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          'text-3xl font-semibold leading-tight sm:text-4xl',
          invert ? 'text-ivory' : 'text-navy-900',
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            invert ? 'text-ivory/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
