"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const t = useTranslations("CallToAction");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[50vh] lg:h-[80vh] overflow-hidden"
    >
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
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-accent">{t("title1")}</span> <br />
              {t("title2")} <br />
              {t("title3")}
            </h2>
            <Link
              href="/appointment"
              className="mt-8 inline-block bg-accent px-8 py-4 font-semibold text-white rounded-full hover:-translate-y-1 transition-transform duration-300"
            >
              {t("appointment")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
