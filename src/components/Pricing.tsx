import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: '₹29,999',
    description:
      'Perfect for small businesses and startups looking to establish a presence.',
    features: [
      'Custom Responsive Website',
      '5 Pages Included',
      'Basic SEO Setup',
      'Contact Form Integration',
      '1 Year Support',
    ],
    highlight: false,
  },
  {
    name: 'Business',
    price: '₹49,999',
    description:
      'Ideal for growing businesses that need more features and customization.',
    features: [
      'E-commerce Functionality',
      'Up to 15 Pages',
      'Advanced SEO & Analytics',
      'Social Media Integration',
      'Priority Support',
    ],
    highlight: true,
  },
  {
    name: 'Custom',
    price: 'Contact Us',
    description: 'For large-scale applications and complex software solutions.',
    features: [
      'Full Stack Applications',
      'Mobile App Development',
      'AI/ML Integration',
      'Cloud Infrastructure',
      'Dedicated Account Manager',
    ],
    highlight: false,
  },
];

const NAVBAR_OFFSET = 120;

const Pricing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handlePlanSelect = (planName: string) => {
    const query = `?service=${encodeURIComponent(planName + ' Plan')}`;

    if (location.pathname !== '/') {
      navigate(`/#contact${query}`);
      return;
    }

    scrollToContact();
  };

  return (
    <section id="pricing" className="relative py-24 bg-white overflow-hidden">
      {/* BACKGROUND GLOW */}
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
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            No hidden fees. Choose a plan that fits your business needs and scale
            as you grow.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className={`relative p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                plan.highlight
                  ? 'bg-white border-indigo-500 shadow-2xl scale-[1.04]'
                  : 'bg-white border-slate-200 hover:shadow-xl'
              }`}
            >
              {/* MOST POPULAR */}
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              {/* GLOW EFFECT */}
              {plan.highlight && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-indigo-200 blur-3xl rounded-full opacity-40" />
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {plan.name}
              </h3>

              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-extrabold text-slate-900">
                  {plan.price}
                </span>
                {plan.price !== 'Contact Us' && (
                  <span className="text-slate-500 ml-2">/project</span>
                )}
              </div>

              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center space-x-3 text-slate-700 font-medium"
                  >
                    <div className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                      <Check size={12} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => handlePlanSelect(plan.name)}
                className={`group relative w-full py-4 rounded-xl font-bold overflow-hidden transition ${
                  plan.highlight ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-white'
                }`}
              >
                <span className="relative z-10">Choose {plan.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-300" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;