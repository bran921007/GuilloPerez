"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Phone } from "lucide-react";

export function VisitorInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Información para Visitantes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1" />
            <div>
              <p className="font-medium">Ubicación</p>
              <p className="text-sm text-muted-foreground">
                C/ Lorenzo Alvarez Cabrera<br />
                Maria Trinidad Sanchez<br />
                República Dominicana
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-1" />
            <div>
              <p className="font-medium">Horario</p>
              <p className="text-sm text-muted-foreground">
                Lunes - Viernes: 9:30 - 18:00<br />
                Sábados: 9:30 - 18:00<br />
                Domingos: Cerrado
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-primary mt-1" />
            <div>
              <p className="font-medium">Visitas Guiadas</p>
              <p className="text-sm text-muted-foreground">
                Disponibles para grupos de 5-15 personas.<br />
                Reserva previa requerida.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-primary mt-1" />
            <div>
              <p className="font-medium">Contacto</p>
              <p className="text-sm text-muted-foreground">
                1 (849) 361-0323<br />
                linaresamalia@gmail.com
              </p>
            </div>
          </div>
        </div>

        <Button className="w-full">Reservar Visita Guiada</Button>
      </CardContent>
    </Card>
  );
}