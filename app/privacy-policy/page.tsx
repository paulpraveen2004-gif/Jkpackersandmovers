import type { Metadata } from "next";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy | JK Packers & Movers",
  description: "Privacy policy for JK Packers & Movers — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  const date = "October 2026";
  return (
    <div className="section-pad">
      <div className="container-xl max-w-3xl">
        <h1 className="section-title mb-2">Privacy Policy</h1>
        <span className="orange-line" />
        <p className="text-sm text-gray-400 mb-8">Last updated: {date}</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-gray-900">1. Who We Are</h2>
            <p>
              {BUSINESS.name} is a packing and moving service operating in Chennai, Tamil Nadu, India.
              Contact: {BUSINESS.phones[0].display} | {BUSINESS.email}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">2. Information We Collect</h2>
            <p>When you use our quotation form or contact us, we collect:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Name, mobile number, and optional email address</li>
              <li>Shifting details (dates, locations, floor numbers, item lists)</li>
              <li>Optional: photos or videos of items to be moved</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To prepare and deliver your shifting quotation</li>
              <li>To communicate with you regarding your enquiry or booking</li>
              <li>To improve our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">4. Information Sharing</h2>
            <p>
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
              Information is shared only where required to deliver the moving service (e.g., operations team) or
              where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">5. WhatsApp Communication</h2>
            <p>
              When you contact us via WhatsApp, your messages are subject to WhatsApp&apos;s own privacy policy.
              We use WhatsApp only to respond to your enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">6. Data Retention</h2>
            <p>
              We retain customer information only as long as necessary to manage your booking and for
              reasonable record-keeping. You may request deletion of your data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">7. Security</h2>
            <p>
              We take reasonable steps to protect customer information. This website uses HTTPS in production.
              We do not store payment card information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">8. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal information.
              Contact us at {BUSINESS.email} or {BUSINESS.phones[0].display}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">9. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. The latest version will always be available on
              this page with the updated date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">10. Contact</h2>
            <p>
              For any privacy-related questions, contact us at:
              <br />
              Phone: {BUSINESS.phones[0].display}
              <br />
              Email: {BUSINESS.email}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

