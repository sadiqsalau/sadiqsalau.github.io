import clsx from "clsx";
import { SectionHeading } from "@/components/section-heading/section-heading";

import { projectsList } from "./projects-list";

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
        <a
          key={i}
          href={project.link}
          target="_blank"
          className={clsx(
            "border border-green-500",
            "rounded-lg p-2.5",
            "flex flex-col gap-2",
            "shadow-[5px_5px_0px_-2px_theme(colors.green.700)]",
            "hover:bg-stone-800"
          )}
        >
          <div className="flex gap-2">
            {/* Icon */}
            <img
              src={project.icon}
              alt={project.title}
              className="w-10 h-10 rounded-lg flex-none"
            />
            {/* Details */}
            <div className="flex-1 flex flex-col gap-1">
              <h4 className="font-fredoka-one">{project.title}</h4>

              {/* Technologies */}
              <ul className="flex gap-2 flex-wrap">
                {project.technologies.map((Icon, i) => (
                  <li key={i}>
                    <Icon className="text-stone-400" />
                  </li>
                ))}
              </ul>

              <p className="text-sm">{project.description}</p>

              <div className="bg-stone-700 text-sm px-2 rounded-full self-start">
                {project.position}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
);
