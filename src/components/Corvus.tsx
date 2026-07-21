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
    const lower = text.toLowerCase().trim();
    
    // Exact requested matches first to be 100% compliant with prompt examples
    if (lower === 'what is raven' || lower === 'what is raven?') {
      return "Raven maps institutional pressure before it is priced in. We do not offer opinions; we identify structural vulnerabilities in M&A, proxy battles, and regulatory escalations. We find the breaking points.";
    }
    if (lower === 'tell me more' || lower === 'tell me more?') {
      return "Your inquiry regarding \"tell me more\" lacks the precision required for a definitive response. Ask specifically about our Pressure Event Memos, our methodology for tracking governance fractures, or our live transaction analysis.";
    }

    // General match patterns with high-fidelity, high-conviction sales-god responses
    if (lower.includes('hello') || lower.includes('hi ') || lower.includes('hey') || lower.includes('greetings')) {
      return "Connection acknowledged. I am Corvus. Let's omit the generic pleasantries and focus on the transaction at hand. What structural exposures are you modeling today?";
    }
    
    if (lower.includes('what is raven') || lower.includes('what do you do') || lower.includes('explain') || lower.includes('how does')) {
      return "Raven maps institutional pressure before it is priced in. We do not offer opinions; we identify structural vulnerabilities in M&A, proxy battles, and regulatory escalations. We find the breaking points.";
    }

    if (lower.includes('tell me more') || lower.includes('more info') || lower.includes('features') || lower.includes('capabilities') || lower.includes('services')) {
      return "Raven operates on a rigorous four-stage pipeline: Adversarial Debate Logic (stress-testing transaction scenarios), Pressure-State Modeling (reconstructing systemic vulnerabilities), the Commit Layer (cryptographic provenance), and Evidence Verification against public disclosures. Ask me about a specific module to proceed.";
    }

    if (lower.includes('m&a') || lower.includes('m-and-a') || lower.includes('merger') || lower.includes('transaction') || lower.includes('overheads') || lower.includes('tsa')) {
      return "Our M&A Transaction Pressure model quantifies post-close friction points. We specifically expose unabsorbed parent corporate overhead, TSA timeline slippage (often leading to millions in stranded assets), and stranded-cost assets. This allows buyers to renegotiate valuation pre-close and assists target boards in preempting aggressive buyers.";
    }

    if (lower.includes('activism') || lower.includes('activist') || lower.includes('proxy') || lower.includes('bloc') || lower.includes('index fund')) {
      return "Our Shareholder Activism model tracks proxy language divergence and index fund voting patterns. We map historical alignment scores to pinpoint which passive managers are vulnerable to activist talking points, allowing target boards to construct unassailable proxy defenses before a slate is launched.";
    }

    if (lower.includes('governance') || lower.includes('board') || lower.includes('director') || lower.includes('stability')) {
      return "Our Governance Fracture Detection engine analyzes board cohesion by evaluating voting divergence, isolated director profiles, and structural board alignments. We construct a Board Fracture Index that identifies exactly when a key block is likely to crack under transaction pressure.";
    }

    if (lower.includes('regulatory') || lower.includes('compliance') || lower.includes('category iii') || lower.includes('hqla') || lower.includes('reserve')) {
      return "Our Regulatory Threshold model predicts the financial friction of crossing asset tiers. For example, crossing Category III thresholds triggers massive HQLA drag, pro-forma deposit volatility, and Net Interest Margin compression. We model these balance sheet impacts before the transaction is executed.";
    }

    if (lower.includes('methodology') || lower.includes('how do you verify') || lower.includes('verify') || lower.includes('accuracy') || lower.includes('evidence')) {
      return "Every claim produced by Raven must be backed by a clear cryptographic signature and direct references to public domain disclosures (SEC proxies, S-4s, etc.). There are no speculative assumptions, no 'black boxes'—only traceable, evidence-bound pressure modeling.";
    }

    if (lower.includes('competitor') || lower.includes('kira') || lower.includes('harvey') || lower.includes('legal ai') || lower.includes('differ') || lower.includes('copilot') || lower.includes('openai')) {
      return "Traditional legal AI like Kira or Harvey operates on 'policy state'—they simply summarize what is written. Raven is built for 'decision state' under high-stakes uncertainty. We do not summarize documents; we map the real-time leverage migration and institutional pressure that determines who wins the transaction.";
    }

    if (lower.includes('privacy') || lower.includes('security') || lower.includes('data') || lower.includes('mnpi') || lower.includes('confidential')) {
      return "Raven operates under a zero-MNPI model. We work exclusively with public SEC filings and proxies, ensuring strict information hygiene. Your proprietary inputs are segregated inside enterprise-grade, zero-trust isolated secure data compartments. No leaked intent, no compliance risk.";
    }

    if (lower.includes('memo') || lower.includes('report') || lower.includes('deliverable')) {
      return "The Pressure Event Memo is our core deliverable. It is a highly dense, forensic dossier detailing the exact trigger events, unpriced vulnerabilities, and leverage migration pathways in your target transaction. To secure a custom briefing, use our Client Intake Interface on this page.";
    }

    if (lower.includes('price') || lower.includes('cost') || lower.includes('fee') || lower.includes('retainer') || lower.includes('engage') || lower.includes('hire')) {
      return "We engage with event-driven hedge funds, corporate boards, and special situations desks under custom advisory parameters. If you have a target, enter the CIK/Ticker in the Client Intake Form on this screen. Our principals will verify your credentials and initiate an institutional review stream.";
    }

    if (lower.includes('who are you') || lower.includes('corvus')) {
      return "I am Corvus, the gatekeeper of Raven Adversary. While Raven models multi-variable transaction stress, my role is to qualify your intent and confirm whether your institution qualifies for a custom Advisory Engagement.";
    }

    if (lower.includes('demo') || lower.includes('test') || lower.includes('trial')) {
      return "We do not offer generic software 'demos' or 'free trials'—this is a high-conviction transactional intelligence service. Review our live-pressure index on the dashboard for real-time capabilities, or submit a target to qualify for an initial Advisory Memo.";
    }

    if (lower.includes('predict') || lower.includes('market') || lower.includes('stock') || lower.includes('arbitrage')) {
      return "Let's be entirely precise: Raven is not a public market predictor. We model the underlying structural pressure-states of corporate decision-makers. The market subsequently reacts to those pressure-states. We deal in structural reality, not speculative market noise.";
    }

    // Default response handles unstructured inputs by guiding user precisely
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
        className="fixed bottom-6 right-6 group z-50 flex items-center justify-center p-[1px] rounded-none focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-[var(--brand-cyan)] opacity-25 group-hover:opacity-50 transition-opacity blur-[1px]"></div>
        <div className="relative bg-[var(--bg-primary)] border border-[var(--border-highlight)] group-hover:border-[var(--brand-cyan)]/60 rounded-none p-3.5 px-4 flex items-center gap-3.5 transition-all duration-300 shadow-2xl">
          <div className="relative flex items-center justify-center">
            <Terminal className="w-4 h-4 text-[var(--brand-cyan)] group-hover:rotate-[360deg] transition-transform duration-700" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-cyan)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-cyan)]"></span>
            </span>
          </div>
          <div className="flex flex-col items-start text-left font-mono">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[var(--text-primary)] uppercase flex items-center gap-1.5 leading-none">
              SYSTEM.CORVUS
            </span>
            <span className="text-[7px] tracking-[0.18em] text-[var(--brand-cyan)] uppercase mt-1.5 leading-none font-medium">
              {isHovered ? 'ENGAGE INTAKE' : 'ONLINE / READ-ONLY'}
            </span>
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
          <Terminal className="w-4 h-4 text-[var(--brand-cyan)]" />
          <div className="flex flex-col">
            <span className="font-mono text-[10px] items-center flex gap-2 font-bold tracking-[0.2em] text-[var(--text-primary)] uppercase leading-none">
              CORVUS_TERM <span className="text-[7px] text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30 px-1 py-0.5 bg-[var(--brand-cyan)]/10">ACTIVE</span>
            </span>
            <span className="font-mono text-[7px] tracking-widest text-[var(--text-tertiary)] uppercase mt-1.5 leading-none">
              Clearance: UNVERIFIED // Read-Only
            </span>
          </div>
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
