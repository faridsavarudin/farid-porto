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
    jobTitle: "Senior Android Developer",
    description: "Experienced Android Developer specializing in Kotlin, Kotlin Multiplatform, Flutter, and Jetpack Compose with 5+ years of professional experience building innovative mobile applications.",
    url: "https://faridsavarudin.vercel.app",
    image: "https://faridsavarudin.vercel.app/og-image.jpg",
    sameAs: [
      "https://github.com/faridsavarudin",
      "https://www.linkedin.com/in/faridsavarudin",
    ],
    knowsAbout: [
      "Android Development",
      "Kotlin Programming",
      "Kotlin Multiplatform Mobile",
      "Flutter Development",
      "Jetpack Compose",
      "Compose Multiplatform",
      "Java Programming",
      "Mobile Application Development",
      "Cross-platform Development",
      "React.js",
      "Vue.js",
      "Laravel PHP Framework",
      "Firebase",
      "REST API Development",
      "Mobile UI/UX Design",
      "Android SDK",
      "Material Design",
      "MVVM Architecture",
      "Clean Architecture",
    ],
    worksFor: {
      "@type": "Organization",
      name: "PT Astronaut Teknologi Indonesia",
      url: "https://astrnt.co",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Android Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Indonesia"
      },
      estimatedSalary: {
        "@type": "MonetaryAmountDistribution",
        name: "base",
        currency: "IDR"
      },
      description: "Develops native and cross-platform mobile applications for Android devices",
      skills: "Kotlin, Java, Flutter, Jetpack Compose, Android SDK, Kotlin Multiplatform"
    },
    knowsLanguage: ["English", "Indonesian"],
    award: "5+ years professional Android development experience",
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
      
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
