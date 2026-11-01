"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/config";

type FormData = {
  name: string;
  mobile: string;
  email: string;
  date: string;
  pickup: string;
  drop: string;
  pickupFloor: string;
  dropFloor: string;
  liftPickup: string;
  liftDrop: string;
  propertyType: string;
  items: string;
  packingReq: string;
  vehicle: string;
  notes: string;
};

const INITIAL: FormData = {
  name: "", mobile: "", email: "", date: "", pickup: "", drop: "",
  pickupFloor: "", dropFloor: "", liftPickup: "Yes", liftDrop: "Yes",
  propertyType: "", items: "", packingReq: "Full Packing", vehicle: "", notes: "",
};

function FormField({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="form-label">
        {label}
        {required && <span className="text-orange-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

export default function QuoteForm() {
  const [form, setForm]         = useState<FormData>(INITIAL);
  const [errors, setErrors]     = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim())              e.name     = "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = "Enter a valid 10-digit Indian mobile number";
    if (!form.date)                     e.date     = "Shifting date is required";
    if (!form.pickup.trim())            e.pickup   = "Pickup location is required";
    if (!form.drop.trim())              e.drop     = "Drop location is required";
    if (!form.propertyType)             e.propertyType = "Select property type";
    if (!form.items.trim())             e.items    = "Please list the items to be shifted";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `Hello JK Packers & Movers, I would like to request a quotation.\n`,
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      form.email ? `Email: ${form.email}` : null,
      `Shifting Date: ${form.date}`,
      `Pickup Location: ${form.pickup}`,
      `Drop Location: ${form.drop}`,
      `Pickup Floor: ${form.pickupFloor || "Ground"}`,
      `Drop Floor: ${form.dropFloor || "Ground"}`,
      `Lift at Pickup: ${form.liftPickup}`,
      `Lift at Drop: ${form.liftDrop}`,
      `Property Type: ${form.propertyType}`,
      `Items: ${form.items}`,
      `Packing Requirement: ${form.packingReq}`,
      form.vehicle ? `Vehicle Preference: ${form.vehicle}` : null,
      form.notes  ? `Additional Notes: ${form.notes}` : null,
      `\nPlease let me know how I can share a video of the items.`,
    ].filter(Boolean).join("\n");
    return encodeURIComponent(lines);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const url = `https://wa.me/${BUSINESS.whatsappNumber}?text=${buildWhatsAppMessage()}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Details Sent via WhatsApp!</h3>
        <p className="text-gray-500 mb-6 max-w-sm mx-auto">
          Your shifting details have been sent. Our team will review and respond with a quotation shortly.
        </p>
        <button onClick={() => { setForm(INITIAL); setSubmitted(false); }} className="btn-secondary text-sm">
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Notice */}
      <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-sm text-orange-700">
        <strong>To provide an accurate quotation</strong>, please share complete shifting details and a
        video showing all items to be moved. Our team will review the details and contact you with a quotation.
      </div>

      {/* Personal */}
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="Customer Name" error={errors.name} required>
          <input className={`form-input ${errors.name ? "border-red-400" : ""}`}
            value={form.name} onChange={set("name")} placeholder="Your full name" />
        </FormField>
        <FormField label="Mobile Number" error={errors.mobile} required>
          <input className={`form-input ${errors.mobile ? "border-red-400" : ""}`}
            value={form.mobile} onChange={set("mobile")} placeholder="10-digit mobile" inputMode="numeric" maxLength={10} />
        </FormField>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="Email Address (Optional)" error={errors.email}>
          <input type="email" className="form-input" value={form.email} onChange={set("email")} placeholder="your@email.com" />
        </FormField>
        <FormField label="Shifting Date" error={errors.date} required>
          <input type="date" className={`form-input ${errors.date ? "border-red-400" : ""}`}
            value={form.date} onChange={set("date")} min={new Date().toISOString().split("T")[0]} />
        </FormField>
      </div>

      {/* Locations */}
      <FormField label="Pickup Location / Full Address" error={errors.pickup} required>
        <textarea className={`form-input min-h-[80px] resize-y ${errors.pickup ? "border-red-400" : ""}`}
          value={form.pickup} onChange={set("pickup")} placeholder="Full pickup address including area, city" />
      </FormField>
      <FormField label="Drop Location / Full Address" error={errors.drop} required>
        <textarea className={`form-input min-h-[80px] resize-y ${errors.drop ? "border-red-400" : ""}`}
          value={form.drop} onChange={set("drop")} placeholder="Full drop address including area, city" />
      </FormField>

      {/* Floor / lift */}
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="Pickup Floor" error={errors.pickupFloor}>
          <input className="form-input" value={form.pickupFloor} onChange={set("pickupFloor")} placeholder="e.g. Ground, 1st, 3rd" />
        </FormField>
        <FormField label="Drop Floor" error={errors.dropFloor}>
          <input className="form-input" value={form.dropFloor} onChange={set("dropFloor")} placeholder="e.g. Ground, 2nd" />
        </FormField>
        <FormField label="Lift at Pickup?" error={errors.liftPickup}>
          <select className="form-input" value={form.liftPickup} onChange={set("liftPickup")}>
            <option>Yes</option><option>No</option><option>Not Sure</option>
          </select>
        </FormField>
        <FormField label="Lift at Drop?" error={errors.liftDrop}>
          <select className="form-input" value={form.liftDrop} onChange={set("liftDrop")}>
            <option>Yes</option><option>No</option><option>Not Sure</option>
          </select>
        </FormField>
      </div>

      {/* Property / items */}
      <FormField label="Property Type" error={errors.propertyType} required>
        <select className={`form-input ${errors.propertyType ? "border-red-400" : ""}`}
          value={form.propertyType} onChange={set("propertyType")}>
          <option value="">Select property type</option>
          <option>1 BHK</option><option>2 BHK</option><option>3 BHK</option>
          <option>Villa</option><option>Office</option><option>Other</option>
        </select>
      </FormField>

      <FormField label="Items to Be Shifted" error={errors.items} required>
        <textarea className={`form-input min-h-[100px] resize-y ${errors.items ? "border-red-400" : ""}`}
          value={form.items} onChange={set("items")}
          placeholder="e.g. 1 sofa, 2 beds, 1 washing machine, 1 fridge, 20 carton boxes..." />
      </FormField>

      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="Packing Requirement" error={errors.packingReq}>
          <select className="form-input" value={form.packingReq} onChange={set("packingReq")}>
            <option>Full Packing</option>
            <option>Partial Packing</option>
            <option>Self-Packed (No Packing Needed)</option>
            <option>Not Sure</option>
          </select>
        </FormField>
        <FormField label="Vehicle Requirement (if known)" error={errors.vehicle}>
          <select className="form-input" value={form.vehicle} onChange={set("vehicle")}>
            <option value="">Not Sure — Team Will Advise</option>
            <option>Small Vehicle (Mini Truck)</option>
            <option>Medium Vehicle (407)</option>
            <option>Large Vehicle</option>
          </select>
        </FormField>
      </div>

      <FormField label="Additional Notes" error={errors.notes}>
        <textarea className="form-input min-h-[80px] resize-y" value={form.notes} onChange={set("notes")}
          placeholder="Anything else we should know — special items, timing, access restrictions, etc." />
      </FormField>

      {/* Photo upload note */}
      <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-sm text-blue-700">
        <strong>📸 Upload Photos / Video:</strong> After clicking &quot;Request My Quote&quot; below, you will be
        redirected to WhatsApp where you can attach photos or a video of your items directly in the chat.
      </div>

      <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
        <SendIcon className="w-5 h-5" />
        Request My Quote via WhatsApp
      </button>

      <p className="text-center text-xs text-gray-400">
        Your details are used only to prepare your quotation. We do not share or publish customer information.
      </p>
    </form>
  );
}

function SendIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>;
}

