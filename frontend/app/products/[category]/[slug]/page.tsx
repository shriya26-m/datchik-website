import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const products = {
  "biomedical/orthopaedic-heat-belt": {
    number: "01",
    name: "Orthopaedic Heat Belt",
    category: "Biomedical",
    label: "Healthcare Electronics",
    image: "/images/products/biomedical/orthopaedic-heat-belt.jpg",
    description:
      "A practical electronic heating solution designed for orthopaedic and wellness applications.",
    applications: [
      "Personal wellness",
      "Heat therapy applications",
      "Orthopaedic support",
      "Home use",
    ],
  },

  "biomedical/bp-monitor": {
    number: "02",
    name: "BP Monitor",
    category: "Biomedical",
    label: "Healthcare Electronics",
    image: "/images/products/biomedical/bp-monitor.jpg",
    description:
      "An electronic blood pressure monitoring solution designed for convenient measurement applications.",
    applications: [
      "Health monitoring",
      "Home use",
      "Personal measurement",
      "Healthcare applications",
    ],
  },

  "biomedical/thermometer": {
    number: "03",
    name: "Thermometer",
    category: "Biomedical",
    label: "Healthcare Electronics",
    image: "/images/products/biomedical/thermometer.jpg",
    description:
      "A compact electronic temperature measurement solution for everyday applications.",
    applications: [
      "Temperature measurement",
      "Home use",
      "Healthcare applications",
      "Personal monitoring",
    ],
  },

  "biomedical/ir-meter": {
    number: "04",
    name: "IR Meter",
    category: "Biomedical",
    label: "Healthcare Electronics",
    image: "/images/products/biomedical/ir-meter.jpg",
    description:
      "An infrared-based electronic measurement solution designed for practical monitoring applications.",
    applications: [
      "Infrared measurement",
      "Monitoring applications",
      "Healthcare electronics",
      "Electronic measurement",
    ],
  },

  "gas-detector/lel-display": {
    number: "01",
    name: "LEL Gas Detector with Display",
    category: "Gas Detection",
    label: "Safety & Monitoring",
    image: "/images/products/gas-detector/lel-display.jpg",
    description:
      "An LEL gas detection solution with display functionality for gas monitoring applications.",
    applications: [
      "Gas monitoring",
      "Industrial environments",
      "Safety monitoring",
      "LEL detection",
    ],
  },

  "gas-detector/lel-no-display": {
    number: "02",
    name: "LEL Gas Detector without Display",
    category: "Gas Detection",
    label: "Safety & Monitoring",
    image: "/images/products/gas-detector/lel-no-display.jpg",
    description:
      "A compact LEL gas detection solution designed for practical gas monitoring applications.",
    applications: [
      "Gas monitoring",
      "Industrial applications",
      "Safety systems",
      "LEL detection",
    ],
  },

  "smart-solutions/towel-warmer-controller": {
    number: "01",
    name: "Towel Warmer Controller Kit",
    category: "Smart Solutions",
    label: "Smart Electronics",
    image:
      "/images/products/smart-solutions/towel-warmer-controller.jpg",
    description:
      "A smart controller solution developed for towel warmer and connected electronic applications.",
    applications: [
      "Towel warmer systems",
      "Smart appliances",
      "Electronic control",
      "Connected applications",
    ],
  },

  "body-massage/body-massager": {
    number: "01",
    name: "Body Massager",
    category: "Body Massage",
    label: "Wellness Electronics",
    image: "/images/products/body-massage/body-massager.jpg",
    description:
      "An electronic wellness product designed for practical massage and comfort applications.",
    applications: [
      "Personal wellness",
      "Massage applications",
      "Home use",
      "Comfort applications",
    ],
  },

  "body-massage/orthopaedic-controller": {
    number: "02",
    name: "Orthopaedic Controller Kit",
    category: "Body Massage",
    label: "Wellness Electronics",
    image:
      "/images/products/body-massage/orthopaedic-controller.jpg",
    description:
      "An electronic controller solution designed for orthopaedic wellness and comfort applications.",
    applications: [
      "Orthopaedic applications",
      "Wellness electronics",
      "Controller systems",
      "Personal use",
    ],
  },

  "lighting/panel-light": {
    number: "01",
    name: "Panel Light",
    category: "Lighting",
    label: "Indoor Lighting",
    image: "/images/products/lighting/panel-light.jpg",
    description:
      "Modern lighting designed for clean, efficient and practical indoor illumination.",
    applications: [
      "Homes",
      "Offices",
      "Commercial spaces",
      "Interior environments",
    ],
  },

  "lighting/flood-light": {
    number: "02",
    name: "Floodlight",
    category: "Lighting",
    label: "Outdoor Lighting",
    image: "/images/products/lighting/flood-light.jpg",
    description:
      "High-output lighting designed for outdoor and large-area illumination.",
    applications: [
      "Outdoor areas",
      "Industrial spaces",
      "Buildings",
      "Large-area lighting",
    ],
  },

  "lighting/street-light": {
    number: "03",
    name: "Streetlight",
    category: "Lighting",
    label: "Infrastructure Lighting",
    image: "/images/products/lighting/street-light.jpg",
    description:
      "Reliable lighting designed for roads, pathways and outdoor infrastructure.",
    applications: [
      "Roads",
      "Pathways",
      "Public spaces",
      "Outdoor infrastructure",
    ],
  },

  "lighting/led-bulb": {
    number: "04",
    name: "LED Bulb",
    category: "Lighting",
    label: "General Lighting",
    image: "/images/products/lighting/led-bulb.jpg",
    description:
      "Energy-efficient LED lighting solutions available from 0W to 15W.",
    applications: [
      "Residential lighting",
      "Commercial spaces",
      "Indoor illumination",
      "Everyday lighting",
    ],
  },

  "lighting/ac-dc-inverter": {
    number: "05",
    name: "AC/DC Inverter",
    category: "Lighting",
    label: "Power Electronics",
    image: "/images/products/lighting/ac-dc-inverter.jpg",
    description:
      "A power conversion solution designed for lighting and electronic applications.",
    applications: [
      "Lighting systems",
      "Electronic applications",
      "Power conversion",
      "Control systems",
    ],
  },

  "lighting/decorative-lights": {
    number: "06",
    name: "Decorative Lights",
    category: "Lighting",
    label: "Decorative Lighting",
    image: "/images/products/lighting/decorative-lights.jpg",
    description:
      "Lighting solutions designed to enhance interiors and architectural environments.",
    applications: [
      "Interior decoration",
      "Architectural spaces",
      "Commercial environments",
      "Decorative applications",
    ],
  },

  "lighting/concealed-light": {
    number: "07",
    name: "Concealed Light",
    category: "Lighting",
    label: "Architectural Lighting",
    image: "/images/products/lighting/concealed-light.jpg",
    description:
      "Minimal architectural lighting designed for modern interior applications.",
    applications: [
      "Modern interiors",
      "Architectural spaces",
      "Ceiling applications",
      "Interior lighting",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(products).map((key) => {
    const [category, slug] = key.split("/");

    return {
      category,
      slug,
    };
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}) {
  const { category, slug } = await params;

  const product =
    products[`${category}/${slug}` as keyof typeof products];

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-[#061426]">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#061426] text-white">

        {/* Background glow */}

        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-12">

          {/* Breadcrumb */}

          <div className="flex items-center gap-3 text-sm text-slate-500">

            <Link
              href="/products"
              className="transition hover:text-cyan-400"
            >
              Products
            </Link>

            <span>/</span>

            <Link
              href={`/products/${category}`}
              className="transition hover:text-cyan-400"
            >
              {product.category}
            </Link>

            <span>/</span>

            <span className="text-slate-300">
              {product.name}
            </span>

          </div>


          {/* Main hero */}

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

            {/* IMAGE */}

            <div className="group relative">

              <div className="absolute -inset-4 rounded-[40px] bg-cyan-400/5 blur-2xl transition duration-700 group-hover:bg-cyan-400/10" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1d32]">

                <div className="relative aspect-[4/3]">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    className="object-contain p-10 transition duration-700 ease-out group-hover:scale-105 md:p-16"
                  />

                </div>

                {/* Product number */}

                <div className="absolute left-6 top-6 flex items-center gap-3">

                  <span className="text-xs tracking-[0.25em] text-slate-500">
                    PRODUCT
                  </span>

                  <span className="text-sm font-semibold text-cyan-400">
                    {product.number}
                  </span>

                </div>

              </div>

            </div>


            {/* CONTENT */}

            <div>

              <div className="flex items-center gap-4">

                <span className="h-px w-10 bg-cyan-400" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  {product.label}
                </p>

              </div>

              <h1 className="mt-7 max-w-2xl text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
                {product.name}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                {product.description}
              </p>


              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href={`/contact?product=${encodeURIComponent(
                    product.name
                  )}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-semibold text-[#061426] transition hover:bg-white"
                >
                  Send Product Enquiry

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href={`/products/${category}`}
                  className="inline-flex items-center rounded-full border border-white/15 px-7 py-4 text-sm text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  Back to Collection
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PRODUCT INTRO ================= */}

      <section className="px-6 py-24 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Product Overview
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                Built for
                <span className="block text-slate-400">
                  practical applications.
                </span>
              </h2>

            </div>

            <div>

              <p className="max-w-3xl text-xl leading-9 text-slate-600">
                {product.description}
              </p>

              <div className="mt-10 h-px w-full bg-slate-200" />

              <div className="mt-7 flex flex-wrap gap-x-12 gap-y-4 text-sm text-slate-500">

                <div>
                  <span className="block text-xs uppercase tracking-widest text-slate-400">
                    Category
                  </span>

                  <span className="mt-2 block font-medium text-[#061426]">
                    {product.category}
                  </span>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-widest text-slate-400">
                    Manufacturer
                  </span>

                  <span className="mt-2 block font-medium text-[#061426]">
                    Datchick Electronics
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= APPLICATIONS ================= */}

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-24 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Applications
              </p>

              <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
                Where it
                <span className="block text-slate-400">
                  fits.
                </span>
              </h2>

            </div>


            <div className="border-t border-slate-300">

              {product.applications.map((application, index) => (

                <div
                  key={application}
                  className="group flex items-center justify-between border-b border-slate-300 py-7 transition hover:px-3"
                >

                  <div className="flex items-center gap-7">

                    <span className="text-xs font-semibold text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xl font-medium">
                      {application}
                    </span>

                  </div>

                  <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600">
                    →
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= ENQUIRY CTA ================= */}

      <section className="px-6 py-24 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[36px] bg-[#061426] px-8 py-16 md:px-16 md:py-20">

            <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]" />

            <div className="relative max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Product Enquiry
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
                Interested in
                <span className="block text-cyan-400">
                  {product.name}?
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Have a requirement or want to know more about this
                product? Get in touch with the Datchick Electronics team.
              </p>

              <Link
                href={`/contact?product=${encodeURIComponent(
                  product.name
                )}`}
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#061426] transition hover:bg-cyan-400"
              >
                Discuss Your Requirement
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}