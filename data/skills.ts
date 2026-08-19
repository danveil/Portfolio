export type SkillLevel = "Learning" | "Academic Experience" | "Project Experience" | "Comfortable";

export interface SkillGroup {
  title: string;
  code: string;
  level: SkillLevel;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: "Programming", code: "DEV-01", level: "Project Experience", items: ["Python", "Java", "C", "C++"] },
  {
    title: "Cybersecurity",
    code: "SEC-02",
    level: "Project Experience",
    items: [
      "Network Security",
      "Security Fundamentals",
      "Basic Vulnerability Assessment",
      "Hashing",
      "Security Logging",
      "Rule-Based Detection",
    ],
  },
  {
    title: "Networking",
    code: "NET-03",
    level: "Academic Experience",
    items: [
      "Subnetting",
      "VLSM",
      "Routing",
      "Switching",
      "VLAN",
      "DHCP",
      "Troubleshooting",
      "Basic Firewall Configuration",
    ],
  },
  {
    title: "AI Security Research",
    code: "AIR-04",
    level: "Learning",
    items: ["Prompt Injection Analysis", "MCP Security", "Tool Poisoning", "Schema Hashing", "Detection Metrics"],
  },
  {
    title: "Platforms & Labs",
    code: "LAB-05",
    level: "Project Experience",
    items: ["Cisco Packet Tracer", "GNS3", "Cisco Modeling Labs", "VMware", "Docker"],
  },
  {
    title: "Development Tools",
    code: "OPS-06",
    level: "Comfortable",
    items: ["Git", "GitHub", "REST APIs", "JSON", "JSON-RPC", "Wireshark", "Nmap"],
  },
];

export const currentlyLearning = [
  "AI Security",
  "Model Context Protocol Security",
  "Prompt Injection",
  "Network Security",
  "Security Automation",
  "Advanced Networking",
  "Digital Forensics",
  "Python for Security",
];
