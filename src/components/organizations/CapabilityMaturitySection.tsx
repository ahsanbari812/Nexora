import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Stage {
  number: string;
  title: string;
  phase: string;
  statusTag: string;
  badgeStyle: string;
  description: string;
  reality: string;
  isTarget?: boolean;
}

export function CapabilityMaturitySection() {
  const stages: Stage[] = [
    {
      number: "01",
      title: "AI Awareness",
      phase: "Initial Literacy",
      statusTag: "BASELINE",
      badgeStyle: "text-[#64748B] bg-[#F1F5F9] border border-[#E2E8F0]",
      description: "Leadership and staff understand what modern AI tools are conceptually, attending high-level keynotes or reading executive summaries.",
      reality: "Awareness generates curiosity, but delivers zero operational leverage or measurable ROI.",
    },
    {
      number: "02",
      title: "Experimentation",
      phase: "Fragmented Usage",
      statusTag: "ENTERPRISE RISK",
      badgeStyle: "text-amber-800 bg-amber-50 border border-amber-200",
      description: "Employees try AI individually using personal accounts and ad-hoc prompts. Usage is inconsistent and disconnected from department goals.",
      reality: "High risk of enterprise data leaks, compliance violations, and duplicated efforts across silos.",
    },
    {
      number: "03",
      title: "Practical Adoption",
      phase: "Standardized Workflows",
      statusTag: "TARGET BENCHMARK",
      badgeStyle: "text-[#EA580C] bg-[#F97316]/10 border border-[#F97316]/20",
      description: "Teams implement vetted tools with clear security guardrails, standardized prompt chains, and department-specific task automation.",
      reality: "Measurable hours saved weekly, consistent output quality, and eliminated operational bottlenecks.",
      isTarget: true,
    },
    {
      number: "04",
      title: "Institutional Mastery",
      phase: "Organization-Wide",
      statusTag: "COMPOUNDING LEVERAGE",
      badgeStyle: "text-white bg-[#071A2D] border border-white/20",
      description: "AI is deeply integrated into daily operations. Cross-department pipelines, internal AI champions, and continuous workflow evolution.",
      reality: "Sustainable competitive advantage, institutional agility, and compounding operational returns.",
      isTarget: true,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#CBD5E1]">
      <SectionContainer>
        <SectionHeading
          sectionNumber="01 // MATURITY MODEL"
          eyebrow="Capability Maturity Model"
          eyebrowBadge
          title="Why AI Capability"
          titleHighlight="Matters"
          description="Most organizations stall between general awareness and chaotic individual experimentation. Sustainable business advantage only happens when AI shifts from personal novelty into an organization-wide operational capability."
          align="left"
        />

        {/* 4-Stage Architectural Progression Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#CBD5E1] border border-[#CBD5E1] rounded-[4px] overflow-hidden">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className={`flex flex-col justify-between p-8 ${
                stage.isTarget ? "bg-white" : "bg-white/95"
              } hover:bg-[#F8FAFC] transition-colors`}
            >
              <div>
                {/* Top Bar: Number & Phase */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="font-mono text-xs font-semibold text-[#F97316] tracking-widest">
                    STAGE // {stage.number}
                  </span>
                  <span className={`px-2 py-0.5 rounded-[2px] font-mono text-[10px] font-medium tracking-wider uppercase ${stage.badgeStyle}`}>
                    {stage.statusTag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-normal text-[#071A2D] tracking-tight mb-1">
                  {stage.title}
                </h3>
                <div className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider mb-4">
                  {stage.phase}
                </div>

                {/* Description */}
                <p className="text-sm text-[#475569] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Reality / Consequence Box */}
              <div className="mt-8 pt-4 border-t border-[#F1F5F9] font-mono text-xs text-[#64748B]">
                <span className="text-[#071A2D] uppercase tracking-wider block mb-1">DIAGNOSIS:</span>
                <span>{stage.reality}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Chasm Explainer Callout */}
        <div className="mt-12 p-8 md:p-10 bg-[#071A2D] text-white border border-[#071A2D] rounded-[4px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="font-mono text-xs font-semibold text-[#F97316] uppercase tracking-widest mb-3">
              THE STRATEGIC CHASM // EXPERIMENTATION VS. CAPABILITY
            </div>
            <h4 className="font-display text-2xl font-normal text-white tracking-tight">
              Over 80% of organizations remain trapped in Stage 2.
            </h4>
            <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
              Employees use AI in isolation with unvetted prompts, creating intellectual property vulnerabilities without delivering systemic business ROI. Nexora bridges this chasm by designing standardized workflows, enterprise security policies, and team-specific training that moves your entire workforce into verified operational capability.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto font-mono text-xs">
            <div className="p-4 bg-white/5 border border-white/10 rounded-[2px] text-left">
              <span className="text-[#F97316] font-semibold block mb-1">ACCELERATION PROTOCOL</span>
              <span className="text-[#CBD5E1]">Structured migration to Stage 3 & 4</span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

