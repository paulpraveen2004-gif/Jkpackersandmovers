import type { Metadata } from "next";
import { BUSINESS } from "@/lib/config";
import HeroSection         from "@/components/sections/HeroSection";
import ServicesSection     from "@/components/sections/ServicesSection";
import WhyChooseUs         from "@/components/sections/WhyChooseUs";
import ProcessSection      from "@/components/sections/ProcessSection";
import PricingNotes        from "@/components/sections/PricingNotes";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import ReviewsSection      from "@/components/sections/ReviewsSection";
import FAQSection          from "@/components/sections/FAQSection";
import Link                from "next/link";
import Image               from "next/image";

export const metadata: Metadata = {
  title: BUSINESS.siteTitle,
  description: BUSINESS.siteDescription,
  alternates: { canonical: BUSINESS.siteUrl },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <PricingNotes />
      <ServiceAreasSection />
      <ReviewsSection />

      {/* About teaser */}
      <section className="section-pad bg-[#0D0D0D] text-white relative overflow-hidden">
        {/* Watermark logo background with full brand orange color & subtle blur */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <div className="relative w-[500px] h-[300px] sm:w-[700px] sm:h-[400px] lg:w-[900px] lg:h-[500px] opacity-[0.14] blur-[1px]">
            <Image
              src="/logo.png"
              alt=""
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="container-xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-tag">About Us</span>
            <h2 className="section-title-white mt-2">
              A Packing & Moving Team That{" "}
              <span className="text-orange-400">Cares About Your Move</span>
            </h2>
            <span className="orange-line mx-auto" />
            <p className="text-gray-400 leading-relaxed mt-4 text-lg">
              At JK Packers & Movers, we understand that moving to a new home or workplace is an important step.
              Our goal is to make the relocation process simpler through clear communication, careful handling,
              and moving services tailored to each customer&apos;s requirements.
            </p>
            <div className="mt-8">
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Final CTA */}
      <section className="section-pad bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Planning a Move? Let&apos;s Get Started.
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Share your shifting details with us and receive a quotation tailored to your requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#quote" className="px-8 py-4 rounded-xl bg-white text-orange-600 font-bold hover:bg-orange-50 transition-colors text-lg">
              Get Free Quote
            </Link>
            <a
              href={`tel:+91${BUSINESS.phones[0].number}`}
              className="px-8 py-4 rounded-xl bg-[#0D0D0D] text-white font-bold hover:bg-gray-900 transition-colors text-lg"
            >
              Call: {BUSINESS.phones[0].display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

