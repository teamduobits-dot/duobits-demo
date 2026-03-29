const techs = ["React", "Node.js", "Firebase", "AI Tools"];

const TechStack = () => {
  return (
    <section className="py-20 bg-[#F8FAFC] text-center">
      <h2 className="text-3xl font-bold mb-10 text-slate-900">
        Technologies We Use
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {techs.map((tech, i) => (
          <div key={i} className="px-6 py-3 bg-white border rounded-xl shadow-sm hover-lift">
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;