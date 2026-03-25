import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Age", value: "16" },
  { label: "Class", value: "Spec Miata" },
  { label: "Region", value: "Reno–Tahoe" },
  { label: "Series", value: "N. CA NASA" },
  { label: "Debut Result", value: "Top 10" },
  { label: "Based In", value: "Truckee, CA" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen section-blue">
      {/* Page Hero */}
      <div
        className="page-hero"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1800&q=85)",
        }}
      >
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <h1 className="page-title animate-fade-up">About Carter</h1>
          <div className="page-header__divider animate-fade-up delay-100" />
          <p className="text-white/60 text-sm tracking-widest uppercase animate-fade-up delay-200">
            Driver · Spec Miata · Reno–Tahoe, CA
          </p>
        </div>
      </div>

      {/* Bio + Photo */}
      <section className="page-section px-4 sm:px-6 section-dark">
        <div className="page-content--wide mx-auto">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
            {/* Photo */}
            <div className="flex-shrink-0 w-full md:w-[360px] animate-fade-up">
              <Image
                src="https://www.carterknight.racing/hs-fs/hubfs/Carter%26%20Casey-1.jpg"
                alt="Carter Knight"
                width={360}
                height={480}
                className="object-cover w-full rounded-sm"
                unoptimized
                priority
              />
            </div>

            {/* Bio */}
            <div className="text-white space-y-5 flex-1 animate-fade-up delay-200">
              <p className="text-xs font-bold tracking-[3px] text-white/50 uppercase">Driver Profile</p>
              <h2 className="section-title">Carter Knight</h2>
              <div className="w-12 h-0.5 bg-white/30" />
              <p className="text-white/80 leading-relaxed text-base">
                Carter Knight is a 16-year-old race driver from Truckee, California competing
                regionally in Spec Miata. Based in the Reno–Tahoe region, Carter is competing
                in the Northern California NASA series as he develops his skills and builds his
                future in motorsports.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                In his very first race, Carter finished in the <span className="text-white font-semibold">top 10</span> — an impressive debut that
                signals the start of a promising racing career. He is just getting started.
              </p>
              <p className="text-white/75 leading-relaxed text-base">
                Spec Miata is one of the most competitive and respected entry-level classes in
                North America — a true spec series where results reflect pure driver skill.
              </p>

              {/* Stat grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <p className="text-white/50 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
                    <p className="text-white font-bold text-base mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Feature Image */}
      <section className="relative overflow-hidden" style={{ height: "380px" }}>
        <Image
          src="https://images.unsplash.com/photo-1541447271487-09612b3f49f7?auto=format&fit=crop&w=1800&q=85"
          alt="Race driver on track"
          fill
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#052c52]/70 via-transparent to-[#052c52]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs font-bold tracking-[4px] text-white/50 uppercase mb-3 animate-fade-up">The Journey</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide animate-fade-up delay-100">
            Built On Pure Racecraft
          </h2>
          <div className="w-10 h-0.5 bg-white/40 mt-4 animate-fade-up delay-200" />
        </div>
      </section>

      {/* CTA */}
      <section className="page-section px-4 sm:px-6 text-center">
        <p className="text-white/65 text-base mb-8 max-w-[480px] mx-auto leading-relaxed animate-fade-up">
          Interested in following or supporting Carter&apos;s journey? Let&apos;s connect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-200">
          <Link href="/contact" className="btn-primary">Contact Carter</Link>
          <Link href="/partnerships" className="btn-primary">Partnership Info</Link>
        </div>
      </section>
    </div>
  );
}

