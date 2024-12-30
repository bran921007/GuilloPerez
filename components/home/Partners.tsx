const partners = [
  {
    id: 1,
    name: "Ministerio de Cultura",
    logo: "https://yt3.ggpht.com/X-yBX6JynP6rtdYSxhfRh7xyWpvxgw-G1FjLkP9dbO4_nFwKwWVk25UqO7U94VLFp-_mU7j07Q=s900-c-k-c0x00ffffff-no-rj",
    description: "Institución Cultural Gubernamental"
  },
  {
    id: 2,
    name: "Banreservas",
    logo: "../sponsor/banreservas.jpg",
    description: "Institución Financiera"
  },
  // Alcaldia de Moca
  {
    id: 3,
    name: "Ayuntamiento de Cabrera",
    logo: "../sponsor/logo-cabrera.png",
    description: "Gobierno Local"
  },
];

export function Partners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">Nuestros Partners</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-6 flex flex-col items-center text-center group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-24 h-24 mb-4 overflow-hidden rounded-full">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}