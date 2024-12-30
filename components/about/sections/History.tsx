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
            D'Guillermo Galería & Enmarcados es una galería de arte ubicada en Cabrera, República Dominicana, dedicada a exhibir y promover las obras del maestro Guillo Pérez y de otros destacados pintores dominicanos.
             Fundada en 2002 por el propio Guillo Pérez y dirigido por Amalia Linares, directora de la galeria, ha servido como un espacio para la difusión de su legado artístico y para la promoción del arte dominicano en general.
            </p>
            <p>
            La galería ofrece una amplia variedad de pinturas en exhibición, que abarcan desde paisajes hasta retratos, reflejando la diversidad y riqueza del arte dominicano. Además, proporciona servicios de enmarcado, permitiendo a los visitantes adquirir y exhibir las obras de arte con la presentación adecuada.
            </p>
            <p>
            A lo largo de los años, D'Guillermo Galería ha participado en diversos eventos y exposiciones, contribuyendo significativamente a la escena artística local.
            </p>
            <p>
            D'Guillermo Galería & Enmarcados se ha consolidado como un referente en la promoción del arte dominicano, ofreciendo a los visitantes la oportunidad de explorar y adquirir obras de artistas locales, y contribuyendo al enriquecimiento cultural de la comunidad.
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="aspect-square relative bg-secondary/50 rounded-lg overflow-hidden">
              <img
                src="../galeria/galeria6.jpg"
                alt="Galería D'Guillermo en sus inicios"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <Palette className="w-8 h-8 mb-2" />
                <p className="text-sm">Establecida en 2002</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}