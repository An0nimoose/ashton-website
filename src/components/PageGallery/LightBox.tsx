"use client";

import { useEffect, useCallback, useState, useRef, Fragment } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Popover, Transition } from "@headlessui/react";
import {
  FiX,
  FiShare2,
  FiMaximize,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { TbZoomReset } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface LightboxProps {
  images: Image[];
  startIndex: number;
  onClose: () => void;
}

export const Lightbox = ({ images, startIndex, onClose }: LightboxProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: startIndex,
  });

  const [isZoomed, setIsZoomed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const y = useMotionValue(0);
  const backgroundOpacity = useTransform(
    y,
    (latestY) => 1 - Math.abs(latestY) / (window.innerHeight / 1.5)
  );
  const scale = useTransform(
    y,
    (latestY) => 1 - Math.abs(latestY) / (window.innerHeight * 3)
  );

  const handleDragEnd = () => {
    const yValue = y.get();
    if (Math.abs(yValue) > 150) {
      animate(y, yValue > 0 ? window.innerHeight : -window.innerHeight, {
        onComplete: onClose,
        type: "spring",
        stiffness: 500,
        damping: 50,
      });
    } else {
      animate(y, 0, { type: "spring", stiffness: 400, damping: 40 });
    }
  };

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setIsZoomed(false);
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") scrollPrev();
      if (event.key === "ArrowRight") scrollNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, scrollPrev, scrollNext]);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) lightboxRef.current?.requestFullscreen();
    else document.exitFullscreen();
  };

  const getShareUrl = (service: "facebook" | "twitter" | "pinterest") => {
    const pageUrl = window.location.href;
    const imageUrl = `${window.location.origin}${images[currentIndex].src}`;
    switch (service) {
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          pageUrl
        )}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          pageUrl
        )}&text=Check%20out%20this%20image!`;
      case "pinterest":
        return `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
          pageUrl
        )}&media=${encodeURIComponent(imageUrl)}`;
    }
  };

  const lightboxVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={lightboxRef}
        variants={lightboxVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-md"
        style={{ opacity: backgroundOpacity }}
        onClick={onClose}
      >
        <div className="absolute top-4 left-4 z-50 text-gray-800 text-lg font-mono">
          {currentIndex + 1} / {images.length}
        </div>

        <div className="absolute top-4 right-4 z-50 flex items-center gap-4 text-gray-800">
          <button
            className="hover:text-black"
            title="Reset Zoom"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
            }}
          >
            <TbZoomReset size={24} />
          </button>

          <Popover className="relative">
            <Popover.Button
              className="hover:text-black focus:outline-none"
              title="Share"
              onClick={(e) => e.stopPropagation()}
            >
              <FiShare2 size={24} />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 mt-3 w-auto origin-top-right bg-white shadow-2xl focus:outline-none">
                <div
                  className="flex flex-col gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="text-sm font-semibold text-gray-700 px-1 text-center">
                    Share On
                  </span>
                  <div className="flex items-center">
                    <a
                      href={getShareUrl("facebook")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-black/50 hover:bg-[#1877F2] hover:text-white transition-colors"
                    >
                      <FaFacebookF size={16} />
                    </a>
                    <a
                      href={getShareUrl("twitter")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-black/50 hover:bg-[#1DA1F2] hover:text-white transition-colors"
                    >
                      <FaTwitter size={16} />
                    </a>
                    <a
                      href={getShareUrl("pinterest")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-black/50 hover:bg-[#E60023] hover:text-white transition-colors"
                    >
                      <FaPinterest size={16} />
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <button
            className="hover:text-black"
            title="Fullscreen"
            onClick={(e) => {
              e.stopPropagation();
              handleFullscreen();
            }}
          >
            <FiMaximize size={24} />
          </button>
          <button className="hover:text-black" onClick={onClose} title="Close">
            <FiX size={30} />
          </button>
        </div>

        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleDragEnd}
          style={{ y, scale }}
          className="w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="overflow-hidden w-full max-w-7xl" ref={emblaRef}>
            <div className="flex">
              {images.map((img) => (
                <div
                  className="relative flex-[0_0_100%] h-[80vh] mx-4 overflow-hidden"
                  key={img.id}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <motion.div
                    className="relative w-full h-full"
                    animate={{ scale: isZoomed ? 1.25 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/5 p-3 text-gray-800 hover:text-black hover:bg-black/10"
          onClick={(e) => {
            e.stopPropagation();
            scrollPrev();
          }}
        >
          <FiChevronLeft size={30} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/5 p-3 text-gray-800 hover:text-black hover:bg-black/10"
          onClick={(e) => {
            e.stopPropagation();
            scrollNext();
          }}
        >
          <FiChevronRight size={30} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
