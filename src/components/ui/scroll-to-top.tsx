'use client';

import * as React from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/** Floating "back to top" control that appears after scrolling. */
export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-5 right-5 z-40 flex size-11 items-center justify-center rounded-full border border-gold-300/40 bg-navy-900/90 text-gold-300 shadow-elevated backdrop-blur transition-colors hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ArrowUp className="size-5" aria-hidden="true" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
