"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Image {
  url: string;
  alt: string;
  title: string;
}

interface LightboxProps {
  images: Image[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/20"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={onPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <div className="max-w-5xl max-h-[80vh] px-4">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-[80vh] object-contain"
        />
        <div className="text-center text-white mt-4">
          <h3 className="text-xl font-medium">{images[currentIndex].title}</h3>
          <p className="text-sm text-gray-300 mt-1">{images[currentIndex].alt}</p>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={onNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}