import type { Metadata } from "next";
import "./globals.css";
import { BUSINESS } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: BUSINESS.siteTitle,
    template: `%s | JK Packers & Movers Chennai`,
  },
  description: BUSINESS.siteDescription,
  keywords: [
    "packers and movers Chennai",
    "home shifting Chennai",
    "household shifting Chennai",
    "local shifting Chennai",
    "office relocation Chennai",
    "packers movers Kundrathur",
    "packers movers Thiruvallur",
    "packing unpacking service Chennai",
    "loading unloading Chennai",
    "furniture shifting Chennai",
    "JK Packers Movers",
  ],
  authors: [{ name: "JK Packers & Movers" }],
  creator: "JK Packers & Movers",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.name,
    title: BUSINESS.siteTitle,
    description: BUSINESS.siteDescription,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "JK Packers & Movers Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS.siteTitle,
    description: BUSINESS.siteDescription,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: BUSINESS.siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              name: BUSINESS.name,
              description: BUSINESS.siteDescription,
              url: BUSINESS.siteUrl,
              telephone: BUSINESS.phones.map((p) => `+91${p.number}`),
              areaServed: BUSINESS.serviceAreas.map((area) => ({
                "@type": "City",
                name: area,
              })),
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
              priceRange: "₹₹",
              openingHours: "Mo-Sa 08:00-20:00",
              serviceType: ["Packing", "Moving", "Loading", "Unloading", "Relocation"],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Toaster
          position="top-right"
          toastOptions={{
            style: { fontFamily: "Inter, sans-serif", fontSize: "14px" },
            success: { iconTheme: { primary: "#F97316", secondary: "#fff" } },
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

