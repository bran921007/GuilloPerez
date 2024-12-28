"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative h-[80vh] mb-8">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80"
          alt="Guillermo Pérez en su estudio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">
          Guillermo Pérez
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200">
          Fundador de D&apos;Guillermo Galeria y artista visionario que ha dedicado su vida
          a transformar el panorama artístico contemporáneo.
        </p>
        <Button 
          variant="outline" 
          size="lg" 
          className="text-white border-white hover:bg-white/20"
          onClick={scrollToContent}
        >
          Explorar Biografía <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}