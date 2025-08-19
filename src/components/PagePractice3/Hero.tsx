import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white">
      <Image
        src="/practiceAreas3/hero.jpg"
        alt="Law professionals in a meeting"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 text-center">
        <p className="text-sm font-bold uppercase tracking-widest">
          OUR SERVICES
        </p>
        <h1 className="mt-4 text-5xl md:text-7xl font-bold">Practice Areas</h1>
      </div>
    </section>
  );
};

export default Hero;
