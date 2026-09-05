
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    smallText: "ABOUT DATCHICK",
    title: "Engineering Ideas.",
    highlight: "Building Possibilities.",
    description:
      "Innovative electronic solutions across lighting, embedded engineering, healthcare electronics, and smart technology.",
  },
  {
    smallText: "INNOVATION",
    title: "Technology That",
    highlight: "Creates Impact.",
    description:
      "We transform engineering concepts into practical, reliable, and innovative electronic solutions.",
  },
  {
    smallText: "QUALITY & RELIABILITY",
    title: "Designed With",
    highlight: "Precision.",
    description:
      "Combining engineering expertise, quality manufacturing, and dependable performance to build better electronics.",
  },
];

export default function AboutHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white">

      {/* ================================================= */}
      {/* BACKGROUND IMAGE */}
      {/* ================================================= */}

      <div className="absolute inset-0">
        <Image
          src="/images/about/about-hero.png"
          alt="Datchick Electronics"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* ================================================= */}
      {/* DARK TRANSPARENT OVERLAY */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-slate-950/35" />

      {/* Blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/50" />

      {/* ================================================= */}
      {/* BLUE GLOW */}
      {/* ================================================= */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      {/* ================================================= */}
      {/* DECORATIVE GRID */}
      {/* ================================================= */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24">

        <div className="w-full">

          {/* ================= BREADCRUMB ================= */}

          <div className="mb-12 flex items-center gap-3 text-sm text-slate-400">

            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <ArrowRight size={14} />

            <span className="text-sky-400">
              About
            </span>

          </div>

          {/* ================= SLIDER ================= */}

          <AnimatePresence mode="wait">

            <motion.div
              key={currentSlide}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -35,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="max-w-4xl"
            >

              {/* Small Label */}

              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/10 px-5 py-2.5 backdrop-blur-md">

                <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />

                <span className="text-xs font-semibold uppercase tracking-[4px] text-sky-300">
                  {slide.smallText}
                </span>

              </div>

              {/* Heading */}

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">

                {slide.title}

                <span className="mt-3 block bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">

                  {slide.highlight}

                </span>

              </h1>

              {/* Description */}

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">

                {slide.description}

              </p>

              {/* ================= ACTION ================= */}

             

            </motion.div>

          </AnimatePresence>

          {/* ================================================= */}
          {/* SLIDER CONTROLS */}
          {/* ================================================= */}

          <div className="mt-16 flex items-center justify-between">

            {/* ================= DOTS ================= */}

            <div className="flex items-center gap-3">

              {slides.map((_, index) => (

                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentSlide === index
                      ? "w-12 bg-sky-400"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />

              ))}

            </div>

            {/* ================= ARROWS ================= */}

            <div className="flex gap-3">

              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950"
              >

                <ArrowLeft size={18} />

              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950"
              >

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* BOTTOM FADE */}
      {/* ================================================= */}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

    </section>
  );
}
