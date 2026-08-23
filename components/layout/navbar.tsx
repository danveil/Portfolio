"use client";

import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { type MouseEvent, useEffect, useRef, useState } from "react";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (pathname.startsWith("/projects")) return;
    const sections = navigation
      .filter((item) => item.href.includes("#"))
      .map((item) => ({ item, element: document.getElementById(item.href.split("#")[1]) }))
      .filter((entry) => entry.element);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const match = sections.find((entry) => entry.element === visible?.target);
        if (match) setActiveSection(match.item.label);
      },
      { rootMargin: "-24% 0px -65%", threshold: [0, 0.25, 0.6] },
    );
    sections.forEach(({ element }) => element && observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  const active = pathname.startsWith("/projects") ? "Projects" : activeSection;

  function handleNavigation(event: MouseEvent<HTMLAnchorElement>, href: string, label: string) {
    const [targetPath, sectionId] = href.split("#");

    if (!sectionId || targetPath !== pathname) {
      setOpen(false);
      return;
    }

    const target = document.getElementById(sectionId);
    if (!target) return;

    event.preventDefault();
    setOpen(false);
    setActiveSection(label);

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior });
    } else {
      target.scrollIntoView({ behavior, block: "start" });
    }

    window.history.replaceState(null, "", href);
  }

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = drawerRef.current?.querySelectorAll<HTMLElement>("a, button:not([disabled])");
    focusables?.[0]?.focus();

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === "Tab" && focusables?.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="nav-inner container">
          <Link
            href="/#home"
            className="brand"
            aria-label="Afiq portfolio home"
            onClick={(event) => handleNavigation(event, "/#home", "Home")}
          >
            <span>afiq@portfolio</span>
            <b>:</b>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={active === item.label ? "active" : ""}
                onClick={(event) => handleNavigation(event, item.href, item.label)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <a
              className="icon-button desktop-social"
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              className="icon-button desktop-social"
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              className="icon-button menu-button"
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
            >
              <Menu size={19} />
            </button>
          </div>
        </div>
      </header>
      <div
        className={`mobile-overlay ${open ? "open" : ""}`}
        aria-hidden={!open}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        <div ref={drawerRef} className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="drawer-head">
            <span className="brand">
              <span>A&gt;</span>
            </span>
            <button
              className="icon-button"
              type="button"
              onClick={() => {
                setOpen(false);
                menuButtonRef.current?.focus();
              }}
              aria-label="Close navigation menu"
            >
              <X size={19} />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(event) => handleNavigation(event, item.href, item.label)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="drawer-links">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
              <Github size={17} /> GitHub
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={17} /> LinkedIn
            </a>
          </div>
          <p>
            Secure systems. Reliable networks.
            <br />
            Grounded, practical learning.
          </p>
        </div>
      </div>
    </>
  );
}
