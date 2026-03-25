import Link from "next/link";
import Image from "next/image";

type RaceStatus = "Completed" | "Upcoming";

const schedule: { round: number; dates: string; location: string; track: string; status: RaceStatus }[] = [
  { round: 1, dates: "March 7–8",    location: "Sonoma, CA",       track: "Sonoma Raceway",       status: "Completed" },
  { round: 2, dates: "April 11–12",  location: "Corning, CA",      track: "Thunderhill Raceway",  status: "Upcoming"  },
  { round: 3, dates: "May 23–24",    location: "Sonoma, CA",       track: "Sonoma Raceway",       status: "Upcoming"  },
  { round: 4, dates: "June 13–14",   location: "Buttonwillow, CA", track: "Buttonwillow Raceway", status: "Upcoming"  },
  { round: 5, dates: "July 11–12",   location: "Sonoma, CA",       track: "Sonoma Raceway",       status: "Upcoming"  },
  { round: 6, dates: "November 7–8", location: "Sonoma, CA",       track: "Sonoma Raceway",       status: "Upcoming"  },
];

const statusStyle: Record<RaceStatus, string> = {
  Completed: "bg-green-500/20 text-green-300 border border-green-500/30",
  Upcoming:  "bg-white/10 text-white/80 border border-white/20",
};

export default function SeasonPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Parallax Hero */}
      <div
        className="page-hero"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85)",
        }}
      >
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <h1 className="page-title">2026 Season</h1>
          <p className="text-white/70 text-sm tracking-[3px] uppercase mt-3">
            Spec Miata · Northern California NASA
          </p>
        </div>
      </div>

      {/* Schedule */}
      <section className="flex-1 page-section section-blue px-4 sm:px-6">
        <div className="page-content mx-auto">
          <h2 className="section-title text-center mb-10 animate-fade-up">Race Schedule</h2>

          <div className="space-y-4">
            {schedule.map((race, i) => (
              <div
                key={race.round}
                className={`card flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-up ${
                  i < 2 ? "delay-100" : i < 4 ? "delay-200" : "delay-300"
                }`}
              >
                {/* Round badge + track info */}
                <div className="flex items-center gap-5 flex-1 min-w-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">{race.round}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-bold text-base">{race.track}</p>
                    <p className="text-white/50 text-sm mt-0.5">{race.location}</p>
                  </div>
                </div>
                {/* Date + status */}
                <div className="flex items-center gap-4 shrink-0 sm:pl-4">
                  <span className="text-white/70 text-sm font-medium tabular-nums">{race.dates}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${statusStyle[race.status]}`}>
                    {race.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          {/* <div className="mt-16 text-center animate-fade-up delay-400">
            <p className="text-white/55 text-sm mb-8 max-w-[420px] mx-auto leading-relaxed">
              Stay up to date with race schedules, live results, and Carter&apos;s journey through the 2026 season.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/results" className="btn-primary">View Results</Link>
              <Link href="/contact" className="btn-primary">Get Updates</Link>
            </div>
          </div> */}
        </div>
      </section>

      {/* ── The 2026 Machine ───────────────────────────────────── */}
      <section className="relative overflow-hidden section-dark">
        {/* Full-bleed background image with dark overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=85"
            alt="Race car on track"
            fill
            className="object-cover object-center"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#052c52]/95 via-[#052c52]/75 to-transparent" />
        </div>

        {/* Text content floated left */}
        <div className="relative z-10 page-content--wide mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-[500px] animate-fade-up">
            <p className="text-xs font-bold tracking-[4px] text-white/50 uppercase mb-4">2026 Season</p>
            <h2 className="section-title mb-5">The Car</h2>
            <div className="w-12 h-0.5 bg-white/40 mb-6" />
            <p className="text-white/80 text-base leading-relaxed mb-4">
              Carter races a Spec Miata — one of the purest, most competitive entry-level classes in North American motorsport. Every car is identical. Every result is earned through driver skill alone.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Competing in the Northern California NASA series, Carter is honing racecraft at legendary venues like Sonoma Raceway and Buttonwillow.
            </p>
          </div>
        </div>
      </section>

      {/* ── At The Track — 3-photo strip ──────────────────────── */}
      <section className="page-section section-blue px-4 sm:px-6">
        <div className="page-content--wide mx-auto">
          <h2 className="section-title text-center mb-2 animate-fade-up">At The Track</h2>
          <p className="text-white/50 text-sm text-center mb-10 tracking-widest uppercase animate-fade-up delay-100">
            2026 Season Highlights
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Photo 1 — Sonoma start/finish */}
            <div className="group relative overflow-hidden rounded-sm animate-fade-up delay-100">
              <Image
                src="https://www.carterknight.racing/hubfs/2026_CArter_license-7.jpg"
                alt="Carter Knight — 2026 season"
                width={480}
                height={320}
                className="w-full h-[220px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <p className="text-white text-xs font-bold tracking-widest uppercase px-4 py-3">Carter Knight · #26</p>
              </div>
            </div>

            {/* Photo 2 — Race action */}
            <div className="group relative overflow-hidden rounded-sm animate-fade-up delay-200">
              <Image
                src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=800&q=80"
                alt="Race action on track"
                width={480}
                height={320}
                className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <p className="text-white text-xs font-bold tracking-widest uppercase px-4 py-3">Sonoma Raceway</p>
              </div>
            </div>

            {/* Photo 3 — Paddock / prep */}
            <div className="group relative overflow-hidden rounded-sm animate-fade-up delay-300">
              <Image
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"
                alt="Spec Miata on track"
                width={480}
                height={320}
                className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <p className="text-white text-xs font-bold tracking-widest uppercase px-4 py-3">Spec Miata · N. CA NASA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

