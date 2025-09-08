import Image from "next/image";
import Link from "next/link";

interface Partner {
  name: string;
  role: string;
  imageSrc: string;
  href: string;
}

export const PartnersCard = ({ name, role, imageSrc, href }: Partner) => {
  return (
    <Link href={href} className="block group">
      <div className="overflow-hidden rounded-lg mb-4">
        <Image
          src={imageSrc}
          alt={`Photo of ${name}`}
          width={400}
          height={400}
          objectFit="cover"
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-sm text-neutral-400">{role}</p>
    </Link>
  );
};
