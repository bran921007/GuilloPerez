"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import Link from "next/link";

const exhibitions = [
  {
    id: 1,
    title: "Metamorfosis Digital",
    artist: "Elena Rodríguez",
    startDate: "15 Mayo, 2024",
    endDate: "30 Junio, 2024",
    location: "Sala Principal",
    description: "Una exploración inmersiva de la intersección entre el arte tradicional y la tecnología digital. La artista presenta una serie de instalaciones que transforman obras clásicas en experiencias interactivas.",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80",
    admission: "Entrada General: $15 | Estudiantes: $8"
  },
  {
    id: 2,
    title: "Ecos de la Naturaleza",
    artist: "Carlos Mendoza & María Torres",
    startDate: "10 Junio, 2024",
    endDate: "25 Julio, 2024",
    location: "Galería Este",
    description: "Una colaboración única que explora la relación entre el ser humano y la naturaleza a través de esculturas orgánicas y fotografías de gran formato.",
    image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?auto=format&fit=crop&q=80",
    admission: "Entrada General: $12 | Estudiantes: $6"
  },
  {
    id: 3,
    title: "Memorias Urbanas",
    artist: "Pablo Sánchez",
    startDate: "5 Julio, 2024",
    endDate: "20 Agosto, 2024",
    location: "Sala de Exposiciones Temporales",
    description: "Una retrospectiva de la evolución de los paisajes urbanos a través de pinturas al óleo y técnicas mixtas que capturan la esencia de las ciudades en transformación.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80",
    admission: "Entrada General: $10 | Estudiantes: $5"
  }
];

export function UpcomingExhibitions() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Próximas Exposiciones</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra nuestra emocionante programación de exposiciones para los próximos meses.
            Cada exhibición ha sido cuidadosamente curada para ofrecer experiencias artísticas únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((exhibition) => (
            <Card key={exhibition.id} className="overflow-hidden">
              <div className="aspect-[16/9] relative">
                <img
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl mb-2">{exhibition.title}</CardTitle>
                <p className="text-primary font-medium">{exhibition.artist}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Fechas</p>
                      <p className="text-sm text-muted-foreground">
                        {exhibition.startDate} - {exhibition.endDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Ubicación</p>
                      <p className="text-sm text-muted-foreground">{exhibition.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Ticket className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Admisión</p>
                      <p className="text-sm text-muted-foreground">{exhibition.admission}</p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {exhibition.description}
                </p>

                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <Link href={`/exhibitions/${exhibition.id}`}>
                      Más Información
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Reservar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}