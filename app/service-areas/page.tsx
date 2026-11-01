import type { Metadata } from "next";
import { BUSINESS } from "@/lib/config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Packers & Movers Service Areas | Chennai, Kundrathur, Thiruvallur",
  description: "JK Packers & Movers serves Chennai, Kundrathur, Thiruvallur, Porur, Tambaram, Avadi, Ambattur and nearby areas in Tamil Nadu.",
  alternates: { canonical: `${BUSINESS.siteUrl}/service-areas` },
};

const AREA_DETAILS = [
  {
    name: "Chennai",
    desc: "Our primary service city. We cover all major neighbourhoods and localities across Chennai — from Anna Nagar and Adyar to OMR and Sholinganallur.",
    keywords: "packers movers Chennai, home shifting Chennai",
  },
  {
    name: "Kundrathur",
    desc: "Regular home and household shifting services within Kundrathur and the surrounding localities.",
    keywords: "packers movers Kundrathur, shifting Kundrathur",
  },
  {
    name: "Thiruvallur",
    desc: "Moving services for households and offices in Thiruvallur district. Contact us to confirm availability for your specific location.",
    keywords: "packers movers Thiruvallur, home shifting Thiruvallur",
  },
  {
    name: "Porur",
    desc: "Local household and apartment shifting services in and around the Porur area.",
    keywords: "packers movers Porur",
  },
  {
    name: "Tambaram",
    desc: "Shifting assistance covering the Tambaram corridor including Chromepet and Pallavaram.",
    keywords: "packers movers Tambaram, shifting Chromepet",
  },
  {
    name: "Avadi",
    desc: "Home relocation services in Avadi and nearby localities.",
    keywords: "packers movers Avadi",
  },
  {
    name: "Ambattur",
    desc: "Household and office shifting support in Ambattur industrial and residential areas.",
    keywords: "packers movers Ambattur",
  },
  {
    name: "Poonamallee",
    desc: "Moving services along the Poonamallee belt and surrounding areas.",
    keywords: "packers movers Poonamallee",
  },
  {
    name: "Anna Nagar",
    desc: "Apartment and home shifting in Anna Nagar West, East, and surrounding localities.",
    keywords: "packers movers Anna Nagar",
  },
  {
    name: "Velachery",
    desc: "Home and apartment shifting in Velachery and nearby areas.",
    keywords: "packers movers Velachery",
  },
  {
    name: "OMR",
    desc: "Residential shifting services along Old Mahabalipuram Road and Sholinganallur.",
    keywords: "packers movers OMR Sholinganallur",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="dark-section text-white py-20 md:py-24">
        <div className="container-xl text-center">
          <span className="section-tag">Coverage</span>
          <h1 className="section-title-white mt-2">Areas We Serve</h1>
          <span className="orange-line mx-auto" />
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            JK Packers & Movers operates across Chennai and nearby locations in Tamil Nadu.
            Contact us to confirm availability for your specific area.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="mb-8 p-5 rounded-2xl bg-orange-50 border border-orange-200 text-sm text-orange-700 max-w-2xl">
            <strong>Note:</strong> The areas listed are service zones where we provide moving assistance —
            not physical branch offices. Contact us to confirm availability before booking.
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREA_DETAILS.map((area) => (
              <div key={area.name} className="card p-6 hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <PinIcon className="w-4 h-4 text-orange-600" />
                  </div>
                  <h2 className="font-bold text-gray-900">{area.name}</h2>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{area.desc}</p>
                <Link
                  href={`/contact#quote`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                >
                  Get Quote for {area.name}
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Don&apos;t See Your Area?</h2>
            <p className="text-gray-500 mb-6">
              Contact us with your pickup and drop locations. We will confirm whether we can serve your
              area and provide a quotation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact#quote" className="btn-primary">Get a Quote</Link>
              <a href={`https://wa.me/${BUSINESS.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PinIcon({ className }: { className?: string }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.218-4.402 3.218-7.327C19.5 7.442 16.058 4 12 4S4.5 7.442 4.5 10.997c0 2.925 1.274 5.248 3.218 7.327a19.58 19.58 0 002.683 2.282c.376.267.731.499 1.038.7l.104.044zM12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" /></svg>;
}
function ArrowIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>;
}

