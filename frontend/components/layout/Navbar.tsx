// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import Container from "./Container";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Products", href: "/products" },
//   { name: "Services", href: "/services" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md">
//       <Container className="flex h-20 items-center justify-between">

//         {/* Logo */}
//         <Link
//           href="/"
//           className="flex items-center"
//           onClick={closeMenu}
//         >
//           <Image
//             src="/images/logo/datchik-logo.jpeg"
//             alt="Datchick Electronics"
//             width={180}
//             height={60}
//             priority
//             className="h-14 w-auto object-contain"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden items-center gap-2 md:flex">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="rounded-lg px-4 py-2 text-[15px] font-medium text-slate-700 transition-all duration-300 hover:bg-sky-500 hover:text-white"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Desktop CTA */}
//         <Link
//           href="/contact"
//           className="hidden items-center rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-600 hover:shadow-lg md:inline-flex"
//         >
//           Get Quote
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden"
//           aria-label="Toggle menu"
//           aria-expanded={menuOpen}
//         >
//           {menuOpen ? (
//             /* X Icon */
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18 18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             /* Hamburger Icon */
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>
//       </Container>

//       {/* ================= MOBILE MENU ================= */}

//       <div
//         className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 md:hidden ${
//           menuOpen
//             ? "max-h-[500px] opacity-100"
//             : "max-h-0 opacity-0"
//         }`}
//       >
//         <Container className="py-4">

//           <nav className="flex flex-col">

//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={closeMenu}
//                 className="border-b border-slate-100 px-2 py-4 text-base font-medium text-slate-700 transition hover:text-sky-500"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {/* Mobile CTA */}

//             <Link
//               href="/contact"
//               onClick={closeMenu}
//               className="mt-4 flex items-center justify-center rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-600"
//             >
//               Get Quote
//             </Link>

//           </nav>

//         </Container>
//       </div>
//     </header>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

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
    name: "Smart Solutions",
    products: [
      {
        name: "Towel Warmer Controller Kit",
        href: "/products/smart-solutions/towel-warmer-controller",
      },
    ],
  },

  {
    name: "Body Massage",
    products: [
      {
        name: "Body Massager",
        href: "/products/body-massage/body-massager",
      },
      {
        name: "Orthopaedic Controller Kit",
        href: "/products/body-massage/orthopaedic-controller",
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
        name: "Decorative Lights",
        href: "/products/lighting/decorative-lights",
      },
      {
        name: "Concealed Light",
        href: "/products/lighting/concealed-light",
      },
    ],
  },
];



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




export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
const [mobileServicesOpen, setMobileServicesOpen] = useState(false);


  
  const closeMenu = () => {
  setMenuOpen(false);
  setMobileProductsOpen(false);
  setMobileServicesOpen(false);
};

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <Container className="flex h-20 items-center justify-between">

        {/* LOGO */}

        <Link href="/" onClick={closeMenu}>
          <Image
            src="/images/logo/datchik-logo.jpeg"
            alt="Datchick Electronics"
            width={180}
            height={60}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>


        {/* ================= DESKTOP NAVIGATION ================= */}

        <nav className="hidden items-center gap-2 md:flex">

          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-lg px-4 py-2 text-[15px] font-medium text-slate-700 transition hover:bg-sky-500 hover:text-white"
            >
              {link.name}
            </Link>
          ))}


          {/* PRODUCTS DROPDOWN */}

          <div className="group relative">

            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-[15px] font-medium text-slate-700 transition hover:bg-sky-500 hover:text-white"
            >
              Products

              <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                ▼
              </span>
            </Link>


            {/* DROPDOWN */}

            <div className="invisible absolute left-1/2 top-full w-[900px] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-7 shadow-2xl">

                <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-5">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                      Product Portfolio
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-slate-900">
                      Explore Datchick Products
                    </h3>
                  </div>

                  <Link
                    href="/products"
                    className="text-sm font-semibold text-sky-600 hover:text-sky-700"
                  >
                    View All Products →
                  </Link>

                </div>


                {/* PRODUCT CATEGORIES */}

                <div className="grid grid-cols-5 gap-6">

                  {productCategories.map((category) => (

                    <div key={category.name}>

                      <h4 className="mb-4 text-sm font-semibold text-slate-900">
                        {category.name}
                      </h4>

                      <div className="space-y-3">

                        {category.products.map((product) => (

                          <Link
                            key={product.name}
                            href={product.href}
                            className="block text-sm leading-5 text-slate-500 transition hover:translate-x-1 hover:text-sky-600"
                          >
                            {product.name}
                          </Link>

                        ))}

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>


          {/* SERVICES + CONTACT */}

         {/* ================= SERVICES DROPDOWN ================= */}

<div className="group relative">

  <Link
    href="#"
    className="flex items-center gap-2 rounded-lg px-4 py-2 text-[15px] font-medium text-slate-700 transition hover:bg-sky-500 hover:text-white"
  >
    Services

    <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
      ▼
    </span>
  </Link>

  {/* SERVICES DROPDOWN */}

  <div className="invisible absolute left-1/2 top-full w-[700px] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

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
          className="text-sm font-semibold text-sky-600 hover:text-sky-700"
        >
          View All Services →
        </Link>

      </div>

      {/* SERVICES */}

      <div className="grid grid-cols-2 gap-x-10 gap-y-1">

        {serviceCategories.map((service) => (

          <Link
            key={service.name}
            href={service.href}
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

        ))}

      </div>

    </div>

  </div>

</div>


{/* CONTACT */}

<Link
  href="/contact"
  className="rounded-lg px-4 py-2 text-[15px] font-medium text-slate-700 transition hover:bg-sky-500 hover:text-white"
>
  Contact
</Link>

        </nav>


        {/* DESKTOP CTA */}

        <Link
          href="/contact"
          className="hidden rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 hover:shadow-lg md:inline-flex"
        >
          Get Quote
        </Link>


        {/* MOBILE BUTTON */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </Container>


      {/* ================= MOBILE MENU ================= */}

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[900px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <Container className="py-4">

          <nav className="flex flex-col">

            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 font-medium"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 font-medium"
            >
              About
            </Link>


            {/* MOBILE PRODUCTS */}

            <button
              type="button"
              onClick={() =>
                setMobileProductsOpen(!mobileProductsOpen)
              }
              className="flex items-center justify-between border-b border-slate-100 py-4 text-left font-medium"
            >
              Products

              <span>
                {mobileProductsOpen ? "−" : "+"}
              </span>
            </button>


            {mobileProductsOpen && (

              <div className="bg-slate-50 px-4 py-4">

                <Link
                  href="/products"
                  onClick={closeMenu}
                  className="mb-5 block font-semibold text-sky-600"
                >
                  View All Products →
                </Link>

                {productCategories.map((category) => (

                  <div
                    key={category.name}
                    className="mb-6"
                  >

                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {category.name}
                    </p>

                    <div className="space-y-3">

                      {category.products.map((product) => (

                        <Link
                          key={product.name}
                          href={product.href}
                          onClick={closeMenu}
                          className="block text-sm text-slate-600 hover:text-sky-600"
                        >
                          {product.name}
                        </Link>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            )}


            {/* ================= MOBILE SERVICES ================= */}

<button
  type="button"
  onClick={() =>
    setMobileServicesOpen(!mobileServicesOpen)
  }
  className="flex items-center justify-between border-b border-slate-100 py-4 text-left font-medium"
>
  Services

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

      {serviceCategories.map((service) => (

        <Link
          key={service.name}
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

      ))}

    </div>

  </div>

)}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 font-medium"
            >
              Contact
            </Link>


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