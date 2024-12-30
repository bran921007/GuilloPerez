"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section className="mb-20">
      <Card>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif mb-6">Contáctanos</h2>
              <p className="text-muted-foreground mb-8">
                Estamos aquí para atender tus consultas sobre servicios de enmarcado, 
                exposiciones y venta de arte. Visítanos en nuestra galería.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>linaresamalia@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>1 (849) 361-0323</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>C/ Lorenzo Alvarez Cabrera, Maria Trinidad Sanchez</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/dguillermogaleria/" rel="noreferrer" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="https://www.facebook.com/p/Guillo-P%C3%A9rez-Pagina-Oficial-100063522524095/" rel="noreferrer" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">¿Interesado en nuestras exposiciones?</h3>
              <p className="text-muted-foreground mb-6">
                Suscríbete a nuestro boletín para recibir invitaciones exclusivas a 
                inauguraciones y eventos especiales.
              </p>
              <Button size="lg">
                Suscribirse al Boletín
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}