import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  imageSrc: string;
  href: string;
}

export const PracticeAreaCard = ({ title, imageSrc, href }: CardProps) => {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end justify-end bg-opacity-10 p-4">
          <Link
            href={href}
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-all hover:scale-105 hover:bg-accent hover:text-white active:scale-100"
          >
            Learn More
          </Link>
        </div>
      </div>
      <h4 className="mt-4 font-bold text-white">{title}</h4>
    </div>
  );
};