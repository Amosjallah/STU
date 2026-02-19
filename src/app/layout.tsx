import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STUCCORD – Creative Digital Agency in Ghana",
  description: "Grow Your Brand Beyond Boundaries. STUCCORD is a creative digital agency in Koforidua, Ghana, specializing in Web Development, UI/UX, SaaS, SEO, and Social Media Marketing.",
  keywords: [
    "Digital Agency",
    "Web Development",
    "UI/UX Design",
    "SaaS Development",
    "SEO Services",
    "Social Media Marketing",
    "Koforidua",
    "Ghana",
    "STUCCORD"
  ],
  openGraph: {
    title: "STUCCORD – Creative Digital Agency in Ghana",
    description: "Grow Your Brand Beyond Boundaries. STUCCORD is a creative digital agency in Koforidua, Ghana, specializing in Web Development, UI/UX, SaaS, SEO, and Social Media Marketing.",
    url: "https://stuccord.com",
    siteName: "STUCCORD",
    locale: "en_GB",
    type: "website"
  }
};


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}
      >
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
