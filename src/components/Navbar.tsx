'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((i) => i.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-ink-800/80 bg-ink-950/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label="Farid Savarudin — home"
            className="group flex items-center gap-1 font-mono text-sm font-medium text-ink-100"
          >
            <span>fs</span>
            <span className="h-4 w-[3px] bg-signal-amber animate-blink group-hover:bg-signal-green" />
          </Link>

          <div className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const id = item.href.slice(1);
                const isActive = active === id;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative rounded px-3 py-2 font-mono text-xs uppercase tracking-label transition-colors ${
                        isActive ? 'text-ink-50' : 'text-ink-400 hover:text-ink-100'
                      }`}
                    >
                      <span
                        className={`mr-2 transition-colors ${
                          isActive ? 'text-signal-amber' : 'text-ink-700'
                        }`}
                        aria-hidden="true"
                      >
                        /
                      </span>
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="rounded p-2 text-ink-300 transition-colors hover:text-ink-50 md:hidden"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-ink-800/80 bg-ink-950/95 backdrop-blur-md md:hidden">
          <ul className="space-y-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded px-2 py-3 font-mono text-sm uppercase tracking-label text-ink-300 transition-colors hover:text-ink-50"
                >
                  <span className="mr-2 text-ink-700" aria-hidden="true">
                    /
                  </span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
