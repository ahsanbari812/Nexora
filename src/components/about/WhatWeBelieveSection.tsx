import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Belief {
  number: string;
  title: string;
  tagline: string;
  body: string;
  tenet: string;
}

export function WhatWeBelieveSection() {
  const beliefs: Belief[] = [
    {
      number: "01",
      title: "AI Should Be Practical.",
      tagline: "Execution Over Speculation",
      body: "We reject passive conceptual lectures and high-level futurist speculation. If a skill cannot be tested in a live software environment, embedded into daily work, or used to build a real asset, it does not belong in our curriculum. We measure success not by what learners know about AI, but by what they can reliably execute with it.",
      tenet: "Zero lecture fluff · 100% hands-on software labs",
    },
    {
      number: "02",
      title: "Learning Should Lead to Application.",
      tagline: "Proof Over Passive Completion",
      body: "Understanding is verified only when you build. True capability is not demonstrated through multiple-choice tests or decorative completion certificates, but when a student deploys a working knowledge assistant, an educator constructs an authentic rubric, or an enterprise team automates an end-to-end operational pipeline.",
      tenet: "Working prototypes · Deployed workflows · Portfolio proof",
    },
    {
      number: "03",
      title: "Technology Should Solve Real Problems.",
      tagline: "Utility Over Novelty",
      body: "We do not adopt AI tools simply because they are trendy or novel. We focus relentlessly on practical utility: eliminating repetitive manual drag, condensing multi-day research into hours, and removing cognitive friction so human beings can focus on higher-order creative and strategic work.",
      tenet: "Utility over novelty · Eliminating friction · Measurable ROI",
    },
    {
      number: "04",
      title: "AI Adoption Should Be Responsible.",
      tagline: "Ethics, Governance & Safeguards",
      body: "Capability without ethical guardrails is an institutional liability. We embed enterprise data privacy, intellectual property safeguards, algorithmic bias auditing, and transparent citation directly into our training. We teach learners not just how to command AI, but how to govern it safely and sustainably.",
      tenet: "Data privacy · FERPA/GDPR compliance · Ethical attribution",
    },
  ];

  return (
    <section id="beliefs" className="py-20 md:py-28 bg-white border-t border-[#CBD5E1] scroll-mt-20">
      <SectionContainer>
        <SectionHeading
          sectionNumber="02 // CORE CONVICTIONS"
          eyebrow="Our Guiding Philosophy"
          eyebrowBadge
          title="What We"
          titleHighlight="Believe"
          description="These four core convictions guide every workshop we teach, every curriculum we design, and every institutional partnership we undertake."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#CBD5E1] border border-[#CBD5E1] rounded-[4px] overflow-hidden max-w-5xl">
          {beliefs.map((belief) => (
            <div
              key={belief.number}
              className="group relative flex flex-col justify-between p-8 md:p-10 bg-white hover:bg-[#F8FAFC] transition-colors"
            >
              <div>
                {/* Top Bar: Number & Tagline */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="font-mono text-xs font-semibold text-[#F97316] tracking-widest">
                    CONVICTION // {belief.number}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
                    {belief.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-normal text-[#071A2D] tracking-tight leading-snug mb-4 group-hover:text-[#F97316] transition-colors">
                  {belief.title}
                </h3>

                {/* Body Narrative */}
                <p className="text-sm text-[#475569] leading-relaxed">
                  {belief.body}
                </p>
              </div>

              {/* Principle Tag */}
              <div className="mt-8 pt-4 border-t border-[#F1F5F9] font-mono text-xs text-[#64748B]">
                <span className="text-[#F97316] font-bold mr-2">TENET:</span>
                <span>{belief.tenet}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

