"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { PartnersCard } from "./PartnersCard";
import Image from "next/image";

const PARTNERS_DATA = [
  { name: "Alisia", role: "Young", imageSrc: "/partners/1.jpg", href: "#" },
  {
    name: "Emile Heskey",
    role: "Partner",
    imageSrc: "/partners/2.jpg",
    href: "#",
  },
  {
    name: "Angera Mark",
    role: "Partner",
    imageSrc: "/partners/3.jpg",
    href: "#",
  },
  {
    name: "Steve Smith",
    role: "Partner",
    imageSrc: "/partners/4.jpg",
    href: "#",
  },
];

export const PartnersSection = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  return (
    <section className="relative z-10 overflow-hidden">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 items-end lg:grid-cols-4">
          <div className="lg:col-span-1 bg-white py-16 pr-8 lg:pr-60 -ml-[100vw] pl-[90vw]">
            <Image
              src={"/law.png"}
              alt={"law"}
              width={100}
              height={100}
              className="w-12 text-accent mb-4"
            />

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Partners at Ashton
            </h2>
            <p className="text-black font-bold mb-8">
              We specialised in family law divorce, civil partnerships
            </p>
            <Link
              href="/team"
              className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full hover:-translate-y-1 transition-transform duration-300"
            >
              View Our Team
            </Link>
          </div>

          <div className="lg:col-span-3 bg-accent-secondary pt-16 pb-12 pl-8 lg:pl-12 -mr-[100vw] pr-[86vw] rounded-tl-2xl">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {PARTNERS_DATA.map((partner) => (
                  <div
                    key={partner.name}
                    className="min-w-0 flex-shrink-0 basis-4/5 sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
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
