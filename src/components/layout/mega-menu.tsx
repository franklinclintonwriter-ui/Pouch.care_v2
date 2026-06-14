'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { primaryNav } from '@/data/nav';
import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import type { NavGroup } from '@/lib/types';

/** Desktop mega menu with keyboard support and hover/focus reveal. */
export function MegaMenu({ invert }: { invert?: boolean }) {
  const [open, setOpen] = React.useState<string | null>(null);
  const pathname = usePathname();

  const isGroupActive = (group: NavGroup): boolean => {
    const inPath = (href: string) =>
      href !== '/' && (pathname === href || pathname.startsWith(`${href}/`));
    if (group.href && inPath(group.href)) return true;
    return (
      group.columns?.some((col) => col.items.some((i) => inPath(i.href))) ??
      false
    );
  };
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const triggerColor = invert
    ? 'text-ivory/85 hover:text-ivory'
    : 'text-navy-700 hover:text-navy-900';

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {primaryNav.map((group) => {
          const hasMenu = !!group.columns;
          const isOpen = open === group.label;
          const active = isGroupActive(group);

          if (!hasMenu && group.href) {
            return (
              <li key={group.label}>
                <Link
                  href={group.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors',
                    triggerColor,
                    active && (invert ? 'text-ivory' : 'text-navy-900'),
                    active &&
                      'after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gold-400',
                  )}
                >
                  {group.label}
                </Link>
              </li>
            );
          }

          return (
            <li
              key={group.label}
              className="relative"
              onMouseEnter={() => {
                cancelClose();
                setOpen(group.label);
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={() => setOpen(isOpen ? null : group.label)}
                onFocus={() => setOpen(group.label)}
                className={cn(
                  'relative inline-flex h-10 items-center gap-1 rounded-full px-4 text-sm font-medium transition-colors',
                  triggerColor,
                  (isOpen || active) &&
                    (invert ? 'text-ivory' : 'text-navy-900'),
                  active &&
                    'after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gold-400',
                )}
              >
                {group.label}
                <ChevronDown
                  className={cn(
                    'size-4 transition-transform',
                    isOpen && 'rotate-180',
                  )}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {isOpen && group.columns ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full z-50 mt-2 w-[min(44rem,90vw)] -translate-x-1/2"
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="overflow-hidden rounded-2xl border border-border bg-popover p-2 shadow-elevated">
                      <div className="grid gap-1 sm:grid-cols-2">
                        {group.columns.map((col) => (
                          <div key={col.heading} className="p-2">
                            <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-700">
                              {col.heading}
                            </p>
                            <ul>
                              {col.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={() => setOpen(null)}
                                    className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary"
                                  >
                                    {item.icon ? (
                                      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 group-hover:bg-gold-50 group-hover:text-gold-700">
                                        <Icon
                                          name={item.icon}
                                          className="size-4"
                                        />
                                      </span>
                                    ) : null}
                                    <span>
                                      <span className="block text-sm font-semibold text-navy-900">
                                        {item.label}
                                      </span>
                                      {item.description ? (
                                        <span className="block text-xs text-muted-foreground">
                                          {item.description}
                                        </span>
                                      ) : null}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {group.featured ? (
                        <Link
                          href={group.featured.href}
                          onClick={() => setOpen(null)}
                          className="mt-1 flex items-center justify-between gap-4 rounded-xl bg-gradient-navy px-4 py-3 text-ivory transition-opacity hover:opacity-95"
                        >
                          <span>
                            <span className="block text-sm font-semibold">
                              {group.featured.title}
                            </span>
                            <span className="block text-xs text-ivory/70">
                              {group.featured.description}
                            </span>
                          </span>
                          <ArrowRight
                            className="size-4 shrink-0 text-gold-300"
                            aria-hidden="true"
                          />
                        </Link>
                      ) : null}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
