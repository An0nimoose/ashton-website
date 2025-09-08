import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../[locale]/globals.css";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingActionBar } from "@/components/FloatingActionBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import GlobalAnimator from "@/components/GlobalAnimator";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  const isFa = locale === "fa";

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Allura&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans antialiased ${isFa ? "lang-fa" : ""}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TopBar />
          <Header />
          <GlobalAnimator>{children}</GlobalAnimator>
          <Footer />
          <FloatingActionBar />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
