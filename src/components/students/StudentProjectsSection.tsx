import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  portfolioTakeaway: string;
}

export function StudentProjectsSection() {
  const projects: Project[] = [
    {
      number: "01",
      title: "Academic Research Synthesis Engine",
      category: "Research & Knowledge Retrieval",
      description:
        "An AI-powered knowledge assistant that indexes dozens of academic PDFs, extracts contrasting experimental findings into comparative tables, and cites specific page references.",
      techStack: ["Frontier LLMs", "Document Retrieval", "Structured JSON", "Markdown"],
      portfolioTakeaway: "Verified literature mapping tool you can use in thesis and coursework.",
    },
    {
      number: "02",
      title: "Automated Field Intelligence Pipeline",
      category: "Workflow Automation",
      description:
        "A webhook-driven scheduled pipeline that scrapes scientific pre-prints or market data, evaluates importance, and sends synthesized briefings to Slack or Notion automatically.",
      techStack: ["Webhooks", "Notion API", "Summarization Chains", "Scheduled Triggers"],
      portfolioTakeaway: "Deployed automation bot showing practical system integration.",
    },
    {
      number: "03",
      title: "Adaptive Socratic Exam Tutor",
      category: "Interactive Assistants",
      description:
        "A prompt-engineered conversational assistant that ingests lecture transcripts, asks targeted diagnostic questions, evaluates student answers, and guides understanding without revealing answers.",
      techStack: ["System Prompt Architecture", "Few-Shot Calibration", "Evaluation Rubrics"],
      portfolioTakeaway: "Interactive study tool showcasing advanced prompt engineering.",
    },
    {
      number: "04",
      title: "Specialized AI Mini-App Prototype",
      category: "Prototyping & Deployment",
      description:
        "A functioning web application that wraps a generative workflow in a clean interface, allowing non-technical classmates or team members to generate structured assets with one click.",
      techStack: ["Next.js / UI", "Generative APIs", "Environment Secrets", "Vercel"],
      portfolioTakeaway: "Live public URL and GitHub repository for your resume.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#CBD5E1]">
      <SectionContainer>
        <SectionHeading
          sectionNumber="03 // CAPSTONES"
          eyebrow="Capstone Showcase"
          eyebrowBadge
          title="What You Will Actually"
          titleHighlight="Build & Deploy"
          description="Every Nexora student bootcamp culminates in a functioning portfolio capstone. Instead of passive multiple-choice quizzes, you leave with demonstrable, public proof of capability."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#CBD5E1] border border-[#CBD5E1] rounded-[4px] overflow-hidden">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group relative flex flex-col justify-between p-8 md:p-10 bg-white hover:bg-[#F8FAFC] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="font-mono text-xs font-semibold text-[#F97316] tracking-widest">
                    PROJECT // {project.number}
                  </span>
                  <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-normal font-display text-[#071A2D] tracking-tight group-hover:text-[#F97316] transition-colors">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8] block mb-2.5">
                    Stack & Verification
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-[2px] font-mono text-xs bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between gap-3">
                <div className="font-mono text-xs text-[#071A2D]">
                  <span className="text-[#94A3B8] mr-2">DELIVERABLE:</span>
                  <span>{project.portfolioTakeaway}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#F97316] transition-colors shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

