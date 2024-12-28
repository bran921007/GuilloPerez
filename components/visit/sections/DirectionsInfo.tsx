"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Car, MapPin } from "lucide-react";

export function DirectionsInfo() {
  return (
    <div>
      <h2 className="text-2xl font-serif mb-8">Cómo Llegar</h2>
      
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium mb-2">Ubicación</h3>
                <p className="text-muted-foreground">
                  Nos encontramos en C/ Lorenzo Alvarez Cabrera, Maria Trinidad Sanchez, 
                  en una ubicación céntrica y de fácil acceso.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Car className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium mb-2">Estacionamiento</h3>
                <p className="text-muted-foreground">
                  Contamos con estacionamiento gratuito para nuestros visitantes 
                  en las instalaciones de la galería.
                </p>
              </div>
            </div>

            <div className="bg-secondary/50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Nota:</strong> Para grupos grandes o visitas especiales, 
                por favor contáctenos con anticipación para coordinar el acceso 
                y estacionamiento.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}