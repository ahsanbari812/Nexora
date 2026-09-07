import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutMissionSection() {
  const audiences = [
    {
      cohortNumber: "01",
      title: "Students",
      description:
        "Moving beyond casual chatbot queries to commanding AI for rigorous academic research, rapid digital prototyping, and constructing verified project portfolios.",
    },
    {
      cohortNumber: "02",
      title: "Educators",
      description:
        "Modernizing curriculum design, automating differentiated learning materials, and creating authentic, cheat-resistant assessment rubrics that preserve academic integrity.",
    },
    {
      cohortNumber: "03",
      title: "Corporate Teams",
      description:
        "Transforming fragmented employee experiments into standardized departmental SOPs, multi-step automated workflows, and measurable operational ROI.",
    },
    {
      cohortNumber: "04",
      title: "Institutions",
      description:
        "Providing schools, universities, and enterprise organizations with scalable faculty development, campus readiness roadmaps, and robust governance frameworks.",
    },
  ];

  return (
    <section id="mission" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#CBD5E1] scroll-mt-20">
      <SectionContainer>
        <SectionHeading
          sectionNumber="01 // PURPOSE & MISSION"
          eyebrow="Our Driving Purpose"
          eyebrowBadge
          title="Our"
          titleHighlight="Mission"
          description="We exist to solve the fundamental capability gap of the modern technology era."
          align="left"
        />

        {/* Central Exact Mission Enclosure */}
        <div className="p-8 sm:p-12 md:p-16 bg-[#071A2D] text-white border border-[#071A2D] rounded-[4px] mb-16 max-w-5xl">
          <div className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase mb-6">
            INSTITUTIONAL CHARTER // CORE MANDATE
          </div>

          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
            &ldquo;Help individuals and organizations develop <span className="italic text-[#F97316]">practical AI capability.</span>&rdquo;
          </blockquote>

          <p className="mt-6 text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-3xl">
            Almost everyone has tried an AI chatbot. But knowing a tool exists is fundamentally different from having the structured capability to engineer reliable prompt chains, automate daily workflows, protect sensitive data, and build functioning digital solutions.
          </p>
        </div>

        {/* 4 Audience Enablement Vectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#CBD5E1] border border-[#CBD5E1] rounded-[4px] overflow-hidden">
          {audiences.map((item) => (
            <div
              key={item.cohortNumber}
              className="flex flex-col justify-between p-8 bg-white hover:bg-[#F8FAFC] transition-colors"
            >
              <div>
                <div className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase mb-4">
                  COHORT // {item.cohortNumber}
                </div>

                <h3 className="font-display text-xl font-normal text-[#071A2D] tracking-tight mb-3">
                  For {item.title}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F1F5F9] font-mono text-xs text-[#64748B]">
                MANDATE // Applied outcome delivery
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

