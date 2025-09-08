import Image from "next/image";
import Link from "next/link";
import { useMessages } from "next-intl";

const FreeConsultation = () => {
  const msgs = useMessages();
  const firmLogos = (msgs.PortfolioGrid?.freeConsultation?.firmLogos ?? []) as {
    src: string;
    alt: string;
  }[];
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-gray-600">
            {msgs.PortfolioGrid?.freeConsultation?.eyebrow}
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
            {firmLogos.map((logo) => (
              <div key={logo.src} className="flex justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-8 rounded-2xl bg-accent/20 p-12 lg:p-8 bg-cover bg-center hover:bg-white hover:shadow-2xl transition-all"
          style={{
            backgroundImage:
              "url('/portfolioGridOverlay/consultation/justice-bg.png')",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mx-20">
                {msgs.PortfolioGrid?.freeConsultation?.title}
              </h2>
            </div>

            <div>
              <p className="text-lg text-gray-700">
                {msgs.PortfolioGrid?.freeConsultation?.text}
              </p>
              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-block rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white transition-all"
                >
                  {msgs.PortfolioGrid?.freeConsultation?.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;
