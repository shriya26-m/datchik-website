import { services } from "@/constants/services";
import ServiceCard from "../common/ServiceCard";

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-blue-600">
            Our Services
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Engineering Excellence,
            <span className="text-blue-600"> Delivered.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide complete electronics engineering services,
            from PCB design and embedded systems to IoT solutions,
            manufacturing support and product development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}