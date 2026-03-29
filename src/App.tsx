import { useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AIEstimator from './pages/AIEstimator';
import WhatsAppButton from './components/WhatsAppButton';

const NAVBAR_OFFSET = 120;

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace('#', '');

    if (hash) {
      const timer = setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);

      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return null;
};

const AppContent = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <ScrollHandler />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-estimator" element={<AIEstimator />} />
          <Route path="/chatbot" element={<AIEstimator />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;