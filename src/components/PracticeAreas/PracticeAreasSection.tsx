"use client";

import useEmblaCarousel from "embla-carousel-react";
import { PracticeAreaCard } from "./PracticeAreasCard";

interface PracticeArea {
  title: string;
  imageSrc: string;
  href: string;
}

const PRACTICE_AREAS: PracticeArea[] = [
  { title: "Acquisitions", imageSrc: "/practiceAreas/1.jpg", href: "#" },
  { title: "Dispute Resolution", imageSrc: "/practiceAreas/2.jpg", href: "#" },
  { title: "Pensions & Benefits", imageSrc: "/practiceAreas/3.jpg", href: "#" },
  {
    title: "Health Care & Medical",
    imageSrc: "/practiceAreas/4.jpg",
    href: "#",
  },
  { title: "National Security", imageSrc: "/practiceAreas/5.jpg", href: "#" },
];

export const PracticeAreasSection = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  return (
    <section className="relative z-10 -mt-24 overflow-x-hidden">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 items-end lg:grid-cols-4">
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-1 lg:py-16 lg:pr-12 lg:-ml-[100vw] lg:pl-[90vw]">
            <div className="text-center lg:text-left">
              <blockquote className="text-xl font-bold text-black">
                “At Ashton, let us help you solve problems so that you can focus
                on your mission. We support businesses through periods of
                expansion, succession, and all other important transitions.”
              </blockquote>
              <cite className="mt-4 inline-block text-left font-signiture text-4xl text-gray-800 underline decoration-neutral-200 decoration-[10px] underline-offset-[5px]">
                John Corner
              </cite>
            </div>
          </div>

          <div className="bg-accent-secondary pt-16 pb-12 px-4 sm:px-6 lg:col-span-3 lg:pl-12 lg:-mr-[100vw] lg:pr-[86vw] lg:rounded-tl-2xl">
            <div className="text-center lg:text-left mb-8">
              <p className="mb-2 font-semibold text-accent">Our Expertises</p>
              <h2 className="text-4xl font-bold text-white">Practice Areas</h2>
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
