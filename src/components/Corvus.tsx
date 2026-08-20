import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Terminal, ChevronRight, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  role: 'bot' | 'user';
  content: string;
  actionLink?: {
    text: string;
    url: string;
  };
}

export function Corvus() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'bot', 
      content: 'Connection established. I am Corvus. I serve as the first point of contact for Raven Adversary. Ask your question regarding our intelligence capabilities, but be precise. Time is money.' 
    }
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

  const generateResponse = (text: string): { content: string; actionLink?: { text: string; url: string } } => {
    const lower = text.toLowerCase().trim();
    
    // Exact requested matches first
    if (lower === 'what is raven' || lower === 'what is raven?') {
      return {
        content: "Raven maps institutional pressure before it is priced in. We do not offer opinions; we identify structural vulnerabilities in M&A, proxy battles, and regulatory escalations. We find the breaking points."
      };
    }
    if (lower === 'tell me more' || lower === 'tell me more?') {
      return {
        content: "Your inquiry regarding \"tell me more\" lacks the precision required for a definitive response. Ask specifically about our Pressure Event Memos, our methodology for tracking governance fractures, or our live transaction analysis."
      };
    }

    // General greeting
    if (lower.includes('hello') || lower.includes('hi ') || lower.includes('hey') || lower.includes('greetings')) {
      return {
        content: "Connection acknowledged. I am Corvus. Let's omit the generic pleasantries and focus on the transaction at hand. What structural exposures or pending combinations are you modeling today?"
      };
    }
    
    // Core Raven Definition
    if (lower.includes('what is raven') || lower.includes('what do you do') || lower.includes('explain raven')) {
      return {
        content: "Raven maps institutional pressure before it is priced in. We do not offer opinions; we identify structural vulnerabilities in M&A, proxy battles, and regulatory escalations. We find the breaking points."
      };
    }

    // Deliverables / 8-Part Package / What do I get?
    if (lower.includes('deliverable') || lower.includes('package') || lower.includes('8-part') || lower.includes('what do i get') || lower.includes('memo') || lower.includes('report')) {
      return {
        content: "Every Raven engagement delivers the complete 8-Part Transaction Review Package: (1) Transaction State Baseline, (2) Verifiable Evidence Ledger, (3) Critical Clause Cards, (4) Pressure Propagation Map, (5) Adversarial Strategy Memo, (6) Executive Decision Brief, (7) 7-Minute Boardroom Walkthrough, and (8) Immutable Commit Layer Record. All grounded with exact SEC page citations.",
        actionLink: { text: "View 8-Part Review Details", url: "/transaction-review" }
      };
    }

    // Pricing / Cost / Engagement
    if (lower.includes('price') || lower.includes('cost') || lower.includes('fee') || lower.includes('retainer') || lower.includes('how much') || lower.includes('hire') || lower.includes('engagement') || lower.includes('pricing')) {
      return {
        content: "We offer two structured commercial engagement models: Standard Transaction Review is $10,000 per deal with a 72-hour turnaround. The Expedited Strategic Desk is $25,000 per deal with a 24 to 48-hour sprint for active contested bids or urgent closing disputes. Both include the full 8-part dossier.",
        actionLink: { text: "Initiate Review Intake ($10K)", url: "/transaction-review" }
      };
    }

    // Evidence Standard & Epistemic Tiers
    if (lower.includes('evidence') || lower.includes('fact') || lower.includes('epistemic') || lower.includes('accuracy') || lower.includes('hallucin') || lower.includes('verify') || lower.includes('standard')) {
      return {
        content: "Raven enforces a strict 5-Tier Evidence Standard: Tier 1 Verified Facts (verbatim SEC filings with accession numbers), Tier 2 Derived Computations (deterministic mathematics), Tier 3 Structural Inferences (bounded causal models), Tier 4 Adversarial Hypotheses (red-team stress simulations), and Tier 5 Speculative Vectors. No inference is ever presented as a verified fact.",
        actionLink: { text: "Explore Evidence Standard", url: "/evidence-standard" }
      };
    }

    // Case Study: NIMS / Gravitics / Session 1787070786933
    if (lower.includes('nims') || lower.includes('gravitics') || lower.includes('1787070786933') || lower.includes('frost') || lower.includes('defender')) {
      return {
        content: "In the NIMS / Gravitics reverse triangular merger (Session ID: 1787070786933), Raven reconstructed the transaction's control topology and identified a lethal $41.1M pre-closing liquidity cliff: the merger is conditioned on a mandatory $40M public equity offering and Nasdaq listing by September 30, 2026, coinciding with an immediate $300,000 maturity cliff on Frost/Hsiao insider notes and a 22% default coupon step-up on Defender bridge notes.",
        actionLink: { text: "View NIMS/Gravitics Case Dossier", url: "/case-studies/nims-gravitics" }
      };
    }

    // Case Study: First Seacoast (FSEA) / ESOP
    if (lower.includes('fsea') || lower.includes('seacoast') || lower.includes('cambridge') || lower.includes('esop')) {
      return {
        content: "In First Seacoast Bancorp (FSEA), management claimed an 8.80% defensive ESOP block (414,733 shares). Raven reconstructed the underlying Trust Agreement and discovered 76,944 shares pass through to participants, leaving only 337,789 trustee-controlled shares. Activist DAB Financial held 384,847 shares, creating an immediate 47,058-share voting deficit that conventional tools missed entirely.",
        actionLink: { text: "View FSEA Case Dossier", url: "/case-studies/first-seacoast" }
      };
    }

    // Case Study: IMAQ / VCI
    if (lower.includes('imaq') || lower.includes('vci') || lower.includes('spac') || lower.includes('vietnam') || lower.includes('indemnity')) {
      return {
        content: "In the $1.0B IMAQ / VCI Holdings de-SPAC, Raven identified two fatal structural flaws: Section 9.01(b) created a hard June 30, 2026 IFRS audit delivery deadline granting IMAQ unilateral termination rights, while Article X eliminated 100% of representations and warranties survival upon closing without any indemnity escrow.",
        actionLink: { text: "View IMAQ/VCI Case Dossier", url: "/case-studies/imaq-vci" }
      };
    }

    // Case Study: First Bancorp / First Carolina
    if (lower.includes('first bancorp') || lower.includes('first carolina') || lower.includes('cre') || lower.includes('bank') || lower.includes('cet1')) {
      return {
        content: "In the $166M First Bancorp / First Carolina merger, Raven uncovered a 312% CRE concentration in the target portfolio combined with an Allowance for Credit Losses (ACL) lagging peer benchmarks by 34 bps ($4.1M deficit). The Section 8.02 MAE carve-out precluded loan write-downs from triggering walk-away rights, forcing the buyer to absorb a 132 bps pro-forma CET1 compression.",
        actionLink: { text: "View First Bancorp Case Dossier", url: "/case-studies/first-bancorp" }
      };
    }

    // Competitors: Kira, Harvey, Copilot, ChatGPT
    if (lower.includes('competitor') || lower.includes('kira') || lower.includes('harvey') || lower.includes('legal ai') || lower.includes('differ') || lower.includes('copilot') || lower.includes('chatgpt') || lower.includes('compare')) {
      return {
        content: "Traditional legal AI (Kira, Harvey) operates on 'policy state'—they summarize text checklists. Raven treats agreements as dynamic state machines—modeling who holds leverage when conditions break down. We calculate the exact mathematical gap (e.g., share deficits, reserve drag, drop-dead cliffs) rather than summarizing clauses.",
        actionLink: { text: "Review Architecture Comparison", url: "/#comparison" }
      };
    }

    // MNPI, Privacy, Security & Conflicts
    if (lower.includes('privacy') || lower.includes('security') || lower.includes('mnpi') || lower.includes('confidential') || lower.includes('conflict') || lower.includes('ethical wall')) {
      return {
        content: "Raven operates exclusively on public SEC filings, call reports, and court records. We do not accept or ingest MNPI. All reviews undergo automated 2-hour pre-engagement conflict clearance, and client queries are protected by AES-256 encryption with a strict Zero-Model-Training guarantee.",
        actionLink: { text: "Visit Trust Center", url: "/trust" }
      };
    }

    // Boardroom Walkthrough
    if (lower.includes('boardroom') || lower.includes('briefing') || lower.includes('walkthrough') || lower.includes('7-min') || lower.includes('director')) {
      return {
        content: "Our 7-Minute Boardroom Walkthrough is a concise, decision-oriented protocol designed for investment committees, special committee chairs, and lead directors. It delivers: (1) Core Leverage Shift, (2) Critical Clause Breakdown, (3) Quantitative Exposure, and (4) Redline Strategy in under 7 minutes.",
        actionLink: { text: "Launch Boardroom Walkthrough", url: "/#contact" }
      };
    }

    // Default Fallback
    return {
      content: `Your inquiry regarding "${text.length > 30 ? text.substring(0, 30) + '...' : text}" lacks the precision required for a definitive response. Ask specifically about our $10K 8-Part Transaction Review, our 5-Tier Evidence Standard, or our case studies on FSEA, IMAQ, or First Bancorp.`
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const res = generateResponse(userText);
      setMessages(prev => [...prev, { role: 'bot', content: res.content, actionLink: res.actionLink }]);
    }, 600 + Math.random() * 500);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 group z-50 flex items-center justify-center p-[1px] rounded-none focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-[var(--brand-cyan)] opacity-20 group-hover:opacity-40 transition-opacity blur-[1px]"></div>
        <div className="relative bg-[var(--bg-primary)] border border-[var(--border-color)] group-hover:border-[var(--brand-cyan)] rounded-none p-3.5 px-4 flex items-center gap-3.5 transition-all duration-300 shadow-2xl">
          <div className="relative flex items-center justify-center">
            <Terminal className="w-4 h-4 text-[var(--brand-cyan)]" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-cyan)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-cyan)]"></span>
            </span>
          </div>
          <div className="flex flex-col items-start text-left font-mono">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--text-primary)] uppercase flex items-center gap-1.5 leading-none">
              CORVUS // DESK
            </span>
            <span className="text-[8px] tracking-wider text-[var(--brand-cyan)] uppercase mt-1 leading-none font-medium">
              {isHovered ? 'ENGAGE INTELLIGENCE' : 'ONLINE // VERIFIED'}
            </span>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[380px] h-[520px] bg-[var(--bg-primary)] border border-[var(--border-color)] flex flex-col shadow-2xl z-50 rounded-none overflow-hidden">
      {/* Header */}
      <div className="h-12 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/80 flex items-center justify-between px-4">
        <div className="flex items-center gap-2.5">
          <Terminal className="w-4 h-4 text-[var(--brand-cyan)]" />
          <div className="flex flex-col">
            <span className="font-mono text-[10px] font-bold tracking-widest text-[var(--text-primary)] uppercase leading-none">
              CORVUS // TRANSACTION DESK
            </span>
            <span className="font-mono text-[8px] tracking-wider text-emerald-400 uppercase mt-1 leading-none flex items-center gap-1">
              <span className="w-1 h-1 bg-emerald-400 rounded-full"></span> 100% PUBLIC EVIDENCE ONLY
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
              className={`max-w-[90%] p-3.5 space-y-2 ${
                msg.role === 'user' 
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium' 
                  : 'bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)]'
              }`}
            >
              {msg.role === 'bot' && (
                <div className="text-[9px] uppercase tracking-widest text-[var(--brand-cyan)] font-bold">
                  CORVUS INTEL
                </div>
              )}
              <div className="leading-relaxed text-xs">
                {msg.content}
              </div>

              {msg.actionLink && (
                <div className="pt-2 border-t border-[var(--border-color)]/60">
                  <Link
                    to={msg.actionLink.url}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1 text-[10px] text-[var(--brand-cyan)] hover:underline font-bold tracking-wider uppercase"
                  >
                    {msg.actionLink.text} →
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-2.5 text-[var(--text-tertiary)] text-xs font-mono">
              <span className="animate-pulse">_ querying transaction state ledger</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      <div className="px-3 py-2 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/30 flex items-center gap-2 overflow-x-auto text-[9px] font-mono text-[var(--text-secondary)] shrink-0">
        <span className="text-[var(--text-tertiary)] uppercase shrink-0">TRY:</span>
        <button 
          onClick={() => { setInput('What is in the 8-Part Review?'); }} 
          className="px-2 py-0.5 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)]"
        >
          8-Part Package
        </button>
        <button 
          onClick={() => { setInput('What is the Evidence Standard?'); }} 
          className="px-2 py-0.5 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)]"
        >
          Evidence Standard
        </button>
        <button 
          onClick={() => { setInput('Explain FSEA case study'); }} 
          className="px-2 py-0.5 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)]"
        >
          FSEA Case
        </button>
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/50 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="State your transaction inquiry..."
          className="flex-1 bg-[var(--bg-primary)] border border-[var(--border-color)] px-3 py-2 text-xs font-mono focus:outline-none focus:border-[var(--brand-cyan)] text-[var(--text-primary)] disabled:opacity-50 transition-colors"
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
