import type { Metadata } from "next";
import { BUSINESS } from "@/lib/config";
import ServicesSection from "@/components/sections/ServicesSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Packing & Moving Services in Chennai | JK Packers & Movers",
  description: "Professional home shifting, office relocation, packing & unpacking, loading & unloading, vehicle transportation, and labour services in Chennai. Get a free quote from JK Packers & Movers.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <section className="dark-section text-white py-20 md:py-24">
        <div className="container-xl text-center">
          <span className="section-tag">What We Do</span>
          <h1 className="section-title-white mt-2">Our Packing & Moving Services</h1>
          <span className="orange-line mx-auto" />
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Professional relocation services in Chennai, Kundrathur, Thiruvallur and nearby areas.
            Contact us to confirm availability and get an accurate quotation.
          </p>
        </div>
      </section>

      <ServicesSection />

      {/* Additional service details */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-4">Service Notes & Conditions</h2>
            <span className="orange-line" />
            <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">Intercity Relocation:</strong> Long-distance moving is subject
                to route availability. Please contact us to confirm before booking.
              </p>
              <p>
                <strong className="text-gray-900">Vehicle & Special Items:</strong> Bikes, appliances, and fragile
                or special items must be confirmed with us before booking. Pricing and availability are assessed
                case by case.
              </p>
              <p>
                <strong className="text-gray-900">Labour & Handling:</strong> Loading, unloading, and placement
                support are carried out by trained handlers as per the scope agreed in your confirmed quotation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-extrabold mb-4">Get a Quote for Any of These Services</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#quote" className="px-8 py-3 rounded-xl bg-white text-orange-600 font-bold hover:bg-orange-50 transition-colors">Request Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}

