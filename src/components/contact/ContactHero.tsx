import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function ContactHero() {
  const guarantees = [
    { title: "SLA GUARANTEE", label: "24-hour curriculum director response" },
    { title: "ENTERPRISE NDA", label: "Mutual confidentiality agreement executed prior to workflow audit" },
    { title: "SCOPING AUDIT", label: "Complimentary preliminary software and workflow assessment" },
  ];

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-[#071A2D] text-white border-b border-white/10">
      <SectionContainer>
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase mb-5">
            ADMISSIONS & ENTERPRISE ADVISORY
          </div>

          {/* Exact Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-display tracking-tight text-white leading-[1.08]">
            Let&apos;s Build AI Capability <span className="italic text-[#F97316]">Together.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
            Whether you are planning an enterprise-wide capability transformation, booking a dedicated faculty development workshop, or enrolling in an upcoming student cohort, our directors are ready to co-design your path.
          </p>

          {/* Advisory Assurances */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {guarantees.map((item, idx) => (
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

