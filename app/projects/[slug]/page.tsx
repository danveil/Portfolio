import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Github,
  Layers3,
  Lightbulb,
  Network,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectVisual } from "@/components/projects/project-visual";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found", robots: { index: false } };
  const title = project.title;
  const description = project.summary;
  return {
    title,
    description,
    openGraph: { title, description, type: "article", images: [] },
    twitter: { card: "summary", title, description, images: [] },
  };
}

export default async function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = projects
    .filter(
      (item) => item.slug !== project.slug && item.category.some((category) => project.category.includes(category)),
    )
    .slice(0, 3);
  return (
    <main id="main-content" className="project-detail-page">
      <section className="detail-hero">
        <div className="container">
          <Link className="back-link" href="/projects">
            <ArrowLeft size={15} /> All projects
          </Link>
          <div className="detail-hero-grid">
            <div>
              <div className="detail-labels">
                <span className={`status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>
                  {project.status}
                </span>
                {project.category.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <p className="command">
                <span>afiq@portfolio:~/projects$</span> inspect {project.slug}
              </p>
              <h1>{project.title}</h1>
              <p className="detail-summary">{project.description}</p>
              <div className="hero-actions">
                {project.github ? (
                  <a className="button primary" href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={17} /> View GitHub
                  </a>
                ) : null}
                {project.demo ? (
                  <a className="button secondary" href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live demo <ArrowRight size={17} />
                  </a>
                ) : null}
              </div>
            </div>
            <ProjectVisual project={project} />
          </div>
          <div className="detail-stack">
            {project.technologies.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section detail-content">
        <div className="container detail-grid">
          <article className="case-file">
            <header>
              <span>CASE FILE</span>
              <p>{project.slug.toUpperCase()}</p>
            </header>
            <DetailPair project={project} />
            {project.features?.length ? (
              <DetailList icon={<CheckCircle2 />} title="Main features" items={project.features} />
            ) : null}
            {project.architecture?.length ? <Architecture items={project.architecture} /> : null}
            {project.screenshots?.length ? (
              <section className="detail-section">
                <div className="detail-section-title">
                  <Layers3 size={18} />
                  <h2>Screenshots</h2>
                </div>
                <div className="screenshot-grid">
                  {project.screenshots.map((source, index) => (
                    <figure key={source}>
                      <Image
                        src={source}
                        alt={`${project.title} screenshot ${index + 1}`}
                        width={1200}
                        height={750}
                        sizes="(max-width: 900px) 100vw, 720px"
                      />
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}
            {project.concepts?.length ? (
              <DetailList icon={<ShieldCheck />} title="Security & networking concepts" items={project.concepts} tags />
            ) : null}
            {project.challenges?.length ? (
              <DetailList icon={<Wrench />} title="Challenges" items={project.challenges} />
            ) : null}
            {project.lessons?.length ? (
              <DetailList icon={<Lightbulb />} title="What I learned" items={project.lessons} />
            ) : null}
            {project.future?.length ? (
              <DetailList icon={<ArrowRight />} title="Future improvements" items={project.future} />
            ) : null}
          </article>
          <aside className="detail-aside">
            <div>
              <span>STATUS</span>
              <strong>{project.status}</strong>
            </div>
            <div>
              <span>PRIMARY DOMAIN</span>
              <strong>{project.category[0]}</strong>
            </div>
            <div>
              <span>STACK</span>
              <strong>{project.technologies.length} technologies</strong>
            </div>
            {project.whyItMatters ? (
              <blockquote>
                <ShieldCheck size={19} />
                <p>
                  <b>Why it matters</b>
                  {project.whyItMatters}
                </p>
              </blockquote>
            ) : null}
            {!project.github ? (
              <p className="link-note">
                No public repository link is currently available. No placeholder URL is published.
              </p>
            ) : null}
          </aside>
        </div>
      </section>
      <section className="section section-light related-section">
        <div className="container">
          <div className="section-heading">
            <div className="section-kicker">
              <span>→</span>Continue exploring
            </div>
            <div className="section-title-row">
              <h2>Related case files</h2>
            </div>
          </div>
          <div className="projects-grid related-grid">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function DetailPair({ project }: { project: NonNullable<ReturnType<typeof getProject>> }) {
  if (!project.problem && !project.solution) return null;
  return (
    <div className="problem-solution">
      {project.problem ? (
        <section>
          <div className="detail-section-title">
            <Network size={18} />
            <h2>The problem</h2>
          </div>
          <p>{project.problem}</p>
        </section>
      ) : null}
      {project.solution ? (
        <section>
          <div className="detail-section-title">
            <Layers3 size={18} />
            <h2>The solution</h2>
          </div>
          <p>{project.solution}</p>
        </section>
      ) : null}
    </div>
  );
}

function DetailList({
  icon,
  title,
  items,
  tags = false,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  tags?: boolean;
}) {
  return (
    <section className="detail-section">
      <div className="detail-section-title">
        {icon}
        <h2>{title}</h2>
      </div>
      {tags ? (
        <div className="concept-tags">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function Architecture({ items }: { items: string[] }) {
  return (
    <section className="detail-section">
      <div className="detail-section-title">
        <Layers3 size={18} />
        <h2>Architecture</h2>
      </div>
      <div className="architecture-flow">
        {items.map((item, index) => (
          <div key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
            {index < items.length - 1 ? <ArrowRight size={17} /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
