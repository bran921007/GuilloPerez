"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Palette } from "lucide-react";

export function History() {
  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-serif mb-6">Nuestra Historia</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Fundada en 1985 por el reconocido artista Guillermo Pérez, nuestra galería 
              comenzó como un pequeño espacio dedicado a artistas locales emergentes.
            </p>
            <p>
              A lo largo de más de tres décadas, nos hemos convertido en un referente en 
              el mundo del arte, expandiendo nuestra visión para incluir obras maestras 
              internacionales mientras mantenemos nuestro compromiso con el talento local.
            </p>
            <p>
              Hoy, D&apos;Guillermo Galeria es reconocida por su curaduría excepcional y 
              su papel en el desarrollo de la escena artística contemporánea.
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="aspect-square relative bg-secondary/50 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80"
                alt="Galería D'Guillermo en sus inicios"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <Palette className="w-8 h-8 mb-2" />
                <p className="text-sm">Establecida en 1985</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}