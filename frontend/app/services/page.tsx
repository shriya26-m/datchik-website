"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Cpu,
  Layers3,
  Code2,
  PenTool,
  Wrench,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Smart IoT Solution Services",
    shortTitle: "Smart IoT",
    description:
      "We develop connected and intelligent solutions that bring devices, sensors, data and users together for smarter monitoring, control and automation.",
    capabilities: [
      "IoT device integration",
      "Sensor-based systems",
      "Smart monitoring",
      "Device communication",
    ],
    icon: Cpu,
  },
  {
    number: "02",
    title: "PCB Designing & Layout Solutions",
    shortTitle: "PCB Design",
    description:
      "From schematic development to PCB layout, we create practical board designs with attention to component placement, routing and manufacturability.",
    capabilities: [
      "Schematic design",
      "PCB layout",
      "Component placement",
      "Design optimization",
    ],
    icon: Layers3,
  },
  {
    number: "03",
    title: "S/W & Programming (Embedded) Development Solutions",
    shortTitle: "Embedded Development",
    description:
      "We develop embedded software and firmware that enables electronic hardware to perform reliably, efficiently and according to its intended application.",
    capabilities: [
      "Embedded programming",
      "Firmware development",
      "Microcontroller programming",
      "Hardware-software integration",
    ],
    icon: Code2,
  },
  {
    number: "04",
    title: "UX/UI Development Solutions",
    shortTitle: "UX/UI Development",
    description:
      "We design intuitive and responsive digital interfaces for web applications, dashboards, smart systems and connected products.",
    capabilities: [
      "User interface design",
      "Responsive interfaces",
      "IoT dashboards",
      "Digital product experiences",
    ],
    icon: PenTool,
  },
  {
    number: "05",
    title: "Prototype Assembling",
    shortTitle: "Prototype Assembly",
    description:
      "We help transform engineering concepts into functional prototypes through component integration, assembly and initial validation.",
    capabilities: [
      "Prototype assembly",
      "Component integration",
      "Initial testing",
      "Product validation",
    ],
    icon: Wrench,
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[680px] overflow-hidden bg-slate-950 text-white">

        {/* Background glow */}

        <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-28">

          <div className="max-w-5xl">

            {/* Breadcrumb */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10 flex items-center gap-3 text-sm text-slate-400"
            >
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <ArrowRight size={14} />

              <span className="text-cyan-400">
                Services
              </span>
            </motion.div>

            {/* Label */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
                Our Services
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Engineering solutions
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">
                built around your ideas.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
            >
              Datchick Electronics provides engineering and development
              solutions across IoT, PCB design, embedded software,
              UX/UI development and prototype assembly.
            </motion.p>

            {/* Scroll indicator */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-14 flex items-center gap-4 text-sm text-slate-400"
            >
              <span>Explore our capabilities</span>

              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <ArrowDownRight
                  size={20}
                  className="text-cyan-400"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="px-6 py-28 lg:py-36">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">

              <span className="h-px w-12 bg-blue-600" />

              <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
                What We Do
              </span>

            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              From concept
              <span className="text-blue-600"> to prototype.</span>
            </h2>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xl leading-9 text-slate-600">
              Our services bring together hardware, software and
              design expertise to help transform ideas into working
              electronic and digital solutions.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              Whether you are developing a connected device, designing
              a PCB, programming an embedded system or preparing a
              prototype, our approach focuses on practical engineering
              and dependable execution.
            </p>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          SERVICES LIST
      ====================================================== */}

      <section className="border-t border-slate-200">

        {services.map((service, index) => {

          const Icon = service.icon;

          return (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              className="group border-b border-slate-200"
            >

              <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-10 py-16 lg:grid-cols-[100px_0.9fr_1.1fr] lg:items-center lg:py-20">

                  {/* NUMBER */}

                  <div>
                    <span className="text-5xl font-black text-slate-200 transition-all duration-500 group-hover:text-blue-100 lg:text-6xl">
                      {service.number}
                    </span>
                  </div>


                  {/* TITLE */}

                  <div>

                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-all duration-500 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-blue-600">
                      {service.shortTitle}
                    </p>

                    <h3 className="max-w-xl text-3xl font-bold leading-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                      {service.title}
                    </h3>

                  </div>


                  {/* DESCRIPTION */}

                  <div className="border-slate-200 lg:border-l lg:pl-12">

                    <p className="max-w-xl text-lg leading-8 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">

                      {service.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="text-sm text-slate-500 before:mr-2 before:text-blue-600 before:content-['•']"
                        >
                          {capability}
                        </span>
                      ))}

                    </div>

                    <Link
                      href="/contact"
                      className="group/link mt-8 inline-flex items-center gap-3 font-semibold text-blue-600"
                    >
                      Discuss this service

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover/link:translate-x-2"
                      />
                    </Link>

                  </div>

                </div>

              </div>

            </motion.div>
          );
        })}

      </section>


      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="bg-slate-50 px-6 py-28 lg:py-36">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >

            <div className="flex items-center gap-4">

              <span className="h-px w-12 bg-blue-600" />

              <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
                Our Approach
              </span>

            </div>

            <h2 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              From idea to
              <span className="text-blue-600"> working solution.</span>
            </h2>

          </motion.div>


          <div className="mt-20 grid gap-0 md:grid-cols-4">

            {[
              {
                number: "01",
                title: "Understand",
                text: "We begin by understanding your requirements, application and objectives.",
              },
              {
                number: "02",
                title: "Design",
                text: "Our team translates the requirements into an appropriate technical approach.",
              },
              {
                number: "03",
                title: "Develop",
                text: "Hardware, software and interfaces are developed and refined.",
              },
              {
                number: "04",
                title: "Prototype",
                text: "The solution is assembled, tested and evaluated for further improvement.",
              },
            ].map((step, index) => (

              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative border-t-2 border-slate-900 px-0 py-8 md:min-h-[250px] md:border-l md:border-t-2 md:px-8"
              >

                <span className="text-sm font-bold text-blue-600">
                  {step.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-end md:justify-between">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
              Have a project?
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Let's turn your idea into
              <span className="text-cyan-400"> reality.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Tell us about your requirement and let's explore the
              right engineering solution together.
            </p>

          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-4 rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
          >
            Start a Conversation

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>

        </div>

      </section>

    </main>
  );
}