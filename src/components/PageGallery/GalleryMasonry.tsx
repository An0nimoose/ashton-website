"use client";

import { useState } from "react";
import Image from "next/image";
import Masonry from "@mui/lab/Masonry";
import { Lightbox } from "./LightBox";

interface Image {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface GalleryMasonryProps {
  images: Image[];
}

const GalleryMasonry = ({ images }: GalleryMasonryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Gallery Masonry
            </h2>
          </div>

          <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
            {images.map((image, index) => (
              <div
                key={image.id}
                className="cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="group-hover:scale-105 transition-transform duration-300 ease-in-out w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={images}
          startIndex={selectedIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
};

export default GalleryMasonry;
