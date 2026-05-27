import React, { useState, useEffect } from 'react';
import { Shield, Brain, Lock, ChevronRight, Activity, Terminal, CheckCircle2, Globe, FileStack, ShieldAlert, GitCompare, Loader2, X } from 'lucide-react';
import CaseStudies from '../components/CaseStudies';
import LivePressureEvents from '../components/LivePressureEvents';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function Home() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isVideoModalOpen]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await addDoc(collection(db, 'leads'), {
        firm: data.firm as string,
        email: data.email as string,
        cikOrTicker: data.cikOrTicker as string,
        transactionValue: (data.transactionValue as string) || '',
        additionalDetails: (data.additionalDetails as string) || '',
        status: 'new',
        createdAt: serverTimestamp()
      }).catch(err => handleFirestoreError(err, OperationType.CREATE, 'leads'));

      setFormState('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormState('idle'), 5000);
    } catch (error) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-24 px-6 md:px-12 xl:px-24">
        <div className="max-w-4xl space-y-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Raven maps how <span className="text-[var(--text-secondary)]">institutional pressure</span> propagates through consequential transactions before the market prices it.
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Pressure-state intelligence for M&A, activism, governance conflict, and regulatory exposure.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-start gap-4">
            <a href="#contact" className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-10 py-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity w-full sm:w-auto justify-center rounded-none">
              Request Pressure Event Memo <ChevronRight className="w-4 h-4" />
            </a>
            <button onClick={() => setIsVideoModalOpen(true)} className="px-10 py-5 border border-[var(--border-highlight)] text-[var(--text-primary)] flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:border-[var(--text-secondary)] transition-colors w-full sm:w-auto justify-center bg-transparent rounded-none">
              Review Sample Memo
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT RAVEN IDENTIFIES */}
      <section className="py-24 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">What Raven Identifies</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              "Governance fracture points",
              "Liquidity pressure vectors",
              "Disclosure asymmetry",
              "Regulatory escalation pathways",
              "Proxy instability",
              "Negotiation leverage migration",
              "Accountability fragmentation"
            ].map((track, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="w-8 h-px bg-[var(--text-primary)] mb-2"></div>
                <h3 className="font-bold text-lg font-heading leading-snug">{track}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PRESSURE PROPAGATION MAP */}
      <section className="py-24 px-6 border-t border-[var(--border-color)] overflow-hidden relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--brand-purple)]/30 bg-[var(--brand-purple)]/5 text-[var(--brand-purple)] font-mono text-[11px] uppercase tracking-widest mb-6">
              Interactive
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading leading-tight">Pressure Propagation Map</h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              We visually map the chain reaction of single-point vulnerabilities. A liquidity crunch triggers a covenant breach, which cascades into counterparty leverage and forced renegotiation.
            </p>
          </div>
          
          <div className="relative h-[400px] w-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 rounded-lg p-6 glass-panel flexitems-center justify-center group cursor-crosshair">
            {/* Minimal SVG Graph representation */}
            <svg viewBox="0 0 400 400" className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700">
              {/* Lines */}
              <path d="M100 200 L200 100 L300 150 L250 250 L150 280 Z" fill="none" stroke="var(--border-highlight)" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_60s_linear_infinite] origin-center" />
              <path d="M200 100 L250 250 M100 200 L300 150" fill="none" stroke="var(--border-highlight)" strokeWidth="1" opacity="0.5" />
              
              {/* Nodes */}
              <circle cx="100" cy="200" r="4" fill="var(--brand-cyan)" className="animate-pulse" />
              <text x="80" y="220" fill="var(--text-secondary)" fontSize="10" fontFamily="monospace">Liquidity Crunch</text>
              
              <circle cx="200" cy="100" r="6" fill="var(--text-primary)" />
              <text x="180" y="85" fill="var(--text-secondary)" fontSize="10" fontFamily="monospace">Covenant Breach</text>
              
              <circle cx="300" cy="150" r="5" fill="var(--brand-purple)" />
              <text x="310" y="155" fill="var(--text-secondary)" fontSize="10" fontFamily="monospace">Counterparty Leverage</text>
              
              <circle cx="250" cy="250" r="8" fill="var(--text-primary)" className="animate-pulse" style={{ animationDelay: '1s' }}/>
              <text x="260" y="265" fill="var(--text-primary)" fontSize="10" fontFamily="monospace" fontWeight="bold">Forced Renegotiation</text>
              
              <circle cx="150" cy="280" r="4" fill="var(--border-highlight)" />
              
              {/* Propagation Waves */}
              <circle cx="250" cy="250" r="20" fill="none" stroke="var(--text-primary)" strokeWidth="0.5" className="animate-ping" opacity="0.3" />
            </svg>
            <div className="absolute top-4 left-4 font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-widest">
              Live Topology Mapping // Raven Graph Engine
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LIVE PRESSURE EVENTS */}
      <LivePressureEvents />

      {/* SECTION 4.1: INSTITUTIONAL CASE STUDIES */}
      <CaseStudies />

      {/* SECTION 4.5: DECISION-STATE RECONSTRUCTION */}
      <section className="py-32 px-6 border-t border-[var(--border-color)] bg-[var(--bg-primary)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--border-highlight)_1px,transparent_1px)]" style={{ backgroundSize: '40px 40px', opacity: 0.3 }}></div>
        <div className="max-w-4xl mx-auto space-y-8 text-center relative z-10 glass-panel p-12 md:p-20 border border-[var(--border-color)] shadow-2xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[var(--brand-cyan)]/50 to-transparent"></div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--text-secondary)]/30 text-[var(--text-secondary)] font-mono text-[10px] uppercase tracking-[0.2em] mb-4 bg-[var(--bg-secondary)]/50">
            <span className="w-1.5 h-1.5 border border-[var(--text-primary)]"></span>
            Core Philosophy
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[var(--text-primary)] leading-tight tracking-tight">
            Decision-State <br className="hidden md:block"/>Reconstruction
          </h2>
          <div className="w-12 h-px bg-[var(--brand-cyan)]/70 mx-auto"></div>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed font-light mx-auto max-w-2xl">
            Most systems preserve <span className="text-[var(--text-primary)] font-medium">policy-state</span>. Few preserve <span className="text-[var(--brand-cyan)]/90 font-medium">decision-state</span> under consequential uncertainty.
          </p>
          <div className="absolute bottom-0 right-0 p-3 font-mono text-[8px] text-[var(--text-tertiary)] uppercase tracking-widest opacity-50">
            PERSISTENCE_LAYER: ACTIVE
          </div>
        </div>
      </section>

      {/* SECTION 4.6: EVIDENCE HIERARCHY */}
      <section className="py-28 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading tracking-tight">Evidence Discipline</h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Cryptographically anchored accountability receipt. Strict compartmentalization of fact, inference, and speculation with visible SEC transaction reference citations.
              </p>
            </div>
            <div className="hidden md:flex flex-col items-end text-right">
               <div className="text-4xl font-light text-[var(--border-highlight)] font-mono tracking-tighter">04</div>
               <div className="text-[10px] text-[var(--brand-cyan)] font-mono tracking-widest uppercase mt-2">Confidence Tiers</div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { level: "Verified Fact", desc: "Explicitly coded in live regulatory or legal filings. Immutable base reality.", color: "rgba(255,255,255,0.8)" },
              { level: "Structural Inference", desc: "Logical constraint derived mathematically from verified governance facts.", color: "var(--brand-cyan)" },
              { level: "Adversarial Hypothesis", desc: "Probable vulnerability calculated given counterparty constraints and incentives.", color: "var(--brand-purple)" },
              { level: "Speculative Vector", desc: "Unverified tail-risk pressure pathway modeled purely for stress-testing.", color: "rgba(239, 68, 68, 0.8)" }
            ].map((ev, i) => (
              <div key={i} className="bg-[var(--bg-primary)] p-8 border border-[var(--border-color)] group hover:border-[var(--brand-cyan)]/30 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-[var(--bg-secondary)]/50 border-b border-l border-[var(--border-color)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ev.color }}></div>
                </div>
                <div className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest mb-6 group-hover:text-[var(--text-secondary)] transition-colors">
                  Level 0{i + 1}
                </div>
                <h3 className="font-bold text-xl font-heading mb-4 leading-tight text-[var(--text-primary)]">{ev.level}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{ev.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4.7: METHODOLOGY TRANSPARENCY */}
      <section className="py-32 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--brand-cyan)_0%,transparent_50%)] opacity-[0.03]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-20 flex flex-col md:items-center md:text-center items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 bg-[var(--brand-cyan)] animate-pulse shadow-[0_0_5px_rgba(0,184,217,0.5)]"></span>
              System Architecture
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading tracking-tight">Trust Architecture</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl md:mx-auto leading-relaxed">
              Our methodology for modeling institutional pressure operates on four unyielding pillars.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Adversarial Debate Logic",
                desc: "We simulate counter-party friction before it materializes, war-gaming every clause against hostile intent to map precise breaking points."
              },
              {
                title: "Pressure-State Modeling",
                desc: "Non-linear mapping of how localized governance fractures cascade into systemic proxy battles and structural liquidity instability."
              },
              {
                title: "Commit Layer Mechanics",
                desc: "Every structural inference is cryptographically anchored. A tamper-evident operational layer ensuring verifiable accountability."
              },
              {
                title: "Evidence Verification Standards",
                desc: "Strict data compartmentalization. We structurally prevent the blending of verified regulatory facts with adversarial speculative vectors."
              }
            ].map((pillar, i) => (
              <div key={i} className="group relative p-8 md:p-10 bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--brand-cyan)]/40 hover:shadow-[0_0_30px_rgba(0,184,217,0.05)] transition-all duration-500">
                <div className="absolute top-0 right-0 px-2 py-1.5 font-mono text-[9px] text-[var(--text-tertiary)] group-hover:text-[var(--brand-cyan)]/80 transition-colors uppercase tracking-[0.2em] border-b border-l border-[var(--border-color)] group-hover:border-[var(--brand-cyan)]/30 bg-[var(--bg-secondary)]/30">
                  MODULE 0{i + 1}
                </div>
                
                <div className="w-12 h-12 mb-8 rounded-none border border-[var(--border-highlight)] flex items-center justify-center font-mono text-lg text-[var(--text-secondary)] group-hover:text-[var(--brand-cyan)] group-hover:border-[var(--brand-cyan)]/50 transition-colors bg-[var(--bg-secondary)]/20">
                  0{i + 1}
                </div>
                
                <h3 className="font-bold text-2xl font-heading mb-4 text-[var(--text-primary)] tracking-wide">{pillar.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">{pillar.desc}</p>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--brand-cyan)]/60 group-hover:w-full transition-all duration-700 ease-out"></div>
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--brand-cyan)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: DISCLAIMER / POSITIONING */}
      <section className="py-24 px-6 text-center border-t border-[var(--border-color)]">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-[var(--text-secondary)]">
            Raven does not predict markets.
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-[var(--text-primary)]">
            Raven models institutional pressure.
          </h2>
        </div>
      </section>

      {/* SECTION 6: MEMO STRUCTURE */}
      <section className="py-24 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Every memo includes:</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Trigger Event",
              "Pressure Pathway",
              "Negotiation Sequence",
              "Redline Proposals",
              "Disputed Claims Matrix",
              "Leverage Assessment"
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 border border-[var(--border-color)] flex items-center justify-center text-center">
                <span className="font-mono text-sm tracking-widest uppercase font-bold text-[var(--text-primary)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-10 glass-panel p-10 md:p-14 border border-[var(--border-highlight)] shadow-none rounded-none relative overflow-hidden">
          
          <div className="space-y-4 relative z-10">
            <div className="inline-block px-3 py-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/20 text-[10px] font-mono tracking-widest uppercase mb-2">Your Conversion Engine</div>
            <h2 className="text-4xl font-bold font-heading">Request Pressure Event Memo</h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
              Raven currently operates on a limited engagement basis for active transaction environments. Receive a real live-event memo.
            </p>
          </div>

          <form 
            onSubmit={handleFormSubmit}
            className="max-w-md mx-auto space-y-6 relative z-10" 
          >
            <div className="space-y-5 text-left">
              <div>
                <label className="block text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-2 font-semibold pl-1">Firm or Institution</label>
                <input required disabled={formState !== 'idle'} type="text" name="firm" className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)]/50 transition-all text-sm font-medium disabled:opacity-50 placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-highlight)]" placeholder="Acme Capital" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-2 font-semibold pl-1">Corporate Email</label>
                  <input required disabled={formState !== 'idle'} type="email" name="email" className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)]/50 transition-all text-sm font-medium disabled:opacity-50 placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-highlight)]" placeholder="analyst@acmecapital.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-2 font-semibold pl-1">CIK or Ticker <span className="opacity-50 lowercase font-sans text-[10px] ml-1 tracking-normal">(optional)</span></label>
                  <input disabled={formState !== 'idle'} type="text" name="cikOrTicker" className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)]/50 transition-all text-sm font-medium disabled:opacity-50 placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-highlight)]" placeholder="AAPL / 0000320193" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-2 font-semibold pl-1">Deal Size / Transaction Value <span className="opacity-50 lowercase font-sans text-[10px] ml-1 tracking-normal">(optional)</span></label>
                <input disabled={formState !== 'idle'} type="text" name="transactionValue" className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)]/50 transition-all text-sm font-medium disabled:opacity-50 placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-highlight)]" placeholder="$500M - $1B+" />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-2 font-semibold pl-1">Additional Context <span className="opacity-50 lowercase font-sans text-[10px] ml-1 tracking-normal">(optional)</span></label>
                <textarea disabled={formState !== 'idle'} name="additionalDetails" rows={3} className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)]/50 transition-all text-sm font-medium disabled:opacity-50 placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-highlight)] resize-none" placeholder="Targeting regulatory risks, reverse merger structure..." />
              </div>
            </div>
            
            {formState === 'error' && (
              <div className="text-sm text-red-500 bg-red-500/10 border border-red-500/20 p-4 rounded-lg text-left shadow-sm">
                There was a problem submitting your request. Please try again or email us directly.
              </div>
            )}
            
            {formState === 'success' && (
              <div className="text-sm text-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 p-4 rounded-lg text-left flex items-center justify-center gap-2 font-bold uppercase tracking-widest shadow-sm">
                <CheckCircle2 className="w-5 h-5" /> SECURE TRANSMISSION RECEIVED
              </div>
            )}

            <button 
              type="submit" 
              disabled={formState !== 'idle'}
              className="w-full !mt-10 bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-5 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 flex items-center justify-center gap-2 rounded-none"
            >
              {formState === 'submitting' ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Transmitting...</>
              ) : formState === 'success' ? (
                'Request Sent'
              ) : (
                'Request Pressure Event Memo'
              )}
            </button>
          </form>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsVideoModalOpen(false)}></div>
          <div className="relative w-full max-w-5xl bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl shadow-2xl overflow-hidden glass-panel z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/50">
              <div className="font-mono text-xs font-bold tracking-widest text-[var(--text-secondary)]">RAVEN ADVERSARY // DEMO</div>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors p-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative pt-[56.25%] w-full bg-black">
              <iframe 
                src="https://www.loom.com/embed/67a5d3afedb1468193f9469bc75ce703?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" 
                frameBorder="0" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Raven Adversary Demo"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
