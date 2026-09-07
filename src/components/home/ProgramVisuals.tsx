"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export function StudentVisual() {
  return (
    <div className="w-full rounded-[3px] bg-[#071A2D] border border-white/15 p-5 sm:p-6 shadow-xl font-mono text-xs text-[#CBD5E1]">
      {/* Console Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#F97316]" />
          <span className="text-[11px] text-[#CBD5E1] tracking-widest font-semibold uppercase">
            STUDENT LAB // SYNTHESIS WORKFLOW
          </span>
        </div>
        <span className="text-[10px] text-[#F97316] bg-white/[0.04] px-2 py-0.5 rounded-[2px] border border-white/10">
          STAGE 02: RESEARCH
        </span>
      </div>

      {/* Query Block */}
      <div className="space-y-3">
        <div className="p-3 rounded-[2px] bg-white/[0.03] border border-white/10">
          <div className="text-[#94A3B8] text-[10px] uppercase tracking-wider mb-1">
            Input Query // Structured Persona
          </div>
          <p className="text-white font-sans text-xs leading-relaxed">
            &ldquo;Synthesize 8 academic papers on renewable energy storage. Extract core methodology differences and output comparative matrix.&rdquo;
          </p>
        </div>

        {/* Real-time processing */}
        <div className="p-3 rounded-[2px] bg-white/[0.04] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[#F97316] font-bold">
              Citations Verified
            </span>
            <span className="text-emerald-400">8 Sources Grounded</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px] text-[#CBD5E1] pt-1">
            <div className="p-2 rounded-[2px] bg-[#071A2D] border border-white/10">
              <span className="text-[#94A3B8] block">Extraction Method:</span>
              Li-Ion vs. Flow Cells
            </div>
            <div className="p-2 rounded-[2px] bg-[#071A2D] border border-white/10">
              <span className="text-[#94A3B8] block">Output Schema:</span>
              Comparative Matrix
            </div>
          </div>
        </div>

        {/* Deliverable Footer */}
        <div className="p-2.5 rounded-[2px] bg-white/[0.02] border border-white/10 flex items-center justify-between text-[11px] text-[#94A3B8]">
          <span>PORTFOLIO ASSET // READY TO PRESENT</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F97316]" />
        </div>
      </div>
    </div>
  );
}

export function EducatorVisual() {
  return (
    <div className="w-full rounded-[3px] bg-[#071A2D] border border-white/15 p-5 sm:p-6 shadow-xl font-mono text-xs text-[#CBD5E1]">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#F97316]" />
          <span className="text-[11px] text-[#CBD5E1] tracking-widest font-semibold uppercase">
            CURRICULUM ENGINE // RUBRIC AUDIT
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-white/[0.04] px-2 py-0.5 rounded-[2px] border border-white/10">
          INTEGRITY AUDITED
        </span>
      </div>

      <div className="space-y-3">
        {/* Course Scaffolding */}
        <div className="p-3 rounded-[2px] bg-white/[0.03] border border-white/10">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold text-white font-sans">
              Course: Critical Inquiry in the AI Era
            </span>
            <span className="text-[10px] text-[#F97316]">
              Prep Drag: -65%
            </span>
          </div>
          <p className="text-[11px] text-[#94A3B8] font-sans leading-relaxed">
            Automated lesson scaffolding generated with balanced pedagogical pacing and differentiated reading tiers.
          </p>
        </div>

        {/* Rubric Breakdown */}
        <div className="p-3 rounded-[2px] bg-white/[0.04] border border-white/10 space-y-2">
          <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block font-semibold">
            Assessment Matrix:
          </span>

          <div className="space-y-1 text-[11px]">
            <div className="flex items-center justify-between p-1.5 rounded-[2px] bg-[#071A2D] text-[#CBD5E1] border border-white/5">
              <span className="font-sans text-xs">Conceptual Depth &amp; Critical Evaluation</span>
              <span className="text-[#F97316] font-bold">40%</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-[2px] bg-[#071A2D] text-[#CBD5E1] border border-white/5">
              <span className="font-sans text-xs">Source Grounding &amp; Fact-Checking</span>
              <span className="text-[#F97316] font-bold">30%</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-[2px] bg-[#071A2D] text-[#CBD5E1] border border-white/5">
              <span className="font-sans text-xs">Original Human Argumentation</span>
              <span className="text-[#F97316] font-bold">30%</span>
            </div>
          </div>
        </div>

        {/* Protocol status */}
        <div className="p-2.5 rounded-[2px] bg-white/[0.02] border border-white/10 flex items-center justify-between text-[11px] text-[#94A3B8]">
          <span>PEDAGOGICAL POLICY: STANDARDS COMPLIANT</span>
          <span className="text-emerald-400">ACTIVE</span>
        </div>
      </div>
    </div>
  );
}

export function OrganizationVisual() {
  return (
    <div className="w-full rounded-[3px] bg-[#071A2D] border border-white/15 p-5 sm:p-6 shadow-xl font-mono text-xs text-[#CBD5E1]">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#F97316]" />
          <span className="text-[11px] text-[#CBD5E1] tracking-widest font-semibold uppercase">
            ENTERPRISE PIPELINE // AUTOMATION MONITOR
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-white/[0.04] px-2 py-0.5 rounded-[2px] border border-white/10">
          SOC-2 READY
        </span>
      </div>

      <div className="space-y-3">
        {/* Department Status Ledger */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-[2px] bg-white/[0.03] border border-white/10 text-center">
            <span className="text-[9px] text-[#94A3B8] block">OPERATIONS</span>
            <span className="text-xs font-bold text-white mt-0.5 block">Automated</span>
          </div>
          <div className="p-2.5 rounded-[2px] bg-white/[0.03] border border-white/10 text-center">
            <span className="text-[9px] text-[#94A3B8] block">ANALYSIS</span>
            <span className="text-xs font-bold text-[#F97316] mt-0.5 block">4x Velocity</span>
          </div>
          <div className="p-2.5 rounded-[2px] bg-white/[0.03] border border-white/10 text-center">
            <span className="text-[9px] text-[#94A3B8] block">ADMIN DRAG</span>
            <span className="text-xs font-bold text-emerald-400 mt-0.5 block">-80% Cycle</span>
          </div>
        </div>

        {/* Live Pipeline Execution Box */}
        <div className="p-3 rounded-[2px] bg-white/[0.04] border border-white/10 space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between text-white">
            <span>Pipeline: Vendor Contract &amp; Invoice Ingestion</span>
            <span className="text-emerald-400">1.2s</span>
          </div>
          <div className="text-[10px] text-[#94A3B8]">
            Ingestion: PDFs → Structured JSON Schema → ERP Sync
          </div>
        </div>

        {/* ROI status */}
        <div className="p-2.5 rounded-[2px] bg-white/[0.02] border border-white/10 flex items-center justify-between text-[11px] text-[#94A3B8]">
          <span>ESTIMATED RETURN: +35 HOURS / WEEK / DEPT</span>
          <span className="text-[#F97316] font-bold">AUDITED</span>
        </div>
      </div>
    </div>
  );
}
