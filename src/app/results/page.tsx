const results = [
  {
    race: "Race 1",
    event: "Northern California NASA",
    location: "Thunderhill Raceway, CA",
    class: "Spec Miata",
    position: "Top 10",
    notes: "First Race – Debut",
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

          {/* Desktop table — hidden on mobile */}
          <div className="hidden sm:block overflow-x-auto rounded-sm animate-fade-up delay-200">
            <table className="race-table">
              <thead>
                <tr>
                  <th>Race</th>
                  <th>Event</th>
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
                  <span className="text-xs font-bold tracking-widest text-white/50 uppercase">{r.race}</span>
                  <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {r.position}
                  </span>
                </div>
                <p className="text-white font-bold text-base">{r.event}</p>
                <p className="text-white/60 text-sm mt-1">{r.location}</p>
                <div className="mt-3 pt-3 border-t border-white/10 flex gap-6 text-sm">
                  <span className="text-white/70">{r.class}</span>
                  <span className="text-white/50 italic">{r.notes}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/50 text-sm text-center mt-12">
            More race results will be added throughout the season.
          </p>
        </div>
      </section>
    </div>
  );
}

