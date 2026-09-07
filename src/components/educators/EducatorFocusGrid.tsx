import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FocusArea {
  id: string;
  pillarNumber: string;
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  deliverable: string;
}

export function EducatorFocusGrid() {
  const areas: FocusArea[] = [
    {
      id: "ai-for-teaching",
      pillarNumber: "01",
      title: "AI for Teaching",
      tagline: "Active Facilitation & Scaffolding",
      description:
        "Deploy generative models to architect live Socratic inquiries, generate contrasting perspectives for class debate, and offer multi-tiered conceptual explanations that accommodate diverse student learning paces.",
      outcomes: [
        "Socratic questioning prompts for classroom debate",
        "Adaptive conceptual analogies for difficult topics",
        "Interactive scenario-based student exercises",
      ],
      deliverable: "Active Learning Facilitator Prompt Vault",
    },
    {
      id: "lesson-planning",
      pillarNumber: "02",
      title: "Lesson Planning",
      tagline: "Curriculum Architecture",
      description:
        "Draft comprehensive, multi-week course outlines, pacing schedules, and differentiated lesson plans in minutes, rigorously aligned with state, national, or university accreditation standards.",
      outcomes: [
        "Multi-tiered lesson blueprints for mixed abilities",
        "Curriculum alignment to institutional standards",
        "Interdisciplinary project-based learning units",
      ],
      deliverable: "Differentiated Unit & Lesson Planning Matrix",
    },
    {
      id: "educational-content",
      pillarNumber: "03",
      title: "Educational Content",
      tagline: "Practice Sets & Case Studies",
      description:
        "Generate rigorous, contextualized practice problem sets, multi-perspective case studies, reading comprehension passages with controlled lexile levels, and detailed answer rationales.",
      outcomes: [
        "Contextualized problem sets with solution keys",
        "Industry & historical case study generators",
        "Multi-modal lecture slide & visual outlines",
      ],
      deliverable: "Custom Course Materials & Exercise Generator",
    },
    {
      id: "assessment",
      pillarNumber: "04",
      title: "Assessment",
      tagline: "Authentic Evaluation & Rubrics",
      description:
        "Move away from easily bypassed static tests toward authentic, process-oriented assessment. Construct nuanced multi-dimensional rubrics, formative feedback loops, and oral defense guides.",
      outcomes: [
        "Cheat-resistant authentic assessment design",
        "Multi-dimensional analytical rubric generation",
        "Personalized formative feedback draft systems",
      ],
      deliverable: "Dynamic Assessment & Rubric Framework",
    },
    {
      id: "productivity",
      pillarNumber: "05",
      title: "Productivity",
      tagline: "Reclaiming Time for Mentorship",
      description:
        "Automate time-consuming administrative burdens—email correspondence, syllabus formatting, meeting minutes, and draft feedback—reclaiming 10 to 15 hours every week for direct student mentorship.",
      outcomes: [
        "Formative feedback drafting at scale",
        "Administrative correspondence templates",
        "Automated grading summary analytics",
      ],
      deliverable: "Educator Time-Reclaim Workflow Protocol",
    },
    {
      id: "responsible-ai",
      pillarNumber: "06",
      title: "Responsible AI",
      tagline: "Ethics & Student Data Privacy",
      description:
        "Navigate the limits of unreliable AI detectors, establish transparent student citation protocols, adhere strictly to FERPA and GDPR data privacy standards, and draft enforceable syllabus policies.",
      outcomes: [
        "Classroom AI syllabus policy clauses (Tiered)",
        "Detector limitation awareness & protocol",
        "Student data privacy & FERPA compliance checklists",
      ],
      deliverable: "Institutional Academic AI Policy Handbook",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#CBD5E1]">
      <SectionContainer>
        <SectionHeading
          sectionNumber="01 // CORE COMPETENCY AREAS"
          eyebrow="Core Competency Areas"
          eyebrowBadge
          title="6 Practical Pillars of Modern"
          titleHighlight="AI Pedagogy"
          description="Our educator curriculum is co-designed with instructional leaders. We focus strictly on classroom-tested methodologies that elevate teaching effectiveness while upholding the highest academic standards."
          align="left"
        />

        {/* 6 Pillars Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#CBD5E1] border border-[#CBD5E1] rounded-[4px] overflow-hidden">
          {areas.map((area) => (
            <div
              key={area.id}
              className="group relative flex flex-col justify-between p-8 md:p-9 bg-white hover:bg-[#F8FAFC] transition-colors"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="font-mono text-xs font-semibold text-[#F97316] tracking-widest">
                    PILLAR // {area.pillarNumber}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
                    {area.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-normal font-display text-[#071A2D] tracking-tight group-hover:text-[#F97316] transition-colors">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                  {area.description}
                </p>

                {/* Key Outcomes */}
                <div className="mt-5 pt-4 border-t border-[#F1F5F9] space-y-2">
                  {area.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#64748B]">
                      <span className="text-[#F97316] font-bold shrink-0">·</span>
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Deliverable Tag */}
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center gap-2 font-mono text-xs">
                <span className="text-[#94A3B8]">DELIVERABLE:</span>
                <span className="text-[#071A2D] font-medium">{area.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

