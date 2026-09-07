"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { AUDIENCES_DATA } from "@/data/audiences";
import { AudienceCard } from "./AudienceCard";
import {
  ScrollReveal,
  StaggerReveal,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

export function AudienceSection() {
  return (
    <section id="audiences" className="relative py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <SectionContainer>
        {/* Type B Split Composition Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 mb-10 border-b border-[#E2E8F0]">
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#F97316] uppercase">
                  01 // AUDIENCES
                </span>
                <span className="w-1 h-1 bg-[#CBD5E1]" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#64748B] font-semibold">
                  CURRICULUM SPECIFICATIONS
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight text-[#071A2D] leading-[1.12]">
                Training for Every Stage of the{" "}
                <span className="italic text-[#F97316]">AI Journey.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.15} className="lg:col-span-5 flex flex-col justify-between">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-4 font-normal">
              Nexora builds practical AI capability across academia and industry. Find the tailored curriculum designed around your specific operational workflows and learning goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#071A2D] hover:text-[#F97316] transition-colors group"
            >
              <span>Discuss custom cohort requirements with our directors</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 4-Column Architectural Ledger */}
        <StaggerReveal stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#E2E8F0] rounded-[3px] overflow-hidden bg-white shadow-xs">
          {AUDIENCES_DATA.map((audience, idx) => (
            <StaggerItem key={audience.id} animation="fade-up">
              <AudienceCard audience={audience} index={idx} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </SectionContainer>
    </section>
  );
}
