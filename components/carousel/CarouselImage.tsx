"use client";

interface Image {
  url: string;
  alt: string;
  title: string;
}

interface CarouselImageProps {
  image: Image;
  onClick: () => void;
}

export function CarouselImage({ image, onClick }: CarouselImageProps) {
  return (
    <div 
      className="min-w-full px-4 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-xl font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {image.title}
          </p>
        </div>
      </div>
    </div>
  );
}