import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Terminal, ChevronRight, Layers, ShieldCheck, CheckCircle2, ArrowRight, HelpCircle, Lock, Database } from 'lucide-react';
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
      content: 'Terminal online. I am Corvus—Raven Adversary’s transaction intelligence desk. We omit marketing pleasantries: if you are evaluating an active M&A transaction, contested vote, or spread, ask with precision. Time is enterprise value.' 
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

    // 01. Law Firm / Legal Counsel comparison (Objection B)
    if (lower.includes('law firm') || lower.includes('legal counsel') || lower.includes('lawyer') || lower.includes('wachtell') || lower.includes('skadden') || lower.includes('outside counsel')) {
      return {
        content: "Raven does not replace your external legal counsel or internal investment team. Your outside counsel provides legal analysis: contractual enforceability, statutory Delaware DGCL case law, and negotiation strategy. Your investment team evaluates portfolio risk and hurdle rates. Raven operates in the gap between them: we construct a dynamic, evidence-linked pressure model mapping how unhedged covenants, disclosed debt maturities, regulatory thresholds, and proration math collide across separate public filings. Where legal interpretation is required, we flag exact EDGAR line coordinates for counsel review.",
        actionLink: { text: "Review 10-Question Guide", url: "/#buyer-guide" }
      };
    }

    // 02. Bloomberg / AlphaSense comparison
    if (lower.includes('bloomberg') || lower.includes('alphasense') || lower.includes('factset') || lower.includes('bamsec') || lower.includes('tegus') || lower.includes('search tool')) {
      return {
        content: "Bloomberg shows you what the terms are. AlphaSense finds keywords across filings. Neither models how terms collide under stress. A search engine will not connect Note 7 of a 10-Q with Schedule 1.5 of an S-4 to prove Net Cash is mathematically negative, nor will it calculate that an anchor shareholder's cash lock forces a 66.7% retail proration squeeze. Raven reconstructs the transaction state machine from primary evidence.",
        actionLink: { text: "Inspect Technical Comparison", url: "/comparison" }
      };
    }

    // 03. Who does the work / Key-Person Dependency (Objection A)
    if (lower.includes('who does the work') || lower.includes('who is doing the work') || lower.includes('team') || lower.includes('analyst') || lower.includes('abhishek') || lower.includes('founder') || lower.includes('key person')) {
      return {
        content: "Raven is a founder-led specialist intelligence firm. The analytical architecture, multi-agent debate pipelines, and final report sign-offs are conducted directly by founder and principal analyst Abhishek Tanwar. We do not invent fictional analyst desks or outsource audits. Every deliverable is governed by documented, repeatable workflows and claim-level SEC citations. To preserve delivery quality, we maintain a hard cap on concurrent active sprints.",
        actionLink: { text: "Inspect Leadership & Accountability", url: "/#leadership" }
      };
    }

    // 04. What do I get for $10,000 / Deliverables
    if (lower.includes('10,000') || lower.includes('10k') || lower.includes('what do i get') || lower.includes('deliverable') || lower.includes('package') || lower.includes('what am i buying') || lower.includes('report')) {
      return {
        content: "A standard engagement is a $10,000 defined transaction review pilot with a 72-hour delivery target. You receive the complete 8-Part Deliverable Suite: (1) 16-Chapter Forensic Risk Audit (PDF), (2) Page One MD Passthrough Brief, (3) Contractual Clause Cards with trigger/amplifier mechanics, (4) Raven 6-Vector Risk Index (0–100 scores), (5) Negative Knowledge Register of unestablished terms, (6) Quantitative Stress Tests, (7) Strategic Redlines, and (8) SEC EDGAR Citation Registry.",
        actionLink: { text: "Inspect Real Tri-County Deliverables", url: "/#sample-assessment" }
      };
    }

    // 05. Tri-County / HBT Financial Real Finding
    if (lower.includes('tri-county') || lower.includes('hbt') || lower.includes('tyfg') || lower.includes('castle creek') || lower.includes('sample')) {
      return {
        content: "In our audit of the HBT / Tri-County Financial Group transaction (Audit ID: inv_1789583158804), Raven proved four critical findings: (1) Castle Creek Capital is contractually bound to elect 100% cash for its 563,064 shares, consuming $39.98M (66.7%) of the $59.95M cash pool and triggering acute retail proration; (2) Closing is conditioned on the complete disposition and liability release of First State Mortgage Services (FSM); (3) DGCL § 262 appraisal rights are capped at exactly 5.0% (121,385 shares); and (4) Secondary press summaries cited a June 30, 2027 outside date that is completely unestablished in the filed S-4/A proxy text.",
        actionLink: { text: "Open Interactive Dossier Viewer", url: "/#sample-assessment" }
      };
    }

    // 06. Staleness & Changing Deals (Objection C)
    if (lower.includes('stale') || lower.includes('change') || lower.includes('amendment') || lower.includes('8-k') || lower.includes('next week') || lower.includes('dynamic')) {
      return {
        content: "Raven’s initial report is an auditable, point-in-time baseline as of an agreed research cutoff date. All ordinary-course 8-Ks and regulatory notices filed during the active 72-hour sprint are incorporated into the deliverable at no additional charge. If a major structural amendment or proxy restatement occurs post-delivery, we offer a defined update addendum rather than pretending a static PDF updates itself.",
        actionLink: { text: "Review Governance Terms", url: "/governance" }
      };
    }

    // 07. Confidentiality, Front-Running & Information Leakage (Objection D)
    if (lower.includes('front-run') || lower.includes('frontrun') || lower.includes('leak') || lower.includes('confidential') || lower.includes('ticker') || lower.includes('trade ahead') || lower.includes('privacy')) {
      return {
        content: "Raven enforces strict institutional informational hygiene: (1) We operate under an Anti-Front-Running Policy: Raven never trades securities of companies under active client engagement; (2) Client search inquiries, tickers, and instructions are treated as strictly confidential and never published, shared, or commercialized; (3) Zero MNPI: we analyze only public regulatory disclosures. We never ask for, nor accept, non-public data room access.",
        actionLink: { text: "View Procurement & Compliance Policies", url: "/governance" }
      };
    }

    // 08. Proof of Alpha & Track Record (Objection E)
    if (lower.includes('alpha') || lower.includes('track record') || lower.includes('proof') || lower.includes('returns') || lower.includes('predict')) {
      return {
        content: "Let us be direct: Raven does not claim a validated investment track record or promise trade returns. We have analyzed an internal research corpus of 100+ live transactions under the Raven Standard to stress-test the dialectical engine—these are research analyses, not 100 client mandates. Our proof is analytical verifiability: every finding quotes verbatim SEC text, identifies exact accession numbers, and publishes what remains unknown in the Negative Knowledge Register. You evaluate the analytical rigor before deciding.",
        actionLink: { text: "Inspect Sample Work Product", url: "/#sample-assessment" }
      };
    }

    // 09. How to Test Before Paying / What Next (Objection 10)
    if (lower.includes('test') || lower.includes('free') || lower.includes('start') || lower.includes('how to start') || lower.includes('pilot') || lower.includes('what do i do next') || lower.includes('try')) {
      return {
        content: "You do not need to wire $10,000 to test Raven. Submit your target ticker, CIK, or deal identifier through our preliminary inquiry form. Our desk will review SEC EDGAR filing depth and deliver a Free Public-Source Feasibility Check within 1 business day confirming whether the public record supports a high-conviction audit. Zero cost, zero financial obligation.",
        actionLink: { text: "Submit for Free Feasibility Check", url: "/#contact" }
      };
    }

    // 10. Procurement, Billing & Onboarding (Objection F)
    if (lower.includes('procurement') || lower.includes('w-9') || lower.includes('w-8') || lower.includes('net-30') || lower.includes('invoice') || lower.includes('wire') || lower.includes('payment') || lower.includes('vendor')) {
      return {
        content: "Raven is an India-based specialist transaction intelligence practice. For institutional procurement and vendor registration, we provide a complete Vendor Information Pack: business registration, international banking remittance coordinates, W-8BEN-E international tax documentation, standard invoice templates, and bilateral NDA forms. We support advance payment or approved institutional invoice arrangements following scope confirmation.",
        actionLink: { text: "Inspect Vendor Information Pack", url: "/governance" }
      };
    }

    // 11. Feasibility & Scope (Supported Transactions)
    if (lower.includes('feasibility') || lower.includes('eligible') || lower.includes('scope') || lower.includes('private') || lower.includes('spac') || lower.includes('merger') || lower.includes('support')) {
      return {
        content: "Our feasibility is strictly evidence-bound: Supported: U.S. Public M&A (S-4, 8-K, DEFM14A), Bank Holding Company consolidations (Call Reports, Fed/FDIC clearances), De-SPAC combinations, and contested proxy battles. Partially Supported: Cross-border mergers with English SEC filings (F-4, 20-F) and public Chapter 11 dockets. Outside Scope: Pure private-to-private transactions with zero public disclosures and deals with core terms withheld under confidential treatment requests.",
        actionLink: { text: "View Feasibility Matrix", url: "/#feasibility" }
      };
    }

    // 12. Case Studies (FSEA, NIMS, IMAQ)
    if (lower.includes('fsea') || lower.includes('seacoast') || lower.includes('esop')) {
      return {
        content: "In First Seacoast Bancorp (FSEA), management asserted an 8.80% defensive ESOP block (414,733 shares). Raven audited the Trust Agreement and discovered 76,944 shares pass through to participants, leaving only 337,789 trustee-controlled shares against activist DAB Financial’s 384,847 shares—exposing an unhedged 47,058-share voting deficit.",
        actionLink: { text: "View FSEA Case Study", url: "/case-studies/first-seacoast" }
      };
    }
    if (lower.includes('nims') || lower.includes('gravitics')) {
      return {
        content: "In NIMS / Gravitics (Session ID: 1787070786933), Raven identified a lethal $41.1M pre-closing liquidity cliff: closing was conditioned on a mandatory $40M public equity offering and Nasdaq listing by September 30, 2026, colliding with a $300,000 maturity cliff on insider notes and a 22% default coupon ratchet on Defender bridge notes.",
        actionLink: { text: "View NIMS Dossier", url: "/case-studies/nims-gravitics" }
      };
    }

    // 13. Core Definition
    if (lower.includes('what is raven') || lower.includes('what do you do') || lower.includes('explain raven')) {
      return {
        content: "Raven is an analyst-led, transaction-specific forensic intelligence audit for live corporate transactions. We do not provide investment advice or sentiment metrics. We reconstruct multi-filing regulatory disclosures, debt covenants, and governance frameworks into an adversarial debate to pinpoint closing vulnerabilities, walk-away outs, and proration bottlenecks.",
        actionLink: { text: "View 8-Part Review Details", url: "/transaction-review" }
      };
    }

    // 14. Greeting
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('greetings')) {
      return {
        content: "Connection established. Let us omit generic conversational formalities. State the active transaction ticker, contractual exposure, or structural risk you are modeling today."
      };
    }

    // Default Fallback
    return {
      content: `Your inquiry regarding "${text.length > 35 ? text.substring(0, 35) + '...' : text}" requires greater institutional specificity. Ask about our 8-Part $10K Review Package, our differentiation from outside legal counsel, our finding on Tri-County/HBT, our anti-front-running policy, or submit a ticker for a free feasibility check.`
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
    }, 450 + Math.random() * 400);
  };

  const handlePromptClick = (promptText: string) => {
    setMessages(prev => [...prev, { role: 'user', content: promptText }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const res = generateResponse(promptText);
      setMessages(prev => [...prev, { role: 'bot', content: res.content, actionLink: res.actionLink }]);
    }, 450);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 group z-50 flex items-center justify-center p-[1px] rounded-none focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Open Corvus Transaction Intelligence Desk"
      >
        <div className="absolute inset-0 bg-[var(--brand-cyan)] opacity-20 group-hover:opacity-40 transition-opacity blur-[1px]"></div>
        
        {/* div:nth-of-type(2) matching CSS Selector 3 */}
        <div className="relative bg-[var(--bg-primary)]/95 backdrop-blur-md border border-[var(--border-color)] group-hover:border-[var(--brand-cyan)] rounded-none p-3.5 px-4 flex items-center gap-3.5 transition-all duration-300 shadow-2xl">
          <div className="relative flex items-center justify-center">
            <Terminal className="w-4 h-4 text-[var(--brand-cyan)]" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-cyan)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-cyan)]"></span>
            </span>
          </div>

          {/* div:nth-of-type(2) matching CSS Selector 2 */}
          <div className="flex flex-col items-start text-left font-mono">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--text-primary)] uppercase flex items-center gap-1.5 leading-none">
              CORVUS // TRANSACTION DESK
            </span>
            <span className="text-[8px] tracking-wider text-[var(--brand-cyan)] uppercase mt-1 leading-none font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {isHovered ? 'ENGAGE INTELLIGENCE' : 'ONLINE // 100% PUBLIC EVIDENCE'}
            </span>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[400px] max-w-[calc(100vw-2rem)] h-[560px] bg-[var(--bg-primary)] border border-[var(--border-color)] flex flex-col shadow-2xl z-50 rounded-none overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
      {/* Header */}
      <div className="h-14 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/90 flex items-center justify-between px-4">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)]">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[11px] font-bold tracking-widest text-[var(--text-primary)] uppercase leading-none">
              CORVUS // TRANSACTION DESK
            </span>
            <span className="font-mono text-[8px] tracking-wider text-emerald-400 uppercase mt-1 leading-none flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> 
              ZERO MNPI // AUDITABLE ACCESSIONS
            </span>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors p-1"
          aria-label="Close Corvus Terminal"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs bg-[var(--bg-primary)]">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[90%] p-3.5 space-y-2.5 ${
                msg.role === 'user' 
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium shadow-md' 
                  : 'bg-[var(--bg-secondary)]/70 border border-[var(--border-color)] text-[var(--text-secondary)] shadow-sm'
              }`}
            >
              {msg.role === 'bot' && (
                <div className="text-[9px] uppercase tracking-widest text-[var(--brand-cyan)] font-bold flex items-center justify-between border-b border-[var(--border-color)]/40 pb-1">
                  <span>CORVUS ANALYTICAL DESK</span>
                  <span className="text-[8px] text-[var(--text-tertiary)]">VERIFIED SPEC</span>
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
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-2.5 text-[var(--text-tertiary)] text-xs font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-cyan)] animate-ping"></span>
              <span className="animate-pulse">_ auditing primary SEC filings & state machine</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Institutional Quick Action Prompts */}
      <div className="px-3 py-2 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/40 flex items-center gap-1.5 overflow-x-auto text-[9px] font-mono text-[var(--text-secondary)] shrink-0 scrollbar-none">
        <span className="text-[var(--text-tertiary)] uppercase shrink-0 font-bold">ASK:</span>
        <button 
          onClick={() => handlePromptClick('Why not our outside law firm?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Why not law firm?
        </button>
        <button 
          onClick={() => handlePromptClick('What do I get for $10,000?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          $10K Deliverables
        </button>
        <button 
          onClick={() => handlePromptClick('What did you find on Tri-County / HBT?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Tri-County Finding
        </button>
        <button 
          onClick={() => handlePromptClick('Will you front-run my fund or leak my ticker?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Anti-Front-Running
        </button>
        <button 
          onClick={() => handlePromptClick('How do we test before paying?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Free Test Check
        </button>
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/60 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask regarding deal risk, covenants, or pricing..."
          className="flex-1 bg-[var(--bg-primary)] border border-[var(--border-color)] px-3 py-2 text-xs font-mono focus:outline-none focus:border-[var(--brand-cyan)] text-[var(--text-primary)] disabled:opacity-50 transition-colors"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-3 py-2 hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center justify-center font-mono text-xs font-bold"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
