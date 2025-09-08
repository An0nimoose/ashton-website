"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Lightbox } from "./LightBox";
import { useTranslations } from "next-intl";

interface Img {
  id: number;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface JustifiedGalleryProps {
  images: Img[];
  rowHeight?: number;
  gap?: number;
}

const JustifiedGallery = ({
  images,
  rowHeight = 200,
  gap = 8,
}: JustifiedGalleryProps) => {
  const [rows, setRows] = useState<Img[][]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const container = document.getElementById("justified-container");
    if (!container) return;

    const containerWidth = container.clientWidth;
    const newRows: Img[][] = [];
    let currentRow: Img[] = [];
    let rowAspectSum = 0;

    images.forEach((img) => {
      const aspect = (img.width || 4) / (img.height || 3);
      currentRow.push({ ...img, width: aspect, height: 1 });
      rowAspectSum += aspect;

      if (rowAspectSum * rowHeight >= containerWidth) {
        newRows.push(currentRow);
        currentRow = [];
        rowAspectSum = 0;
      }
    });

    if (currentRow.length) newRows.push(currentRow);
    setRows(newRows);
  }, [images, rowHeight]);

  const openLightbox = (i: number) => {
    setSelectedIndex(i);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  let globalIndex = 0;

  const t = useTranslations("Gallery");

  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t("justified.title")}
            </h2>
          </div>
        </div>

        <div id="justified-container" className="w-full">
          {rows.map((row, rowIdx) => {
            const totalAspect = row.reduce(
              (sum, img) => sum + (img.width as number),
              0
            );
            return (
              <div key={rowIdx} className="flex mb-2" style={{ gap }}>
                {row.map((img) => {
                  const flexGrow = img.width as number;
                  const calculatedWidth = (flexGrow / totalAspect) * 100 + "%";
                  const idx = globalIndex++;
                  return (
                    <div
                      key={img.id}
                      style={{
                        flex: `0 0 ${calculatedWidth}`,
                        position: "relative",
                        height: rowHeight,
                      }}
                      className="overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => openLightbox(idx)}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={images.map((img) => ({
            ...img,
            width: img.width ?? 768,
            height: img.height ?? 512,
          }))}
          startIndex={selectedIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
};

export default JustifiedGallery;
