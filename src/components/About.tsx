import { motion } from 'framer-motion';

const aboutPoints = [
  {
    title: 'Who We Are',
    text: 'A team of developers and designers focused on delivering high-quality digital solutions.',
  },
  {
    title: 'What We Do',
    text: 'We build websites, mobile apps, and custom software tailored for modern businesses.',
  },
  {
    title: 'Our Approach',
    text: 'We work closely with clients, ensuring transparency, speed, and measurable results.',
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-[500px] h-[300px] bg-indigo-100 blur-3xl opacity-30 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                alt="Duobits team working together"
                className="w-full h-[400px] object-cover"
              />

              <div className="absolute -bottom-8 left-6 right-6 grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg border text-center">
                  <h3 className="text-3xl font-bold text-slate-900">50+</h3>
                  <p className="text-sm text-slate-500">Projects Delivered</p>
                </div>

                <div className="bg-indigo-600 p-6 rounded-2xl shadow-lg text-white text-center">
                  <h3 className="text-3xl font-bold">2+</h3>
                  <p className="text-sm text-indigo-100">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h4 className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-4">
              About Duobits
            </h4>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Building Software That{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Drives Real Results
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              At Duobits Software Solutions, we help businesses transform ideas
              into powerful digital products. Our focus is not just building
              software, but creating solutions that generate real business value.
            </p>

            <div className="space-y-6">
              {aboutPoints.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                    {`0${i + 1}`}
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 text-lg mb-1">
                      {item.title}
                    </h5>
                    <p className="text-slate-500 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;