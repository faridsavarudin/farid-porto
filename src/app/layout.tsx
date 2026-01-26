import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Farid Savarudin - Professional Android Developer | Portfolio",
    template: "%s | Farid Savarudin"
  },
  description: "⭐ Professional Android Developer with 8+ years experience at PT Astronaut Teknologi Indonesia. Expert in Kotlin, Kotlin Multiplatform, Flutter, Jetpack Compose. View portfolio of innovative mobile applications and cross-platform projects. Available for Android development opportunities.",
  applicationName: "Farid Savarudin Portfolio",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.svg',
  },
  keywords: [
    "Farid Savarudin",
    "Farid Savarudin Android Developer",
    "Farid Savarudin Portfolio",
    "Android Developer",
    "Professional Android Developer",
    "Senior Android Developer",
    "Android Developer Indonesia",
    "Android Developer Bandung",
    "Kotlin Developer Indonesia",
    "Mobile Developer Portfolio",
    "Mobile App Developer",
    "Native Android Developer",
    "Kotlin Developer",
    "Kotlin Multiplatform Developer",
    "KMM Developer",
    "Flutter Developer",
    "Jetpack Compose Expert",
    "Compose Multiplatform",
    "Cross Platform Mobile Developer",
    "React Developer",
    "Vue.js Developer",
    "Laravel Developer",
    "Full Stack Mobile Developer",
    "Android SDK Expert",
    "Java Android Developer",
    "Mobile Application Development",
    "Android App Development",
    "PT Astronaut Teknologi Indonesia",
    "ASTRNT Developer",
    "Android Portfolio Website",
    "Mobile Developer Resume",
    "Hire Android Developer"
  ],
  authors: [{ name: "Farid Savarudin", url: "https://faridsavarudin.vercel.app" }],
  creator: "Farid Savarudin",
  publisher: "Farid Savarudin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  classification: "Portfolio Website",
  openGraph: {
    title: "Farid Savarudin - Professional Android Developer | Mobile App Expert",
    description: "⭐ 5+ years experienced Android Developer at PT Astronaut Teknologi Indonesia. Specialist in Kotlin, Kotlin Multiplatform, Flutter & Jetpack Compose. Building innovative mobile solutions.",
    url: "https://faridsavarudin.vercel.app",
    siteName: "Farid Savarudin - Android Developer Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "https://faridsavarudin.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Farid Savarudin - Professional Android Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@faridsavarudin",
    title: "Farid Savarudin - Professional Android Developer",
    description: "⭐ Android & Mobile Developer | 5+ years experience | Kotlin | Flutter | Jetpack Compose | Available for opportunities",
    creator: "@faridsavarudin",
    images: {
      url: "https://faridsavarudin.vercel.app/og-image.jpg",
      alt: "Farid Savarudin Android Developer Portfolio"
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "3YnD3Ze8xo30f19p9EB2I3PcpoyWJ2nTumVVYKb4v74",
  },
  alternates: {
    canonical: "https://faridsavarudin.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1F2937" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://faridsavarudin.vercel.app" />
        <link rel="alternate" hrefLang="en" href="https://faridsavarudin.vercel.app" />
        <link rel="alternate" hrefLang="id" href="https://faridsavarudin.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
