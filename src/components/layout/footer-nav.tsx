'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { footerNav } from '@/data/nav';
import { cn } from '@/lib/utils';

/**
 * Footer link groups. On mobile each group is a collapsible accordion; on sm+
 * every group is always expanded as a static column (state is ignored there).
 */
export function FooterNav() {
  const [open, setOpen] = React.useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8 lg:grid-cols-5">
      {footerNav.map((col) => {
        const isOpen = open === col.heading;
        return (
          <div
            key={col.heading}
            className="border-b border-white/10 sm:border-0"
          >
            <button
              type="button"
              onClick={() =>
                setOpen((cur) => (cur === col.heading ? null : col.heading))
              }
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between py-4 text-left sm:pointer-events-none sm:py-0 sm:pb-4"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">
                {col.heading}
              </span>
              <ChevronDown
                className={cn(
                  'size-4 text-ivory/50 transition-transform sm:hidden',
                  isOpen && 'rotate-180',
                )}
                aria-hidden="true"
              />
            </button>
            <ul
              className={cn(
                'space-y-2.5 pb-4 sm:block sm:pb-0',
                isOpen ? 'block' : 'hidden',
              )}
            >
              {col.items.map((item) => (
                <li key={`${col.heading}-${item.href}`}>
                  <Link
                    href={item.href}
                    className="inline-block py-0.5 text-sm text-ivory/65 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
