import { useLocation, useNavigate } from 'react-router-dom';

const NAVBAR_OFFSET = 120;

const CTASection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleClick = () => {
    if (location.pathname !== '/') {
      navigate('/#contact');
      return;
    }

    scrollToContact();
  };

  return (
    <section className="py-20 bg-slate-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">
        Ready to build your project?
      </h2>

      <p className="mb-8 text-slate-300">
        Let’s turn your idea into a powerful digital product.
      </p>

      <button
        onClick={handleClick}
        className="px-8 py-4 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-700 transition"
      >
        Get Free Quote
      </button>
    </section>
  );
};

export default CTASection;