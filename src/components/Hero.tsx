'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative px-4"
      itemScope 
      itemType="https://schema.org/Person"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I&apos;m <span className="text-blue-500" itemProp="name">Farid Savarudin</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-6" itemProp="jobTitle">
            Professional Android Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8" itemProp="description">
            Experienced mobile developer with 8+ years building innovative Android applications using Kotlin, Flutter, and Jetpack Compose. Specializing in native and cross-platform mobile development.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <motion.a
              href="https://github.com/faridsavarudin"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="GitHub Profile"
              itemProp="url"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/faridsavarudin"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="LinkedIn Profile"
              itemProp="sameAs"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a
              href="mailto:farid.savarudin@example.com"
              aria-label="Email Contact"
              itemProp="email"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={32} />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="text-gray-400 hover:text-blue-500">
          <FaChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
