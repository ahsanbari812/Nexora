import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FEATURED_PROGRAMS } from "@/data/programs";
import { ProgramEditorialBlock } from "./ProgramEditorialBlock";

export function FeaturedProgramsSection() {
  return (
    <section id="programs" className="relative py-16 md:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <SectionContainer>
        {/* Header: Split Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-10 mb-10 border-b border-[#E2E8F0]">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#F97316] uppercase">
                05 // SIGNATURE PROGRAMS
              </span>
              <span className="w-1 h-1 bg-[#CBD5E1]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#64748B] font-semibold">
                CURRICULUM SPECIFICATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight text-[#071A2D] leading-[1.12]">
              Build AI Capability{" "}
              <span className="italic text-[#F97316]">That Lasts.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
              Move beyond isolated tutorials. Our structured core curricula are designed for deep capability building, practical automation, and institutional continuity.
            </p>
          </div>
        </div>

        {/* Editorial Program Sections */}
        <div className="space-y-8">
          {FEATURED_PROGRAMS.map((program, idx) => (
            <ProgramEditorialBlock
              key={program.id}
              program={program}
              isReversed={idx % 2 === 1}
              variant={idx === 0 ? "white" : idx === 1 ? "navy" : "white"}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
