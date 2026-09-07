import React from "react";
import { ArrowUpRight } from "lucide-react";
import { BRAND_INFO } from "@/data/navigation";

export function ContactChannels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#CBD5E1] border border-[#CBD5E1] rounded-[4px] overflow-hidden mb-12">
      {/* WhatsApp Fast Channel */}
      <div className="p-8 sm:p-9 bg-white hover:bg-[#F8FAFC] transition-colors flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-3 mb-5">
            <span className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase">
              CHANNEL // 01
            </span>
            <span className="px-2 py-0.5 rounded-[2px] font-mono text-[10px] font-medium tracking-wider uppercase text-emerald-800 bg-emerald-50 border border-emerald-200">
              Direct Mobile Desk
            </span>
          </div>

          <h3 className="font-display text-xl font-normal text-[#071A2D] tracking-tight mb-3">
            WhatsApp Consultation
          </h3>

          <p className="text-sm text-[#475569] leading-relaxed mb-6">
            Quick questions regarding upcoming cohort dates, faculty workshops, curriculum customization, or team size recommendations? Connect directly with our coordination desk.
          </p>
        </div>

        <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between font-mono text-xs">
          <span className="text-[#64748B]">Instant chat response</span>
          <a
            href="https://wa.me/?text=Hello%20Nexora%20AI%20Academy%2C%20I%20would%20like%20to%20discuss%20a%20training%20program."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] font-medium text-xs text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors"
          >
            <span>Message on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Direct Email Channel */}
      <div className="p-8 sm:p-9 bg-white hover:bg-[#F8FAFC] transition-colors flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-3 mb-5">
            <span className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase">
              CHANNEL // 02
            </span>
            <span className="px-2 py-0.5 rounded-[2px] font-mono text-[10px] font-medium tracking-wider uppercase text-[#071A2D] bg-[#071A2D]/5 border border-[#071A2D]/20">
              Formal RFPs & Briefs
            </span>
          </div>

          <h3 className="font-display text-xl font-normal text-[#071A2D] tracking-tight mb-3">
            Direct Email Inquiries
          </h3>

          <p className="text-sm text-[#475569] leading-relaxed mb-6">
            Send formal RFPs, syllabus outline requests, or institutional partnership inquiries directly to our curriculum directors. We provide comprehensive written briefs within 24 hours.
          </p>
        </div>

        <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between font-mono text-xs">
          <span className="text-[#64748B]">Admissions & Enterprise</span>
          <a
            href={`mailto:${BRAND_INFO.email}`}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] font-medium text-xs text-[#071A2D] bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#CBD5E1] transition-colors"
          >
            <span>{BRAND_INFO.email}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

