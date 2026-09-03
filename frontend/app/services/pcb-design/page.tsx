"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  CircuitBoard,
  Layers3,
  LayoutGrid,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Schematic Design",
    description:
      "Create clear and structured circuit schematics based on the required functionality and electronic architecture.",
    icon: CircuitBoard,
  },
  {
    number: "02",
    title: "PCB Layout",
    description:
      "Develop organized PCB layouts with appropriate component placement, routing, and board structure.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Component Placement",
    description:
      "Plan component positioning with attention to connectivity, accessibility, board organization, and practical assembly.",
    icon: LayoutGrid,
  },
  {
    number: "04",
    title: "Design Optimization",
    description:
      "Review and refine the design for improved organization, manufacturability, reliability, and practical implementation.",
    icon: Settings2,
  },
];

const designFocus = [
  "Circuit architecture",
  "Component organization",
  "PCB layer planning",
  "Signal routing",
  "Board size optimization",
  "Prototype-ready layouts",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We study the product requirements, circuit functionality, components, interfaces, and board constraints.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "The electrical schematic and overall PCB architecture are planned around the required functionality.",
  },
  {
    number: "03",
    title: "Layout",
    description:
      "Components are positioned and connections are routed to create an organized and practical board layout.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "The design is reviewed and refined with focus on manufacturability, organization, and prototype implementation.",
  },
];

export default function PCBDesignPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white">
        {/* Background glow */}
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[150px]" />

        {/* Engineering grid */}
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

            <span className="text-cyan-400">PCB Designing & Layout</span>
          </motion.div>

          <div className="grid flex-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-cyan-400" />

                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
                  PCB Design & Layout
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              >
                Turning circuit ideas into{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  practical board designs.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16 }}
                className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
              >
                We create structured electronic schematics and PCB layouts
                with thoughtful component placement, routing, organization,
                and prototype-oriented design considerations.
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
                  Discuss Your PCB Project

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

            {/* PCB visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative hidden min-h-[440px] lg:block"
            >
              {/* Main board */}
              <div className="absolute left-1/2 top-1/2 h-[310px] w-[390px] -translate-x-1/2 -translate-y-1/2 border border-cyan-400/30 bg-cyan-400/[0.035] p-7">
                {/* Board inner */}
                <div className="relative h-full border border-cyan-400/20">
                  {/* chips */}
                  <div className="absolute left-10 top-12 h-16 w-24 border border-cyan-400/30 bg-slate-900">
                    <div className="grid h-full grid-cols-4 gap-1 p-3">
                      {Array.from({ length: 12 }).map((_, index) => (
                        <span
                          key={index}
                          className="bg-cyan-400/20"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="absolute right-10 top-14 h-12 w-12 rounded-full border border-cyan-400/30" />

                  <div className="absolute bottom-14 left-14 h-10 w-32 border border-cyan-400/30 bg-slate-900" />

                  <div className="absolute bottom-12 right-12 h-20 w-20 border border-cyan-400/30 bg-slate-900" />

                  {/* traces */}
                  <div className="absolute left-[134px] top-[76px] h-px w-[125px] bg-cyan-400/50" />

                  <div className="absolute left-[100px] top-[76px] h-[130px] w-px bg-cyan-400/30" />

                  <div className="absolute left-[100px] top-[205px] h-px w-[170px] bg-cyan-400/30" />

                  <div className="absolute right-[68px] top-[76px] h-[150px] w-px bg-cyan-400/30" />

                  <div className="absolute bottom-[72px] left-[150px] h-px w-[100px] bg-cyan-400/40" />

                  {/* nodes */}
                  <span className="absolute left-[97px] top-[73px] h-2 w-2 rounded-full bg-cyan-300" />
                  <span className="absolute left-[97px] top-[202px] h-2 w-2 rounded-full bg-cyan-300" />
                  <span className="absolute right-[65px] top-[73px] h-2 w-2 rounded-full bg-cyan-300" />
                </div>
              </div>

              {/* Floating labels */}
              <div className="absolute left-0 top-10 border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <div className="flex items-center gap-4">
                  <CircuitBoard size={22} className="text-cyan-400" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Circuit
                    </p>
                    <p className="mt-1 font-medium">Schematic</p>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-28 border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <div className="flex items-center gap-4">
                  <Layers3 size={22} className="text-cyan-400" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Board
                    </p>
                    <p className="mt-1 font-medium">Layout</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-4 border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <div className="flex items-center gap-4">
                  <Settings2 size={22} className="text-cyan-400" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Design
                    </p>
                    <p className="mt-1 font-medium">Optimization</p>
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
            ["Circuit", "Architecture"],
            ["PCB", "Layout"],
            ["Component", "Placement"],
            ["Design", "Optimization"],
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
              Good PCB design starts with understanding the complete system.
            </h2>
          </div>

          <div className="lg:pt-12">
            <p className="text-xl leading-9 text-slate-600">
              A PCB is more than a collection of electronic components. The
              board needs to bring together the circuit, component placement,
              routing, physical constraints, and intended product
              functionality.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-500">
              Our PCB design approach focuses on creating structured and
              practical layouts that can move from an electronic concept
              toward prototype implementation.
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
              From circuit schematic to board layout.
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
              Structured boards built around the product requirement.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">
              Different electronic products have different board constraints.
              Our design process considers the circuit and physical
              requirements together.
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

                <ShieldCheck
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
                  Development Process
                </span>
              </div>

              <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight lg:text-5xl">
                A structured path from circuit concept to PCB.
              </h2>
            </div>

            <div className="lg:pt-4">
              <p className="max-w-xl text-lg leading-8 text-slate-400">
                Each stage builds on the previous one, helping transform the
                initial electronic concept into a practical board design.
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
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-end gap-12 border-t border-slate-300 pt-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
                Have a PCB Requirement?
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Let's turn your circuit concept into a practical board.
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