"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Cpu,
  ShieldCheck,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    number: "01",
    image: "/images/about/about-hero-1.png",
    label: "ABOUT DATCHICK",
    title: "Engineering Ideas.",
    highlight: "Building Possibilities.",
    description:
      "We develop innovative electronic solutions across lighting, embedded engineering, healthcare electronics and smart technology.",
    button: "Explore Our Solutions",
    icon: Cpu,
    sideTitle: "Innovative Technology",
    sideText: "Pushing boundaries with advanced engineering.",
  },

  {
    number: "02",
    image: "/images/about/about-hero-2.png",
    label: "OUR EXPERTISE",
    title: "Technology That",
    highlight: "Creates Impact.",
    description:
      "From PCB designing to embedded systems and smart electronics, we turn ideas into practical and reliable solutions.",
    button: "Discover Our Expertise",
    icon: ShieldCheck,
    sideTitle: "Quality & Reliability",
    sideText: "Engineered for dependable and long-lasting performance.",
  },

  {
    number: "03",
    image: "/images/about/about-hero-3.png",
    label: "OUR APPROACH",
    title: "Designed With",
    highlight: "Purpose.",
    description:
      "We combine innovation, engineering expertise and customer-focused thinking to create solutions for real-world needs.",
    button: "Let's Work Together",
    icon: Users,
    sideTitle: "Customer Focused",
    sideText: "Solutions designed around real-world requirements.",
  },
];

export default function AboutHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = slides[currentSlide];

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
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const Icon = slide.icon;

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-slate-950 text-white">

      {/* =====================================================
          BACKGROUND IMAGE SLIDER
      ====================================================== */}

      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt="Datchick Electronics"
            fill
            priority={currentSlide === 0}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* =====================================================
          TRANSPARENT DARK OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 bg-slate-950/55" />

      {/* Left dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/30" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/90 to-transparent" />

      {/* =====================================================
          BLUE LIGHT GLOW
      ====================================================== */}

      <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      {/* =====================================================
          DECORATIVE GRID
      ====================================================== */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-5 py-24 sm:px-8">

        <div className="w-full">

          {/* =================================================
              TOP BAR
          ================================================= */}

          <div className="mb-10 flex items-center justify-between">

            {/* Breadcrumb */}

            <div className="flex items-center gap-3 text-sm text-slate-300">

              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <span className="text-slate-500">/</span>

              <span className="text-sky-400">
                About
              </span>

            </div>

            {/* Company Name */}

            <div className="hidden items-center gap-3 text-xs font-medium uppercase tracking-[4px] text-slate-300 sm:flex">

              Datchick Electronics

              <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.8)]" />

            </div>

          </div>

          {/* =================================================
              GLASS CONTENT
          ================================================= */}

          <AnimatePresence mode="wait">

            <motion.div
              key={currentSlide}
              initial={{
                opacity: 0,
                x: 70,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -70,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="relative overflow-hidden rounded-[30px] border border-white/20 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-[3px] sm:p-10 lg:p-14"
            >

              {/* Glass shine */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

              {/* Content Grid */}

              <div className="relative grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]">

                {/* =================================================
                    LEFT CONTENT
                ================================================= */}

                <div>

                  {/* Label */}

                  <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-2.5 backdrop-blur-md">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />

                    <span className="text-xs font-semibold uppercase tracking-[4px] text-sky-300">
                      {slide.label}
                    </span>

                  </div>

                  {/* Heading */}

                  <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">

                    {slide.title}

                    <span className="mt-2 block bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">

                      {slide.highlight}

                    </span>

                  </h1>

                  {/* Description */}

                  <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">

                    {slide.description}

                  </p>

                  {/* CTA */}

                  <div className="mt-9">

                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-3 rounded-full border border-sky-400/50 bg-sky-400/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-sky-400 hover:text-slate-950"
                    >

                      {slide.button}

                      <ArrowDownRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                      />

                    </Link>

                  </div>

                </div>

                {/* =================================================
                    RIGHT GLASS INFO
                ================================================= */}

                <div className="relative">

                  {/* Vertical line */}

                  <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-sky-400/60 to-transparent lg:block" />

                  <div className="lg:pl-10">

                    {/* Icon */}

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/40 bg-sky-400/10 backdrop-blur-md">

                      <Icon
                        size={30}
                        className="text-sky-300"
                      />

                    </div>

                    {/* Side title */}

                    <h3 className="text-xl font-semibold sm:text-2xl">

                      {slide.sideTitle}

                    </h3>

                    {/* Side text */}

                    <p className="mt-3 max-w-sm leading-7 text-slate-300">

                      {slide.sideText}

                    </p>

                    {/* Small line */}

                    <div className="mt-7 h-px w-20 bg-sky-400/60" />

                    <p className="mt-5 text-xs uppercase tracking-[3px] text-slate-500">

                      Innovation • Quality • Reliability

                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* =================================================
              BOTTOM CONTROLS
          ================================================= */}

          <div className="mt-8 flex items-center justify-between">

            {/* Slide Number */}

            <div className="flex items-center gap-3">

              <span className="text-2xl font-light text-sky-400">
                {slide.number}
              </span>

              <span className="text-sm text-slate-500">
                / 03
              </span>

            </div>

            {/* Dots */}

            <div className="flex items-center gap-3">

              {slides.map((_, index) => (

                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentSlide === index
                      ? "w-12 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />

              ))}

            </div>

            {/* Arrows */}

            <div className="flex gap-3">

              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950"
              >
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}