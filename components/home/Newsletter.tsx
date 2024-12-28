"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4">Mantente Conectado</h2>
          <p className="mb-8">
            Suscríbete a nuestro boletín para recibir vistas previas exclusivas, anuncios de exposiciones
            e invitaciones a eventos especiales.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              className="bg-primary-foreground text-primary"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              Suscribirse Ahora
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}