import Image from "next/image";

const galleryImages = [
  {
    src: "https://www.carterknight.racing/hubfs/2026_CArter_license-7.jpg",
    alt: "Carter Knight Racing - License Photo",
    caption: "2026 Season",
  },
];

export default function GalleryPage() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "rgba(12, 83, 148, 1)" }}
    >
      {/* Header */}
      <section className="pt-32 pb-8 px-6 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide uppercase mb-2">
          GALLERY
        </h1>
        <hr className="border-none w-2/3 mx-auto my-4" style={{ borderBottom: "1px solid rgba(255,255,255,1.0)" }} />
      </section>

      {/* Gallery Grid */}
      <section className="flex-1 px-6 py-12 pb-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={280}
                  className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <p className="text-white text-sm font-bold px-4 py-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/50 text-sm text-center mt-16">
            More photos coming soon as the season progresses.
          </p>
        </div>
      </section>
    </div>
  );
}

