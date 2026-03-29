import { useNavigate } from 'react-router-dom';

const AIEntrySection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[#F8FAFC] text-center">
      <h2 className="text-4xl font-bold mb-4 text-slate-900">
        Try Our AI Project Estimator
      </h2>

      <p className="text-slate-600 mb-8">
        Get instant cost estimates in seconds using our AI tool.
      </p>

      <button
        onClick={() => navigate('/ai-estimator')}
        className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition"
      >
        Start Chat
      </button>
    </section>
  );
};

export default AIEntrySection;