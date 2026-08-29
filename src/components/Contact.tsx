'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';

const contactInfo = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'faridsavarudin@gmail.com',
    link: 'mailto:faridsavarudin@gmail.com',
  },
  {
    icon: FaPhone,
    title: 'Phone',
    value: '+62 853-5349-8964',
    link: 'tel:+6285353498964',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    value: 'Bandung, Indonesia',
    link: '#',
  },
];

const socialLinks = [
  { icon: FaGithub, name: 'GitHub', link: 'https://github.com/faridsavarudin' },
  { icon: FaLinkedin, name: 'LinkedIn', link: 'https://linkedin.com/in/farid-savarudin' },
];

const fieldClass =
  'w-full rounded-md border border-ink-800 bg-ink-950/50 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-600 transition-colors focus:border-signal-amber focus:outline-none';

export default function Contact() {
  const reduce = useReducedMotion();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const reveal = (delay = 0) =>
    reduce
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: 'easeOut' as const },
        };

  return (
    <Section id="contact" tint="raised">
      <SectionHeader
        index="04"
        label="Contact"
        title="Get In Touch"
        intro="Have a project in mind or want to collaborate? Feel free to reach out!"
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div {...reveal(0)}>
          <h3 className="mono-label mb-5">Contact Information</h3>
          <ul className="divide-y divide-ink-800 border-y border-ink-800">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title}>
                  <a
                    href={item.link}
                    className="flex items-center gap-4 py-4 transition-colors hover:text-ink-50"
                  >
                    <Icon className="text-sm text-ink-500" aria-hidden="true" />
                    <span className="font-mono text-[0.7rem] uppercase tracking-label text-ink-500">
                      {item.title}
                    </span>
                    <span className="ml-auto text-sm text-ink-300">{item.value}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <h4 className="mono-label mb-4 mt-8">Connect with me</h4>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-ink-800 px-4 py-2.5 text-sm text-ink-300 transition-colors hover:border-ink-500 hover:text-ink-50"
                >
                  <Icon aria-hidden="true" />
                  <span>{social.name}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form {...reveal(0.08)} onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-mono text-[0.7rem] uppercase tracking-label text-ink-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={fieldClass}
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-mono text-[0.7rem] uppercase tracking-label text-ink-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={fieldClass}
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block font-mono text-[0.7rem] uppercase tracking-label text-ink-400"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={fieldClass}
              placeholder="Subject"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-mono text-[0.7rem] uppercase tracking-label text-ink-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${fieldClass} resize-none`}
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-md bg-signal-amber py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-[#f0b358] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          <p aria-live="polite" className="min-h-[1.5rem]">
            {status === 'success' && (
              <motion.span
                initial={reduce ? false : { opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="block rounded-md border border-signal-green/40 bg-signal-green/10 px-4 py-3 text-sm text-signal-green"
              >
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.span>
            )}
          </p>
        </motion.form>
      </div>
    </Section>
  );
}
