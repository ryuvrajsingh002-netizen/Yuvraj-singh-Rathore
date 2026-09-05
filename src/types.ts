export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  liveUrl: string;
  image: string;
  technologies: string[];
  highlights: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface WhyItem {
  number: string;
  title: string;
  description: string;
}

export interface ToolItem {
  name: string;
  category: string;
  purpose: string;
  iconName: string;
}
