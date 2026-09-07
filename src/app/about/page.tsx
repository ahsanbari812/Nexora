import React from "react";
import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMissionSection } from "@/components/about/AboutMissionSection";
import { WhatWeBelieveSection } from "@/components/about/WhatWeBelieveSection";
import { AboutPrinciplesSection } from "@/components/about/AboutPrinciplesSection";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us — Nexora AI Academy",
  description:
    "Turning AI awareness into practical capability. Learn about Nexora's mission, core beliefs, and educational methodology for students, educators, and organizations.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section with exact headline */}
      <AboutHero />

      {/* 2. OUR MISSION Section */}
      <AboutMissionSection />

      {/* 3. WHAT WE BELIEVE Section (4 Core Convictions) */}
      <WhatWeBelieveSection />

      {/* 4. Operating Methodology */}
      <AboutPrinciplesSection />

      {/* 5. Closing Conversion CTA */}
      <AboutCTA />
    </main>
  );
}
