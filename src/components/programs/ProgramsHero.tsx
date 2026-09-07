import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function ProgramsHero() {
  const highlights = [
    { num: "01", label: "100% Hands-On Labs" },
    { num: "02", label: "Governance & Ethics" },
    { num: "03", label: "Workflow-Aligned Tools" },
    { num: "04", label: "Permanent Capability Transfer" },
  ];

  return (
    <div className="relative pt-12 pb-12 md:pt-16 md:pb-16 bg-[#071A2D] bg-subtle-grid-dark border-b border-white/10">
      <SectionContainer>
        <div className="max-w-4xl">
          {/* Top Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#F97316] uppercase">
              INDEX // CATALOG
            </span>
            <span className="w-1 h-1 bg-white/20" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#94A3B8] font-semibold">
              CURRICULUM &amp; PROGRAMS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display tracking-tight text-white leading-[1.08] mb-4">
            Training Built Around{" "}
            <span className="italic text-[#F97316]">Real Needs.</span>
          </h1>

          {/* Supporting authoritative copy */}
          <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-2xl font-normal mb-8">
            Move beyond superficial AI awareness. Nexora delivers structured, hands-on programs engineered around real operational challenges, academic workflows, and tangible skill acquisition.
          </p>

          {/* Highlights strip */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded-[2px] bg-white/[0.02] border border-white/5 text-xs font-mono text-[#CBD5E1]"
              >
                <span className="text-[#F97316] font-bold text-[11px]">{item.num}</span>
                <span className="truncate">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
