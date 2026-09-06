'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import SystemDiagram from './SystemDiagram';

const socials = [
  {
    href: 'https://github.com/faridsavarudin',
    label: 'GitHub',
    icon: FaGithub,
    itemProp: 'url' as const,
    external: true,
  },
  {
    href: 'https://linkedin.com/in/farid-savarudin',
    label: 'LinkedIn',
    icon: FaLinkedin,
    itemProp: 'sameAs' as const,
    external: true,
  },
  {
    href: 'mailto:faridsavarudin@gmail.com',
    label: 'Email',
    icon: FaEnvelope,
    itemProp: 'email' as const,
    external: false,
  },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? { initial: false as const, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: 'easeOut' as const },
        };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-20"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="pointer-events-none absolute inset-0 horizon-glow" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p {...rise(0)} className="mono-label flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-signal-green" aria-hidden="true" />
            Bandung, Indonesia
          </motion.p>

          <motion.h1
            {...rise(0.05)}
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-50 sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m{' '}
            <span className="text-signal-amber" itemProp="name">
              Farid Savarudin
            </span>
          </motion.h1>

          <motion.h2
            {...rise(0.12)}
            className="mt-5 text-xl text-ink-300 md:text-2xl"
            itemProp="jobTitle"
          >
            Android, Kotlin Multiplatform &amp; Flutter Engineer
          </motion.h2>

          <motion.p
            {...rise(0.18)}
            className="mt-6 max-w-prose text-base leading-relaxed text-ink-400 md:text-lg"
            itemProp="description"
          >
            Mobile engineer with 9 years shipping production apps across HR tech, transport,
            IoT, media, and government — native Android, Kotlin Multiplatform, and Flutter.
            Recently sole engineer on four realtime Android systems for connected devices and
            field operations, including a Kotlin Multiplatform app at ~89% shared code, alongside
            production Flutter apps built freelance. Based in Bandung.
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-signal-amber px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-[#f0b358]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-ink-700 px-6 py-3 text-sm font-semibold text-ink-200 transition-colors hover:border-ink-500 hover:text-ink-50"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.ul {...rise(0.3)} className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {socials.map(({ href, label, icon: Icon, itemProp, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  itemProp={itemProp}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer me' } : {})}
                  className="group flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ink-400 transition-colors hover:text-signal-amber"
                >
                  <Icon size={16} aria-hidden="true" />
                  <span>{label}</span>
                  {external ? (
                    <span className="text-ink-700 transition-colors group-hover:text-signal-amber">
                      ↗
                    </span>
                  ) : null}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="hidden lg:block"
        >
          <SystemDiagram />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-600 transition-colors hover:text-signal-amber"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
      >
        <FaArrowDown size={18} />
      </motion.a>
    </section>
  );
}
