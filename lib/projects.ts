import type { Project, ProjectCategory } from "@/types/project";

export function projectMatchesSearch(project: Project, rawQuery: string) {
  const query = rawQuery.trim().toLocaleLowerCase();
  if (!query) return true;

  return [
    project.title,
    project.summary,
    project.description,
    ...project.technologies,
    ...project.category,
    ...(project.concepts ?? []),
  ]
    .join(" ")
    .toLocaleLowerCase()
    .includes(query);
}

export function filterProjects(projects: Project[], query: string, category: "All" | ProjectCategory) {
  return projects.filter(
    (project) => (category === "All" || project.category.includes(category)) && projectMatchesSearch(project, query),
  );
}
