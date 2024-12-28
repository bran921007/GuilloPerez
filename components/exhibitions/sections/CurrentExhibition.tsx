"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export function CurrentExhibition() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80"
              alt="Exposición actual: Metamorfosis Digital"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
              En Exhibición
            </div>
          </div>
          
          <div className="p-8">
            <h2 className="text-3xl font-serif mb-2">Metamorfosis Digital</h2>
            <p className="text-xl text-primary mb-6">Elena Rodríguez</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <span>15 Mayo - 30 Junio, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span>Sala Principal</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span>Martes a Domingo, 10:00 - 18:00</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-8">
              Una exploración inmersiva de la intersección entre el arte tradicional 
              y la tecnología digital. La artista presenta una serie de instalaciones 
              que transforman obras clásicas en experiencias interactivas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="flex-1">
                <Link href="/exhibitions/metamorfosis-digital">
                  Más Información
                </Link>
              </Button>
              <Button variant="outline" className="flex-1">
                Reservar Visita Guiada
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}