import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AcademicIntegritySection() {
  const policyTiers = [
    {
      tier: "TIER // 01",
      name: "Strictly Prohibited",
      badge: "text-rose-700 bg-rose-50 border border-rose-200",
      description: "For core baseline assessments where unassisted human comprehension must be measured directly (e.g. timed proctored exams, in-class writing, or foundational math proofs).",
      rules: "No generative AI or paraphrasing tools allowed. Violation constitutes academic dishonesty.",
    },
    {
      tier: "TIER // 02",
      name: "Ideation & Brainstorming Only",
      badge: "text-amber-800 bg-amber-50 border border-amber-200",
      description: "Students may consult AI to brainstorm research angles, clarify complex theories, or suggest article search terms, but cannot use AI text in drafting.",
      rules: "All submitted prose must be original. Students must submit a brief reflection on how AI assisted ideation.",
    },
    {
      tier: "TIER // 03",
      name: "Assisted with Full Disclosure",
      badge: "text-[#EA580C] bg-[#F97316]/10 border border-[#F97316]/20",
      description: "AI is permitted for outlining, grammar feedback, code debugging, or data synthesis, provided the student critically audits and edits the result.",
      rules: "Mandatory citation protocol: students attach prompt logs and explain editorial alterations.",
    },
    {
      tier: "TIER // 04",
      name: "Full Integration & Critique",
      badge: "text-[#071A2D] bg-[#071A2D]/5 border border-[#071A2D]/20",
      description: "The assignment explicitly requires AI interaction: evaluating model hallucinations, auditing bias, comparing multi-model outputs, or building custom assistants.",
      rules: "Assessment evaluates student critical thinking, verification skills, and analytical rigor.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#CBD5E1]">
      <SectionContainer>
        <SectionHeading
          sectionNumber="02 // INTEGRITY & POLICY"
          eyebrow="Academic Integrity Framework"
          eyebrowBadge
          title="Beyond Detection:"
          titleHighlight="Authentic Assessment"
          description="Relying on statistical AI detectors is scientifically fragile and creates high false-positive rates that disproportionately harm non-native English speakers. Nexora advocates for transparent policy, authentic assessment, and process-oriented learning."
          align="left"
        />

        {/* Detector Reality Alert */}
        <div className="p-7 md:p-8 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] mb-12 max-w-5xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase">
              EMPIRICAL FINDING // DETECTOR RELIABILITY
            </span>
          </div>
          <h4 className="font-display text-xl font-normal text-[#071A2D] mb-2 tracking-tight">
            The Structural Limits of Statistical AI Detectors
          </h4>
          <p className="text-sm text-[#475569] leading-relaxed">
            Peer-reviewed computer science studies demonstrate that AI text detectors exhibit error margins exceeding 20% and are easily bypassed by minor prompt alterations or rephrasing tools. Accusing students based solely on detector percentages creates legal and pedagogical vulnerabilities. Sustainable academic integrity requires a structural shift toward authentic assessment, oral defense, and clear syllabus policy tiers.
          </p>
        </div>

        {/* 4-Tier Syllabus Policy Guide */}
        <div className="max-w-5xl">
          <div className="font-mono text-xs font-semibold text-[#071A2D] tracking-widest uppercase mb-6">
            NEXORA 4-TIER CLASSROOM AI POLICY BENCHMARK
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#CBD5E1] border border-[#CBD5E1] rounded-[4px] overflow-hidden">
            {policyTiers.map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-white hover:bg-[#F8FAFC] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs text-[#64748B] font-semibold">
                      {item.tier}
                    </span>
                    <span className={`px-2 py-0.5 rounded-[2px] font-mono text-[11px] font-medium uppercase tracking-wider ${item.badge}`}>
                      {item.name}
                    </span>
                  </div>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F1F5F9] font-mono text-xs text-[#64748B]">
                  <strong className="text-[#071A2D] uppercase tracking-wider block mb-1">Classroom Rule:</strong>
                  <span>{item.rules}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Policy Adoption Callout */}
          <div className="mt-8 p-6 bg-[#071A2D] text-white rounded-[4px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
            <span className="text-[#CBD5E1]">
              Full departmental syllabus policy packs and grading rubrics are included with all institutional workshop bookings.
            </span>
            <a
              href="/contact?audience=educators"
              className="group inline-flex items-center gap-1.5 text-white hover:text-[#F97316] transition-colors whitespace-nowrap"
            >
              <span>REQUEST POLICY TEMPLATE PACK</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

