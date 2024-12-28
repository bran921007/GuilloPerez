"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export function Modifications() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Modificaciones a los Términos</h2>
      
      <Alert className="mb-6">
        <Info className="h-4 w-4" />
        <AlertDescription>
          Nos reservamos el derecho de modificar estos términos en cualquier momento.
          Los cambios entrarán en vigor inmediatamente después de su publicación.
        </AlertDescription>
      </Alert>

      <Card>
        <CardContent className="pt-6">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Los usuarios serán notificados de cambios significativos a través de un aviso visible
              en el sitio web.
            </li>
            <li>
              El uso continuado del sitio web después de cualquier modificación constituye la
              aceptación de los nuevos términos.
            </li>
            <li>
              Es responsabilidad del usuario revisar periódicamente estos términos para mantenerse
              informado de las actualizaciones.
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}