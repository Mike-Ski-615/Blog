import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/Center/SectionHeader";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandPrisma,
  IconBrandTailwind,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandGit,
  IconBrandGithub,
  IconBrandRust,
  IconBrandPython,
  IconBrandThreejs,
  IconBrandVite,
  IconBrandVue,
  IconBrandRadixUi,
  IconBrandDocker,
} from "@tabler/icons-react";
import { useIntl } from "react-intl";

const skills = [
  { name: "React", icon: IconBrandReact },
  { name: "Next.js", icon: IconBrandNextjs },
  { name: "Node.js", icon: IconBrandNodejs },
  { name: "MongoDB", icon: IconBrandMongodb },
  { name: "MySQL", icon: IconBrandMysql },
  { name: "Prisma", icon: IconBrandPrisma },
  { name: "Tailwind CSS", icon: IconBrandTailwind },
  { name: "JavaScript", icon: IconBrandJavascript },
  { name: "TypeScript", icon: IconBrandTypescript },
  { name: "Git", icon: IconBrandGit },
  { name: "GitHub", icon: IconBrandGithub },
  { name: "Rust", icon: IconBrandRust },
  { name: "Python", icon: IconBrandPython },
  { name: "Three.js", icon: IconBrandThreejs },
  { name: "Vite", icon: IconBrandVite },
  { name: "Vue.js", icon: IconBrandVue },
  { name: "Radix UI", icon: IconBrandRadixUi },
  { name: "Docker", icon: IconBrandDocker },
  { name: "Shadcn UI" },
  { name: "Motion" },
  { name: "GSAP" },
  { name: "PostgreSQL" },
  { name: "Bun" },
  { name: "tRPC" },
  { name: "pnpm" },
  { name: "eslint" },
];

export default function SkillsTechnologies() {
  const intl = useIntl();

  return (
    <>
      <SectionHeader>
        {intl.formatMessage({ id: "introduce.skills" })}
      </SectionHeader>
      <ul className="flex flex-wrap items-center justify-center gap-2 px-4 py-2">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <li key={skill.name}>
              <Button variant="outline">
                {Icon && <Icon data-icon="inline-start" />}
                {skill.name}
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
