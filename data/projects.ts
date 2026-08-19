import type { Project, ProjectCategory, ProjectStatus } from "@/types/project";

const detailedProjects: Project[] = [
  {
    title: "MCP Tool Security Inspector",
    slug: "mcp-tool-security-inspector",
    summary: "Inspects MCP tool metadata and schemas for suspicious characteristics and unexpected changes.",
    description:
      "A research prototype exploring lightweight ways to surface potentially unsafe instructions or schema changes inside Model Context Protocol tool definitions.",
    category: ["AI Security", "Cybersecurity", "Research"],
    technologies: ["Python", "MCP", "JSON-RPC", "SHA-256", "Regex"],
    status: "Research Prototype",
    featured: true,
    problem:
      "MCP clients may trust tool metadata that contains suspicious or manipulative instructions. Subtle metadata changes can be difficult to notice during development.",
    solution:
      "Parse tool definitions, inspect descriptions and parameter schemas with weighted rules, hash schemas, and produce a readable inspection report.",
    features: [
      "Tool metadata parser",
      "Weighted suspicious-text rules",
      "Severity classification",
      "Schema hashing",
      "Inspection reports",
    ],
    architecture: ["MCP tool definition", "Parser & normaliser", "Rules + hash checks", "Findings report"],
    concepts: ["Tool poisoning", "Prompt injection", "JSON-RPC", "Schema integrity", "Defensive logging"],
    lessons: [
      "MCP metadata structures",
      "Rule design trade-offs",
      "False-positive analysis",
      "Cryptographic change detection",
    ],
    challenges: [
      "Separating suspicious instructions from legitimate tool descriptions",
      "Designing explainable scores instead of opaque classifications",
    ],
    future: [
      "Build a labelled evaluation dataset",
      "Add configuration profiles",
      "Compare rules with lightweight classifiers",
    ],
    whyItMatters:
      "Tool descriptions can influence how AI systems use external capabilities. Making those descriptions inspectable supports safer experimentation.",
  },
  {
    title: "Prompt Injection Detector",
    slug: "prompt-injection-detector",
    summary: "Rule-based analysis for suspicious instruction patterns, overrides, and hidden intent.",
    description:
      "An in-progress defensive tool that scores text using transparent keyword, regex, and contextual rules rather than presenting an unverified black-box claim.",
    category: ["AI Security", "Cybersecurity", "Research"],
    technologies: ["Python", "Regex", "JSON", "Pytest"],
    status: "In Progress",
    featured: true,
    problem:
      "Suspicious instructions can be embedded in otherwise ordinary-looking text, while simple keyword matching can generate many false alarms.",
    solution:
      "Combine explainable weighted patterns with severity levels and return the exact evidence behind each finding.",
    features: ["Pattern library", "Weighted scoring", "Severity labels", "Evidence trace", "Evaluation metrics"],
    architecture: ["Input text", "Normalisation", "Rule engine", "Score + evidence"],
    concepts: ["Prompt injection", "Heuristic detection", "Precision and recall", "False positives"],
    lessons: ["Regex rule design", "Evaluation metrics", "Explainable detections"],
    future: ["Expand test corpus", "Add encoding-aware checks", "Benchmark response time"],
    whyItMatters: "Transparent detection rules make early AI security experiments easier to audit and improve.",
  },
  {
    title: "Subnet & VLSM Calculator",
    slug: "subnet-vlsm-calculator",
    summary: "Plans IPv4 subnets and VLSM allocations with clear network and host ranges.",
    description: "A networking utility for turning CIDR requirements and host counts into an auditable subnet plan.",
    category: ["Networking", "Software"],
    technologies: ["Python", "IPv4", "CIDR", "VLSM"],
    status: "In Progress",
    featured: true,
    problem: "Manual VLSM planning is error-prone when several networks have different host requirements.",
    solution:
      "Sort requirements by size, calculate the smallest valid prefix, and allocate non-overlapping ranges with validation.",
    features: [
      "CIDR parsing",
      "VLSM allocation",
      "Network/broadcast ranges",
      "Usable-host summary",
      "Input validation",
    ],
    architecture: ["Network requirement", "CIDR validator", "Allocation engine", "Subnet plan"],
    concepts: ["Subnetting", "CIDR", "VLSM", "IPv4 addressing"],
    lessons: ["Binary address calculation", "Subnet planning", "Defensive input handling"],
    future: ["IPv6 planning", "CSV export", "Topology-friendly visual output"],
    whyItMatters: "Reliable address planning is foundational to scalable, maintainable networks.",
  },
  {
    title: "Port Scanner",
    slug: "port-scanner",
    summary: "A permission-aware TCP scanning tool focused on safe inputs and readable results.",
    description:
      "A practical socket-programming project for learning how services are exposed on a host and how scan results should be handled responsibly.",
    category: ["Cybersecurity", "Networking", "Software"],
    technologies: ["Python", "TCP", "Sockets", "FastAPI"],
    status: "Completed",
    featured: true,
    problem:
      "Learning network reconnaissance requires clear scope controls, correct socket behaviour, and results that do not overstate what a port response means.",
    solution:
      "Validate targets and port ranges, require an authorisation acknowledgement, scan with bounded concurrency, and report open/closed outcomes clearly.",
    features: [
      "Target validation",
      "Authorisation guard",
      "TCP connect scan",
      "Bounded concurrency",
      "Exportable results",
    ],
    architecture: ["Validated target", "Scan coordinator", "Socket workers", "Result normaliser", "Web / CLI output"],
    concepts: ["TCP/IP", "Socket programming", "Port states", "Responsible scanning", "Input validation"],
    lessons: ["Network socket programming", "Timeout handling", "Concurrency limits", "Security-focused UX"],
    challenges: ["Balancing scan speed with resource limits", "Handling timeouts without mislabelling hosts"],
    future: ["Add richer service fingerprint notes", "Expand accessibility checks", "Create signed release builds"],
    whyItMatters:
      "Understanding exposed services is a basic defensive inventory task—when scanning is authorised and results are interpreted carefully.",
  },
  {
    title: "Mini SIEM Dashboard",
    slug: "mini-siem-dashboard",
    summary: "A planned dashboard for normalising logs, applying simple detections, and reviewing alerts.",
    description:
      "A learning project designed to connect security logging, rule-based detection, and analyst-friendly investigation views.",
    category: ["Cybersecurity", "Software"],
    technologies: ["Python", "FastAPI", "React", "JSON"],
    status: "Planned",
    featured: true,
    problem: "Raw logs are difficult to investigate without normalisation, filtering, and context.",
    solution:
      "Create a small ingestion pipeline, common event schema, transparent rules, and a focused review dashboard.",
    features: ["Log ingestion", "Event normalisation", "Rule-based alerts", "Search and filtering", "Alert timeline"],
    architecture: ["Log sources", "Normaliser", "Detection rules", "Event store", "Dashboard"],
    concepts: ["SIEM", "Security logging", "Detection engineering", "Incident triage"],
    lessons: ["Planned: log schemas", "Planned: alert design", "Planned: investigation workflows"],
    whyItMatters: "A small SIEM connects individual security concepts into an end-to-end defensive workflow.",
  },
  {
    title: "PCAP Packet Analyzer",
    slug: "pcap-packet-analyzer",
    summary: "A planned packet-analysis tool for protocol summaries, conversations, and anomalies.",
    description:
      "A networking and defensive-security project intended to turn packet captures into focused, explainable observations.",
    category: ["Networking", "Cybersecurity"],
    technologies: ["Python", "PCAP", "Wireshark", "TCP/IP"],
    status: "Planned",
    featured: true,
    features: ["Protocol distribution", "Conversation summary", "Top endpoints", "Suspicious pattern notes"],
    concepts: ["Packet structures", "TCP/IP", "Traffic analysis"],
    lessons: ["Planned: packet parsing", "Planned: protocol analysis"],
  },
  {
    title: "Suspicious Text Rule Engine",
    slug: "suspicious-text-rule-engine",
    summary: "Weighted heuristic rules for suspicious instructions with explainable severity.",
    description: "A reusable detection component supporting the MCP security research direction.",
    category: ["AI Security", "Research"],
    technologies: ["Python", "Regex", "YAML"],
    status: "Research Prototype",
    featured: false,
    features: ["Keyword rules", "Regex rules", "Weights", "Severity classification"],
    concepts: ["Heuristic detection", "Explainability", "False positives"],
  },
  {
    title: "Schema Hash Monitor",
    slug: "schema-hash-monitor",
    summary: "Detects unexpected MCP tool schema changes with cryptographic fingerprints.",
    description:
      "A focused research utility for normalising tool schemas, hashing them, and reporting changes between trusted snapshots.",
    category: ["AI Security", "Research", "Cybersecurity"],
    technologies: ["Python", "SHA-256", "JSON Schema"],
    status: "In Progress",
    featured: false,
    concepts: ["Integrity monitoring", "Schema normalisation", "Cryptographic hashing"],
  },
  {
    title: "Detection Metrics Calculator",
    slug: "detection-metrics-calculator",
    summary: "Calculates accuracy, precision, recall, F1, false-positive rate, and response time.",
    description: "An evaluation helper for comparing transparent detection rules against labelled examples.",
    category: ["AI Security", "Research", "Software"],
    technologies: ["Python", "Statistics", "CSV"],
    status: "In Progress",
    featured: false,
    features: ["Confusion matrix", "Precision and recall", "F1 score", "False-positive rate", "Latency summary"],
  },
  {
    title: "MCP Learning Server",
    slug: "mcp-learning-server",
    summary: "A safe local MCP server for protocol learning and controlled security experiments.",
    description:
      "A deliberately small local environment for understanding MCP tools, resources, schemas, and JSON-RPC behaviour.",
    category: ["AI Security", "Research", "Software"],
    technologies: ["Python", "MCP", "JSON-RPC"],
    status: "In Progress",
    featured: false,
    concepts: ["MCP primitives", "Tool schemas", "Local experimentation"],
  },
];

type RoadmapSeed = [title: string, category: ProjectCategory[], technologies: string[], status?: ProjectStatus];

const roadmapSeeds: RoadmapSeed[] = [
  ["Password Strength Analyzer", ["Cybersecurity", "Software"], ["Python", "Entropy"]],
  ["Hash Generator & File Verifier", ["Cybersecurity", "Software"], ["Python", "SHA-256"]],
  ["File Integrity Monitor", ["Cybersecurity"], ["Python", "Hashing", "Logging"]],
  ["URL Security Checker", ["Cybersecurity", "Software"], ["Python", "HTTP", "DNS"]],
  ["Packet Sniffer", ["Networking", "Cybersecurity"], ["Python", "TCP/IP"]],
  ["Security Log Analyzer", ["Cybersecurity"], ["Python", "Regex", "Logs"]],
  ["Basic Vulnerability Scanner", ["Cybersecurity"], ["Python", "HTTP", "Nmap"]],
  ["Malware Hash Lookup Tool", ["Cybersecurity"], ["Python", "REST API", "SHA-256"]],
  ["Indicator of Compromise Scanner", ["Cybersecurity"], ["Python", "IOC", "YARA"]],
  ["Network Mapper", ["Networking", "Cybersecurity"], ["Python", "ICMP", "ARP"]],
  ["DHCP Process Visualizer", ["Networking", "Software"], ["React", "DHCP"]],
  ["Network Asset Inventory Tool", ["Networking", "Cybersecurity"], ["Python", "SQLite"]],
  ["USB Device History Viewer", ["Cybersecurity"], ["Python", "Windows Registry"]],
  ["Browser History Analyzer", ["Cybersecurity"], ["Python", "SQLite", "Forensics"]],
  ["Digital Forensics Timeline Generator", ["Cybersecurity"], ["Python", "Forensics", "CSV"]],
  ["SSH Brute-Force Detector", ["Cybersecurity"], ["Python", "SSH", "Logs"]],
  ["Threat Intelligence Feed Collector", ["Cybersecurity"], ["Python", "REST API", "STIX"]],
  ["Sigma Rule Testing Tool", ["Cybersecurity"], ["Python", "Sigma", "YAML"]],
  ["Phishing Email Detector", ["Cybersecurity"], ["Python", "Email", "Regex"]],
  ["Cybersecurity Terminal Simulator", ["Cybersecurity", "Software"], ["TypeScript", "React"]],
  ["System & Network Monitoring Dashboard", ["Networking", "Software"], ["Python", "React", "Metrics"]],
  ["Packet Flow Visualizer", ["Networking", "Software"], ["TypeScript", "TCP/IP"]],
  ["Windows Security Audit Tool", ["Cybersecurity"], ["PowerShell", "Windows"]],
  ["Linux Security Audit Tool", ["Cybersecurity"], ["Bash", "Linux"]],
  ["HTTP Security Header Scanner", ["Cybersecurity", "Software"], ["Python", "HTTP"]],
  ["SSL/TLS Certificate Analyzer", ["Cybersecurity", "Networking"], ["Python", "TLS", "X.509"]],
  ["DNS Investigation Tool", ["Networking", "Cybersecurity"], ["Python", "DNS"]],
  ["IP Reputation Checker", ["Cybersecurity", "Networking"], ["Python", "REST API"]],
  ["Firewall Log Analyzer", ["Cybersecurity", "Networking"], ["Python", "Firewall Logs"]],
  ["Password Breach Checker", ["Cybersecurity"], ["Python", "k-Anonymity", "API"]],
  ["Secure File Encryption Tool", ["Cybersecurity", "Software"], ["Python", "Cryptography"]],
  ["Secure Password Manager", ["Cybersecurity", "Software"], ["Python", "Encryption"]],
  ["Web Directory Discovery Tool", ["Cybersecurity"], ["Python", "HTTP"]],
  ["Login Anomaly Detector", ["Cybersecurity"], ["Python", "Statistics", "Logs"]],
  ["Ransomware Behaviour Simulator", ["Cybersecurity", "Research"], ["Python", "Sandboxing"]],
  ["Honeypot Login Server", ["Cybersecurity", "Networking"], ["Python", "TCP", "Logging"]],
  ["Fake Phishing Campaign Simulator", ["Cybersecurity"], ["TypeScript", "Training"]],
  ["Incident Response Report Generator", ["Cybersecurity", "Software"], ["Python", "Reporting"]],
  ["Cybersecurity Quiz Application", ["Cybersecurity", "Software"], ["TypeScript", "React"]],
  ["CVE Search Dashboard", ["Cybersecurity", "Software"], ["React", "REST API", "CVE"]],
  ["CISA KEV Tracking Tool", ["Cybersecurity"], ["Python", "CISA KEV", "API"]],
  ["Security Configuration Baseline Checker", ["Cybersecurity"], ["Python", "CIS Benchmarks"]],
  ["Docker Container Security Scanner", ["Cybersecurity", "Software"], ["Docker", "Python", "SBOM"]],
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const roadmapProjects: Project[] = roadmapSeeds.map(([title, category, technologies, status = "Planned"]) => ({
  title,
  slug: slugify(title),
  summary: `A ${status === "Planned" ? "planned" : "practical"} learning project focused on ${category.map((item) => item.toLowerCase()).join(" and ")}.`,
  description: `${title} is part of Afiq's security and networking project roadmap. Scope and implementation details will be documented as development progresses.`,
  category,
  technologies,
  status,
  featured: false,
  concepts: technologies,
  lessons: status === "Planned" ? technologies.map((item) => `Planned: ${item}`) : technologies,
}));

const universityProjects: Project[] = [
  [
    "PPTX2PDF",
    "Java desktop utility exploring presentation-to-PDF conversion and Windows packaging.",
    ["Java", "Maven", "Launch4j"],
  ],
  ["Digital Diary", "A JavaFX diary application developed as university software coursework.", ["Java", "JavaFX"]],
  [
    "Operation Cypher Nexus",
    "Algorithm and problem-solving project work completed in a university context.",
    ["Algorithms", "Data Structures"],
  ],
  [
    "DVWA Security Lab",
    "A controlled university lab for studying common web vulnerabilities and defensive observations.",
    ["DVWA", "Web Security", "Linux"],
  ],
  [
    "ASA Firewall Lab",
    "A networking laboratory focused on firewall rules, zones, and secure traffic flow.",
    ["Cisco ASA", "Firewall", "Networking"],
  ],
  [
    "Operating Systems Exercises",
    "Implementations covering Dining Philosophers, FIFO page replacement, and the Banker's Algorithm.",
    ["C", "Operating Systems", "Algorithms"],
  ],
].map(([title, summary, technologies]) => ({
  title: title as string,
  slug: slugify(title as string),
  summary: summary as string,
  description: summary as string,
  category: ["University"] as ProjectCategory[],
  technologies: technologies as string[],
  status: "Completed" as ProjectStatus,
  featured: false,
  concepts: technologies as string[],
}));

export const projects: Project[] = [...detailedProjects, ...roadmapProjects, ...universityProjects];

export const featuredProjects = projects.filter((project) => project.featured);
export const projectCategories = [
  "All",
  "Cybersecurity",
  "Networking",
  "AI Security",
  "Software",
  "University",
  "Research",
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
