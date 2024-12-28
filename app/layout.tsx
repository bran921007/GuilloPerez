import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppWidget } from '@/components/shared/WhatsAppWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "D'Guillermo Galeria | Fine Art Gallery",
  description: 'Experience our curated collection of fine art in an atmosphere of sophistication and cultural excellence.',
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