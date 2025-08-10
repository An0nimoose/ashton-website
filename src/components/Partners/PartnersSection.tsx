"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { PartnersCard } from "./PartnersCard";
import Image from "next/image";

interface Partner {
  name: string;
  role: string;
  imageSrc: string;
  href: string;
}

const PARTNERS_DATA: Partner[] = [
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
    <section className="relative z-10 overflow-x-hidden">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 items-center lg:grid-cols-4">
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-1 lg:py-16 lg:pr-60 lg:-ml-[100vw] lg:pl-[90vw]">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Image
                src={"/law.png"}
                alt={"law"}
                width={48}
                height={48}
                className="text-accent mb-4"
              />

              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Partners at Ashton
              </h2>
              <p className="text-black font-bold mb-8 max-w-xs">
                We specialised in family law divorce, civil partnerships
              </p>
              <Link
                href="/team"
                className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full hover:-translate-y-1 transition-transform duration-300"
              >
                View Our Team
              </Link>
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
