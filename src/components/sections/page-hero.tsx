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
  return (
    <section className="relative isolate overflow-hidden bg-gradient-navy pb-16 pt-12 text-ivory sm:pb-20 sm:pt-16">
      <PremiumBackground variant="navy" />
      <Container>
        {breadcrumbs ? (
          <Breadcrumbs entries={breadcrumbs} invert className="mb-8" />
        ) : null}
        <div
          className={cn(
            'max-w-3xl',
            align === 'center' && 'mx-auto text-center',
          )}
        >
          {eyebrow ? (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance text-4xl font-semibold leading-[1.08] sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-lg leading-relaxed text-ivory/75">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
