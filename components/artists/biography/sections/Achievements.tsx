"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

const achievements = [
  {
    year: "2020",
    title: "Premio Nacional de las Artes",
    institution: "Secretaría de Cultura, México"
  },
  {
    year: "2015",
    title: "Medalla de Oro en Artes Visuales",
    institution: "Bienal de Venecia"
  },
  {
    year: "2010",
    title: "Doctor Honoris Causa",
    institution: "Universidad Nacional Autónoma de México"
  },
  {
    year: "2005",
    title: "Premio Internacional de Arte Contemporáneo",
    institution: "Fundación Joan Miró"
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