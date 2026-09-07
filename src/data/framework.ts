export interface FrameworkStage {
  id: string;
  number: string;
  title: string;
  definition: string;
  keyQuestion: string;
  description: string;
  competencies: string[];
  practicalOutcome: string;
  iconName: string;
}

export const FRAMEWORK_STAGES: FrameworkStage[] = [
  {
    id: "understand",
    number: "01",
    title: "UNDERSTAND",
    definition: "What AI is and how it works.",
    keyQuestion: "How do large models reason, where do they fail, and what can they actually do?",
    description:
      "Demystify modern artificial intelligence beyond marketing hype. Learn the mechanics of foundation models, transformer architectures, token economics, context windows, and hallucination vectors so you can evaluate tools with confidence.",
    competencies: [
      "Foundations of LLMs & Generative AI",
      "Model Evaluation & Selection Criteria",
      "Context Windows & Reasoning Tokens",
      "Limitations, Biases & Hallucination Mitigation",
    ],
    practicalOutcome:
      "A rigorous mental model enabling you to spot real AI opportunities and avoid deceptive hype.",
    iconName: "Brain",
  },
  {
    id: "use",
    number: "02",
    title: "USE",
    definition: "How to effectively use modern AI tools.",
    keyQuestion: "How do we direct modern AI interfaces to produce high-accuracy, reliable outputs?",
    description:
      "Move from elementary conversational prompts to advanced cognitive workflows. Master multi-shot prompt engineering, persona framing, chain-of-thought protocols, multimodal synthesis, and live web research copilots.",
    competencies: [
      "Advanced Prompt Architecture & Framing",
      "Chain-of-Thought & Iterative Refinement",
      "Multimodal Assistants (Vision, Voice, Data)",
      "High-Velocity Research & Information Synthesis",
    ],
    practicalOutcome:
      "Immediate 3x to 5x individual productivity across research, writing, analysis, and problem-solving.",
    iconName: "Terminal",
  },
  {
    id: "automate",
    number: "03",
    title: "AUTOMATE",
    definition: "How AI can improve repetitive workflows.",
    keyQuestion: "How can AI eliminate friction from routine, time-consuming operations?",
    description:
      "Bridge single-prompt interactions into continuous automated workflows. Learn how to offload repetitive tasks, connect tools via structured outputs, process document batches, and execute multi-step automated sequences.",
    competencies: [
      "Task Decomposition & Workflow Mapping",
      "Document Batch Processing & Summarization",
      "Connecting AI with Productivity Suites",
      "Autonomous Agent Loops & Event Triggers",
    ],
    practicalOutcome:
      "Reclaiming 10+ hours per person every week by automating tedious, manual administrative drag.",
    iconName: "Zap",
  },
  {
    id: "build",
    number: "04",
    title: "BUILD",
    definition: "How to create useful solutions with AI.",
    keyQuestion: "How can we create custom AI tools tailored to our specific problems without heavy software overhead?",
    description:
      "Step into the role of an AI builder. Create bespoke internal GPT assistants, assemble domain-specific knowledge retrieval bases (RAG), and prototype interactive web applications using AI coding copilots.",
    competencies: [
      "Specialized Custom GPTs & Assistants",
      "Knowledge Base Grounding (RAG Concepts)",
      "Vibe Coding & Rapid Prototyping",
      "Structured Output Schemas & API Connectors",
    ],
    practicalOutcome:
      "Functional, domain-specific AI tools deployed for personal, classroom, or organizational use.",
    iconName: "Boxes",
  },
  {
    id: "apply",
    number: "05",
    title: "APPLY",
    definition: "How to integrate AI into real-world work and learning.",
    keyQuestion: "How do we scale AI capability across teams, curricula, and institutional policies responsibly?",
    description:
      "Embed AI permanently into academic and enterprise reality. Establish institutional ethics guidelines, design modernized rubrics, enforce data governance, and cultivate a culture of continuous adaptation.",
    competencies: [
      "Departmental Playbooks & Team Onboarding",
      "Pedagogical Integrity & Academic Policy",
      "Data Privacy, Security & Governance",
      "Continuous Adaptation & Capability Auditing",
    ],
    practicalOutcome:
      "Permanent, measurable institutional capability with strong governance and lasting competitive edge.",
    iconName: "Compass",
  },
];
