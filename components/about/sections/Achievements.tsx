"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Premios de Excelencia",
    description: "5 premios internacionales por nuestra contribución al arte"
  },
  {
    icon: Users,
    title: "Artistas Representados",
    description: "Más de 200 artistas de 30 países diferentes"
  },
  {
    icon: Globe,
    title: "Exposiciones Internacionales",
    description: "150+ exposiciones realizadas en todo el mundo"
  },
  {
    icon: TrendingUp,
    title: "Impacto Cultural",
    description: "1M+ visitantes en nuestras exposiciones"
  }
];

export function Achievements() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-serif mb-12 text-center">Logros y Reconocimientos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <achievement.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}