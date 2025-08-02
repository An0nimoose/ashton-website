"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Loader = () => {
  const logoVariants = {
    hidden: {
      opacity: 0.5,
      clipPath: "inset(100% 0 0 0)",
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0% 0 0 0)",
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Image
        src="/logo.png"
        alt="Ashton Logo"
        width={200}
        height={80}
        priority
        className="invert absolute opacity-25"
      />

      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <Image
          src="/logo.png"
          alt="Ashton Logo"
          width={200}
          height={80}
          priority
          className="invert"
        />
      </motion.div>
    </motion.div>
  );
};
