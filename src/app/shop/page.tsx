import VideoHero from "@/components/VideoHero";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Video Hero with COMING SOON */}
      <VideoHero
        videoSrc="https://www.carterknight.racing/hubfs/CK%20Racing%20hero%20video.mp4"
        height="clamp(520px, 100svh, 900px)"
        overlayOpacity={0.88}
        overlayColor="0,0,0"
      >
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="page-title text-6xl sm:text-7xl md:text-8xl tracking-widest">
            COMING SOON
          </h1>
          <p className="text-white/65 text-base sm:text-lg mt-6 max-w-[500px] leading-relaxed">
            The Carter Knight Racing shop is coming soon. Check back for exclusive merchandise.
          </p>
          <Link href="/contact" className="btn-primary mt-10">
            Get Notified
          </Link>
        </div>
      </VideoHero>
    </div>
  );
}

