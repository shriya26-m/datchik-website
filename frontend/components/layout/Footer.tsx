"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  "About",
  "Products",
  "Services",
  "Industries",
  "Gallery",
  "Contact",
];

const products = [
  "Domestic Lighting",
  "Commercial Lighting",
  "Decorative Lighting",
  "Embedded Systems",
  "Healthcare Devices",
  "IoT Solutions",
];

const services = [
  "PCB Design",
  "Embedded Development",
  "IoT Development",
  "EMS",
  "Rapid Prototyping",
  "Consulting",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Blur */}

      <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-5">

          {/* Company */}

          <div className="lg:col-span-2">

            <Image
              src="/images/logo/datchik-logo.jpeg"
              alt="Datchick"
              width={170}
              height={60}
              className="bg-white rounded-xl p-2"
            />

            <p className="mt-8 max-w-md leading-8 text-slate-300">
              Datchick Electronics Pvt. Ltd. specializes in
              Lighting Solutions, Embedded Engineering,
              PCB Design, IoT Development,
              Healthcare Electronics and Electronics Manufacturing Services.
            </p>

            {/* Social */}

            <div className="mt-8 flex gap-4">

              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600"
                  >
                    <Icon />
                  </a>
                )
              )}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((item) => (

                <li key={item}>

                  <Link
                    href="#"
                    className="group flex items-center gap-2 text-slate-300 transition hover:text-white"
                  >
                    <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />

                    {item}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Products */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Products
            </h3>

            <ul className="space-y-4">

              {products.map((item) => (

                <li
                  key={item}
                  className="text-slate-300 hover:text-white transition"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-6 text-slate-300">

              <div className="flex items-start gap-3">

                <FiMapPin className="mt-1 text-blue-400" />

                <p>
                  Plot No. XX,
                  Electronic City,
                  Noida,
                  Uttar Pradesh,
                  India
                </p>

              </div>

              <div className="flex items-center gap-3">

                <FiPhone className="text-blue-400" />

                <p>+91 7307290418</p>

              </div>

              <div className="flex items-center gap-3">

                <FiMail className="text-blue-400" />

                <p>datchikelectronics@gmail.com</p>

              </div>

            </div>


          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} Datchick Electronics Pvt. Ltd.
            All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

      {/* Back To Top */}

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition hover:scale-110 hover:bg-blue-700"
      >
        ↑
      </button>

    </footer>
  );
}