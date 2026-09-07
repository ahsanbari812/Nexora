import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function StudentsCTA() {
  const perks = [
    "Small cohort sizes with direct instructor mentorship",
    "No prior programming prerequisite required for foundational tracks",
    "Perpetual reference access to course syllabus and prompt architecture vault",
    "Capstone verification credential upon code review completion",
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#CBD5E1]">
      <SectionContainer>
        <div className="relative rounded-[4px] p-8 sm:p-12 md:p-16 bg-[#071A2D] text-white border border-[#071A2D] overflow-hidden">
          <div className="max-w-3xl">
            <div className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase mb-4">
              REGISTRATION OPEN // NEXT STUDENT COHORT
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-display text-white tracking-tight leading-tight">
              Start Building Your <span className="italic text-[#F97316]">Practical AI Capability.</span>
            </h2>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
              Equip yourself with practical skills that set you apart in university coursework, research labs, internships, and future career opportunities.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact?program=student-bootcamp"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[4px] font-medium text-sm text-white bg-[#F97316] hover:bg-[#EA580C] transition-colors"
              >
                <span>Enroll in Next Student Cohort</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/programs?audience=students"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[4px] font-medium text-sm text-white bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 transition-colors"
              >
                <span>Explore Full Curriculum</span>
              </Link>
            </div>

            {/* Perks list */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {perks.map((perk, idx) => (
                <div key={idx} className="flex items-start gap-2.5 font-mono text-xs text-[#CBD5E1]">
                  <span className="text-[#F97316] font-bold">✓</span>
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

