
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

/* =========================================================
   AC ORTHOPAEDIC KIT - 4 PRODUCTS
========================================================= */

const acOrthopaedicKits = [
  {
    name: "AC Orthopaedic Controller Kit - Single Power LED",
    href: "/products/smart-solutions/ac-orthopaedic-kit",
  },
  {
    name: "AC Orthopaedic Controller Kit - 3 Status LEDs",
    href: "/products/smart-solutions/ac-orthopaedic-kit-status",
  },
  {
    name: "AC Orthopaedic Controller Kit - 3 AC Voltage LEDs",
    href: "/products/smart-solutions/ac-orthopaedic-kit-voltage",
  },
  {
    name: "AC Orthopaedic Kit - Single LED PCB",
    href: "/products/smart-solutions/orthopadic-kit",
  },
];

/* =========================================================
   PRODUCT CATEGORIES
========================================================= */

const productCategories = [
  {
    name: "Biomedical",
    products: [
      {
        name: "Orthopaedic Heat Belt",
        href: "/products/biomedical/orthopaedic-heat-belt",
      },
      {
        name: "BP Monitor",
        href: "/products/biomedical/bp-monitor",
      },
      {
        name: "Thermometer",
        href: "/products/biomedical/thermometer",
      },
      {
        name: "IR Meter",
        href: "/products/biomedical/ir-meter",
      },
    ],
  },

  {
    name: "Gas Detection",
    products: [
      {
        name: "LEL Gas Detector with Display",
        href: "/products/gas-detector/lel-display",
      },
      {
        name: "LEL Gas Detector without Display",
        href: "/products/gas-detector/lel-no-display",
      },
    ],
  },

  {
    name: "Lighting",
    products: [
      {
        name: "Panel Light",
        href: "/products/lighting/panel-light",
      },
      {
        name: "Floodlight",
        href: "/products/lighting/flood-light",
      },
      {
        name: "Streetlight",
        href: "/products/lighting/street-light",
      },
      {
        name: "LED Bulb",
        href: "/products/lighting/led-bulb",
      },
      {
        name: "AC/DC Inverter",
        href: "/products/lighting/ac-dc-inverter",
      },
      {
        name: "Concealed Light",
        href: "/products/lighting/concealed-light",
      },
    ],
  },
];

/* =========================================================
   SMART SOLUTIONS PRODUCTS
========================================================= */

const smartSolutionProducts = [
  {
    name: "DC Orthopaedic Kit",
    href: "/products/smart-solutions/dc-orthopaedic-kit",
  },
  {
    name: "Towel Warmer Controller",
    href: "/products/smart-solutions/towel-warmer-controller",
  },
  {
    name: "Coffee Dispenser Controller",
    href: "/products/smart-solutions/coffee-dispenser-kit",
  },
  {
    name: "Body Massager Controller",
    href: "/products/smart-solutions/body-massager-kit",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const serviceCategories = [
  {
    name: "Smart IoT Solutions",
    shortName: "Smart IoT",
    href: "/services/smart-iot",
  },
  {
    name: "PCB Designing & Layout",
    shortName: "PCB Design",
    href: "/services/pcb-design",
  },
  {
    name: "Embedded Development",
    shortName: "Embedded",
    href: "/services/embedded-development",
  },
  {
    name: "UX/UI Development",
    shortName: "UX/UI",
    href: "/services/ui-ux",
  },
  {
    name: "Prototype Assembly",
    shortName: "Prototype",
    href: "/services/prototype-assembly",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  /* =======================================================
     DESKTOP STATES
  ======================================================= */

  const [productsOpen, setProductsOpen] = useState(false);
  const [acOrthopaedicOpen, setAcOrthopaedicOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  /* =======================================================
     MOBILE STATES
  ======================================================= */

  const [menuOpen, setMenuOpen] = useState(false);

  const [mobileProductsOpen, setMobileProductsOpen] =
    useState(false);

  const [mobileSmartSolutionsOpen, setMobileSmartSolutionsOpen] =
    useState(false);

  const [mobileACOrthopaedicOpen, setMobileACOrthopaedicOpen] =
    useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  /* =======================================================
     CLOSE MOBILE MENU
  ======================================================= */

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileSmartSolutionsOpen(false);
    setMobileACOrthopaedicOpen(false);
    setMobileServicesOpen(false);
  };

  /* =======================================================
     CLOSE ALL MENUS
  ======================================================= */

  const closeAllMenus = () => {
    setProductsOpen(false);
    setAcOrthopaedicOpen(false);
    setServicesOpen(false);

    setMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileSmartSolutionsOpen(false);
    setMobileACOrthopaedicOpen(false);
    setMobileServicesOpen(false);
  };

  /* =======================================================
     TOGGLE PRODUCTS
  ======================================================= */

  const toggleProducts = () => {
    setProductsOpen((prev) => !prev);
    setServicesOpen(false);
    setAcOrthopaedicOpen(false);
  };

  /* =======================================================
     TOGGLE AC ORTHOPAEDIC
  ======================================================= */

  const toggleACOrthopaedic = () => {
    setAcOrthopaedicOpen((prev) => !prev);
  };

  /* =======================================================
     TOGGLE SERVICES
  ======================================================= */

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
    setProductsOpen(false);
    setAcOrthopaedicOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <Container className="flex h-16 items-center justify-between">

        {/* =================================================
            LOGO
        ================================================== */}

        <Link href="/" onClick={closeAllMenus}>
          <Image
            src="/images/logo/datchiklogo.png"
            alt="Datchik Electronics"
            width={180}
            height={60}
            priority
            loading="eager"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav className="hidden items-center gap-2 md:flex">

          {/* =================================================
              HOME
          ================================================== */}

          <Link
            href="/"
            onClick={closeAllMenus}
            className="rounded-lg px-4 py-2 text-[15px] font-medium text-slate-700 transition hover:bg-sky-500 hover:text-white"
          >
            Home
          </Link>

          {/* =================================================
              ABOUT
          ================================================== */}

          <Link
            href="/about"
            onClick={closeAllMenus}
            className="rounded-lg px-4 py-2 text-[15px] font-medium text-slate-700 transition hover:bg-sky-500 hover:text-white"
          >
            About
          </Link>

          {/* =================================================
              PRODUCTS
          ================================================== */}

          <div className="relative">

            {/* PRODUCTS BUTTON */}

            <button
              type="button"
              onClick={toggleProducts}
              aria-expanded={productsOpen}
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-[15px] font-medium text-slate-700 transition hover:bg-sky-500 hover:text-white"
            >
              <span>Products</span>

              <span
                className={`text-xs transition-transform duration-300 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* PRODUCTS DROPDOWN */}

            {productsOpen && (
              <div className="absolute left-1/2 top-full z-[100] w-[1050px] -translate-x-1/2">

                <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-7 shadow-2xl">

                  {/* HEADER */}

                  <div className="mb-6 border-b border-slate-200 pb-5">

                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                      Product Portfolio
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-slate-900">
                      Explore Datchik Products
                    </h3>

                  </div>

                  {/* FOUR MAIN COLUMNS */}

                  <div className="grid grid-cols-4 gap-8">

                    {/* =================================================
                        BIOMEDICAL
                    ================================================== */}

                    <div>

                      <h4 className="mb-4 border-b border-slate-100 pb-2 text-sm font-semibold text-slate-900">
                        Biomedical
                      </h4>

                      <div className="space-y-3">

                        {productCategories[0].products.map(
                          (product) => (
                            <Link
                              key={`biomedical-${product.name}`}
                              href={product.href}
                              onClick={closeAllMenus}
                              className="block text-sm leading-5 text-slate-500 transition hover:translate-x-1 hover:text-sky-600"
                            >
                              {product.name}
                            </Link>
                          )
                        )}

                      </div>
                    </div>

                    {/* =================================================
                        GAS DETECTION
                    ================================================== */}

                    <div>

                      <h4 className="mb-4 border-b border-slate-100 pb-2 text-sm font-semibold text-slate-900">
                        Gas Detection
                      </h4>

                      <div className="space-y-3">

                        {productCategories[1].products.map(
                          (product) => (
                            <Link
                              key={`gas-${product.name}`}
                              href={product.href}
                              onClick={closeAllMenus}
                              className="block text-sm leading-5 text-slate-500 transition hover:translate-x-1 hover:text-sky-600"
                            >
                              {product.name}
                            </Link>
                          )
                        )}

                      </div>
                    </div>

                    {/* =================================================
                        SMART SOLUTIONS
                    ================================================== */}

                    <div>

                      <h4 className="mb-4 border-b border-slate-100 pb-2 text-sm font-semibold text-slate-900">
                        Smart Solutions
                      </h4>

                      <div className="space-y-2">

                        {/* =================================================
                            AC ORTHOPAEDIC KIT
                        ================================================== */}

                        <div>

                          <button
                            type="button"
                            onClick={toggleACOrthopaedic}
                            aria-expanded={acOrthopaedicOpen}
                            className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-600"
                          >
                            <span>
                              AC Orthopaedic Kit
                            </span>

                            <span className="text-xs">
                              {acOrthopaedicOpen ? "▼" : "▶"}
                            </span>
                          </button>

                          {/* AC PRODUCTS - BELOW */}

                          {acOrthopaedicOpen && (
                            <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-2">

                              <div className="space-y-1">

                                {acOrthopaedicKits.map(
                                  (kit) => (
                                    <Link
                                      key={`desktop-ac-${kit.href}`}
                                      href={kit.href}
                                      onClick={closeAllMenus}
                                      className="block rounded-lg px-3 py-2.5 text-sm leading-5 text-slate-600 transition hover:bg-white hover:text-sky-600"
                                    >
                                      {kit.name}
                                    </Link>
                                  )
                                )}

                              </div>

                            </div>
                          )}

                        </div>

                        {/* =================================================
                            OTHER SMART SOLUTIONS
                        ================================================== */}

                        {smartSolutionProducts.map(
                          (product) => (
                            <Link
                              key={`smart-${product.name}`}
                              href={product.href}
                              onClick={closeAllMenus}
                              className="block rounded-lg px-2 py-2 text-sm text-slate-500 transition hover:bg-sky-50 hover:text-sky-600"
                            >
                              {product.name}
                            </Link>
                          )
                        )}

                      </div>
                    </div>

                    {/* =================================================
                        LIGHTING
                    ================================================== */}

                    <div>

                      <h4 className="mb-4 border-b border-slate-100 pb-2 text-sm font-semibold text-slate-900">
                        Lighting
                      </h4>

                      <div className="space-y-3">

                        {productCategories[2].products.map(
                          (product) => (
                            <Link
                              key={`lighting-${product.name}`}
                              href={product.href}
                              onClick={closeAllMenus}
                              className="block text-sm leading-5 text-slate-500 transition hover:translate-x-1 hover:text-sky-600"
                            >
                              {product.name}
                            </Link>
                          )
                        )}

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}
          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div className="relative">

            {/* SERVICES BUTTON */}

            <button
              type="button"
              onClick={toggleServices}
              aria-expanded={servicesOpen}
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-[15px] font-medium text-slate-700 transition hover:bg-sky-500 hover:text-white"
            >
              <span>Services</span>

              <span
                className={`text-xs transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* SERVICES DROPDOWN */}

            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-[100] w-[700px] -translate-x-1/2">

                <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-7 shadow-2xl">

                  {/* HEADER */}

                  <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-5">

                    <div>

                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                        Engineering Services
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-slate-900">
                        Explore Our Services
                      </h3>

                    </div>

                    <Link
                      href="/services"
                      onClick={closeAllMenus}
                      className="text-sm font-semibold text-sky-600 hover:text-sky-700"
                    >
                      View All Services →
                    </Link>

                  </div>

                  {/* SERVICES LIST */}

                  <div className="grid grid-cols-2 gap-x-10 gap-y-1">

                    {serviceCategories.map(
                      (service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={closeAllMenus}
                          className="group/service flex items-center justify-between border-b border-slate-100 py-4 transition hover:border-sky-200"
                        >

                          <div>

                            <p className="text-sm font-semibold text-slate-800 transition group-hover/service:text-sky-600">
                              {service.name}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                              {service.shortName}
                            </p>

                          </div>

                          <span className="text-slate-300 transition group-hover/service:translate-x-1 group-hover/service:text-sky-500">
                            →
                          </span>

                        </Link>
                      )
                    )}

                  </div>

                </div>
              </div>
            )}

          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <Link
            href="/contact"
            onClick={closeAllMenus}
            className="rounded-lg px-4 py-2 text-[15px] font-medium text-slate-700 transition hover:bg-sky-500 hover:text-white"
          >
            Contact
          </Link>

        </nav>

        {/* =================================================
            GET QUOTE
        ================================================== */}

        <Link
          href="/contact"
          onClick={closeAllMenus}
          className="hidden rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 hover:shadow-lg md:inline-flex"
        >
          Get Quote
        </Link>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </Container>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[2500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <Container className="py-4">

          <nav className="flex flex-col">

            {/* HOME */}

            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 font-medium text-slate-700"
            >
              Home
            </Link>

            {/* ABOUT */}

            <Link
              href="/about"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 font-medium text-slate-700"
            >
              About
            </Link>

            {/* =================================================
                MOBILE PRODUCTS
            ================================================== */}

            <button
              type="button"
              onClick={() =>
                setMobileProductsOpen(
                  (prev) => !prev
                )
              }
              className="flex items-center justify-between border-b border-slate-100 py-4 text-left font-medium text-slate-700"
              aria-expanded={mobileProductsOpen}
            >
              <span>Products</span>

              <span>
                {mobileProductsOpen ? "−" : "+"}
              </span>
            </button>

            {mobileProductsOpen && (
              <div className="bg-slate-50 px-4 py-4">

                {/* VIEW ALL */}

                <Link
                  href="/products"
                  onClick={closeMenu}
                  className="mb-5 block font-semibold text-sky-600"
                >
                  View All Products →
                </Link>

                {/* BIOMEDICAL */}

                <div className="mb-6">

                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Biomedical
                  </p>

                  <div className="space-y-3">

                    {productCategories[0].products.map(
                      (product) => (
                        <Link
                          key={`mobile-biomedical-${product.name}`}
                          href={product.href}
                          onClick={closeMenu}
                          className="block text-sm text-slate-600 hover:text-sky-600"
                        >
                          {product.name}
                        </Link>
                      )
                    )}

                  </div>
                </div>

                {/* GAS DETECTION */}

                <div className="mb-6">

                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Gas Detection
                  </p>

                  <div className="space-y-3">

                    {productCategories[1].products.map(
                      (product) => (
                        <Link
                          key={`mobile-gas-${product.name}`}
                          href={product.href}
                          onClick={closeMenu}
                          className="block text-sm text-slate-600 hover:text-sky-600"
                        >
                          {product.name}
                        </Link>
                      )
                    )}

                  </div>
                </div>

                {/* =================================================
                    SMART SOLUTIONS
                ================================================== */}

                <div className="mb-6">

                  <button
                    type="button"
                    onClick={() =>
                      setMobileSmartSolutionsOpen(
                        (prev) => !prev
                      )
                    }
                    className="flex w-full items-center justify-between border-b border-slate-200 pb-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-400"
                    aria-expanded={mobileSmartSolutionsOpen}
                  >
                    <span>
                      Smart Solutions
                    </span>

                    <span className="text-base">
                      {mobileSmartSolutionsOpen
                        ? "−"
                        : "+"}
                    </span>
                  </button>

                  {mobileSmartSolutionsOpen && (
                    <div className="mt-4 pl-2">

                      {/* AC ORTHOPAEDIC KIT */}

                      <button
                        type="button"
                        onClick={() =>
                          setMobileACOrthopaedicOpen(
                            (prev) => !prev
                          )
                        }
                        className="flex w-full items-center justify-between rounded-lg border-b border-slate-200 py-3 text-left text-sm font-semibold text-slate-700"
                        aria-expanded={mobileACOrthopaedicOpen}
                      >
                        <span>
                          AC Orthopaedic Kit
                        </span>

                        <span>
                          {mobileACOrthopaedicOpen
                            ? "−"
                            : "+"}
                        </span>
                      </button>

                      {/* FOUR AC PRODUCTS */}

                      {mobileACOrthopaedicOpen && (
                        <div className="mt-2 space-y-1 rounded-lg bg-white p-2">

                          {acOrthopaedicKits.map(
                            (kit) => (
                              <Link
                                key={`mobile-ac-${kit.href}`}
                                href={kit.href}
                                onClick={closeMenu}
                                className="block rounded-md px-3 py-2 text-sm leading-5 text-slate-600 transition hover:bg-sky-50 hover:text-sky-600"
                              >
                                {kit.name}
                              </Link>
                            )
                          )}

                        </div>
                      )}

                      {/* OTHER SMART SOLUTIONS */}

                      {smartSolutionProducts.map(
                        (product, index) => (
                          <Link
                            key={`mobile-smart-${product.name}`}
                            href={product.href}
                            onClick={closeMenu}
                            className={`block rounded-lg py-2 text-sm text-slate-600 hover:text-sky-600 ${
                              index === 0
                                ? "mt-3"
                                : ""
                            }`}
                          >
                            {product.name}
                          </Link>
                        )
                      )}

                    </div>
                  )}

                </div>

                {/* =================================================
                    LIGHTING
                ================================================== */}

                <div className="mb-3">

                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Lighting
                  </p>

                  <div className="space-y-3">

                    {productCategories[2].products.map(
                      (product) => (
                        <Link
                          key={`mobile-lighting-${product.name}`}
                          href={product.href}
                          onClick={closeMenu}
                          className="block text-sm text-slate-600 hover:text-sky-600"
                        >
                          {product.name}
                        </Link>
                      )
                    )}

                  </div>
                </div>

              </div>
            )}

            {/* =================================================
                MOBILE SERVICES
            ================================================== */}

            <button
              type="button"
              onClick={() =>
                setMobileServicesOpen(
                  (prev) => !prev
                )
              }
              className="flex items-center justify-between border-b border-slate-100 py-4 text-left font-medium text-slate-700"
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>

              <span>
                {mobileServicesOpen ? "−" : "+"}
              </span>
            </button>

            {mobileServicesOpen && (
              <div className="bg-slate-50 px-4 py-4">

                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="mb-5 block font-semibold text-sky-600"
                >
                  View All Services →
                </Link>

                <div className="space-y-1">

                  {serviceCategories.map(
                    (service) => (
                      <Link
                        key={`mobile-service-${service.name}`}
                        href={service.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between border-b border-slate-100 py-3 text-sm text-slate-600 transition hover:text-sky-500"
                      >
                        <span>
                          {service.name}
                        </span>

                        <span>
                          →
                        </span>
                      </Link>
                    )
                  )}

                </div>
              </div>
            )}

            {/* CONTACT */}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 font-medium text-slate-700"
            >
              Contact
            </Link>

            {/* GET QUOTE */}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-5 flex justify-center rounded-lg bg-sky-500 px-6 py-3.5 font-semibold text-white"
            >
              Get Quote
            </Link>

          </nav>
        </Container>
      </div>
    </header>
  );
}

