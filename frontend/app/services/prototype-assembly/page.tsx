"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Layers3,
  Settings2,
  TestTube2,
  Wrench,
} from "lucide-react";

const capabilities = [
  {
    title: "Prototype Assembly",
    description:
      "Assembly of electronic and engineering components into functional prototype units.",
    icon: Wrench,
  },
  {
    title: "Component Integration",
    description:
      "Integration of PCBs, modules, sensors, controllers and supporting components.",
    icon: Cpu,
  },
  {
    title: "Initial Testing",
    description:
      "Initial functional checks to identify assembly, connectivity and operational issues.",
    icon: TestTube2,
  },
  {
    title: "Product Validation",
    description:
      "Prototype-level validation to help evaluate functionality before further development.",
    icon: CheckCircle2,
  },
];

const developmentFocus = [
  "Component assembly",
  "Hardware integration",
  "Wiring & interconnection",
  "Functional checks",
  "Prototype iteration",
  "Product validation",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand the product concept, components and prototype requirements.",
  },
  {
    number: "02",
    title: "Assemble",
    description:
      "Required components and modules are assembled and integrated into the prototype.",
  },
  {
    number: "03",
    title: "Test",
    description:
      "Initial functional checks are performed to verify connectivity and operation.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "The prototype is evaluated and refined based on the required functionality.",
  },
];

export default function PrototypeAssemblyPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white">
        {/* Glow */}
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

        {/* Engineering Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-12 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition-colors hover:text-cyan-400">
              Home
            </Link>

            <ChevronRight size={15} />

            <Link
              href="/services"
              className="transition-colors hover:text-cyan-400"
            >
              Services
            </Link>

            <ChevronRight size={15} />

            <span className="text-slate-200">Prototype Assembly</span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-400" />

                <span className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                  Prototype Assembly
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Turning engineering concepts into{" "}
                <span className="text-cyan-400">functional prototypes.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                We transform engineering concepts into functional prototype
                units through structured assembly, component integration,
                initial testing and product validation.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3.5 font-medium text-slate-950 transition-all hover:bg-cyan-300"
                >
                  Discuss Your Prototype
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-medium text-white transition-all hover:border-cyan-400/50 hover:bg-white/5"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>

            {/* RIGHT — PROTOTYPE VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative hidden min-h-[470px] lg:block"
            >
              {/* Main assembly board */}
              <div className="absolute left-[12%] top-[12%] h-[330px] w-[76%] rounded-2xl border border-cyan-400/20 bg-slate-900/80 shadow-2xl shadow-cyan-500/5">
                {/* Board lines */}
                <div className="absolute left-8 right-8 top-10 h-px bg-cyan-400/20" />
                <div className="absolute left-8 right-8 top-20 h-px bg-cyan-400/10" />

                <div className="absolute bottom-10 left-8 right-8 h-px bg-cyan-400/10" />

                {/* Components */}
                <div className="absolute left-10 top-12 h-20 w-28 rounded-lg border border-cyan-400/20 bg-slate-800">
                  <div className="m-4 h-5 w-14 rounded bg-cyan-400/20" />
                  <div className="mx-4 h-2 w-20 rounded bg-slate-700" />
                </div>

                <div className="absolute right-10 top-12 grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="h-7 w-7 rounded border border-cyan-400/20 bg-slate-800"
                    />
                  ))}
                </div>

                {/* Central module */}
                <div className="absolute left-1/2 top-1/2 h-28 w-36 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-cyan-400/30 bg-slate-800 shadow-lg shadow-cyan-500/5">
                  <div className="absolute left-5 top-5 h-12 w-12 rounded-md border border-cyan-400/20 bg-slate-950" />

                  <div className="absolute right-5 top-6 h-2 w-16 rounded bg-cyan-400/30" />
                  <div className="absolute right-5 top-12 h-2 w-10 rounded bg-slate-600" />

                  <div className="absolute bottom-5 left-5 right-5 h-px bg-cyan-400/20" />
                </div>

                {/* Bottom components */}
                <div className="absolute bottom-10 left-10 flex gap-3">
                  <div className="h-12 w-12 rounded-md border border-cyan-400/20 bg-slate-800" />
                  <div className="h-12 w-20 rounded-md border border-cyan-400/20 bg-slate-800" />
                  <div className="h-12 w-12 rounded-md border border-cyan-400/20 bg-slate-800" />
                </div>

                {/* Connector */}
                <div className="absolute bottom-10 right-10 h-12 w-24 rounded-md border border-cyan-400/20 bg-slate-800">
                  <div className="flex h-full items-center justify-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-cyan-400/60" />
                    <span className="h-3 w-3 rounded-full bg-cyan-400/30" />
                    <span className="h-3 w-3 rounded-full bg-cyan-400/20" />
                  </div>
                </div>
              </div>

              {/* Floating tool/module */}
              <div className="absolute right-[2%] top-[4%] flex h-28 w-28 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 shadow-xl">
                <Wrench size={38} strokeWidth={1.3} className="text-cyan-400" />
              </div>

              {/* Floating integration module */}
              <div className="absolute bottom-[5%] left-[3%] flex h-28 w-40 items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 px-5 shadow-xl">
                <Layers3
                  size={30}
                  strokeWidth={1.3}
                  className="text-cyan-400"
                />

                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">
                    Assembly
                  </div>
                  <div className="mt-1 text-sm font-medium text-white">
                    Integration
                  </div>
                </div>
              </div>

              {/* Connection lines */}
              <div className="absolute left-[7%] top-[28%] h-px w-20 bg-cyan-400/30" />
              <div className="absolute right-[7%] top-[35%] h-20 w-px bg-cyan-400/20" />

              {/* Status */}
              <div className="absolute bottom-[12%] right-[7%] flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-900/90 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-xs uppercase tracking-wider text-slate-300">
                  Prototype Ready
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Technical Strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-slate-950/70 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
            <div className="px-6 py-6 lg:px-8">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Focus
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Functional Prototypes
              </p>
            </div>

            <div className="px-6 py-6 lg:px-8">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Approach
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Engineering Driven
              </p>
            </div>

            <div className="px-6 py-6 lg:px-8">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Integration
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Hardware & Components
              </p>
            </div>

            <div className="px-6 py-6 lg:px-8">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Outcome
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Tested Prototype
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-500" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                  Our Approach
                </span>
              </div>

              <h2 className="mt-6 max-w-md text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                From engineering concept to physical prototype.
              </h2>
            </div>

            <div className="max-w-3xl text-lg leading-8 text-slate-600">
              <p>
                A prototype brings an engineering concept into the physical
                world. Our prototype assembly service focuses on bringing
                together the required electronic and engineering components into
                a functional unit.
              </p>

              <p className="mt-6">
                From component integration and interconnections to initial
                functional testing, we help create prototype assemblies that can
                be evaluated, tested and refined during product development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-500" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Capabilities
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Practical assembly for real-world development.
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group grid gap-6 py-8 md:grid-cols-[80px_0.8fr_1.2fr] md:items-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 transition-colors group-hover:border-cyan-300">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-cyan-600"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="max-w-xl leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT FOCUS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-500" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                  Assembly Focus
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Every prototype needs the right physical integration.
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-slate-600">
                Our assembly process focuses on bringing individual components
                together into a structured and functional prototype.
              </p>
            </div>

            <div className="grid border-t border-slate-200 sm:grid-cols-2">
              {developmentFocus.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-slate-200 py-6 sm:nth-[odd]:border-r sm:nth-[odd]:pr-8 sm:nth-[even]:pl-8"
                >
                  <span className="font-mono text-sm text-cyan-600">
                    0{index + 1}
                  </span>

                  <span className="font-medium text-slate-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Our Process
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              A structured path from idea to validation.
            </h2>
          </div>

          <div className="mt-16 grid border-t border-white/10 md:grid-cols-4">
            {process.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-b border-white/10 py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <span className="font-mono text-sm text-cyan-400">
                  {item.number}
                </span>

                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 max-w-xs leading-7 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Have a prototype in mind?
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Let&apos;s turn your concept into something tangible.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Share your prototype requirements with us and let&apos;s discuss the
            right way to assemble, test and validate your concept.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 font-medium text-white transition-all hover:bg-slate-800"
            >
              Start a Conversation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
