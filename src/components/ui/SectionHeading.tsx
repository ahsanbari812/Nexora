import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  sectionIndex?: string;
  sectionNumber?: string;
  eyebrow?: string;
  eyebrowBadge?: boolean;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  maxWidth?: "sm" | "md" | "lg" | "full";
  /** When true, renders for dark (navy) backgrounds with white text */
  onDark?: boolean;
  /** Whether to use editorial serif display font */
  serif?: boolean;
}

export function SectionHeading({
  sectionIndex,
  sectionNumber,
  eyebrow,
  eyebrowBadge,
  title,
  titleHighlight,
  description,
  align = "left",
  maxWidth = "lg",
  onDark = false,
  serif = true,
  className,
  ...props
}: SectionHeadingProps) {
  const effectiveIndex = sectionIndex || sectionNumber;

  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const maxWidthStyles = {
    sm: "max-w-xl",
    md: "max-w-2xl",
    lg: "max-w-3xl",
    full: "max-w-none",
  };

  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        alignStyles[align],
        maxWidthStyles[maxWidth],
        className
      )}
      {...props}
    >
      {/* Top editorial marker: index + eyebrow */}
      {(effectiveIndex || eyebrow) && (
        <div className="flex items-center gap-3 mb-4">
          {effectiveIndex && (
            <span
              className={cn(
                "text-xs font-mono font-bold tracking-widest uppercase",
                onDark ? "text-[#F97316]" : "text-[#F97316]"
              )}
            >
              {effectiveIndex}
            </span>
          )}
          {effectiveIndex && eyebrow && (
            <span
              className={cn(
                "w-1 h-1 rounded-none",
                onDark ? "bg-white/20" : "bg-[#CBD5E1]"
              )}
            />
          )}
          {eyebrow && (
            eyebrowBadge ? (
              <span
                className={cn(
                  "inline-flex items-center px-2 py-0.5 rounded-[2px] text-[10px] font-mono uppercase tracking-wider font-semibold",
                  onDark
                    ? "bg-white/[0.08] text-[#CBD5E1] border border-white/15"
                    : "bg-[#071A2D]/5 text-[#334155] border border-[#E2E8F0]"
                )}
              >
                {eyebrow}
              </span>
            ) : (
              <span
                className={cn(
                  "text-[11px] font-mono uppercase tracking-widest font-semibold",
                  onDark ? "text-[#94A3B8]" : "text-[#64748B]"
                )}
              >
                {eyebrow}
              </span>
            )
          )}
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15]",
          serif ? "font-display font-normal" : "font-sans font-bold",
          onDark ? "text-white" : "text-[#071A2D]"
        )}
      >
        {title}{" "}
        {titleHighlight && (
          <span
            className={cn(
              serif ? "italic font-normal text-[#F97316]" : "text-[#F97316]"
            )}
          >
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            onDark ? "text-[#CBD5E1]" : "text-[#475569]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
