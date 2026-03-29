import { motion } from 'framer-motion';
import { Globe, Smartphone, Code, Cpu, ArrowUpRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'Website Development',
    description:
      'High-performance websites built with React and Next.js, optimized for speed and conversion.',
    icon: Globe,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications that provide a seamless user experience.',
    icon: Smartphone,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Custom Software',
    description:
      'Tailored software solutions designed to solve your specific business challenges and scale.',
    icon: Code,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'AI Solutions',
    description:
      'Integrating cutting-edge AI to automate processes and provide intelligent insights.',
    icon: Cpu,
    color: 'bg-emerald-50 text-emerald-600',
  },
];

const NAVBAR_OFFSET = 120;

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleLearnMore = (serviceTitle: string) => {
    const encodedTitle = encodeURIComponent(serviceTitle);

    if (location.pathname !== '/') {
      navigate(`/#contact?service=${encodedTitle}`);
      return;
    }

    scrollToContact();
  };

  return (
    <section id="services" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      {/* SUBTLE BACKGROUND EFFECT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-100 blur-3xl opacity-30 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Specialized Services for{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Growth-Minded
            </span>{' '}
            Businesses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            We combine technical expertise with business strategy to deliver
            digital products that make a real impact.
          </motion.p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* HOVER GRADIENT BORDER */}
              <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-[2rem] border border-indigo-200" />
              </div>

              {/* ICON */}
              <div
                className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                <service.icon size={26} />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-600 mb-6 leading-relaxed text-[15px]">
                {service.description}
              </p>

              {/* CTA */}
              <button
                type="button"
                onClick={() => handleLearnMore(service.title)}
                className="flex items-center text-indigo-600 font-semibold cursor-pointer group/link"
              >
                Learn More
                <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </button>

              {/* LIGHT GLOW ON HOVER */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute top-[-40px] right-[-40px] w-32 h-32 bg-indigo-100 blur-2xl rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;