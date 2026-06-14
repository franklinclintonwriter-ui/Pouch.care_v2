import * as React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-navy-800 text-ivory shadow-soft hover:bg-navy-700 hover:shadow-elevated',
        gold: 'bg-gradient-gold text-navy-900 shadow-gold hover:brightness-105',
        outline:
          'border border-navy-200 bg-transparent text-navy-800 hover:border-gold hover:text-navy-900 dark:border-border dark:text-foreground',
        ghost: 'text-navy-700 hover:bg-secondary dark:text-foreground',
        subtle: 'bg-secondary text-secondary-foreground hover:bg-muted',
        link: 'h-auto rounded-none p-0 text-gold-700 underline-offset-4 hover:underline dark:text-gold-300',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        md: 'h-11 px-6',
        lg: 'h-12 px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, type, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);

    if (href) {
      const isExternal = /^https?:\/\//.test(href);
      if (isExternal) {
        return (
          <a
            href={href}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          />
        );
      }
      return (
        <Link
          href={href}
          className={classes}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return (
      <button
        ref={ref}
        type={type ?? 'button'}
        className={classes}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
