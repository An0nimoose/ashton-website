"use client";

import useEmblaCarousel from "embla-carousel-react";
import { PracticeAreaCard } from "./PracticeAreasCard";

const PRACTICE_AREAS = [
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
    <section className="relative z-10 -mt-24 overflow-hidden">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 items-end lg:grid-cols-4">
          <div className="lg:col-span-1 bg-white py-16 pr-8 lg:pr-12 -ml-[100vw] pl-[90vw]">
            <blockquote className="text-xl font-bold text-black">
              &quot;At Ashton, let us help you solve problems so that you can
              focus on your mission. We support businesses through periods of
              expansion, succession, and all other important transitions.&quot;
            </blockquote>
            <cite className="mt-4 inline-block text-left font-signiture text-4xl text-gray-800 underline decoration-neutral-200 decoration-[10px] underline-offset-[5px]">
              John Corner
            </cite>
          </div>

          <div className="lg:col-span-3 bg-accent-secondary pt-16 pb-12 pl-8 lg:pl-12 -mr-[100vw] pr-[86vw] rounded-tl-2xl">
            <div className="mb-8">
              <p className="mb-2 font-semibold text-accent">Our Expertises</p>
              <h2 className="text-4xl font-bold text-white">Practice Areas</h2>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {PRACTICE_AREAS.map((area) => (
                  <div
                    key={area.title}
                    className="min-w-0 flex-shrink-0 basis-4/5 sm:basis-1/2 xl:basis-1/3"
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
}
