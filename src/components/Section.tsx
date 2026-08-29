import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  /** Barely-there surface shift so sections read as distinct panels, not one flat wash. */
  tint?: 'base' | 'raised';
  children: ReactNode;
}

export default function Section({ id, tint = 'base', children }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-ink-800/70 py-24 md:py-32 ${
        tint === 'raised' ? 'bg-ink-900/60' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}
