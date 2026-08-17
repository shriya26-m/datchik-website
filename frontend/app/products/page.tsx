"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const productCategories = [
  {
    number: "01",
    category: "Biomedical",
    label: "Healthcare Electronics",
    description:
      "Electronic products designed for practical health, wellness and measurement applications.",
    featuredImage: "/images/products/biomedical/orthopaedic-heat-belt.jpg",
    products: [
      {
        name: "Orthopaedic Heat Belt",
        image: "/images/products/biomedical/orthopaedic-heat-belt.jpg",
      },
      {
        name: "BP Monitor",
        image: "/images/products/biomedical/bp-monitor.jpg",
      },
      {
        name: "Thermometer",
        image: "/images/products/biomedical/thermometer.jpg",
      },
      {
        name: "IR Meter",
        image: "/images/products/biomedical/ir-meter.jpg",
      },
    ],
  },

  {
    number: "02",
    category: "Gas Detection",
    label: "Safety & Monitoring",
    description:
      "LEL gas detection products designed for gas monitoring applications with display and non-display configurations.",
    featuredImage: "/images/products/gas-detector/lel-display.jpg",
    products: [
      {
        name: "LEL Gas Detector with Display",
        image: "/images/products/gas-detector/lel-display.jpg",
      },
      {
        name: "LEL Gas Detector without Display",
        image: "/images/products/gas-detector/lel-no-display.jpg",
      },
    ],
  },

  {
    number: "03",
    category: "Datchick Smart Solutions",
    label: "Smart Electronics",
    description:
      "Smart controller solutions developed for connected and automated applications.",
    featuredImage:
      "/images/products/smart-solutions/towel-warmer-controller.jpg",
    products: [
      {
        name: "Towel Warmer Controller Kit",
        image:
          "/images/products/smart-solutions/towel-warmer-controller.jpg",
      },
    ],
  },

  {
    number: "04",
    category: "Body Massage",
    label: "Wellness Electronics",
    description:
      "Electronic wellness products and controller solutions designed for practical massage and comfort applications.",
    featuredImage: "/images/products/body-massage/body-massager.jpg",
    products: [
      {
        name: "Body Massager",
        image: "/images/products/body-massage/body-massager.jpg",
      },
      {
        name: "Orthopaedic Controller Kit",
        image: "/images/products/body-massage/orthopaedic-controller.jpg",
      },
    ],
  },

  {
    number: "05",
    category: "Lighting Solutions",
    label: "Lighting Electronics",
    description:
      "Controller solutions supporting modern lighting applications and electronic control systems.",
    featuredImage: "/images/products/lighting/lighting-controller.jpg",
    products: [
      {
        name: "Lighting Controller Kit",
        image: "/images/products/lighting/lighting-controller.jpg",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 text-white">

        {/* Glow */}

        <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-40">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 flex items-center gap-4">

              <span className="h-px w-12 bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
                Our Products
              </span>

            </div>

            <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

              Technology designed for

              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                real-world applications.
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Explore Datchick Electronics products across biomedical
              electronics, gas detection, smart solutions, wellness
              electronics and lighting.
            </p>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          PRODUCT INTRO
      ====================================================== */}

      <section className="px-6 py-24 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
                Product Portfolio
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                Electronics built around
                <span className="text-blue-600"> everyday needs.</span>
              </h2>

            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lg leading-8 text-slate-600"
            >
              Our product portfolio brings together electronics for
              healthcare, safety monitoring, smart applications,
              wellness and lighting. Each category represents a
              different application of electronic engineering.
            </motion.p>

          </div>

        </div>
      </section>


      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <section>

        {productCategories.map((category, index) => (

          <motion.section
            key={category.number}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`border-t border-slate-200 ${
              index % 2 === 1 ? "bg-slate-50" : "bg-white"
            }`}
          >

            <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">

              {/* Category header */}

              <div className="grid gap-10 lg:grid-cols-[140px_1fr]">

                <div>
                  <span className="text-6xl font-black text-slate-200 lg:text-7xl">
                    {category.number}
                  </span>
                </div>

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
                    {category.label}
                  </p>

                  <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                    {category.category}
                  </h2>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                    {category.description}
                  </p>

                </div>

              </div>


              {/* Featured product */}

              <div className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="group relative aspect-[16/10] overflow-hidden rounded-[28px] bg-slate-100"
                >

                  <Image
                    src={category.featuredImage}
                    alt={category.category}
                    fill
                    className="object-contain p-10 transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent" />

                </motion.div>


                {/* Product list */}

                <div>

                  <p className="mb-7 text-sm font-semibold uppercase tracking-[3px] text-slate-400">
                    Products in this category
                  </p>

                  <div className="border-t border-slate-200">

                    {category.products.map((product, productIndex) => (

                      <motion.div
                        key={product.name}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: productIndex * 0.1,
                        }}
                        className="group/item flex items-center justify-between gap-5 border-b border-slate-200 py-6"
                      >

                        <div className="flex items-center gap-5">

                          {/* Small preview */}

                          <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-white">

                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain p-2 transition duration-500 group-hover/item:scale-110"
                            />

                          </div>

                          <div>

                            <h3 className="font-semibold text-slate-900 transition-colors group-hover/item:text-blue-600">
                              {product.name}
                            </h3>

                            <p className="mt-1 text-sm text-slate-400">
                              Datchick Electronics
                            </p>

                          </div>

                        </div>


                        <Link
                          href="/contact"
                          aria-label={`Enquire about ${product.name}`}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover/item:border-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white"
                        >
                          <ArrowUpRight size={17} />
                        </Link>

                      </motion.div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </motion.section>

        ))}

      </section>


      {/* =====================================================
          CUSTOM SOLUTION CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white lg:py-36">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
                Custom Requirements
              </p>

              <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Looking for something
                <span className="text-cyan-400"> specific?</span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Have a custom electronics requirement or a product
                idea? Our engineering team can help explore the
                right approach.
              </p>

            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
            >
              Discuss Your Requirement

              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-2"
              />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}