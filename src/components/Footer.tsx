"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const footerNav1 = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "2026 Season", href: "/season" },
  { label: "Results", href: "/results" },
  { label: "Gallery", href: "/gallery" },
];

const footerNav2 = [
  { label: "Contact", href: "/contact" },
  { label: "Shop", href: "/shop" },
  { label: "Partnerships", href: "/partnerships" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  }

  return (
    <footer className="footer-bg text-white">
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="footer-inner animate-fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Column 1: Logo + Bio */}
          <div className="flex flex-col gap-4 items-center sm:items-start sm:col-span-2 lg:col-span-1 text-center sm:text-left" style={{paddingBottom: '12px'}}>
            <Link href="/" className="inline-block">
              <Image
                src="https://www.carterknight.racing/hs-fs/hubfs/Horizontal-W-on-Transparent.png"
                alt="Carter Knight Racing"
                width={160}
                height={50}
                className="object-contain"
                unoptimized
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/70 max-w-[300px]">
              Carter Knight is a 16-year-old race car driver competing regionally in Spec Miata,
              building his future in motorsports from the Reno–Tahoe region.
            </p>
            <a
              href="mailto:ck@carterknight.racing"
              className="text-white/55 text-sm hover:text-white transition-colors"
            >
              ck@carterknight.racing
            </a>
            {/* Social icons */}
            <div className="flex gap-3 mt-1 justify-center sm:justify-start">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg fill="white" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/carterknightracing?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <svg fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" width="18" height="18">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
                </svg>
              </a>
              <a
                href="https://app.hubspot.com/l/ecosystem/marketplace/website/themes/generator-theme-by-drive-web-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="YouTube"
              >
                <svg fill="white" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon fill="#052c52" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Nav links */}
          <div className="flex gap-10 sm:gap-16 justify-center sm:justify-start">
            <div className="flex flex-col gap-3">
              {footerNav1.map((link) => (
                <Link key={link.href + link.label} href={link.href} className="text-white/60 text-sm font-medium hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {footerNav2.map((link) => (
                <Link key={link.href + link.label} href={link.href} className="text-white/60 text-sm font-medium hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
            <p className="text-xs font-bold tracking-[2px] uppercase text-white/45">Racing Updates</p>
            <p className="text-white font-bold text-sm">Join Carter&apos;s Mailing List</p>
            <div className="h-px w-full bg-white/15" />
            {subscribed ? (
              <p className="text-white/70 text-sm">✓ You&apos;re subscribed! Thanks for the support.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-3 py-2.5 text-sm text-black bg-white/95 rounded-sm outline-none focus:ring-2 focus:ring-white/40"
                />
                <button type="submit" className="btn-primary text-xs px-4 py-2 whitespace-nowrap shrink-0">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px w-full bg-white/10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40 pt-4">
          <p>© 2026 Carter Knight Racing · All Rights Reserved</p>
          <p className="hidden sm:block">Reno–Tahoe · Spec Miata · N. CA NASA</p>
        </div>
      </div>
    </footer>
  );
}

