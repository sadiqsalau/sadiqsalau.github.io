import clsx from "clsx";
import ProgressiveImage from "react-progressive-graceful-image";
import { PhotoAlbum } from "react-photo-album";

export const ProjectPhotoAlbum = ({
  total = 0,
  delay = 0,
  photos,
  ...props
}) => (
  <PhotoAlbum
    {...props}
    photos={photos}
    layout="columns"
    spacing={5}
    padding={0}
    renderPhoto={({
      wrapperStyle,
      layout: { index },
      imageProps: { onClick, src },
    }) => {
      return (
        <div
          key={index}
          style={wrapperStyle}
          className="relative overflow-hidden rounded-sm"
        >
          <ProgressiveImage delay={delay} src={src}>
            {(src, loading) => {
              return loading ? (
                <div className="w-full h-full bg-stone-700/50 animate-pulse"></div>
              ) : (
                <img src={src} onClick={onClick} className="w-full h-full" />
              );
            }}
          </ProgressiveImage>

          {/* Count */}
          {total > photos.length && index === photos.length - 1 ? (
            <div
              className={clsx(
                "absolute inset-0 ",
                "bg-neutral-800/20 backdrop-blur-sm",
                "flex justify-center items-center",
                "text-white text-lg font-fredoka-one"
              )}
            >
              +{total - photos.length}
            </div>
          ) : null}
        </div>
      );
    }}
  />
);
