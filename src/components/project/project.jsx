import clsx from "clsx";
import { ProjectModal } from "@/components/project-modal/project-modal";
import { useState } from "react";

import { MAX_IMAGES_COLUMN, MAX_IMAGES_PREVIEW } from "./project-constants";
import { ProjectPhotoAlbum } from "./project-photo-album";

export const Project = ({ project }) => {
  const [showProjectModal, setShowProjectModal] = useState(false);

  const handleProjectClick = () => {
    setShowProjectModal(true);
  };

  const handleProjectModalClose = () => {
    setShowProjectModal(false);
  };

  return (
    <>
      <a
        role="button"
        onClick={handleProjectClick}
        className={clsx(
          "bg-stone-800",
          "border border-transparent hover:border-green-500",
          "rounded-md p-4",
          "flex flex-col gap-2"
        )}
      >
        <div className="flex gap-2.5">
          {/* Icon */}
          <img
            src={project.icon}
            alt={project.title}
            className="w-10 h-10 rounded-md flex-none"
          />
          {/* Details */}
          <div className="min-w-0 flex-1 flex flex-col gap-1.5">
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

        {/* Photos */}
        {project.previewImages?.length ? (
          <ProjectPhotoAlbum
            delay={1000}
            total={project.previewImages.length}
            photos={project.previewImages.slice(0, MAX_IMAGES_PREVIEW)}
            columns={Math.min(MAX_IMAGES_COLUMN, project.previewImages.length)}
          />
        ) : null}
      </a>

      {/* Project Modal */}
      <ProjectModal
        project={project}
        show={showProjectModal}
        onClose={handleProjectModalClose}
      />
    </>
  );
};
