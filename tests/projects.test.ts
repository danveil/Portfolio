import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";
import { filterProjects, projectMatchesSearch } from "@/lib/projects";

describe("project discovery", () => {
  it("finds projects by title, technology, and concept", () => {
    expect(
      projects
        .filter((project) => projectMatchesSearch(project, "VLSM"))
        .some((project) => project.slug === "subnet-vlsm-calculator"),
    ).toBe(true);
    expect(
      projects
        .filter((project) => projectMatchesSearch(project, "JSON-RPC"))
        .some((project) => project.slug === "mcp-tool-security-inspector"),
    ).toBe(true);
    expect(projects.filter((project) => projectMatchesSearch(project, "scanner")).length).toBeGreaterThan(2);
  });

  it("combines category and free-text filters", () => {
    const results = filterProjects(projects, "Python", "AI Security");
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((project) => project.category.includes("AI Security"))).toBe(true);
    expect(results.every((project) => projectMatchesSearch(project, "Python"))).toBe(true);
  });

  it("returns every project for an empty all-project query", () => {
    expect(filterProjects(projects, "", "All")).toHaveLength(projects.length);
  });
});
