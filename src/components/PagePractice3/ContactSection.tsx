import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      className="relative py-24 sm:py-32 bg-cover bg-center"
      style={{
        backgroundImage: "url('/practiceAreas3/contactSection/justice-bg.png')",
      }}
    >
      <div className="relative mx-auto max-w-2xl text-center px-6">
        <Image
          src="/practiceAreas3/contactSection/label.png"
          alt="Attorney Seal"
          width={250}
          height={250}
          className="absolute bottom-30 right-10 animate-spin opacity-30 invert"
          style={{ animationDuration: "20s" }}
        />

        <p className="font-semibold text-accent uppercase tracking-wider">
          Free Case Evaluation
        </p>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
          Contact Us Today
        </h2>
        <a
          href="tel:124545635"
          className="mt-6 block text-3xl font-semibold text-gray-700 hover:text-gray-900 transition-colors"
        >
          (1)245-45635
        </a>
        <div className="mt-10">
          <Link
            href="#"
            className="inline-block rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white shadow-md transition-colors"
          >
            Make an appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
