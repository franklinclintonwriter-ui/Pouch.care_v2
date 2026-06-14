import * as React from 'react';
import { Container } from './container';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  size?: 'default' | 'narrow' | 'wide';
  tone?: 'default' | 'muted' | 'navy';
  id?: string;
  bleed?: boolean;
}

const tones = {
  default: '',
  muted: 'bg-secondary/40',
  navy: 'bg-gradient-navy text-ivory',
};

/** Standard page section with consistent padding and optional tone. */
export function Section({
  children,
  className,
  containerClassName,
  size = 'default',
  tone = 'default',
  id,
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-16 sm:py-20',
        tones[tone],
        tone === 'navy' && 'isolate overflow-hidden',
        className,
      )}
    >
      {bleed ? (
        children
      ) : (
        <Container size={size} className={containerClassName}>
          {children}
        </Container>
      )}
    </section>
  );
}
