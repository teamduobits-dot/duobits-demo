import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Clock, TrendingUp } from 'lucide-react';

const reasons = [
  {
    title: 'Affordable Pricing',
    description: 'Premium quality software doesn\'t have to break the bank. We offer competitive rates for top-tier talent.',
    icon: TrendingUp,
  },
  {
    title: 'Fast Delivery',
    description: 'We value your time. Our agile methodology ensures we deliver high-quality results on schedule.',
    icon: Zap,
  },
  {
    title: 'Reliable Support',
    description: 'We\'re here for you 24/7. Our dedicated support team ensures your software stays up and running.',
    icon: Shield,
  },
  {
    title: 'Scalable Solutions',
    description: 'We build with the future in mind. Our software is designed to grow as your business grows.',
    icon: Clock,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-slate-900 mb-6"
            >
              Why Businesses <span className="text-indigo-600">Trust Duobits</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 mb-8"
            >
              We don't just write code; we solve business problems. Our holistic approach ensures that every project we undertake adds tangible value to your organization.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col space-y-3"
                >
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                    <reason.icon size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900">{reason.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-3xl -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-indigo-100 rounded-3xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
