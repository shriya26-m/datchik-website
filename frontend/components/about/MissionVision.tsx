"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Target, Telescope } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28 text-white lg:py-36">

      {/* Background decoration */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4">

            <span className="h-px w-12 bg-blue-500" />

            <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-400">
              Our Direction
            </span>

          </div>

          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Engineering today.
            <br />

            <span className="text-blue-500">
              Shaping tomorrow.
            </span>
          </h2>
        </motion.div>


        {/* Mission + Vision */}

        <div className="relative mt-24 grid gap-20 lg:grid-cols-2">

          {/* Vertical divider */}

          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />


          {/* MISSION */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pr-0 lg:pr-16"
          >

            <div className="mb-8 flex items-center justify-between">

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">

                <Target
                  size={30}
                  className="text-blue-400"
                />

              </div>

              <span className="text-7xl font-black text-white/5">
                02
              </span>

            </div>


            <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-400">
              Our Mission
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              Creating technology that makes life better.
            </h3>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              Our mission is to develop innovative, practical and
              affordable electronic solutions that address real-world
              needs while maintaining a strong focus on quality,
              reliability and customer satisfaction.
            </p>


            {/* Mission points */}

            <div className="mt-10 space-y-5">

              {[
                "Innovation driven engineering",
                "Reliable and practical solutions",
                "Customer-focused development",
              ].map((item, index) => (

                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-4"
                >

                  <span className="h-2 w-2 rounded-full bg-blue-500" />

                  <span className="text-slate-300">
                    {item}
                  </span>

                </motion.div>

              ))}

            </div>

          </motion.div>


          {/* VISION */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-16"
          >

            <div className="mb-8 flex items-center justify-between">

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10">

                <Telescope
                  size={30}
                  className="text-orange-400"
                />

              </div>

              <span className="text-7xl font-black text-white/5">
                03
              </span>

            </div>


            <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
              Our Vision
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              Building a smarter and more connected future.
            </h3>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              We envision becoming a trusted technology partner by
              developing next-generation products across lighting,
              embedded systems, healthcare electronics and IoT.
            </p>


            {/* Vision statement */}

            <div className="mt-10 border-l border-orange-500/40 pl-6">

              <p className="text-xl leading-8 text-slate-300">
                "Turning ideas into meaningful technology,
                one solution at a time."
              </p>

            </div>


            {/* Link */}

            <motion.a
              href="/contact"
              whileHover={{ x: 6 }}
              className="mt-10 inline-flex items-center gap-3 font-semibold text-orange-400"
            >

              Build with us

              <ArrowUpRight size={20} />

            </motion.a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}