"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "How can I get a shifting quotation?",
    a: "Contact us via WhatsApp or phone, or fill in our online quotation form. Share your shifting details and we will provide a tailored quote.",
  },
  {
    q: "What details are required for an accurate quote?",
    a: "We need the shifting date, pickup and drop locations, floor details, lift availability, property type (1BHK, 2BHK etc.), and a complete list of items to be moved.",
  },
  {
    q: "Why do you ask for a video of the items?",
    a: "A video helps us assess the volume, type, and fragility of your belongings so we can provide an accurate quote and allocate the right vehicle and team.",
  },
  {
    q: "Do you provide packing materials?",
    a: "Yes, suitable packing materials are used as part of our service. Specifics are discussed and included in your quotation.",
  },
  {
    q: "Are loading and unloading included?",
    a: "Loading and unloading are part of our standard shifting service. Details are confirmed in your quotation.",
  },
  {
    q: "Do you handle apartment and high-floor shifting?",
    a: "Yes. Please share the floor number and lift availability when requesting your quote, as this may affect pricing.",
  },
  {
    q: "Is a lift required?",
    a: "A lift helps but is not mandatory. Where no lift is available, staircase carrying is assessed and any additional charge is communicated upfront.",
  },
  {
    q: "Do you dismantle and reassemble wardrobes?",
    a: "Yes, standard furniture handling can be provided where included in your quotation. Any specific multi-door wardrobe or complex dismantling requirements will be assessed and communicated clearly in your customized estimate.",
  },
  {
    q: "Do you provide AC dismantling and installation?",
    a: "AC dismantling and installation require a professional technician and are not part of our standard moving service. Technician arrangements may be available at an additional cost — please confirm with us before booking.",
  },
  {
    q: "Are additional items charged separately?",
    a: "Yes. Items not disclosed or shown during the quotation process may attract extra charges. Please share a complete item list and video for an accurate quote.",
  },
  {
    q: "Do you provide intercity relocation?",
    a: "We offer long-distance shifting to supported destinations. Please contact us to confirm availability for your specific route before booking.",
  },
  {
    q: "How can I confirm my booking?",
    a: "Once you agree to the quotation, confirm the shifting date with our team. We will then schedule and confirm your booking.",
  },
  {
    q: "How can I contact your team?",
    a: "Call us on 6383329304 or 9965289929, or send a WhatsApp message using the button on this page.",
  },
  {
    q: "Is GST included in the quotation?",
    a: "GST is applicable as per the invoicing requirements in force. Your quotation will clearly indicate whether GST is included or applicable separately.",
  },
  {
    q: "Can I request a larger vehicle?",
    a: "Yes. If your items require a larger vehicle, this will be discussed and any additional charge (currently ₹1,500) will be communicated and confirmed before your booking.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad bg-gray-50">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="section-tag">FAQs</span>
          <h2 className="section-title">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <span className="orange-line mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-semibold text-gray-800 hover:text-orange-500 transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-sm md:text-base">{faq.q}</span>
                <ChevronIcon
                  className={`w-5 h-5 flex-shrink-0 text-orange-500 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

