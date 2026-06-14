'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './theme-provider';
import { cn } from '@/lib/utils';

export function ThemeToggle({
  className,
  invert,
}: {
  className?: string;
  invert?: boolean;
}) {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={cn(
        'inline-flex size-9 items-center justify-center rounded-full border transition-colors',
        invert
          ? 'border-white/15 text-ivory/80 hover:bg-white/10'
          : 'border-border text-navy-700 hover:bg-secondary',
        className,
      )}
    >
      <Sun className="size-4 dark:hidden" aria-hidden="true" />
      <Moon className="hidden size-4 dark:block" aria-hidden="true" />
    </button>
  );
}
