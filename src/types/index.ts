export type AudienceType = 'students' | 'educators' | 'corporate' | 'institutions';

export type TrainingFormatType = 'workshops' | 'bootcamps' | 'corporate' | 'custom';

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface AudienceItem {
  id: AudienceType;
  title: string;
  subtitle: string;
  description: string;
  keyMessage: string;
  topics: string[];
  ctaText: string;
  href: string;
  icon: string;
}

export interface TrainingFormatItem {
  id: TrainingFormatType;
  title: string;
  tagline: string;
  description: string;
  idealFor: string[];
  features?: string[];
  ctaText: string;
  href: string;
  icon: string;
}

export interface CapabilityStepItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  action: string;
  outcomes?: string[];
}

export interface ProgramItem {
  id: string;
  title: string;
  category: AudienceType;
  categoryLabel: string;
  format: TrainingFormatType;
  formatLabel: string;
  description: string;
  topics: string[];
  idealFor: string;
  href: string;
  featured?: boolean;
}
