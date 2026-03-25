const results = [
  {
    race: "Race 1",
    event: "Sonoma Raceway",
    location: "Sonoma, CA",
    date: "Mar 7–8, 2026",
    class: "Spec Miata",
    position: "9th",
    notes: "",
  },
  {
    race: "Race 2",
    event: "Sonoma Raceway",
    location: "Sonoma, CA",
    date: "Mar 7–8, 2026",
    class: "Spec Miata",
    position: "7th",
    notes: "",
  },
  {
    race: "Race 3",
    event: "Sonoma Raceway",
    location: "Sonoma, CA",
    date: "Mar 7–8, 2026",
    class: "Spec Miata",
    position: "9th",
    notes: "",
  },
];

export default function ResultsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Parallax Hero */}
      <div
        className="page-hero"
        style={{
          backgroundImage:
            "url(https://www.carterknight.racing/hubfs/2026_CArter_license-7.jpg)",
        }}
      >
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <h1 className="page-title">SEASON RESULTS</h1>
          <p className="text-white/70 text-sm tracking-[3px] uppercase mt-3">
            Spec Miata · Northern California NASA
          </p>
        </div>
      </div>

      {/* Results Content */}
      <section className="section-blue flex-1 page-section px-4 sm:px-6">
        <div className="page-content mx-auto">
          <h2 className="section-title mb-10 text-center animate-fade-up">2026 Season</h2>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto rounded-sm animate-fade-up delay-200">
            <table className="race-table">
              <thead>
                <tr>
                  <th>Race</th>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Class</th>
                  <th>Position</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr key={i}>
                    <td>{r.race}</td>
                    <td>{r.event}</td>
                    <td className="text-white/60">{r.date}</td>
                    <td className="text-white/70">{r.location}</td>
                    <td>{r.class}</td>
                    <td><span className="font-bold text-white">{r.position}</span></td>
                    <td className="text-white/65">{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card layout */}
          <div className="sm:hidden space-y-4 animate-fade-up delay-200">
            {results.map((r, i) => (
              <div key={i} className="card">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-white/50 uppercase">{r.race}</span>
                    {r.date && <span className="ml-2 text-xs text-white/40">{r.date}</span>}
                  </div>
                  <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {r.position}
                  </span>
                </div>
                <p className="text-white font-bold text-base">{r.event}</p>
                <p className="text-white/60 text-sm mt-1">{r.location}</p>
                <div className="mt-3 pt-3 border-t border-white/10 flex gap-6 text-sm">
                  <span className="text-white/70">{r.class}</span>
                  {r.notes && <span className="text-white/50 italic">{r.notes}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Teen Mazda Challenge Achievement */}
          <div className="mt-10 animate-fade-up delay-300">
            <div
              className="relative overflow-hidden rounded-sm border border-yellow-400/30 px-6 py-6 sm:px-10 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
              style={{ background: "rgba(202, 138, 4, 0.08)" }}
            >
              <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(202, 138, 4, 0.18)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="1.8" width="24" height="24">
                  <path d="M6 9H4a2 2 0 0 1-2-2V5h4" />
                  <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
                  <path d="M12 17v4" />
                  <path d="M8 21h8" />
                  <path d="M6 3h12v6a6 6 0 0 1-12 0V3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold tracking-[3px] uppercase text-yellow-400/80 mb-1">Achievement</p>
                <p className="text-white font-black text-lg sm:text-xl leading-tight">
                  Teen Mazda Challenge — 3rd Place
                </p>
                <p className="text-white/60 text-sm mt-1">
                  Highest Finishing Rookie · Sonoma Raceway · Mar 7–8, 2026
                </p>
              </div>
              <div className="shrink-0 text-center">
                <span className="inline-block bg-yellow-400/15 border border-yellow-400/40 text-yellow-300 text-2xl font-black px-5 py-2 rounded-sm tracking-tight">
                  3rd
                </span>
              </div>
            </div>
          </div>

          <p className="text-white/50 text-sm text-center mt-10">
            More race results will be added throughout the season.
          </p>
        </div>
      </section>
    </div>
  );
}

