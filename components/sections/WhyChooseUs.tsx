import Image from "next/image";

export default function WhyChooseUs() {
  const REASONS = [
    {
      icon: "💬",
      title: "Clear Communication",
      desc: "We keep you informed at every stage — from enquiry to delivery.",
    },
    {
      icon: "🛡️",
      title: "Careful Handling",
      desc: "Your belongings are treated with care throughout packing, loading, and transit.",
    },
    {
      icon: "📋",
      title: "Accurate Quotations",
      desc: "Quotes based on actual requirements — item list, video review, floor details.",
    },
    {
      icon: "💰",
      title: "Transparent Charges",
      desc: "Additional charges (if any) are discussed openly before confirming your booking.",
    },
    {
      icon: "📅",
      title: "Flexible Scheduling",
      desc: "We work around your preferred shifting date for a smoother relocation.",
    },
    {
      icon: "📦",
      title: "Packing Support",
      desc: "Suitable packing materials used for fragile and household items.",
    },
    {
      icon: "🔧",
      title: "Furniture Assistance",
      desc: "Dismantling and reassembly support included as per your quotation.",
    },
    {
      icon: "🤝",
      title: "End-to-End Support",
      desc: "From initial enquiry to final delivery — we are with you throughout.",
    },
  ];

  return (
    <section id="why-choose-us" className="section-pad dark-section text-white relative overflow-hidden">
      {/* Background watermark logo with full orange color & subtle blur */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <div className="relative w-[500px] h-[300px] sm:w-[700px] sm:h-[400px] lg:w-[950px] lg:h-[520px] opacity-[0.14] blur-[1px]">
          <Image
            src="/logo.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Decorative orange glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 blur-3xl rounded-full pointer-events-none z-0" />

      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="section-tag">Why Us</span>
          <h2 className="section-title-white">
            Why Choose{" "}
            <span className="text-orange-400">JK Packers & Movers?</span>
          </h2>
          <span className="orange-line mx-auto" />
          <p className="section-subtitle text-gray-400 mx-auto">
            We focus on making your move straightforward, well-communicated, and as stress-free as possible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-orange-500/30 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-orange-400 transition-colors">
                {r.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-center text-xs text-gray-600 max-w-2xl mx-auto">
          We focus on doing the job right. We do not make guarantees about damage-free shifting,
          lowest prices, or ranking claims. Final service scope is as per confirmed quotation.
        </p>
      </div>
    </section>
  );
}

