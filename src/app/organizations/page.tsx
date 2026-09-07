import React from "react";
import { Metadata } from "next";
import { OrganizationsHero } from "@/components/organizations/OrganizationsHero";
import { CapabilityMaturitySection } from "@/components/organizations/CapabilityMaturitySection";
import { WhatWeTrainSection } from "@/components/organizations/WhatWeTrainSection";
import { CustomizedProgramsSection } from "@/components/organizations/CustomizedProgramsSection";
import { OrganizationsCTA } from "@/components/organizations/OrganizationsCTA";

export const metadata: Metadata = {
  title: "For Organizations & Institutions — Nexora AI Academy",
  description:
    "Build practical AI capability across your company, university, or institution. Customized corporate training programs tailored around departmental workflows, existing tech stacks, and strategic business goals.",
};

export default function OrganizationsPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <OrganizationsHero />

      {/* 2. Why AI Capability Matters (Awareness -> Experimentation -> Practical Adoption -> Organization-Wide Capability) */}
      <CapabilityMaturitySection />

      {/* 3. What We Train (7 Core Practical Disciplines) */}
      <WhatWeTrainSection />

      {/* 4. Customized Programs (Adapting around Teams, Departments, Industry, Existing Workflows, Organizational Goals) */}
      <CustomizedProgramsSection />

      {/* 5. Final CTA: "Let's Design Your AI Training Program." */}
      <OrganizationsCTA />
    </main>
  );
}
