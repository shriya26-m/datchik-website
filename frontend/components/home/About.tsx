"use client";

import Image from "next/image";
import {
  FaLightbulb,
  FaMicrochip,
  FaHeartbeat,
  FaWifi,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLightbulb />,
    title: "Lighting Solutions",
    desc: "Domestic, Commercial & Decorative Lighting",
  },
  {
    icon: <FaMicrochip />,
    title: "Embedded Engineering",
    desc: "PCB Design, Firmware & IoT Development",
  },
  {
    icon: <FaHeartbeat />,
    title: "Healthcare Electronics",
    desc: "Heating Belts & Body Massagers",
  },
  {
    icon: <FaWifi />,
    title: "IoT Solutions",
    desc: "Industrial Automation & Smart Devices",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24">

      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}

          <div className="relative group">
  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 blur-xl opacity-25"></div>

  <div className="relative h-[650px] overflow-hidden rounded-3xl shadow-2xl bg-white">

    <div className="animate-scroll-y flex flex-col gap-4 p-4">

      {[
        "/images/about/expo.jpg",
        "/images/about/team1.jpg",
        "/images/about/products.jpg",
        "/images/about/tradeshow.jpg",
        "/images/about/company.png",

        // Duplicate for infinite loop
        "/images/about/expo1.jpg",
        "/images/about/team1.jpg",
        "/images/about/products.jpg",
        "/images/about/lab.jpg",
        "/images/about/company.png",
      ].map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="Datchick Electronics"
          width={600}
          height={380}
          className="rounded-2xl object-cover"
        />
      ))}
    </div>

  </div>

  <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6">
    <h2 className="text-4xl font-bold text-blue-600">5+</h2>
    <p className="text-gray-600 text-sm">
      Years of Innovation
    </p>
  </div>
</div>

          {/* RIGHT CONTENT */}

          <div>

            <span className="uppercase tracking-widest text-blue-600 font-semibold">
              About Company
            </span>

            <h2 className="text-5xl font-bold mt-4 leading-tight text-slate-900">
              Engineering
              <span className="text-blue-600"> Innovation </span>
              For A Smarter Tomorrow
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              Datchick Electronics Pvt. Ltd. specializes in innovative
              Lighting Solutions, Embedded Engineering, IoT-based Systems,
              Healthcare Electronics and Industrial Automation. We design,
              manufacture and deliver high-quality electronic products that
              empower businesses and improve everyday life.
            </p>

            {/* Features */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                >

                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl mb-4">
                    {item.icon}
                  </div>

                  <h3 className="font-bold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-4 gap-6 mt-12">

              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  50+
                </h3>
                <p className="text-gray-500 text-sm">
                  Products
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  100+
                </h3>
                <p className="text-gray-500 text-sm">
                  Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  24/7
                </h3>
                <p className="text-gray-500 text-sm">
                  Support
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  5★
                </h3>
                <p className="text-gray-500 text-sm">
                  Quality
                </p>
              </div>

            </div>

            {/* Button */}

            <button className="mt-12 flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold transition duration-300 hover:scale-105">

              Learn More

              <FaArrowRight />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}