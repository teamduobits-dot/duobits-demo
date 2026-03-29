import { useLocation, useNavigate } from 'react-router-dom';

const NAVBAR_OFFSET = 120;

const FloatingCTA = () => {
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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition"
      >
        Get Free Quote
      </button>
    </div>
  );
};

export default FloatingCTA;