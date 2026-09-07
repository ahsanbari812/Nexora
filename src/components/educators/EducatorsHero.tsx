import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function EducatorsHero() {
  const highlights = [
    { metric: "50%+", label: "Reduction in lesson prep & drafting time" },
    { metric: "100%", label: "Pedagogical integrity & curriculum alignment" },
    { metric: "4-TIER", label: "Classroom AI syllabus policy frameworks" },
    { metric: "FERPA", label: "Student data privacy & compliance standards" },
  ];

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-[#071A2D] text-white border-b border-white/10">
      <SectionContainer>
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase mb-5">
            ACADEMIC FACULTY & LEADERSHIP ENABLEMENT
          </div>

          {/* Exact Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-display tracking-tight text-white leading-[1.08]">
            Teach Smarter with <span className="italic text-[#F97316]">Practical AI.</span>
          </h1>

          {/* Supporting Academic Copy */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
            Equipping teachers, university professors, and educational leaders with the practical frameworks and ethical protocols needed to integrate AI into curriculum design, student assessment, and daily instruction without compromising pedagogical integrity.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#educator-programs"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[4px] font-medium text-sm text-white bg-[#F97316] hover:bg-[#EA580C] transition-colors"
            >
              <span>Explore Educator Programs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact?audience=educators"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[4px] font-medium text-sm text-white bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 transition-colors"
            >
              <span>Book Faculty Development Workshop</span>
            </Link>
          </div>

          {/* Academic Trust Highlights */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="border-l border-white/10 pl-4">
                <div className="font-mono text-xl md:text-2xl font-semibold text-white">
                  {item.metric}
                </div>
                <div className="mt-1 text-xs text-[#94A3B8] leading-snug">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

