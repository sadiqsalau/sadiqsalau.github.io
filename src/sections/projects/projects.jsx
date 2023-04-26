import clsx from "clsx";
import { Project } from "@/components/project/project";
import { SectionHeading } from "@/components/section-heading/section-heading";

import { projectsList } from "./projects-list";

export const Projects = () => (
  <div className="flex flex-col gap-2">
    <SectionHeading>Projects</SectionHeading>
    <p className="p-4 rounded-lg bg-stone-800">
      As a React and Laravel web developer, I have completed several projects
      that showcase my expertise in these technologies.
    </p>
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
