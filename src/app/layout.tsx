"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Loader } from "@/components/Loader";

import { DM_Sans, Allura } from "next/font/google";
import "./globals.css";

import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingActionBar } from "@/components/FloatingActionBar";
import { ScrollToTop } from "@/components/ScrollToTop";

import GlobalAnimator from "@/components/GlobalAnimator";

const dMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${dMSans.variable} ${allura.variable} font-sans antialiased`}
      >
        <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

        {!isLoading && (
          <>
            <TopBar />
            <Header />
            <GlobalAnimator>{children}</GlobalAnimator>
            <Footer />
            <FloatingActionBar />
            <ScrollToTop />
          </>
        )}
      </body>
    </html>
  );
}
