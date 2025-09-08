import Image from "next/image";
import { useTranslations, useMessages } from "next-intl";

export const ConsultationSection = () => {
  const t = useTranslations("ConsultationSection");
  const msgs = useMessages();
  return (
    <section className="relative bg-accent-secondary py-8 lg:py-16 overflow-hidden">
      <div
        className="
    absolute
    w-50
    h-50
    opacity-70
    z-20

    /* Mobile */
    top-1/2
    right-1/10
    transform
    -translate-y-1/2

    /* Desktop */
    lg:top-18
    lg:right-20
    lg:transform-none
  "
      >
        <Image
          src="/appointmentSection/label.png"
          alt="Company Stamp"
          layout="fill"
          objectFit="contain"
          className="animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 items-center lg:gap-16">
        <div className="lg:col-span-2 flex justify-center lg:justify-start px-4 sm:px-6 lg:pl-24 mb-8 lg:mb-0">
          <div className="relative w-full max-w-sm sm:max-w-md lg:w-[450px] lg:h-[580px] h-[450px]">
            <div className="absolute top-[-2rem] left-[-2rem] w-24 h-24 overflow-hidden rounded-2xl">
              <Image
                src="/appointmentSection/pattern.png"
                alt="Decorative pattern"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/appointmentSection/1.jpg"
                alt="Woman on the phone"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 relative text-white px-4 sm:px-12 lg:pl-24 lg:pr-30 pb-30 lg:pb-0">
          <div className="relative z-10 text-center lg:text-left">
            <p className="font-semibold text-accent mb-2">{t("expertises")}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t("title")}
            </h2>
            <p className="text-neutral-200 mb-8">{t("desc")}</p>

            <form action="#" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t("form.name")}
                  className="bg-white text-gray-900 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("form.email")}
                  className="bg-white text-gray-900 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  name="service"
                  className="bg-white text-gray-900 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-accent appearance-none"
                >
                  {(() => {
                    const arr = (msgs.ConsultationSection?.services ??
                      []) as string[];
                    return arr.map((service) => (
                      <option key={service}>{service}</option>
                    ));
                  })()}
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("form.phone")}
                  className="bg-white text-gray-900 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t("form.message")}
                  className="w-full bg-white text-gray-900 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:opacity-90 text-white font-semibold p-4 rounded-full transition-opacity"
                >
                  {t("form.submit")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
