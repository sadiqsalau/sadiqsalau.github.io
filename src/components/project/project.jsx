import ProgressiveImage from "react-progressive-graceful-image";
import clsx from "clsx";
import { PhotoAlbum } from "react-photo-album";
import { useState } from "react";

import { MAX_IMAGES_COLUMN, MAX_IMAGES_PREVIEW } from "./project-constants";
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

        {/* Photos */}
        {project.images?.length ? (
          <PhotoAlbum
            photos={project.images.slice(0, MAX_IMAGES_PREVIEW)}
            layout="columns"
            spacing={5}
            padding={0}
            columns={Math.min(MAX_IMAGES_COLUMN, project.images.length)}
            renderPhoto={({
              wrapperStyle,
              layout: { index },
              imageProps: { src },
            }) => {
              return (
                <div
                  style={wrapperStyle}
                  className="relative overflow-hidden rounded-md"
                >
                  <ProgressiveImage src={src}>
                    {(src, loading) => {
                      return loading ? (
                        <div className="w-full h-full bg-stone-700/50 animate-pulse"></div>
                      ) : (
                        <img src={src} className="w-full h-full" />
                      );
                    }}
                  </ProgressiveImage>

                  {/* Count */}
                  {project.images.length > MAX_IMAGES_PREVIEW &&
                  index === MAX_IMAGES_PREVIEW - 1 ? (
                    <div
                      className={clsx(
                        "absolute inset-0 ",
                        "bg-neutral-800/30",
                        "flex justify-center items-center"
                      )}
                    >
                      <span
                        className={clsx(
                          "w-10 h-10 flex justify-center items-center",
                          "bg-green-500 text-green-800 rounded-full",
                          "font-fredoka-one text-lg"
                        )}
                      >
                        +{project.images.length - MAX_IMAGES_PREVIEW}
                      </span>
                    </div>
                  ) : null}
                </div>
              );
            }}
          />
        ) : null}
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
