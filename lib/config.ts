// ============================================================
// BUSINESS CONFIGURATION — Update this file to change any
// business details, contact info, pricing, or service areas.
// ============================================================

export const BUSINESS = {
  name: "JK Packers & Movers",
  tagline: "Your Trusted Partner for Safe & Hassle-Free Shifting",
  description:
    "From careful packing to safe transportation and delivery, JK Packers & Movers helps make your relocation easier and more convenient.",

  // ── Contact ──────────────────────────────────────────────
  phones: [
    { label: "Primary", number: "6383329304", display: "+91 63833 29304" },
    { label: "Secondary", number: "9965289929", display: "+91 99652 89929" },
  ],
  // Set to the WhatsApp-enabled number (confirm with business owner)
  whatsappNumber: "916383329304",
  // Placeholder – replace when business email is confirmed
  email: "info@jkpackersandmovers.com",

  // ── Address & Hours ────────────────────────────────────────
  // Only show verified address. Do not fabricate branch addresses.
  address: "Chennai, Tamil Nadu, India",
  // Placeholder – update when confirmed
  businessHours: "Mon – Sat: 8:00 AM – 8:00 PM | Sun: 9:00 AM – 5:00 PM",

  // ── Service Areas ─────────────────────────────────────────
  serviceAreas: [
    "Chennai",
    "Kundrathur",
    "Thiruvallur",
    "Porur",
    "Tambaram",
    "Chromepet",
    "Pallavaram",
    "Poonamallee",
    "Avadi",
    "Ambattur",
    "Anna Nagar",
    "Adyar",
    "Velachery",
    "Sholinganallur",
    "OMR",
  ],

  // ── Pricing Notes ─────────────────────────────────────────
  pricing: {
    largerVehicleSurcharge: 1500,
    threeDoorWardrobeFee: 1500,
    twoDoorWardrobeFee: 0,
    // These values are editable. Keep amounts in INR.
    note: "Final pricing is confirmed after reviewing actual requirements.",
  },

  // ── Social / Reviews ──────────────────────────────────────
  googleReviewsUrl:
    "https://www.google.com/searchviewer/10?output=search&svid=CCYSGioYOhYweDA6MHg0NDYzMTE5M2E1NTU5Y2NhGAo&hl=en-GB&gl=IN#sv=CAESzQEKuQEStgEKd0FERGJXZWJZekF3bUpsNVVia1U5RU5DM0gyTXNudVVleE1hdWFMZWNKSFFPM3Mzd2Q4dk81RFRXdnJTWldSNXp1MzAyWmhKb1h1MUpocU9GNFY2UXNrQ1VfSVJjSTBJd2lmZEt6YTVLT2lsRVE0Tm52SnVNLVQ0EhdXb1hsYXF6QU1vYWhodmNQbHJhQndBWRoiQUhOMEU3R2R6RVFfVkE5ZlBVa3YtX3VuSW9qZmhuM3dadxIEODA1MRoBMyoAMAA4AUAAGAAg9J-wrQVKAhAB",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=JK+Packers+%26+Movers+Chennai",

  // ── SEO ───────────────────────────────────────────────────
  siteUrl: "https://www.jkpackersandmovers.com",
  siteTitle: "JK Packers & Movers Chennai | Home & Office Shifting Services",
  siteDescription:
    "JK Packers & Movers in Chennai offers professional home shifting, office relocation, packing & unpacking, and loading & unloading services in Chennai, Kundrathur, Thiruvallur and nearby areas.",
};

// Pre-filled WhatsApp enquiry message
export const WHATSAPP_MESSAGE = encodeURIComponent(
  `Hello JK Packers & Movers,

I would like to enquire about home shifting.

Name:
Shifting Date:
Pickup Location:
Drop Location:
Pickup Floor:
Drop Floor:
Lift Availability:
Items to Be Shifted:

Please let me know how I can share a video of the items and receive a quotation.`
);

export const WHATSAPP_URL = `https://wa.me/${BUSINESS.whatsappNumber}?text=${WHATSAPP_MESSAGE}`;

