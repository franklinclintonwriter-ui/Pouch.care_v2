import * as React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'article';
  size?: 'default' | 'narrow' | 'wide';
}

const sizes = {
  default: 'max-w-[1320px]',
  narrow: 'max-w-3xl',
  wide: 'max-w-[1480px]',
};

export function Container({
  as: Tag = 'div',
  size = 'default',
  className,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn('mx-auto w-full px-6 sm:px-8', sizes[size], className)}
      {...props}
    />
  );
}
