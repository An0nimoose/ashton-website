"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Lightbox } from "./LightBox";
import { useTranslations } from "next-intl";

interface Image {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface HorizontalGalleryProps {
  images: Image[];
}

const HorizontalGallery = ({ images }: HorizontalGalleryProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

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

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const t = useTranslations("Gallery");

  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t("horizontal.title")}
            </h2>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex pl-6 lg:pl-8">
              {images.map((image, index) => (
                <div
                  className="relative flex-[0_0_90%] sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_33.33%] pr-4"
                  key={image.id}
                >
                  <div
                    className="group cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-4 md:left-8 rounded-full bg-white/80 p-3 text-gray-800 shadow-md hover:bg-white"
            onClick={scrollPrev}
            title={t("horizontal.prev")}
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 right-4 md:right-8 rounded-full bg-white/80 p-3 text-gray-800 shadow-md hover:bg-white"
            onClick={scrollNext}
            title={t("horizontal.next")}
          >
            <FiChevronRight size={24} />
          </button>
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

export default HorizontalGallery;
