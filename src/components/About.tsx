'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaMobileAlt, FaWaveSquare, FaUserCheck } from 'react-icons/fa';
import Section from './Section';
import SectionHeader from './SectionHeader';

const highlights = [
  {
    icon: FaMobileAlt,
    title: 'Android, Kotlin Multiplatform & Flutter',
    description:
      'Nine years in Kotlin and Java — Jetpack Compose, Clean Architecture, and Compose Multiplatform shipped to Android and iOS from one codebase — plus production Flutter apps built freelance with BLoC and GetX.',
  },
  {
    icon: FaWaveSquare,
    title: 'Realtime & Connected Devices',
    description:
      'MQTT, WebSocket and WebRTC, GPS telemetry and geofencing, offline durability — built for devices deployed in the field on unreliable networks.',
  },
  {
    icon: FaUserCheck,
    title: 'End-to-End Ownership',
    description:
      'Sole engineer on four realtime Android systems — architecture, delivery, production debugging, and handover documentation.',
  },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <Section id="about">
      <SectionHeader index="01" label="About" title="About Me" />

      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h3 className="font-display text-xl font-medium leading-snug text-ink-100">
            Mobile engineer, 9 years, across Android, Kotlin Multiplatform and Flutter
          </h3>
          <div className="mt-5 space-y-4 text-[0.975rem] leading-relaxed text-ink-400">
            <p>
              From 2020 to 2026 I owned the candidate-facing Android app at ASTRNT end to end,
              including its incremental Java-to-Kotlin migration on a live app with no feature
              freeze, the question-type engine, and a media-capture pipeline built to survive
              unreliable networks and devices.
            </p>
            <p>
              Most recently I was the sole engineer on four realtime Android systems for
              transport and field operations — a vehicle-mounted driver tablet, a fixed
              monitoring unit, an on-board passenger-information display, and a Kotlin
              Multiplatform passenger app shipped at ~89% shared code with hand-written MapKit
              interop for the iOS target. Roughly 78,000 lines of Kotlin, sole author.
            </p>
            <p>
              Alongside that, I&apos;ve shipped Flutter freelance work in production —
              an enterprise workflow app with approvals, e-signature and video meetings on a
              BLoC codebase, and an e-learning app with quizzes and payments on GetX — picking
              up each stack&apos;s own architecture rather than forcing one pattern everywhere.
            </p>
            <p>
              I work in Kotlin, Java and Dart across Jetpack Compose, Clean Architecture,
              MVI/MVVM, BLoC and GetX, and I am most useful on the failure modes that only show
              up in production — half-open sockets, stale location caches, and errors that never
              raise. Based in Bandung.
            </p>
          </div>
        </motion.div>

        <motion.ul
          className="divide-y divide-ink-800 border-y border-ink-800"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
        >
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="flex gap-4 py-5">
                <span className="mono-label pt-1 text-signal-amber">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <Icon className="text-sm text-ink-500" aria-hidden="true" />
                    <h4 className="font-medium text-ink-100">{item.title}</h4>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </Section>
  );
}
