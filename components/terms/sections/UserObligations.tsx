"use client";

import { Card, CardContent } from "@/components/ui/card";

export function UserObligations() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Obligaciones del Usuario</h2>
      
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Al utilizar nuestro sitio web, usted se compromete a:</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Proporcionar información verdadera y precisa en todas las interacciones.</li>
              <li>No utilizar el sitio web para fines ilegales o no autorizados.</li>
              <li>Respetar los derechos de propiedad intelectual de las obras exhibidas.</li>
              <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
              <li>No interferir con la seguridad o funcionalidad del sitio web.</li>
              <li>Cumplir con todas las leyes y regulaciones aplicables.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}