import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StudentHonestySection() {
  const hypePoints = [
    "\"Become a Senior AI Engineer in 30 days\"",
    "\"Guaranteed $150k job placements with zero prerequisites\"",
    "\"Just copy-paste these 100 secret prompts to get rich\"",
    "\"AI will do 100% of your university work without thinking\"",
  ];

  const realityPoints = [
    "Rigorous mental models of how frontier LLMs process and reason",
    "Engineered prompt chains, structured outputs, and debugging skills",
    "Real, functioning capstone portfolio projects you can demo live",
    "Permanent practical capability that multiplies your existing field of study",
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#CBD5E1]">
      <SectionContainer>
        <SectionHeading
          sectionNumber="04 // INSTITUTIONAL PLEDGE"
          eyebrow="Our Educational Pledge"
          eyebrowBadge
          title="Why We Reject the"
          titleHighlight="30-Day 'AI Engineer' Myth"
          description="The internet is saturated with courses selling unrealistic shortcuts. We believe in intellectual honesty: AI is an extraordinary capability multiplier, not a substitute for foundational learning, curiosity, and rigorous execution."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {/* What We Reject */}
          <div className="p-8 md:p-10 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E2E8F0]">
                <span className="font-mono text-xs font-semibold text-[#64748B] tracking-widest uppercase">
                  CRITIQUE // 01
                </span>
                <span className="font-mono text-[11px] text-rose-700 bg-rose-50 px-2 py-0.5 rounded-[2px] border border-rose-200 uppercase tracking-wider">
                  Course Hype Rejected
                </span>
              </div>

              <h3 className="font-display text-xl md:text-2xl text-[#071A2D] font-normal tracking-tight mb-4">
                Empty Shortcuts & Unrealistic Guarantees
              </h3>

              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Selling false promises hurts students. True technical competence cannot be reduced to an overnight cheat-sheet, copy-pasting prompts, or a superficial certificate.
              </p>

              <div className="space-y-3 font-mono text-xs text-[#64748B]">
                {hypePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white border border-[#E2E8F0] rounded-[2px]">
                    <span className="text-rose-600 font-bold shrink-0">✕</span>
                    <span className="text-[#475569]">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E2E8F0] font-mono text-xs text-[#64748B]">
              OUTCOME // Surface familiarity that collapses in real technical interviews and coursework.
            </div>
          </div>

          {/* What We Deliver */}
          <div className="p-8 md:p-10 bg-[#071A2D] text-white border border-[#071A2D] rounded-[4px] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase">
                  STANDARD // 02
                </span>
                <span className="font-mono text-[11px] text-[#F97316] bg-[#F97316]/10 px-2 py-0.5 rounded-[2px] border border-[#F97316]/20 uppercase tracking-wider">
                  The Nexora Benchmark
                </span>
              </div>

              <h3 className="font-display text-xl md:text-2xl text-white font-normal tracking-tight mb-4">
                Practical, Verifiable Capability
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                We equip you with the practical frameworks, prompt architectures, and toolchain mastery to excel in your degree, research, and future career.
              </p>

              <div className="space-y-3 font-mono text-xs">
                {realityPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-[2px]">
                    <span className="text-[#F97316] font-bold shrink-0">✓</span>
                    <span className="text-[#E2E8F0]">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 font-mono text-xs text-[#F97316]">
              OUTCOME // Tangible capability, working portfolio code, and confidence in any technical environment.
            </div>
          </div>
        </div>

        {/* Bottom Credibility Callout */}
        <div className="mt-12 pt-8 border-t border-[#CBD5E1] max-w-5xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#64748B]">
          <span className="text-[#071A2D] font-semibold">CROSS-DISCIPLINARY RELEVANCE</span>
          <p className="sm:max-w-2xl text-left sm:text-right">
            Whether you study Computer Science, Business, Biology, Law, or Design, mastering AI makes you the highest-velocity student in your cohort.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}

