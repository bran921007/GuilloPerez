"use client";

import { Separator } from "@/components/ui/separator";

function Section({ title, children }) {
 return (
   <div className="mb-12">
     <h2 className="text-2xl font-serif mb-4">{title}</h2>
     {children}
   </div>
 );
}

export function TermsAndConditions() {
 return (
   <div className="max-w-4xl mx-auto px-4 py-16">
     <h1 className="text-4xl font-serif mb-6">Términos y Condiciones</h1>
     
     <div className="text-sm text-muted-foreground mb-8">
       Última actualización: 29 de diciembre de 2024
     </div>

     <p className="text-lg mb-8">
       Por favor, lea detenidamente estos términos y condiciones antes de utilizar los servicios de D&apos;Guillermo Galería.
       Al acceder o utilizar nuestro sitio web y servicios, usted acepta estar sujeto a estos términos y condiciones.
     </p>

     <Separator className="my-8" />

     <Section title="1. Aceptación de los Términos">
       <p>
         Al acceder y utilizar el sitio web de D&apos;Guillermo Galería, así como nuestros servicios de galería, 
         enmarcado y venta de arte, usted acepta cumplir con estos términos y condiciones y con todas las 
         leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, le recomendamos 
         no utilizar nuestros servicios.
       </p>
     </Section>

     <Section title="2. Modificaciones de los Términos">
       <p>
         D&apos;Guillermo Galería se reserva el derecho de modificar estos términos en cualquier momento y sin 
         previo aviso. Es responsabilidad del usuario revisar periódicamente estos términos para estar al 
         tanto de cualquier cambio. El uso continuado de nuestros servicios después de la publicación de 
         modificaciones implica la aceptación de las mismas.
       </p>
     </Section>

     <Section title="3. Uso del Sitio y Servicios">
       <p className="mb-4">
         Se otorga permiso para acceder y utilizar nuestros servicios solo para uso personal y no comercial. 
         Bajo estos términos usted no puede:
       </p>
       <ul className="list-disc pl-6 space-y-2">
         <li>Modificar o copiar los materiales sin autorización expresa</li>
         <li>Usar imágenes o contenido de la galería para propósitos comerciales sin autorización</li>
         <li>Realizar reproducciones no autorizadas de las obras de arte</li>
         <li>Transferir o vender información o servicios obtenidos a través de la galería</li>
         <li>Realizar fotografías no autorizadas dentro de la galería</li>
       </ul>
     </Section>

     <Section title="4. Limitaciones">
       <p>
         D&apos;Guillermo Galería no será responsable de daños que surjan del uso o la imposibilidad de usar 
         nuestros servicios, incluyendo daños por pérdida de datos o beneficios, o debido a interrupciones 
         del servicio. La galería toma todas las precauciones necesarias para la preservación y seguridad 
         de las obras, pero no se hace responsable de situaciones fuera de nuestro control.
       </p>
     </Section>

     <Section title="5. Exactitud de la Información">
       <p>
         La información sobre obras de arte, exposiciones y servicios puede incluir errores técnicos o 
         tipográficos. D&apos;Guillermo Galería se reserva el derecho de corregir cualquier error y cambiar 
         o actualizar información sin previo aviso. No garantizamos la disponibilidad continua de obras 
         específicas o servicios mostrados.
       </p>
     </Section>

     <Section title="6. Propiedad Intelectual">
       <p>
         Todas las obras de arte, imágenes y contenido mostrado en la galería y sitio web están protegidos 
         por derechos de autor. La visualización o acceso a este contenido no transfiere ningún derecho de 
         propiedad intelectual. Se prohíbe cualquier uso no autorizado del contenido.
       </p>
     </Section>

     <Section title="7. Servicios de Enmarcado">
       <p>
         Los servicios de enmarcado están sujetos a disponibilidad de materiales y tiempos de entrega 
         estimados. Los precios pueden variar según especificaciones particulares. La galería no se hace 
         responsable por retrasos debido a causas fuera de nuestro control.
       </p>
     </Section>

     <Section title="8. Ley Aplicable">
       <p>
         Estos términos y condiciones se rigen por las leyes de la República Dominicana. Cualquier disputa 
         será sometida a la jurisdicción de los tribunales competentes de la República Dominicana.
       </p>
     </Section>

     <Section title="9. Contacto">
       <p className="mb-4">Para cualquier consulta sobre estos términos, contáctenos en:</p>
       <ul className="list-none space-y-2">
         <li>Email: linaresamalia@gmail.com</li>
         <li>Teléfono: 1 (849) 361-0323</li>
         <li>Dirección: C/ Lorenzo Alvarez Cabrera, Maria Trinidad Sanchez</li>
       </ul>
     </Section>

     <div className="text-sm text-muted-foreground mt-8">
       <p>© 2024 D&apos;Guillermo Galería. Todos los derechos reservados.</p>
     </div>
   </div>
 );
}