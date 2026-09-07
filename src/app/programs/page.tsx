import React from "react";
import { Metadata } from "next";
import { ProgramsHero } from "@/components/programs/ProgramsHero";
import { ProgramsCatalog } from "@/components/programs/ProgramsCatalog";
import { CustomProgramsCallout } from "@/components/programs/CustomProgramsCallout";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export const metadata: Metadata = {
  title: "Training Programs — Nexora AI Academy",
  description:
    "Explore practical AI training programs, bootcamps, and workshops designed for students, educators, corporate teams, and institutions. Training built around real needs.",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section with exact headline */}
      <ProgramsHero />

      {/* 2. Dynamic Filterable Catalog with Audience & Format filters */}
      <ProgramsCatalog />

      {/* 3. Custom Training Co-Design Bridge */}
      <CustomProgramsCallout />

      {/* 4. Closing High-Conversion CTA */}
      <FinalCTASection />
    </main>
  );
}
