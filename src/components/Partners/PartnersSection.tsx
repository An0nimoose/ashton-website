"use client";

import useEmblaCarousel from "embla-carousel-react";
import { PartnersCard } from "./PartnersCard";
import Image from "next/image";
import { useTranslations, useMessages } from "next-intl";

interface Partner {
  name: string;
  role: string;
  imageSrc: string;
  href: string;
}

export const PartnersSection = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const t = useTranslations("PartnersSection");
  const msgs = useMessages();
  const partnersArr: { name: string; role: string }[] = (msgs.PartnersSection
    ?.partners ?? []) as { name: string; role: string }[];

  const PARTNERS_DATA: Partner[] = partnersArr.map((p, i) => ({
    name: p.name,
    role: p.role,
    imageSrc: `/Partners/${i + 1}.jpg`,
    href: "#",
  }));

  return (
    <section className="relative z-10 -mt-24 overflow-hidden">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:items-end">
          <div className="lg:col-span-1 bg-white px-4 py-12 sm:px-6 lg:px-0 lg:py-12 lg:pr-12 lg:-ml-[100vw] lg:pl-[85vw]">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Image
                src={"/law.png"}
                alt={"law"}
                width={48}
                height={48}
                className="text-accent mb-4"
              />

              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t("title")}
              </h2>
            </div>
          </div>

          <div className="bg-accent-secondary pt-16 pb-12 px-4 sm:px-6 lg:col-span-3 lg:pl-12 lg:-mr-[100vw] lg:pr-[86vw] lg:rounded-tl-2xl">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {PARTNERS_DATA.map((partner) => (
                  <div
                    key={partner.name}
                    className="min-w-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 pl-4"
                  >
                    <PartnersCard {...partner} />
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
