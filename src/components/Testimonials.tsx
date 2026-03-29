import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'CEO, TechVentures',
    content: 'Duobits transformed our legacy systems into a modern SaaS platform. Their attention to detail and technical prowess is unmatched.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Marketing Director, GrowFast',
    content: 'The website they built for us has doubled our conversion rate. It\'s not just beautiful; it\'s a lead generation machine.',
    rating: 5,
  },
  {
    name: 'Amit Kumar',
    role: 'Founder, CloudSolve',
    content: 'Working with Duobits felt like having an in-house tech team. They understood our vision perfectly and delivered beyond expectations.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-[#F8FAFC] overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-[400px] h-[300px] bg-indigo-100 blur-3xl opacity-30 rounded-full" />
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
            What Our{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Don't just take our word for it. Here's what businesses say after working with us.
          </motion.p>
        </div>

        {/* 🔥 HORIZONTAL SCROLL */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x scrollbar-hide">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[320px] md:min-w-[380px] snap-start bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >

              {/* QUOTE ICON */}
              <Quote size={40} className="text-indigo-100 absolute top-6 right-6" />

              {/* STARS */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* CONTENT */}
              <p className="text-slate-700 italic mb-8 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* USER */}
              <div className="flex items-center space-x-4 border-t border-slate-100 pt-6">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* 🔥 HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute bottom-[-40px] right-[-40px] w-40 h-40 bg-indigo-100 blur-3xl rounded-full" />
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;