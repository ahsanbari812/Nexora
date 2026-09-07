export interface CatalogProgram {
  id: string;
  title: string;
  audience: "Students" | "Educators" | "Corporate Teams" | "Institutions";
  audienceId: "students" | "educators" | "corporate" | "institutions";
  format: string;
  formatId: "workshops" | "bootcamps" | "corporate" | "custom";
  duration: string;
  description: string;
  keyTopics: string[];
  deliverable: string;
  targetAudience: string;
  ctaText: string;
  href: string;
  featured?: boolean;
}

export const CATALOG_PROGRAMS: CatalogProgram[] = [
  // STUDENTS TRACK
  {
    id: "student-applied-ai-bootcamp",
    title: "Applied AI & Prompt Engineering Bootcamp",
    audience: "Students",
    audienceId: "students",
    format: "Bootcamp",
    formatId: "bootcamps",
    duration: "4-Week Cohort",
    description:
      "Master prompt engineering, generative research synthesis, and rapid prototyping to accelerate academic achievement and build functional project portfolios.",
    keyTopics: [
      "Prompt Engineering Chains",
      "Academic Research Synthesis",
      "Workflow Automation",
      "No-Code AI Prototypes",
      "Ethics & Citation Protocol",
    ],
    deliverable: "Working Capstone AI Project & Verified Portfolio",
    targetAudience: "Undergraduate & Graduate Students",
    ctaText: "Explore Student Track",
    href: "/students",
    featured: true,
  },
  {
    id: "student-prototyping-sprint",
    title: "AI-Powered Prototyping & Problem Solving",
    audience: "Students",
    audienceId: "students",
    format: "Workshop",
    formatId: "workshops",
    duration: "1-Day Intensive",
    description:
      "A hands-on build sprint where students conceptualize, wireframe, and deploy a functioning AI-assisted application or knowledge bot without complex coding overhead.",
    keyTopics: [
      "Generative APIs & SDKs",
      "Custom Knowledge Assistants",
      "Rapid UI Wireframing",
      "Demo Day Presentation",
    ],
    deliverable: "Deployed Functional Assistant & Source Repository",
    targetAudience: "STEM, Business & Design Students",
    ctaText: "View Workshop Details",
    href: "/students",
  },
  {
    id: "student-research-synthesis",
    title: "Academic Research & Literature Synthesis",
    audience: "Students",
    audienceId: "students",
    format: "Workshop",
    formatId: "workshops",
    duration: "2-Day Intensive",
    description:
      "Learn to deploy AI literature review assistants, synthesize complex scientific papers, extract structured datasets, and streamline thesis writing responsibly.",
    keyTopics: [
      "Paper Synthesis & Mapping",
      "Data Extraction Pipelines",
      "Citation Verification",
      "Academic Integrity Protocols",
    ],
    deliverable: "Automated Literature Review & Citation Pipeline",
    targetAudience: "Masters, PhD & Research Scholars",
    ctaText: "Explore Syllabus",
    href: "/students",
  },

  // EDUCATORS TRACK
  {
    id: "educator-curriculum-modernization",
    title: "AI-Assisted Pedagogy & Curriculum Modernization",
    audience: "Educators",
    audienceId: "educators",
    format: "Workshop",
    formatId: "workshops",
    duration: "2-Day Intensive",
    description:
      "Empower faculty to reclaim significant preparation time by integrating AI into lesson architecture, lecture materials, and multi-modal instructional content.",
    keyTopics: [
      "AI Lesson Architecture",
      "Pedagogical Prompting",
      "Interactive Teaching Tools",
      "Responsible Classroom AI",
    ],
    deliverable: "AI-Enhanced Course Module & Lesson Blueprints",
    targetAudience: "K-12 & Higher-Ed Faculty",
    ctaText: "Explore Educator Track",
    href: "/educators",
    featured: true,
  },
  {
    id: "educator-assessment-rubrics",
    title: "AI-Driven Assessment & Dynamic Rubrics",
    audience: "Educators",
    audienceId: "educators",
    format: "Bootcamp",
    formatId: "bootcamps",
    duration: "3-Week Practice Lab",
    description:
      "Learn to design nuanced, cheat-resistant assessment rubrics, formative feedback mechanisms, and automated personalized evaluation workflows.",
    keyTopics: [
      "Rubric Engineering",
      "Formative Feedback Loops",
      "Plagiarism & AI Realities",
      "Student Support Systems",
    ],
    deliverable: "Dynamic Rubric Generator & Evaluation Framework",
    targetAudience: "Department Heads & Course Instructors",
    ctaText: "View Lab Details",
    href: "/educators",
  },
  {
    id: "educator-institutional-literacy",
    title: "Faculty AI Literacy & Policy Implementation",
    audience: "Educators",
    audienceId: "educators",
    format: "Custom Program",
    formatId: "custom",
    duration: "Custom Timeline",
    description:
      "Department-wide faculty enablement program establishing shared AI fluency, evaluating generative tools, and formulating actionable classroom policy.",
    keyTopics: [
      "Faculty AI Fluency",
      "Institutional Guidelines",
      "Student AI Literacy",
      "Departmental Alignment",
    ],
    deliverable: "Departmental AI Policy & Teaching Handbook",
    targetAudience: "Academic Deans & Teaching Centers",
    ctaText: "Inquire for Faculty",
    href: "/educators",
  },

  // CORPORATE TEAMS TRACK
  {
    id: "corporate-productivity-automation",
    title: "Enterprise AI Productivity & Department Automation",
    audience: "Corporate Teams",
    audienceId: "corporate",
    format: "Corporate Program",
    formatId: "corporate",
    duration: "Multi-Week Track",
    description:
      "Transform fragmented employee experiments into standardized, high-leverage workflows across marketing, operations, sales, and internal analysis.",
    keyTopics: [
      "Department Workflow Audits",
      "Autonomous Pipelines",
      "Enterprise Prompt Chains",
      "Data Governance & Privacy",
    ],
    deliverable: "Enterprise Departmental AI Playbook & Automation Bots",
    targetAudience: "Operations, Marketing & Product Teams",
    ctaText: "Explore Corporate Track",
    href: "/organizations",
    featured: true,
  },
  {
    id: "corporate-automation-sprint",
    title: "Operational Process Automation Sprint",
    audience: "Corporate Teams",
    audienceId: "corporate",
    format: "Workshop",
    formatId: "workshops",
    duration: "2-Day Executive Workshop",
    description:
      "An intensive sprint for business units to identify repetitive operational bottlenecks and build deployed, functioning automated AI workflows.",
    keyTopics: [
      "Process Mapping",
      "Autonomous Workflow Triggers",
      "Quality Assurance & Human-in-Loop",
      "Productivity Benchmarks",
    ],
    deliverable: "Deployed Automated Workflow System & SOPs",
    targetAudience: "Business Units & Operations Managers",
    ctaText: "View Workshop Agenda",
    href: "/organizations",
  },
  {
    id: "corporate-marketing-content-accelerator",
    title: "Generative AI for Marketing & Content Teams",
    audience: "Corporate Teams",
    audienceId: "corporate",
    format: "Corporate Program",
    formatId: "corporate",
    duration: "3-Week Cohort",
    description:
      "Standardize creative workflows, brand voice consistency, campaign generation, and structured customer persona analysis using cutting-edge models.",
    keyTopics: [
      "Brand Voice Prompt Tuning",
      "Campaign Ideation & Generation",
      "Asset Pipeline Automation",
      "Content Governance Protocols",
    ],
    deliverable: "Brand AI Prompt Vault & Creative Pipeline",
    targetAudience: "Marketing, Growth & Creative Teams",
    ctaText: "Discuss Team Training",
    href: "/organizations",
  },

  // INSTITUTIONS TRACK
  {
    id: "institution-campus-readiness",
    title: "Campus-Wide AI Readiness & Adoption Framework",
    audience: "Institutions",
    audienceId: "institutions",
    format: "Custom Program",
    formatId: "custom",
    duration: "Multi-Stage Rollout",
    description:
      "Strategic university-wide capability rollout covering faculty enablement, student readiness workshops, and institutional governance frameworks.",
    keyTopics: [
      "Institutional AI Governance",
      "Faculty Upskilling Modules",
      "Student Orientation Curriculum",
      "Academic Integrity Frameworks",
    ],
    deliverable: "Comprehensive Institutional AI Roadmap & Assets",
    targetAudience: "Universities, Colleges & School Networks",
    ctaText: "Explore Institutional Track",
    href: "/organizations",
    featured: true,
  },
  {
    id: "institution-workforce-upskilling",
    title: "Workforce AI Upskilling & Enterprise Transformation",
    audience: "Institutions",
    audienceId: "institutions",
    format: "Custom Program",
    formatId: "custom",
    duration: "Quarterly Cohort",
    description:
      "Large-scale workforce modernization program designed to transition multi-department teams into AI-augmented professionals with measurable benchmarks.",
    keyTopics: [
      "Cross-Functional AI Literacy",
      "Enterprise Security Safeguards",
      "Custom Internal Tool Adoption",
      "Executive Capability Reporting",
    ],
    deliverable: "Workforce Competency Matrix & ROI Audit",
    targetAudience: "Enterprise HR & Chief Learning Officers",
    ctaText: "Request Proposal",
    href: "/organizations",
  },
  {
    id: "institution-executive-masterclass",
    title: "Executive AI Strategy & Governance Masterclass",
    audience: "Institutions",
    audienceId: "institutions",
    format: "Workshop",
    formatId: "workshops",
    duration: "1-Day Leadership Immersion",
    description:
      "Designed for academic deans, board members, and C-suite leaders to evaluate AI risk, budget allocation, compliance frameworks, and long-term organizational transformation.",
    keyTopics: [
      "Strategic AI Roadmap",
      "Risk & IP Governance",
      "Tool Procurement & ROI",
      "Change Management & Culture",
    ],
    deliverable: "Executive AI Governance Charter & Risk Audit",
    targetAudience: "C-Suite, Provosts & Board Directors",
    ctaText: "Inquire About Masterclass",
    href: "/contact",
  },
];
