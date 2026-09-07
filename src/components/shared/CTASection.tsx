import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

export interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export function CTASection({
  title = "Ready to Build Practical AI Capability?",
  description = "Whether you're training students, empowering educators, or preparing your workforce for an AI-driven future, Nexora AI Academy turns AI concepts into measurable real-world workflows.",
  primaryButtonText = "Discuss Training Needs",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Explore Programs",
  secondaryButtonHref = "/programs",
  className,
}: CTASectionProps) {
  return (
    <SectionContainer spacing="default" className={className}>
      <div className="relative rounded-[3px] bg-[#071A2D] p-8 md:p-14 lg:p-16 border border-white/10 text-center">
        <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-[#F97316] mb-4 font-semibold">
          GET STARTED // NEXORA
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white max-w-3xl mx-auto leading-[1.12]">
          {title}
        </h2>

        <p className="mt-5 text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed font-normal">
          {description}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Button
            href={primaryButtonHref}
            size="lg"
            variant="primary"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            {primaryButtonText}
          </Button>

          {secondaryButtonText && (
            <Button
              href={secondaryButtonHref}
              size="lg"
              variant="dark-outline"
              rightIcon={<ArrowUpRight className="w-4 h-4 text-[#CBD5E1]" />}
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
