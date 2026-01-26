import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farid Savarudin - Android Developer | Mobile App Developer Portfolio",
  description: "Experienced Android Developer specializing in Kotlin, Kotlin Multiplatform, Flutter, and Jetpack Compose. 5+ years building mobile applications. View my portfolio of Android apps, cross-platform projects, and full-stack development work.",
  keywords: [
    "Farid Savarudin",
    "Android Developer",
    "Android Developer Indonesia",
    "Android Developer Bandung",
    "Mobile Developer",
    "Mobile App Developer",
    "Kotlin Developer",
    "Kotlin Multiplatform",
    "Flutter Developer",
    "Jetpack Compose",
    "Compose Multiplatform",
    "Cross Platform Developer",
    "React Developer",
    "Vue.js Developer",
    "Laravel Developer",
    "Full Stack Developer",
    "Android SDK",
    "Java Developer",
    "Mobile Application Development",
    "PT Astronaut Teknologi Indonesia",
    "ASTRNT Developer",
    "Android Portfolio",
    "Farid Savarudin Portfolio"
  ],
  authors: [{ name: "Farid Savarudin", url: "https://faridsavarudin.vercel.app" }],
  creator: "Farid Savarudin",
  publisher: "Farid Savarudin",
  openGraph: {
    title: "Farid Savarudin - Professional Android Developer",
    description: "Experienced Android Developer with 5+ years expertise in Kotlin, Flutter, and cross-platform mobile development. Specializing in native Android, Kotlin Multiplatform, and modern mobile architectures.",
    url: "https://faridsavarudin.vercel.app",
    siteName: "Farid Savarudin Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://faridsavarudin.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Farid Savarudin - Android Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farid Savarudin - Android Developer",
    description: "Experienced Android & Mobile Developer | Kotlin | Flutter | Jetpack Compose",
    creator: "@faridsavarudin",
    images: ["https://faridsavarudin.vercel.app/og-image.jpg"],
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
