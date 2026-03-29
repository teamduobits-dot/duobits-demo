import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import AIEntrySection from '../components/AIEntrySection';
import Contact from '../components/Contact';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <AIEntrySection />
      <Contact />
      <CTASection />
    </>
  );
};

export default Home;