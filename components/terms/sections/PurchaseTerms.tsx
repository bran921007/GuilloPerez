"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PurchaseTerms() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Términos de Compra</h2>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Proceso de Compra</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-3">
              <li>Los precios mostrados son en dólares estadounidenses (USD).</li>
              <li>Las compras están sujetas a disponibilidad.</li>
              <li>Los métodos de pago aceptados serán especificados durante el proceso de compra.</li>
              <li>Los costos de envío y seguro son adicionales al precio mostrado.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Envíos y Devoluciones</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-3">
              <li>El tiempo de entrega varía según la ubicación y método de envío seleccionado.</li>
              <li>Todas las obras son aseguradas durante el transporte.</li>
              <li>Las devoluciones deben ser solicitadas dentro de los 14 días de la recepción.</li>
              <li>El estado de la obra debe ser el mismo que al momento de la entrega.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}