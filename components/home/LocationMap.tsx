import { MapPin, Clock, Phone } from 'lucide-react';

export function LocationMap() {
  const phoneNumber = "18493610323"; // International format without spaces or special characters
  const message = "Hola, me gustaría programar una visita a la galería. ¿Cuál sería el mejor horario disponible?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-20 bg-white" id="visit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif mb-6">Visítanos</h2>
              <p className="text-gray-600 mb-8">
                Te invitamos a explorar nuestra galería y sumergirte en el mundo del arte contemporáneo.
                Nuestro espacio está diseñado para brindarte una experiencia artística inmersiva.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Ubicación</h3>
                  <p className="text-gray-600">
                    C/ Lorenzo Alvarez Cabrera<br />
                    Maria Trinidad Sanchez<br />
                    República Dominicana
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Horario</h3>
                  <p className="text-gray-600">
                    Lunes - Viernes: 9:30 AM - 6:00 PM<br />
                    Sábados: 9:30 AM - 6:00 PM<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Contacto</h3>
                  <p className="text-gray-600">
                    Teléfono: 1 (849) 361-0323<br />
                    Email: linaresamalia@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-200"
            >
              Programar una Visita
            </a>
          </div>

          <div className="relative h-[400px] lg:h-full min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.743698384349!2d-69.9046047!3d19.638252299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eae690b8533d12d%3A0x60828487ea95cd04!2sD'Guillermo%20Galeria!5e0!3m2!1sen!2sdo!4v1659379670781!5m2!1sen!2sdo"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}