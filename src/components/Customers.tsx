"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const FIRM_LOGOS = [
  { src: "/firmLogos/1.png", alt: "Alex & Partners" },
  { src: "/firmLogos/2.png", alt: "The Justice" },
  { src: "/firmLogos/3.png", alt: "IK Law Firm" },
  { src: "/firmLogos/4.png", alt: "Law Firm" },
];

const REVIEWS = [
  {
    id: 1,
    text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil.",
    author: "Simon Doe",
    place: "MasterCard Co.",
    imageSrc: "/reviews/1.jpg",
  },
  {
    id: 2,
    text: "Authentic Cliche, schlitz narwhal post-ironic. Enamel pin vegan messenger bag you probably haven't heard of them, deep v banjo. Butcher meditation occupy cray.",
    author: "Charlie Love",
    place: "CostCo Inc.",
    imageSrc: "/reviews/2.jpg",
  },
  {
    id: 3,
    text: "Tattooed austin trust fund, subway tile vinyl butcher helvetica raclette. Normcore listicle gochujang, flannel whatever snackwave waistcoat tacos glossier.",
    author: "Johny Singa",
    place: "Amazon Inc.",
    imageSrc: "/reviews/3.jpg",
  },
];

export const Customers = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative z-10 -mt-24 overflow-hidden">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:items-end">
          <div className="lg:col-span-1 bg-white px-4 py-12 sm:px-6 lg:px-0 lg:py-12 lg:pr-12 lg:-ml-[100vw] lg:pl-[85vw]">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-8">
              {FIRM_LOGOS.map((logo) => (
                <div
                  key={logo.src}
                  className="flex justify-center items-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={50}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 bg-gray-100 pt-16 pb-12 px-4 sm:px-6 lg:px-0 lg:pt-16 lg:pb-12 lg:pl-12 lg:-mr-[100vw] lg:pr-[86vw] rounded-tl-2xl">
            <div className="mb-8 text-center lg:text-left">
              <p className="mb-2 text-4xl font-semibold text-accent">
                Trusted by
              </p>
              <h2 className="text-4xl font-bold text-black">Our Customers</h2>
            </div>

            <div className="lg:relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {REVIEWS.map((review) => (
                    <div
                      key={review.id}
                      className="min-w-0 flex-[0_0_100%] px-2 lg:px-0 lg:pr-8"
                    >
                      <blockquote className="text-gray-600 mb-6">
                        {review.text}
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <Image
                          src={review.imageSrc}
                          alt={review.author}
                          width={60}
                          height={60}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <p className="font-bold text-lg text-black">
                            {review.author}
                          </p>
                          <p className="font-bold text-[0.8rem] text-neutral-400">
                            {review.place}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-0 items-center gap-2">
                <button
                  onClick={scrollPrev}
                  className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200 transition-colors"
                  aria-label="Previous review"
                >
                  <BsArrowLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={scrollNext}
                  className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200 transition-colors"
                  aria-label="Next review"
                >
                  <BsArrowRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
                <button
                  onClick={scrollPrev}
                  className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200 transition-colors"
                  aria-label="Previous review"
                >
                  <BsArrowLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={scrollNext}
                  className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200 transition-colors"
                  aria-label="Next review"
                >
                  <BsArrowRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
