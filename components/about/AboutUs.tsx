"use client";

import { Separator } from "@/components/ui/separator";
import { History } from "./sections/History";
import { Mission } from "./sections/Mission";
import { Team } from "./sections/Team";
import { Achievements } from "./sections/Achievements";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";

export function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-6">Sobre Nosotros</h1>
      
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        D&apos;Guillermo Galeria es más que un espacio de arte; somos un puente entre artistas 
        excepcionales y amantes del arte, creando experiencias únicas que celebran la creatividad 
        y la expresión artística.
      </p>

      <Separator className="my-12" />

      <History />
      <Mission />
      <Team />
      {/* <Achievements /> */}
      <Testimonials />
      <Contact />
    </div>
  );
}