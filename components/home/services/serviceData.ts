import { Palette, Frame, ShoppingBag } from "lucide-react";

export const services = [
  {
    icon: Palette,
    title: "Galería de Arte",
    titleEn: "Art Gallery",
    image: "https://guillermo-galeria.s3.us-east-1.amazonaws.com/galeria/galeria1.jpeg",
    description: "Un espacio dedicado a la excelencia artística, donde exhibimos una colección curada de obras maestras contemporáneas y clásicas.",
    features: [
      "Exposiciones de artistas reconocidos",
      "Obras de arte originales",
      "Certificados de autenticidad",
      "Asesoría para coleccionistas"
    ],
    link: "/collection"
  },
  {
    icon: Frame,
    title: "Enmarcado",
    titleEn: "Custom Framing",
    image: "https://guillermo-galeria.s3.us-east-1.amazonaws.com/enmarcado1.jpg",
    description: "Servicio especializado de enmarcado que preserva y realza la belleza de cada obra utilizando técnicas artesanales y materiales de conservación.",
    features: [
      "Marcos personalizados",
      "Materiales de alta calidad",
      "Técnicas de conservación",
      "Asesoramiento profesional"
    ],
    link: "/services/framing"
  },
  {
    icon: ShoppingBag,
    title: "Tienda",
    titleEn: "Art Supply Store",
    image: "https://plus.unsplash.com/premium_photo-1673481601147-ee95199d3896",
    description: "Una tienda especializada que ofrece una amplia selección de materiales y suministros de arte de la más alta calidad.",
    features: [
      "Materiales profesionales",
      "Asesoramiento experto",
      "Marcas premium",
      "Kits para artistas"
    ],
    link: "/store"
  }
];