export type ProjectCategory = 'all' | 'robotics-ai' | 'hardware-sensing' | 'space-biomechanics' | 'civil-materials';

export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  institutionOrOrg: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  keyContributions: string[];
  metrics: ProjectMetric[];
  technologies: string[];
  publicationRef?: string;
  interactiveDemoType?: 'semg' | 'exoskeleton' | 'ppg';
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
  }[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  modules: string[];
  keyProjects: string[];
  badge?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location?: string;
  responsibilities: string[];
  skillsApplied: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  volume: string;
  issue: string;
  year: number;
  pages: string;
  abstract: string;
  keyFinding: string;
  tags: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  focus: string;
}

export interface ExtracurricularItem {
  title: string;
  role: string;
  category?: 'mentorship' | 'humanitarian' | 'science' | 'literature';
  description: string;
  impact?: string;
}

export interface PersonalStoryChapter {
  id: string;
  title: string;
  tagline: string;
  narrative: string;
  quote?: string;
}

