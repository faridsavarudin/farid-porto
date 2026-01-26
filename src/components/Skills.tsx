'use client';

import { motion } from 'framer-motion';
import { 
  FaAndroid, 
  FaJava, 
  FaGitAlt, 
  FaDatabase,
  FaFigma,
  FaReact,
  FaVuejs,
  FaLaravel
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
  SiComposer
} from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Kotlin", icon: <SiKotlin className="text-5xl" />, color: "text-purple-500" },
        { name: "Java", icon: <FaJava className="text-5xl" />, color: "text-red-500" },
      ]
    },
    {
      category: "Mobile Development",
      skills: [
        { name: "Android SDK", icon: <FaAndroid className="text-5xl" />, color: "text-green-500" },
        { name: "Kotlin Multiplatform", icon: <SiKotlin className="text-5xl" />, color: "text-purple-600" },
        { name: "Jetpack Compose", icon: <SiJetpackcompose className="text-5xl" />, color: "text-blue-500" },
        { name: "Compose Multiplatform", icon: <SiComposer className="text-5xl" />, color: "text-blue-600" },
        { name: "Flutter", icon: <SiFlutter className="text-5xl" />, color: "text-cyan-400" },
        { name: "Android Studio", icon: <SiAndroidstudio className="text-5xl" />, color: "text-green-400" },
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", icon: <FaReact className="text-5xl" />, color: "text-cyan-500" },
        { name: "Vue.js", icon: <FaVuejs className="text-5xl" />, color: "text-green-600" },
        { name: "Laravel", icon: <FaLaravel className="text-5xl" />, color: "text-red-600" },
      ]
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Firebase", icon: <SiFirebase className="text-5xl" />, color: "text-yellow-500" },
        { name: "SQLite", icon: <SiSqlite className="text-5xl" />, color: "text-blue-400" },
        { name: "REST API", icon: <FaDatabase className="text-5xl" />, color: "text-gray-400" },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-5xl" />, color: "text-orange-600" },
        { name: "Gradle", icon: <SiGradle className="text-5xl" />, color: "text-teal-500" },
        { name: "Postman", icon: <SiPostman className="text-5xl" />, color: "text-orange-500" },
        { name: "Figma", icon: <FaFigma className="text-5xl" />, color: "text-pink-500" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">{category.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/70 transition-all hover:scale-105"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`flex flex-col items-center justify-center ${skill.color}`}>
                      {skill.icon}
                      <p className="mt-4 text-white font-medium text-center">{skill.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-lg">
            Always learning and exploring new technologies to stay current with industry trends
          </p>
        </motion.div>
      </div>
    </section>
  );
}
