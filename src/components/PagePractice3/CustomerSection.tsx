"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState, useEffect } from "react";
import { useTranslations, useMessages } from "next-intl";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const CustomerSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const t = useTranslations("Practice3");
  const msgs = useMessages();
  const REVIEWS = (msgs.Practice3?.customerSection?.reviews ?? []) as {
    id?: number;
    text: string;
    author: string;
    place?: string;
    imageSrc?: string;
  }[];

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="bg-white py-2 sm:py-4">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          <div className="relative z-10 lg:col-span-1">
            <Image
              src="/practiceAreas3/customerSection/1.jpg"
              alt="Satisfied client"
              width={600}
              height={700}
              className="rounded-2xl shadow-xl object-cover w-full h-auto"
            />
          </div>

          <div className="relative lg:col-span-2 lg:-ml-24">
            <div className="bg-accent-secondary text-white rounded-2xl p-8 md:p-16 md:px-24">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t("customerSection.title")}
              </h2>

              <div className="mt-8">
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {REVIEWS.map((review) => (
                      <div key={review.id} className="min-w-0 flex-[0_0_100%]">
                        <blockquote className="text-gray-300 text-lg">
                          {review.text}
                        </blockquote>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Image
                    src={REVIEWS[selectedIndex].imageSrc ?? "/reviews/1.jpg"}
                    alt={REVIEWS[selectedIndex].author}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-lg text-white">
                      {REVIEWS[selectedIndex].author}
                    </p>
                    <p className="text-sm text-gray-400">
                      {REVIEWS[selectedIndex].place}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={scrollPrev}
                    className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <FiArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <FiArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
