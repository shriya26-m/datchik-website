"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/constants/industries";

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background Blur */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-20 text-center"
        >

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-blue-500">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Engineering Solutions For
            <span className="text-blue-500"> Every Industry</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            From homes to industries, hospitals to educational institutions,
            Datchick Electronics delivers innovative electronic solutions
            designed for performance, reliability and growth.
          </p>

        </motion.div>

        <div className="space-y-5">

          {industries.map((industry, index) => {

            const Icon = industry.icon;

            return (

              <motion.div
                key={industry.number}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
              >

                <div className="group flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:border-blue-500 hover:bg-blue-600 hover:shadow-2xl">

                  <div className="flex items-center gap-8">

                    <span className="text-5xl font-bold text-slate-300 transition group-hover:text-white">
                      {industry.number}
                    </span>

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-500 transition group-hover:bg-white group-hover:text-blue-600">

                      <Icon size={30} />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-white">
                        {industry.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-slate-500 transition group-hover:text-blue-100">
                        {industry.description}
                      </p>

                    </div>

                  </div>

                  <ArrowUpRight
                    size={34}
                    className="text-slate-400 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-white"
                  />

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}