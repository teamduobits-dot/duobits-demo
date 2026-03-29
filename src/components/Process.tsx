import { motion } from 'framer-motion';

const steps = [
  { title: "Requirement", desc: "We understand your business needs and project goals." },
  { title: "Design", desc: "We create modern UI/UX tailored to your audience." },
  { title: "Development", desc: "We build scalable, high-performance solutions." },
  { title: "Delivery", desc: "We deploy and support your product for success." },
];

const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-16 text-slate-900">
          Our <span className="text-indigo-600">Process</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 hover-lift"
            >
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">
                {i + 1}
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-slate-500">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;