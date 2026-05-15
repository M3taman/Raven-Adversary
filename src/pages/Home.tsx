import React, { useState } from 'react';
import { Shield, Brain, Lock, ChevronRight, Activity, Terminal, CheckCircle2, Globe, FileStack, ShieldAlert, GitCompare, Loader2 } from 'lucide-react';
import CaseStudies from '../components/CaseStudies';
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

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await addDoc(collection(db, 'leads'), {
        firm: data.firm as string,
        email: data.email as string,
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
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            The Adversarial Intelligence Layer <br/>
            <span className="gradient-text">for Live Transactions</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Raven Adversary analyzes public filing stacks to identify governance asymmetries, structural liabilities, liquidity bottlenecks, transaction friction, and hidden execution risk.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity w-full sm:w-auto justify-center rounded-sm">
              Request Live Deal Review <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#case-studies" className="px-8 py-4 border border-[var(--border-highlight)] text-[var(--text-primary)] flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:border-[var(--brand-cyan)] transition-colors w-full sm:w-auto justify-center glass-panel rounded-sm">
              View Sample Intelligence
            </a>
            <a href="https://www.loom.com/looms/videos" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-[var(--border-highlight)] text-[var(--text-primary)] flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:border-[var(--brand-purple)] transition-colors w-full sm:w-auto justify-center glass-panel rounded-sm">
              Watch Demo
            </a>
          </div>
          <div className="pt-10 flex flex-wrap justify-center gap-4 text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand-cyan)]"/> Not a generic AI copilot</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand-cyan)]"/> Citation-anchored analysis</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand-cyan)]"/> Human-reviewed work product</div>
          </div>
        </div>
      </section>

      {/* HERO VISUAL DASHBOARD */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto glass-panel rounded-lg overflow-hidden flex flex-col border border-[var(--border-color)]">
          {/* Terminal Header */}
          <div className="h-10 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/50 flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-tertiary)] opacity-50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-tertiary)] opacity-50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-tertiary)] opacity-50"></div>
            <div className="ml-4 font-mono text-[10px] text-[var(--text-tertiary)] tracking-widest uppercase">RAVEN // Adversarial_Buyer_vs_Seller_Terminal</div>
          </div>
          
          <div className="p-4 md:p-8 grid lg:grid-cols-2 gap-6 bg-[var(--bg-primary)]/30 backdrop-blur-md">
            {/* Context / Seller Side */}
            <div className="glass-card rounded border-l-2 border-l-[var(--brand-cyan)] p-6 space-y-6">
              <div className="flex items-center gap-2 border-b border-[var(--border-color)] pb-3">
                <Shield className="w-4 h-4 text-[var(--brand-cyan)]" />
                <span className="font-mono text-xs font-bold tracking-widest text-[var(--text-secondary)]">SUBJECT COMPANY REPRESENTATION</span>
              </div>
              <p className="text-sm leading-relaxed">
                The transaction architecture protects shareholder value. The amended consideration is a 100% cash offer. The 'UWM Termination Fee Refund' clause requires reimbursement if the buyer commits a material breach.
              </p>
              <div className="p-3 bg-[var(--bg-primary)]/50 rounded border border-[var(--border-color)] space-y-1">
                <div className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase">Evidence Source</div>
                <div className="text-[10px] font-mono text-[var(--brand-cyan)]">AMENDMENT TO MERGER AGREEMENT, SEC 7.3(D)</div>
              </div>
            </div>

            {/* Adversarial Alert */}
            <div className="glass-card rounded border-l-2 border-l-[var(--brand-purple)] p-6 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--brand-purple)]/10 blur-[30px] rounded-full pointer-events-none"></div>
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-[var(--brand-purple)]" />
                  <span className="font-mono text-xs font-bold tracking-widest text-[var(--text-secondary)]">QUANTIFIED THREAT SCORING</span>
                </div>
                <span className="px-2 py-0.5 bg-[var(--text-primary)] text-[var(--bg-primary)] text-[9px] font-bold uppercase tracking-widest rounded-sm">CRITICAL EXPOSURE</span>
              </div>
              <p className="text-sm leading-relaxed">
                Forensic risk centers on high-stakes execution gaps. Exposure to a doubled Termination Fee of $50M and a unique $25.4M Refund creates a <span className="font-bold text-[var(--brand-purple)]">$75.4M structural liability barrier</span> prohibiting competitive bids.
              </p>
              <div className="p-4 border border-[var(--border-color)] rounded bg-[var(--bg-primary)]/50 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[var(--text-tertiary)] uppercase">Total Capital at Risk</span>
                  <span className="font-bold text-lg text-[var(--text-primary)]">$75,400,000</span>
                </div>
                <div className="w-full bg-[var(--border-color)] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)] w-[85%] h-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-24 px-6 border-y border-[var(--border-color)] bg-[var(--bg-secondary)]/20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Core Intelligence Modules</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
              Raven systematically stress-tests transactions through specialized modules, delivering deterministic intelligence designed to reduce first-pass review workload.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Governance Asymmetry", desc: "Board structure, voting dynamics, activist pressure, reporting gaps, fiduciary sensitivity.", icon: <Brain /> },
              { title: "Transaction Friction", desc: "Termination rights, conditionality chains, financing dependencies, timing exposure.", icon: <Activity /> },
              { title: "Liquidity & Lock-Up", desc: "Leak-out structures, VWAP floors, ADTV bottlenecks, transfer restrictions.", icon: <Lock /> },
              { title: "SPAC & Reverse Mergers", desc: "Minimum cash conditions, PIPE fragility, redemption risk, disclosure timing.", icon: <FileStack /> },
              { title: "Cross-Border Regulatory Risk", desc: "Jurisdictional complexity, redomestication, audit deadlines, restructuring exposure.", icon: <Globe /> },
              { title: "Adversarial Clause Mapping", desc: "Clause interplay analysis explicitly resolving cross-dependencies across multiple filings and amendments.", icon: <GitCompare /> },
            ].map((mod, i) => (
              <div key={i} className="glass-card p-8 rounded-lg flex flex-col items-start text-left h-full">
                <div className="p-3 bg-[var(--bg-primary)]/50 rounded-md border border-[var(--border-color)] text-[var(--brand-cyan)] mb-6 glow-cyan">
                  {mod.icon}
                </div>
                <h3 className="font-bold text-lg mb-3 font-heading">{mod.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading">How Raven Works</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Ingest Filing Stack", desc: "Raven processes merger agreements, proxies, S-4s, 8-Ks, investor presentations, fairness disclosures, amendments, and governance filings." },
              { step: "02", title: "Adversarial Intelligence Mapping", desc: "The system pressure-tests transaction structures, identifies execution asymmetries, and surfaces hidden dependencies." },
              { step: "03", title: "Human-Reviewed Output", desc: "Outputs are reviewed and structured into tactical work product designed for live transaction environments." }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 md:p-8 rounded-lg flex flex-col md:flex-row gap-6 md:items-center">
                <div className="text-4xl font-bold font-mono text-[var(--border-highlight)]">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-heading">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <CaseStudies />

      {/* TARGET AUDIENCE & DIFFERENCE */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)]/30 border-t border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Who Uses Raven */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-heading">Who Uses Raven</h2>
            <div className="space-y-3">
              {[
                "Plaintiff-side M&A litigators",
                "Governance & proxy analysts",
                "Event-driven & merger arb teams",
                "SPAC & reverse-merger counsel",
                "Activist advisors",
                "Special situations investors",
                "Boutique transaction counsel"
              ].map((user, i) => (
                <div key={i} className="flex items-center gap-3 font-mono text-sm border-b border-[var(--border-color)] pb-3 text-[var(--text-secondary)]">
                  <ChevronRight className="w-4 h-4 text-[var(--brand-purple)]" />
                  <span>{user}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What Makes It Different */}
          <div className="space-y-8 glass-panel p-8 rounded-lg">
            <h2 className="text-3xl font-bold font-heading">Built for Live Deal Environments</h2>
            <p className="text-[var(--text-secondary)]">Raven Adversary is not a generic AI copilot. It is a citation-anchored adversarial intelligence system designed for transaction environments where precision is non-negotiable.</p>
            
            <ul className="space-y-4">
              {[
                "Not a generic legal chatbot",
                "Not a document summarizer",
                "Not a playful SaaS assistant",
                "Purpose-built for adversarial transaction intelligence",
                "Focuses on structural exposure, not just extraction",
                "Designed to reduce first-pass review workloads"
              ].map((diff, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-[var(--text-secondary)]">
                  <Terminal className="w-5 h-5 text-[var(--brand-cyan)] shrink-0" />
                  <span>{diff}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-10 glass-panel p-10 md:p-14 border border-[var(--border-highlight)] shadow-[0_0_50px_rgba(1,192,200,0.05)] rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-cyan)]/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--brand-purple)]/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="space-y-4 relative z-10">
            <h2 className="text-4xl font-bold font-heading">Request a Live Deal Review</h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
              Raven currently operates on a limited engagement basis for active transaction environments.
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
              <div>
                <label className="block text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-2 font-semibold pl-1">Corporate Email</label>
                <input required disabled={formState !== 'idle'} type="email" name="email" className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--brand-cyan)] focus:ring-1 focus:ring-[var(--brand-cyan)]/50 transition-all text-sm font-medium disabled:opacity-50 placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-highlight)]" placeholder="analyst@acmecapital.com" />
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
              className="w-full !mt-10 bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-cyan)] text-white px-6 py-4 text-sm font-bold uppercase tracking-widest hover:brightness-110 hover:shadow-[0_0_30px_rgba(1,192,200,0.3)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 rounded-lg"
            >
              {formState === 'submitting' ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Transmitting...</>
              ) : formState === 'success' ? (
                'Request Sent'
              ) : (
                'Contact Intelligence Team'
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
