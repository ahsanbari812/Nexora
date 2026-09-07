import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AudienceItem } from "@/types";
import { cn } from "@/lib/utils";

export interface AudienceCardProps {
  audience: AudienceItem;
  className?: string;
}

export function AudienceCard({ audience, className }: AudienceCardProps) {
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
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2E8F0]">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#F97316] font-semibold">
            {audience.subtitle}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-display text-[#071A2D] tracking-tight group-hover:text-[#F97316] transition-colors leading-snug">
          {audience.title}
        </h3>

        <p className="mt-2.5 text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
          {audience.description}
        </p>

        {audience.keyMessage && (
          <div className="mt-4 p-3 rounded-[2px] bg-[#F8FAFC] border-l-2 border-[#071A2D] text-xs font-display italic text-[#334155] leading-relaxed">
            &ldquo;{audience.keyMessage}&rdquo;
          </div>
        )}

        <div className="mt-6">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] mb-2 font-semibold">
            Key Focus Areas
          </div>
          <div className="flex flex-wrap gap-1.5">
            {audience.topics.map((topic, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[11px] font-mono rounded-[2px] bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-[#E2E8F0]">
        <Link
          href={audience.href}
          className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#071A2D] group-hover:text-[#F97316] transition-colors"
        >
          <span>{audience.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
