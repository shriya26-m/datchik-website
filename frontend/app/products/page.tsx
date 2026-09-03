import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    number: "01",
    name: "Biomedical",
    slug: "biomedical",
    label: "Healthcare Electronics",
    description:
      "Practical electronic products for health, wellness and measurement applications.",
    image: "/images/products/biomedical/orthopaedic-heat-belt.jpg",
  },

  {
    number: "02",
    name: "Gas Detection",
    slug: "gas-detector",
    label: "Safety & Monitoring",
    description:
      "LEL gas detection solutions designed for monitoring and safety applications.",
    image: "/images/products/gas-detector/lel-display.jpg",
  },

  {
    number: "03",
    name: "Datchick Smart Solutions",
    slug: "smart-solutions",
    label: "Smart Electronics",
    description:
      "Smart controller solutions for connected and automated electronic applications.",
    image:
      "/images/products/smart-solutions/towel-warmer-controller.jpg",
  },

  {
    number: "04",
    name: "Body Massage",
    slug: "body-massage",
    label: "Wellness Electronics",
    description:
      "Electronic wellness products designed for massage, comfort and personal applications.",
    image: "/images/products/body-massage/body-massager.jpg",
  },

  {
    number: "05",
    name: "Lighting Solutions",
    slug: "lighting",
    label: "Lighting Electronics",
    description:
      "Modern lighting products including panel lights, floodlights, streetlights and decorative solutions.",
    image: "/images/products/lighting/panel-light.jpg",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-[#061426]">

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#061426] px-6 pb-24 pt-36 text-white lg:px-12">

        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Our Products
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">

            <h1 className="text-5xl font-semibold leading-[1.05] md:text-7xl">
              Technology designed for
              <span className="block text-cyan-400">
                real-world applications.
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-400 lg:pb-2">
              Explore Datchick Electronics products across biomedical
              electronics, gas detection, smart solutions, wellness
              electronics and lighting.
            </p>

          </div>

        </div>
      </section>


      {/* PRODUCT CATEGORIES */}

      <section className="px-6 py-24 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Product Portfolio
            </p>

            <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
              Electronics built around
              <span className="block text-slate-400">
                everyday needs.
              </span>
            </h2>

          </div>


          {/* CATEGORY LIST */}

          <div className="divide-y divide-slate-200 border-y border-slate-200">

            {categories.map((category) => (

              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group grid gap-8 py-12 transition md:grid-cols-[80px_1fr_360px] md:items-center"
              >

                {/* NUMBER */}

                <span className="text-sm font-semibold text-slate-400">
                  {category.number}
                </span>


                {/* IMAGE + TITLE */}

                <div className="flex items-center gap-7">

                  <div className="relative hidden h-28 w-36 overflow-hidden rounded-2xl bg-slate-100 sm:block">

                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain p-4 transition duration-500 group-hover:scale-110"
                    />

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.2em] text-blue-600">
                      {category.label}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold transition group-hover:text-blue-600 md:text-3xl">
                      {category.name}
                    </h3>

                  </div>

                </div>


                {/* DESCRIPTION */}

                <div className="flex items-center justify-between gap-5">

                  <p className="text-sm leading-7 text-slate-500">
                    {category.description}
                  </p>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-xl transition group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                    ↗
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="px-6 pb-24 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[32px] bg-[#061426] px-8 py-16 text-white md:px-16">

            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-[100px]" />

            <div className="relative max-w-3xl">

              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                Custom Requirements
              </p>

              <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
                Looking for something
                <span className="text-cyan-400"> specific?</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Have a custom electronics requirement or a product idea?
                Our engineering team can help explore the right approach.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#061426] transition hover:bg-cyan-400"
              >
                Talk to Our Team →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}