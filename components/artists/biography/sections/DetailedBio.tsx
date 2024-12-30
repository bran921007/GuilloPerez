"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export function DetailedBio() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif mb-8">Biografía Detallada</h2>

      <Card>
        <CardContent className="p-8">
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-6">
              <p>
                Guillermo Esteban Pérez Chacón, conocido artísticamente como Guillo Pérez, 
                nació el 3 de agosto de 1923 en San Víctor, Moca, República Dominicana. 
                Hijo de Francisco Guillo Pérez Tavárez y Ana Luisa Chicón de Pérez, fue 
                el único varón entre ocho hermanos en una familia de origen modesto.
              </p>

              <p>
                Desde temprana edad, mostró una notable inclinación por las artes, inicialmente 
                en la música y la religión. Su formación comenzó con estudios de violín y 
                teoría musical en Santiago de los Caballeros, complementados con estudios 
                religiosos en el Seminario Católico Padre Fantino del Santo Cerro en La Vega. 
                Sin embargo, su verdadera vocación emergió en la pintura, lo que lo llevó a 
                abandonar el seminario para dedicarse plenamente a las artes plásticas.
              </p>

              <p>
                En 1946, alcanzó un hito importante en su formación al graduarse de la 
                Escuela de Bellas Artes de Santiago, donde fue discípulo del reconocido 
                pintor Yoryi Morel, con quien perfeccionó la técnica del paisaje al natural. 
                Su carrera profesional comenzó a despegar en 1950, cuando participó en 
                exposiciones colectivas en la Sociedad Amantes de la Luz de Santiago y en 
                la V Bienal en el Palacio de Bellas Artes de Santo Domingo.
              </p>

              <p>
                Su trayectoria docente inició en 1952 al ser nombrado profesor en la 
                Escuela de Bellas Artes de Santiago. En 1955, tomó la decisión de trasladarse 
                a Santo Domingo, donde comenzó una serie de exposiciones individuales y 
                colectivas que consolidaron su reputación en el ámbito artístico nacional.
              </p>

              <p>
                El estilo distintivo de Guillo Pérez se caracterizó por el uso del óleo 
                sobre tela y la aplicación de espátula para lograr fuertes empastes, 
                enmarcándose en el expresionismo abstracto. Sus obras abordan una amplia 
                variedad de temas, incluyendo monumentos coloniales, marinas, figuras, 
                paisajes, flores, hojas de plátano y gallos, reflejando una profunda 
                conexión con la identidad y cultura dominicanas.
              </p>

              <p>
                A lo largo de su carrera, participó en más de setenta exposiciones, de las 
                cuales treinta fueron individuales. Su talento fue reconocido con numerosos 
                premios, destacando sus galardones en las Bienales Nacionales y en el 
                Concurso de Arte Eduardo León Jimenes, donde obtuvo el primer premio en 
                1966, 1967 y 1968. Su obra trascendió fronteras, siendo exhibida en países 
                como Estados Unidos, Francia, Italia, Israel y Japón.
              </p>

              <p>
                En 1984, fundó la Escuela de Arte Guillo Pérez en Santo Domingo, con el 
                objetivo de fomentar el arte y la cultura dominicana, así como promover 
                nuevos talentos en las artes plásticas. Su labor como maestro y mentor ha 
                dejado una huella imborrable en generaciones de artistas dominicanos.
              </p>

              <p>
                La crítica de arte Marianne de Tolentino destacó su extraordinaria capacidad 
                para interpretar el entorno criollo, abarcando el hombre, el paisaje, el 
                cielo, el mar y la tierra, consolidándose como uno de los más prolíficos e 
                importantes artistas del lienzo en la República Dominicana.
              </p>

              <p>
                Guillo Pérez falleció el 9 de marzo de 2014 en Santo Domingo, a los 90 años 
                de edad, debido a complicaciones de salud asociadas a un cáncer. Su partida 
                dejó un vacío en el mundo del arte dominicano, pero su obra y contribuciones 
                continúan siendo una fuente de inspiración y orgullo para la nación.
              </p>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </section>
  );
}