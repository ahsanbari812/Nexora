import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EducatorWorkflowShowcase() {
  const traditionalTasks = [
    { task: "Lesson & Unit Architecture", time: "4-5 hrs", detail: "Writing standards-aligned lessons & sourcing passages from scratch" },
    { task: "Assignment Feedback", time: "6-8 hrs", detail: "Writing repetitive margin comments across 30+ student submissions" },
    { task: "Differentiated Materials", time: "3 hrs", detail: "Manually adapting difficulty levels for diverse student needs" },
    { task: "Administrative Drafting", time: "2 hrs", detail: "Routine email correspondence, meeting notes, syllabus updates" },
  ];

  const augmentedTasks = [
    { task: "AI-Assisted Lesson Drafting", time: "45 mins", detail: "Generate multi-tiered lesson plans; teacher edits for classroom nuance" },
    { task: "Formative Feedback Synthesis", time: "1.5 hrs", detail: "AI drafts initial rubric alignment; teacher personalizes guidance" },
    { task: "Instant Differentiation", time: "20 mins", detail: "Instantly create tiered problem sets and multi-lexile reading passages" },
    { task: "Reclaimed Time for Students", time: "10+ Hrs", detail: "Dedicated 1-on-1 student office hours and engaging live discussions" },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#CBD5E1]">
      <SectionContainer>
        <SectionHeading
          sectionNumber="03 // TIME RECLAMATION"
          eyebrow="Workflow Transformation"
          eyebrowBadge
          title="Transforming the Educator's"
          titleHighlight="Weekly Reality"
          description="AI does not replace the educator. It eliminates the exhausting administrative drag that leads to faculty burnout, returning teacher focus to what machines can never replicate: genuine human mentorship."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {/* Traditional Workflow */}
          <div className="p-8 md:p-10 bg-white border border-[#CBD5E1] rounded-[4px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5 pb-4 border-b border-[#E2E8F0]">
                <span className="font-mono text-xs font-semibold text-[#64748B] uppercase tracking-widest">
                  BASELINE // 01
                </span>
                <span className="font-mono text-xs text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded-[2px] border border-[#E2E8F0]">
                  ~15 Hours Admin Drag
                </span>
              </div>

              <h3 className="font-display text-xl md:text-2xl text-[#071A2D] font-normal tracking-tight mb-3">
                Manual Administrative Friction
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Teachers spend evenings grading and typing repetitive comments, resulting in cognitive exhaustion and hurried classroom interactions.
              </p>

              <div className="space-y-3">
                {traditionalTasks.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-[2px] bg-[#F8FAFC] border border-[#E2E8F0]">
                    <div className="flex items-center justify-between text-xs font-mono font-medium text-[#071A2D] mb-1">
                      <span>{item.task}</span>
                      <span className="text-rose-600 font-bold">{item.time}</span>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E2E8F0] font-mono text-xs text-[#64748B]">
              OUTCOME // Faculty burnout and diminished capacity for individual student attention.
            </div>
          </div>

          {/* AI-Augmented Workflow */}
          <div className="p-8 md:p-10 bg-[#071A2D] text-white border border-[#071A2D] rounded-[4px] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5 pb-4 border-b border-white/10">
                <span className="font-mono text-xs font-semibold text-[#F97316] uppercase tracking-widest">
                  AUGMENTED // 02
                </span>
                <span className="font-mono text-xs text-[#F97316] bg-[#F97316]/10 px-2 py-0.5 rounded-[2px] border border-[#F97316]/20">
                  10+ Hours Reclaimed
                </span>
              </div>

              <h3 className="font-display text-xl md:text-2xl text-white font-normal tracking-tight mb-3">
                High-Leverage Mentorship
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                AI handles drafting, structuring, and preliminary synthesis. The educator remains the editorial director, quality validator, and personal mentor.
              </p>

              <div className="space-y-3">
                {augmentedTasks.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-[2px] bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between text-xs font-mono font-medium text-white mb-1">
                      <span>{item.task}</span>
                      <span className="text-[#F97316] font-bold">{item.time}</span>
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 font-mono text-xs text-[#F97316]">
              OUTCOME // Energized educators, deeper student relationships, and rigorous academic outcomes.
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

