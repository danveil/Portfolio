import Link from "next/link";
import { ArrowDown, ArrowRight, Github, MapPin, ShieldCheck } from "lucide-react";
import { PortfolioTerminal } from "@/components/terminal/portfolio-terminal";
import { RotatingRole } from "@/components/home/rotating-role";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="hero-shell">
      <div className="network-grid" aria-hidden="true">
        <span className="node node-a" />
        <span className="node node-b" />
        <span className="node node-c" />
        <span className="route route-a" />
        <span className="route route-b" />
        <span className="packet packet-a">192.168.1.0/24</span>
        <span className="packet packet-b">TCP · 443</span>
      </div>
      <div className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <ShieldCheck size={15} /> Secure systems, grounded learning
          </div>
          <p className="command">
            <span>afiq@portfolio:~$</span> whoami
          </p>
          <h1>
            Muhammad
            <br />
            <em>Afiq Hakiki</em>
          </h1>
          <p className="role">
            Computer Science Student <span>•</span> <RotatingRole />
          </p>
          <p className="lede">
            I turn security concepts and network protocols into practical tools—building toward safer, more reliable
            systems one project at a time.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/projects">
              Explore projects <ArrowRight size={18} />
            </Link>
            <a className="button secondary" href={siteConfig.github} target="_blank" rel="noopener noreferrer">
              <Github size={18} /> View GitHub
            </a>
            <a className="button ghost" href="#contact">
              Contact me
            </a>
          </div>
          <div className="hero-meta">
            <p>
              <MapPin size={15} /> {siteConfig.location}
            </p>
            <span />
            <p>Open to internship opportunities</p>
          </div>
        </div>
        <PortfolioTerminal />
      </div>
      <div className="signal container" aria-label="Professional focus areas">
        <span>01 / NETWORK SECURITY</span>
        <span>02 / DEFENSIVE SECURITY</span>
        <span>03 / AI SECURITY</span>
        <span>04 / NETWORK ENGINEERING</span>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
