import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrainingFormatItem } from "@/types";
import { cn } from "@/lib/utils";

export interface TrainingFormatCardProps {
  format: TrainingFormatItem;
  className?: string;
}

export function TrainingFormatCard({ format, className }: TrainingFormatCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-[3px] p-6 sm:p-7",
        "bg-white border border-[#E2E8F0] hover:border-[#CBD5E1]",
        "transition-colors duration-200 shadow-xs",
        className
      )}
    >
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-[#F97316] mb-2 font-semibold">
          {format.tagline}
        </div>

        <h3 className="text-xl sm:text-2xl font-display text-[#071A2D] tracking-tight group-hover:text-[#F97316] transition-colors leading-snug">
          {format.title}
        </h3>

        <p className="mt-3 text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
          {format.description}
        </p>

        {format.features && format.features.length > 0 && (
          <div className="mt-5 space-y-2 pt-4 border-t border-[#E2E8F0]">
            {format.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#475569] font-mono">
                <span className="text-[#F97316] text-[10px] mt-0.5">■</span>
                <span className="font-sans text-xs">{feat}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] mb-2 font-semibold">
            Cohort Suitability
          </div>
          <div className="flex flex-wrap gap-1.5">
            {format.idealFor.map((item, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[11px] font-mono rounded-[2px] bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-[#E2E8F0]">
        <Link
          href={format.href}
          className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#071A2D] group-hover:text-[#F97316] transition-colors"
        >
          <span>{format.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
