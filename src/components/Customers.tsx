"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useMessages } from "next-intl";
import { useCallback } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const Customers = () => {
  const msgs = useMessages();
  const FIRM_LOGOS: { src: string; alt: string }[] = (msgs.Customers
    ?.firmLogos ?? []) as { src: string; alt: string }[];
  const REVIEWS: {
    id?: number;
    text: string;
    author: string;
    place?: string;
    imageSrc?: string;
  }[] = (msgs.Customers?.reviews ?? []) as {
    id?: number;
    text: string;
    author: string;
    place?: string;
    imageSrc?: string;
  }[];
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
                  {REVIEWS.map((review, idx) => (
                    <div
                      key={review.id ?? idx}
                      className="min-w-0 flex-[0_0_100%] px-2 lg:px-0 lg:pr-8"
                    >
                      <blockquote className="text-gray-600 mb-6">
                        {review.text}
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <Image
                          src={review.imageSrc || "/reviews/1.jpg"}
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
