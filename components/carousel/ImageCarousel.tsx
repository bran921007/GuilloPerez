"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Lightbox } from "./Lightbox";
import { CarouselImage } from "./CarouselImage";
import { lighthouses } from "@/lib/content/lighthouses";

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % lighthouses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + lighthouses.length) % lighthouses.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">Obras Destacadas</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {lighthouses.map((image, index) => (
                <CarouselImage
                  key={index}
                  image={image}
                  onClick={() => openLightbox(index)}
                />
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center mt-4 gap-2">
            {lighthouses.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  currentIndex === index ? "bg-primary" : "bg-primary/20"
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={lighthouses}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % lighthouses.length)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + lighthouses.length) % lighthouses.length)}
        />
      )}
    </section>
  );
}