"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white">

      {/* Background glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-40">

        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Breadcrumb */}

            <div className="mb-10 flex items-center gap-3 text-sm text-slate-400">
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

            {/* Label */}

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-sky-400" />

              <span className="text-xs font-semibold uppercase tracking-[3px] text-sky-300">
                About Datchick
              </span>

            </div>

            {/* Heading */}

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

              Engineering Ideas.

              <span className="mt-2 block bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Building Possibilities.
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Datchick Electronics Pvt. Ltd. is focused on developing
              innovative electronic solutions across lighting,
              embedded engineering, healthcare electronics,
              and smart technology.
            </p>

            {/* Bottom info */}

            <div className="mt-12 flex flex-wrap items-center gap-8">

              <Link
                href="/contact"
                className="group flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-slate-900 transition-all duration-300 hover:bg-sky-400"
              >
                Let's Work Together

                <ArrowDownRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </Link>

              <div className="h-10 w-px bg-white/20" />

              <div>
                <p className="text-sm text-slate-500">
                  Our focus
                </p>

                <p className="mt-1 font-medium text-white">
                  Innovation • Quality • Reliability
                </p>
              </div>

            </div>

          </motion.div>


          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >

            {/* Glow behind image */}

            <div className="absolute inset-10 rounded-full bg-blue-500/20 blur-[80px]" />

            {/* Image container */}

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">

                <Image
                  src="/images/about/about-hero.png"
                  alt="Datchick Electronics engineering"
                  fill
                  priority
                  className="object-cover transition duration-700 hover:scale-105"
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              </div>

            </div>

            {/* Floating badge */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-slate-900/90 px-6 py-5 shadow-2xl backdrop-blur-xl"
            >

              <p className="text-xs uppercase tracking-[2px] text-slate-500">
                Building
              </p>

              <p className="mt-1 text-lg font-bold text-white">
                Better Electronics
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}