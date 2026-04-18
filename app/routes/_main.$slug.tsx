import Header from "@/components/Center/ProjectDetail/Header";
import Image from "@/components/Center/ProjectDetail/Image";
import Main from "@/components/Center/ProjectDetail/Main";
import ThreeTabs from "@/components/Center/ProjectDetail/ThreeTabs";
import SectionFrame from "@/components/Center/SectionFrame";
import { NotFound } from "@/components/Center/ProjectDetail/NotFound";
import { useProject } from "@/hooks/useProjects";
import { Tabs } from "@/components/ui/tabs";
import type { Route } from "./+types/_main.$slug";
import { ScrollRestoration } from "react-router";

export function loader({ params }: Route.LoaderArgs) {
  return {
    slug: params.slug,
  };
}

export default function ProjectDetailRoute({
  loaderData,
}: Route.ComponentProps) {
  const { slug } = loaderData;
  const project = useProject(slug);

  return (
    <>
      <ScrollRestoration />
      <SectionFrame>
        <Header slug={slug} />
      </SectionFrame>
      {project ? (
        <>
          <SectionFrame>
            <Image slug={slug} project={project} />
          </SectionFrame>
          <Tabs defaultValue="overview" className="contents">
            <SectionFrame>
              <ThreeTabs slug={slug} />
            </SectionFrame>
            <SectionFrame>
              <Main project={project} />
            </SectionFrame>
          </Tabs>
        </>
      ) : (
        <SectionFrame>
          <NotFound />
        </SectionFrame>
      )}
    </>
  );
}
