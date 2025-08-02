import Image from "next/image";

const services = [
  "Mergers & Acquisitions",
  "Dispute Resolution",
  "Pensions & Benefits",
  "Health Care",
  "National Security Law",
];

export const ConsultationSection = () => {
  return (
    <section className="relative bg-white py-2 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 bottom-0 right-0 w-[60%] bg-accent-secondary"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-accent-secondary"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 items-center lg:gap-16">
        <div className="lg:col-span-2 flex justify-center lg:justify-start px-4 sm:px-6 lg:pl-24">
          <div className="relative w-[350px] h-[450px] lg:w-[450px] lg:h-[580px]">
            <div className="absolute top-[-2rem] left-[-2rem] w-24 h-24 overflow-hidden rounded-2xl">
              <Image
                src="/appointmentSection/pattern.png"
                alt="Decorative pattern"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative z-10 w-90 h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/appointmentSection/1.jpg"
                alt="Woman on the phone"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 relative text-white py-16 pl-8 sm:pl-12 lg:pl-24 pr-30">
          <div className="absolute top-8 right-10 w-50 h-50 opacity-70">
            <Image
              src="/appointmentSection/label.png"
              alt="Company Stamp"
              layout="fill"
              objectFit="contain"
              className="animate-spin"
              style={{ animationDuration: "20s" }}
            />
          </div>

          <div className="relative z-10">
            <p className="font-semibold text-accent mb-2">Our Expertises</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Free Consultation
            </h2>
            <p className="text-neutral-400 mb-8">
              We support businesses through periods of expansion, succession,
              and all other important transitions.
            </p>

            <form action="#" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="bg-white text-gray-900 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="bg-white text-gray-900 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  name="service"
                  className="bg-white text-gray-900 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accent appearance-none"
                >
                  {services.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="bg-white text-gray-900 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full bg-white text-gray-900 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:opacity-90 text-white font-semibold p-4 rounded-full transition-opacity"
                >
                  Make an appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};