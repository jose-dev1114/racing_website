import VideoHero from "@/components/VideoHero";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Full-screen Video Hero — responsive height */}
      <VideoHero
        videoSrc="/video.mp4"
      />

      {/* Bio + CTA Section */}
      {/* <section className="section-blue w-full py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-[860px] mx-auto text-center">
          <p className="text-white/60 text-xs tracking-[3px] uppercase font-semibold mb-5">
            Reno–Tahoe Region &nbsp;·&nbsp; Spec Miata &nbsp;·&nbsp; Northern California NASA
          </p>

          <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-medium mb-6">
            Carter Knight is a 16-year-old race driver competing regionally in{" "}
            <span className="font-bold">Spec Miata</span> as he develops his skills and builds
            his future in motorsports.
          </p>

          <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-4">
            Interested in following or supporting the journey?{" "}
            <a
              href="mailto:ck@carterknight.racing"
              className="text-white font-semibold underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all"
            >
              Let&apos;s connect.
            </a>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/season" className="btn-primary">
              2026 Season
            </Link>
            <Link href="/partnerships" className="btn-primary">
              Partner With Carter
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
