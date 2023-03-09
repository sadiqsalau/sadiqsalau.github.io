import clsx from "clsx";
import { useState } from "react";

import { ProjectModal } from "./project-modal";

export const Project = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <>
      <a
        role="button"
        onClick={handleClick}
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

            {/* Description */}
            <p className="text-sm">{project.description}</p>

            {/* Tags */}
            <ul className="flex gap-1 flex-wrap">
              {project.tags.map((tag, i) => (
                <li
                  key={i}
                  className="bg-stone-700 text-sm px-2 rounded-full self-start"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </a>

      {/* Modal */}
      <ProjectModal
        show={showModal}
        project={project}
        closeModal={handleModalClose}
      />
    </>
  );
};
