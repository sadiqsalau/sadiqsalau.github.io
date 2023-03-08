import clsx from "clsx";
import { useState } from "react";

import { ProjectModal } from "./project-modal";
import { ProjectTechnologies } from "./project-technologies";

export const Project = ({ project }) => {
  const [showModal, setShowModal] = useState();

  const handleClick = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <>
      <div
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
            <ProjectTechnologies project={project} />

            <p className="text-sm">{project.description}</p>

            <div className="bg-stone-700 text-sm px-2 rounded-full self-start">
              {project.position}
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <ProjectModal project={project} closeModal={handleModalClose} />
      ) : null}
    </>
  );
};
