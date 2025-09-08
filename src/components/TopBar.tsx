"use client";

import Link from "next/link";
import { FiPhone, FiClock, FiMail } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const TopBar = () => {
  const t = useTranslations("Layout");
  const pathname = usePathname() || "/";

  const buildLocaleHref = useMemo(() => {
    const search = typeof window !== "undefined" ? window.location.search : "";
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    return (locale: string) => {
      const segments = pathname.split("/").filter(Boolean);
      const rest =
        segments.length && ["en", "fa"].includes(segments[0])
          ? segments.slice(1)
          : segments;
      const restPath = rest.length ? `/${rest.join("/")}` : "";
      return `/${locale}${restPath}${search}${hash}`;
    };
  }, [pathname]);

  return (
    <div className="bg-white text-sm text-gray-600 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <FiPhone className="w-4 h-4" />
              <span>{t("phone")}</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <FiClock className="w-4 h-4" />
              <span>{t("hours")}</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={`mailto:${t("email")}`}
              className="hidden md:flex items-center gap-2 hover:text-accent"
            >
              <FiMail className="w-4 h-4" />
              <span>{t("email")}</span>
            </a>

            <div className="flex items-center space-x-4 font-semibold">
              <Link href={buildLocaleHref("fa")} className="hover:text-accent">
                FA
              </Link>
              <Link href={buildLocaleHref("en")} className="text-gray-900">
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
