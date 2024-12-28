"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export function CurrentProjects() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Proyectos Actuales
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Retrospectiva Mundial 2024</h3>
            <p className="text-sm text-muted-foreground">
              Una exposición itinerante que recorrerá los principales museos de América,
              Europa y Asia.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Programa de Mentoría Artística</h3>
            <p className="text-sm text-muted-foreground">
              Iniciativa para apoyar a jóvenes artistas latinoamericanos en el desarrollo
              de sus carreras.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Serie "Futuros Ancestrales"</h3>
            <p className="text-sm text-muted-foreground">
              Nueva colección que explora la intersección entre tradiciones ancestrales
              y tecnología moderna.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}