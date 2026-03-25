"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "2026 SEASON", href: "/season" },
  { label: "RESULTS", href: "/results" },
  { label: "CONTACT", href: "/contact" },
  { label: "SHOP", href: "/shop" },
  { label: "ABOUT", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={`navbar w-full ${scrolled ? "navbar--solid" : ""}`}
      style={!scrolled ? { backgroundColor: "rgba(12, 83, 148, 0.95)" } : undefined}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[68px] md:h-[76px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="https://www.carterknight.racing/hs-fs/hubfs/Horizontal-W-on-Transparent.png"
            alt="Carter Knight Racing"
            width={200}
            height={62}
            className="object-contain w-[220px] sm:w-[280px] md:w-[340px]"
            unoptimized
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "nav-link--active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-md transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu — animated slide */}
      <div className={`mobile-menu md:hidden ${menuOpen ? "mobile-menu--open" : ""}`}>
        <div
          className="mobile-menu__inner border-t border-white/15"
        >
          <nav className="flex flex-col px-6 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link py-4 border-b border-white/10 last:border-0 text-base ${
                  pathname === link.href ? "nav-link--active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

