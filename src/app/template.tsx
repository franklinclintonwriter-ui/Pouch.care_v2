'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Subtle page transition applied on every route change and initial load.
 * Wraps page content only (header/footer live in the layout). Respects
 * reduced-motion. Animates opacity + a small rise; the document preview
 * dialog and mobile drawer are portaled to <body>, so no fixed-positioning
 * containing-block conflicts arise.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
