import Image from "next/image";

export default function QuoteStrip() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed background image — same race-car shot as "The Car" section */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=85"
          alt=""
          fill
          className="object-cover object-center"
          unoptimized
          aria-hidden="true"
        />
        {/* Heavy symmetric overlay so quote is always legible */}
        <div className="absolute inset-0" style={{ background: "rgba(3,18,38,0.88)" }} />
        {/* Subtle side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031226]/60 via-transparent to-[#031226]/60" />
      </div>

      {/* Top + bottom hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Quote content */}
      <div className="relative z-10 text-center px-6 py-16 sm:py-24">
        {/* Large decorative open-quote */}
        <div
          className="select-none leading-none text-white/10 mb-2"
          style={{ fontFamily: "Georgia, serif", fontSize: "clamp(5rem, 12vw, 9rem)" }}
          aria-hidden="true"
        >
          &ldquo;
        </div>

        <blockquote
          className="text-white font-black uppercase tracking-wide max-w-[700px] mx-auto -mt-4"
          style={{ fontSize: "clamp(1.35rem, 3.5vw, 2.5rem)", lineHeight: 1.2 }}
        >
          Be comfortable being uncomfortable
        </blockquote>

        <div className="w-10 h-px bg-white/25 mx-auto mt-8 mb-5" />

        <p className="text-white/45 text-xs font-bold tracking-[4px] uppercase">
          — Carter Knight
        </p>
      </div>
    </section>
  );
}

