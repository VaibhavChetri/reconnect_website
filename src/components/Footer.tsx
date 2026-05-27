import Link from "next/link";

const footerLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Success Stories" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/faq", label: "FAQ" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Accessibility" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary mt-auto">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-[var(--font-display)] text-2xl font-bold block mb-4">
              Reconnect
            </span>
            <p className="text-on-primary/80 text-body-md max-w-sm">
              A rheumatologist-led, personalized strength and nutrition program for joint pain,
              arthritis, and bone health. Designed to work alongside your medication, not instead of it.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-label-md font-semibold mb-4 text-on-primary/90">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-on-primary/70 hover:text-on-primary transition-colors text-body-md"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-label-md font-semibold mb-4 text-on-primary/90">Legal</h4>
            <nav className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-on-primary/70 hover:text-on-primary transition-colors text-body-md"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-on-primary/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption text-on-primary/60">
            &copy; {new Date().getFullYear()} Reconnect Wellness. Designed for restorative health.
          </p>
          <p className="text-caption text-on-primary/60">
            Designed by Dr. Shruthi Desai, Rheumatologist.
          </p>
        </div>
      </div>
    </footer>
  );
}
