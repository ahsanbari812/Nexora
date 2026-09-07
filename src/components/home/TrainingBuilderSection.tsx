"use client";

import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { TrainingBuilderForm } from "./TrainingBuilderForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TrainingBuilderSection() {
  return (
    <section id="builder" className="relative py-16 md:py-24 bg-[#071A2D] border-b border-white/10">
      <SectionContainer size="narrow">
        {/* Editorial Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#F97316] uppercase">
                06 // PROGRAM DESIGNER
              </span>
              <span className="w-1 h-1 bg-white/20" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#94A3B8] font-semibold">
                SPECIFICATION BUILDER
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight text-white leading-[1.12] mb-4">
              Build Your{" "}
              <span className="italic text-[#F97316]">Training Program.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-normal">
              Tell us who you&apos;re training and what you want to achieve. We&apos;ll help you design the right AI learning experience.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scale-up" delay={0.15}>
          <TrainingBuilderForm />
        </ScrollReveal>
      </SectionContainer>
    </section>
  );
}
