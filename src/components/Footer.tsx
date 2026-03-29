import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Share2, Mail, Globe, MessageSquare, Send } from 'lucide-react';

const NAVBAR_OFFSET = 120;

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleSectionNavigate = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    scrollToSection(id);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <button
              onClick={() => handleSectionNavigate('home')}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Duobits<span className="text-indigo-600">.</span>
              </span>
            </button>

            <p className="text-slate-400 mb-8 max-w-xs leading-relaxed">
              Building premium software solutions that drive growth and innovation
              for businesses worldwide.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Share2 size={18} />
              </a>

              <a
                href="mailto:hello@duobits.com"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

              <a
                href="https://duobits.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                aria-label="Website"
              >
                <Globe size={18} />
              </a>

              <a
                href="https://wa.me/919876543210?text=Hello%20Duobits%2C%20I%20want%20to%20discuss%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleSectionNavigate('services')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionNavigate('services')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Mobile Apps
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionNavigate('services')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Custom Software
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionNavigate('services')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  AI Solutions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleSectionNavigate('home')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionNavigate('portfolio')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionNavigate('pricing')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionNavigate('contact')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6 text-sm">
              Subscribe to get the latest tech news and updates from us.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-slate-800 border-none rounded-xl py-4 pl-4 pr-12 focus:ring-2 focus:ring-indigo-600 text-white placeholder-slate-500 outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-indigo-600 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Duobits Software Solutions. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;