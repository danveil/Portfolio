import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { ProjectVisual } from "@/components/projects/project-visual";
import type { Project } from "@/types/project";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? "featured-card" : ""}`}>
      <ProjectVisual project={project} compact={!featured} />
      <div className="project-card-content">
        <div className="card-topline">
          <span className={`status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>{project.status}</span>
          <span>{project.category[0]}</span>
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        <div className="tech-list">
          {project.technologies.slice(0, featured ? 5 : 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="card-actions">
          <Link href={`/projects/${project.slug}`}>
            View case file <ArrowUpRight size={15} />
          </Link>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
            >
              <Github size={16} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
