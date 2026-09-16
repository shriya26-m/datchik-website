"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950">

      {/* Hero Image Container */}
      <div
        className="
          relative
          w-full
          h-[60vh]
          sm:h-[65vh]
          md:h-[72vh]
          lg:h-[calc(100svh-80px)]
          min-h-[420px]
          lg:min-h-[600px]
        "
      >
        <Image
          src="/images/hero/hero2.png"
          alt="Datchick Electronics - Smart Technology Solutions"
          fill
          priority
          sizes="100vw"
          className="
            object-contain
            lg:object-cover
            object-center
          "
        />

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />

        {/* Bottom Fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-24
            sm:h-32
            bg-gradient-to-t
            from-slate-950/50
            to-transparent
            pointer-events-none
          "
        />
      </div>

    </section>
  );
}