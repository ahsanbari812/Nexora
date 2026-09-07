import { TrainingFormatItem } from "@/types";

export const FORMATS_DATA: TrainingFormatItem[] = [
  {
    id: "workshops",
    title: "WORKSHOPS",
    tagline: "Short, focused sessions around specific AI and technology topics.",
    description:
      "High-density, interactive immersions designed for rapid skill injection. Participants move from theory directly into live prompting, workflow simulations, and ready-to-deploy tool configurations.",
    idealFor: ["Schools", "Universities", "Companies", "Events"],
    features: [
      "Half-day or full-day intensive sessions",
      "Hands-on guided walkthroughs & live exercises",
      "Ready-to-use prompt & template libraries",
    ],
    ctaText: "Explore Workshops",
    href: "/programs",
    icon: "Zap",
  },
  {
    id: "bootcamps",
    title: "BOOTCAMPS",
    tagline: "Structured multi-session programs designed to build practical AI skills.",
    description:
      "Deep cohort-based skill development spanning multiple weeks. Combines conceptual depth with weekly milestone projects, peer code/prompt reviews, and guided automation builds.",
    idealFor: ["Students", "Professionals", "Teams"],
    features: [
      "4 to 8-week structured cohort sprints",
      "Real-world capstone portfolio projects",
      "Direct instructor mentorship & office hours",
    ],
    ctaText: "Explore Bootcamps",
    href: "/programs",
    icon: "Layers",
  },
  {
    id: "corporate",
    title: "CORPORATE PROGRAMS",
    tagline: "Customized training designed around organizational workflows and business requirements.",
    description:
      "Operational enablement tailored to enterprise reality. Built around existing tech stacks, internal data security policies, and department-specific productivity bottlenecks.",
    idealFor: ["Companies", "Teams", "Organizations"],
    features: [
      "Pre-training workflow audit & capability baseline",
      "Custom internal SOPs & enterprise playbooks",
      "Department-specific tooling & governance",
    ],
    ctaText: "Discuss Corporate Training",
    href: "/organizations",
    icon: "Briefcase",
  },
  {
    id: "custom",
    title: "CUSTOM PROGRAMS",
    tagline: "Training designed around a specific audience, industry, curriculum, or learning objective.",
    description:
      "Bespoke curriculum co-development for institutions and specialized units requiring tailored accreditations, sector-specific case studies, or institutional AI adoption policies.",
    idealFor: ["Universities", "Institutions", "Specialized Teams"],
    features: [
      "Co-designed curriculum & learning outcomes",
      "Faculty train-the-trainer enablement",
      "Long-term capability auditing & roadmaps",
    ],
    ctaText: "Design Custom Program",
    href: "/contact",
    icon: "Sliders",
  },
];
