"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FRAMEWORK_STAGES, FrameworkStage } from "@/data/framework";
import { cn } from "@/lib/utils";

export function CapabilityFramework() {
  const [activeStageId, setActiveStageId] = useState<string>("understand");

  const activeIndex = FRAMEWORK_STAGES.findIndex((s) => s.id === activeStageId);
  const activeStage: FrameworkStage =
    FRAMEWORK_STAGES[activeIndex] || FRAMEWORK_STAGES[0];

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % FRAMEWORK_STAGES.length;
    setActiveStageId(FRAMEWORK_STAGES[nextIndex].id);
  };

  const handlePrev = () => {
    const prevIndex =
      (activeIndex - 1 + FRAMEWORK_STAGES.length) % FRAMEWORK_STAGES.length;
    setActiveStageId(FRAMEWORK_STAGES[prevIndex].id);
  };

  return (
    <section
      id="framework"
      className="relative py-16 md:py-28 border-b border-[#E2E8F0] bg-[#F8FAFC]"
    >
      <SectionContainer>
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-10 mb-10 border-b border-[#E2E8F0]">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#F97316] uppercase">
                02 // METHODOLOGY
              </span>
              <span className="w-1 h-1 bg-[#CBD5E1]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#64748B] font-semibold">
                THE 5-STAGE CAPABILITY FRAMEWORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight text-[#071A2D] leading-[1.12]">
              From AI Awareness to{" "}
              <span className="italic text-[#F97316]">Practical Capability.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
              The core Nexora learning journey moves individuals and organizations from initial curiosity into permanent, high-leverage workflows through 5 structured stages.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP TIMELINE: 5 Editorial Numbered Steps */}
        {/* ========================================================= */}
        <div className="hidden lg:block mb-8">
          <div className="grid grid-cols-5 border border-[#E2E8F0] rounded-[3px] bg-white overflow-hidden shadow-xs">
            {FRAMEWORK_STAGES.map((stage, idx) => {
              const isActive = stage.id === activeStageId;
              const isPassed = idx < activeIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  type="button"
                  className={cn(
                    "p-6 text-left transition-all border-r last:border-r-0 border-[#E2E8F0] relative cursor-pointer focus:outline-none",
                    isActive
                      ? "bg-[#071A2D] text-white"
                      : "hover:bg-[#F8FAFC] text-[#071A2D]"
                  )}
                >
                  {/* Active Top Signal Line */}
                  {isActive && (
                    <div className="absolute top-0 inset-x-0 h-[3px] bg-[#F97316]" />
                  )}

                  {/* Stage Number in Editorial Mono */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={cn(
                        "text-2xl font-mono font-bold tracking-tight",
                        isActive ? "text-[#F97316]" : "text-[#94A3B8]"
                      )}
                    >
                      {stage.number}
                    </span>
                    {isPassed && (
                      <span className="text-[10px] font-mono text-[#F97316] font-semibold">
                        PASS
                      </span>
                    )}
                  </div>

                  {/* Stage Title */}
                  <h3
                    className={cn(
                      "text-sm font-mono font-bold tracking-wider uppercase mb-1.5",
                      isActive ? "text-white" : "text-[#071A2D]"
                    )}
                  >
                    {stage.title}
                  </h3>

                  {/* Definition */}
                  <p
                    className={cn(
                      "text-xs line-clamp-2 leading-relaxed font-normal",
                      isActive ? "text-[#CBD5E1]" : "text-[#64748B]"
                    )}
                  >
                    {stage.definition}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Desktop Deep-Dive Dossier for Active Stage */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="p-8 xl:p-12 rounded-[3px] bg-white border border-[#E2E8F0] shadow-xs"
              >
                <div className="grid grid-cols-12 gap-10 items-start">
                  {/* Left Column: Stage Exposition */}
                  <div className="col-span-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Meta tag */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#F97316] bg-[#F97316]/10 px-2 py-0.5 rounded-[2px]">
                          STAGE {activeStage.number} OF 05
                        </span>
                        <span className="text-xs font-mono text-[#64748B]">
                          CORE NEXORA METHODOLOGY
                        </span>
                      </div>

                      {/* Main Title & Definition */}
                      <h3 className="text-3xl xl:text-4xl font-display text-[#071A2D] tracking-tight leading-tight">
                        {activeStage.title}:{" "}
                        <span className="italic font-normal text-[#334155]">
                          {activeStage.definition}
                        </span>
                      </h3>

                      {/* Key Question Callout */}
                      <div className="p-4 rounded-[2px] bg-[#F8FAFC] border-l-2 border-[#071A2D] my-6">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block mb-1 font-semibold">
                          Core Operational Problem Solved:
                        </span>
                        <p className="text-sm text-[#071A2D] font-display italic leading-relaxed">
                          &ldquo;{activeStage.keyQuestion}&rdquo;
                        </p>
                      </div>

                      {/* Full description */}
                      <p className="text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                        {activeStage.description}
                      </p>
                    </div>

                    {/* Stage Navigator (Prev / Next) */}
                    <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                      <button
                        onClick={handlePrev}
                        className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#64748B] hover:text-[#071A2D] transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>PREVIOUS ({FRAMEWORK_STAGES[(activeIndex - 1 + 5) % 5].number})</span>
                      </button>

                      <div className="flex items-center gap-1">
                        {FRAMEWORK_STAGES.map((s, idx) => (
                          <button
                            key={s.id}
                            onClick={() => setActiveStageId(s.id)}
                            className={cn(
                              "w-6 h-1 transition-colors cursor-pointer",
                              idx === activeIndex
                                ? "bg-[#F97316]"
                                : "bg-[#E2E8F0] hover:bg-[#CBD5E1]"
                            )}
                            aria-label={`Go to stage ${s.number}`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#071A2D] hover:text-[#F97316] transition-colors cursor-pointer"
                      >
                        <span>NEXT ({FRAMEWORK_STAGES[(activeIndex + 1) % 5].number})</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Practical Competencies & Tangible Return */}
                  <div className="col-span-5 flex flex-col justify-between h-full bg-[#071A2D] p-7 rounded-[3px] border border-[#10345A] text-white">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#94A3B8] font-semibold">
                          Target Competencies
                        </span>
                        <span className="text-[10px] font-mono text-[#F97316]">
                          VERIFIED
                        </span>
                      </div>

                      <div className="space-y-2.5 mb-6">
                        {activeStage.competencies.map((comp, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-xs text-[#CBD5E1] p-3 rounded-[2px] bg-white/[0.03] border border-white/[0.08]"
                          >
                            <span className="text-[#F97316] font-mono text-[10px] mt-0.5">
                              0{idx + 1}
                            </span>
                            <span className="leading-snug font-sans">{comp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Practical Return Box */}
                    <div className="p-4 rounded-[2px] bg-white/[0.04] border border-white/10">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#F97316] font-bold block mb-1">
                        Tangible Real-World Return:
                      </span>
                      <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans">
                        {activeStage.practicalOutcome}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE TIMELINE (< lg) */}
        {/* ========================================================= */}
        <div className="lg:hidden space-y-3">
          {FRAMEWORK_STAGES.map((stage) => {
            const isSelected = stage.id === activeStageId;

            return (
              <div
                key={stage.id}
                className={cn(
                  "border rounded-[3px] transition-all duration-200",
                  isSelected
                    ? "bg-white border-[#071A2D]"
                    : "bg-white/80 border-[#E2E8F0]"
                )}
              >
                <button
                  onClick={() => setActiveStageId(stage.id)}
                  type="button"
                  className="w-full p-4 text-left flex items-start justify-between cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg font-mono font-bold text-[#F97316]">
                      {stage.number}
                    </span>
                    <div>
                      <div className="text-xs font-mono font-bold text-[#071A2D] uppercase">
                        {stage.title}
                      </div>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        {stage.definition}
                      </p>
                    </div>
                  </div>
                </button>

                {isSelected && (
                  <div className="px-4 pb-4 pt-2 border-t border-[#E2E8F0] space-y-3">
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="p-3 rounded-[2px] bg-[#F8FAFC] border-l-2 border-[#071A2D] text-xs font-display italic">
                      &ldquo;{stage.keyQuestion}&rdquo;
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block font-semibold">
                        Core Competencies:
                      </span>
                      {stage.competencies.map((comp, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center gap-2 text-xs text-[#334155] font-mono"
                        >
                          <span className="text-[#F97316]">■</span>
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-[2px] bg-[#071A2D] text-white text-xs">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#F97316] font-bold block mb-1">
                        Outcome:
                      </span>
                      {stage.practicalOutcome}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
