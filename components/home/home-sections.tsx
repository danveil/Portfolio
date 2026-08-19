import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { ContactForm } from "@/components/home/contact-form";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experience, highlights } from "@/data/experience";
import { journey, leadership } from "@/data/leadership";
import { featuredProjects, projects } from "@/data/projects";
import { currentlyLearning, skillGroups } from "@/data/skills";
import { siteConfig } from "@/data/site";
import { volunteering } from "@/data/volunteering";

export function AboutSection() {
  const stats = [
    { value: `${projects.length}`, label: "Documented project ideas" },
    { value: "6", label: "Technical domains" },
    { value: "4", label: "Programming languages" },
    { value: "1", label: "International volunteer project" },
  ];
  return (
    <section id="about" className="section section-light">
      <div className="container">
        <Reveal>
          <SectionHeading index="01" eyebrow="Profile" title="Building the foundations to secure what connects us." />
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-copy">
            <p className="lead-paragraph">
              I’m a Computer Science student at <strong>Universiti Malaya</strong>, specialising in Computer System
              &amp; Network and building toward work in cybersecurity and network engineering.
            </p>
            <p>
              My academic and project work centres on secure systems, networking technologies, defensive tooling,
              network security, and an emerging research interest in AI security. I learn best by making concepts
              tangible: a scanner, a subnet plan, a detection rule, a small protocol experiment.
            </p>
            <p>
              Leadership, service work, and student programmes have also strengthened how I solve problems with
              others—through clear communication, event coordination, teamwork, and calm execution.
            </p>
            <div className="identity-tags">
              <span>NETWORK SECURITY</span>
              <span>DEFENSIVE SECURITY</span>
              <span>AI SECURITY</span>
              <span>NETWORK ENGINEERING</span>
            </div>
          </Reveal>
          <Reveal className="subnet-panel" delay={0.08}>
            <div className="panel-label">
              <Network size={16} /> NETWORK_MAP.LOG
            </div>
            <pre>{`192.168.10.0/24
├── VLAN 10  students
├── VLAN 20  services
├── VLAN 30  security
└── WAN      gateway

route.status  ACTIVE
policy        LEAST_PRIVILEGE
next_hop      KEEP_LEARNING`}</pre>
          </Reveal>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.04}>
              <div className="stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Capabilities"
            title="Technical range, described honestly."
            copy="No invented percentages—just the tools, concepts, and environments used in projects or coursework."
          />
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.035}>
              <article className="skill-card">
                <div className="skill-code">
                  {group.code}
                  <span>{group.level}</span>
                </div>
                <h3>{group.title}</h3>
                <div className="skill-items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="learning-strip">
          <div>
            <BookOpen size={19} />
            <p>
              <b>CURRENTLY LEARNING</b>
              <span>Active areas of deliberate study</span>
            </p>
          </div>
          <div className="learning-items">
            {currentlyLearning.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FeaturedProjectsSection() {
  return (
    <section className="section section-light featured-projects">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Selected work"
            title="Projects that turn theory into evidence."
            copy="Completed work, active builds, and research prototypes are labelled clearly."
          />
        </Reveal>
        <div className="featured-grid">
          {featuredProjects.slice(0, 4).map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>
        <Reveal className="section-cta">
          <p>
            <span>{projects.length}</span> projects and roadmap entries are documented in the explorer.
          </p>
          <Link className="button secondary" href="/projects">
            Open project explorer <ArrowRight size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function ResearchSection() {
  return (
    <section className="section research-section">
      <div className="container research-grid">
        <Reveal>
          <div className="research-badge">
            <Sparkles size={15} /> FYP PREPARATION · RESEARCH DIRECTION
          </div>
          <h2>Detecting Tool Poisoning in Model Context Protocol Systems</h2>
          <p>
            Exploring lightweight methods for identifying suspicious instructions embedded inside MCP tool descriptions
            using pattern inspection, schema hashing, rule-based detection, logging, and evaluation metrics.
          </p>
          <div className="research-methods">
            <span>01 · INSPECT</span>
            <i />
            <span>02 · HASH</span>
            <i />
            <span>03 · SCORE</span>
            <i />
            <span>04 · EVALUATE</span>
          </div>
          <Link className="inline-link" href="/projects/mcp-tool-security-inspector">
            Explore the research prototype <ArrowRight size={15} />
          </Link>
        </Reveal>
        <Reveal className="research-console" delay={0.08}>
          <div className="panel-label">
            <ShieldCheck size={16} /> INSPECTION_REPORT.JSON
          </div>
          <div className="report-row">
            <span>tool_description</span>
            <b>INSPECTING</b>
          </div>
          <div className="report-row">
            <span>schema_fingerprint</span>
            <code>sha256:84f...9c1</code>
          </div>
          <div className="report-row">
            <span>rule_findings</span>
            <strong>02 review</strong>
          </div>
          <div className="report-row">
            <span>research_status</span>
            <em>IN PROGRESS</em>
          </div>
          <div className="mini-meter">
            <span style={{ width: "68%" }} />
          </div>
          <p>Prototype output only — findings require human review.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section section-light">
      <div className="container">
        <Reveal>
          <SectionHeading index="04" eyebrow="Experience" title="Technical growth, backed by work with people." />
        </Reveal>
        <div className="experience-grid">
          <Reveal className="experience-column">
            <h3 className="column-heading">
              <BriefcaseBusiness size={18} /> Work experience
            </h3>
            {experience.map((item) => (
              <article className="experience-card" key={item.role}>
                <div>
                  <span>{item.period}</span>
                  <h4>{item.role}</h4>
                  <p className="org">{item.organization}</p>
                </div>
                <p>{item.summary}</p>
                <div className="tech-list">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </Reveal>
          <Reveal className="experience-column" delay={0.06}>
            <h3 className="column-heading">
              <Award size={18} /> Highlights
            </h3>
            {highlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <span>{item.label}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p className="org">{item.context}</p>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Education & credentials"
            title="A network-focused computer science path."
          />
        </Reveal>
        <div className="education-layout">
          <div className="education-list">
            {education.map((item, index) => (
              <Reveal key={item.institution} delay={index * 0.04}>
                <article className="education-card">
                  <div className="edu-mark">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <div className="edu-top">
                      <span>{item.period}</span>
                      <b>{item.score}</b>
                    </div>
                    <h3>{item.institution}</h3>
                    <p>
                      {item.qualification} · {item.detail}
                    </p>
                    {item.coursework.length ? (
                      <div className="coursework">
                        {item.coursework.map((course) => (
                          <span key={course}>{course}</span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="cert-column">
            <h3 className="column-heading">
              <CheckCircle2 size={18} /> Certifications
            </h3>
            {certifications.map((cert) => (
              <article className="cert-card" key={cert.name}>
                <span className={`status status-${cert.status.toLowerCase().replaceAll(" ", "-")}`}>{cert.status}</span>
                <h4>{cert.name}</h4>
                <p>{cert.issuer}</p>
                <div className="tech-list">
                  {cert.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                {cert.credentialUrl ? (
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    View credential <ExternalLink size={14} />
                  </a>
                ) : null}
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CommunitySection() {
  return (
    <section className="section section-light community-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Leadership & service"
            title="Reliable systems still depend on reliable people."
            copy="Organisation, logistics, technical support, community service, and international collaboration."
          />
        </Reveal>
        <div className="community-grid">
          <Reveal>
            <div className="community-head">
              <Users size={18} />
              <h3>Leadership</h3>
              <span>{leadership.length} roles</span>
            </div>
            <div className="community-list">
              {leadership.map((item, index) => (
                <article key={`${item.role}-${item.organization}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{item.role}</h4>
                    <p>{item.organization}</p>
                    <small>{item.context}</small>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="community-head">
              <Globe2 size={18} />
              <h3>Volunteering</h3>
              <span>{volunteering.length} programmes</span>
            </div>
            <div className="community-list">
              {volunteering.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.role}</p>
                    <small>{item.detail}</small>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function JourneySection() {
  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        <Reveal>
          <SectionHeading index="07" eyebrow="Journey" title="Progress is a route, not a leap." />
        </Reveal>
        <div className="timeline">
          {journey.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.04}>
              <article>
                <div className="timeline-year">{item.year}</div>
                <span className="timeline-node" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="section section-light contact-section">
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <div className="section-kicker">
            <span>08</span>Contact
          </div>
          <h2>Interested in cybersecurity, networking, or collaboration?</h2>
          <p>
            Let’s connect. I’m open to internship opportunities, project conversations, and thoughtful discussions
            around networks, defensive security, or MCP research.
          </p>
          <div className="contact-links">
            <a href={`mailto:${siteConfig.email}`}>
              <Mail size={18} />
              <span>
                <small>Email</small>
                {siteConfig.email}
              </span>
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
              <span>
                <small>LinkedIn</small>Connect professionally
              </span>
            </a>
          </div>
          <button
            className="button ghost resume-disabled"
            type="button"
            disabled
            title="Add public/resume.pdf to enable this link"
          >
            Resume · available on request
          </button>
        </Reveal>
        <Reveal delay={0.06}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
