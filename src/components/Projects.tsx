'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';

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
      title: "XORA Connect — Kotlin Multiplatform Passenger App",
      dateRange: "Feb 2026 - Aug 2026",
      company: "Agora Techno Solution (Contract)",
      description: "Compose Multiplatform passenger app (Android + iOS) for a city transit network — route and stop browsing, journey planning, service-disruption notifications and issue reporting — shipped at ~89% shared code across 9 Gradle modules. Sole engineer.",
      highlights: [
        "Delivered ~89% shared code across 9 modules with Compose Multiplatform, Ktor, SQLDelight and Koin — four of five feature modules entirely common",
        "Built realtime vehicle tracking over WebSocket with auto-reconnect",
        "Fixed a class of failure where the socket reports healthy but delivers nothing — Ktor ping interval, a 90-second stall watchdog and cancellation-aware reconnect",
        "Wrote ~955 lines of Kotlin/Native iOS interop, including a 610-line MapKit map via UIKitView and cinterop where no multiplatform map library exists",
        "Integrated Keycloak (OIDC) authentication"
      ],
      challenges: [
        "No multiplatform map library — the iOS map had to be hand-written against MapKit through cinterop",
        "Half-open WebSockets that send no FIN, freezing the vehicle markers until the app is killed",
        "Keeping four of five feature modules fully common without platform leakage"
      ],
      impact: "A single Kotlin codebase serving both platforms with a native map on each, and a realtime layer that recovers on its own instead of needing an app restart. Kotlin throughout; not native Swift development.",
      technologies: ["Kotlin Multiplatform", "Compose Multiplatform", "Ktor", "SQLDelight", "Koin", "WebSocket", "Kotlin/Native cinterop", "MapKit", "Keycloak / OIDC"],
      duration: "7 months",
      role: "Sole Engineer",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "LOCOAndroid — In-Vehicle Driver Tablet",
      dateRange: "Feb 2026 - Aug 2026",
      company: "Agora Techno Solution (Contract)",
      description: "Vehicle-mounted Android tablet used by drivers for the length of a shift. Streams GPS telemetry to an operations control centre, raises proximity warnings for upcoming waypoints and stops, and shows live roadside-camera feeds. Sole engineer.",
      highlights: [
        "Built on Clean Architecture + MVI with Jetpack Compose, Hilt, Room and DataStore",
        "Led a live transport migration from REST/WebSocket to MQTT (HiveMQ), defining the shared topic / payload / acknowledgement contract with the control centre",
        "Rolled the migration out behind layered feature flags so the running operational path was never interrupted",
        "Integrated live roadside camera streams over RTSP/HLS and WebRTC",
        "Designed offline durability for telemetry — a Room buffer with mutex-serialised sync that observes network state and broker acknowledgement separately"
      ],
      challenges: [
        "A checkpoint-skip failure where a vehicle passed several waypoints between two GPS ticks in battery-saving mode",
        "Keeping a safety-critical path alive during a transport-layer migration",
        "Half-open connections that report healthy while delivering nothing"
      ],
      impact: "Replaced nearest-versus-next waypoint logic with a greedy sweep over unpassed waypoints plus sequential-inversion detection, and delivered a working in-vehicle telemetry and warning system on MQTT with no interruption to the operational path.",
      technologies: ["Kotlin", "Jetpack Compose", "MVI", "Clean Architecture", "Hilt", "Room", "DataStore", "MQTT (HiveMQ)", "WebRTC", "RTSP/HLS"],
      duration: "7 months",
      role: "Sole Android Engineer",
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "JPLMonitor — Roadside Monitoring Unit",
      dateRange: "Feb 2026 - Aug 2026",
      company: "Agora Techno Solution (Contract)",
      description: "Android unit installed at fixed roadside monitoring posts. Consumes approaching-vehicle telemetry over a shared MQTT contract and drives alarm, siren and barrier control, alongside a camera and an on-site AI object-detection feed. Sole engineer.",
      highlights: [
        "Built on MVVM with a StateFlow / SharedFlow event bus, Jetpack Compose and multi-module Hilt DI",
        "Consumed the same MQTT contract as LOCOAndroid — subscribing to vehicle telemetry and replying with acknowledgements",
        "Implemented generation-guarded reconnect so a stale reconnect cannot silently overwrite the live subscription",
        "Wired alarm, siren and barrier control plus an RTSP camera feed and an on-site AI object-detection feed"
      ],
      challenges: [
        "cleanStart broker sessions that drop every subscription on reconnect — telemetry stops silently while indicators stay green",
        "Coordinating one payload and acknowledgement contract across two independent apps"
      ],
      impact: "A reliable roadside monitoring unit that stays in sync with in-vehicle telemetry and fails loudly rather than silently when the connection drops.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "StateFlow / SharedFlow", "Hilt", "MQTT (HiveMQ)", "RTSP"],
      duration: "7 months",
      role: "Sole Android Engineer",
      color: "from-amber-600 to-orange-600"
    },
    {
      title: "obupis — On-Board Passenger Information Unit",
      dateRange: "Feb 2026 - Aug 2026",
      company: "Agora Techno Solution (Contract)",
      description: "Tablet unit mounted inside the vehicle that drives automatic stop announcements and an LED destination board from GPS. 100% Jetpack Compose, MVVM with an event-bus architecture. Live on operating routes. Sole engineer.",
      highlights: [
        "Built a GPS geofencing and announcement engine with a three-radius event model (approaching / arriving / exit)",
        "Hybrid audio pipeline — 48 pre-recorded assets primary with native TTS fallback and loudness correction",
        "Drove an LED destination board over a custom HTTP protocol discovered by UDP broadcast",
        "Designed a directional anti-reverse gate that suppresses announcements when the vehicle travels the wrong way while still guaranteeing forward progress",
        "Dual-transport telemetry — REST for trip history plus HiveMQ MQTT5 for live tracking"
      ],
      challenges: [
        "A one-shot geofence exit latch that would strand the vehicle permanently at a stop if an event were simply discarded",
        "GPS fixes that drop speed to zero on WiFi / cell, breaking ETA",
        "Changing GPS frequency without restarting the foreground service or cancelling collection"
      ],
      impact: "Announcements that stay correct when the vehicle reverses or crawls between adjacent stops, and an adaptive GPS interval that never restarts the service. Deployed on live operating routes.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Geofencing", "FusedLocationProvider", "MQTT5 (HiveMQ)", "TextToSpeech", "Foreground Service", "UDP Discovery"],
      duration: "7 months",
      role: "Sole Android Engineer",
      color: "from-fuchsia-600 to-pink-600"
    },
    {
      title: "ASTRNT Video Interview Platform",
      dateRange: "Nov 2020 - Aug 2026",
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
      duration: "~6 years",
      role: "Android Developer (scope later expanded to full-stack)",
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

  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    lastFocused.current = document.activeElement as HTMLElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      lastFocused.current?.focus?.();
    };
  }, [selectedProject]);

  const headingId = 'project-modal-title';

  return (
    <Section id="projects">
      <SectionHeader
        index="03"
        label="Projects"
        title="My Projects"
        intro="A selection of recent work — realtime systems for connected devices, a Kotlin Multiplatform app, and earlier Android delivery across enterprise and government"
      />

      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.li
            key={index}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: Math.min((index % 3) * 0.05, 0.15),
              ease: 'easeOut',
            }}
          >
            <article
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`View details: ${project.title}`}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-ink-800 bg-ink-900/50 p-6 transition-colors duration-200 hover:border-ink-600 hover:bg-ink-900"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.color} opacity-50 transition-opacity group-hover:opacity-100`}
              />

              <div className="flex items-center justify-between font-mono text-[0.7rem] text-ink-500">
                <span className="text-signal-amber">P-{String(index + 1).padStart(2, '0')}</span>
                <span>{project.dateRange}</span>
              </div>

              <h3 className="mt-4 font-display text-[1.05rem] font-medium leading-snug text-ink-50">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-ink-500">{project.company}</p>

              <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-400">
                {project.description}
              </p>

              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 border-t border-ink-800 pt-4 font-mono text-[0.7rem]">
                <dt className="text-ink-600">role</dt>
                <dt className="text-ink-600">duration</dt>
                <dd className="truncate text-ink-300" title={project.role}>
                  {project.role}
                </dd>
                <dd className="text-ink-300">{project.duration}</dd>
              </dl>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="rounded border border-ink-800 px-2 py-0.5 font-mono text-[0.7rem] text-ink-400"
                  >
                    {tech}
                  </li>
                ))}
                {project.technologies.length > 4 && (
                  <li className="rounded px-2 py-0.5 font-mono text-[0.7rem] text-ink-600">
                    +{project.technologies.length - 4}
                  </li>
                )}
              </ul>

              <span className="mt-5 font-mono text-xs uppercase tracking-label text-ink-500 transition-colors group-hover:text-signal-amber">
                View details →
              </span>
            </article>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink-950/85 p-4 backdrop-blur-sm sm:items-center"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={headingId}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="my-auto w-full max-w-3xl overflow-hidden rounded-xl border border-ink-800 bg-ink-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative border-b border-ink-800 p-6 pr-14">
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${selectedProject.color}`}
                />
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close"
                  className="absolute right-4 top-4 rounded p-2 text-ink-400 transition-colors hover:text-ink-50"
                >
                  <FaTimes className="text-lg" />
                </button>
                <p className="mono-label">
                  {selectedProject.dateRange} · {selectedProject.company}
                </p>
                <h2
                  id={headingId}
                  className="mt-3 font-display text-2xl font-semibold leading-tight text-ink-50"
                >
                  {selectedProject.title}
                </h2>
              </div>

              <div className="max-h-[70vh] space-y-8 overflow-y-auto p-6">
                <p className="text-[0.975rem] leading-relaxed text-ink-300">
                  {selectedProject.description}
                </p>

                <div>
                  <h3 className="mono-label mb-3">Key Highlights</h3>
                  <ul className="space-y-2.5">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="flex gap-3 text-sm leading-relaxed text-ink-300">
                        <span className="mt-1 text-signal-green" aria-hidden="true">
                          ▸
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mono-label mb-3">Technical Challenges</h3>
                  <ul className="space-y-2.5">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex gap-3 text-sm leading-relaxed text-ink-300">
                        <span className="mt-1 text-signal-red" aria-hidden="true">
                          ▸
                        </span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mono-label mb-3">Impact &amp; Results</h3>
                  <p className="text-sm leading-relaxed text-ink-300">{selectedProject.impact}</p>
                </div>

                <div className="grid gap-6 border-t border-ink-800 pt-6 sm:grid-cols-2">
                  <div>
                    <h4 className="mono-label mb-3">Technology Stack</h4>
                    <ul className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((tech, index) => (
                        <li
                          key={index}
                          className="rounded border border-ink-800 px-2 py-0.5 font-mono text-[0.72rem] text-ink-400"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <dl className="space-y-4 font-mono text-sm">
                    <div>
                      <dt className="mono-label">Project Duration</dt>
                      <dd className="mt-1 text-ink-200">{selectedProject.duration}</dd>
                    </div>
                    <div>
                      <dt className="mono-label">My Role</dt>
                      <dd className="mt-1 text-ink-200">{selectedProject.role}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
