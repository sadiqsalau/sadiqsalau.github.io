import "yet-another-react-lightbox/styles.css";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import clsx from "clsx";
import { ProjectPhotoAlbum } from "@/components/project/project-photo-album";
import { useState } from "react";

import { ProjectModalContainer } from "./project-modal-container";
import { ProjectModalHeader } from "./project-modal-header";

export const ProjectModal = ({ project, show, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);

  const handleImageClick = ({ index }) => {
    setCurrentImageIndex(index);
  };

  const handleLightboxClose = () => setCurrentImageIndex(-1);

  const handleModalClose = () => {
    if (currentImageIndex < 0) {
      onClose();
    }
  };

  return (
    <>
      <ProjectModalContainer show={show} closeModal={handleModalClose}>
        {project ? (
          <div className="space-y-4">
            {/* Header */}
            <ProjectModalHeader project={project} closeModal={onClose} />

            {/* Full Description */}
            {project.fullDescription ? (
              <p className={clsx("p-4 rounded-md", "bg-stone-800")}>
                {project.fullDescription}
              </p>
            ) : null}

            {/* Photos */}
            {project.previewImages?.length ? (
              <ProjectPhotoAlbum
                photos={project.previewImages}
                onClick={handleImageClick}
              />
            ) : null}
          </div>
        ) : null}
      </ProjectModalContainer>

      {project ? (
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
      ) : null}
    </>
  );
};
