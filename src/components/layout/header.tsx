'use client';

import * as React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ResponsiveLogo } from '@/components/brand/responsive-logo';
import { MegaMenu } from './mega-menu';
import { MobileNav } from './mobile-nav';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ivory"
      >
        Skip to content
      </a>

      <div className="hidden bg-navy-900 text-ivory/80 md:block">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-6 py-1.5 text-xs sm:px-8">
          <p className="inline-flex items-center gap-2">
            <ShieldCheck
              className="size-3.5 text-gold-300"
              aria-hidden="true"
            />
            Verified private limited company · Certificate C-202769/2025
          </p>
          <p className="text-ivory/60">Bangladesh-incorporated · Est. 2025</p>
        </div>
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-border bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70'
            : 'border-b border-transparent bg-background/60 backdrop-blur',
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-4 px-6 sm:px-8">
          <ResponsiveLogo href="/" />
          <MegaMenu />
          <div className="flex items-center gap-2">
            <Button
              href="/verification"
              variant="outline"
              size="sm"
              className="hidden xl:inline-flex"
            >
              <ShieldCheck className="size-4" />
              Verify
            </Button>
            <Button
              href="/contact"
              variant="gold"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Start an inquiry
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
