"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AudienceItem } from "@/types";
import { cn } from "@/lib/utils";

interface AudienceCardProps {
  audience: AudienceItem;
  index: number;
}

export function AudienceCard({ audience, index }: AudienceCardProps) {
  const [expandedMobile, setExpandedMobile] = useState(false);
  const visibleTopics = audience.topics.slice(0, 4);
  const remainingCount = audience.topics.length - 4;
  const numStr = String(index + 1).padStart(2, "0");

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between p-6 sm:p-7 md:p-8",
        "bg-white border-b lg:border-b-0 lg:border-r last:border-r-0 border-[#E2E8F0]",
        "transition-colors duration-200 hover:bg-[#F8FAFC]/60"
      )}
    >
      <div>
        {/* Header: Stage Number & Cohort Label */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E2E8F0]">
          <span className="text-xl font-mono font-bold text-[#F97316]">
            {numStr}
          </span>
          <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded-[2px]">
            TRACK // {audience.id.toUpperCase()}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl font-display text-[#071A2D] tracking-tight leading-tight mb-2">
          {audience.title}
        </h3>

        <div className="text-xs font-semibold text-[#071A2D] mb-4">
          {audience.subtitle}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-normal">
          {audience.description}
        </p>

        {/* Core Thesis Quotation */}
        <div className="p-3.5 rounded-[2px] bg-[#F8FAFC] border-l-2 border-[#071A2D] text-xs text-[#334155] font-display italic mb-6 leading-relaxed">
          &ldquo;{audience.keyMessage}&rdquo;
        </div>

        {/* Focus Modules */}
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] mb-2.5 flex items-center justify-between font-semibold">
            <span>Core Modules</span>
            <span className="text-[10px] font-mono text-[#F97316]">
              {audience.topics.length} Areas
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {visibleTopics.map((topic, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[11px] font-mono rounded-[2px] bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]"
              >
                {topic}
              </span>
            ))}

            {/* Desktop reveals all remaining on group hover */}
            <div className="hidden group-hover:contents transition-all duration-200">
              {audience.topics.slice(4).map((topic, idx) => (
                <span
                  key={`extra-${idx}`}
                  className="px-2 py-0.5 text-[11px] font-mono rounded-[2px] bg-white text-[#071A2D] border border-[#CBD5E1]"
                >
                  {topic}
                </span>
              ))}
            </div>

            {/* Mobile Expanded List */}
            {expandedMobile && (
              <div className="contents md:hidden">
                {audience.topics.slice(4).map((topic, idx) => (
                  <span
                    key={`mobile-extra-${idx}`}
                    className="px-2 py-0.5 text-[11px] font-mono rounded-[2px] bg-white text-[#071A2D] border border-[#CBD5E1]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}

            {/* Mobile toggle button */}
            {remainingCount > 0 && (
              <button
                type="button"
                onClick={() => setExpandedMobile(!expandedMobile)}
                className="md:hidden inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-[#F97316] bg-[#F97316]/10 rounded-[2px]"
              >
                <span>{expandedMobile ? "Less" : `+${remainingCount}`}</span>
                <ChevronDown
                  className={cn(
                    "w-3 h-3 transition-transform",
                    expandedMobile && "rotate-180"
                  )}
                />
              </button>
            )}

            {/* Desktop counter indicator when not hovered */}
            <span className="group-hover:hidden hidden md:inline-block px-2 py-0.5 text-[10px] font-mono text-[#64748B] rounded-[2px] bg-[#F1F5F9]">
              +{remainingCount} more
            </span>
          </div>
        </div>
      </div>

      {/* Action Trigger */}
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
