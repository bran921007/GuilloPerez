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

export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-6">Política de Privacidad</h1>

      <Section title="1. Introducción">
        <p className="mb-4">
          En D&apos;Guillermo Galería nos comprometemos a proteger la privacidad de nuestros visitantes, clientes y artistas. 
          Esta política de privacidad explica cómo recopilamos, utilizamos y compartimos su información personal cuando 
          visita nuestra galería, utiliza nuestros servicios o interactúa con nuestro sitio web.
        </p>
      </Section>

      <Section title="2. Responsable del Tratamiento">
        <ul className="list-none space-y-2">
          <li><strong>Nombre de la empresa:</strong> D&apos;Guillermo Galería</li>
          <li><strong>Dirección:</strong> C/ Lorenzo Alvarez Cabrera, Maria Trinidad Sanchez</li>
          <li><strong>Correo electrónico de contacto:</strong> linaresamalia@gmail.com</li>
          <li><strong>Teléfono:</strong> 1 (849) 361-0323</li>
        </ul>
      </Section>

      <Section title="3. Datos Personales que Recopilamos">
        <p className="mb-4">Podemos recopilar y procesar los siguientes datos personales:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Información de identificación personal:</strong> nombre, correo electrónico, número de teléfono</li>
          <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas</li>
          <li><strong>Información de servicios:</strong> detalles de enmarcados, consultas sobre obras de arte, reservas para exposiciones</li>
          <li><strong>Preferencias artísticas:</strong> intereses en tipos específicos de arte o artistas</li>
        </ul>
      </Section>

      <Section title="4. Finalidad del Tratamiento de Datos">
        <p className="mb-4">Utilizamos sus datos personales para:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Provisión de servicios:</strong> gestionar servicios de enmarcado y venta de arte</li>
          <li><strong>Eventos y exposiciones:</strong> organizar visitas guiadas y eventos especiales</li>
          <li><strong>Comunicaciones:</strong> informar sobre nuevas exposiciones y eventos culturales</li>
          <li><strong>Mejora de servicios:</strong> optimizar nuestra atención y servicios artísticos</li>
        </ul>
      </Section>

      <Section title="5. Base Legal para el Tratamiento de Datos">
        <p className="mb-4">El tratamiento de sus datos se basa en:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ejecución de un contrato:</strong> para servicios de enmarcado y compra de arte</li>
          <li><strong>Consentimiento del usuario:</strong> para comunicaciones sobre exposiciones</li>
          <li><strong>Interés legítimo:</strong> para mejorar nuestros servicios artísticos y culturales</li>
        </ul>
      </Section>

      <Section title="6. Destinatarios de los Datos">
        <p className="mb-4">Compartimos sus datos únicamente con:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Proveedores de servicios de enmarcado bajo acuerdos de confidencialidad</li>
          <li>Gestores de eventos y exposiciones cuando sea necesario</li>
          <li>Autoridades competentes cuando sea requerido por ley</li>
        </ul>
      </Section>

      <Section title="7. Transferencias Internacionales de Datos">
        <p>
          Nuestras operaciones se realizan principalmente en la República Dominicana. En caso de transferencias 
          internacionales, implementamos medidas de seguridad conforme a las normativas aplicables.
        </p>
      </Section>

      <Section title="8. Plazo de Conservación de los Datos">
        <p>
          Conservamos sus datos durante el tiempo necesario para nuestros servicios artísticos y culturales, 
          y para cumplir con nuestras obligaciones legales.
        </p>
      </Section>

      <Section title="9. Derechos del Usuario">
        <p className="mb-4">Sus derechos incluyen:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Acceso:</strong> conocer qué datos tenemos sobre usted</li>
          <li><strong>Rectificación:</strong> corregir datos inexactos</li>
          <li><strong>Supresión:</strong> solicitar la eliminación de sus datos</li>
          <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos</li>
          <li><strong>Limitación:</strong> restringir el uso de sus datos</li>
        </ul>
      </Section>

      <Section title="10. Seguridad de los Datos">
        <p>
          Implementamos medidas técnicas y organizativas para proteger sus datos personales, incluyendo 
          sistemas de seguridad física en nuestra galería y protección digital en nuestros sistemas.
        </p>
      </Section>

      <Section title="11. Cambios en la Política de Privacidad">
        <p>
          Nos reservamos el derecho de actualizar esta política. Los cambios serán notificados en nuestra 
          galería y sitio web.
        </p>
      </Section>

      <Section title="12. Contacto">
        <p className="mb-4">Para consultas sobre esta política, contáctenos en:</p>
        <ul className="list-none space-y-2">
          <li>Email: linaresamalia@gmail.com</li>
          <li>Teléfono: 1 (849) 361-0323</li>
          <li>Dirección: C/ Lorenzo Alvarez Cabrera, Maria Trinidad Sanchez</li>
        </ul>
      </Section>

      <div className="text-sm text-muted-foreground mt-8">
        <p>Última actualización: 29 de diciembre de 2024</p>
        <p>© 2024 D&apos;Guillermo Galería. Todos los derechos reservados.</p>
      </div>

      <Separator className="my-8" />

    </div>
  );
}