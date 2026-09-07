export interface FeaturedProgram {
  id: string;
  number: string;
  audience: string;
  title: string;
  headline: string;
  description: string;
  topics: string[];
  ctaText: string;
  href: string;
  visualType: "students" | "educators" | "organizations";
  highlights: string[];
}

export const FEATURED_PROGRAMS: FeaturedProgram[] = [
  {
    id: "ai-for-students",
    number: "01",
    audience: "STUDENTS & ACADEMICS",
    title: "AI FOR STUDENTS",
    headline: "Build Practical Skills for an AI-Powered Future",
    description:
      "A comprehensive, hands-on introduction designed to help students move beyond simple chatbot queries into commanding generative tools, engineering multi-step prompt chains, conducting rigorous academic research, and building real-world software prototypes.",
    topics: [
      "Generative AI",
      "Prompt Engineering",
      "AI Productivity",
      "Research & Learning",
      "Building with AI",
      "Automation",
    ],
    ctaText: "Explore Student Programs →",
    href: "/students",
    visualType: "students",
    highlights: [
      "No coding background required to begin",
      "Capstone project portfolio piece",
      "Ethical AI usage & citation protocols",
    ],
  },
  {
    id: "ai-for-educators",
    number: "02",
    audience: "TEACHERS, FACULTY & LEADERS",
    title: "AI FOR EDUCATORS",
    headline: "Teach Smarter and Modernize Academic Workflows",
    description:
      "Designed specifically for primary, secondary, and higher-education educators seeking to integrate AI ethically and effectively into daily teaching, lesson planning, student assessment, and curriculum content creation without sacrificing pedagogical integrity.",
    topics: [
      "AI for Teaching",
      "Lesson Planning",
      "Educational Content",
      "AI-Assisted Assessment",
      "Productivity",
      "Responsible AI",
    ],
    ctaText: "Explore Educator Programs →",
    href: "/educators",
    visualType: "educators",
    highlights: [
      "50%+ reduction in lesson prep time",
      "Fair, transparent AI assessment rubrics",
      "Classroom policy & academic integrity playbooks",
    ],
  },
  {
    id: "ai-for-organizations",
    number: "03",
    audience: "COMPANIES & INSTITUTIONS",
    title: "AI FOR ORGANIZATIONS",
    headline: "Put AI to Work Across Departments at Scale",
    description:
      "Custom enterprise enablement programs engineered to turn fragmented employee experimentation into measurable organization-wide capability. Tailored around specific departmental workflows, internal data governance, and strategic business automation.",
    topics: [
      "AI Productivity",
      "Generative AI",
      "Workflow Automation",
      "AI Tools",
      "Department Applications",
      "Responsible AI",
      "AI Adoption",
    ],
    ctaText: "Explore Corporate Programs →",
    href: "/organizations",
    visualType: "organizations",
    highlights: [
      "Custom departmental workflow audits",
      "Data privacy & enterprise security guardrails",
      "Measurable operational ROI benchmarks",
    ],
  },
];
