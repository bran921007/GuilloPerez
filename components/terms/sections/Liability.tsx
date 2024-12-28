"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export function Liability() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Limitación de Responsabilidad</h2>
      
      <Alert variant="destructive" className="mb-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          D&apos;Guillermo Galeria se reserva el derecho de modificar, suspender o discontinuar
          cualquier aspecto del servicio en cualquier momento.
        </AlertDescription>
      </Alert>

      <div className="prose prose-gray max-w-none">
        <p className="mb-4">
          D&apos;Guillermo Galeria no será responsable por:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li>Daños indirectos, incidentales o consecuentes.</li>
          <li>Interrupciones o errores en el funcionamiento del sitio web.</li>
          <li>Pérdida de datos o información durante la transmisión.</li>
          <li>Acciones de terceros o eventos fuera de nuestro control razonable.</li>
        </ul>
        <p>
          Nuestra responsabilidad máxima se limitará al monto pagado por el servicio específico
          en cuestión.
        </p>
      </div>
    </section>
  );
}