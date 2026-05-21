"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Client Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "Impact Stories", href: "/impact" },
  { label: "Join Us", href: "/join-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: scrolled ? "var(--paper)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(102,96,161,0.2)" : "none",
          opacity: isHome && !scrolled ? 0 : 1,
          pointerEvents: isHome && !scrolled ? "none" : "auto",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={scrolled ? "/logos/NewDCivitasLogo_black.png" : "/logos/NewDCivitasLogo_white.png"}
              alt="DCivitas"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
              style={{
                transition: "opacity 200ms ease, filter 200ms ease",
                filter: scrolled
                  ? "brightness(0) saturate(100%) invert(18%) sepia(60%) saturate(600%) hue-rotate(198deg)"
                  : "brightness(0) invert(1) sepia(30%) saturate(200%) hue-rotate(225deg) brightness(1.15)",
              }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-150 font-medium"
                style={{
                  fontSize: "var(--text-sm)",
                  letterSpacing: "0.02em",
                  color: scrolled ? "var(--ink)" : "var(--paper)",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                {link.label}
              </Link>
            ))}
            {/* CTA pill */}
            <Link
              href="/work-with-us"
              className="rounded-full font-medium transition-all duration-150 active:scale-[0.98]"
              style={{
                fontSize: "var(--text-sm)",
                padding: "0.5rem 1.25rem",
                backgroundColor: "var(--purple-dark)",
                color: "var(--paper)",
                fontFamily: "var(--font-public-sans)",
              }}
            >
              Work with Us
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            style={{ color: scrolled ? "var(--ink)" : "var(--paper)" }}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex">
          {/* Backdrop */}
          <div
            className="flex-1 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <div
            className="w-72 flex flex-col p-8 gap-6"
            style={{ backgroundColor: "var(--purple-deep)" }}
          >
            <button
              className="self-end p-1 rounded"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{ color: "var(--paper)" }}
            >
              <X size={24} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-medium"
                style={{
                  fontSize: "var(--text-md)",
                  color: "var(--paper)",
                  letterSpacing: "0.02em",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/work-with-us"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full text-center font-medium"
              style={{
                fontSize: "var(--text-sm)",
                padding: "0.625rem 1.5rem",
                backgroundColor: "var(--paper)",
                color: "var(--purple-dark)",
                fontFamily: "var(--font-public-sans)",
              }}
            >
              Work with Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
