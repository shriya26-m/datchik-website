type Props = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={30} />
      </div>

      <h3 className="mb-4 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="leading-7 text-slate-600">
        {description}
      </p>

      <button className="mt-6 font-semibold text-blue-600 transition-all group-hover:translate-x-2">
        Learn More →
      </button>
    </div>
  );
}