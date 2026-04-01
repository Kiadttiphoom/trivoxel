import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiadttiphoom Bu-iad | Full Stack Developer",
  description: "Senior Full Stack Developer & Java Specialist. Building high-impact enterprise systems and modern web experiences.",
  keywords: ["Full Stack Developer", "Java Developer", "Spring Boot", "Next.js", "System Architect", "Kiadttiphoom Bu-iad"],
  authors: [{ name: "Kiadttiphoom Bu-iad" }],
  creator: "Kiadttiphoom Bu-iad",
  publisher: "Kiadttiphoom Bu-iad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Kiadttiphoom Bu-iad | Digital Experiences",
    description: "Personal Portfolio of Kiadttiphoom Bu-iad, specializing in Java Backend and Modern Web.",
    url: "https://kiadttiphoom.dev", // Replace with your actual domain
    siteName: "Kiadttiphoom Portfolio",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiadttiphoom Bu-iad | Web Developer",
    description: "Building high-impact enterprise systems.",
    creator: "@Kiadttiphoom",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${outfit.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
