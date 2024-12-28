"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function IntellectualProperty() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Propiedad Intelectual</h2>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Derechos de Autor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Todo el contenido presente en este sitio web, incluyendo pero no limitado a imágenes,
              textos, diseños, logotipos y estructura del sitio, está protegido por leyes de
              propiedad intelectual.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Las obras de arte exhibidas mantienen sus derechos de autor originales.</li>
              <li>No se permite la reproducción sin autorización expresa.</li>
              <li>El uso comercial de cualquier contenido está estrictamente prohibido.</li>
              <li>Las marcas registradas son propiedad de sus respectivos dueños.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}