import "yet-another-react-lightbox/styles.css";

import GracefulImage from "react-graceful-image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import clsx from "clsx";
import { PhotoAlbum } from "react-photo-album";
import { useState } from "react";

import { ProjectModalContainer } from "./project-modal-container";
import { ProjectModalHeader } from "./project-modal-header";

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
          <ProjectModalHeader project={project} closeModal={closeModal} />

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
              padding={0}
              onClick={handleImageClick}
              renderPhoto={({ wrapperStyle, imageProps: { onClick, src } }) => {
                return (
                  <div style={wrapperStyle} onClick={onClick}>
                    <GracefulImage
                      src={src}
                      className="w-full h-full"
                      customPlaceholder={(ref) => (
                        <div
                          ref={ref}
                          className="bg-stone-800 w-full h-full animate-pulse"
                        ></div>
                      )}
                    />
                  </div>
                );
              }}
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
