"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const upcomingExhibitions = [
  {
    id: 1,
    title: "Horizontes Digitales",
    artist: "Ana Martínez",
    date: "Julio - Agosto 2024",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80",
    description: "Una exploración de la intersección entre el arte tradicional y las nuevas tecnologías."
  },
  {
    id: 2,
    title: "Ecos de la Naturaleza",
    artist: "Roberto Silva",
    date: "Septiembre - Octubre 2024",
    image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?auto=format&fit=crop&q=80",
    description: "Serie fotográfica que captura la belleza y fragilidad de nuestros ecosistemas."
  },
  {
    id: 3,
    title: "Memorias Colectivas",
    artist: "Laura González",
    date: "Noviembre - Diciembre 2024",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80",
    description: "Instalación multimedia que explora la memoria cultural y la identidad."
  }
];

export function UpcomingExhibitions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {upcomingExhibitions.map((exhibition) => (
        <Card key={exhibition.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-[4/3]">
              <img
                src={exhibition.image}
                alt={exhibition.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                Próximamente
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium mb-1">{exhibition.title}</h3>
              <p className="text-primary mb-2">{exhibition.artist}</p>
              <p className="text-sm text-muted-foreground mb-4">{exhibition.date}</p>
              <p className="text-muted-foreground mb-6">{exhibition.description}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline" className="flex-1">
                  <Link href={`/exhibitions/${exhibition.id}`}>
                    Más Información
                  </Link>
                </Button>
                <Button className="flex-1">
                  Recordatorio
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}