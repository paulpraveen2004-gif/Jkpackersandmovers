export default function ServicesSection() {
  const SERVICES = [
    {
      icon: "🏠",
      id: "household",
      title: "Household Shifting",
      desc: "Complete home relocation with packing, loading, transportation, unloading, and delivery assistance.",
      tags: ["Packing", "Loading", "Transport", "Unloading"],
    },
    {
      icon: "📍",
      id: "local",
      title: "Local Shifting",
      desc: "Home and apartment relocation within Chennai and nearby serviceable areas.",
      tags: ["Chennai", "Kundrathur", "Thiruvallur"],
    },
    {
      icon: "🚛",
      id: "intercity",
      title: "Intercity Relocation",
      desc: "Long-distance household transportation between supported cities. Confirm destination availability before booking.",
      tags: ["Long Distance", "Safe Transit"],
    },
    {
      icon: "🏢",
      id: "office",
      title: "Office Relocation",
      desc: "Moving office furniture, equipment, documents, and other approved office items with care.",
      tags: ["Furniture", "Equipment", "Documents"],
    },
    {
      icon: "📦",
      id: "packing",
      title: "Packing & Unpacking",
      desc: "Professional packing with suitable materials and unpacking assistance as agreed in the quotation.",
      tags: ["Carton Boxes", "Bubble Wrap", "Tape"],
    },
    {
      icon: "💪",
      id: "loading",
      title: "Loading & Unloading",
      desc: "Safe handling and movement of household and commercial items with trained labour.",
      tags: ["Trained Labour", "Careful Handling"],
    },
    {
      icon: "🏍️",
      id: "vehicle",
      title: "Vehicle & Special Items",
      desc: "Enquire about bikes, appliances, fragile items. Availability and pricing confirmed before service.",
      tags: ["Bikes", "Appliances", "Fragile"],
    },
    {
      icon: "👷",
      id: "labour",
      title: "Labour Services",
      desc: "Dedicated loading, unloading, and shifting labour assistance tailored to your moving requirements.",
      tags: ["Experienced Team", "Careful Movement"],
    },
  ];

  return (
    <section id="services" className="section-pad bg-gray-50">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <span className="orange-line mx-auto" />
          <p className="section-subtitle mx-auto">
            Professional packing and moving solutions tailored to your requirements — from local home shifting to office relocation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="card p-6 group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-orange-50 text-orange-600 font-medium border border-orange-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || "916383329304"}?text=${encodeURIComponent(`Hello JK Packers & Movers, I am interested in your ${service.title} service. Please provide more details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
              >
                Enquire Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

