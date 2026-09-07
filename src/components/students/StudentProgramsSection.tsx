import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATALOG_PROGRAMS } from "@/data/catalog";
import { ProgramCatalogCard } from "@/components/programs/ProgramCatalogCard";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StudentProgramsSection() {
  const studentPrograms = CATALOG_PROGRAMS.filter(
    (program) => program.audienceId === "students"
  );

  return (
    <section id="student-programs" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#CBD5E1] scroll-mt-20">
      <SectionContainer>
        <SectionHeading
          sectionNumber="05 // COHORTS & SPRINTS"
          eyebrow="Available Cohorts & Sprints"
          eyebrowBadge
          title="Student Programs Designed for"
          titleHighlight="Immediate Impact"
          description="Choose from intensive multi-week bootcamps or focused single-day build workshops. All programs emphasize hands-on lab time and working deliverables."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentPrograms.map((program) => (
            <ProgramCatalogCard key={program.id} program={program} />
          ))}
        </div>

        {/* Explore all programs banner */}
        <div className="mt-14 pt-8 border-t border-[#CBD5E1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider">
            LOOKING FOR INSTITUTIONAL OR EXECUTIVE TRAINING?
          </span>
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#071A2D] hover:text-[#F97316] transition-colors"
          >
            <span>VIEW ALL ACADEMY PROGRAMS & FORMATS</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </SectionContainer>
    </section>
  );
}

