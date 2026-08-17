"use client";

import { motion } from "framer-motion";
import FeatureCard from "../common/FeatureCard";
import { features } from "@/constants/features";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28 text-white">

      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-sky-300">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            Engineering Excellence
            <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              That Powers Innovation
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We combine innovation, quality, and engineering expertise to
            deliver reliable electronic solutions for homes, businesses,
            and industries.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}