import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function OrganizationsHero() {
  const trustPillars = [
    { title: "INTERNAL TECH STACKS", label: "Integrated directly into Microsoft 365, Google, & enterprise toolchains" },
    { title: "SECURITY & PRIVACY", label: "Zero data retention & enterprise compliance standards" },
    { title: "DEPARTMENT PLAYBOOKS", label: "Bespoke prompt vaults calibrated to actual team deliverables" },
    { title: "MEASURABLE ROI", label: "Quantifiable hours reclaimed and cycle times reduced" },
  ];

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-[#071A2D] text-white border-b border-white/10">
      <SectionContainer>
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase mb-5">
            ENTERPRISE & INSTITUTIONAL ENABLEMENT
          </div>

          {/* Exact Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-display tracking-tight text-white leading-[1.08]">
            Build AI Capability Across <span className="italic text-[#F97316]">Your Organization.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
            Move your workforce beyond disconnected individual experimentation. Nexora co-designs structured, hands-on corporate programs tailored around your existing workflows, security requirements, and strategic business goals.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[4px] font-medium text-sm text-white bg-[#F97316] hover:bg-[#EA580C] transition-colors"
            >
              <span>Discuss Your Training Needs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/builder"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[4px] font-medium text-sm text-white bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 transition-colors"
            >
              <span>Launch Custom Training Builder</span>
            </Link>
          </div>

          {/* Enterprise trust pillars */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPillars.map((pillar, idx) => (
              <div key={idx} className="border-l border-white/10 pl-4">
                <div className="font-mono text-xs font-semibold text-white tracking-wider">
                  {pillar.title}
                </div>
                <div className="mt-1 text-xs text-[#94A3B8] leading-relaxed">
                  {pillar.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

