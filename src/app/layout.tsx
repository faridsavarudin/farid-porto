import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://faridsavarudin.vercel.app'),
  title: {
    default: "Farid Savarudin - Android & Kotlin Multiplatform Engineer | Portfolio",
    template: "%s | Farid Savarudin"
  },
  description: "Android engineer with 9 years of experience — Kotlin, Kotlin Multiplatform, Jetpack Compose. Recently sole engineer on four realtime Android systems for connected devices and field operations: MQTT, WebSocket, WebRTC, GPS telemetry and geofencing. Based in Bandung, available for mobile development opportunities.",
  applicationName: "Farid Savarudin Portfolio",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
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
    "Mobile Developer Bandung",
    "Kotlin Multiplatform Developer Bandung",
    "Realtime Android Developer",
    "MQTT Android Developer",
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
    title: "Farid Savarudin - Android & Kotlin Multiplatform Engineer",
    description: "Android engineer, 9 years. Recently sole engineer on four realtime Android systems for connected devices and field operations — Kotlin, KMP, MQTT, WebSocket, WebRTC, GPS. Based in Bandung.",
    url: "/",
    siteName: "Farid Savarudin Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/og-image.jpg",
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
    title: "Farid Savarudin - Android & Kotlin Multiplatform Engineer",
    description: "Android engineer | 9 years | Kotlin | Kotlin Multiplatform | Jetpack Compose | realtime systems (MQTT, WebSocket, WebRTC) | Bandung | Available for opportunities",
    creator: "@faridsavarudin",
    images: {
      url: "/og-image.jpg",
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
    canonical: "/",
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
        <title>Farid Savarudin - Android & Kotlin Multiplatform Engineer | Portfolio</title>
        <meta name="theme-color" content="#090d12" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${plexSans.variable} ${sora.variable} ${plexMono.variable} font-sans bg-ink-950 text-ink-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
