import {
  Activity,
  Binary,
  Braces,
  Container,
  FileSearch,
  Fingerprint,
  GlobeLock,
  KeyRound,
  Network,
  Radar,
  ScanSearch,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";
import type { Project } from "@/types/project";

const icons = [
  ShieldCheck,
  Network,
  Radar,
  ScanSearch,
  Binary,
  FileSearch,
  Fingerprint,
  GlobeLock,
  KeyRound,
  Activity,
  ServerCog,
  TerminalSquare,
  Container,
  Braces,
];

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  const score = Array.from(project.slug).reduce((total, char) => total + char.charCodeAt(0), 0);
  const Icon = icons[score % icons.length];
  return (
    <div className={`project-visual ${compact ? "compact" : ""}`} aria-hidden="true">
      <div className="visual-grid" />
      <Icon size={compact ? 28 : 40} strokeWidth={1.35} />
      <span className="visual-code">{project.technologies[0]?.toUpperCase()}</span>
      <span className="visual-index">{String((score % 99) + 1).padStart(2, "0")}</span>
    </div>
  );
}
