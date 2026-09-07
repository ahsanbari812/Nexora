import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface AdaptationVector {
  id: string;
  dimensionNumber: string;
  title: string;
  headline: string;
  description: string;
  points: string[];
}

export function CustomizedProgramsSection() {
  const vectors: AdaptationVector[] = [
    {
      id: "teams",
      dimensionNumber: "01",
      title: "Teams",
      headline: "Calibrated to Cohort Seniority",
      description:
        "Whether training senior executive leadership on AI governance or upskilling frontline teams on daily execution, modules are calibrated to participant roles.",
      points: [
        "Executive Strategy & Decision Labs",
        "Managerial Workflow Acceleration",
        "Frontline Execution Sprints",
      ],
    },
    {
      id: "departments",
      dimensionNumber: "02",
      title: "Departments",
      headline: "Role-Specific Functional Tracks",
      description:
        "Generic examples waste company time. We create tailored tracks specifically for Marketing, HR, Finance, Operations, Legal, and Tech teams.",
      points: [
        "Department-specific prompt vaults",
        "Live practice on actual weekly deliverables",
        "Zero irrelevant theoretical fluff",
      ],
    },
    {
      id: "industry",
      dimensionNumber: "03",
      title: "Industry",
      headline: "Sector & Compliance Context",
      description:
        "We incorporate regulatory realities and competitive benchmarks specific to Higher Education, Finance, Healthcare, SaaS, and Professional Services.",
      points: [
        "Regulatory compliance & data privacy checks",
        "Industry-specific benchmarks & case studies",
        "Domain terminology & nuance calibration",
      ],
    },
    {
      id: "existing-workflows",
      dimensionNumber: "04",
      title: "Existing Workflows",
      headline: "Direct Toolstack Integration",
      description:
        "Training takes place directly inside your company's software ecosystem—leveraging Slack, Microsoft 365, Google Workspace, CRM, and internal databases.",
      points: [
        "Embedded into everyday collaboration tools",
        "No new complex software overhead",
        "Immediate day-one adoption",
      ],
    },
    {
      id: "organizational-goals",
      dimensionNumber: "05",
      title: "Organizational Goals",
      headline: "Targeted Strategic ROI",
      description:
        "Every training engagement is engineered backward from clear business goals: cycle-time reduction, manual task elimination, or institutional AI fluency.",
      points: [
        "Quantified time-savings benchmarks",
        "Pre and post capability evaluation",
        "Measurable institutional return",
      ],
    },
  ];

  const rolloutSteps = [
    {
      step: "01",
      title: "Workflow & Readiness Audit",
      desc: "We analyze current toolchains, privacy policies, and departmental bottlenecks.",
    },
    {
      step: "02",
      title: "Curriculum Co-Design",
      desc: "Our directors formulate custom prompt vaults, scenarios, and exercises with your leads.",
    },
    {
      step: "03",
      title: "Hands-On Delivery Sprints",
      desc: "Live, guided lab sessions where teams build and automate live workflows.",
    },
    {
      step: "04",
      title: "Asset & Playbook Handover",
      desc: "Full delivery of internal prompt repositories, SOP documentation, and recorded guides.",
    },
    {
      step: "05",
      title: "Impact Audit & Roadmap",
      desc: "Comprehensive capability report detailing hours saved, adoption metrics, and next steps.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#CBD5E1]">
      <SectionContainer>
        <SectionHeading
          sectionNumber="02 // BESPOKE ARCHITECTURE"
          eyebrow="Customization Architecture"
          eyebrowBadge
          title="Customized Programs Built Around"
          titleHighlight="Your Reality"
          description="Off-the-shelf courses fail because they ignore your proprietary systems, security policies, and departmental bottlenecks. Nexora adapts every engagement across five fundamental dimensions."
          align="left"
        />

        {/* 5 Adaptation Vectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#CBD5E1] border border-[#CBD5E1] rounded-[4px] overflow-hidden mb-20">
          {vectors.map((vec, idx) => {
            const isLast = idx === 4;

            return (
              <div
                key={vec.id}
                className={`flex flex-col justify-between p-8 md:p-9 bg-white hover:bg-[#F8FAFC] transition-colors ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="font-mono text-xs font-semibold text-[#F97316] tracking-widest">
                      DIMENSION // {vec.dimensionNumber}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
                      {vec.title}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-normal text-[#071A2D] tracking-tight mb-3">
                    {vec.headline}
                  </h4>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {vec.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F1F5F9] space-y-2">
                  {vec.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 font-mono text-xs text-[#64748B]">
                      <span className="text-[#F97316] font-bold shrink-0">·</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* How We Deliver: 5-Stage Institutional Methodology */}
        <div className="p-8 md:p-12 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px]">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F97316] block mb-2">
              METHODOLOGY // 05 PHASES
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#071A2D] tracking-tight">
              Structured Engagement & Rollout Process
            </h3>
            <p className="mt-2 text-sm text-[#475569] leading-relaxed">
              Our proven 5-stage rollout ensures complete alignment with internal stakeholders before a single training session begins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#CBD5E1] border border-[#CBD5E1] rounded-[4px] overflow-hidden">
            {rolloutSteps.map((stepItem, idx) => (
              <div key={idx} className="p-6 bg-white hover:bg-[#F8FAFC] transition-colors flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-semibold text-[#F97316] block mb-3">
                    PHASE // {stepItem.step}
                  </span>
                  <h4 className="font-display text-base font-normal text-[#071A2D] mb-2 tracking-tight">
                    {stepItem.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
                <div className="mt-6 pt-2 border-t border-[#F1F5F9] font-mono text-[10px] text-[#94A3B8]">
                  STAGE VERIFIED
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

