import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  // Enhanced Structured data for better SEO ranking
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Farid Savarudin",
    alternateName: "Farid Savarudin Android Developer",
    jobTitle: "Android & Kotlin Multiplatform Engineer",
    description: "Android engineer with 9 years of professional experience in Kotlin, Kotlin Multiplatform and Jetpack Compose, specializing in realtime systems (MQTT, WebSocket, WebRTC), GPS telemetry and geofencing. Based in Bandung, Indonesia.",
    url: "https://faridsavarudin.vercel.app",
    image: "https://faridsavarudin.vercel.app/og-image.jpg",
    sameAs: [
      "https://github.com/faridsavarudin",
      "https://www.linkedin.com/in/farid-savarudin",
    ],
    knowsAbout: [
      "Android Development",
      "Kotlin Programming",
      "Kotlin Multiplatform Mobile",
      "Compose Multiplatform",
      "Jetpack Compose",
      "Java Programming",
      "Realtime Systems",
      "MQTT",
      "WebSocket",
      "WebRTC",
      "GPS Telemetry",
      "Geofencing",
      "IoT Device Communication",
      "Mobile Application Development",
      "Cross-platform Development",
      "Kotlin/Native Interop",
      "React.js",
      "Vue.js",
      "Laravel PHP Framework",
      "Firebase",
      "REST API Development",
      "Android SDK",
      "MVVM Architecture",
      "MVI Architecture",
      "Clean Architecture",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Android & Kotlin Multiplatform Engineer",
      occupationLocation: {
        "@type": "City",
        name: "Bandung"
      },
      estimatedSalary: {
        "@type": "MonetaryAmountDistribution",
        name: "base",
        currency: "IDR"
      },
      description: "Builds native Android and Kotlin Multiplatform applications, with a focus on realtime data, GPS telemetry and field-deployed devices",
      skills: "Kotlin, Java, Jetpack Compose, Kotlin Multiplatform, Android SDK, MQTT, WebSocket, WebRTC, Coroutines, Hilt, Room"
    },
    knowsLanguage: ["English", "Indonesian"],
    award: "9 years professional Android development experience",
  };

  // BreadcrumbList Schema for better navigation understanding
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://faridsavarudin.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://faridsavarudin.vercel.app/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Skills",
        "item": "https://faridsavarudin.vercel.app/#skills"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Projects",
        "item": "https://faridsavarudin.vercel.app/#projects"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://faridsavarudin.vercel.app/#contact"
      }
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Farid Savarudin - Android Developer Portfolio",
    "alternateName": ["Farid Savarudin", "Farid Savarudin Portfolio"],
    "url": "https://faridsavarudin.vercel.app",
    "description": "Professional Android Developer portfolio showcasing mobile applications and projects",
    "inLanguage": "en",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://faridsavarudin.vercel.app/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* Enhanced Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      <main className="relative min-h-screen bg-ink-950 text-ink-200 selection:bg-signal-amber/30">
        <div
          className="pointer-events-none fixed inset-0 signal-grid opacity-60"
          aria-hidden="true"
        />
        <div className="relative">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
