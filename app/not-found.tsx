import Link from "next/link";
import { ArrowLeft, FolderSearch } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div className="error-code">404</div>
      <div className="error-terminal">
        <p>
          <span>afiq@portfolio:~$</span> locate page
        </p>
        <p>error: route not found</p>
        <p className="muted">The requested path is not in this network map.</p>
      </div>
      <h1>Packet reached the wrong destination.</h1>
      <div className="hero-actions">
        <Link className="button primary" href="/">
          <ArrowLeft size={17} /> Return home
        </Link>
        <Link className="button secondary" href="/projects">
          <FolderSearch size={17} /> Explore projects
        </Link>
      </div>
    </main>
  );
}
