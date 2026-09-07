import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Discipline {
  id: string;
  disciplineNumber: string;
  title: string;
  tagline: string;
  description: string;
  useCases: string[];
  deliverable: string;
}

export function WhatWeTrainSection() {
  const disciplines: Discipline[] = [
    {
      id: "generative-ai",
      disciplineNumber: "01",
      title: "Generative AI",
      tagline: "Foundation Model Mastery",
      description:
        "Mastering state-of-the-art LLMs, multi-modal reasoning engines, and context window dynamics for enterprise-scale operational work.",
      useCases: [
        "Multi-source intelligence synthesis",
        "Document & research summarization",
        "Domain-specific text and code generation",
      ],
      deliverable: "Enterprise Generative AI Playbook",
    },
    {
      id: "productivity",
      disciplineNumber: "02",
      title: "Productivity",
      tagline: "High-Leverage Workflows",
      description:
        "Reclaiming 5 to 15 hours weekly per employee by restructuring day-to-day communication, synthesis, and administrative workflows.",
      useCases: [
        "Executive briefings and meeting intelligence",
        "High-speed communications drafting",
        "Information distillation & presentation outlining",
      ],
      deliverable: "Daily High-Leverage Prompt Vault",
    },
    {
      id: "automation",
      disciplineNumber: "03",
      title: "Automation",
      tagline: "Pipeline & Task Elimination",
      description:
        "Connecting AI reasoning into existing software ecosystems to run scheduled, event-triggered, and autonomous data processing sequences.",
      useCases: [
        "Autonomous data extraction & structuring",
        "Automated weekly reporting pipelines",
        "Trigger-based notification & triage systems",
      ],
      deliverable: "End-to-End Automated Workflow Pipeline",
    },
    {
      id: "prompt-engineering",
      disciplineNumber: "04",
      title: "Prompt Engineering",
      tagline: "Deterministic Multi-Step Chains",
      description:
        "Moving beyond casual conversation into engineered system prompts, few-shot calibration, structured JSON extraction, and chained reasoning.",
      useCases: [
        "Deterministic structured outputs",
        "Role conditioning & tone calibration",
        "Multi-step sequential reasoning chains",
      ],
      deliverable: "Validated Department Prompt Chains",
    },
    {
      id: "department-workflows",
      disciplineNumber: "05",
      title: "Department Workflows",
      tagline: "Domain-Specific Enablement",
      description:
        "Customizing AI applications directly for specific operational units: Marketing, Sales, Operations, HR, Legal, Customer Success, and Tech.",
      useCases: [
        "Marketing & campaign content pipelines",
        "HR candidate screening & policy assist",
        "Legal & compliance document review",
      ],
      deliverable: "Department Standard Operating Procedures",
    },
    {
      id: "responsible-ai",
      disciplineNumber: "06",
      title: "Responsible AI",
      tagline: "Privacy, Ethics & Governance",
      description:
        "Establishing rigorous data safeguards, zero-data retention protocols, hallucination detection rubrics, and intellectual property firewalls.",
      useCases: [
        "Confidentiality & data leak prevention",
        "Hallucination auditing & fact-checking",
        "Copyright & intellectual property guidelines",
      ],
      deliverable: "Enterprise AI Security Charter",
    },
    {
      id: "ai-adoption",
      disciplineNumber: "07",
      title: "AI Adoption",
      tagline: "Culture & Change Management",
      description:
        "Overcoming employee hesitation, managing cross-department change, building internal AI champions networks, and benchmarking skill progression.",
      useCases: [
        "Overcoming change resistance & hesitation",
        "Internal AI champion network enablement",
        "Continuous capability benchmarking & tracking",
      ],
      deliverable: "Institutional Adoption Roadmap",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#CBD5E1]">
      <SectionContainer>
        <SectionHeading
          sectionNumber="03 // CURRICULUM SCOPE"
          eyebrow="Curriculum Scope"
          eyebrowBadge
          title="What We Train:"
          titleHighlight="7 Practical Disciplines"
          description="We focus strictly on applied execution rather than theoretical abstraction. Each discipline is taught through live enterprise exercises, tool configurations, and real operational tasks."
          align="left"
        />

        {/* 7 Disciplines Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#CBD5E1] border border-[#CBD5E1] rounded-[4px] overflow-hidden">
          {disciplines.map((item, idx) => {
            const isWide = idx === 6;

            return (
              <div
                key={item.id}
                className={`group relative flex flex-col justify-between p-8 md:p-9 bg-white hover:bg-[#F8FAFC] transition-colors ${
                  isWide ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div>
                  {/* Top Bar: Code & Tagline */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="font-mono text-xs font-semibold text-[#F97316] tracking-widest">
                      DISCIPLINE // {item.disciplineNumber}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
                      {item.tagline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-normal text-[#071A2D] tracking-tight group-hover:text-[#F97316] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Enterprise Use Cases */}
                  <div className="mt-6 pt-4 border-t border-[#F1F5F9] space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8] block">
                      Enterprise Applications:
                    </span>
                    {item.useCases.map((useCase, uIdx) => (
                      <div key={uIdx} className="flex items-start gap-2 text-xs text-[#64748B]">
                        <span className="text-[#F97316] font-bold shrink-0">·</span>
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Deliverable Tag */}
                <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center gap-2 font-mono text-xs">
                  <span className="text-[#94A3B8]">DELIVERABLE:</span>
                  <span className="text-[#071A2D] font-medium">{item.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}

