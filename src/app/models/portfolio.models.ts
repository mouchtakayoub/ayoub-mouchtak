export interface Project {
  id: string;
  title: string;
  tagline: string;
  client: string;
  category: 'healthcare' | 'fitness' | 'legal' | 'hospitality';
  categoryLabel: string;
  primaryImage: string;
  secondaryImage?: string;
  badge: string;
  themeColor: string;
  accentColor: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architectureNotes: string;
  verifiedOutcome: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    badge?: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  deliverables: string[];
  techUsed: string[];
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
}
