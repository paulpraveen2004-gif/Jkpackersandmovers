import Link from "next/link";
import Image from "next/image";
import { BUSINESS, WHATSAPP_URL } from "@/lib/config";
import { formatPhone } from "@/lib/utils";

const SERVICES = [
  { label: "Household Shifting",           href: "/services#household" },
  { label: "Local Shifting",               href: "/services#local" },
  { label: "Office Relocation",            href: "/services#office" },
  { label: "Packing & Unpacking",          href: "/services#packing" },
  { label: "Loading & Unloading",          href: "/services#loading" },
  { label: "Vehicle & Special Items",      href: "/services#vehicle" },
  { label: "Intercity Relocation",         href: "/services#intercity" },
  { label: "Labour Services",              href: "/services#labour" },
];

const QUICK_LINKS = [
  { label: "Home",          href: "/" },
  { label: "About Us",      href: "/about" },
  { label: "Services",      href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Gallery",       href: "/gallery" },
  { label: "Contact",       href: "/contact" },
  { label: "Privacy Policy",href: "/privacy-policy" },
  { label: "Terms",         href: "/terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0D0D0D] text-gray-400">

      {/* ── CTA banner ── */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Ready to shift? Get a free quotation today.
            </h2>
            <p className="text-orange-100 mt-1">
              Share your details and we&apos;ll contact you with a tailored quote.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact#quote"
              className="px-6 py-3 rounded-xl bg-white text-orange-600 font-bold hover:bg-orange-50 transition-colors whitespace-nowrap"
            >
              Get Free Quote
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#111111] text-white font-bold hover:bg-gray-900 transition-colors whitespace-nowrap"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="relative h-12 w-44 mb-5">
            <Image src="/logo.png" alt="JK Packers & Movers" fill className="object-contain" />
          </div>
          <p className="text-sm leading-relaxed text-gray-500 mb-5">
            Professional packing and moving services in Chennai, Kundrathur, Thiruvallur and nearby areas.
            Customer-focused, careful, and reliable.
          </p>
          <div className="space-y-2">
            {BUSINESS.phones.map((p) => (
              <a
                key={p.number}
                href={formatPhone(p.number)}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-orange-500" />
                {p.display}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
            >
              <WAIcon className="w-4 h-4 text-[#25D366]" />
              WhatsApp Enquiry
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors"
            >
              <MailIcon className="w-4 h-4 text-orange-500" />
              {BUSINESS.email}
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 relative">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-500 rounded-full" />
          </h3>
          <ul className="space-y-2 mt-4">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-gray-500 hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronIcon className="w-3 h-3 text-orange-500" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 relative">
            Our Services
            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-500 rounded-full" />
          </h3>
          <ul className="space-y-2 mt-4">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-sm text-gray-500 hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronIcon className="w-3 h-3 text-orange-500" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 relative">
            Service Areas
            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-500 rounded-full" />
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {BUSINESS.serviceAreas.slice(0, 10).map((area) => (
              <Link
                key={area}
                href="/service-areas"
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-400 hover:bg-orange-500/20 hover:text-orange-400 border border-white/10 transition-all"
              >
                {area}
              </Link>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-xs text-gray-400 leading-relaxed">
              <span className="text-orange-400 font-semibold">Fast Response Guarantee</span><br />
              Contact us on WhatsApp or call anytime for instant shifting quotes and vehicle availability.
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>© {year} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms"          className="hover:text-orange-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.6.57 1 1 0 011 1v3.5a1 1 0 01-1 1C9.39 22 2 14.61 2 5.5a1 1 0 011-1H6.5a1 1 0 011 1 11.5 11.5 0 00.57 3.6 1 1 0 01-.25 1.01l-2.2 2.2z" /></svg>;
}
function WAIcon({ className }: { className?: string }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
}
function MailIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
}
function ChevronIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>;
}

