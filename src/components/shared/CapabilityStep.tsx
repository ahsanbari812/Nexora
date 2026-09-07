import React from "react";
import { CapabilityStepItem } from "@/types";
import { cn } from "@/lib/utils";

export interface CapabilityStepProps {
  step: CapabilityStepItem;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

export function CapabilityStep({
  step,
  isActive = false,
  className,
  onClick,
}: CapabilityStepProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative flex flex-col rounded-[3px] p-6 transition-colors duration-200",
        "bg-white border",
        isActive
          ? "border-[#071A2D] bg-[#F8FAFC]"
          : "border-[#E2E8F0] hover:border-[#CBD5E1]",
        onClick && "cursor-pointer",
        className
      )}
    >
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E2E8F0]">
        <span
          className={cn(
            "text-2xl font-mono font-bold transition-colors",
            isActive ? "text-[#F97316]" : "text-[#94A3B8]"
          )}
        >
          {step.number}
        </span>
        <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#F97316]">
          {step.tagline}
        </span>
      </div>

      <h4 className="text-xl font-display text-[#071A2D] tracking-tight mb-2">
        {step.title}
      </h4>

      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4 font-normal">
        {step.description}
      </p>

      <div className="mt-auto pt-3 border-t border-[#E2E8F0] text-xs font-mono text-[#64748B]">
        <span>Action: </span>
        <span className="text-[#071A2D] font-semibold">{step.action}</span>
      </div>
    </div>
  );
}
