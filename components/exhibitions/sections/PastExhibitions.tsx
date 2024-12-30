"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pastExhibitions = [
  {
    id: 1,
    title: "Centenario Guillo Pérez",
    artist: "Guillo Pérez",
    date: "2023",
    image: "https://guillermo-galeria.s3.us-east-1.amazonaws.com/centenario-guilloperez.jpeg",
    description: "Exposición conmemorativa celebrando los 100 años del legado artístico de Guillo Pérez, presentando una retrospectiva de su vida y obra."
  },
  {
    id: 2,
    title: "Lanzamiento de la Quinta Temporada de Indómita",
    artist: "Colección Homenaje",
    date: "15 de agosto 2023",
    image: "https://ohmagazinerd.com/wp-content/uploads/2023/08/image1-scaled.jpeg",
    description: "Una fusión única entre arte y moda contemporánea, donde diseñadores destacados como Hippólito, Jusef Sánchez x Diego Alonzo, Yanier, Michelle Reynoso, Modern Monarchie y Anna Redman Pablo reinterpretaron el legado artístico de Guillo Pérez. La exposición, celebrada en Galería Indómita de Santo Domingo, presentó colecciones exclusivas inspiradas en la obra del maestro."
  },
  {
    id: 3,
    title: "Feria del Coco 2022",
    artist: "Guillo Pérez",
    date: "Julio 2022",
    image: "./feria-coco.jpg",
    description: "Exhibición especial durante la Feria del Coco, presentando obras selectas en el corazón de Cabrera."
  },
  {
    id: 4,
    title: "Exhibición Parque de Cabrera",
    artist: "Guillo Pérez",
    date: "Julio 2022",
    image: "./parque-cabrera.jpg",
    description: "Muestra artística al aire libre en el Parque Central de Cabrera, acercando el arte a la comunidad."
  },
];

export function PastExhibitions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pastExhibitions.map((exhibition) => (
        <Card key={exhibition.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-[4/3]">
              <img
                src={exhibition.image}
                alt={exhibition.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium mb-1">{exhibition.title}</h3>
              <p className="text-primary mb-2">{exhibition.artist}</p>
              <p className="text-sm text-muted-foreground mb-4">{exhibition.date}</p>
              <p className="text-muted-foreground mb-6">{exhibition.description}</p>
              {/* <Button asChild variant="outline" className="w-full">
                <Link href={`/exhibitions/${exhibition.id}`}>
                  Ver Detalles
                </Link>
              </Button> */}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}