"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Car, Train, Bus } from "lucide-react";

export function Transportation() {
  return (
    <div>
      <h2 className="text-2xl font-serif mb-8">Cómo Llegar</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Car className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-medium mb-2">En Coche</h3>
              <p className="text-muted-foreground">
                Estacionamiento disponible en el edificio. Entrada por la Calle Lorenzo Álvarez.
                Tarifa: $5/hora.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Train className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-medium mb-2">En Metro</h3>
              <p className="text-muted-foreground">
                Líneas A, C, E hasta la estación 14th Street. 5 minutos caminando 
                hasta la galería.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Bus className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-medium mb-2">En Autobús</h3>
              <p className="text-muted-foreground">
                Rutas M14 y M20 tienen paradas cercanas. La parada más cercana está 
                a 2 minutos caminando.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}