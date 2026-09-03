"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  Binary,
  CircuitBoard,
  Code2,
  Cpu,
  GitBranch,
  Settings2,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Embedded Programming",
    description:
      "Develop embedded software and control logic designed around the functionality and behavior required by the electronic product.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Firmware Development",
    description:
      "Build firmware that enables electronic hardware to perform defined operations, respond to inputs, and control connected components.",
    icon: Binary,
  },
  {
    number: "03",
    title: "Microcontroller Programming",
    description:
      "Develop application logic for microcontroller-based systems including input processing, control operations, and device behavior.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Hardware–Software Integration",
    description:
      "Bring hardware and embedded software together so that sensors, controllers, actuators, and electronic components work as one system.",
    icon: CircuitBoard,
  },
];

const developmentFocus = [
  "Embedded control logic",
  "Firmware architecture",
  "Microcontroller programming",
  "Sensor and input handling",
  "Hardware-software integration",
  "Prototype firmware testing",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We study the product requirements, hardware architecture, inputs, outputs, control behavior, and expected system operation.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "The embedded software structure, control logic, interfaces, and communication requirements are organized before implementation.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Firmware and embedded control logic are developed around the selected hardware and required product functionality.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "The software is tested with the hardware and refined to improve system behavior, reliability, and prototype performance.",
  },
];

export default function EmbeddedDevelopmentPage() {
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

            <span className="text-cyan-400">
              Embedded Development
            </span>
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
                  Embedded Development
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              >
                Software that brings{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  electronics to life.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16 }}
                className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
              >
                We develop embedded software and firmware that connects
                electronic hardware with the logic required to sense,
                control, communicate, and perform product-specific
                functions.
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
                  Discuss Your Embedded Project

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

            {/* Embedded system visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative hidden min-h-[440px] lg:block"
            >
              {/* Main processor */}
              <div className="absolute left-1/2 top-1/2 h-[260px] w-[340px] -translate-x-1/2 -translate-y-1/2 border border-cyan-400/25 bg-cyan-400/[0.035] p-7">
                <div className="relative flex h-full items-center justify-center border border-cyan-400/20">
                  {/* CPU */}
                  <div className="relative flex h-32 w-32 items-center justify-center border border-cyan-300/40 bg-slate-900">
                    <Cpu size={48} className="text-cyan-300" />

                    {/* CPU pins */}
                    <div className="absolute -left-3 top-5 flex h-20 flex-col justify-between">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          className="h-px w-5 bg-cyan-400/50"
                        />
                      ))}
                    </div>

                    <div className="absolute -right-3 top-5 flex h-20 flex-col justify-between">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          className="h-px w-5 bg-cyan-400/50"
                        />
                      ))}
                    </div>

                    <div className="absolute -top-3 left-5 flex w-20 justify-between">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          className="h-5 w-px bg-cyan-400/50"
                        />
                      ))}
                    </div>

                    <div className="absolute -bottom-3 left-5 flex w-20 justify-between">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          className="h-5 w-px bg-cyan-400/50"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Connection lines */}
                  <div className="absolute left-5 top-16 h-px w-[85px] bg-cyan-400/40" />

                  <div className="absolute right-5 top-16 h-px w-[85px] bg-cyan-400/40" />

                  <div className="absolute bottom-16 left-5 h-px w-[85px] bg-cyan-400/40" />

                  <div className="absolute bottom-16 right-5 h-px w-[85px] bg-cyan-400/40" />

                  {/* Nodes */}
                  <span className="absolute left-[45px] top-[61px] h-2 w-2 rounded-full bg-cyan-300" />

                  <span className="absolute right-[45px] top-[61px] h-2 w-2 rounded-full bg-cyan-300" />

                  <span className="absolute bottom-[61px] left-[45px] h-2 w-2 rounded-full bg-cyan-300" />

                  <span className="absolute bottom-[61px] right-[45px] h-2 w-2 rounded-full bg-cyan-300" />
                </div>
              </div>

              {/* Floating labels */}
              <div className="absolute left-0 top-8 border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <div className="flex items-center gap-4">
                  <Code2 size={22} className="text-cyan-400" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Embedded
                    </p>

                    <p className="mt-1 font-medium">
                      Firmware
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-24 border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <div className="flex items-center gap-4">
                  <Cpu size={22} className="text-cyan-400" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Control
                    </p>

                    <p className="mt-1 font-medium">
                      Logic
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-4 border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <div className="flex items-center gap-4">
                  <GitBranch size={22} className="text-cyan-400" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      System
                    </p>

                    <p className="mt-1 font-medium">
                      Integration
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
            ["Embedded", "Programming"],
            ["Firmware", "Development"],
            ["Microcontroller", "Control"],
            ["Hardware", "Integration"],
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
              Hardware becomes useful when software knows how to control it.
            </h2>
          </div>

          <div className="lg:pt-12">
            <p className="text-xl leading-9 text-slate-600">
              Embedded software acts as the intelligence inside an electronic
              product. It determines how the hardware responds to inputs,
              controls outputs, processes information, and performs its
              intended function.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-500">
              Our embedded development approach connects product requirements
              with practical firmware and control logic so hardware and
              software can operate together as a complete system.
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
              Software designed around the electronics.
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
          DEVELOPMENT FOCUS
      ========================================================= */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
              Development Focus
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
              Embedded logic built around real product behavior.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">
              Every embedded system has its own hardware, inputs, outputs,
              control requirements, and operating behavior. The software is
              developed around those specific requirements.
            </p>
          </div>

          <div className="border-t border-slate-300">
            {developmentFocus.map((item, index) => (
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
                From hardware requirements to working firmware.
              </h2>
            </div>

            <div className="lg:pt-4">
              <p className="max-w-xl text-lg leading-8 text-slate-400">
                A structured development process helps ensure that embedded
                software is aligned with the hardware and the intended
                product behavior.
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
                Have an Embedded Requirement?
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Let's build the intelligence behind your electronic product.
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