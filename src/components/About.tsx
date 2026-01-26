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
      title: "Mobile Development",
      description: "Specialized in Android development with expertise in Kotlin and Java"
    },
    {
      icon: <FaCode className="text-4xl text-blue-500" />,
      title: "Clean Code",
      description: "Following SOLID principles and best practices for maintainable code"
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500" />,
      title: "Autonomous Android Developer",
      description: "Responsible for end-to-end Android development, cross-team coordination with backend and iOS, and delivering production-ready releases."
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
              Android Developer with a Passion for Innovation
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I&apos;m a dedicated Android developer with a strong foundation in mobile application development.
              My journey in software development has equipped me with the skills to build robust, scalable,
              and user-friendly Android applications.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I specialize in native Android development using Kotlin and Java, with experience in modern
              Android architecture patterns like MVVM, Clean Architecture, and implementing RESTful APIs.
              I&apos;m passionate about writing clean, maintainable code and staying up-to-date with the
              latest Android development trends.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source
              projects, and continuously improving my skills through learning and experimentation.
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
