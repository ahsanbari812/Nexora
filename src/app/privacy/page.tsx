import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function PrivacyPage() {
  return (
    <div className="py-20 md:py-28 bg-white min-h-[70vh]">
      <SectionContainer size="narrow">
        <SectionHeading
          sectionNumber="LEGAL // 01"
          title="Privacy Policy"
          description="Last updated: September 2026. Nexora AI Academy values your privacy and data protection."
          align="left"
        />
        <div className="prose max-w-none text-[#475569] space-y-4 text-sm leading-relaxed mt-8 pt-6 border-t border-[#CBD5E1]">
          <p>
            Nexora AI Academy collects information you provide directly through our consultation inquiries, registration forms, and communications.
          </p>
          <p>
            We do not sell your personal data. Information provided is strictly used to coordinate customized training programs, provide course syllabi, and deliver educational services.
          </p>
        </div>
      </SectionContainer>
    </div>
  );
}

