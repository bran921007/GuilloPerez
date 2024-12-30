import { Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-lg mb-4">D&apos;Guillermo Galeria</h3>
            <p className="text-gray-400">
              C/ Lorenzo Alvarez Cabrera<br />
              Maria Trinidad Sanchez<br />
              Republica Dominicana
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Horario</h4>
            <p className="text-gray-400">
              Lunes - Viernes<br />
              9:30 AM - 6:00 PM<br />
              Sábados<br />
              9:30 AM - 6:00 PM
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contacto</h4>
            <p className="text-gray-400">
              linaresamalia@gmail.com<br />
              1 (849) 361-0323
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/dguillermogaleria/" rel="noreferrer noopener" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              {/* <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link> */}
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} D&apos;Guillermo Galeria. Todos los derechos reservados.</p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}