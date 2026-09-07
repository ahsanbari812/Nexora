"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CapabilityStage {
  id: string;
  stage: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  competencies: string[];
}

const STAGES: CapabilityStage[] = [
  {
    id: "understand",
    stage: "01",
    name: "UNDERSTAND",
    title: "Foundations & Model Reasoning",
    subtitle: "Frontier LLM Architecture",
    description: "Demystify frontier reasoning models, cognitive limitations, context windows, and model selection criteria for high-stakes operational use.",
    outcome: "Clarity on where AI creates real leverage.",
    competencies: [
      "Frontier reasoning vs pattern matching",
      "Hallucination mitigation protocols",
      "Model evaluation benchmarks",
    ],
  },
  {
    id: "use",
    stage: "02",
    name: "USE",
    title: "Tool Mastery & Cognitive Steering",
    subtitle: "Prompt Systems & Copilots",
    description: "Direct modern generative tools, chain-of-thought instructions, multimodal assistants, and research copilots with zero guesswork.",
    outcome: "Immediate 3–5x individual productivity.",
    competencies: [
      "Deterministic schema outputs",
      "High-velocity research synthesis",
      "Multimodal document extraction",
    ],
  },
  {
    id: "automate",
    stage: "03",
    name: "AUTOMATE",
    title: "Workflow Optimization & Agentic Loops",
    subtitle: "Pipeline Integration",
    description: "Eliminate repetitive manual bottlenecks by connecting AI models into live data pipelines, spreadsheets, and automated event triggers.",
    outcome: "Hours reclaimed from daily routine workflows.",
    competencies: [
      "Event-triggered data pipelines",
      "CRM & ERP automated extraction",
      "Quality assurance guardrails",
    ],
  },
  {
    id: "build",
    stage: "04",
    name: "BUILD",
    title: "Solution Prototyping & Custom GPTs",
    subtitle: "Domain-Specific Architecture",
    description: "Construct custom internal knowledge bots, grounded retrieval-augmented systems, and functional prototypes tailored to departmental data.",
    outcome: "Tangible, domain-specific AI applications.",
    competencies: [
      "Custom knowledge base RAG",
      "Departmental copilot prototypes",
      "Functional UI integrations",
    ],
  },
  {
    id: "apply",
    stage: "05",
    name: "APPLY",
    title: "Institutional Execution & Governance",
    subtitle: "Organizational Capability",
    description: "Integrate AI responsibly across entire teams, academic syllabi, institutional compliance frameworks, and long-term operating standards.",
    outcome: "Lasting organizational capability.",
    competencies: [
      "Enterprise governance playbooks",
      "Faculty & team upskilling roadmaps",
      "Responsible deployment audits",
    ],
  },
];

export function CapabilityVisualizer() {
  const [activeStageId, setActiveStageId] = useState<string>("understand");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  // Auto-cycle slowly unless hovered or reduced motion
  useEffect(() => {
    if (!autoRotate) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const interval = setInterval(() => {
      setActiveStageId((curr) => {
        const currentIndex = STAGES.findIndex((s) => s.id === curr);
        const nextIndex = (currentIndex + 1) % STAGES.length;
        return STAGES[nextIndex].id;
      });
    }, 5500);

    return () => clearInterval(interval);
  }, [autoRotate]);

  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[0];

  return (
    <div
      className="w-full max-w-xl mx-auto select-none"
      onMouseEnter={() => setAutoRotate(false)}
      onMouseLeave={() => setAutoRotate(true)}
    >
      {/* Console Frame */}
      <div className="rounded-[4px] bg-[#071A2D] border border-white/15 overflow-hidden shadow-2xl">
        {/* Console Header Bar */}
        <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-none bg-[#F97316]" />
            <span className="text-[11px] font-mono tracking-widest text-[#CBD5E1] uppercase font-semibold">
              CAPABILITY PROGRESSION SYSTEM
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#94A3B8] tracking-wider">
            STAGE {activeStage.stage} OF 05
          </span>
        </div>

        {/* Stage Navigation Tab Strip */}
        <div className="grid grid-cols-5 border-b border-white/10 bg-white/[0.01]">
          {STAGES.map((s) => {
            const isActive = s.id === activeStageId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setActiveStageId(s.id);
                  setAutoRotate(false);
                }}
                className={cn(
                  "py-3 px-2 text-center transition-all border-r last:border-r-0 border-white/10 relative group cursor-pointer focus:outline-none",
                  isActive
                    ? "bg-white/[0.06] text-white font-semibold"
                    : "text-[#94A3B8] hover:text-[#CBD5E1] hover:bg-white/[0.02]"
                )}
              >
                {isActive && (
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-[#F97316]" />
                )}
                <div className="text-[10px] font-mono text-[#F97316] block">
                  {s.stage}
                </div>
                <div className="text-[11px] font-mono tracking-wider uppercase mt-0.5 truncate">
                  {s.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Dossier */}
        <div className="p-6 sm:p-7 min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#F97316] font-semibold">
                    MODULE // {activeStage.subtitle}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display text-white tracking-tight leading-snug">
                  {activeStage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] mt-2.5 leading-relaxed font-sans font-normal">
                  {activeStage.description}
                </p>
              </div>

              {/* Competencies Checklist */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] block">
                  Verified Capability Outputs:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeStage.competencies.map((comp, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-[#CBD5E1] font-mono"
                    >
                      <span className="text-[#F97316] text-[10px]">■</span>
                      <span className="truncate">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tangible Outcome Bar */}
              <div className="p-3 rounded-[3px] bg-white/[0.04] border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] block">
                    Institutional Return:
                  </span>
                  <span className="text-xs font-semibold text-[#F97316] font-mono mt-0.5 block">
                    {activeStage.outcome}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-[#94A3B8] flex items-center gap-1">
                  <span>DEPLOYABLE</span>
                  <ArrowRight className="w-3 h-3 text-[#F97316]" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Console Footer */}
        <div className="px-5 py-2.5 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
          <span>CLICK ANY STAGE TO INSPECT SYLLABUS</span>
          <span className="text-[#F97316]">NEXORA FRAMEWORK v2.4</span>
        </div>
      </div>
    </div>
  );
}
