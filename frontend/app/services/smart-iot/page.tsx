"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  Boxes,
  Cpu,
  Gauge,
  Radio,
  Settings2,
  Wifi,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "IoT Device Integration",
    description:
      "Connect electronic devices, controllers, sensors, and embedded systems into a unified intelligent ecosystem.",
    icon: Cpu,
  },
  {
    number: "02",
    title: "Sensor-Based Systems",
    description:
      "Build solutions that collect real-world data using sensors for monitoring, control, and automation.",
    icon: Radio,
  },
  {
    number: "03",
    title: "Smart Monitoring",
    description:
      "Enable continuous monitoring of equipment, conditions, and system performance through connected interfaces.",
    icon: Activity,
  },
  {
    number: "04",
    title: "Device Communication",
    description:
      "Create reliable communication between devices, controllers, dashboards, and connected systems.",
    icon: Wifi,
  },
];

const applications = [
  "Industrial equipment monitoring",
  "Smart control and automation systems",
  "Connected electronic products",
  "Remote device status monitoring",
  "Sensor-based monitoring solutions",
  "Digital monitoring dashboards",
];

const process = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "We understand the device, sensors, monitoring requirements, control logic, and expected user interaction.",
  },
  {
    number: "02",
    title: "System Architecture",
    description:
      "We define how devices, sensors, embedded controllers, communication layers, and interfaces will work together.",
  },
  {
    number: "03",
    title: "Integration & Development",
    description:
      "Hardware integration, embedded programming, device communication, and interface development are implemented.",
  },
  {
    number: "04",
    title: "Prototype & Testing",
    description:
      "The connected solution is assembled, tested, evaluated, and refined for reliable operation.",
  },
];

export default function SmartIoTPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* HERO */}
      <section className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white">
        {/* Glow */}
        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col px-6 pb-16 pt-32 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20 flex items-center gap-3 text-sm text-slate-400"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <span>/</span>

            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>

            <span>/</span>

            <span className="text-cyan-400">Smart IoT Solutions</span>
          </motion.div>

          <div className="grid flex-1 items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
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
                  Smart IoT Solutions
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              >
                Connected intelligence for{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  smarter systems.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16 }}
                className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
              >
                We develop connected electronic solutions that bring together
                sensors, embedded systems, device communication, monitoring, and
                intelligent control.
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
                  Discuss Your IoT Project
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

            {/* Right technical visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative hidden min-h-[430px] lg:block"
            >
              <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-900">
                  <Cpu className="h-10 w-10 text-cyan-300" />
                </div>
              </div>

              <div className="absolute left-4 top-10 flex items-center gap-4 border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <Radio className="text-cyan-400" size={22} />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Connected
                  </p>
                  <p className="mt-1 font-medium">Sensors</p>
                </div>
              </div>

              <div className="absolute right-0 top-24 flex items-center gap-4 border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <Wifi className="text-cyan-400" size={22} />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Intelligent
                  </p>
                  <p className="mt-1 font-medium">Communication</p>
                </div>
              </div>

              <div className="absolute bottom-16 left-2 flex items-center gap-4 border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <Gauge className="text-cyan-400" size={22} />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Live
                  </p>
                  <p className="mt-1 font-medium">Monitoring</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-6 flex items-center gap-4 border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <Settings2 className="text-cyan-400" size={22} />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Smart
                  </p>
                  <p className="mt-1 font-medium">Control</p>
                </div>
              </div>

              {/* lines */}
              <div className="absolute left-[118px] top-[94px] h-px w-[100px] rotate-[28deg] bg-gradient-to-r from-cyan-400/50 to-transparent" />
              <div className="absolute right-[135px] top-[160px] h-px w-[95px] -rotate-[18deg] bg-gradient-to-l from-cyan-400/50 to-transparent" />
              <div className="absolute bottom-[127px] left-[122px] h-px w-[90px] -rotate-[28deg] bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECHNICAL STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">
          {[
            ["Device", "Integration"],
            ["Sensor", "Connectivity"],
            ["Smart", "Monitoring"],
            ["System", "Automation"],
          ].map(([small, big], index) => (
            <div
              key={big}
              className={`py-8 ${
                index !== 0 ? "border-l border-slate-200 pl-6 lg:pl-8" : ""
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {small}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{big}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-500" />
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
                What We Build
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
              Electronics that can sense, communicate and respond.
            </h2>
          </div>

          <div className="lg:pt-12">
            <p className="text-xl leading-9 text-slate-600">
              Modern electronic products are no longer isolated devices.
              Connected systems can monitor conditions, communicate data, and
              support intelligent decision-making.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-500">
              Datchick Electronics helps develop IoT-oriented solutions by
              combining electronic hardware, sensors, embedded programming,
              communication, and digital monitoring interfaces into one
              practical system.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
              Core Capabilities
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
              Building connected systems from the device outward.
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
                  viewport={{ once: true, amount: 0.3 }}
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

      {/* APPLICATIONS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
              Typical Applications
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
              Designed around practical connected-product requirements.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">
              IoT solutions can be adapted according to the type of device,
              required sensing, control functionality, communication, and
              monitoring needs.
            </p>
          </div>

          <div className="border-t border-slate-300">
            {applications.map((application, index) => (
              <div
                key={application}
                className="flex items-center gap-6 border-b border-slate-300 py-6"
              >
                <span className="text-xs font-semibold text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Boxes className="shrink-0 text-cyan-600" size={20} />

                <span className="text-lg font-medium text-slate-800">
                  {application}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
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
                From an IoT idea to a functional prototype.
              </h2>
            </div>

            <div className="lg:pt-4">
              <p className="max-w-xl text-lg leading-8 text-slate-400">
                Every connected system begins with understanding what needs to
                be sensed, controlled, communicated, and displayed.
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

                <h3 className="mt-16 text-xl font-semibold">{item.title}</h3>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-end gap-12 border-t border-slate-300 pt-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
                Have an IoT Requirement?
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Let's build a smarter connected solution.
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
