"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pastExhibitions = [
  {
    id: 1,
    title: "Reflejos del Tiempo",
    artist: "Carlos Mendoza",
    date: "Enero - Marzo 2024",
    image: "https://images.unsplash.com/photo-1577083552425-4c128943bf84?auto=format&fit=crop&q=80",
    description: "Una retrospectiva de la evolución del arte contemporáneo a través de las décadas."
  },
  {
    id: 2,
    title: "Naturaleza Abstracta",
    artist: "María Torres",
    date: "Octubre - Diciembre 2023",
    image: "https://images.unsplash.com/photo-1581079288675-14d05d0e9f9c?auto=format&fit=crop&q=80",
    description: "Exploración de formas orgánicas y patrones naturales en el arte abstracto."
  },
  {
    id: 3,
    title: "Memorias Urbanas",
    artist: "Pablo Sánchez",
    date: "Julio - Septiembre 2023",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&q=80",
    description: "Documentación artística de la transformación de paisajes urbanos."
  }
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
              <Button asChild variant="outline" className="w-full">
                <Link href={`/exhibitions/${exhibition.id}`}>
                  Ver Detalles
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}