"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMessages } from "next-intl";

const PortfolioGrid = () => {
  const [activeSlug, setActiveSlug] = useState<string>("all");
  const msgs = useMessages();

  const { filters, filteredItems } = useMemo(() => {
    const items = (msgs.PortfolioGrid?.items ?? []) as {
      id: number;
      imgSrc: string;
      title: string;
      subtitle: string;
      categories: string[];
    }[];
    const fltrs = (msgs.PortfolioGrid?.filters ?? []) as {
      label: string;
      slug: string;
    }[];
    const filtered =
      activeSlug === "all"
        ? items
        : items.filter((item) => item.categories.includes(activeSlug));
    return { filters: fltrs, filteredItems: filtered };
  }, [msgs, activeSlug]);

  return (
    <section className="bg-white py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-12">
          {filters.map((f) => (
            <button
              key={f.slug}
              onClick={() => setActiveSlug(f.slug)}
              aria-pressed={activeSlug === f.slug}
              className={`font-semibold text-lg transition-colors ${
                activeSlug === f.slug
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.a
                href="#"
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                className="relative block w-full aspect-[4/3] overflow-hidden rounded-lg group"
                data-categories={item.categories.join(" ")}
              >
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  priority={item.id <= 3}
                />

                <div className="absolute inset-0 bg-accent-secondary/90 p-8 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-1">{item.subtitle}</p>

                  <span className="absolute top-4 left-1/2 -translate-x-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
                  <span className="absolute top-4 right-4 w-px h-0 bg-white transition-all duration-300 delay-300 group-hover:h-[calc(100%-2rem)]"></span>
                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-px bg-white transition-all duration-300 delay-600 group-hover:w-[calc(100%-2rem)]"></span>
                  <span className="absolute bottom-4 left-4 w-px h-0 bg-white transition-all duration-300 delay-900 group-hover:h-[calc(100%-2rem)]"></span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
