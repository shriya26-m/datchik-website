
"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950">

      {/* Full Screen Image */}
      <Image
        src="/images/hero/hero.png"
        alt="Datchick Electronics"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-slate-950/20" />

      {/* Very Soft Bottom Transparency */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/30 to-transparent" />

    </section>
  );
}

