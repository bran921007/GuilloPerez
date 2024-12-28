"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  const phoneNumber = "18493610323"; // Without spaces or special characters
  const message = "¡Hola! Me gustaría obtener más información sobre la galería.";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#20BA56] shadow-lg z-50 p-0"
      size="icon"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </Button>
  );
}