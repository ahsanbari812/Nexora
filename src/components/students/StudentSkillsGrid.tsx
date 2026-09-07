import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";

interface SkillItem {
  num: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  handsOnLab: string;
}

export function StudentSkillsGrid() {
  const skills: SkillItem[] = [
    {
      num: "01",
      id: "ai-tools",
      title: "AI Tools & Environment Selection",
      tagline: "Tool Selection & Power Usage",
      description:
        "Gain hands-on fluency across modern multi-modal frontier models, IDE code assistants, visual generators, and browser agents. Learn exactly which tool to choose for any academic or creative challenge.",
      skills: [
        "Frontier LLM strengths & limitations",
        "Multi-modal vision and document tools",
        "Developer and code-assist plugins",
      ],
      handsOnLab: "Multi-model benchmarking & custom toolchain setup",
    },
    {
      num: "02",
      id: "prompt-engineering",
      title: "Prompt Engineering & Reasoning",
      tagline: "Chained Logic & Structured Schemas",
      description:
        "Graduate from casual chat questions into engineered prompt architectures. Master system persona conditioning, few-shot demonstration, chain-of-thought decomposition, and structured JSON outputs.",
      skills: [
        "Chain-of-thought reasoning protocols",
        "Structured outputs (JSON, Markdown tables)",
        "System prompt conditioning & role tuning",
      ],
      handsOnLab: "Building a multi-step deterministic research prompt chain",
    },
    {
      num: "03",
      id: "research",
      title: "Deep Literature Research & Synthesis",
      tagline: "Literature Synthesis & Citations",
      description:
        "Harness AI to synthesize dense scientific literature, extract structured datasets, cross-examine contrasting scholarly viewpoints, and ensure rigorous, transparent academic citation ethics.",
      skills: [
        "Multi-paper thematic extraction",
        "Source grounding & fact-checking",
        "Transparent citation methodologies",
      ],
      handsOnLab: "10-paper comparative literature review matrix",
    },
    {
      num: "04",
      id: "ai-productivity",
      title: "AI Productivity & Study Systems",
      tagline: "Workflow Acceleration",
      description:
        "Build a personalized AI academic workspace. Accelerate technical reading, draft high-clarity reports, brainstorm creative angles, and convert dense syllabi into structured study schedules.",
      skills: [
        "Accelerated reading & summarization",
        "Writing refactoring & clarity loops",
        "Adaptive exam self-quizzing engines",
      ],
      handsOnLab: "Personalized course study copilot configuration",
    },
    {
      num: "05",
      id: "automation-basics",
      title: "Workflow Automation Basics",
      tagline: "Repetitive Task Elimination",
      description:
        "Connect AI models to daily productivity tools like Google Docs, Notion, and email. Learn to automate data extraction, scheduled reminders, and recurring administrative student obligations.",
      skills: [
        "Webhook & Zapier/Make fundamentals",
        "Automated note & lecture organization",
        "Batch document processing",
      ],
      handsOnLab: "Automated lecture transcript extraction pipeline",
    },
    {
      num: "06",
      id: "building-with-ai",
      title: "Building with AI & Prototyping",
      tagline: "Software & Digital Creations",
      description:
        "Translate ideas into functioning software without a multi-year Computer Science background. Learn vibe coding principles, conversational app building, and rapid prototyping.",
      skills: [
        "Conversational software prototyping",
        "Custom GPT assistant development",
        "Deploying simple web apps live",
      ],
      handsOnLab: "Deploying an interactive web application to the public web",
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <SectionContainer>
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 mb-10 border-b border-[#E2E8F0]">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#F97316] uppercase">
                CURRICULUM // CORE COMPETENCIES
              </span>
              <span className="w-1 h-1 bg-[#CBD5E1]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#64748B] font-semibold">
                SKILL MATRIX
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight text-[#071A2D] leading-[1.12]">
              What You Will <span className="italic text-[#F97316]">Learn &amp; Master.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
              Our curriculum focuses on durable, transferable capabilities rather than ephemeral novelty tricks. Six foundational skill tracks engineered for immediate academic leverage.
            </p>
          </div>
        </div>

        {/* 6-Module Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#E2E8F0] rounded-[3px] overflow-hidden bg-white shadow-xs">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 sm:p-7 border-b md:border-b lg:border-b-0 border-[#E2E8F0] lg:border-r last:border-r-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2E8F0]">
                  <span className="text-xl font-mono font-bold text-[#F97316]">
                    {skill.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B]">
                    {skill.tagline}
                  </span>
                </div>

                <h3 className="text-xl font-display text-[#071A2D] tracking-tight mb-2 leading-snug">
                  {skill.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                  {skill.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] block font-semibold">
                    Core Skills:
                  </span>
                  {skill.skills.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#334155] font-mono">
                      <span className="text-[#F97316] text-[10px]">■</span>
                      <span className="font-sans text-xs">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] text-xs font-mono text-[#071A2D]">
                <span className="text-[#F97316] font-bold">LAB // </span>
                <span>{skill.handsOnLab}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
