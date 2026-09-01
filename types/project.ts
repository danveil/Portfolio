export type ProjectStatus = "Completed" | "Active" | "Academic" | "Prototype" | "Archived" | "Planned" | "Hidden";

export type ProjectVisibility = "Public" | "Internal";

export type ProjectCategory = "Cybersecurity" | "Networking" | "AI Security" | "Software" | "University" | "Research";

export interface Project {
  title: string;
  slug: string;
  summary: string;
  description: string;
  category: ProjectCategory[];
  technologies: string[];
  status: ProjectStatus;
  visibility: ProjectVisibility;
  featured: boolean;
  github?: string;
  demo?: string;
  screenshots?: string[];
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string[];
  concepts?: string[];
  lessons?: string[];
  challenges?: string[];
  future?: string[];
  whyItMatters?: string;
}
