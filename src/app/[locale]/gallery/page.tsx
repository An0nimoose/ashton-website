import GalleryGrid from "@/components/PageGallery/GalleryGrid";
import GalleryMasonry from "@/components/PageGallery/GalleryMasonry";
import HorizontalGallery from "@/components/PageGallery/HorizontalGallery";
import JustifiedGallery from "@/components/PageGallery/JustifiedGallery";

const gridImages = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/galleryImages/grid/${i + 1}.jpg`,
  alt: `Description for grid image ${i + 1}`,
}));

const masonryImages = [
  {
    id: 1,
    src: "/galleryImages/masonry/1.jpg",
    alt: "Masonry Image 1",
    width: 500,
    height: 500,
  },
  {
    id: 2,
    src: "/galleryImages/masonry/2.jpg",
    alt: "Masonry Image 2",
    width: 500,
    height: 500,
  },
  {
    id: 3,
    src: "/galleryImages/masonry/3.jpg",
    alt: "Masonry Image 3",
    width: 500,
    height: 500,
  },
  {
    id: 4,
    src: "/galleryImages/masonry/4.jpg",
    alt: "Masonry Image 4",
    width: 500,
    height: 500,
  },
  {
    id: 5,
    src: "/galleryImages/masonry/5.jpg",
    alt: "Masonry Image 5",
    width: 500,
    height: 500,
  },
  {
    id: 6,
    src: "/galleryImages/masonry/6.jpg",
    alt: "Masonry Image 6",
    width: 500,
    height: 500,
  },
  {
    id: 7,
    src: "/galleryImages/masonry/7.jpg",
    alt: "Masonry Image 7",
    width: 500,
    height: 500,
  },
  {
    id: 8,
    src: "/galleryImages/masonry/8.jpg",
    alt: "Masonry Image 8",
    width: 500,
    height: 500,
  },
  {
    id: 9,
    src: "/galleryImages/masonry/9.jpg",
    alt: "Masonry Image 9",
    width: 500,
    height: 500,
  },
  {
    id: 10,
    src: "/galleryImages/masonry/10.jpg",
    alt: "Masonry Image 10",
    width: 500,
    height: 500,
  },
  {
    id: 11,
    src: "/galleryImages/masonry/11.jpg",
    alt: "Masonry Image 11",
    width: 500,
    height: 500,
  },
  {
    id: 12,
    src: "/galleryImages/masonry/12.jpg",
    alt: "Masonry Image 12",
    width: 500,
    height: 500,
  },
  {
    id: 13,
    src: "/galleryImages/masonry/13.jpg",
    alt: "Masonry Image 13",
    width: 500,
    height: 500,
  },
];

const horizontalImages = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  src: `/galleryImages/horizontal/${i + 1}.jpg`,
  alt: `Horizontal Gallery Image ${i + 1}`,
  width: 800,
  height: 450,
}));

const justifiedImages = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  src: `/galleryImages/justified/${i + 1}.jpg`,
  alt: `Justified Gallery Image ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <main>
      <GalleryGrid images={gridImages} />
      <GalleryMasonry images={masonryImages} />
      <HorizontalGallery images={horizontalImages} />
      <JustifiedGallery images={justifiedImages} />
    </main>
  );
}
