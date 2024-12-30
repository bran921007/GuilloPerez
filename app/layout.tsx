import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppWidget } from '@/components/shared/WhatsAppWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://guilloperez.com'),
  title: "D'Guillermo Galería | Galería de Arte",
  description: 'Espacio dedicado al arte y la cultura, ofreciendo servicios de enmarcado profesional y exhibiendo obras de artistas destacados.',
  keywords: 'galería de arte, enmarcado, arte dominicano, Guillo Pérez, Cabrera',
  openGraph: {
    title: "D'Guillermo Galería",
    description: 'Galería de arte y servicios de enmarcado profesional',
    images: './galeria/galeria6.jpg',
  },
  icons: {
    icon: './logo2.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}