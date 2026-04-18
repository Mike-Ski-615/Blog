import { useLanguage } from "@/provider/language-provider";
import {
  projectsByLocale,
  type Project,
  type ProjectLocale,
  type ProjectSlug,
} from "@/data/projects";

function toProjectLocale(locale: string): ProjectLocale {
  return locale === "zh-CN" ? "zh" : "en";
}

export function useProjects() {
  const { locale } = useLanguage();
  return projectsByLocale[toProjectLocale(locale)];
}

function hasProject(
  projects: Record<ProjectSlug, Project>,
  slug: string,
): slug is ProjectSlug {
  return Object.hasOwn(projects, slug);
}

export function useProject(slug: string) {
  const projects = useProjects();

  if (!hasProject(projects, slug)) {
    return undefined;
  }

  return projects[slug];
}
