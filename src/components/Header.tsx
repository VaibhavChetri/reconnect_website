"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About Dr. Shruthi" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-surface/90 backdrop-blur-md border-b border-surface-variant/30 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center w-full px-5 md:px-16 h-20 max-w-[1200px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-primary tracking-tight">
            Reconnect
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-label-md text-on-surface-variant font-medium hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/assessment" className="btn-amber">
            Take the free assessment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-on-surface p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-surface-variant/30 px-5 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-md text-on-surface-variant hover:text-primary transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/assessment"
              className="btn-amber text-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Take the free assessment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
