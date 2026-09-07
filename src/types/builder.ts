export type BuilderAudience =
  | "Students"
  | "Educators"
  | "Corporate Team"
  | "Institution";

export type BuilderObjective =
  | "AI Awareness"
  | "AI Productivity"
  | "AI Tools"
  | "Prompt Engineering"
  | "Workflow Automation"
  | "Building with AI";

export type BuilderCohortSize = "1–20" | "20–50" | "50–200" | "200+";

export type BuilderFormat =
  | "Workshop"
  | "Bootcamp"
  | "Corporate Program"
  | "Custom Program";

export interface BuilderContact {
  name: string;
  organization: string;
  email: string;
  phone: string;
  additionalRequirements: string;
}

export interface TrainingBuilderData {
  audience: string;
  objectives: string[];
  cohortSize: string;
  format: string;
  contact: BuilderContact;
}
