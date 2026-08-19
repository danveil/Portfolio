"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/project-card";
import { projectCategories, projects } from "@/data/projects";
import { filterProjects } from "@/lib/projects";
import type { ProjectCategory } from "@/types/project";

type Filter = "All" | ProjectCategory;

export function ProjectExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Filter>("All");
  const reduced = useReducedMotion();
  const results = useMemo(() => filterProjects(projects, query, category), [query, category]);
  return (
    <>
      <div className="explorer-toolbar">
        <label className="project-search">
          <Search size={18} />
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects, technology, or concept…"
          />
          {query ? (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
              <X size={16} />
            </button>
          ) : null}
        </label>
        <div className="result-count" aria-live="polite">
          <SlidersHorizontal size={16} />
          <b>{results.length}</b> of {projects.length} case files
        </div>
      </div>
      <div className="filter-scroller" role="group" aria-label="Filter projects by category">
        {projectCategories.map((item) => {
          const count =
            item === "All" ? projects.length : projects.filter((project) => project.category.includes(item)).length;
          return (
            <button
              key={item}
              type="button"
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}
              <span>{count}</span>
            </button>
          );
        })}
      </div>
      {results.length ? (
        <motion.div layout={!reduced} className="projects-grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {results.map((project) => (
              <motion.div
                layout={!reduced}
                key={project.slug}
                initial={reduced ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="empty-state">
          <Search size={26} />
          <h2>No matching case files.</h2>
          <p>Try a broader term such as “Python”, “network”, “VLSM”, or “MCP”.</p>
          <button
            className="button secondary"
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </>
  );
}
