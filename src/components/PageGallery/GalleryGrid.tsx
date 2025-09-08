"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "./LightBox";
import { useTranslations } from "next-intl";

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: Image[];
}

const GalleryGrid = ({ images }: GalleryGridProps) => {
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

  const t = useTranslations("Gallery");

  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base font-semibold leading-7 text-accent">
              {t("stylesLabel")}
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t("grid.title")}
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg shadow-md"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
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

export default GalleryGrid;
