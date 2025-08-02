"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

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
      { name: "Gallery", href: "#" },
      { name: "Shop", href: "#" },
    ],
  },
  {
    name: "Practice Areas",
    type: "links",
    items: [
      { name: "Practice Areas 1", href: "#" },
      { name: "Practice Areas 2", href: "#" },
      { name: "Practice Areas 3", href: "#" },
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
      { name: "Portfolio Grid Overlay", href: "#" },
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [closeTimeoutId, setCloseTimeoutId] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 35);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const headerClasses = `sticky top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? "bg-white shadow-md" : "bg-transparent"
  }`;
  const linkColor = isScrolled ? "text-gray-800" : "text-white";

  return (
    <header className={headerClasses}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Ashton Law Logo"
                width={150}
                height={60}
                className={isScrolled ? "invert" : ""}
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
                        {" "}
                        {link.items.map(
                          (item) =>
                            item.imageSrc && (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block group"
                              >
                                {" "}
                                <div className="overflow-hidden rounded-md">
                                  <Image
                                    src={item.imageSrc}
                                    alt={item.name}
                                    width={200}
                                    height={150}
                                    className="group-hover:scale-110 transition-transform duration-300"
                                  />
                                </div>{" "}
                                <h4 className="mt-2 text-sm font-semibold text-gray-800 group-hover:text-accent">
                                  {item.name}
                                </h4>{" "}
                              </Link>
                            )
                        )}{" "}
                      </div>
                    )}
                    {link.type === "links" && (
                      <div className="w-56">
                        {" "}
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block p-2 text-gray-800 rounded-md hover:bg-gray-100 hover:text-accent"
                          >
                            {item.name}
                          </Link>
                        ))}{" "}
                      </div>
                    )}
                    {link.type === "links_nested" && (
                      <div className="w-60">
                        {" "}
                        <ul>
                          {" "}
                          {link.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block p-2 text-gray-800 rounded-md hover:bg-gray-100 hover:text-accent"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}{" "}
                          {link.submenu && (
                            <li className="relative group">
                              {" "}
                              <a
                                href="#"
                                className="p-2 text-gray-800 rounded-md hover:bg-gray-100 hover:text-accent flex justify-between items-center"
                              >
                                {" "}
                                {link.submenu.name}{" "}
                                <FiChevronRight className="w-4 h-4" />{" "}
                              </a>{" "}
                              <div className="absolute left-full top-0 mt-[-8px] ml-1 p-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
                                {" "}
                                <ul>
                                  {" "}
                                  {link.submenu.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.href}
                                        className="block p-2 text-gray-800 rounded-md hover:bg-gray-100 hover:text-accent"
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}{" "}
                                </ul>{" "}
                              </div>{" "}
                            </li>
                          )}{" "}
                        </ul>{" "}
                      </div>
                    )}
                  </PopoverPanel>
                </Transition>
              </Popover>
            ))}
          </nav>

          <div>
            <Link
              href="tel:124545635"
              className={`font-bold text-2xl px-6 py-2 rounded-md transition-colors ${
                isScrolled ? "text-accent" : " text-white hover:text-accentl"
              }`}
            >
              (1)245-45635
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
