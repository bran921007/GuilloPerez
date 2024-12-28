"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80"
          alt="Interior de la Galería"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Donde el Arte se Encuentra con la Elegancia
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Experimente obras maestras contemporáneas en nuestro espacio curado
          </p>
          <Link 
            href="#collections" 
            className="inline-block bg-white text-black px-8 py-3 rounded-none hover:bg-gray-100 transition-colors duration-200"
          >
            Ver Colecciones
          </Link>
        </div>
      </div>
    </section>
  );
}