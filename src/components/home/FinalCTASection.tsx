"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";

export function FinalCTASection() {
  const assurances = [
    { num: "01", text: "Custom Curriculum Co-Design" },
    { num: "02", text: "100% Hands-On Labs & Workflows" },
    { num: "03", text: "Permanent Institutional Capability" },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#071A2D] border-t border-white/10 overflow-hidden">
      <SectionContainer>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Top Eyebrow Tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#F97316] uppercase">
              GET STARTED
            </span>
            <span className="w-1 h-1 bg-white/20" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#94A3B8] font-semibold">
              NEXORA AI ACADEMY
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-white tracking-tight leading-[1.08] mb-6">
            Ready to Build{" "}
            <span className="italic text-[#F97316]">AI Capability?</span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-[#CBD5E1] leading-relaxed max-w-2xl mb-10 font-normal">
            Whether you&apos;re training students, empowering educators, or preparing
            your workforce for an AI-driven future, Nexora AI Academy can help turn
            AI from a concept into a practical capability.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Discuss a Training Program
            </Button>

            <Button
              href="/programs"
              size="lg"
              variant="dark-outline"
              rightIcon={<ArrowUpRight className="w-4 h-4 text-[#CBD5E1]" />}
              className="w-full sm:w-auto"
            >
              Request a Program Outline
            </Button>
          </div>

          {/* Institutional Assurances Strip */}
          <div className="pt-8 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-[#CBD5E1]">
            {assurances.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 p-2 rounded-[2px] bg-white/[0.02] border border-white/5"
              >
                <span className="text-[#F97316] font-bold">{item.num}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
