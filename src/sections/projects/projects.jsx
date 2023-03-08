import clsx from "clsx";
import { SectionHeading } from "@/components/section-heading/section-heading";

import { projectsList } from "./projects-list";
import { Project } from "@/components/project/project";

export const Projects = () => (
  <div className="flex flex-col gap-2">
    <SectionHeading>Projects</SectionHeading>
    <div
      className={clsx(
        "grid gap-3",
        "grid-cols-[repeat(auto-fill,minmax(theme(spacing.60),1fr))]"
      )}
    >
      {projectsList.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  </div>
);
