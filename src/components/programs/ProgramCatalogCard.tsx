import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { CatalogProgram } from "@/data/catalog";
import { cn } from "@/lib/utils";

export interface ProgramCatalogCardProps {
  program: CatalogProgram;
  className?: string;
}

export function ProgramCatalogCard({ program, className }: ProgramCatalogCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-[3px] p-6 sm:p-7 md:p-8",
        "bg-white border border-[#E2E8F0] hover:border-[#CBD5E1]",
        "transition-colors duration-200 shadow-xs",
        className
      )}
    >
      <div>
        {/* Badges & Meta Row */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[10px] font-mono font-bold uppercase tracking-wider bg-[#F97316]/10 text-[#C2410C] border border-[#F97316]/25">
            {program.audience}
          </span>

          <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[10px] font-mono font-semibold bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]">
            {program.format}
          </span>

          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[2px] text-[10px] font-mono text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0]">
            <Clock className="w-3 h-3 text-[#94A3B8]" />
            {program.duration}
          </span>

          {program.featured && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[10px] font-mono font-bold bg-[#071A2D] text-white">
              FEATURED TRACK
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-display text-[#071A2D] tracking-tight group-hover:text-[#F97316] transition-colors leading-snug mt-3">
          {program.title}
        </h3>

        {/* Target Audience / Ideal For */}
        <p className="mt-2 text-xs font-mono text-[#64748B]">
          COHORT: <span className="text-[#071A2D] font-bold">{program.targetAudience}</span>
        </p>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
          {program.description}
        </p>

        {/* Key Topics */}
        <div className="mt-6">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] mb-2 font-semibold">
            Curriculum Focus
          </div>
          <div className="flex flex-wrap gap-1.5">
            {program.keyTopics.map((topic, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[11px] font-mono rounded-[2px] bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Practical Deliverable Box */}
        <div className="mt-6 p-3.5 rounded-[2px] bg-[#F8FAFC] border border-[#E2E8F0]">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] block font-semibold">
            Tangible Output:
          </span>
          <span className="text-xs text-[#071A2D] font-bold font-mono leading-snug block mt-1">
            {program.deliverable}
          </span>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/contact?program=${encodeURIComponent(program.title)}`}
          className="inline-flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#071A2D] font-mono transition-colors"
        >
          <span>Request Outline</span>
        </Link>

        <Link
          href={program.href}
          className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#071A2D] hover:text-[#F97316] transition-colors"
        >
          <span>{program.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#F97316]" />
        </Link>
      </div>
    </div>
  );
}
