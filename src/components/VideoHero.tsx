"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface VideoHeroProps {
  videoSrc: string;
  /** Optional MP4 fallback for browsers that don't support .mov (Chrome, Firefox, Edge) */
  fallbackVideoSrc?: string;
  /** CSS height — defaults to responsive clamp */
  height?: string;
  /** Use gradient overlay (default) or flat opacity */
  overlayOpacity?: number;
  overlayColor?: string;
  children?: React.ReactNode;
  /** Extra className on the wrapper */
  className?: string;
}

export default function VideoHero({
  videoSrc,
  fallbackVideoSrc,
  height,
  overlayOpacity,
  overlayColor = "0,0,0",
  children,
  className = "",
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) vid.play().catch(() => {});
  }, []);

  // Default: responsive clamp from 480px (mobile) up to 803px (desktop)
  const computedHeight = height ?? "clamp(480px, 70vh, 803px)";

  return (
    <div
      className={`video-hero w-full relative overflow-hidden ${className}`}
      style={{ height: computedHeight }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        {/* Always declare as video/mp4 — .mov files use H.264 (same codec).
            Browsers like Chrome/Firefox refuse "video/quicktime" entirely. */}
        <source src={videoSrc} type="video/mp4" />
        {fallbackVideoSrc && (
          <source src={fallbackVideoSrc} type="video/mp4" />
        )}
      </video>

      {/* Overlay — gradient by default, flat if overlayOpacity provided */}
      {overlayOpacity !== undefined ? (
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: `rgba(${overlayColor},${overlayOpacity})` }}
        />
      ) : (
        <div className="video-hero__overlay" />
      )}

      {/* Logo overlay — centred above any children */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <Image
          src="https://www.carterknight.racing/hs-fs/hubfs/W-on-Transparent.png?width=872&height=700&name=W-on-Transparent.png"
          alt="Carter Knight Racing"
          width={280}
          height={225}
          className="w-[180px] sm:w-[220px] md:w-[280px] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] animate-fade-up"
          unoptimized
          priority
        />
      </div>

      {/* Content */}
      <div className="video-hero__content px-4 pt-20">
        {children}
      </div>
    </div>
  );
}

