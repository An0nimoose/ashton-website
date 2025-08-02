"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={sectionRef} className="relative h-[80vh] overflow-hidden">
      <motion.div
        className="absolute top-[-25%] bottom-[-25%] left-0 right-0 z-0"
        style={{ y }}
      >
        <Image
          src="/callToAction/parallax.jpg"
          alt="A lawyer reviewing documents"
          layout="fill"
          objectFit="cover"
          className="h-full w-full"
        />
        <div className="absolute inset-0"></div>
      </motion.div>

      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-screen-xl ml-[20vw] px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-96">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-accent">Legal</span> <br />
              Questions? <br />
              We&apos;ll Take It From Here.
            </h2>
            <Link
              href="/appointment"
              className="mt-8 inline-block bg-accent px-6 py-4 font-semibold text-white rounded-full hover:-translate-y-1 transition-transform duration-300"
            >
              Make an appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
