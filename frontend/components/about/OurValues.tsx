"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Users, Cpu } from "lucide-react";

const values = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We continuously explore better ideas, technologies and engineering approaches to create meaningful solutions.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Quality",
    description:
      "We believe reliable products are built through attention to detail, testing and consistent engineering practices.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "Great products come from people working together. We value teamwork, communication and shared expertise.",
    icon: Users,
  },
  {
    number: "04",
    title: "Technology",
    description:
      "From embedded systems to smart lighting and IoT, we use technology to solve practical problems.",
    icon: Cpu,
  },
];

export default function OurValues() {
  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-36">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-blue-600" />

            <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
              What Drives Us
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Principles behind
            <span className="text-blue-600"> every solution.</span>
          </h2>
        </motion.div>


        {/* Values */}

        <div className="border-t border-slate-200">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group grid gap-8 border-b border-slate-200 py-10 transition-all duration-500 hover:px-4 lg:grid-cols-[120px_260px_1fr_80px] lg:items-center"
              >

                {/* Number */}

                <span className="text-5xl font-black text-slate-100 transition-colors duration-500 group-hover:text-blue-100">
                  {value.number}
                </span>


                {/* Title */}

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {value.title}
                  </h3>
                </div>


                {/* Description */}

                <p className="max-w-2xl text-base leading-7 text-slate-500">
                  {value.description}
                </p>


                {/* Icon */}

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-all duration-500 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={20} />
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}