"use client";

import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950" />

      {/* Glow */}
      <div className="absolute -top-32 left-20 h-72 w-72 rounded-full bg-sky-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-sky-300">
              Let's Work Together
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
              Ready To Build
              <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Your Next Innovation?
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Whether you're looking for smart lighting, embedded
              engineering, PCB design, IoT development or healthcare
              electronics, our team is ready to turn your ideas into
              reliable products.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">
                Get Free Consultation

                <ArrowRight className="transition group-hover:translate-x-1" />
              </button>

              <a
                href="tel:+919999999999"
                className="flex items-center gap-3 rounded-2xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                <Phone size={20} />
                Call Us
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                "Fast Response",
                "Expert Engineers",
                "Reliable Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2
                    size={18}
                    className="text-sky-400"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-white">
              <div className="flex items-center gap-3">
                <Mail className="text-sky-400" />
                datchikelectronics@gmai.com
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-sky-400" />
                +91 7307290418
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-sky-500 to-cyan-500 blur-3xl opacity-30" />

            <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <Image
                src="/images/contact/electronics.png"
                alt="Electronics"
                width={650}
                height={650}
                className="mx-auto animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}