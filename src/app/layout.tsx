import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nexora AI Academy — Practical AI & Technology Training",
  description:
    "Learn AI. Build Smarter. Work Better. Nexora AI Academy helps students, educators, and organizations move from AI awareness to practical capability through hands-on training.",
  keywords: [
    "AI Training",
    "Practical AI",
    "Generative AI Workshops",
    "AI for Educators",
    "Corporate AI Training",
    "AI Bootcamps",
    "Prompt Engineering",
  ],
  authors: [{ name: "Nexora AI Academy" }],
  openGraph: {
    title: "Nexora AI Academy",
    description:
      "Move from AI awareness to practical capability. Specialized AI training for students, educators, and corporate teams.",
    type: "website",
    locale: "en_US",
    siteName: "Nexora AI Academy",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/Nexora logo.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/Nexora logo.png",
    apple: "/Nexora logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#071A2D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#071A2D]">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
