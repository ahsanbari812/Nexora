import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function EducatorsCTA() {
  const assurances = [
    "Custom departmental syllabus & rubric co-design",
    "Zero student data retention & FERPA compliance standards",
    "100% hands-on faculty lab exercises and prompt templates",
    "Institutional train-the-trainer framework and curriculum rights",
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#CBD5E1]">
      <SectionContainer>
        <div className="relative rounded-[4px] p-8 sm:p-12 md:p-16 bg-[#071A2D] text-white border border-[#071A2D] overflow-hidden">
          <div className="max-w-3xl">
            <div className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase mb-4">
              FACULTY & DEPARTMENTAL INQUIRIES
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-display text-white tracking-tight leading-tight">
              Empower Your Faculty with <span className="italic text-[#F97316]">Practical AI Fluency.</span>
            </h2>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
              Book a dedicated professional development workshop or comprehensive curriculum modernization program for your school, college, or university department.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact?audience=educators"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[4px] font-medium text-sm text-white bg-[#F97316] hover:bg-[#EA580C] transition-colors"
              >
                <span>Discuss Faculty Workshop</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/builder"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[4px] font-medium text-sm text-white bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 transition-colors"
              >
                <span>Launch Custom Training Builder</span>
              </Link>
            </div>

            {/* Academic Assurances */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {assurances.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 font-mono text-xs text-[#CBD5E1]">
                  <span className="text-[#F97316] font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

