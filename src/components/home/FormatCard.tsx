import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrainingFormatItem } from "@/types";
import { cn } from "@/lib/utils";

interface FormatCardProps {
  format: TrainingFormatItem;
  index: number;
}

export function FormatCard({ format, index }: FormatCardProps) {
  const numStr = String(index + 1).padStart(2, "0");

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between p-6 sm:p-7 xl:p-8 h-full",
        "bg-[#071A2D] border-b lg:border-b-0 lg:border-r last:border-r-0 border-white/10",
        "transition-colors duration-200 hover:bg-white/[0.02]"
      )}
    >
      <div>
        {/* Top bar: Format Register Number */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <span className="text-xl font-mono font-bold text-[#F97316]">
            {numStr}
          </span>
          <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#94A3B8]">
            FORMAT // {format.id.toUpperCase()}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-display text-white tracking-tight leading-tight mb-2">
          {format.title}
        </h3>

        {/* Tagline / Core definition */}
        <p className="text-xs font-display italic text-[#CBD5E1] mb-4 leading-relaxed">
          {format.tagline}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6 font-normal">
          {format.description}
        </p>

        {/* Feature Checkpoints */}
        {format.features && format.features.length > 0 && (
          <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] block mb-2 font-semibold">
              Delivery Specifications:
            </span>
            {format.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-[#CBD5E1] font-mono"
              >
                <span className="text-[#F97316] text-[10px] mt-0.5">■</span>
                <span className="leading-snug font-sans text-xs">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Ideal For Section */}
        <div className="pt-4 border-t border-white/10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] block mb-2 font-semibold">
            Cohort Suitability:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {format.idealFor.map((item, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[11px] font-mono rounded-[2px] bg-white/[0.04] text-[#CBD5E1] border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Bottom Bar */}
      <div className="mt-8 pt-4 border-t border-white/10">
        <Link
          href={format.href}
          className="inline-flex items-center justify-between w-full text-xs font-semibold text-white group-hover:text-[#F97316] transition-colors"
        >
          <span>{format.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#F97316]" />
        </Link>
      </div>
    </div>
  );
}
