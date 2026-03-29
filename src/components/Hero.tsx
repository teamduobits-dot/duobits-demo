import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAVBAR_OFFSET = 120;

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleNavigateToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    scrollToSection(id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-[100px] lg:pt-[140px] pb-12 overflow-hidden bg-white"
    >
      {/* ENHANCED BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40" />

        {/* Gradient Glow 1 */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-300 rounded-full blur-3xl"
        />

        {/* Gradient Glow 2 */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-300 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6"
            >
              We Build Software That{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Drives Business Growth
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed"
            >
              From websites to powerful applications, we create digital solutions
              that help you scale faster. Premium UI/UX meets robust engineering.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => handleNavigateToSection('contact')}
                className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-300" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                  <div className="absolute -left-20 top-0 h-full w-20 bg-white/20 skew-x-12 animate-[shine_1s_ease]" />
                </div>
              </button>

              <button
                onClick={() => handleNavigateToSection('services')}
                className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:border-indigo-400 hover:bg-slate-50 transition-all text-center"
              >
                Explore Services
              </button>
            </motion.div>

            {/* TRUST BADGE */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center space-x-6 text-slate-400"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600"
                  >
                    JD
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                  +150
                </div>
              </div>
              <p className="text-sm font-medium">Trusted by 150+ clients</p>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="relative"
          >
            <div className="relative bg-white/70 backdrop-blur-md p-4 rounded-[2rem] border border-slate-200 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Dashboard"
                className="rounded-xl shadow-lg"
              />

              {/* Floating Card 1 */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border"
              >
                <p className="text-xs font-bold text-slate-900">Performance ↑</p>
                <p className="text-[10px] text-slate-500">+45% growth</p>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border"
              >
                <p className="text-xs font-bold text-slate-900">Syncing...</p>
                <div className="w-16 h-2 bg-slate-100 rounded mt-1">
                  <div className="w-2/3 h-full bg-indigo-600 rounded" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;