"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useTranslations } from "next-intl";

const images = ["/hero/1.jpg", "/hero/2.jpg", "/hero/3.jpg"];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = useTranslations("Hero");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden -mt-20">
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((src, index) => (
          <Transition
            key={src}
            as={Fragment}
            show={index === currentImageIndex}
            enter="transition-opacity duration-1000 ease-in"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1000 ease-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Image
              src={src}
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              priority={index === 0}
              className="absolute top-0 left-0 w-full h-full animate-kenburns-top"
            />
          </Transition>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      <div className="relative z-10 flex h-full items-center text-white">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 text-left">
            {t("title1")} <br />
            {t("title2")}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-left">
            {t("desc")}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/appointment"
              className="bg-accent-secondary text-white font-semibold px-8 py-3 rounded-full hover:-translate-y-1 transition-transform duration-300"
            >
              {t("appointment")}
            </Link>
            <Link
              href="/case-studies"
              className="hidden sm:inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full hover:-translate-y-1 transition-transform duration-300"
            >
              {t("caseStudies")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
