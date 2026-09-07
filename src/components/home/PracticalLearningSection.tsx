"use client";

import React, { useState } from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TOOLS = [
  { name: "Claude 3.7 Sonnet", category: "Reasoning & Code Copilot", status: "Active Lab" },
  { name: "GPT-4o", category: "Multimodal Systems", status: "Active Lab" },
  { name: "Cursor & Windsurf", category: "AI IDE Workflows", status: "Active Lab" },
  { name: "Perplexity Pro", category: "Deep Research Synthesis", status: "Active Lab" },
  { name: "Google Gemini 2.0", category: "Long-Context Analytics", status: "Active Lab" },
  { name: "Make & Zapier", category: "Autonomous Pipelines", status: "Active Lab" },
  { name: "Custom GPTs & RAG", category: "Internal Assistants", status: "Active Lab" },
  { name: "Midjourney & Flux", category: "Visual Asset Creation", status: "Active Lab" },
];

export function PracticalLearningSection() {
  const [activePipelineStep, setActivePipelineStep] = useState(1);

  return (
    <section
      id="practical-learning"
      className="relative py-16 md:py-28 bg-white border-b border-[#E2E8F0]"
    >
      <SectionContainer>
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-10 mb-10 border-b border-[#E2E8F0]">
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#F97316] uppercase">
                  04 // LAB METHODOLOGY
                </span>
                <span className="w-1 h-1 bg-[#CBD5E1]" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#64748B] font-semibold">
                  HANDS-ON CAPABILITY TRANSFER
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight text-[#071A2D] leading-[1.12]">
                Less Theory. More{" "}
                <span className="italic text-[#F97316]">Practical Application.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.15} className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
              Every training experience is designed around real tools, practical exercises, workflows, and real-world applications.
            </p>
          </ScrollReveal>
        </div>

        {/* Systems Blueprint Dossier */}
        <div className="border border-[#E2E8F0] rounded-[3px] overflow-hidden bg-white shadow-xs divide-y divide-[#E2E8F0]">
          {/* Row 1: Real AI Tools + Prompt Engineering */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8F0]">
            {/* Panel 01: Real AI Tools */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E2E8F0]">
                  <span className="text-xs font-mono font-bold text-[#F97316]">
                    01 // LIVE TOOL MATRIX
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    PRODUCTION ENVIRONMENTS
                  </span>
                </div>

                <h3 className="text-2xl font-display text-[#071A2D] tracking-tight mb-2">
                  Real Frontier Tools
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mb-6 leading-relaxed">
                  We train directly inside leading frontier model interfaces and developer copilots. No theoretical slide decks—participants configure, test, and command live systems.
                </p>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 font-mono text-xs">
                  {TOOLS.map((tool, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-[2px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between"
                    >
                      <div>
                        <div className="font-semibold text-[#071A2D] text-xs">
                          {tool.name}
                        </div>
                        <div className="text-[10px] text-[#64748B]">
                          {tool.category}
                        </div>
                      </div>
                      <span className="text-[9px] uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-[2px] border border-emerald-200">
                        {tool.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span>DIRECT API &amp; UI ACCESS</span>
                <span className="text-[#071A2D] font-semibold">100% UNGATED</span>
              </div>
            </div>

            {/* Panel 02: Prompt Engineering */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#F8FAFC]">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E2E8F0]">
                  <span className="text-xs font-mono font-bold text-[#F97316]">
                    02 // COGNITIVE STEERING
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    DETERMINISTIC OUTPUTS
                  </span>
                </div>

                <h3 className="text-2xl font-display text-[#071A2D] tracking-tight mb-2">
                  Prompt Engineering
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mb-6 leading-relaxed">
                  Move from basic questions to structured cognitive framing, chain-of-thought instructions, and deterministic schema outputs.
                </p>

                {/* Technical Schema Inspector */}
                <div className="rounded-[3px] bg-[#071A2D] border border-[#10345A] p-4 font-mono text-[11px] text-[#CBD5E1] space-y-2 mb-6">
                  <div className="text-[#94A3B8] border-b border-white/10 pb-1.5 flex justify-between">
                    <span>SCHEMA // SYSTEM PROMPT</span>
                    <span className="text-emerald-400">STRICT</span>
                  </div>
                  <div className="text-[#FB923C]">
                    <span>$ role:</span> &quot;Lead Institutional Architect&quot;
                  </div>
                  <div className="text-[#94A3B8]">
                    <span>&gt; protocol:</span> &quot;Enforce schema validation + zero hallucinations&quot;
                  </div>
                  <div className="p-2 rounded-[2px] bg-white/[0.04] text-[#CBD5E1] border border-white/10 text-[10px]">
                    reasoning: &quot;Step 1: Ingest source corpus... Step 2: Cross-verify citations...&quot;
                  </div>
                  <div className="text-emerald-400 text-[10px] pt-1">
                    ✓ Validation: Deterministic Precision &gt; 99.5%
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] text-xs font-mono text-[#64748B]">
                REPEATEABLE BUSINESS-GRADE RELIABILITY
              </div>
            </div>
          </div>

          {/* Row 2: AI Productivity Systems + Automation Pipelines */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8F0]">
            {/* Panel 03: AI Productivity Systems */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#F8FAFC]">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E2E8F0]">
                  <span className="text-xs font-mono font-bold text-[#F97316]">
                    03 // SPEED &amp; SCALE
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    MEASURABLE GAINS
                  </span>
                </div>

                <h3 className="text-2xl font-display text-[#071A2D] tracking-tight mb-2">
                  AI Productivity Systems
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mb-6 leading-relaxed">
                  Turn cognitive overload into organized speed. Systems designed to accelerate document synthesis, drafting, and complex problem-solving.
                </p>

                {/* Metrics Table */}
                <div className="space-y-2 mb-6 font-mono">
                  <div className="p-3 rounded-[2px] bg-white border border-[#E2E8F0] flex items-center justify-between">
                    <span className="text-xs text-[#475569]">Weekly Time Reclaimed</span>
                    <span className="text-sm font-bold text-[#071A2D]">10–14 Hours</span>
                  </div>
                  <div className="p-3 rounded-[2px] bg-white border border-[#E2E8F0] flex items-center justify-between">
                    <span className="text-xs text-[#475569]">Synthesis Velocity</span>
                    <span className="text-sm font-bold text-[#F97316]">4x Accelerated</span>
                  </div>
                  <div className="p-3 rounded-[2px] bg-white border border-[#E2E8F0] flex items-center justify-between">
                    <span className="text-xs text-[#475569]">Drafting &amp; Formatting</span>
                    <span className="text-sm font-bold text-[#071A2D]">-70% Friction</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] text-xs font-mono text-[#64748B]">
                EMBEDDED INTO DAILY INDIVIDUAL &amp; TEAM HABITS
              </div>
            </div>

            {/* Panel 04: Workflow Automation */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E2E8F0]">
                  <span className="text-xs font-mono font-bold text-[#F97316]">
                    04 // AUTOMATION PIPELINES
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    INTERACTIVE SEQUENCE
                  </span>
                </div>

                <h3 className="text-2xl font-display text-[#071A2D] tracking-tight mb-2">
                  Business Workflows &amp; Automation
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mb-6 leading-relaxed">
                  Connect AI models to internal spreadsheets, CRM pipelines, and automated agent loops to eliminate repetitive manual workflows.
                </p>

                {/* Pipeline Step Sequence */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
                  {[
                    { step: "01", title: "Ingestion", detail: "PDFs, Invoices, Form data" },
                    { step: "02", title: "AI Extraction", detail: "Entity parsing & logic checks" },
                    { step: "03", title: "Integration", detail: "ERP/CRM sync & alerts" },
                  ].map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActivePipelineStep(idx + 1)}
                      className={cn(
                        "p-3 rounded-[2px] border text-left transition-colors cursor-pointer font-mono",
                        activePipelineStep === idx + 1
                          ? "bg-[#071A2D] text-white border-[#071A2D]"
                          : "bg-[#F8FAFC] border-[#E2E8F0] hover:bg-white text-[#475569]"
                      )}
                    >
                      <div className="text-[10px] text-[#F97316] font-bold">
                        STEP {p.step}
                      </div>
                      <div className="text-xs font-bold font-sans mt-0.5">
                        {p.title}
                      </div>
                      <div className="text-[10px] opacity-75 mt-0.5">
                        {p.detail}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span>ACTIVE PIPELINE SPEC:</span>
                <span className="text-[#F97316] font-semibold">STAGE 0{activePipelineStep} SELECTED</span>
              </div>
            </div>
          </div>

          {/* Row 3: Real-World Projects + Practical & Guided Exercises */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8F0]">
            {/* Panel 05: Real-World Projects */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E2E8F0]">
                  <span className="text-xs font-mono font-bold text-[#F97316]">
                    05 // PORTFOLIO ASSETS
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    CAPSTONE DELIVERABLES
                  </span>
                </div>

                <h3 className="text-2xl font-display text-[#071A2D] tracking-tight mb-2">
                  Real-World Projects
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mb-6 leading-relaxed">
                  Participants don&apos;t just learn concepts; they build tangible, working solutions tailored to their personal studies or organization.
                </p>

                <div className="space-y-2 mb-6">
                  {[
                    { title: "Specialized Knowledge Bot", tag: "ENTERPRISE RAG", desc: "Internal document querying assistant with verified citations." },
                    { title: "Curriculum & Rubric Engine", tag: "ACADEMIC", desc: "Automated lesson planner and pedagogical evaluation assistant." },
                    { title: "Competitive Research Copilot", tag: "MARKET INTEL", desc: "Daily multi-source synthesis summarizing sector movements." },
                  ].map((proj, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-[2px] bg-[#F8FAFC] border border-[#E2E8F0]"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-[#071A2D] font-mono">
                          {proj.title}
                        </span>
                        <span className="text-[9px] font-mono text-[#F97316] bg-[#F97316]/10 px-1.5 py-0.5 rounded-[2px]">
                          {proj.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#64748B]">{proj.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] text-xs font-mono text-[#64748B]">
                READY FOR IMMEDIATE PERSONAL OR ENTERPRISE DEPLOYMENT
              </div>
            </div>

            {/* Panel 06: Practical & Guided Exercises */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-[#F8FAFC]">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E2E8F0]">
                  <span className="text-xs font-mono font-bold text-[#F97316]">
                    06 // ACTIVE SANDBOX
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    INSTRUCTOR VALIDATION
                  </span>
                </div>

                <h3 className="text-2xl font-display text-[#071A2D] tracking-tight mb-2">
                  Practical &amp; Guided Exercises
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mb-6 leading-relaxed">
                  Step-by-step guided lab sandboxes with immediate instructor reviews, edge-case debugging, and prompt optimization drills.
                </p>

                <div className="space-y-2 mb-6 font-mono text-xs">
                  {[
                    { title: "Live Prompt Refactoring Sprints", review: "VERIFIED", desc: "Transforming vague queries into structured reasoning chains." },
                    { title: "Edge-Case & Hallucination Drills", review: "STRESS-TESTED", desc: "Challenging model reasoning to embed safety checks." },
                    { title: "End-to-End Workflow Integration", review: "DEPLOYED", desc: "Connecting real tools to solve multi-step departmental tasks." },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-[2px] bg-white border border-[#E2E8F0]"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-[#071A2D]">{item.title}</span>
                        <span className="text-[9px] text-[#071A2D] bg-[#F1F5F9] px-1.5 py-0.5 rounded-[2px]">
                          {item.review}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#64748B] font-sans">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span>ZERO SLIDE-ONLY THEORIES</span>
                <span className="text-[#071A2D] font-semibold">100% HANDS-ON LABS</span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
