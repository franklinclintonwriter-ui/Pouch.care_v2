'use client';

import * as React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

/** Slim gold reading-progress bar fixed to the very top of the viewport. */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300"
    />
  );
}
