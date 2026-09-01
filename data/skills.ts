export type SkillLevel = "Project Work" | "Coursework & Labs" | "Active Research";

export interface SkillGroup {
  title: string;
  code: string;
  level: SkillLevel;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Cybersecurity",
    code: "SEC-01",
    level: "Project Work",
    items: ["Network security", "Static security analysis", "Security logging", "Rule-based detection"],
  },
  {
    title: "Networking",
    code: "NET-02",
    level: "Coursework & Labs",
    items: ["Subnetting", "VLSM", "Routing", "Switching", "VLANs", "DHCP", "Firewall configuration"],
  },
  {
    title: "Programming",
    code: "DEV-03",
    level: "Project Work",
    items: ["Python", "TypeScript", "Java", "C / C++"],
  },
  {
    title: "Web & Application Development",
    code: "APP-04",
    level: "Project Work",
    items: ["Next.js", "React", "Server Components", "Responsive interfaces", "PWA fundamentals"],
  },
  {
    title: "Databases",
    code: "DB-05",
    level: "Project Work",
    items: ["PostgreSQL", "Supabase", "Prisma ORM", "Relational data modelling"],
  },
  {
    title: "DevOps & Tooling",
    code: "OPS-06",
    level: "Project Work",
    items: ["Git", "GitHub", "Netlify", "CI workflows", "Cisco Packet Tracer", "Wireshark"],
  },
  {
    title: "Testing & Research",
    code: "RES-07",
    level: "Active Research",
    items: ["Pytest", "Vitest", "Ruff", "mypy", "Holdout evaluation", "Detection metrics"],
  },
];

export const currentlyLearning = [
  "MCP security",
  "Prompt-injection analysis",
  "Advanced networking",
  "Digital forensics",
];
