"use client";

import { Separator } from "@/components/ui/separator";
import { GeneralTerms } from "./sections/GeneralTerms";
import { UserObligations } from "./sections/UserObligations";
import { IntellectualProperty } from "./sections/IntellectualProperty";
import { PurchaseTerms } from "./sections/PurchaseTerms";
import { Liability } from "./sections/Liability";
import { Modifications } from "./sections/Modifications";
import { Jurisdiction } from "./sections/Jurisdiction";

export function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-6">Términos y Condiciones</h1>
      
      <div className="text-sm text-muted-foreground mb-8">
        Última actualización: {new Date().toLocaleDateString()}
      </div>

      <p className="text-lg mb-8">
        Por favor, lea detenidamente estos términos y condiciones antes de utilizar los servicios de D&apos;Guillermo Galeria.
        Al acceder o utilizar nuestro sitio web, usted acepta estar sujeto a estos términos y condiciones.
      </p>

      <Separator className="my-8" />

      <GeneralTerms />
      <UserObligations />
      <IntellectualProperty />
      <PurchaseTerms />
      <Liability />
      <Modifications />
      <Jurisdiction />
    </div>
  );
}