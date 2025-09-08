import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Layout");

  return (
    <footer className="bg-footer-background text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 py-20">
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt={t("logoAlt")}
              width={180}
              height={72}
              className="h-auto"
            />
          </div>

          <div className="flex flex-1 flex-col lg:max-w-4xl">
            <div className="w-full mb-16">
              <form>
                <input
                  type="email"
                  placeholder={t("newsletterPlaceholder")}
                  className="w-full bg-white text-gray-900 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="bg-accent text-white px-8 py-3 font-semibold rounded-full hover:opacity-90 transition-opacity mt-4"
                >
                  {t("subscribe")}
                </button>
              </form>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-8 text-white font-semibold text-sm">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/practice-areas"
                    className="hover:text-accent transition-colors"
                  >
                    {t("links.practiceAreas")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/attorney"
                    className="hover:text-accent transition-colors"
                  >
                    {t("links.attorney")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-accent transition-colors"
                  >
                    {t("links.blog")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-accent transition-colors"
                  >
                    {t("links.contact")}
                  </Link>
                </li>
              </ul>

              <ul className="space-y-4">
                <li>
                  <Link
                    href="/case-studies"
                    className="hover:text-accent transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="hover:text-accent transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-accent transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>

              <ul className="space-y-4">
                <li>
                  <Link
                    href="/shop"
                    className="hover:text-accent transition-colors"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="hover:text-accent transition-colors"
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my-account"
                    className="hover:text-accent transition-colors"
                  >
                    My Account
                  </Link>
                </li>
              </ul>

              <div>
                <h4 className="font-bold text-white mb-3">
                  {t("cities.ny.title")}
                </h4>
                <address className="not-italic text-sm leading-relaxed text-neutral-400">
                  {t("cities.ny.addressLine1")}
                  <br />
                  {t("cities.ny.cityLine")}
                  <br />
                  {t("cities.ny.postal")}
                </address>
              </div>

              <div>
                <h4 className="font-bold text-white mb-3">
                  {t("cities.sf.title")}
                </h4>
                <address className="not-italic text-sm leading-relaxed text-neutral-400">
                  {t("cities.sf.addressLine1")}
                  <br />
                  {t("cities.sf.cityLine")}
                  <br />
                  {t("cities.sf.postal")}
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white/20 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-neutral-400">
            <p className="mb-4 sm:mb-0">{t("copyright")}</p>
            <div className="flex items-center space-x-8">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                {t("links.privacy")}
              </Link>
              <Link
                href="/legal"
                className="hover:text-white transition-colors"
              >
                {t("links.legal")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
