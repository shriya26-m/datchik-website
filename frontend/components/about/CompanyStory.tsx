"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CompanyStory() {
  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-36">
      {/* Decorative background */}
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-blue-50 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-blue-600" />

            <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
              Our Story
            </span>
          </div>

          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Technology with a<span className="text-blue-600"> purpose.</span>
          </h2>
        </motion.div>

        {/* Main content */}

        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px]">
              <Image
                src="/images/about/about-hero.png"
                alt="Datchick Electronics"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            {/* Large number */}

            <div className="absolute -bottom-10 -right-6 hidden lg:block">
              <span className="text-[180px] font-black leading-none text-slate-100">
                01
              </span>
            </div>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-600">
              Datchick Electronics Pvt. Ltd.
            </p>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Building electronics that solve
              <span className="text-blue-600"> real-world problems.</span>
            </h3>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Datchick Electronics is focused on creating innovative
                electronic products and engineering solutions that combine
                practical design, modern technology and reliable performance.
              </p>

              <p>
                Our work spans across lighting solutions, embedded engineering,
                PCB development, healthcare electronics and smart IoT systems.
              </p>

              <p>
                From an initial idea to a working product, we aim to bring
                together engineering expertise, quality manufacturing and
                thoughtful design.
              </p>
            </div>

            {/* Expertise line */}

            <div className="mt-12 border-t border-slate-200 pt-8">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-slate-400">
                Our Expertise
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {[
                  "Lighting",
                  "Embedded Systems",
                  "PCB Engineering",
                  "IoT",
                  "Healthcare Electronics",
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-2 text-slate-800"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 transition group-hover:scale-150" />

                    <span className="transition group-hover:text-blue-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Link */}

            <motion.a
              href="/contact"
              whileHover={{ x: 5 }}
              className="mt-10 inline-flex items-center gap-3 font-semibold text-blue-600"
            >
              Talk to our team
              <ArrowUpRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
