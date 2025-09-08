"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  Dialog,
} from "@headlessui/react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronRight,
  FiArrowLeft,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

interface Item {
  name: string;
  href: string;
  imageSrc?: string;
}
interface NavLink {
  name: string;
  type: "images" | "links" | "links_nested";
  items: Item[];
  submenu?: {
    name: string;
    items: Item[];
  };
}

const navLinks: NavLink[] = [
  {
    name: "Home",
    type: "images",
    items: Array.from({ length: 10 }, (_, i) => ({
      name: `Homepage ${i + 1}`,
      href: `/home-${i + 1}`,
      imageSrc: `/headerImages/${i + 1}.jpg`,
    })),
  },
  {
    name: "Pages",
    type: "links",
    items: [
      { name: "About Us 1", href: "#" },
      { name: "About Us 2", href: "#" },
      { name: "About Us 3", href: "#" },
      { name: "Contact Us 1", href: "#" },
      { name: "Contact Us 2", href: "#" },
      { name: "Contact Us 3", href: "#" },
      { name: "Gallery", href: "gallery" },
      { name: "Shop", href: "#" },
    ],
  },
  {
    name: "Practice Areas",
    type: "links",
    items: [
      { name: "Practice Areas 1", href: "#" },
      { name: "Practice Areas 2", href: "#" },
      { name: "Practice Areas 3", href: "practice-areas-3" },
    ],
  },
  {
    name: "Attorney",
    type: "links",
    items: [
      { name: "Attorney", href: "#" },
      { name: "Single Attorney", href: "#" },
    ],
  },
  {
    name: "Case Studies",
    type: "links_nested",
    items: [
      { name: "Portfolio Classic", href: "#" },
      { name: "Portfolio Grid", href: "#" },
      { name: "Portfolio Grid Overlay", href: "portfolio-grid-overlay" },
      { name: "Portfolio 3D Overlay", href: "#" },
      { name: "Portfolio Contain", href: "#" },
      { name: "Portfolio Carousel", href: "#" },
    ],
    submenu: {
      name: "Columns",
      items: [
        { name: "Portfolio 2 Columns", href: "#" },
        { name: "Portfolio 3 Columns", href: "#" },
        { name: "Portfolio 4 Columns", href: "#" },
      ],
    },
  },
  {
    name: "Blog",
    type: "links",
    items: [
      { name: "Blog Grid", href: "#" },
      { name: "Blog Grid Overlay", href: "#" },
      { name: "Blog Metro", href: "#" },
      { name: "Blog Metro Overlay", href: "#" },
      { name: "Blog Classic", href: "#" },
      { name: "Blog List", href: "#" },
    ],
  },
];

export const Header = () => {
  const t = useTranslations("Layout");
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [closeTimeoutId, setCloseTimeoutId] = useState<NodeJS.Timeout | null>(
    null
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<NavLink | null>(null);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => setIsScrolled(window.scrollY > 35);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHomePage]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      const timer = setTimeout(() => setActiveSubmenu(null), 300);
      return () => clearTimeout(timer);
    }
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (menuName: string) => {
    if (closeTimeoutId) {
      clearTimeout(closeTimeoutId);
      setCloseTimeoutId(null);
    }
    setHoveredMenu(menuName);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setHoveredMenu(null);
    }, 150);
    setCloseTimeoutId(id);
  };

  const isTransparent = isHomePage && !isScrolled;

  const headerClasses = `sticky top-0 w-full z-50 transition-all duration-300 ${
    isTransparent ? "bg-transparent" : "bg-white shadow-md"
  }`;

  const linkColor = isTransparent ? "text-white" : "text-gray-800";

  const menuVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  return (
    <header className={headerClasses}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt={t("logoAlt")}
                width={150}
                height={60}
                className={!isTransparent ? "invert" : ""}
              />
            </Link>
          </div>

          <nav
            className="hidden md:flex space-x-1"
            onMouseLeave={handleMouseLeave}
          >
            {navLinks.map((link) => (
              <Popover
                key={link.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.name)}
              >
                <PopoverButton
                  className={`px-4 py-2 rounded-md font-semibold flex items-center gap-1 focus:outline-none ${linkColor} hover:text-accent`}
                >
                  {link.name} <FiChevronDown className="w-4 h-4" />
                </PopoverButton>

                <Transition
                  as={Fragment}
                  show={hoveredMenu === link.name}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel className="absolute z-10 left-1/2 -translate-x-1/2 mt-3 p-4 bg-white rounded-lg shadow-xl">
                    {link.type === "images" && (
                      <div className="w-[60vw] max-w-5xl grid grid-cols-5 gap-4">
                        {link.items.map(
                          (item) =>
                            item.imageSrc && (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block group"
                              >
                                <div className="overflow-hidden rounded-md">
                                  <Image
                                    src={item.imageSrc}
                                    alt={item.name}
                                    width={200}
                                    height={150}
                                    className="group-hover:scale-110 transition-transform duration-300"
                                  />
                                </div>
                                <h4 className="mt-2 text-sm font-semibold text-gray-800 group-hover:text-accent">
                                  {item.name}
                                </h4>
                              </Link>
                            )
                        )}
                      </div>
                    )}
                    {link.type === "links" && (
                      <div className="w-56">
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block p-2 text-gray-800 rounded-md hover:bg-gray-100 hover:text-accent"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    {link.type === "links_nested" && (
                      <div className="w-60">
                        <ul>
                          {link.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block p-2 text-gray-800 rounded-md hover:bg-gray-100 hover:text-accent"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                          {link.submenu && (
                            <li className="relative group">
                              <a
                                href="#"
                                className="p-2 text-gray-800 rounded-md hover:bg-gray-100 hover:text-accent flex justify-between items-center"
                              >
                                {link.submenu.name}
                                <FiChevronRight className="w-4 h-4" />
                              </a>
                              <div className="absolute left-full top-0 mt-[-8px] ml-1 p-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
                                <ul>
                                  {link.submenu.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.href}
                                        className="block p-2 text-gray-800 rounded-md hover:bg-gray-100 hover:text-accent"
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </PopoverPanel>
                </Transition>
              </Popover>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href={`tel:${t("phone")}`}
              className={`font-bold text-2xl px-6 py-2 rounded-md transition-colors ${
                isScrolled ? "text-accent" : "text-white hover:text-accent"
              }`}
            >
              {t("phone")}
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 rounded-md ${linkColor}`}
              aria-label={t("openMenu")}
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <Transition show={isMobileMenuOpen} as={Fragment}>
        <Dialog
          onClose={() => setIsMobileMenuOpen(false)}
          className="relative z-50 md:hidden"
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 left-0 w-full max-w-sm bg-white p-6 overflow-y-auto">
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                  aria-label={t("closeMenu")}
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col justify-center h-full">
                <AnimatePresence mode="wait">
                  {!activeSubmenu ? (
                    <motion.div
                      key="main-menu"
                      variants={menuVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ul className="space-y-4">
                        {navLinks.map((link) => (
                          <li key={link.name}>
                            <button
                              onClick={() => setActiveSubmenu(link)}
                              className="text-2xl font-semibold text-gray-800 hover:text-accent w-full text-left p-2"
                            >
                              {link.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="submenu"
                      variants={menuVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="space-y-4">
                        <button
                          onClick={() => setActiveSubmenu(null)}
                          className="flex items-center gap-2 text-lg font-semibold text-gray-500 hover:text-gray-900 mb-4"
                        >
                          <FiArrowLeft /> {t("back")}
                        </button>

                        <ul className="space-y-4 pt-2">
                          {activeSubmenu.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block p-2 text-2xl font-semibold text-gray-800 rounded-md hover:text-accent"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                          {activeSubmenu.submenu &&
                            activeSubmenu.submenu.items.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  className="block p-2 text-2xl font-semibold text-gray-800 rounded-md hover:text-accent"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
};
