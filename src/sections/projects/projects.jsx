import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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

    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 900: 2 }}>
      <Masonry gutter="0.5rem">
        {projectsList.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  </div>
);
