import { describe, expect, it } from "vitest";
import { allProjects, getProject, projects } from "@/data/projects";
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
    expect(
      projects
        .filter((project) => projectMatchesSearch(project, "scanner"))
        .some((project) => project.slug === "port-scanner"),
    ).toBe(true);
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

  it("keeps planned and internal records out of recruiter-facing project data", () => {
    expect(allProjects.length).toBeGreaterThan(projects.length);
    expect(projects.every((project) => project.visibility === "Public")).toBe(true);
    expect(projects.some((project) => project.status === "Planned" || project.status === "Hidden")).toBe(false);
    expect(getProject("mini-siem-dashboard")).toBeUndefined();
  });

  it("features only the verified public shortlist", () => {
    expect(projects.filter((project) => project.featured).map((project) => project.slug)).toEqual([
      "captainos",
      "mcp-tool-security-inspector",
      "subnet-vlsm-calculator",
      "port-scanner",
    ]);
  });
});
