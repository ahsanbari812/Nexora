import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function CustomProgramsCallout() {
  const points = [
    "Co-designed curriculum aligned to internal tech stacks",
    "Enterprise data privacy & governance safeguards",
    "Tailored capstone projects on internal workflows",
    "Train-the-trainer & long-term capability roadmaps",
  ];

  return (
    <div className="py-16 md:py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <SectionContainer>
        <div className="relative rounded-[3px] p-8 sm:p-12 md:p-14 bg-[#071A2D] border border-white/10">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#F97316] uppercase">
                  BESPOKE ADVISORY
                </span>
                <span className="w-1 h-1 bg-white/20" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#94A3B8] font-semibold">
                  INSTITUTIONAL CO-DESIGN
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white tracking-tight leading-tight">
                Need a Custom Training Program?
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-xl font-normal">
                Every organization operates with distinct technology stacks, compliance guardrails, and departmental workflows. We co-design bespoke curricula and institutional roadmaps that address your exact challenges.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1] font-mono">
                    <span className="text-[#F97316] text-[10px] mt-0.5">■</span>
                    <span className="font-sans text-xs">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
              <Link
                href="/builder"
                className="inline-flex items-center justify-between px-6 py-3.5 rounded-[3px] font-mono font-semibold text-xs text-white bg-[#F97316] hover:bg-[#EA580C] transition-colors group text-center"
              >
                <span>LAUNCH CUSTOM TRAINING BUILDER</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-between px-6 py-3.5 rounded-[3px] font-mono font-semibold text-xs text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/20 hover:border-white/40 transition-colors text-center group"
              >
                <span>DISCUSS WITH CURRICULUM DIRECTORS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#CBD5E1]" />
              </Link>

              <div className="text-center pt-2 text-[10px] font-mono text-[#94A3B8]">
                ENTERPRISE SECURITY &amp; DATA PRIVACY COMPLIANT
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
