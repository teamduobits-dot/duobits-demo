const stats = [
  { value: "50+", label: "Projects" },
  { value: "10+", label: "Clients" },
  { value: "2+", label: "Years Experience" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-3 text-center gap-6">

        {stats.map((stat, i) => (
          <div key={i} className="p-6">
            <h3 className="text-3xl font-bold text-indigo-600">{stat.value}</h3>
            <p className="text-slate-500">{stat.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;