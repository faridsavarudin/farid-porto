'use client';

import { FaHeart, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800/70 bg-ink-950 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-1.5">
            <p className="flex items-center gap-2 text-sm text-ink-300">
              Made with <FaHeart className="text-signal-red" aria-hidden="true" /> by Farid
              Savarudin
            </p>
            <p className="font-mono text-[0.7rem] uppercase tracking-label text-ink-600">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex gap-5">
            <a
              href="https://github.com/faridsavarudin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-500 transition-colors hover:text-signal-amber"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/farid-savarudin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-500 transition-colors hover:text-signal-amber"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-label text-ink-700">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
