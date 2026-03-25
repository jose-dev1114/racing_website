import Link from "next/link";
import Image from "next/image";

const benefits = [
  {
    icon: "🏎️",
    title: "Brand Exposure",
    desc: "Get your brand in front of racing fans across the Reno-Tahoe region and Northern California at every race event.",
  },
  {
    icon: "📱",
    title: "Social Media",
    desc: "Featured placement across Carter's growing social channels — Instagram, Facebook, and beyond.",
  },
  {
    icon: "🏁",
    title: "Race Day Presence",
    desc: "Logo placement on the car and race suit, plus representation at every Northern California NASA round.",
  },
  {
    icon: "🌐",
    title: "Website Feature",
    desc: "Your logo and brand story featured on carterknight.racing — a dedicated, permanent placement.",
  },
  {
    icon: "📸",
    title: "Photo & Media",
    desc: "Professional race photos and content featuring your brand, ready for your own marketing use.",
  },
  {
    icon: "🤝",
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
            src="https://www.carterknight.racing/hs-fs/hubfs/Carter%26%20Casey-155%202.jpg"
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
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-white font-bold text-base mb-2">{item.title}</h4>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14 animate-fade-up delay-400">
            <Link href="/contact" className="btn-primary px-12">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

