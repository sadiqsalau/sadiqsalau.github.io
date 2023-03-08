import "yet-another-react-lightbox/styles.css";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import clsx from "clsx";
import { Dialog } from "@headlessui/react";
import { FaGithub, FaTimes } from "react-icons/fa";
import { Gallery } from "react-grid-gallery";
import { useState } from "react";

import { ProjectModalContainer } from "./project-modal-container";
import { ProjectTechnologies } from "./project-technologies";

export const ProjectModal = ({ project, closeModal }) => {
  const [showLightbox, setShowLightbox] = useState(false);

  const [currentImageIndex, setCurrentIndex] = useState(0);
  const handleImageClick = (i) => {
    setCurrentIndex(i);
    setShowLightbox(true);
  };

  const handleLightboxClose = () => setShowLightbox(false);

  return (
    <>
      <ProjectModalContainer show={!showLightbox} closeModal={closeModal}>
        <div className="space-y-4">
          {/* Header */}
          <div className="flex gap-2">
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

              <ProjectTechnologies project={project} />

              <Dialog.Description className="text-sm">
                {project.description}
              </Dialog.Description>

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
          <Gallery
            enableImageSelection={false}
            images={project.images}
            onClick={handleImageClick}
          />
        </div>
      </ProjectModalContainer>

      <Lightbox
        open={showLightbox}
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
