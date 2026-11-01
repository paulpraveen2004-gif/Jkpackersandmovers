export default function PricingNotes() {
  const POLICIES = [
    "Quotations are calculated based on the item list, videos, and photos shared by the customer.",
    "Additional items not disclosed or shown during enquiry may attract extra charges.",
    "Floor access, lift availability, long carrying distances, and special handling requirements may affect the final quote.",
    "A larger vehicle requirement will be assessed based on the volume of items, and any additional charge will be communicated and confirmed with the customer prior to booking.",
    "Special furniture handling or multi-door assembly requirements may involve additional charges, which will be specified clearly in your estimate.",
    "Specialised electrical, appliance, or technician services are excluded from the standard moving service unless separately requested and quoted.",
    "GST is applicable as per statutory regulations and will be itemised transparently in your quotation.",
    "Final pricing is confirmed by our team in writing after evaluating your exact requirements.",
  ];

  return (
    <section id="pricing-notes" className="section-pad bg-orange-50">
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="section-tag">Pricing Policy</span>
          <h2 className="section-title">
            Transparent Quotations.{" "}
            <span className="text-orange-500">Clear Communication.</span>
          </h2>
          <span className="orange-line mx-auto" />
          <p className="section-subtitle mx-auto">
            We believe in honest pricing with no hidden surprises. Here is what you should know before confirming your booking.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          {POLICIES.map((policy, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <CheckIcon className="w-4 h-4 text-orange-600" />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{policy}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl mx-auto text-center p-6 rounded-2xl bg-[#0D0D0D] text-white border border-white/10">
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-2">
            Important Note
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Please share complete shifting details and a video showing all items to be moved.
            Our team will review the details and confirm your quotation based on the actual requirements.
            Pricing shown in any example is for illustration only — final price is as confirmed in your quotation.
          </p>
          <p className="mt-3 text-xs text-gray-500">
            Prices are subject to change. Contact us for the latest pricing.
          </p>
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

