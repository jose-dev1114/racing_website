import Link from "next/link";
import Image from "next/image";
import QuoteStrip from "@/components/QuoteStrip";

/* ── Reusable SVG wrapper ─────────────────────────────────────── */
function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-white/5">
      {children}
    </div>
  );
}

const benefits = [
  {
    icon: (
      <Icon>
        {/* Megaphone — Brand Exposure */}
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
          <path d="M3 11v2a1 1 0 0 0 1 1h2l3 4V7L6 11H4a1 1 0 0 0-1 1z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      </Icon>
    ),
    title: "Brand Exposure",
    desc: "Get your brand in front of racing fans across the Reno-Tahoe region and Northern California at every race event.",
  },
  {
    icon: (
      <Icon>
        {/* Share / Social */}
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      </Icon>
    ),
    title: "Social Media",
    desc: "Featured placement across Carter's growing social channels — Instagram, Facebook, and beyond.",
  },
  {
    icon: (
      <Icon>
        {/* Flag — Race Day */}
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      </Icon>
    ),
    title: "Race Day Presence",
    desc: "Logo placement on the car and race suit, plus representation at every Northern California NASA round.",
  },
  {
    icon: (
      <Icon>
        {/* Globe — Website */}
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </Icon>
    ),
    title: "Website Feature",
    desc: "Your logo and brand story featured on carterknight.racing — a dedicated, permanent placement.",
  },
  {
    icon: (
      <Icon>
        {/* Camera — Photo & Media */}
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      </Icon>
    ),
    title: "Photo & Media",
    desc: "Professional race photos and content featuring your brand, ready for your own marketing use.",
  },
  {
    icon: (
      <Icon>
        {/* Rocket — Ground Floor */}
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      </Icon>
    ),
    title: "Ground Floor",
    desc: "Be part of the journey from the very beginning — invest early as Carter's career takes off.",
  },
];

export default function PartnershipsPage() {
  return (
    <div className="flex flex-col min-h-screen section-blue">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Partnerships</h1>
        <p className="text-white/65 text-sm tracking-[3px] uppercase mt-3">2026 Season · Spec Miata</p>
        <div className="page-header__divider" />
      </div>

      {/* Intro Section */}
      <section className="page-section px-4 sm:px-6 section-dark">
        <div className="page-content--wide mx-auto animate-fade-up">
          <Image
            src="/partnership.jpg"
            alt="Carter Knight Racing"
            width={1400}
            height={800}
            className="w-full h-auto rounded-sm object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="page-section px-4 sm:px-6">
        <div className="page-content--wide mx-auto">
          <h2 className="section-title text-center mb-12 animate-fade-up">What You Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((item, i) => (
              <div
                key={item.title}
                className={`card animate-fade-up ${i < 3 ? "delay-200" : "delay-300"}`}
              >
                {item.icon}
                <h4 className="text-white font-bold text-base mb-2">{item.title}</h4>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14 animate-fade-up delay-400" style={{paddingTop: '12px'}}>
            <Link href="/contact" className="btn-primary px-12">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      <QuoteStrip />
    </div>
  );
}

