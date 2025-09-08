"use client";

import useEmblaCarousel from "embla-carousel-react";
import { PracticeAreaCard } from "./PracticeAreasCard";
import { useTranslations, useMessages } from "next-intl";

interface PracticeArea {
  title: string;
  imageSrc: string;
  href: string;
}

export const PracticeAreasSection = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const t = useTranslations("PracticeAreasSection");
  const msgs = useMessages();

  const areasArray: string[] = (msgs.PracticeAreasSection?.areas ??
    []) as string[];

  const PRACTICE_AREAS: PracticeArea[] = areasArray.map((title, i) => ({
    title,
    imageSrc: `/practiceAreas/${i + 1}.jpg`,
    href: "#",
  }));

  return (
    <section className="relative z-10 -mt-24 overflow-x-hidden">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 items-end lg:grid-cols-4">
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-1 lg:py-16 lg:pr-12 lg:-ml-[100vw] lg:pl-[90vw]">
            <div className="text-center lg:text-left">
              <blockquote className="text-xl font-bold text-black">
                {t("quote")}
              </blockquote>
              <cite className="mt-4 inline-block text-left font-signiture text-4xl text-gray-800 underline decoration-neutral-200 decoration-[10px] underline-offset-[5px]">
                {t("signature")}
              </cite>
            </div>
          </div>

          <div className="bg-accent-secondary pt-16 pb-12 px-4 sm:px-6 lg:col-span-3 lg:pl-12 lg:-mr-[100vw] lg:pr-[86vw] lg:rounded-tl-2xl">
            <div className="text-center lg:text-left mb-8">
              <p className="mb-2 font-semibold text-accent">
                {t("expertises")}
              </p>
              <h2 className="text-4xl font-bold text-white">{t("title")}</h2>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {PRACTICE_AREAS.map((area) => (
                  <div
                    key={area.title}
                    className="min-w-0 flex-shrink-0 basis-full sm:basis-1/2 xl:basis-1/3 pl-4"
                  >
                    <PracticeAreaCard {...area} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
