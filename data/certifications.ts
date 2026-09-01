export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  status: "Completed" | "In Progress";
  credentialUrl?: string;
  image?: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    name: "Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy — ENSA",
    status: "Completed",
    skills: ["Enterprise networking", "Security", "Automation"],
  },
  {
    name: "Google Professional Cybersecurity Certificate",
    issuer: "Google",
    status: "Completed",
    skills: ["Security operations", "Linux", "Python", "Incident response"],
  },
];
