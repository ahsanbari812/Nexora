"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FORMATS_DATA } from "@/data/formats";
import { FormatCard } from "./FormatCard";
import {
  ScrollReveal,
  StaggerReveal,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

export function TrainingFormatsSection() {
  return (
    <section id="formats" className="relative py-16 md:py-24 bg-[#071A2D] border-b border-white/10">
      <SectionContainer>
        {/* Header: Split Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-10 mb-10 border-b border-white/10">
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#F97316] uppercase">
                  03 // DELIVERY FORMATS
                </span>
                <span className="w-1 h-1 bg-white/20" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#94A3B8] font-semibold">
                  OPERATIONAL MODELS
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight text-white leading-[1.12]">
                How We Deliver{" "}
                <span className="italic text-[#F97316]">Training.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.15} className="lg:col-span-5 flex flex-col justify-between">
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-4 font-normal">
              Whether you need a rapid, single-session immersion or a multi-month institutional transformation, our training formats are engineered around your operational schedule and capability targets.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#CBD5E1] hover:text-[#F97316] transition-colors group"
            >
              <span>Discuss customized delivery options with our directors</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#F97316]" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 4-Column Architectural Register */}
        <StaggerReveal stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-[3px] overflow-hidden bg-[#071A2D]">
          {FORMATS_DATA.map((format, idx) => (
            <StaggerItem key={format.id} animation="fade-up">
              <FormatCard format={format} index={idx} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </SectionContainer>
    </section>
  );
}
