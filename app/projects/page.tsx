import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FolderSearch } from "lucide-react";
import { ProjectExplorer } from "@/components/projects/project-explorer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Project Explorer | Muhammad Afiq Hakiki",
  description:
    "Explore cybersecurity, networking, software, university, and AI security project work by Muhammad Afiq Hakiki.",
};

export default function ProjectsPage() {
  const completed = projects.filter((project) => project.status === "Completed").length;
  const active = projects.filter(
    (project) => project.status === "In Progress" || project.status === "Research Prototype",
  ).length;
  return (
    <main id="main-content" className="projects-page">
      <section className="projects-hero">
        <div className="network-grid" aria-hidden="true" />
        <div className="container">
          <Link className="back-link" href="/#projects">
            <ArrowLeft size={15} /> Back to portfolio
          </Link>
          <div className="projects-heading">
            <div>
              <p className="command">
                <span>afiq@portfolio:~$</span> ls ./projects
              </p>
              <h1>
                Project <em>Explorer</em>
              </h1>
              <p>
                Practical builds, research prototypes, completed coursework, and an honest roadmap for what comes next.
              </p>
            </div>
            <div className="case-summary">
              <FolderSearch size={24} />
              <div>
                <strong>{projects.length}</strong>
                <span>Documented case files</span>
              </div>
              <div>
                <strong>{completed}</strong>
                <span>Completed</span>
              </div>
              <div>
                <strong>{active}</strong>
                <span>Active / research</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section explorer-section">
        <div className="container">
          <ProjectExplorer />
        </div>
      </section>
    </main>
  );
}
