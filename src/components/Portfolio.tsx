import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Fintech Mobile App',
    category: 'Mobile Development',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Custom Software',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Healthcare Portal',
    category: 'Web Development',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
  },
];

const NAVBAR_OFFSET = 120;

const Portfolio = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleProjectInquiry = (projectTitle?: string) => {
    const query = projectTitle
      ? `?project=${encodeURIComponent(projectTitle)}`
      : '';

    if (location.pathname !== '/') {
      navigate(`/#contact${query}`);
      return;
    }

    scrollToContact();
  };

  return (
    <section id="portfolio" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      {/* SUBTLE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-indigo-100 blur-3xl opacity-30 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            >
              Our Recent{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Work
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Take a look at some of the digital products we've built for our
              clients across various industries.
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => handleProjectInquiry()}
            className="group px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-semibold hover:bg-slate-900 hover:text-white transition-all"
          >
            View All Projects
          </motion.button>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />

                {/* SOFT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-50 transition duration-500" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="text-sm text-indigo-600 font-semibold mb-2">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {project.title}
                </h3>

                <button
                  type="button"
                  onClick={() => handleProjectInquiry(project.title)}
                  className="flex items-center text-indigo-600 font-semibold group/btn"
                >
                  View Project
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute top-[-40px] right-[-40px] w-40 h-40 bg-indigo-100 blur-3xl rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;