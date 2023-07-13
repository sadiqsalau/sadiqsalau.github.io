import Masonry from "react-smart-masonry";
import { Project } from "@/components/project/project";
import { SectionHeading } from "@/components/section-heading/section-heading";

import projectsList from "@/resources/projects";


export const Projects = () => (
  <div className="flex flex-col gap-2">
    <SectionHeading>Projects</SectionHeading>
    <p className="p-4 rounded-md bg-stone-800">
      I have completed several projects that showcase my expertise in web development. Here are some of my favorite projects:
    </p>

    <Masonry
      autoArrange
      breakpoints={{ sm: 0, wide: 920 }}
      columns={{ sm: 1, wide: 2 }}
      gap="0.5rem"
    >
      {projectsList.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </Masonry>
  </div>
);