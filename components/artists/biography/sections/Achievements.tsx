"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

const achievements = [
  {
    year: "2023",
    title: "Exposición 'Guillo Pérez Centenario. Obras de la colección Portela Bisonó'",
    institution: "Centro Cultural Banreservas"
  },
  {
    year: "2013",
    title: "Premio Nacional de Artes Plásticas",
    institution: "Ministerio de Cultura de la República Dominicana"
  },
  {
    year: "2012",
    title: "Premio Fundación Corripio en la categoría Arte",
    institution: "Categoría Arte"
  },
  // Medalla al Mérito para las Artes y las Letras otorgada por la Cámara de Diputados
  {
    year: "2010",
    title: "Medalla al Mérito para las Artes y las Letras",
    institution: "Cámara de Diputados"
  }
];

export function Achievements() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="w-5 h-5" />
          Reconocimientos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
              <p className="font-medium">{achievement.title}</p>
              <p className="text-sm text-muted-foreground">{achievement.institution}</p>
              <p className="text-sm text-primary">{achievement.year}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}