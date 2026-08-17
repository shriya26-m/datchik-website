type Props = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/70 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)]">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
        <Icon size={30} />
      </div>

      <h3 className="mb-3 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="leading-7 text-slate-600">
        {description}
      </p>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}