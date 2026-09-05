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
  FaWhatsapp,
} from "react-icons/fa";

/* =========================
   QUICK LINKS
========================= */

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

/* =========================
   PRODUCTS
========================= */

const products = [
  {
    name: "Biomedical / Healthcare",
    href: "/products/biomedical",
  },
  {
    name: "Gas Detection",
    href: "/products/gas-detector",
  },
  {
    name: "Smart Solutions",
    href: "/products/smart-solutions",
  },
  {
    name: "Body Massage & Wellness",
    href: "/products/body-massage",
  },
  {
    name: "Lighting Solutions",
    href: "/products/lighting",
  },
];

/* =========================
   SERVICES
========================= */

const services = [
  {
    name: "Smart IoT Solutions",
    href: "/services/smart-iot",
  },
  {
    name: "PCB Designing & Layout",
    href: "/services/pcb-design",
  },
  {
    name: "Embedded Development",
    href: "/services/embedded-development",
  },
  {
    name: "UX/UI Development",
    href: "/services/ui-ux",
  },
  {
    name: "Prototype Assembly",
    href: "/services/prototype-assembly",
  },
];

/* =========================
   SOCIAL LINKS
========================= */

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/datchikelectronics/",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/datchik_official/",
    icon: FaInstagram,
  },
  {
    name: "WhatsApp",
    href: "https://whatsapp.com/channel/0029VaIEs077DAWut5FMVs0Z",
    icon: FaWhatsapp,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/datchik-electronics/posts/?feedView=all",
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* =========================
          BACKGROUND GLOW
      ========================= */}

      <div className="pointer-events-none absolute -top-32 left-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* =========================
          MAIN FOOTER
      ========================= */}

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-5">

          {/* =========================
              COMPANY
          ========================= */}

          <div className="lg:col-span-2">

            <Link href="/" aria-label="Datchick Electronics Home">

              <Image
                src="/images/logo/datchik-logo.jpeg"
                alt="Datchick Electronics"
                width={170}
                height={60}
                className="rounded-xl bg-white p-2"
              />

            </Link>

            <p className="mt-8 max-w-md leading-8 text-slate-300">
              Datchick Electronics Pvt. Ltd. specializes in
              lighting solutions, embedded engineering,
              PCB design, IoT development, healthcare
              electronics and electronics manufacturing services.
            </p>

            {/* =========================
                SOCIAL LINKS
            ========================= */}

            <div className="mt-8 flex gap-4">

              {socialLinks.map((social) => {

                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Datchick Electronics on ${social.name}`}
                    title={social.name}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-blue-600 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );

              })}

            </div>

          </div>

          {/* =========================
              QUICK LINKS
          ========================= */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-slate-300 transition hover:text-white"
                  >

                    <FiArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                    {item.name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* =========================
              PRODUCTS
          ========================= */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Products
            </h3>

            <ul className="space-y-4">

              {products.map((product) => (

                <li key={product.name}>

                  <Link
                    href={product.href}
                    className="group flex items-start gap-2 text-slate-300 transition hover:text-white"
                  >

                    <FiArrowUpRight
                      size={16}
                      className="mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                    <span>{product.name}</span>

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* =========================
              CONTACT
          ========================= */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-6 text-slate-300">

              {/* Address */}

              <div className="flex items-start gap-3">

                <FiMapPin
                  className="mt-1 shrink-0 text-blue-400"
                  size={18}
                />

                <p className="leading-7">
                Sector-73
            
                  <br />
                  Noida,
                  <br />
                  Gautam buddha Nagar,
                  <br />
                  Uttar Pradesh,
                  <br />
                  India
                </p>

              </div>

              {/* Phone */}

              <a
                href="tel:+917307290418"
                className="flex items-center gap-3 transition hover:text-white"
              >

                <FiPhone
                  className="shrink-0 text-blue-400"
                  size={18}
                />

                <span>+91 7307290418</span>

              </a>

              {/* Email */}

              <a
                href="mailto:datchikelectronics@gmail.com"
                className="flex items-center gap-3 transition hover:text-white"
              >

                <FiMail
                  className="shrink-0 text-blue-400"
                  size={18}
                />

                <span className="break-all">
                  datchikelectronics@gmail.com
                </span>

              </a>

            </div>

          </div>

        </div>

      </div>

      {/* =========================
          SERVICES
      ========================= */}

      {/* <div className="relative border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="grid gap-8 md:grid-cols-2">

            <div>

              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Engineering Services
              </h3>

              <div className="flex flex-wrap gap-x-6 gap-y-3">

                {services.map((service) => (

                  <Link
                    key={service.name}
                    href={service.href}
                    className="text-sm text-slate-400 transition hover:text-cyan-400"
                  >
                    {service.name}
                  </Link>

                ))}

              </div>

            </div>

            <div className="md:text-right">

              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Need a Custom Solution?
              </h3>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
              >

                Discuss Your Requirement

                <FiArrowUpRight />

              </Link>

            </div>

          </div>

        </div>

      </div> */}

      {/* =========================
          BOTTOM BAR
      ========================= */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Datchick Electronics Pvt. Ltd.
            All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-conditions"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

      {/* =========================
          BACK TO TOP
      ========================= */}

      <button
        type="button"
        aria-label="Back to top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl text-white shadow-2xl transition hover:scale-110 hover:bg-blue-700"
      >
        ↑
      </button>

    </footer>
  );
}