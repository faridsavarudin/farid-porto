'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaAndroid, FaTimes, FaCalendar, FaUserTie } from 'react-icons/fa';
import { useState } from 'react';

interface ProjectDetail {
  title: string;
  dateRange: string;
  company: string;
  description: string;
  highlights: string[];
  challenges: string[];
  impact: string;
  technologies: string[];
  duration: string;
  role: string;
  color: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const projects: ProjectDetail[] = [
    {
      title: "ASTRNT Video Interview Platform",
      dateRange: "Nov 2020 - Present",
      company: "PT Astronaut Teknologi Indonesia • Bandung (Hybrid)",
      description: "Enterprise video interview platform SDK and application development, enabling seamless asynchronous recruitment solutions for companies worldwide. Built and maintained critical Android infrastructure serving thousands of users.",
      highlights: [
        "Designed and implemented complete Android CI/CD pipeline using Codemagic for automated builds, testing, and distribution",
        "Built and maintained ASTRNT Android SDKs with comprehensive documentation for internal and external developers",
        "Led migration of legacy Java codebase to Kotlin, improving code readability and null-safety across all active modules",
        "Stabilized video processing pipeline by refactoring media workflows and optimizing asynchronous execution",
        "Enhanced background processing reliability for large media uploads with robust execution strategies",
        "Systematically improved application performance through debugging, optimization, and clean code standards"
      ],
      challenges: [
        "Complex video transcoding and compression optimization",
        "Maintaining SDK compatibility across multiple Android versions",
        "Preventing interrupted background tasks and inconsistent states",
        "Legacy codebase modernization without breaking existing integrations"
      ],
      impact: "Significantly reduced manual release effort, deployment risk, and video-related production failures. Enabled faster SDK adoption and improved overall application stability for enterprise clients.",
      technologies: ["Kotlin", "RxJava2", "Retrofit", "Dagger Hilt", "Firebase", "Realm", "CameraView", "WorkManager", "Glide", "Sentry", "Codemagic CI/CD"],
      duration: "5+ years (Ongoing)",
      role: "Android Developer",
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "Ars. - AR/VR Media Platform",
      dateRange: "Jan 2019 - Dec 2020",
      company: "Ars.",
      description: "AR/VR media platform enabling creators and brands to present projects, portfolios, and products with immersive experiences. Developed the simplest way to publish limitless possibilities combining augmented reality, virtual reality, stop motion, images, and videos.",
      highlights: [
        "Built innovative AR/VR content publishing platform",
        "Implemented seamless integration of multiple media types (AR, VR, stop motion, images, videos)",
        "Created intuitive content creation and management interface",
        "Developed cross-platform compatibility for AR/VR experiences"
      ],
      challenges: [
        "Complex AR/VR rendering optimization",
        "Multi-format media integration and synchronization",
        "Performance optimization for resource-intensive AR/VR content"
      ],
      impact: "Enabled creators and brands worldwide to showcase their work through immersive AR/VR experiences, revolutionizing digital portfolio presentation.",
      technologies: ["Android", "ARCore", "OpenGL", "Media Processing", "3D Graphics"],
      duration: "2 years",
      role: "Mobile Application Developer",
      color: "from-pink-600 to-rose-600"
    },
    {
      title: "SMARTernak - Livestock Monitoring System",
      dateRange: "Jul 2018 - Mar 2019",
      company: "PT Dycode Cominfotech Development",
      description: "IoT-based livestock monitoring application tracking animal location, movement, weight, and health status. Connected to IoT devices via internet and Bluetooth with AI-powered health analysis for accurate cattle condition assessment.",
      highlights: [
        "Built comprehensive livestock tracking and monitoring system",
        "Integrated IoT devices with real-time data synchronization",
        "Implemented AI-powered health analysis for cattle condition monitoring",
        "Developed location tracking and movement pattern analysis"
      ],
      challenges: [
        "Real-time IoT device communication and data synchronization",
        "AI model integration for health prediction",
        "Battery optimization for continuous monitoring"
      ],
      impact: "Revolutionized livestock management with real-time monitoring, enabling farmers to track health and location of cattle more accurately and efficiently.",
      technologies: ["Android", "IoT", "Bluetooth", "AI/ML", "Real-time Data", "Location Services"],
      duration: "9 months",
      role: "Android Developer",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "JogjaBike - Smart Bike Sharing Platform",
      dateRange: "Jun 2018 - Dec 2018",
      company: "PT Dycode Cominfotech Development",
      description: "Smart bike-sharing platform for Yogyakarta, Indonesia. Public bicycle lending service with QR-Code access, smart lock integration, live location tracking, and anti-theft system ensuring rider safety and bike security.",
      highlights: [
        "Built complete bike-sharing platform with QR-Code access system",
        "Implemented smart lock integration for secure bike access",
        "Developed real-time GPS tracking and anti-theft security system",
        "Created user-friendly bike rental and return workflow"
      ],
      challenges: [
        "Smart lock integration and reliable unlocking mechanism",
        "Real-time location tracking and geofencing",
        "Anti-theft system implementation"
      ],
      impact: "Provided convenient public transportation solution for Yogyakarta's urban environment, promoting eco-friendly mobility and reducing traffic congestion.",
      technologies: ["Android", "QR-Code", "GPS", "IoT", "Smart Lock", "Maps API"],
      duration: "7 months",
      role: "Android Developer",
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "My Nissan Car - Indomobil Service App",
      dateRange: "Oct 2017 - May 2018",
      company: "PT Dycode Cominfotech Development • Indomobil Nissan",
      description: "Official Indomobil Nissan application providing comprehensive vehicle information and dealer services. Features include service booking, test drive scheduling, spare parts ordering, and complete access to Nissan's dealer network in Indonesia.",
      highlights: [
        "Built complete automotive service management application",
        "Implemented online service and test drive booking system",
        "Developed spare parts ordering and inventory integration",
        "Created dealer locator with comprehensive service information"
      ],
      challenges: [
        "Integration with multiple dealer management systems",
        "Real-time service slot availability management",
        "Complex booking workflow and confirmation system"
      ],
      impact: "Enhanced customer experience for Nissan vehicle owners in Indonesia, streamlining service bookings and providing easy access to dealer services.",
      technologies: ["Android", "API Integration", "Booking System", "Maps", "Push Notifications"],
      duration: "8 months",
      role: "Android Developer",
      color: "from-red-600 to-orange-600"
    },
    {
      title: "APIaward - Anugerah Pesona Indonesia",
      dateRange: "Feb 2018 - Jun 2018",
      company: "Ministry of Tourism RI",
      description: "Indonesia's most popular tourism event application supported by the Ministry of Tourism. Platform for awarding top tourism destinations through people's choice voting, involving communities from regency to provincial level to promote tourism areas across Indonesia.",
      highlights: [
        "Built national tourism awards and voting platform",
        "Implemented secure voting system with fraud prevention",
        "Developed comprehensive tourism destination showcase",
        "Created community engagement features for tourism promotion"
      ],
      challenges: [
        "Secure voting system with duplicate prevention",
        "High traffic handling during peak voting periods",
        "Multi-region data aggregation and reporting"
      ],
      impact: "Successfully promoted tourism potential from urban to remote areas across Indonesia, increasing tourist visits and highlighting best tourism destinations nationwide.",
      technologies: ["Android", "Voting System", "Firebase", "Analytics", "Media Gallery"],
      duration: "5 months",
      role: "Android Developer",
      color: "from-yellow-600 to-amber-600"
    },
    {
      title: "SAPP - Sistem Administrasi Pertanggungjawaban",
      dateRange: "Feb 2019 - Mar 2019",
      company: "PT Dycode Cominfotech Development • Kominfo",
      description: "Administrative accountability system for Ministry of Communication and Information. Digital platform enabling Kominfo staff to submit and manage official business travel reports and expense accountability documentation.",
      highlights: [
        "Built government administrative reporting system",
        "Implemented document management and submission workflow",
        "Developed expense tracking and accountability features",
        "Created approval workflow for supervisors and admin"
      ],
      challenges: [
        "Government compliance and security requirements",
        "Document digitization and validation",
        "Multi-level approval workflow implementation"
      ],
      impact: "Digitalized government administrative processes, improving efficiency and accountability in business travel reporting for Kominfo staff.",
      technologies: ["Android", "Document Management", "PDF", "Secure Storage", "Workflow System"],
      duration: "2 months",
      role: "Android Developer",
      color: "from-indigo-600 to-purple-600"
    },
    {
      title: "Antar AQUA - AHS Ladies Management",
      dateRange: "Sep 2017 - Feb 2018",
      company: "PT Dycode Cominfotech Development • AQUA",
      description: "Order management application for AQUA Home Service (AHS) Ladies registered as Antar AQUA outlets. Platform enabling AHS Ladies to accept, reject, and manage customer orders with integrated reporting for sales, inventory, and consumer data.",
      highlights: [
        "Built complete order management system for water delivery service",
        "Implemented real-time order notification and acceptance workflow",
        "Developed comprehensive reporting (sales, inventory, consumer list)",
        "Created inventory tracking and management features"
      ],
      challenges: [
        "Real-time order distribution to available outlets",
        "Inventory synchronization across multiple outlets",
        "Offline capability for areas with poor connectivity"
      ],
      impact: "Streamlined AQUA home delivery operations, enabling efficient order management and improving service quality for AHS Ladies and customers.",
      technologies: ["Android", "Order Management", "Real-time Notifications", "Reporting", "Inventory System"],
      duration: "6 months",
      role: "Android Developer",
      color: "from-blue-500 to-teal-500"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of my recent Android development projects showcasing my skills and expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              whileHover={{ y: -10 }}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <FaAndroid className="text-white text-7xl opacity-50" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-600/20 text-blue-400 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-blue-500 text-sm font-semibold hover:text-blue-400">
                  Click to view details →
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${selectedProject.color} p-6 relative`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                >
                  <FaTimes className="text-2xl" />
                </button>
                <h2 className="text-3xl font-bold text-white mb-2 pr-10">{selectedProject.title}</h2>
                <p className="text-gray-100 text-sm">{selectedProject.dateRange} • {selectedProject.company}</p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-blue-500 mr-2">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Challenges */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Technical Challenges</h3>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-orange-500 mr-2">▸</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact & Results */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Impact & Results</h3>
                  <p className="text-gray-300">{selectedProject.impact}</p>
                </div>

                {/* Bottom Info Grid */}
                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-700">
                  {/* Technology Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-600/20 text-blue-400 text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Duration & Role */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <FaCalendar className="text-blue-500" />
                        <span className="text-sm font-semibold">Project Duration</span>
                      </div>
                      <p className="text-white">{selectedProject.duration}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <FaUserTie className="text-blue-500" />
                        <span className="text-sm font-semibold">My Role</span>
                      </div>
                      <p className="text-white">{selectedProject.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
