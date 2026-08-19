import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="brand">
            <span>afiq@portfolio</span>
            <b>:</b>
          </p>
          <p>Cybersecurity • Networking • Computer Science</p>
        </div>
        <div className="footer-socials">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} {siteConfig.displayName}
          <br />
          Designed &amp; built with care.
        </p>
      </div>
    </footer>
  );
}
