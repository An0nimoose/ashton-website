"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  Variants,
  useInView,
  animate,
} from "framer-motion";

const AnimatedNumber = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const numericValue = parseInt(
    value.match(/[\d,.]+/)?.[0].replace(/,/g, "") || "0",
    10
  );
  const suffix = value.match(/[^\d,.]+$/)?.[0] || "";

  useEffect(() => {
    if (isInView) {
      animate(0, numericValue, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent =
              Math.round(latest).toLocaleString() + suffix;
          }
        },
      });
    }
  }, [isInView, numericValue, suffix]);

  return (
    <p ref={ref} className={className}>
      0{suffix}
    </p>
  );
};

const statImages = [
  {
    src: "/stats/1.jpg",
    alt: "Business meeting discussion",
    position: "top-[-10%] left-[-90%]",
    size: "w-70 h-100",
  },
  {
    src: "/stats/2.jpg",
    alt: "Man in a blue shirt thinking",
    position: "top-[-35%] left-[10%]",
    size: "w-70 h-100",
  },
  {
    src: "/stats/3.jpg",
    alt: "Woman smiling in an office",
    position: "top-[80%] left-[-80%]",
    size: "w-50 h-80",
  },
  {
    src: "/stats/4.jpg",
    alt: "Man in a suit in a meeting",
    position: "top-[55%] left-[0%]",
    size: "w-80 h-120",
  },
];

const achievements = [
  { value: "10M", label: "Recovered Cost" },
  { value: "850+", label: "Global Customers" },
  { value: "98%", label: "Successful Cases" },
];

const animatedWords = ["Achievement", "Success", "Stats"];

const wordVariants: Variants = {
  hidden: { width: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  visible: {
    width: "auto",
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 },
  },
};

export const StatsSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-24 sm:py-32 ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-[20vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md h-96 lg:h-[500px]">
              {statImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute ${image.size} rounded-xl shadow-2xl overflow-hidden ${image.position}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <Image
              src={"/civil-litigation.png"}
              alt={"litigations"}
              width={100}
              height={100}
              className="w-12 text-accent mb-4"
            />
            <div className="text-5xl font-bold text-gray-900 leading-tight">
              <div className="flex items-baseline">
                <span>Our</span>
                <div className="relative overflow-hidden whitespace-nowrap ml-3">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="inline-block text-accent border-r-2 border-black"
                    >
                      {animatedWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
              <span>In Numbers</span>
            </div>

            <p className="text-black font-bold leading-relaxed max-w-lg my-12">
              We support businesses through periods of expansion, succession,
              and all other important transitions. Today’s clients expect
              convenience. Texting is already part of our daily lives and it’s
              the preferred method of interaction.
            </p>

            <div className="flex flex-col sm:flex-row text-center sm:text-left gap-8 sm:gap-12">
              {achievements.map((ach) => (
                <div key={ach.label}>
                  <AnimatedNumber
                    value={ach.value}
                    className="text-5xl font-bold text-gray-900"
                  />
                  <p className="mt-1 text-sm text-gray-500 font-medium">
                    {ach.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
