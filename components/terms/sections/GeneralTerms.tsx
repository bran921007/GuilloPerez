"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function GeneralTerms() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Términos Generales</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Definiciones y Alcance</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Sitio Web:</strong> Se refiere a la plataforma en línea de D&apos;Guillermo Galeria,
              incluyendo todos sus contenidos, funcionalidades y servicios.
            </li>
            <li>
              <strong>Usuario:</strong> Cualquier persona que acceda, navegue o utilice el sitio web
              de cualquier manera.
            </li>
            <li>
              <strong>Servicios:</strong> Incluye la exhibición, venta y enmarcado de obras de arte,
              así como todos los servicios relacionados ofrecidos a través del sitio web.
            </li>
            <li>
              <strong>Contenido:</strong> Todas las imágenes, textos, diseños, logotipos, marcas y
              otros materiales disponibles en el sitio web.
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}