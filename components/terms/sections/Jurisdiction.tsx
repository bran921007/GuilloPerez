"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Jurisdiction() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Ley Aplicable y Jurisdicción</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Marco Legal</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Estos términos y condiciones se rigen por las leyes de los Estados Unidos y el
            Estado de Nueva York. Cualquier disputa relacionada con estos términos será resuelta
            exclusivamente en los tribunales competentes de la Ciudad de Nueva York.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Resolución de Disputas</h3>
              <p className="text-muted-foreground">
                Antes de iniciar cualquier acción legal, las partes intentarán resolver cualquier
                disputa de manera amistosa a través de negociaciones directas.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Divisibilidad</h3>
              <p className="text-muted-foreground">
                Si alguna disposición de estos términos se considera inválida o inaplicable, las
                demás disposiciones permanecerán en pleno vigor y efecto.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}