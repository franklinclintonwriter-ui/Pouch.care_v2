import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PremiumBackground } from '@/components/ui/premium-background';
import type { BreadcrumbEntry } from '@/lib/seo';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: BreadcrumbEntry[];
  children?: React.ReactNode;
  align?: 'left' | 'center';
}

/** Consistent executive header band for inner pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  align = 'left',
}: PageHeroProps) {
  const centered = align === 'center';

  return (
    <section className="relative isolate overflow-hidden bg-gradient-navy text-ivory">
      <PremiumBackground variant="navy" />

      <Container className="relative pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
        {breadcrumbs ? (
          <Breadcrumbs
            entries={breadcrumbs}
            invert
            className={cn('mb-8 sm:mb-10', centered && 'flex justify-center')}
          />
        ) : null}

        <div
          className={cn(
            'grid items-center gap-10',
            !centered && 'lg:grid-cols-[minmax(0,1fr)_auto]',
          )}
        >
          <div
            className={cn(
              'max-w-3xl',
              centered && 'mx-auto max-w-3xl text-center',
            )}
          >
            {eyebrow ? (
              <p
                className={cn(
                  'mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-300 backdrop-blur',
                )}
              >
                <span
                  className="size-1.5 rounded-full bg-gold-400"
                  aria-hidden="true"
                />
                {eyebrow}
              </p>
            ) : null}

            <h1 className="text-balance text-[2rem] font-semibold leading-[1.08] sm:text-[2.75rem] lg:text-[3.25rem]">
              {title}
            </h1>

            {description ? (
              <p
                className={cn(
                  'mt-5 max-w-2xl text-base leading-relaxed text-ivory/75 sm:text-lg',
                  centered && 'mx-auto',
                )}
              >
                {description}
              </p>
            ) : null}

            {children ? <div className="mt-8">{children}</div> : null}
          </div>

          {/* Decorative emblem — fills the space on large screens, balances the
              composition, and reinforces the premium brand. Hidden < lg. */}
          {!centered ? <HeroEmblem /> : null}
        </div>
      </Container>

      {/* Soft transition into the page body */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
      />
    </section>
  );
}

function HeroEmblem() {
  return (
    <div
      aria-hidden="true"
      className="relative hidden h-56 w-56 shrink-0 items-center justify-center lg:flex xl:h-64 xl:w-64"
    >
      {/* concentric rings */}
      <span className="absolute inset-0 rounded-full border border-white/10" />
      <span className="absolute inset-6 rounded-full border border-white/10" />
      <span className="absolute inset-12 rounded-full border border-gold-300/20" />
      {/* soft gold glow */}
      <span className="absolute inset-10 rounded-full bg-gold-500/10 blur-2xl" />
      {/* monogram medallion */}
      <span className="relative flex size-24 items-center justify-center rounded-3xl bg-gradient-gold text-navy-900 shadow-gold">
        <svg viewBox="0 0 24 24" className="size-12" fill="none">
          <path
            d="M5 19V7.5C5 5.567 6.567 4 8.5 4H13a5 5 0 0 1 0 10H9"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
