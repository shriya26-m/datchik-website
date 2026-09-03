"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Blocks,
  LayoutDashboard,
  Monitor,
  MousePointer2,
  Palette,
  PanelsTopLeft,
  PenTool,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "User Interface Design",
    description:
      "Create clean and intuitive interfaces that make digital products easy to understand, navigate, and use.",
    icon: PenTool,
  },
  {
    number: "02",
    title: "Responsive Interfaces",
    description:
      "Design interfaces that adapt naturally across desktop, tablet, and mobile screen sizes.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "IoT Dashboards",
    description:
      "Build clear monitoring interfaces for connected systems, devices, data, status information, and controls.",
    icon: LayoutDashboard,
  },
  {
    number: "04",
    title: "Digital Product Experiences",
    description:
      "Design consistent digital experiences that connect product functionality with simple and meaningful user interactions.",
    icon: PanelsTopLeft,
  },
];

const designFocus = [
  "Interface structure",
  "Responsive layouts",
  "User interaction flows",
  "Dashboard experiences",
  "Visual consistency",
  "Digital product usability",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand the product, users, business requirements, content, and functionality that the interface needs to support.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Information architecture, screen hierarchy, navigation, content structure, and interaction flows are planned.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "The interface is designed with attention to visual hierarchy, usability, responsiveness, and product identity.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "The approved interface is transformed into responsive digital experiences that work across supported devices.",
  },
];

export default function UIUXPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white">
        {/* Background glow */}
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[150px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col px-6 pb-16 pt-32 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20 flex flex-wrap items-center gap-3 text-sm text-slate-400"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <span>/</span>

            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>

            <span>/</span>

            <span className="text-cyan-400">
              UX/UI Development
            </span>
          </motion.div>

          <div className="grid flex-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-cyan-400" />

                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
                  UX/UI Development
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              >
                Interfaces designed for{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  real digital experiences.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16 }}
                className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
              >
                We design and develop intuitive, responsive digital
                interfaces for web applications, dashboards, smart systems,
                connected products, and digital experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.24 }}
                className="mt-10 flex flex-wrap items-center gap-5"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Discuss Your UI/UX Project

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 px-2 py-4 font-medium text-slate-300 transition hover:text-white"
                >
                  Explore All Services

                  <ArrowDownRight size={17} />
                </Link>
              </motion.div>
            </div>

            {/* UI visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative hidden min-h-[450px] lg:block"
            >
              {/* Main interface */}
              <div className="absolute left-1/2 top-1/2 h-[330px] w-[410px] -translate-x-1/2 -translate-y-1/2 border border-cyan-400/25 bg-cyan-400/[0.035] p-5">
                <div className="relative h-full overflow-hidden border border-cyan-400/20 bg-slate-900/80">
                  {/* Header */}
                  <div className="flex h-12 items-center justify-between border-b border-white/10 px-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-300" />
                      <span className="h-2 w-2 rounded-full bg-cyan-300/50" />
                      <span className="h-2 w-2 rounded-full bg-cyan-300/20" />
                    </div>

                    <div className="h-2 w-20 bg-white/10" />
                  </div>

                  {/* Sidebar */}
                  <div className="absolute bottom-0 left-0 top-12 w-20 border-r border-white/10 p-3">
                    <div className="h-8 w-full bg-cyan-400/10" />

                    <div className="mt-4 space-y-3">
                      <span className="block h-2 w-full bg-white/10" />
                      <span className="block h-2 w-3/4 bg-white/10" />
                      <span className="block h-2 w-full bg-white/10" />
                      <span className="block h-2 w-2/3 bg-white/10" />
                    </div>
                  </div>

                  {/* Main dashboard */}
                  <div className="ml-20 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-3 w-24 bg-white/20" />
                        <div className="mt-2 h-2 w-16 bg-white/10" />
                      </div>

                      <div className="h-8 w-8 rounded-full border border-cyan-400/30" />
                    </div>

                    {/* dashboard blocks */}
                    <div className="mt-7 grid grid-cols-3 gap-3">
                      <div className="h-14 border border-cyan-400/20 bg-cyan-400/5" />
                      <div className="h-14 border border-cyan-400/20 bg-cyan-400/5" />
                      <div className="h-14 border border-cyan-400/20 bg-cyan-400/5" />
                    </div>

                    {/* graph */}
                    <div className="relative mt-5 h-28 border border-white/10">
                      <div className="absolute bottom-5 left-5 h-px w-[80%] rotate-[5deg] bg-cyan-400/40" />

                      <div className="absolute bottom-8 left-12 h-px w-[65%] -rotate-[12deg] bg-cyan-400/30" />

                      <span className="absolute bottom-[42px] left-[34%] h-2 w-2 rounded-full bg-cyan-300" />

                      <span className="absolute bottom-[52px] left-[58%] h-2 w-2 rounded-full bg-cyan-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating labels */}
              <div className="absolute left-0 top-8 border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <div className="flex items-center gap-4">
                  <MousePointer2 size={22} className="text-cyan-400" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      User
                    </p>

                    <p className="mt-1 font-medium">
                      Interaction
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-24 border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <div className="flex items-center gap-4">
                  <LayoutDashboard size={22} className="text-cyan-400" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Digital
                    </p>

                    <p className="mt-1 font-medium">
                      Dashboard
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-5 border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <div className="flex items-center gap-4">
                  <Smartphone size={22} className="text-cyan-400" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Responsive
                    </p>

                    <p className="mt-1 font-medium">
                      Interface
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNICAL STRIP
      ========================================================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">
          {[
            ["User", "Interface"],
            ["Responsive", "Design"],
            ["IoT", "Dashboards"],
            ["Digital", "Experiences"],
          ].map(([small, big], index) => (
            <div
              key={big}
              className={`py-8 ${
                index !== 0
                  ? "border-l border-slate-200 pl-6 lg:pl-8"
                  : ""
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {small}
              </p>

              <p className="mt-2 text-lg font-semibold text-slate-900">
                {big}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-500" />

              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
                Our Approach
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
              Technology should feel simple to the people using it.
            </h2>
          </div>

          <div className="lg:pt-12">
            <p className="text-xl leading-9 text-slate-600">
              A good interface turns complex functionality into an experience
              that users can understand and navigate naturally.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-500">
              We focus on clear information hierarchy, responsive layouts,
              intuitive interactions, and consistent visual systems to create
              digital products that support both functionality and usability.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
              Core Capabilities
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
              Interfaces built around the way people use products.
            </h2>
          </div>

          <div className="border-t border-slate-300">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45 }}
                  className="group grid gap-6 border-b border-slate-300 py-10 md:grid-cols-[90px_90px_1fr_1.2fr] md:items-center"
                >
                  <span className="text-sm font-medium text-slate-400">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center border border-slate-300 bg-white transition group-hover:border-cyan-400">
                    <Icon size={23} className="text-slate-800" />
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="max-w-xl leading-7 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          DESIGN FOCUS
      ========================================================= */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
              Design Focus
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
              Clear interfaces without unnecessary complexity.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">
              Every digital product has a different audience and purpose.
              Interfaces are structured around the information and actions
              users actually need.
            </p>
          </div>

          <div className="border-t border-slate-300">
            {designFocus.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-6 border-b border-slate-300 py-6"
              >
                <span className="text-xs font-semibold text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Sparkles
                  size={19}
                  className="shrink-0 text-cyan-600"
                />

                <span className="text-lg font-medium text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="bg-slate-950 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-400" />

                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
                  Design & Development Process
                </span>
              </div>

              <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight lg:text-5xl">
                From product requirements to a usable interface.
              </h2>
            </div>

            <div className="lg:pt-4">
              <p className="max-w-xl text-lg leading-8 text-slate-400">
                A structured process helps connect product functionality with
                an interface that users can understand, navigate, and use.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="group min-h-[300px] bg-slate-950 p-8 transition hover:bg-slate-900"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-cyan-400">
                    {item.number}
                  </span>

                  <Workflow
                    size={20}
                    className="text-slate-600 transition group-hover:text-cyan-400"
                  />
                </div>

                <h3 className="mt-16 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-end gap-12 border-t border-slate-300 pt-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
                Have a UI/UX Requirement?
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Let's create an interface people enjoy using.
              </h2>
            </div>

            <div className="lg:flex lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-slate-950 px-8 py-5 font-semibold text-white transition hover:bg-cyan-500 hover:text-slate-950"
              >
                Start a Conversation

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}