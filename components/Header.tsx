"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BUSINESS, WHATSAPP_URL } from "@/lib/config";
import { formatPhone } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home",            href: "/" },
  { label: "About Us",        href: "/about" },
  { label: "Our Services",    href: "/services" },
  { label: "Why Choose Us",   href: "/#why-choose-us" },
  { label: "Service Areas",   href: "/service-areas" },
  { label: "Reviews",         href: "/#reviews" },
  { label: "Gallery",         href: "/gallery" },
  { label: "Contact",         href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [hash,        setHash]        = useState("");

  useEffect(() => {
    setHash(window.location.hash);
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else          document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && !hash;
    }
    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href.substring(1);
    }
    return pathname === href;
  };

  return (
    <>
      {/* ── Top bar ── */}
      <div className="hidden md:flex bg-[#0D0D0D] border-b border-white/10 text-xs text-gray-400 px-6 py-2 justify-between items-center">
        <span className="text-orange-400/90 font-medium">Safe &amp; Reliable Packers &amp; Movers in Chennai</span>
        <div className="flex items-center gap-4">
          {BUSINESS.phones.map((p) => (
            <a
              key={p.number}
              href={formatPhone(p.number)}
              className="hover:text-orange-400 transition-colors flex items-center gap-1"
            >
              <PhoneIcon className="w-3 h-3" />
              {p.display}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors flex items-center gap-1"
          >
            <WAIcon className="w-3 h-3" />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* ── Main nav ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0D0D0D]/95 backdrop-blur-md shadow-2xl"
            : "bg-[#0D0D0D]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="relative h-11 w-40 md:h-13 md:w-48 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="JK Packers & Movers Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      if (link.href.includes("#")) {
                        setHash(link.href.split("#")[1] ? `#${link.href.split("#")[1]}` : "");
                      } else {
                        setHash("");
                      }
                    }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
                      ${active
                        ? "text-orange-400 bg-orange-500/10"
                        : "text-gray-300 hover:text-orange-400 hover:bg-white/5"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={formatPhone(BUSINESS.phones[0].number)}
                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-orange-400 transition-colors py-2 whitespace-nowrap"
              >
                <PhoneIcon className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>{BUSINESS.phones[0].display}</span>
              </a>
              <Link
                href="/contact#quote"
                className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap shrink-0"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={formatPhone(BUSINESS.phones[0].number)}
                aria-label="Call us"
                className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white"
              >
                <PhoneIcon className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white"
              >
                <WAIcon className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="w-9 h-9 flex flex-col justify-center items-center gap-1.5 text-white"
              >
                <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#111111] border-t border-white/10 px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setMenuOpen(false);
                  if (link.href.includes("#")) {
                    setHash(link.href.split("#")[1] ? `#${link.href.split("#")[1]}` : "");
                  } else {
                    setHash("");
                  }
                }}
                className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                  isLinkActive(link.href)
                    ? "text-orange-400 bg-orange-500/10"
                    : "text-gray-300 hover:text-white hover:bg-orange-500/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 flex gap-3">
              <a href={formatPhone(BUSINESS.phones[0].number)} className="btn-primary flex-1 justify-center text-sm py-3">
                <PhoneIcon className="w-4 h-4" />
                Call Us
              </a>
              <Link href="/contact#quote" onClick={() => setMenuOpen(false)} className="btn-secondary flex-1 justify-center text-sm py-3">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

/* ── Inline SVG icons ── */
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.6.57 1 1 0 011 1v3.5a1 1 0 01-1 1C9.39 22 2 14.61 2 5.5a1 1 0 011-1H6.5a1 1 0 011 1 11.5 11.5 0 00.57 3.6 1 1 0 01-.25 1.01l-2.2 2.2z" />
    </svg>
  );
}

function WAIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

