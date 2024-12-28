"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import { useState } from "react";

export function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const title = "Tendencias Emergentes en el Arte Contemporáneo";

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };

    if (platform in urls) {
      window.open(urls[platform as keyof typeof urls], '_blank');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium">Compartir:</span>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => handleShare('facebook')}
          aria-label="Compartir en Facebook"
        >
          <Facebook className="w-4 h-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => handleShare('twitter')}
          aria-label="Compartir en Twitter"
        >
          <Twitter className="w-4 h-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => handleShare('linkedin')}
          aria-label="Compartir en LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          onClick={copyToClipboard}
          aria-label={copied ? "¡Enlace copiado!" : "Copiar enlace"}
        >
          <Link2 className="w-4 h-4" />
        </Button>
      </div>
      {copied && (
        <span className="text-sm text-muted-foreground">¡Enlace copiado!</span>
      )}
    </div>
  );
}