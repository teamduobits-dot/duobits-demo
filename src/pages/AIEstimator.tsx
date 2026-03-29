import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, Loader2, RefreshCw } from 'lucide-react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
}

const initialBotMessage: Message = {
  id: '1',
  type: 'bot',
  text: "Hi 👋 I'm Duobits AI. Tell me what you want to build and I’ll estimate the cost instantly.",
};

const suggestions = [
  'Build ecommerce website',
  'Create mobile app',
  'SaaS dashboard',
  'Need custom software',
];

const AIEstimator = () => {
  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const generateBotReply = (text: string) => {
    const lowerInput = text.toLowerCase();

    if (
      lowerInput.includes('website') ||
      lowerInput.includes('web') ||
      lowerInput.includes('ecommerce') ||
      lowerInput.includes('e-commerce')
    ) {
      return 'A custom website typically costs ₹29,999 to ₹59,999 depending on pages, design quality, admin panel, and integrations. How many pages and features do you need?';
    }

    if (
      lowerInput.includes('app') ||
      lowerInput.includes('mobile') ||
      lowerInput.includes('android') ||
      lowerInput.includes('ios')
    ) {
      return 'Mobile apps usually start from ₹80,000 and can go much higher depending on features, platform, backend, and user roles. Do you need Android, iOS, or both?';
    }

    if (
      lowerInput.includes('saas') ||
      lowerInput.includes('software') ||
      lowerInput.includes('dashboard') ||
      lowerInput.includes('crm')
    ) {
      return 'Custom SaaS or software solutions usually start from ₹1,50,000. Pricing depends on modules, roles, dashboards, APIs, and automations. Share your main features for a better estimate.';
    }

    if (
      lowerInput.includes('ai') ||
      lowerInput.includes('automation') ||
      lowerInput.includes('chatbot')
    ) {
      return 'AI and automation solutions vary widely based on complexity. Basic AI integrations can start from ₹50,000+, while advanced systems cost more. What exactly do you want to automate or build?';
    }

    return 'That sounds interesting! Tell me more about your project type, required features, timeline, and platform — or drop your contact details for a detailed quote.';
  };

  const sendMessage = (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: generateBotReply(messageText),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1100);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleReset = () => {
    setMessages([initialBotMessage]);
    setInput('');
    setIsTyping(false);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F8FAFC] flex flex-col">
      <div className="container mx-auto px-6 flex-1 flex flex-col max-w-4xl py-12">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            AI Project Estimator
          </h1>
          <p className="text-slate-600 text-lg">
            Get instant cost estimates for your project in seconds.
          </p>
        </div>

        <div className="flex-1 bg-white rounded-[2rem] border border-slate-200 shadow-xl flex flex-col overflow-hidden">
          {/* CHAT HEADER */}
          <div className="p-5 border-b flex items-center justify-between bg-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                <Bot size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Duobits AI</h3>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="text-slate-400 hover:text-indigo-600 transition"
              aria-label="Reset chat"
              title="Reset chat"
            >
              <RefreshCw size={20} />
            </button>
          </div>

          {/* MESSAGES */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6"
          >
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex">
                  <div className="p-4 bg-slate-100 rounded-2xl">
                    <Loader2 className="animate-spin text-indigo-600" />
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* SUGGESTIONS */}
          <div className="px-6 pb-2 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setInput(suggestion)}
                className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-sm hover:bg-indigo-100 transition"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* INPUT */}
          <div className="p-6 border-t bg-white">
            <form onSubmit={handleSend} className="flex items-center gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your project..."
                className="flex-1 px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center hover:bg-indigo-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </form>

            <p className="text-xs text-slate-400 text-center mt-3">
              Tip: Mention features, platforms, number of pages, and timeline for a better estimate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEstimator;