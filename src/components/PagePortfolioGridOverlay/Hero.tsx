"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const animatedWords = ["Achievement", "Success", "Prosperity"];

const wordVariants: Variants = {
  hidden: { width: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  visible: {
    width: "auto",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 },
  },
};

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl text-center px-6 lg:px-8">
        <p className="font-semibold text-accent uppercase tracking-wider">
          Case Studies
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          We build Relationships that inspire{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="inline-block text-black overflow-hidden whitespace-nowrap align-bottom border-r-4"
            >
              {animatedWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
