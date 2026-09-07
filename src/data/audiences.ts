import { AudienceItem } from "@/types";

export const AUDIENCES_DATA: AudienceItem[] = [
  {
    id: "students",
    title: "Students",
    subtitle: "Build skills for the AI-powered future.",
    description:
      "Move beyond simply using AI chatbots for homework shortcuts. Learn to command generative tools, engineer reliable prompt chains, conduct high-velocity research, and build real digital projects.",
    keyMessage:
      "Move beyond simply using AI. Learn how to use it effectively, responsibly, and creatively.",
    topics: [
      "Generative AI",
      "AI Tools",
      "Prompt Engineering",
      "AI-Assisted Learning",
      "AI Productivity",
      "Research with AI",
      "Building with AI",
      "Automation Basics",
      "Practical Technology Skills",
    ],
    ctaText: "Explore Student Programs",
    href: "/students",
    icon: "GraduationCap",
  },
  {
    id: "educators",
    title: "Educators",
    subtitle: "Teach with modern technology.",
    description:
      "Understand where AI fits into teaching, lesson planning, student assessment, and academic workflows without sacrificing pedagogical integrity.",
    keyMessage:
      "Understand where AI fits into teaching, learning, and academic workflows.",
    topics: [
      "AI for Education",
      "AI-Assisted Lesson Planning",
      "AI Teaching Tools",
      "Productivity Workflows",
      "Responsible AI",
      "AI-Assisted Assessment",
      "Educational Content Creation",
      "AI Adoption in Education",
    ],
    ctaText: "Explore Educator Programs",
    href: "/educators",
    icon: "BookOpen",
  },
  {
    id: "corporate",
    title: "Corporate Teams",
    subtitle: "Put AI to work across your organization.",
    description:
      "Identify high-ROI opportunities where AI eliminates repetitive manual tasks, supercharges research, and streamlines cross-departmental operations.",
    keyMessage:
      "Identify practical opportunities where AI can create value across the organization.",
    topics: [
      "Generative AI",
      "AI Productivity",
      "AI Tools for Teams",
      "Workflow Automation",
      "Prompt Engineering",
      "AI-Assisted Research",
      "Department-Specific AI",
      "Responsible AI",
      "AI Adoption",
    ],
    ctaText: "Explore Corporate Programs",
    href: "/organizations",
    icon: "Users",
  },
  {
    id: "institutions",
    title: "Institutions & Organizations",
    subtitle: "Build AI capability at scale.",
    description:
      "Custom multi-cohort training programs, faculty upskilling, and enterprise enablement designed around specific curricula, governance frameworks, and institutional objectives.",
    keyMessage:
      "Structured training programs designed around specific institutional needs.",
    topics: [
      "Institutional AI Workshops",
      "Faculty Training",
      "Workforce Upskilling",
      "AI Awareness Programs",
      "AI Adoption Programs",
      "Custom Curriculum",
      "Organization-Specific Workshops",
      "AI Policy & Responsible Usage",
    ],
    ctaText: "Explore Institutional Programs",
    href: "/organizations",
    icon: "Building2",
  },
];
