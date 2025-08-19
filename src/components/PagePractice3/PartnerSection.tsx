"use client";

import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const accordionItems = [
  {
    title: "Mergers & Acquisitions",
    content:
      "Lawyer texting doesn't just benefit clients. It can also enhance overall efficiency at your firm by speeding up responses from clients.",
  },
  {
    title: "Health Care & Medical",
    content:
      "Consequently, having more positive online reviews means you are more likely to show up where people are looking to.",
  },
  {
    title: "National Security Law",
    content:
      "Lawyer texting can be an effective way to communicate with clients, but it’s also more complex than texting.",
  },
];

const serviceCards = [
  {
    title: "Criminal Law",
    iconSrc: "/practiceAreas3/partnerSection/1.png",
  },
  {
    title: "Injury Compensation",
    iconSrc: "/practiceAreas3/partnerSection/2.png",
  },
  {
    title: "Wills & Estates",
    iconSrc: "/practiceAreas3/partnerSection/3.png",
  },
  {
    title: "Comercial Litigation",
    iconSrc: "/practiceAreas3/partnerSection/4.png",
  },
];

const PartnerSection = () => {
  return (
    <section className="relative bg-white pt-24 pb-12">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gray-50/70 rounded-b-[50%]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-semibold text-gray-600">PARTNERS AT ASHTON</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Committed to Helping Our Clients Succeed
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
                  src={card.iconSrc}
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
