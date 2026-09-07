import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function OrganizationsCTA() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#CBD5E1]">
      <SectionContainer>
        <div className="relative rounded-[4px] p-8 sm:p-12 md:p-16 bg-[#071A2D] text-white border border-[#071A2D] overflow-hidden">
          <div className="max-w-3xl">
            <div className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase mb-4">
              INSTITUTIONAL & ENTERPRISE INQUIRIES
            </div>

            {/* Exact Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-display text-white tracking-tight leading-tight">
              Let&apos;s Design Your <span className="italic text-[#F97316]">AI Training Program.</span>
            </h2>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
              Whether you are preparing a single operational team or launching an enterprise-wide capability transformation across thousands of employees and faculty, Nexora provides the structure, expertise, and execution to make AI work.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[4px] font-medium text-sm text-white bg-[#F97316] hover:bg-[#EA580C] transition-colors"
              >
                <span>Discuss Your Training Needs</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/builder"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[4px] font-medium text-sm text-white bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 transition-colors"
              >
                <span>Launch Custom Training Builder</span>
              </Link>
            </div>

            {/* Direct Contact fallback & trust assurances */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-8 font-mono text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <span className="text-[#F97316] font-bold">✓</span>
                <span>Enterprise NDA Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F97316] font-bold">✓</span>
                <span>Custom Workflow Audit Included</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#94A3B8]">DIRECT:</span>
                <a href="mailto:enterprise@nexora.academy" className="text-[#F97316] hover:underline underline-offset-4">
                  enterprise@nexora.academy
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

