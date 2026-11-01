export default function ProcessSection() {
  const STEPS = [
    {
      num: "01",
      title: "Share Your Requirements",
      desc: "Tell us your shifting date, pickup and drop locations, floor details, and item list.",
      icon: "📝",
    },
    {
      num: "02",
      title: "Send an Item Video",
      desc: "Share a complete video or clear photos of all items to be moved for an accurate quote.",
      icon: "🎥",
    },
    {
      num: "03",
      title: "Receive Your Quotation",
      desc: "Our team reviews the details and provides a quotation based on your actual requirements.",
      icon: "💼",
    },
    {
      num: "04",
      title: "Confirm Your Booking",
      desc: "Agree on the quotation, confirm the shifting date, and lock in your booking.",
      icon: "✅",
    },
    {
      num: "05",
      title: "Packing, Moving & Delivery",
      desc: "Our team carries out the agreed services — packing, loading, transport, and delivery.",
      icon: "🚚",
    },
  ];

  return (
    <section id="process" className="section-pad bg-white">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">
            Our <span className="text-orange-500">Shifting Process</span>
          </h2>
          <span className="orange-line mx-auto" />
          <p className="section-subtitle mx-auto">
            A simple, transparent five-step process designed around your convenience.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:flex items-start gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200" />

          {STEPS.map((step, i) => (
            <div key={step.num} className="flex-1 flex flex-col items-center text-center relative px-4">
              {/* Circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex flex-col items-center justify-center shadow-orange mb-5">
                <span className="text-2xl">{step.icon}</span>
              </div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-white opacity-80 z-20">
                {step.num}
              </div>

              <h3 className="font-bold text-gray-900 text-sm md:text-base leading-snug mb-2">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0 relative">
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-orange-500 to-orange-200" />
          {STEPS.map((step) => (
            <div key={step.num} className="flex gap-5 pb-8 relative">
              <div className="relative z-10 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-xl">{step.icon}</span>
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-black text-orange-500">{step.num}</span>
                  <h3 className="font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

