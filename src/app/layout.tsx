import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farid Savarudin - Android Developer Portfolio",
  description: "Portfolio website showcasing Android development projects and skills by Farid Savarudin",
  keywords: ["Android Developer", "Mobile Development", "Portfolio", "Farid Savarudin", "Kotlin", "Java"],
  authors: [{ name: "Farid Savarudin" }],
  openGraph: {
    title: "Farid Savarudin - Android Developer Portfolio",
    description: "Portfolio website showcasing Android development projects and skills",
    type: "website",
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
