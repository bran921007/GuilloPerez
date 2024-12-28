"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Información de Contacto</h2>

      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary mt-1" />
          <div>
            <p className="font-medium">Dirección</p>
            <p className="text-muted-foreground">
              C/ Lorenzo Alvarez Cabrera<br />
              Maria Trinidad Sanchez<br />
              República Dominicana
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-primary mt-1" />
          <div>
            <p className="font-medium">Teléfono</p>
            <p className="text-muted-foreground">1 (849) 361-0323</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-primary mt-1" />
          <div>
            <p className="font-medium">Email</p>
            <p className="text-muted-foreground">linaresamalia@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}