import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors [&_svg]:size-3.5',
  {
    variants: {
      variant: {
        default: 'border-navy-200 bg-secondary text-navy-700',
        navy: 'border-transparent bg-navy-800 text-ivory',
        gold: 'border-gold-300/60 bg-gold-50 text-gold-800',
        emerald:
          'border-emerald/30 bg-emerald/10 text-emerald-700 [color:hsl(var(--emerald))]',
        outline: 'border-border bg-transparent text-foreground',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
