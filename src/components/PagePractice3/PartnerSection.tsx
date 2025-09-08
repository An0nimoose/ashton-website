"use client";

import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { useTranslations, useMessages } from "next-intl";

const PartnerSection = () => {
  const t = useTranslations("Practice3");
  const msgs = useMessages();

  const accordionItems = (msgs.Practice3?.partnerSection?.accordion ?? []) as {
    title: string;
    content: string;
  }[];
  const serviceCards = (msgs.Practice3?.partnerSection?.services ?? []) as {
    title: string;
    icon: string;
  }[];
  return (
    <section className="relative bg-white pt-24 pb-12">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gray-50/70 rounded-b-[50%]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-semibold text-gray-600">
              {t("partnerSection.eyebrow")}
            </p>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t("partnerSection.heading")}
            </h2>
          </div>

          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <Disclosure key={index} as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center p-5 text-left text-lg font-medium text-gray-800 bg-white rounded-full">
                      <span>{item.title}</span>
                      <FiChevronDown
                        className={`transform transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </Disclosure.Button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <Disclosure.Panel
                            static
                            className="px-5 pt-4 pb-6 text-gray-600"
                          >
                            {item.content}
                          </Disclosure.Panel>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="group bg-accent/10 backdrop-blur-2xl rounded-xl p-8 text-center transition-all duration-300 hover:bg-white hover:shadow-2xl"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={card.icon}
                  alt={`${card.title} icon`}
                  width={64}
                  height={64}
                  className="opacity-50 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
