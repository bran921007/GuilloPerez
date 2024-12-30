"use client";

import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Guillo Pérez",
    role: "Fundador y Artista",
    image: "./team/guillo-perez.jpg",
    bio: "Artista dominicano, dejó un legado perdurable en la cultura artística dominicana. Su obra captura la esencia vibrante y el espíritu caribeño."
  },
  {
    name: "Amalia Linares",
    role: "Directora y Gestora Cultural",
    image: "./team/amalia.jpg", 
    bio: "Directora de la galeria y gestora cultural, continúa el legado artístico de Guillo Pérez, manteniendo viva la tradición y visión del arte dominicano."
  },
  {
    name: "Mairolys Guerrero",
    role: "Colaboradora adjunta",
    image: "./team/mairolys-guerrero.jpg", 
    bio: ""
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