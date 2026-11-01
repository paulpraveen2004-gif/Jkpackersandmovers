import { BUSINESS } from "@/lib/config";
import Link from "next/link";

export default function ServiceAreasSection() {
  const AREAS = [
    { name: "Chennai",       desc: "Our primary service location covering all major neighbourhoods." },
    { name: "Kundrathur",    desc: "Regular shifting services within and around Kundrathur." },
    { name: "Thiruvallur",   desc: "Home and office shifting services in Thiruvallur district." },
    { name: "Porur",         desc: "Local and household shifting in the Porur area." },
    { name: "Tambaram",      desc: "Moving services covering the Tambaram corridor." },
    { name: "Avadi",         desc: "Shifting assistance in Avadi and surrounding areas." },
    { name: "Ambattur",      desc: "Household shifting support in Ambattur." },
    { name: "Poonamallee",   desc: "Moving services along the Poonamallee belt." },
  ];

  return (
    <section id="service-areas" className="section-pad bg-white">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="section-tag">Coverage</span>
          <h2 className="section-title">
            Areas We <span className="text-orange-500">Serve</span>
          </h2>
          <span className="orange-line mx-auto" />
          <p className="section-subtitle mx-auto">
            We provide packing and moving services across Chennai and nearby locations.
            Contact us to confirm availability in your specific area.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {AREAS.map((area) => (
            <div
              key={area.name}
              className="p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-orange-200 hover:bg-orange-50 transition-all group cursor-default"
            >
              <div className="flex items-center gap-2 mb-2">
                <PinIcon className="w-4 h-4 text-orange-500" />
                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {area.name}
                </h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>

        {/* Additional area chips */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">Also covering:</p>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {BUSINESS.serviceAreas.slice(8).map((area) => (
              <span
                key={area}
                className="px-4 py-1.5 rounded-full text-sm bg-gray-100 text-gray-600 border border-gray-200"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400 max-w-md mx-auto mb-6">
            Service areas are where we offer moving assistance, not physical branch locations.
            Contact us to confirm availability in your specific area before booking.
          </p>
          <Link href="/service-areas" className="btn-primary inline-flex">
            View All Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.218-4.402 3.218-7.327C19.5 7.442 16.058 4 12 4S4.5 7.442 4.5 10.997c0 2.925 1.274 5.248 3.218 7.327a19.58 19.58 0 002.683 2.282c.376.267.731.499 1.038.7l.104.044zM12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
    </svg>
  );
}

