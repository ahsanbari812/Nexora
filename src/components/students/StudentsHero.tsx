import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function StudentsHero() {
  const features = [
    { num: "01", label: "Zero Coding Required to Start" },
    { num: "02", label: "Build Working Portfolio Capstones" },
    { num: "03", label: "Ethical Academic Citation" },
    { num: "04", label: "Hands-On Guided Labs" },
  ];

  return (
    <section className="relative pt-12 pb-16 md:pt-18 md:pb-20 bg-[#071A2D] bg-subtle-grid-dark border-b border-white/10">
      <SectionContainer>
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#F97316] uppercase">
              STUDENTS // EMERGING BUILDERS
            </span>
            <span className="w-1 h-1 bg-white/20" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#94A3B8] font-semibold">
              ACADEMIC CAPABILITY
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display tracking-tight text-white leading-[1.08] mb-6">
            Build Skills for the{" "}
            <span className="italic text-[#F97316]">AI-Powered Future.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl font-normal mb-8">
            Move beyond simple chatbot queries and homework shortcuts. Learn how to command modern AI tools, engineer multi-step prompt chains, synthesize dense academic research, and build functioning digital prototypes that make your portfolio stand out.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <Link
              href="#student-programs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[3px] font-mono font-semibold text-xs text-white bg-[#F97316] hover:bg-[#EA580C] transition-colors group text-center"
            >
              <span>EXPLORE STUDENT COHORTS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact?program=student-bootcamp"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[3px] font-mono font-semibold text-xs text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/20 hover:border-white/40 transition-colors text-center"
            >
              <span>REQUEST PROGRAM SYLLABUS</span>
              <ArrowUpRight className="w-4 h-4 text-[#CBD5E1]" />
            </Link>
          </div>

          {/* Feature Highlights Strip */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-[2px] bg-white/[0.02] border border-white/5 text-xs font-mono text-[#CBD5E1]"
              >
                <span className="text-[#F97316] font-bold">{item.num}</span>
                <span className="truncate">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
