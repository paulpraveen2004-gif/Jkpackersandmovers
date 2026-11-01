import type { Metadata } from "next";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms & Conditions | JK Packers & Movers",
  description: "Terms and conditions for using JK Packers & Movers services in Chennai.",
};

export default function TermsPage() {
  const date = "October 2026";
  return (
    <div className="section-pad">
      <div className="container-xl max-w-3xl">
        <h1 className="section-title mb-2">Terms & Conditions</h1>
        <span className="orange-line" />
        <p className="text-sm text-gray-400 mb-8">Last updated: {date}</p>

        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          {[
            {
              title: "1. Quotation and Booking",
              body: "A quotation is provided based on the information shared by the customer, including item lists and videos or photos. The quotation is valid only for the details provided. Final pricing is confirmed in writing before the booking is accepted. Quotations are not bookings until confirmed by our team.",
            },
            {
              title: "2. Accurate Information",
              body: "Customers must provide accurate and complete shifting details. Additional items, floors, carrying distances, or special requirements not disclosed at the time of quotation may attract additional charges. JK Packers & Movers reserves the right to revise the quote if the scope of work changes.",
            },
            {
              title: "3. Additional Charges",
              body: "Additional charges may apply for: (a) larger vehicles depending on cargo volume, (b) specialised furniture handling or assembly, (c) items not disclosed in the original enquiry, (d) staircase carrying where no lift is available, (e) special handling of fragile or oversized items. All additional charges are communicated and agreed before the work is carried out.",
            },
            {
              title: "4. AC Dismantling and Installation",
              body: "AC dismantling and installation are not part of the standard moving service. These require a professional technician. If the customer requires this service, it is arranged separately at an additional cost and is subject to technician availability.",
            },
            {
              title: "5. Cancellation and Rescheduling",
              body: "Customers should notify us as early as possible if they need to cancel or reschedule. Cancellation terms will be stated in the confirmed booking. JK Packers & Movers reserves the right to reschedule due to unforeseen circumstances.",
            },
            {
              title: "6. Liability",
              body: "JK Packers & Movers takes reasonable care of customer belongings. Liability for loss or damage is limited to the service scope confirmed in the quotation. We are not liable for pre-existing damage, inherent fragility of items not disclosed, damage caused by customer packing, or events outside our reasonable control.",
            },
            {
              title: "7. GST",
              body: "GST is applicable on the service as per the applicable rate. Your invoice will clearly indicate GST where applicable.",
            },
            {
              title: "8. Service Area",
              body: "Services are provided in confirmed service areas only. We will advise if a specific location is outside our current operational area.",
            },
            {
              title: "9. Changes to Terms",
              body: "These terms may be updated. The current version applies to all bookings made after the date shown above.",
            },
            {
              title: "10. Contact",
              body: `For any questions about these terms, contact us at ${BUSINESS.phones[0].display} or ${BUSINESS.email}.`,
            },
          ].map((section) => (
            <section key={section.title}>
              <h2 className="text-base font-bold text-gray-900 mb-2">{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

