import Image from "next/image";
import Link from "next/link";

const firmLogos = [
  { src: "/firmLogos/1.png", alt: "Cacciola & gavel Law" },
  { src: "/firmLogos/2.png", alt: "The Justice Law Firm" },
  { src: "/firmLogos/3.png", alt: "Peterson Baker Attorneys" },
  { src: "/firmLogos/4.png", alt: "Law Firm" },
];

const FreeConsultation = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-gray-600">
            We&apos;ve worked with Global Clients
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
                Free Consultation
              </h2>
            </div>

            <div>
              <p className="text-lg text-gray-700">
                In a professional context it often happens that private or
                corporate clients consider a publication to be made and
                presented with the actual content still not being ready. Think
                of a news blog.
              </p>
              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-block rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white transition-all"
                >
                  Make an appointment
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
