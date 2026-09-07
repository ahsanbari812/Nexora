import React from "react";
import { Metadata } from "next";
import { EducatorsHero } from "@/components/educators/EducatorsHero";
import { EducatorFocusGrid } from "@/components/educators/EducatorFocusGrid";
import { AcademicIntegritySection } from "@/components/educators/AcademicIntegritySection";
import { EducatorWorkflowShowcase } from "@/components/educators/EducatorWorkflowShowcase";
import { EducatorProgramsSection } from "@/components/educators/EducatorProgramsSection";
import { EducatorsCTA } from "@/components/educators/EducatorsCTA";

export const metadata: Metadata = {
  title: "For Educators — Nexora AI Academy",
  description:
    "Teach smarter with AI. Equip teachers, professors, and academic leaders with practical frameworks for curriculum design, authentic assessment, and responsible classroom AI.",
};

export default function EducatorsPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section with exact headline */}
      <EducatorsHero />

      {/* 2. 6 Practical Pillars of Modern AI Pedagogy */}
      <EducatorFocusGrid />

      {/* 3. Academic Integrity & 4-Tier Classroom Policy Guide */}
      <AcademicIntegritySection />

      {/* 4. Workflow Transformation: Traditional vs AI-Augmented Routine */}
      <EducatorWorkflowShowcase />

      {/* 5. Dedicated Educator Programs from Catalog */}
      <EducatorProgramsSection />

      {/* 6. Closing Faculty Development CTA */}
      <EducatorsCTA />
    </main>
  );
}
