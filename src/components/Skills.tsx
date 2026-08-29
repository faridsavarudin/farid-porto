'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaAndroid,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaFigma,
  FaReact,
  FaVuejs,
  FaLaravel,
  FaSatelliteDish,
  FaNetworkWired,
  FaVideo,
  FaMapMarkedAlt,
  FaBluetoothB,
  FaSitemap,
  FaLayerGroup,
  FaBolt,
  FaCubes,
  FaExchangeAlt,
  FaServer,
} from 'react-icons/fa';
import {
  SiKotlin,
  SiFirebase,
  SiSqlite,
  SiJetpackcompose,
  SiAndroidstudio,
  SiPostman,
  SiGradle,
  SiFlutter,
} from 'react-icons/si';
import Section from './Section';
import SectionHeader from './SectionHeader';

interface Skill {
  name: string;
  icon: ReactNode;
}

const ic = 'text-[15px] text-ink-500 transition-colors group-hover:text-signal-amber';

const skillCategories: { category: string; skills: Skill[] }[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Kotlin', icon: <SiKotlin className={ic} /> },
      { name: 'Java', icon: <FaJava className={ic} /> },
    ],
  },
  {
    category: 'Mobile Development',
    skills: [
      { name: 'Android SDK', icon: <FaAndroid className={ic} /> },
      { name: 'Kotlin Multiplatform', icon: <SiKotlin className={ic} /> },
      { name: 'Jetpack Compose', icon: <SiJetpackcompose className={ic} /> },
      {
        name: 'Compose Multiplatform',
        icon: (
          <img
            src="/compose-multiplatform.svg"
            alt=""
            className="h-[15px] w-[15px] opacity-60 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
          />
        ),
      },
      { name: 'Flutter', icon: <SiFlutter className={ic} /> },
      { name: 'Android Studio', icon: <SiAndroidstudio className={ic} /> },
    ],
  },
  {
    category: 'Realtime, Location & IoT',
    skills: [
      { name: 'MQTT (HiveMQ)', icon: <FaSatelliteDish className={ic} /> },
      { name: 'WebSocket', icon: <FaNetworkWired className={ic} /> },
      { name: 'WebRTC / RTSP', icon: <FaVideo className={ic} /> },
      { name: 'GPS & Geofencing', icon: <FaMapMarkedAlt className={ic} /> },
      { name: 'BLE', icon: <FaBluetoothB className={ic} /> },
    ],
  },
  {
    category: 'Architecture & Libraries',
    skills: [
      { name: 'MVVM / MVI', icon: <FaSitemap className={ic} /> },
      { name: 'Clean Architecture', icon: <FaLayerGroup className={ic} /> },
      { name: 'Coroutines & Flow', icon: <FaBolt className={ic} /> },
      { name: 'Hilt / Koin', icon: <FaCubes className={ic} /> },
      { name: 'Room / SQLDelight', icon: <FaDatabase className={ic} /> },
      { name: 'Ktor', icon: <FaExchangeAlt className={ic} /> },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'React', icon: <FaReact className={ic} /> },
      { name: 'Vue.js', icon: <FaVuejs className={ic} /> },
      { name: 'Laravel', icon: <FaLaravel className={ic} /> },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Firebase', icon: <SiFirebase className={ic} /> },
      { name: 'SQLite', icon: <SiSqlite className={ic} /> },
      { name: 'REST API', icon: <FaDatabase className={ic} /> },
      { name: 'Node.js Scraping', icon: <FaServer className={ic} /> },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', icon: <FaGitAlt className={ic} /> },
      { name: 'Gradle', icon: <SiGradle className={ic} /> },
      { name: 'Postman', icon: <SiPostman className={ic} /> },
      { name: 'Figma', icon: <FaFigma className={ic} /> },
    ],
  },
];

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <Section id="skills" tint="raised">
      <SectionHeader index="02" label="Skills" title="My Skills" />

      <div className="border-b border-ink-800">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.category}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.2), ease: 'easeOut' }}
            className="grid gap-x-10 gap-y-4 border-t border-ink-800 py-6 md:grid-cols-[190px_1fr]"
          >
            <div className="flex items-baseline gap-3">
              <h3 className="mono-label text-ink-300">{category.category}</h3>
              <span className="font-mono text-[0.7rem] text-ink-600">
                {String(category.skills.length).padStart(2, '0')}
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="group inline-flex items-center gap-2 rounded-md border border-ink-800 bg-ink-950/40 px-3 py-1.5 text-sm text-ink-300 transition-colors hover:border-ink-600 hover:text-ink-50"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 max-w-prose text-sm leading-relaxed text-ink-500">
        Always learning and exploring new technologies to stay current with industry trends
      </p>
    </Section>
  );
}
