import type { Metadata } from "next";
import { BUSINESS } from "@/lib/config";
import QuoteForm from "@/components/sections/QuoteForm";
import Link from "next/link";
import { formatPhone } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact JK Packers & Movers Chennai | Get a Free Moving Quote",
  description: "Contact JK Packers & Movers for a free home shifting or office relocation quote in Chennai. Call, WhatsApp, or fill our quotation form.",
  alternates: { canonical: `${BUSINESS.siteUrl}/contact` },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="dark-section text-white py-20 md:py-24">
        <div className="container-xl text-center">
          <span className="section-tag">Get in Touch</span>
          <h1 className="section-title-white mt-2">Contact Us</h1>
          <span className="orange-line mx-auto" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            Have a move coming up? Share your shifting details with us to receive a quotation tailored to your requirements.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-pad bg-gray-50">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-1">Contact Details</h2>
                <span className="orange-line" />
              </div>

              {/* Phones */}
              {BUSINESS.phones.map((p) => (
                <ContactCard
                  key={p.number}
                  icon={<PhoneIcon className="w-5 h-5 text-orange-500" />}
                  label={`${p.label} Phone`}
                >
                  <a href={formatPhone(p.number)} className="text-gray-800 font-semibold hover:text-orange-500 transition-colors text-lg">
                    {p.display}
                  </a>
                  <a href={formatPhone(p.number)} className="btn-primary mt-3 text-sm py-2.5">
                    <PhoneIcon className="w-4 h-4" /> Call Now
                  </a>
                </ContactCard>
              ))}

              {/* WhatsApp */}
              <ContactCard
                icon={<WAIcon className="w-5 h-5 text-[#25D366]" />}
                label="WhatsApp"
              >
                <p className="text-gray-600 text-sm mb-3">
                  Send your shifting details and item video directly via WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${BUSINESS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm py-2.5"
                >
                  <WAIcon className="w-4 h-4" /> Open WhatsApp
                </a>
              </ContactCard>

              {/* Email */}
              <ContactCard
                icon={<MailIcon className="w-5 h-5 text-orange-500" />}
                label="Email"
              >
                <a href={`mailto:${BUSINESS.email}`} className="text-gray-700 hover:text-orange-500 transition-colors text-sm break-all">
                  {BUSINESS.email}
                </a>
                <p className="text-xs text-gray-400 mt-1">(Placeholder — update once email is confirmed)</p>
              </ContactCard>

              {/* Service area */}
              <ContactCard
                icon={<PinIcon className="w-5 h-5 text-orange-500" />}
                label="Service Areas"
              >
                <p className="text-gray-700 text-sm">
                  {BUSINESS.serviceAreas.slice(0, 5).join(", ")} and nearby areas.
                </p>
                <Link href="/service-areas" className="text-orange-500 text-xs font-semibold hover:underline mt-1 inline-block">
                  View all areas →
                </Link>
              </ContactCard>

              {/* Google Maps */}
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors"
              >
                <PinIcon className="w-4 h-4 text-orange-400" />
                View on Google Maps
              </a>
            </div>

            {/* Right: Quote form */}
            <div id="quote" className="lg:col-span-3">
              <div className="card p-7 md:p-10">
                <div className="mb-6">
                  <h2 className="text-2xl font-extrabold text-gray-900">Request a Quotation</h2>
                  <span className="orange-line" />
                  <p className="text-gray-500 text-sm mt-2">
                    Fill in your details below. Your enquiry will be sent via WhatsApp and our team will respond with a tailored quotation.
                  </p>
                </div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon, label, children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</span>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
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
function ClockIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
function PinIcon({ className }: { className?: string }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.218-4.402 3.218-7.327C19.5 7.442 16.058 4 12 4S4.5 7.442 4.5 10.997c0 2.925 1.274 5.248 3.218 7.327a19.58 19.58 0 002.683 2.282c.376.267.731.499 1.038.7l.104.044zM12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" /></svg>;
}

