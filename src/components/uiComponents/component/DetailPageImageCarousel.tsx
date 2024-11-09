"use client";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function DetailPageImageCarousel({
  imageArray,
  noPreview,
}: {
  imageArray: string[];
  noPreview?: boolean;
}) {
  const images: ReactImageGalleryItem[] = imageArray.map((url) => ({
    original: url,
    thumbnail: url,
  }));
  return (
    <div className="">
      <ImageGallery
        items={images}
        showPlayButton={false}
        showBullets={false}
        slideOnThumbnailOver={true}
        thumbnailPosition="top"
        showFullscreenButton={!noPreview ? true : false}
      />
    </div>
  );
}
