import type { Metadata } from "next";
import { BUSINESS } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | JK Packers & Movers Chennai",
  description: "Learn about JK Packers & Movers — a customer-focused packing and moving business serving Chennai, Kundrathur, Thiruvallur and nearby areas.",
  alternates: { canonical: `${BUSINESS.siteUrl}/about` },
};

const VALUES = [
  { icon: "🎯", title: "Clear Communication",  desc: "We keep you informed from enquiry to delivery." },
  { icon: "🛡️", title: "Careful Handling",     desc: "Your belongings are treated with respect and care." },
  { icon: "📋", title: "Honest Quotations",    desc: "Quotes based on your actual requirements, no guesswork." },
  { icon: "🤝", title: "Customer First",       desc: "Every decision we make is focused on your convenience." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="dark-section text-white py-20 md:py-28 relative overflow-hidden">
        {/* Background watermark logo with full brand orange color & subtle blur */}
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

        <div className="container-xl text-center relative z-10">
          <span className="section-tag">Who We Are</span>
          <h1 className="section-title-white mt-2">About JK Packers & Movers</h1>
          <span className="orange-line mx-auto" />
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            A professional, customer-focused packing and moving service based in Chennai, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-white relative overflow-hidden">
        {/* Watermark logo for the white story section with brand color & subtle blur */}
        <div className="absolute right-[-80px] bottom-[-40px] w-[550px] h-[320px] opacity-[0.08] blur-[1px] pointer-events-none select-none z-0">
          <Image
            src="/logo.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>

        <div className="container-xl relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title mt-1 mb-4">Making Relocation Simpler</h2>
            <span className="orange-line" />
            <div className="space-y-5 text-gray-600 leading-relaxed text-base">
              <p>
                At JK Packers & Movers, we understand that moving to a new home or workplace is an important step.
                Our goal is to make the relocation process simpler through clear communication, careful handling,
                and moving services tailored to each customer&apos;s requirements.
              </p>
              <p>
                From the initial enquiry to delivery, we work to provide a convenient and well-organised
                shifting experience. We ask for detailed information — including a video of your items — because
                accurate preparation leads to a smoother move and a more reliable quotation.
              </p>
              <p>
                We serve Chennai and nearby areas including Kundrathur, Thiruvallur, and other serviceable
                locations. Our team communicates openly about pricing, additional charges, and service scope
                so there are no surprises on moving day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-gray-50">
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
            <span className="orange-line mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-6 text-center hover:-translate-y-1 transition-transform">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important note */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto p-8 rounded-3xl border border-orange-100 bg-orange-50">
            <h3 className="font-bold text-gray-900 text-lg mb-3">A Note on Transparency</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We do not make claims about years of experience, fleet size, awards, or ratings that we cannot
              verify. We believe honest communication builds better trust than inflated marketing promises.
              If you have questions about our capabilities for your specific move, please ask us directly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Plan Your Move?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#quote" className="px-8 py-3 rounded-xl bg-white text-orange-600 font-bold hover:bg-orange-50 transition-colors">Get Free Quote</Link>
            <Link href="/services" className="px-8 py-3 rounded-xl bg-[#0D0D0D] text-white font-bold hover:bg-gray-900 transition-colors">View Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}

