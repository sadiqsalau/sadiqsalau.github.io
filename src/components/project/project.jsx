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
          "bg-stone-800",
          "border border-transparent hover:border-green-500",
          "rounded-lg p-4",
          "flex flex-col gap-2"
        )}
      >
        <div className="flex gap-2.5">
          {/* Icon */}
          <img
            src={project.icon}
            alt={project.title}
            className="w-10 h-10 rounded-lg flex-none"
          />
          {/* Details */}
          <div className="flex-1 flex flex-col gap-1.5">
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
            <p className="text-sm text-stone-300">{project.description}</p>

            {/* Tags */}
            <ul className="flex gap-1 flex-wrap">
              {project.tags.map((tag, i) => (
                <li
                  key={i}
                  className="bg-stone-700 text-sm px-2 rounded-full self-start text-stone-300"
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
