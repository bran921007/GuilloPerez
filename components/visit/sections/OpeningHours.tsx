"use client";

import { Clock, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function OpeningHours() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold">Horario de Apertura</h2>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium">Lunes - Viernes</span>
          <div className="text-right text-muted-foreground">
            <div>9:00 AM - 12:00 PM</div>
            <div>2:00 PM - 6:00 PM</div>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Sábado</span>
          <span className="text-muted-foreground">9:00 AM - 12:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Domingo</span>
          <span className="text-muted-foreground">Cerrado</span>
        </div>
      </div>

      <Alert className="mt-6">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          El horario puede variar durante el día de Año Nuevo
        </AlertDescription>
      </Alert>
    </div>
  );
}