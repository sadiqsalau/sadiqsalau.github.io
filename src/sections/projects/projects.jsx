import Masonry from 'react-masonry-css'
import { Project } from "@/components/project/project";
import { SectionHeading } from "@/components/section-heading/section-heading";

import projectsList from "@/resources/projects";



const breakpointColumnsObj = {
  default: 2,
  919: 1
};

export const Projects = () => (
  <div className="flex flex-col gap-2">
    <SectionHeading>Projects</SectionHeading>
    <p className="p-4 rounded-md bg-stone-800">
      I have completed several projects that showcase my expertise in web development. Here are some of my favorite projects:
    </p>

    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex -ml-2 w-auto"
      columnClassName="pl-2 bg-clip-padding"
    >
      {projectsList.map((project, i) => (
        <div key={i} className="mb-2">
          <Project project={project} />
        </div>
      ))}
    </Masonry>
  </div>
);