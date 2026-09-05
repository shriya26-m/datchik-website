
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const products = [
  {
    title: "Embedded Engineering",
    image: "/images/hero/image3.jfif",
    description:
      "PCB Design, Embedded Hardware Development, Firmware Programming and Electronic Product Prototyping.",
  },
  {
    title: "Healthcare Electronics",
    image: "/images/hero/image1.jfif",
    description:
      "Innovative Orthopedic Heating Belts, Body Massagers and Medical Electronic Products.",
  },
  {
    title: "Industrial IoT Solutions",
    image: "/images/hero/images1.jfif",
    description:
      "Smart Attendance Systems, Industrial Automation, IoT Devices and Embedded Control Solutions.",
  },
  {
    title: "Lighting Solutions",
    image: "/images/hero/images.jfif",
    description:
      "Energy-efficient LED Bulbs, Panel Lights, Tube Lights, Commercial Lighting and Decorative Lighting Solutions.",
  },
];

export default function Products() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-block font-semibold uppercase tracking-[4px] text-blue-500">
            Our Products
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Innovative Electronics
            <span className="text-blue-500"> Products</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Datchick Electronics develops high-quality electronic products for
            residential, commercial and industrial applications. Our expertise
            spans Lighting, Embedded Engineering, Healthcare Electronics and IoT
            Solutions.
          </p>

        </div>

        {/* Product Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {products.map((item, index) => (

            <Link
              href="/products"
              key={index}
              className="group block overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={400}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {item.description}
                </p>

                {/* Learn More */}
                <div className="mt-8 flex items-center gap-2 font-semibold text-blue-500 transition-all duration-300 group-hover:gap-4">
                  Learn More
                  <FaArrowRight />
                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">

          <Link
            href="/products"
            className="rounded-xl bg-blue-500 px-10 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700"
          >
            View All Products
          </Link>

        </div>

      </div>
    </section>
  );
}

