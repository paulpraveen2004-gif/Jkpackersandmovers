"use client";
import Link from "next/link";
import { WHATSAPP_URL, BUSINESS } from "@/lib/config";
import { formatPhone } from "@/lib/utils";

const TRUST_ITEMS = [
  {
    icon: "📦",
    title: "Professional Packing",
    desc: "Careful handling of all your belongings with suitable materials.",
  },
  {
    icon: "🚚",
    title: "Safe Transportation",
    desc: "Your goods transported securely to the destination.",
  },
  {
    icon: "🤝",
    title: "Customer-Focused Service",
    desc: "Clear communication and support throughout your move.",
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 60%, #1f1106 100%)",
      }}
    >
      {/* ── Background pattern ── */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Orange accent top-right ── */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── Left: Copy ── */}
          <div className="text-center lg:text-left lg:col-span-7">
            {/* Badge */}
            <div className="shimmer-badge inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-5 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Serving Chennai &amp; Nearby Areas
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-white leading-[1.2] tracking-tight animate-fade-up delay-100">
              Your Trusted Partner
              <br />
              for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Safe &amp; Hassle-Free
              </span>
              <br />
              Shifting
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-up delay-200">
              From careful packing to safe transportation and delivery,{" "}
              <strong className="text-gray-200">JK Packers &amp; Movers</strong> helps make your
              relocation easier, organized, and worry-free.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3.5 justify-center lg:justify-start items-center animate-fade-up delay-300">
              <Link href="/contact#quote" className="btn-primary text-sm px-6 py-3 shadow-orange">
                <QuoteIcon className="w-4 h-4" />
                Get a Free Quote
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm px-6 py-3"
              >
                <WAIcon className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Click-to-call numbers in clean row */}
            <div className="mt-5 flex flex-wrap gap-5 justify-center lg:justify-start items-center animate-fade-up delay-400">
              {BUSINESS.phones.map((p) => (
                <a
                  key={p.number}
                  href={formatPhone(p.number)}
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-xs sm:text-sm font-medium"
                >
                  <PhoneIcon className="w-3.5 h-3.5 text-orange-500" />
                  {p.display}
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fade-up delay-500">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all text-left"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white">{item.title}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Quick info card ── */}
          <div className="animate-fade-up delay-200 lg:col-span-5">
            <div className="animate-float bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 max-w-md mx-auto lg:max-w-none transition-shadow hover:shadow-orange-500/10">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <QuoteIcon className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-extrabold text-gray-900 text-base leading-tight">
                    Get a Quick Enquiry
                  </h2>
                  <p className="text-[11px] text-gray-500 mt-0.5">We respond within a few hours</p>
                </div>
              </div>

              <QuickEnquiryForm />
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator text-gray-600 text-xs text-center">
          <div className="w-5 h-9 rounded-full border-2 border-gray-600 mx-auto flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-orange-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Quick inline form (full form is on contact page) ── */
function QuickEnquiryForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd  = new FormData(e.currentTarget);
    const name = fd.get("name") || "";
    const from = fd.get("from") || "";
    const to   = fd.get("to")   || "";
    const date = fd.get("date") || "";
    const type = fd.get("type") || "";

    const msg = encodeURIComponent(
      `Hello JK Packers & Movers,\n\nI would like a quote for shifting.\n\nName: ${name}\nShifting Date: ${date}\nPickup Location: ${from}\nDrop Location: ${to}\nProperty Type: ${type}\n\nPlease contact me.`
    );
    window.open(`https://wa.me/${BUSINESS.whatsappNumber}?text=${msg}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="form-label text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
        <input name="name" required placeholder="e.g. Ravi Kumar" className="form-input text-xs sm:text-sm py-2 px-3 rounded-lg" />
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <div>
          <label className="form-label text-xs font-semibold text-gray-700 mb-1">Pickup Location *</label>
          <input name="from" required placeholder="e.g. Kundrathur" className="form-input text-xs sm:text-sm py-2 px-3 rounded-lg" />
        </div>
        <div>
          <label className="form-label text-xs font-semibold text-gray-700 mb-1">Drop Location *</label>
          <input name="to" required placeholder="e.g. Anna Nagar" className="form-input text-xs sm:text-sm py-2 px-3 rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <div>
          <label className="form-label text-xs font-semibold text-gray-700 mb-1">Shifting Date *</label>
          <input name="date" type="date" required className="form-input text-xs sm:text-sm py-2 px-3 rounded-lg text-gray-700" />
        </div>
        <div>
          <label className="form-label text-xs font-semibold text-gray-700 mb-1">Property Type</label>
          <select name="type" className="form-input text-xs sm:text-sm py-2 px-3 rounded-lg text-gray-700">
            <option value="">Select</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>Villa</option>
            <option>Office</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn-primary w-full justify-center text-xs sm:text-sm py-2.5 mt-2 rounded-xl shadow-md hover:shadow-orange-500/25">
        <WAIcon className="w-4 h-4" />
        Send via WhatsApp
      </button>

      {/* Prominent alternative option */}
      <div className="pt-1">
        <div className="relative flex items-center my-2">
          <div className="flex-grow border-t border-gray-200" />
          <span className="flex-shrink mx-3 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
            or
          </span>
          <div className="flex-grow border-t border-gray-200" />
        </div>
        <Link
          href="/contact#quote"
          className="group w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-orange-500/30 bg-orange-50/70 hover:bg-orange-500 hover:border-orange-500 text-orange-600 hover:text-white font-semibold text-xs transition-all duration-200"
        >
          <span>Fill Detailed Quotation Form</span>
          <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </form>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
}
function WAIcon({ className }: { className?: string }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
}
function PhoneIcon({ className }: { className?: string }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.6.57 1 1 0 011 1v3.5a1 1 0 01-1 1C9.39 22 2 14.61 2 5.5a1 1 0 011-1H6.5a1 1 0 011 1 11.5 11.5 0 00.57 3.6 1 1 0 01-.25 1.01l-2.2 2.2z" /></svg>;
}

