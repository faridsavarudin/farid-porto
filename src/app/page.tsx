import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Farid Savarudin",
    jobTitle: "Android Developer",
    description: "Experienced Android Developer specializing in Kotlin, Kotlin Multiplatform, Flutter, and Jetpack Compose with 5+ years of professional experience.",
    url: "https://faridsavarudin.vercel.app",
    sameAs: [
      "https://github.com/faridsavarudin",
      "https://www.linkedin.com/in/faridsavarudin",
    ],
    knowsAbout: [
      "Android Development",
      "Kotlin",
      "Kotlin Multiplatform",
      "Flutter",
      "Jetpack Compose",
      "Compose Multiplatform",
      "Java",
      "Mobile Development",
      "Cross-platform Development",
      "React",
      "Vue.js",
      "Laravel",
      "Firebase",
      "REST API",
    ],
    worksFor: {
      "@type": "Organization",
      name: "PT Astronaut Teknologi Indonesia",
    },
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
