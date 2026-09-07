import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProgramItem } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface ProgramCardProps {
  program: ProgramItem;
  className?: string;
}

export function ProgramCard({ program, className }: ProgramCardProps) {
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
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="primary">{program.categoryLabel}</Badge>
          <Badge variant="outline">{program.formatLabel}</Badge>
          {program.featured && (
            <Badge variant="accent">Featured</Badge>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-display text-[#071A2D] tracking-tight group-hover:text-[#F97316] transition-colors leading-snug">
          {program.title}
        </h3>

        <p className="mt-3 text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
          {program.description}
        </p>

        <div className="mt-6">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] mb-2 font-semibold">
            Curriculum Focus
          </div>
          <div className="flex flex-wrap gap-1.5">
            {program.topics.map((topic, idx) => (
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

      <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
        <span className="text-xs font-mono text-[#64748B]">{program.idealFor}</span>
        <Link
          href={program.href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#071A2D] group-hover:text-[#F97316] transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
