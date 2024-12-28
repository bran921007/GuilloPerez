"use client";

import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Guillermo Pérez",
    role: "Fundador y Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    bio: "Con más de 35 años de experiencia en el mundo del arte, Guillermo ha dedicado su vida a cultivar el talento artístico."
  },
  {
    name: "María González",
    role: "Curadora Principal",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    bio: "Especialista en arte contemporáneo con un doctorado en Historia del Arte de la Universidad de Nueva York."
  },
  {
    name: "Carlos Ruiz",
    role: "Director de Exposiciones",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
    bio: "Con experiencia internacional en la organización de exposiciones en las principales galerías del mundo."
  }
];

export function Team() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-serif mb-12 text-center">Nuestro Equipo</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <Card key={index} className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="aspect-square relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}