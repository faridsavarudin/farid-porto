'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  /** Two-digit section index, e.g. "01" */
  index: string;
  /** Short mono label, e.g. "About" */
  label: string;
  /** The visible section heading (rendered as h2) */
  title: ReactNode;
  /** Optional supporting line under the heading */
  intro?: ReactNode;
}

/**
 * Shared section-header treatment: a monospace index + label on a hairline
 * "track" rule, then a display-weight heading. Left-aligned, deliberately not
 * the centered "one word in colour + underline bar" pattern.
 */
export default function SectionHeader({ index, label, title, intro }: SectionHeaderProps) {
  const reduce = useReducedMotion();

  return (
    <motion.header
      className="mb-14 md:mb-16"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-3">
        <span className="mono-label text-signal-amber">{index}</span>
        <span className="h-px w-6 bg-ink-600" aria-hidden="true" />
        <span className="mono-label">{label}</span>
        <span className="h-px flex-1 bg-ink-800" aria-hidden="true" />
      </div>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink-50 md:text-[2.5rem] md:leading-[1.1]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-400">{intro}</p>
      ) : null}
    </motion.header>
  );
}
