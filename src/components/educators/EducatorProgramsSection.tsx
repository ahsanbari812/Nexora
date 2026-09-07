import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATALOG_PROGRAMS } from "@/data/catalog";
import { ProgramCatalogCard } from "@/components/programs/ProgramCatalogCard";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EducatorProgramsSection() {
  const educatorPrograms = CATALOG_PROGRAMS.filter(
    (program) => program.audienceId === "educators"
  );

  return (
    <section id="educator-programs" className="py-20 md:py-28 bg-white border-t border-[#CBD5E1] scroll-mt-20">
      <SectionContainer>
        <SectionHeading
          sectionNumber="04 // FACULTY PROGRAMS"
          eyebrow="Faculty Programs & Workshops"
          eyebrowBadge
          title="Programs Engineered for"
          titleHighlight="Academic Leaders & Faculty"
          description="Whether you need an intensive 2-day faculty immersion or an institution-wide curriculum modernization roadmap, our programs deliver immediate, ethical capability."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educatorPrograms.map((program) => (
            <ProgramCatalogCard key={program.id} program={program} />
          ))}
        </div>

        {/* Explore all programs banner */}
        <div className="mt-14 pt-8 border-t border-[#CBD5E1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider">
            SEEKING CAMPUS-WIDE ENROLLMENT OR CUSTOM TRACKS?
          </span>
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#071A2D] hover:text-[#F97316] transition-colors"
          >
            <span>EXPLORE ALL ACADEMIC PROGRAMS IN CATALOG</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </SectionContainer>
    </section>
  );
}

