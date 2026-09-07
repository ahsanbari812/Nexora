import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "accent" | "outline" | "success" | "dark";
  dot?: boolean;
  icon?: React.ReactNode;
}

export function Badge({
  className,
  variant = "default",
  dot = false,
  icon,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]",
    primary: "bg-[#F97316]/10 text-[#C2410C] border border-[#F97316]/30",
    accent: "bg-[#071A2D] text-white border border-[#071A2D]",
    outline: "bg-transparent text-[#475569] border border-[#CBD5E1]",
    success: "bg-emerald-500/10 text-emerald-700 border border-emerald-500/25",
    dark: "bg-white/[0.06] text-[#CBD5E1] border border-white/15",
  };

  const pipColors = {
    default: "bg-[#475569]",
    primary: "bg-[#F97316]",
    accent: "bg-white",
    outline: "bg-[#64748B]",
    success: "bg-emerald-500",
    dark: "bg-[#F97316]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[3px] text-[11px] font-mono uppercase tracking-wider font-semibold select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-none shrink-0", pipColors[variant])}
          aria-hidden="true"
        />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
