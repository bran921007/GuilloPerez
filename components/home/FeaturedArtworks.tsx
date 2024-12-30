"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const artworks = [
  {
    title: "Carretas y Bueyes",
    year: "1976",
    image: "https://guillermo-galeria.s3.us-east-1.amazonaws.com/obras/Guillo_Perez_Carretas_y_Bueyes_1976.jpg"
  },
  {
    title: "Metamorfosis",
    year: "1965",
    image: "https://guillermo-galeria.s3.us-east-1.amazonaws.com/obras/Guillo_Perez_Metamorfosis_1965.jpg"
  },
  {
    title: "Paisaje Anaranjado",
    year: "",
    image: "https://guillermo-galeria.s3.us-east-1.amazonaws.com/obras/Guillo_Perez_Paisaje_Anaranjado.jpg"
  },
  {
    title: "Visión Poética del Paisaje",
    year: "",
    image: "https://guillermo-galeria.s3.us-east-1.amazonaws.com/obras/Guillo_Perez_Vision_Poetica_del_Paisaje.jpg"
  }
];

export function FeaturedArtworks() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Obras Destacadas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nuestra selección de obras maestras del reconocido artista Guillo Pérez
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artworks.map((artwork, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{artwork.title}</h3>
                  {artwork.year && (
                    <p className="text-muted-foreground mb-4">{artwork.year}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/collection">
              Ver Colección Completa
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}