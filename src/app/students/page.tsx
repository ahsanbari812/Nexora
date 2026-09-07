import React from "react";
import { Metadata } from "next";
import { StudentsHero } from "@/components/students/StudentsHero";
import { StudentSkillsGrid } from "@/components/students/StudentSkillsGrid";
import { StudentHonestySection } from "@/components/students/StudentHonestySection";
import { StudentProjectsSection } from "@/components/students/StudentProjectsSection";
import { StudentProgramsSection } from "@/components/students/StudentProgramsSection";
import { StudentsCTA } from "@/components/students/StudentsCTA";

export const metadata: Metadata = {
  title: "For Students — Nexora AI Academy",
  description:
    "Build practical skills for the AI-powered future. Master modern AI tools, prompt engineering, academic research synthesis, automation, and project development.",
};

export default function StudentsPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section with exact headline */}
      <StudentsHero />

      {/* 2. 6 Core Disciplines (AI Tools, Prompting, Research, Productivity, Automation, Projects) */}
      <StudentSkillsGrid />

      {/* 3. Anti-Hype Grounded Section (Rejecting 30-day engineer promises) */}
      <StudentHonestySection />

      {/* 4. Capstone Projects Showcase */}
      <StudentProjectsSection />

      {/* 5. Available Student Tracks from Catalog */}
      <StudentProgramsSection />

      {/* 6. Closing Student Enrollment CTA */}
      <StudentsCTA />
    </main>
  );
}
