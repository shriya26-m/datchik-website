import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const categories = {
  /* =====================================================
     BIOMEDICAL
  ====================================================== */

  biomedical: {
    name: "Biomedical",
    label: "Healthcare Electronics",
    description:
      "Electronic products designed for practical health, wellness and measurement applications.",

    products: [
      {
        name: "Orthopaedic Heat Belt",
        slug: "orthopaedic-heat-belt",
        image: "/images/products/biomedical/heat-belt.png",
        description:
          "Electronic heating solution for wellness applications.",
      },
      {
        name: "BP Monitor",
        slug: "bp-monitor",
        image: "/images/products/biomedical/bp-monitor.jpg",
        description:
          "Electronic blood pressure monitoring solution.",
      },
      {
        name: "Thermometer",
        slug: "thermometer",
        image: "/images/products/biomedical/thermometer.jpg",
        description:
          "Compact electronic temperature measurement solution.",
      },
      {
        name: "IR Meter",
        slug: "ir-meter",
        image: "/images/products/biomedical/ir-meter.jpg",
        description:
          "Infrared-based electronic measurement solution.",
      },
      {
        name: "Body Massager",
        slug: "body-massager",
        image: "/images/products/biomedical/body-massager.jpeg",
        description:
          "Electronic wellness product for massage applications.",
      },
    ],
  },

  /* =====================================================
     GAS DETECTION
  ====================================================== */

  "gas-detector": {
    name: "Gas Detection",
    label: "Safety & Monitoring",
    description:
      "LEL gas detection products designed for gas monitoring and safety applications.",

    products: [
      {
        name: "LEL Gas Detector with Display",
        slug: "lel-display",
        image: "/images/products/gas-detector/lel-display.jpeg",
        description:
          "Gas detection solution with display functionality.",
      },
      {
        name: "LEL Gas Detector without Display",
        slug: "lel-no-display",
        image: "/images/products/gas-detector/lel-no-display.jpg",
        description:
          "Compact LEL gas detection solution.",
      },
    ],
  },

  /* =====================================================
     SMART SOLUTIONS
  ====================================================== */

  "smart-solutions": {
    name: "Datchik Smart Solutions",
    label: "Smart Electronics",
    description:
      "Smart controller solutions developed for connected and automated applications.",

    products: [
      /* -------------------------------------------------
         01. TOWEL WARMER
      -------------------------------------------------- */

      {
        name: "Towel Warmer Controller Kit",
        slug: "towel-warmer-controller",
        image:
          "/images/products/smart-solutions/towel-warmer-controller.jpeg",
        description:
          "Smart controller for towel warmer applications.",
      },

      /* -------------------------------------------------
         02. COFFEE DISPENSER
      -------------------------------------------------- */

      {
        name: "Coffee Dispenser Controller Kit",
        slug: "coffee-dispenser-kit",
        image:
          "/images/products/smart-solutions/coffeedisp.jpeg",
        description:
          "Smart controller solution for coffee dispensing applications.",
      },

      /* -------------------------------------------------
         03. AC SINGLE POWER LED
      -------------------------------------------------- */

      {
        name: "AC Orthopaedic Controller Kit - Single Power LED",
        slug: "ac-orthopaedic-kit",
        image:
          "/images/products/smart-solutions/ac-single-power-led.jpeg",
        description:
          "AC orthopaedic controller kit with single power LED indication.",
      },

      /* -------------------------------------------------
         04. AC 3 STATUS LEDS
      -------------------------------------------------- */

      {
        name: "AC Orthopaedic Controller Kit - 3 Status LEDs",
        slug: "ac-orthopaedic-kit-status",
        image:
          "/images/products/smart-solutions/ac-3-status-led.jpeg",
        description:
          "AC orthopaedic controller kit with three status LED indicators.",
      },

      /* -------------------------------------------------
         05. AC 3 VOLTAGE LEDS
      -------------------------------------------------- */

      {
        name: "AC Orthopaedic Controller Kit - 3 AC Voltage LEDs",
        slug: "ac-orthopaedic-kit-voltage",
        image:
          "/images/products/smart-solutions/1led-3ac-volt.jpeg",
        description:
          "AC orthopaedic controller kit with three AC voltage LED indicators.",
      },

      /* -------------------------------------------------
         06. DC ORTHOPAEDIC
      -------------------------------------------------- */

      {
        name: "DC Orthopaedic Controller Kit - 3 DC Level Status LEDs",
        slug: "dc-orthopaedic-kit",
        image:
          "/images/products/smart-solutions/DC Orthopaedic controller kit ( 1 power led + 3 different dc level status led).png",
        description:
          "DC orthopaedic controller kit with three DC level status LED indicators.",
      },

      /* -------------------------------------------------
         07. AC ORTHOPADIC PCB
      -------------------------------------------------- */

      {
        name: "AC Orthopaedic Kit - Single LED PCB",
        slug: "orthopadic-kit",
        image:
          "/images/products/smart-solutions/AC Orthopadic kit( in PCB  single led ).jpeg",
        description:
          "AC orthopaedic controller kit with a single LED PCB indication.",
      },

      /* -------------------------------------------------
         08. BODY MASSAGER CONTROLLER
      -------------------------------------------------- */

      {
        name: "Body Massager Controller Kit",
        slug: "body-massager-kit",
        image:
          "/images/products/smart-solutions/Body massager controller kit.jpeg",
        description:
          "Electronic controller kit designed for body massager applications.",
      },
    ],
  },

  /* =====================================================
     LIGHTING
  ====================================================== */

  lighting: {
    name: "Lighting Solutions",
    label: "Lighting Electronics",
    description:
      "Modern lighting solutions for residential, commercial, industrial and architectural applications.",

    products: [
      {
        name: "Panel Light",
        slug: "panel-light",
        image: "/images/products/lighting/panel-light.jpg",
        description:
          "Modern indoor lighting solution.",
      },
      {
        name: "Floodlight",
        slug: "flood-light",
        image: "/images/products/lighting/floodlight.png",
        description:
          "High-output outdoor lighting solution.",
      },
      {
        name: "Streetlight",
        slug: "street-light",
        image: "/images/products/lighting/street-light.jpg",
        description:
          "Lighting solution for roads and outdoor infrastructure.",
      },
      {
        name: "LED Bulb",
        slug: "led-bulb",
        image: "/images/products/lighting/led-bulb.jpg",
        description:
          "LED lighting available from 0W to 15W.",
      },
      {
        name: "AC/DC Inverter",
        slug: "ac-dc-inverter",
        image: "/images/products/lighting/ac-dc-inverter.jpg",
        description:
          "Power conversion solution for electronic applications.",
      },
      {
        name: "Concealed Light",
        slug: "concealed-light",
        image: "/images/products/lighting/concealed-light.jpg",
        description:
          "Minimal architectural lighting solution.",
      },
    ],
  },
};

/* =====================================================
   STATIC PARAMS
====================================================== */

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}

/* =====================================================
   CATEGORY PAGE
====================================================== */

export default async function CategoryPage({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {
  const { category } = await params;

  const data =
    categories[category as keyof typeof categories];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-[#061426]">

      {/* =================================================
          HERO
      ================================================== */}

      <section className="bg-[#061426] px-6 pb-20 pt-36 text-white lg:px-12">
        <div className="mx-auto max-w-7xl">

          <Link
            href="/products"
            className="text-sm text-slate-400 transition hover:text-cyan-400"
          >
            ← All Products
          </Link>

          <div className="mt-14 max-w-4xl">

            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              {data.label}
            </p>

            <h1 className="mt-5 text-5xl font-semibold md:text-7xl">
              {data.name}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              {data.description}
            </p>

          </div>
        </div>
      </section>

      {/* =================================================
          PRODUCTS
      ================================================== */}

      <section className="px-6 py-24 lg:px-12">

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="mb-14 flex items-end justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
                Product Collection
              </p>

              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                Explore the range.
              </h2>

            </div>

            <span className="hidden text-sm text-slate-400 md:block">
              {data.products.length} Products
            </span>

          </div>

          {/* =================================================
              PRODUCT GRID
          ================================================== */}

          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">

            {data.products.map((product, index) => (

              

              <Link
                key={`${category}-${product.slug}`}
                href={`/products/${category}/${product.slug}`}
                className="group"
              >

                {/* IMAGE */}

                <div className="relative h-[580px] overflow-hidden rounded-[28px] bg-slate-100 sm:h-[420px] lg:h-[450px]">

                 <Image
  src={product.image}
  alt={product.name}
  fill
  unoptimized
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-contain scale-110 transition duration-700 group-hover:scale-115"
/>

                  {/* NUMBER */}

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                </div>

                {/* TEXT */}

                <div className="mt-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-blue-600">
                        Datchik Electronics
                      </p>

                      <h3 className="mt-2 text-xl font-semibold transition group-hover:text-blue-600">
                        {product.name}
                      </h3>

                    </div>

                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 transition group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                      ↗
                    </span>

                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {product.description}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          CTA
      ================================================== */}

      <section className="px-6 pb-24 lg:px-12">

        <div className="mx-auto max-w-7xl border-t border-slate-200 pt-16">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
                Need a custom solution?
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Let's discuss your requirement.
              </h2>

            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit rounded-full bg-[#061426] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Contact Us →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}