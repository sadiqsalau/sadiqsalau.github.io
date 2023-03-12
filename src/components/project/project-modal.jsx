import "yet-another-react-lightbox/styles.css";

import Image from "react-graceful-image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import clsx from "clsx";
import { Dialog } from "@headlessui/react";
import { FaGithub, FaTimes } from "react-icons/fa";
import { PhotoAlbum } from "react-photo-album";
import { useState } from "react";

import { ProjectModalContainer } from "./project-modal-container";

export const ProjectModal = ({ show, project, closeModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);

  const handleImageClick = ({ index }) => {
    setCurrentImageIndex(index);
  };

  const handleLightboxClose = () => setCurrentImageIndex(-1);

  const handleModalClose = () => {
    if (currentImageIndex < 0) {
      closeModal();
    }
  };

  return (
    <>
      <ProjectModalContainer show={show} closeModal={handleModalClose}>
        <div className="space-y-4">
          {/* Header */}
          <div className="flex gap-2">
            {/* Icon */}
            <img
              src={project.icon}
              alt={project.title}
              className="w-10 h-10 rounded-lg flex-none"
            />

            {/* Details */}
            <div className="flex-1 flex flex-col gap-1">
              <Dialog.Title as="h3" className="text-lg font-fredoka-one">
                {project.title}
              </Dialog.Title>

              {/* Technologies */}
              <ul className="flex gap-2 flex-wrap">
                {project.technologies.map((Icon, i) => (
                  <li key={i}>
                    <Icon className="text-stone-400" />
                  </li>
                ))}
              </ul>

              {/* Description */}
              <Dialog.Description className="text-sm">
                {project.description}
              </Dialog.Description>

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

              <div className="flex gap-2 mt-2">
                {/* Visit link */}
                <a
                  target="_blank"
                  href={project.link}
                  className={clsx(
                    "rounded-lg bg-green-500 text-green-900",
                    "font-bold px-4 py-1 outline-0 rounded-lg",
                    "hover:ring hover:ring-green-700",
                    "focus:ring focus:ring-green-700",
                    "border border-green-500"
                  )}
                >
                  Visit Page
                </a>

                {/* Repo */}
                {project.repo ? (
                  <a
                    target="_blank"
                    href={project.repo}
                    className={clsx(
                      "font-bold px-4 py-1 outline-0 rounded-lg",
                      "hover:ring hover:ring-green-700",
                      "focus:ring focus:ring-green-700",
                      "border border-green-500"
                    )}
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                ) : null}
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={closeModal}
              className={clsx(
                "self-start outline-0 rounded-lg focus:ring focus:ring-green-700"
              )}
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          {/* Full Description */}
          {project.fullDescription ? (
            <p className={clsx("p-4 rounded-lg", "bg-stone-800")}>
              {project.fullDescription}
            </p>
          ) : null}

          {/* Photos */}
          {project.images?.length ? (
            <PhotoAlbum
              photos={project.images}
              layout="columns"
              spacing={5}
              onClick={handleImageClick}
              renderPhoto={({ imageProps }) => (
                <Image {...imageProps} placeholderColor="#292524" />
              )}
            />
          ) : null}
        </div>
      </ProjectModalContainer>

      <Lightbox
        open={currentImageIndex >= 0}
        index={currentImageIndex}
        close={handleLightboxClose}
        slides={project.images}
        plugins={[Zoom]}
        animation={{
          fade: 0,
        }}
      />
    </>
  );
};
