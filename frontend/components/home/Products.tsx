"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const products = [
  
  {
    title: "Embedded Engineering",
    image: "/images/products/embedded.jpg",
    description:
      "PCB Design, Embedded Hardware Development, Firmware Programming and Electronic Product Prototyping.",
  },
  {
    title: "Healthcare Electronics",
    image: "/images/products/healthcare.jpg",
    description:
      "Innovative Orthopedic Heating Belts, Body Massagers and Medical Electronic Products.",
  },
  {
    title: "Industrial IoT Solutions",
    image: "/images/products/iot.jpg",
    description:
      "Smart Attendance Systems, Industrial Automation, IoT Devices and Embedded Control Solutions.",
  },
  {
    title: "Lighting Solutions",
    image: "/images/products/lighting.jpg",
    description:
      "Energy-efficient LED Bulbs, Panel Lights, Tube Lights, Commercial Lighting and Decorative Lighting Solutions.",
  }
];

export default function Products() {
  return (
    <section className="py-24 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block text-blue-500 uppercase tracking-[4px] font-semibold">
            Our Products
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
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
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
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

                <p className="mt-4 text-slate-600 leading-7 text-[15px]">
                  {item.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-blue-500 transition-all duration-300 group-hover:gap-4">
                  Learn More
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">
          <button className="rounded-xl bg-blue-500 px-10 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}