"use client";

export function VisitMap() {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.4358868247474!2d-69.90479731195831!3d19.638252000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eae690b8533d12d%3A0x60828487ea95cd04!2sD&#39;Guillermo%20Galeria!5e0!3m2!1sen!2sdo!4v1711461426044!5m2!1sen!2sdo"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      />
    </div>
  );
}