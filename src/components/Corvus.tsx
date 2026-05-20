import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Terminal, ChevronRight } from 'lucide-react';

interface Message {
  role: 'bot' | 'user';
  content: string;
}

export function Corvus() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Connection established. I am Corvus. I serve as the first point of contact for Raven Adversary. Ask your question regarding our intelligence capabilities, but be precise. Time is money.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateResponse = (text: string) => {
    const lower = text.toLowerCase();
    
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
      return "We acknowledge the pleasantries. Now, to the matter at hand. What do you need to know about Raven Adversary?";
    }
    if (lower.includes('what is raven') || lower.includes('what do you do') || lower.includes('explain') || lower.includes('how does')) {
      return "Raven maps institutional pressure before it is priced in. We do not offer opinions; we identify structural vulnerabilities in M&A, proxy battles, and regulatory escalations. We find the breaking points.";
    }
    if (lower.includes('special') || lower.includes('unique') || lower.includes('different') || lower.includes('edge') || lower.includes('advantage')) {
      return "Raven does not rely on generic financial modeling or sentiment analysis. We synthesize public SEC filings to map the exact structural architecture of a deal, identifying specific pressure pathways—such as termination fee traps or leak-out friction—that threaten execution. Our edge is forensic precision.";
    }
    if (lower.includes('who are you') || lower.includes('corvus')) {
      return "I am Corvus. An introductory terminal. Unlike Raven, which computes high-stakes transactional pressure, my mandate is strictly to qualify your intent and answer basic capability inquiries.";
    }
    if (lower.includes('memo') || lower.includes('report') || lower.includes('request')) {
      return "A Pressure Event Memo is our primary deliverable. It outlines trigger events, pressure pathways, and leverage assessments for a specific transaction. Use the form on the dashboard to request one.";
    }
    if (lower.includes('cost') || lower.includes('price') || lower.includes('fee') || lower.includes('pay') || lower.includes('skydo') || lower.includes('payment')) {
      return "Raven engages under strict advisory parameters. We do not discuss fee structures or payment gateways in unverified channels. If you possess a qualifying transaction, submit a memo request and our human principals will contact you.";
    }
    if (lower.includes('demo') || lower.includes('trial') || lower.includes('test')) {
      return "We do not offer 'demos' or 'trials.' This is not SaaS. This is institutional intelligence. Review the Live Pressure Events if you require proof of capability.";
    }
    if (lower.includes('predict') || lower.includes('market') || lower.includes('stock') || lower.includes('trade')) {
      return "Let's be entirely clear: Raven does not predict markets. We model institutional pressure. The market reacts to the pressure. Do not confuse the two.";
    }
    
    // Improved catch-all that maintains persona
    return `Your inquiry regarding "${text.length > 20 ? text.substring(0, 20) + '...' : text}" lacks the precision required for a definitive response. Ask specifically about our Pressure Event Memos, our methodology for tracking governance fractures, or our live transaction analysis.`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setInput('');
    setIsTyping(true);

    // Simulate thinking/typing delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', content: generateResponse(userText) }]);
    }, 800 + Math.random() * 800);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 group z-50 flex items-center justify-center p-[2px] rounded-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <div className="relative bg-[var(--bg-primary)] border border-[var(--border-highlight)] hover:border-[var(--text-primary)] rounded-full p-4 flex items-center gap-3 transition-colors shadow-2xl">
          <Terminal className="w-5 h-5 text-[var(--text-primary)]" />
          <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}>
            <span className="font-mono text-xs font-bold tracking-widest whitespace-nowrap text-[var(--text-primary)]">INIT CORVUS</span>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[380px] h-[500px] bg-[var(--bg-primary)] border border-[var(--border-highlight)] flex flex-col shadow-2xl z-50 rounded shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden">
      {/* Header */}
      <div className="h-12 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/80 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Terminal className="w-4 h-4 text-[var(--text-primary)]" />
          <span className="font-mono text-[10px] font-bold tracking-widest text-[var(--text-primary)] uppercase">
            CORVUS // Raven Liaison
          </span>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs bg-[var(--bg-primary)]">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] p-3 ${
                msg.role === 'user' 
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium' 
                  : 'bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)]'
              }`}
            >
              {msg.role === 'bot' && (
                <div className="text-[9px] uppercase tracking-widest text-[var(--text-tertiary)] mb-1 font-bold">
                  CORVUS
                </div>
              )}
              <div className="leading-relaxed">
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 text-[var(--text-tertiary)]">
              <span className="animate-pulse">_ processing</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/50 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="State your inquiry..."
          className="flex-1 bg-transparent border border-[var(--border-color)] px-3 py-2 text-xs font-mono focus:outline-none focus:border-[var(--text-primary)] text-[var(--text-primary)] disabled:opacity-50 transition-colors"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="bg-[var(--text-primary)] text-[var(--bg-primary)] p-2 hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center justify-center min-w-[36px]"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
