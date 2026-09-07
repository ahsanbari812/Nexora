import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function TermsPage() {
  return (
    <div className="py-20 md:py-28 bg-white min-h-[70vh]">
      <SectionContainer size="narrow">
        <SectionHeading
          sectionNumber="LEGAL // 02"
          title="Terms of Service"
          description="Last updated: September 2026. Standard terms for Nexora educational and consulting offerings."
          align="left"
        />
        <div className="prose max-w-none text-[#475569] space-y-4 text-sm leading-relaxed mt-8 pt-6 border-t border-[#CBD5E1]">
          <p>
            By engaging with Nexora AI Academy programs, workshops, or bootcamps, you agree to uphold our collaborative learning guidelines, intellectual property terms, and code of conduct.
          </p>
          <p>
            All custom curriculums, workshop playbooks, and educational assets are developed by Nexora AI Academy unless designated as open-source course materials.
          </p>
        </div>
      </SectionContainer>
    </div>
  );
}

