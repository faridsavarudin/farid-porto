'use client';

import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaUsers } from 'react-icons/fa';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const highlights = [
    {
      icon: <FaMobile className="text-4xl text-blue-500" />,
      title: "Android & Kotlin Multiplatform",
      description: "Nine years in Kotlin and Java — Jetpack Compose, Clean Architecture, and Compose Multiplatform shipped to Android and iOS from one codebase."
    },
    {
      icon: <FaCode className="text-4xl text-blue-500" />,
      title: "Realtime & Field Systems",
      description: "MQTT, WebSocket and WebRTC, GPS telemetry and geofencing, offline durability — built for devices mounted in vehicles under unreliable networks."
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500" />,
      title: "End-to-End Ownership",
      description: "Sole engineer on four realtime rail and transit systems — architecture, delivery, production debugging, and handover documentation."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Android engineer, 9 years, from HR tech to rail operations
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              From 2020 to 2026 I owned the candidate-facing Android app at ASTRNT end to end,
              including its incremental Java-to-Kotlin migration on a live app with no feature
              freeze, the question-type engine, and a media-capture pipeline built to survive
              unreliable networks and devices.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Most recently I was the sole engineer on four realtime Android systems for a
              national rail operator (PT KAI) and a city-bus operator — an in-cab driver tablet,
              a level-crossing monitoring unit, an on-board passenger-information unit, and a
              Kotlin Multiplatform passenger app shipped at ~89% shared code with hand-written
              MapKit interop for the iOS target. Roughly 78,000 lines of Kotlin, sole author.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I work in Kotlin and Java with Jetpack Compose, Clean Architecture and MVI/MVVM,
              and I am most useful on the failure modes that only show up in production —
              half-open sockets, stale location caches, and errors that never raise. Based in
              Bandung.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
