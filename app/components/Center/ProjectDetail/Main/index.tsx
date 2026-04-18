import type { Project } from "@/data/projects";
import { useLanguage } from "@/provider/language-provider";
import { OverviewTab } from "./OverviewTab";
import { ReadmeTab } from "./ReadmeTab";
import { WebsiteTab } from "./WebsiteTab";

type MainProps = {
  project: Project;
};

export default function Main({ project }: MainProps) {
  const { locale } = useLanguage();

  return (
    <>
      <OverviewTab project={project} />
      <ReadmeTab locale={locale} slug={project.slug} />
      <WebsiteTab githubUrl={project.links?.github} />
    </>
  );
}
