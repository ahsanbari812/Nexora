import React from "react";
import { ArrowRight } from "lucide-react";
import { FeaturedProgram } from "@/data/programs";
import {
  StudentVisual,
  EducatorVisual,
  OrganizationVisual,
} from "./ProgramVisuals";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ProgramEditorialBlockProps {
  program: FeaturedProgram;
  isReversed?: boolean;
  variant?: "white" | "off-white" | "navy";
}

export function ProgramEditorialBlock({
  program,
  isReversed = false,
  variant = "white",
}: ProgramEditorialBlockProps) {
  const renderVisual = () => {
    switch (program.visualType) {
      case "students":
        return <StudentVisual />;
      case "educators":
        return <EducatorVisual />;
      case "organizations":
        return <OrganizationVisual />;
      default:
        return null;
    }
  };

  const isNavy = variant === "navy";

  return (
    <div
      className={cn(
        "p-8 sm:p-10 lg:p-12 relative rounded-[3px] border",
        isNavy
          ? "bg-[#071A2D] border-white/10 text-white"
          : variant === "off-white"
          ? "bg-[#F8FAFC] border-[#E2E8F0]"
          : "bg-white border-[#E2E8F0]"
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Text & Content Column */}
        <div
          className={cn(
            "lg:col-span-6 flex flex-col justify-between",
            isReversed ? "lg:order-2" : "lg:order-1"
          )}
        >
          <div>
            {/* Number + Audience Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-mono font-bold text-[#F97316]">
                {program.number}
              </span>
              <span
                className={cn(
                  "w-1 h-1",
                  isNavy ? "bg-white/20" : "bg-[#CBD5E1]"
                )}
              />
              <span
                className={cn(
                  "text-[11px] font-mono font-semibold uppercase tracking-widest",
                  isNavy ? "text-[#94A3B8]" : "text-[#64748B]"
                )}
              >
                {program.audience}
              </span>
            </div>

            {/* Program Title & Headline */}
            <h3
              className={cn(
                "text-2xl sm:text-3xl md:text-4xl font-display tracking-tight leading-[1.12] mb-3",
                isNavy ? "text-white" : "text-[#071A2D]"
              )}
            >
              {program.title}
            </h3>

            <p className="text-sm font-semibold text-[#F97316] mb-4">
              {program.headline}
            </p>

            <p
              className={cn(
                "text-xs sm:text-sm leading-relaxed mb-6 font-normal",
                isNavy ? "text-[#CBD5E1]" : "text-[#475569]"
              )}
            >
              {program.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-2 mb-6">
              {program.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex items-start gap-2.5 text-xs font-mono",
                    isNavy ? "text-[#CBD5E1]" : "text-[#475569]"
                  )}
                >
                  <span className="text-[#F97316] text-[10px] mt-0.5">■</span>
                  <span className="font-sans text-xs">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Curriculum Focus Topics */}
            <div
              className={cn(
                "mb-8 pt-4 border-t",
                isNavy ? "border-white/10" : "border-[#E2E8F0]"
              )}
            >
              <span
                className={cn(
                  "text-[10px] font-mono uppercase tracking-widest block mb-2.5 font-semibold",
                  isNavy ? "text-[#94A3B8]" : "text-[#64748B]"
                )}
              >
                Curriculum Focus Areas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {program.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      "px-2 py-0.5 text-[11px] font-mono rounded-[2px] border",
                      isNavy
                        ? "bg-white/[0.04] text-[#CBD5E1] border-white/10"
                        : "bg-white text-[#475569] border-[#E2E8F0]"
                    )}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div>
            <Button
              href={program.href}
              variant={isNavy ? "primary" : "secondary"}
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {program.ctaText}
            </Button>
          </div>
        </div>

        {/* Visual Element Column */}
        <div
          className={cn(
            "lg:col-span-6 w-full flex justify-center",
            isReversed ? "lg:order-1" : "lg:order-2"
          )}
        >
          {renderVisual()}
        </div>
      </div>
    </div>
  );
}
