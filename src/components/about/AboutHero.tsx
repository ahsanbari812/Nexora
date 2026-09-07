import React from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function AboutHero() {
  const pillars = [
    { title: "APPLIED EXECUTION", label: "100% hands-on software labs and deployed workflows" },
    { title: "SYSTEM INTEGRATION", label: "Aligned directly into existing enterprise toolchains" },
    { title: "ETHICAL GOVERNANCE", label: "Rigorous student privacy and enterprise compliance" },
    { title: "CAPABILITY TRANSFER", label: "Permanent organizational ownership without vendor lock-in" },
  ];

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-[#071A2D] text-white border-b border-white/10">
      <SectionContainer>
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase mb-5">
            OUR PURPOSE & PHILOSOPHY
          </div>

          {/* Exact Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-display tracking-tight text-white leading-[1.08]">
            Turning AI Awareness Into <span className="italic text-[#F97316]">Practical Capability.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
            The technology landscape is crowded with high-level speculation, superficial tutorials, and passive webinars. Nexora AI Academy exists to bridge the critical gap between conceptual interest and true operational mastery.
          </p>

          {/* Action Anchors */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#mission"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[4px] font-medium text-sm text-white bg-[#F97316] hover:bg-[#EA580C] transition-colors"
            >
              <span>Our Mission</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </Link>

            <Link
              href="#beliefs"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[4px] font-medium text-sm text-white bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 transition-colors"
            >
              <span>What We Believe</span>
            </Link>
          </div>

          {/* Core Foundation Highlights */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {pillars.map((item, idx) => (
              <div key={idx} className="border-l border-white/10 pl-4">
                <div className="font-mono text-xs font-semibold text-white tracking-wider">
                  {item.title}
                </div>
                <div className="mt-1 text-xs text-[#94A3B8] leading-relaxed">
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

