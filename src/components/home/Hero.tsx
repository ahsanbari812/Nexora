"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { CapabilityVisualizer } from "./CapabilityVisualizer";
import {
  ScrollReveal,
  StaggerReveal,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

export function Hero() {
  const tracks = [
    { num: "01", label: "Students" },
    { num: "02", label: "Educators" },
    { num: "03", label: "Corporate Teams" },
    { num: "04", label: "Institutions" },
  ];

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 bg-[#071A2D] bg-subtle-grid-dark border-b border-white/[0.08] overflow-hidden">
      <SectionContainer>
        {/* Top Editorial Eyebrow & Line */}
        <ScrollReveal animation="fade-in" duration={0.5}>
          <div className="mb-8 md:mb-12">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono tracking-widest text-[#94A3B8] uppercase">
              <span>NEXORA AI ACADEMY</span>
              <span className="hidden sm:inline text-[#F97316]">
                PRACTICAL AI &amp; TECHNOLOGY TRAINING
              </span>
              <span className="font-mono">EST. 2024</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Authoritative Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Main Headline */}
            <ScrollReveal animation="fade-up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display tracking-tight text-white leading-[1.06] mb-6">
                Build Practical{" "}
                <span className="italic font-normal text-[#F97316]">
                  AI Capability
                </span>{" "}
                For The Real World.
              </h1>
            </ScrollReveal>

            {/* Supporting Text */}
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-[#CBD5E1] leading-relaxed max-w-2xl mb-8 font-sans font-normal">
                Nexora AI Academy helps students, educators, and organizations
                understand, apply, and build with artificial intelligence through
                practical, hands-on training.
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal animation="fade-up" delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
                <Button
                  href="/programs"
                  size="lg"
                  variant="primary"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Explore Training Programs
                </Button>

                <Button
                  href="/contact"
                  size="lg"
                  variant="dark-outline"
                  rightIcon={<ArrowUpRight className="w-4 h-4 text-[#CBD5E1]" />}
                  className="w-full sm:w-auto"
                >
                  Discuss Your Training Needs
                </Button>
              </div>
            </ScrollReveal>

            {/* Audience Tracks Ledger */}
            <ScrollReveal animation="fade-up" delay={0.4}>
              <div className="pt-6 border-t border-white/10 w-full">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] block mb-3 font-semibold">
                  Specialized Curriculum Tracks:
                </span>
                <StaggerReveal className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono" stagger={0.08}>
                  {tracks.map((t, idx) => (
                    <StaggerItem key={idx} animation="fade-up">
                      <div className="p-2.5 rounded-[2px] bg-white/[0.03] border border-white/10 flex items-center gap-2 text-[#CBD5E1]">
                        <span className="text-[#F97316] font-bold text-[10px]">
                          {t.num}
                        </span>
                        <span className="text-xs truncate">{t.label}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerReveal>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Structured Intelligence Console */}
          <ScrollReveal
            animation="slide-left"
            delay={0.3}
            className="lg:col-span-5 flex justify-center w-full lg:pt-2"
          >
            <CapabilityVisualizer />
          </ScrollReveal>
        </div>
      </SectionContainer>
    </section>
  );
}
