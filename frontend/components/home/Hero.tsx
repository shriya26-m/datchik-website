import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="bg-slate-50 py-14 lg:py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* Left */}
          <div className="max-w-xl">
            <p className="text-sky-500 font-semibold uppercase tracking-widest">
              Trusted Electronics Manufacturing Partner
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Smart
              <span className="text-sky-500"> Electronics </span>
              Solutions for Modern Industries
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Datchick Electronics specializes in LED lighting, PCB design,
              embedded engineering, IoT solutions, healthcare electronics,
              and customized industrial products. We deliver innovative,
              reliable, and high-quality electronic solutions for businesses
              across multiple industries.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-sky-500 px-8 py-4 text-white font-semibold hover:bg-sky-600 transition">
                Explore Products
              </button>

              <button className="rounded-xl border border-sky-500 px-8 py-4 text-sky-500 font-semibold hover:bg-sky-500 hover:text-white transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/hero/hero.png"
              alt="Datchick Electronics Products"
              className="w-full max-w-xl lg:max-w-2xl"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}