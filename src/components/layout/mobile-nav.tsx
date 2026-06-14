'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { primaryNav } from '@/data/nav';
import { Button } from '@/components/ui/button';
import { ResponsiveLogo } from '@/components/brand/responsive-logo';
import { cn } from '@/lib/utils';

export function MobileNav({ invert }: { invert?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | null>(null);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={cn(
          'inline-flex size-10 items-center justify-center rounded-full border transition-colors',
          invert
            ? 'border-white/15 text-ivory hover:bg-white/10'
            : 'border-border text-navy-800 hover:bg-secondary',
        )}
      >
        <Menu className="size-5" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100]"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div
              className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="absolute right-0 top-0 flex h-full w-[min(22rem,90vw)] flex-col bg-background shadow-elevated"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <ResponsiveLogo href="/" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-navy-800 hover:bg-secondary"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              <nav
                aria-label="Mobile"
                className="flex-1 overflow-y-auto px-3 py-4"
              >
                <ul className="space-y-1">
                  {primaryNav.map((group) => {
                    if (!group.columns && group.href) {
                      return (
                        <li key={group.label}>
                          <Link
                            href={group.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-xl px-3 py-3 text-base font-semibold text-navy-900 hover:bg-secondary"
                          >
                            {group.label}
                          </Link>
                        </li>
                      );
                    }
                    const isExp = expanded === group.label;
                    return (
                      <li key={group.label}>
                        <button
                          type="button"
                          aria-expanded={isExp}
                          onClick={() =>
                            setExpanded(isExp ? null : group.label)
                          }
                          className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-navy-900 hover:bg-secondary"
                        >
                          {group.label}
                          <ChevronDown
                            className={cn(
                              'size-4 transition-transform',
                              isExp && 'rotate-180',
                            )}
                            aria-hidden="true"
                          />
                        </button>
                        <AnimatePresence>
                          {isExp && group.columns ? (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-3 px-2 pb-2 pt-1">
                                {group.columns.map((col) => (
                                  <div key={col.heading}>
                                    <p className="px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-700">
                                      {col.heading}
                                    </p>
                                    <ul>
                                      {col.items.map((item) => (
                                        <li key={item.href}>
                                          <Link
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className="block rounded-lg px-3 py-2 text-sm text-navy-700 hover:bg-secondary"
                                          >
                                            {item.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t border-border p-4">
                <Button
                  href="/contact"
                  variant="gold"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Start an inquiry
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
