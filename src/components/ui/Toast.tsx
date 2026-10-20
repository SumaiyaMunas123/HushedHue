"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type ToastProps = {
  message: string | null;
};

export function Toast({ message }: ToastProps) {
  const reduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      role="status"
      aria-live="polite"
    >
      <AnimatePresence>
        {message ? (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="glass-surface rounded-full px-5 py-2 text-sm text-graphite"
          >
            {message}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
