import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';
import { useLocation, useNavigate } from 'react-router-dom';

const NAVBAR_OFFSET = 120;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'AI', id: 'ai' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return false;

    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
    return true;
  }, []);

  const handleClick = (id: string) => {
    setIsMobileMenuOpen(false);

    if (id === 'ai') {
      setActiveSection('ai');
      navigate('/ai-estimator');
      return;
    }

    setActiveSection(id);

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    scrollToSection(id);
  };

  useEffect(() => {
    setIsScrolled(window.scrollY > 20);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname !== '/') {
        return;
      }

      const sections = ['home', 'services', 'portfolio', 'contact'];
      let currentSection = 'home';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const offsetTop = el.offsetTop - NAVBAR_OFFSET - 20;
        const height = el.offsetHeight;

        if (
          window.scrollY >= offsetTop &&
          window.scrollY < offsetTop + height
        ) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/ai-estimator' || location.pathname === '/chatbot') {
      setActiveSection('ai');
      return;
    }

    if (location.pathname !== '/') {
      return;
    }

    const hash = location.hash?.replace('#', '');

    if (hash) {
      const timer = setTimeout(() => {
        const found = scrollToSection(hash);
        if (found) {
          setActiveSection(hash);
        }
      }, 100);

      return () => clearTimeout(timer);
    }

    setActiveSection('home');
  }, [location.pathname, location.hash, scrollToSection]);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div
        className={cn(
          'max-w-7xl w-full flex items-center justify-between transition-all duration-300',
          isScrolled
            ? 'mt-3 px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200 shadow-lg rounded-2xl'
            : 'mt-5 px-8 py-4 bg-transparent'
        )}
      >
        {/* LOGO */}
        <button
          onClick={() => handleClick('home')}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <span className="text-xl font-black text-slate-900">
            Duobits<span className="text-indigo-600">.</span>
          </span>
        </button>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center space-x-2 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl p-1 shadow-sm">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.id)}
              className={cn(
                'relative px-5 py-2.5 rounded-xl font-semibold transition-all',
                activeSection === link.id
                  ? 'text-indigo-600'
                  : 'text-slate-500 hover:text-slate-900'
              )}
            >
              {activeSection === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-slate-100 rounded-xl"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleClick('contact')}
            className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-indigo-600 transition"
          >
            Get Quote
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 bg-white border border-slate-200 rounded-2xl shadow-xl p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleClick(link.id)}
                  className={cn(
                    'text-lg font-semibold text-left hover:text-indigo-600 transition',
                    activeSection === link.id ? 'text-indigo-600' : 'text-slate-700'
                  )}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;