"use client";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function DetailPageImageCarousel({
  imageArray,
  noPreview,
}: {
  imageArray: ImageType[];
  noPreview?: boolean;
}) {
  const images: ReactImageGalleryItem[] = imageArray.map((img: ImageType) => ({
    original: img.url,
    thumbnail: img.url,
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
