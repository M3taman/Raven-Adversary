import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Brain, Lock, ChevronRight, Activity, Terminal, CheckCircle2, Globe, FileStack, ShieldAlert, GitCompare, Loader2, X, Play, FileText, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import CaseStudies from '../components/CaseStudies';
import LivePressureEvents from '../components/LivePressureEvents';
import EvidentiaryTracer from '../components/EvidentiaryTracer';
import AnalyticalBlindspots from '../components/AnalyticalBlindspots';
import { PressurePropagationInteractive } from '../components/PressurePropagationInteractive';
import { EvidenceStandardMatrix } from '../components/EvidenceStandardMatrix';
import { InstitutionalDeliverables } from '../components/InstitutionalDeliverables';
import { ComparisonTable } from '../components/ComparisonTable';
import { InstitutionalBuyerProfiles } from '../components/InstitutionalBuyerProfiles';
import { InteractiveBoardroomBriefing } from '../components/InteractiveBoardroomBriefing';
import ArchitecturalComparison from '../components/ArchitecturalComparison';
import { InstitutionalSecurityChallenge } from '../components/InstitutionalSecurityChallenge';
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
  const [isSecurityVerified, setIsSecurityVerified] = useState(false);
  const [securityError, setSecurityError] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBriefingModalOpen, setIsBriefingModalOpen] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Prevent scrolling when modals are open
  useEffect(() => {
    if (isVideoModalOpen || isBriefingModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isVideoModalOpen, isBriefingModalOpen]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSecurityError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Bot honeypot check: If hidden field is filled, silently reject or fail
    if (data.company_homepage_validation) {
      console.warn('Bot detected via honeypot field.');
      setFormState('error');
      return;
    }

    if (!isSecurityVerified) {
      setSecurityError('Please complete the Institutional Anti-Bot Challenge below before submitting.');
      return;
    }

    setFormState('submitting');
    const generatedRef = `RAV-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(generatedRef);

    try {
      await addDoc(collection(db, 'leads'), {
        firm: data.firm as string,
        email: data.email as string,
        cikOrTicker: data.cikOrTicker as string,
        transactionValue: (data.transactionValue as string) || '',
        additionalDetails: (data.additionalDetails as string) || '',
        referenceId: generatedRef,
        status: 'new',
        createdAt: serverTimestamp()
      }).catch(err => handleFirestoreError(err, OperationType.CREATE, 'leads'));

      setFormState('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <>
      {/* FAQ Schema for GEO/AI-Search crawling */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Raven Adversary?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Raven Adversary is an institutional transaction-state intelligence desk for M&A and corporate transactions. Rather than summarizing contract text, Raven reconstructs dynamic transaction state machines to map how contractual leverage, governance fractures, and regulatory thresholds shift under stress."
              }
            },
            {
              "@type": "Question",
              "name": "What is the Raven Evidence Standard?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Raven enforces a 5-Tier Epistemic Standard separating Verified Facts (verbatim SEC citations), Derived Computations (deterministic mathematics), Structural Inferences (causal consequence models), and Adversarial Hypotheses (red-team stress simulations)."
              }
            },
            {
              "@type": "Question",
              "name": "What is the 8-Part Transaction Review Package?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A comprehensive $10,000 / $25,000 commercial forensic audit delivered within 48 to 72 hours, including a Transaction State Baseline, Evidence Ledger, Critical Clause Cards, Pressure Propagation Map, Adversarial Strategy Memo, Executive Decision Brief, 7-Minute Boardroom Walkthrough, and Commit Layer Artifact."
              }
            }
          ]
        })}
      </script>

      {/* HERO SECTION */}
      <section className="min-h-[92vh] flex flex-col justify-center pt-36 pb-20 px-6 md:px-12 xl:px-24 text-center relative">
        <div className="max-w-5xl mx-auto space-y-8 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
            <Shield className="w-3 h-3 text-[var(--brand-cyan)]" />
            RAVEN ADVERSARY INTELLIGENCE // INSTITUTIONAL PRESSURE INTELLIGENCE
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] font-heading text-[var(--text-primary)]">
            Institutional Pressure Intelligence for <span className="text-[var(--brand-cyan)]">Complex Transactions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            Raven reconstructs the decision-state of a live transaction from public evidence, adversarially tests the deal's claims, and maps where contractual, financing, governance, and execution pressure can propagate.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link 
              to="/request-assessment" 
              className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider hover:opacity-90 transition-opacity w-full sm:w-auto justify-center rounded-none shadow-lg"
            >
              Request Transaction Assessment <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link 
              to="/raven-engine" 
              className="border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--brand-cyan)] px-8 py-4 flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider transition-colors w-full sm:w-auto justify-center bg-transparent rounded-none"
            >
              The Raven Engine <ChevronRight className="w-3.5 h-3.5 text-[var(--brand-cyan)]" />
            </Link>

            <button 
              onClick={() => setIsBriefingModalOpen(true)} 
              className="px-8 py-4 border border-[var(--brand-cyan)] text-[var(--brand-cyan)] hover:bg-[var(--brand-cyan)]/10 flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider transition-colors w-full sm:w-auto justify-center bg-transparent rounded-none"
            >
              <Play className="w-3.5 h-3.5" /> 7-Min Boardroom Briefing
            </button>
          </div>

          {/* Quick Institutional Highlights Bar */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl border-t border-[var(--border-color)] text-left">
            <div>
              <div className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-widest">DATA SCOPE</div>
              <div className="text-sm font-bold font-heading text-[var(--text-primary)] mt-0.5">100% Public SEC Filings</div>
            </div>
            <div>
              <div className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-widest">EPISTEMIC STANDARD</div>
              <div className="text-sm font-bold font-heading text-[var(--text-primary)] mt-0.5">5-Tier Claim Adjudication</div>
            </div>
            <div>
              <div className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-widest">PROOF CORPUS</div>
              <div className="text-sm font-bold font-heading text-[var(--text-primary)] mt-0.5">100+ Live Transactions</div>
            </div>
            <div>
              <div className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-widest">INFORMATION HYGIENE</div>
              <div className="text-sm font-bold font-heading text-emerald-400 mt-0.5">Zero MNPI // Ethical Walls</div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 1: 60-SECOND INSTITUTIONAL MATRIX (5 Core Institutional Questions) */}
      <section className="py-20 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/30">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
              INSTITUTIONAL CLARITY // 60-SECOND EXECUTIVE BRIEFING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[var(--text-primary)]">
              Core Principles for Institutional Decision-Makers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Q1 */}
            <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3">
              <div className="font-mono text-[10px] text-[var(--brand-cyan)] font-bold uppercase tracking-wider">
                01 // DEFINITION
              </div>
              <h3 className="text-base font-bold font-heading text-[var(--text-primary)]">
                What is Institutional Pressure Intelligence?
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The discipline of modeling complex corporate transactions as dynamic state machines. Rather than treating contracts as static text, Raven maps how contractual leverage and governance shift under operational variance.
              </p>
            </div>

            {/* Q2 */}
            <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3">
              <div className="font-mono text-[10px] text-[var(--brand-cyan)] font-bold uppercase tracking-wider">
                02 // SUBSTRATE & HYGIENE
              </div>
              <h3 className="text-base font-bold font-heading text-[var(--text-primary)]">
                What evidence does Raven analyze?
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                100% public regulatory filings, SEC EDGAR disclosures (S-4s, 8-Ks, 10-Ks, Proxies), bank Call Reports, and court dockets. Standard assessments require zero MNPI or confidential deal materials.
              </p>
            </div>

            {/* Q3 */}
            <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3">
              <div className="font-mono text-[10px] text-[var(--brand-cyan)] font-bold uppercase tracking-wider">
                03 // ARCHITECTURAL DIFFERENCE
              </div>
              <h3 className="text-base font-bold font-heading text-[var(--text-primary)]">
                Why isn't this another LLM wrap?
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Probabilistic LLMs seek narrative consensus. Raven uses a 9-stage deterministic pipeline featuring multi-agent adversarial debate (Buyer vs. Seller), automated falsification gates, and SHA-256 commit tracking.
              </p>
            </div>

            {/* Q4 */}
            <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3">
              <div className="font-mono text-[10px] text-[var(--brand-cyan)] font-bold uppercase tracking-wider">
                04 // VERIFIABILITY & PROVENANCE
              </div>
              <h3 className="text-base font-bold font-heading text-[var(--text-primary)]">
                Can deal teams verify every conclusion?
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Yes. Every assertion is classified into 5 strict epistemic tiers (E1 Facts to E4 Hypotheses) with exact line-numbered SEC accession citations and verifiable mathematical formulas.
              </p>
            </div>

            {/* Q5 */}
            <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3 md:col-span-2 lg:col-span-2">
              <div className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                05 // COMMERCIAL ENGAGEMENT
              </div>
              <h3 className="text-base font-bold font-heading text-[var(--text-primary)]">
                How is Raven engaged on a live transaction?
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                We deliver an 8-Part Transaction Review Package—including One-Page Decision Memo, Evidence Ledger, Adversarial Strategy Memo, Pressure Propagation Map, and 7-Minute Boardroom Walkthrough—within 48 to 72 hours for a $10,000 flat fee.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link to="/request-assessment" className="font-mono text-xs text-[var(--brand-cyan)] font-bold hover:underline inline-flex items-center gap-1.5">
                  Initiate Assessment Request <ArrowRight className="w-3 h-3" />
                </Link>
                <Link to="/governance" className="font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1.5">
                  View Governance Center <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: PROOF - INTERACTIVE PRESSURE PROPAGATION */}
      <section className="py-24 px-6 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
              Layer 02 // Flagship Live Case Dissection
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-[var(--text-primary)]">
              Multi-Variable Pressure Propagation
            </h2>
            <p className="text-base text-[var(--text-secondary)]">
              Explore how localized balance sheet variances, statutory trust terms, or regulatory capital thresholds cascade into systemic transaction leverage shifts. Click any node to inspect primary source SEC evidence.
            </p>
          </div>

          <PressurePropagationInteractive />
        </div>
      </section>

      {/* SECTION 3: ARCHITECTURAL COMPARISON MATRIX */}
      <section className="py-24 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/10">
        <div className="max-w-6xl mx-auto">
          <ArchitecturalComparison />
        </div>
      </section>

      {/* SECTION 4: OPERATIONAL INTEGRITY & BOUNDARIES */}
      <section className="py-24 px-6 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
              Institutional Discipline // Operating Rules
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-[var(--text-primary)]">
              Operational Boundaries & Disciplinary Limits
            </h2>
            <p className="text-base text-[var(--text-secondary)]">
              We define our value just as strictly by what we refuse to do as by what we execute.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Left Box: We Do Not */}
            <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-6">
              <div className="font-mono text-[10px] text-red-400 uppercase tracking-widest font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-none"></span>
                RAVEN DOES NOT
              </div>
              <ul className="space-y-4 text-xs text-[var(--text-secondary)] leading-relaxed font-mono">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold select-none">[×]</span>
                  <span><strong>Summarize documents:</strong> We reject passive, low-context text indexing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold select-none">[×]</span>
                  <span><strong>Offer market or price predictions:</strong> We model structural pressure and contractual leverage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold select-none">[×]</span>
                  <span><strong>Accept MNPI:</strong> We operate exclusively on public SEC filings, Call Reports, and court dockets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold select-none">[×]</span>
                  <span><strong>Blend inference with fact:</strong> No analytical inference is ever presented as a verified fact.</span>
                </li>
              </ul>
            </div>

            {/* Right Box: We Do */}
            <div className="p-8 border border-[var(--brand-cyan)]/40 bg-[var(--bg-primary)] space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,var(--brand-cyan)_0%,transparent_60%)] opacity-10 pointer-events-none"></div>
              <div className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-widest font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--brand-cyan)] rounded-none"></span>
                RAVEN DOES
              </div>
              <ul className="space-y-4 text-xs text-[var(--text-secondary)] leading-relaxed font-mono">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--brand-cyan)] font-bold select-none">[✓]</span>
                  <span><strong>Reconstruct dynamic transaction states:</strong> Map how covenants, walk-away rights, and break fees actually behave.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--brand-cyan)] font-bold select-none">[✓]</span>
                  <span><strong>Detect governance fractures:</strong> Uncover voting blocks, trust pass-throughs, and activist attack vectors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--brand-cyan)] font-bold select-none">[✓]</span>
                  <span><strong>Deliver 8-part forensic dossiers:</strong> Provide board-ready deliverables with complete SEC accession citations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--brand-cyan)] font-bold select-none">[✓]</span>
                  <span><strong>Maintain tamper-evident commit records:</strong> Cryptographically anchor claim records as of analysis timestamps.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE RAVEN EVIDENCE STANDARD */}
      <EvidenceStandardMatrix />

      {/* SECTION 6: THE 8-PART TRANSACTION REVIEW PACKAGE */}
      <InstitutionalDeliverables />

      {/* SECTION 7: LIVE PRESSURE ENVIRONMENTS & 100+ TRANSACTIONS */}
      <LivePressureEvents />

      {/* SECTION 8: COST OF ANALYTICAL BLINDSPOTS */}
      <AnalyticalBlindspots />

      {/* SECTION 9: EVIDENTIARY TRACEABILITY */}
      <EvidentiaryTracer />

      {/* SECTION 10: INSTITUTIONAL BUYER PROFILES (5 ICPs) */}
      <InstitutionalBuyerProfiles />

      {/* SECTION 11: FORENSIC CASE STUDIES */}
      <CaseStudies />

      {/* SECTION 12: INITIATE REVIEW / CONTACT PORTAL */}
      <section id="contact" className="py-32 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/10">
        <div className="max-w-3xl mx-auto space-y-10 border border-[var(--border-color)] bg-[var(--bg-primary)] p-8 md:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30 text-[9px] font-mono tracking-widest uppercase font-bold">
              SELECTIVE ENGAGEMENT DESK // CONFLICT SCREENING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--text-primary)]">
              Initiate Transaction Intelligence Review
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
              Submit target transaction identifiers. Our desk conducts pre-engagement conflict verification and confirms filing coverage within 2 hours.
            </p>
          </div>

          {formState === 'success' ? (
            <div className="p-8 border border-emerald-500/30 bg-emerald-500/5 space-y-4 text-center">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading">
                Transaction Intake Received
              </h3>
              <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
                Conflict check and scope confirmation will be delivered to your corporate email within 2 hours.
              </p>
              <div className="p-3 border border-[var(--border-color)] bg-[var(--bg-primary)] inline-block font-mono text-xs text-[var(--brand-cyan)]">
                AUDIT REFERENCE CODE: {referenceId}
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-1.5 font-bold">
                    Firm / Institution *
                  </label>
                  <input 
                    required 
                    disabled={formState !== 'idle'} 
                    type="text" 
                    name="firm" 
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 focus:outline-none focus:border-[var(--brand-cyan)] text-xs font-mono" 
                    placeholder="e.g. Citadel, Morgan Stanley, Wachtell Lipton" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-1.5 font-bold">
                      Institutional Work Email *
                    </label>
                    <input 
                      required 
                      disabled={formState !== 'idle'} 
                      type="email" 
                      name="email" 
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 focus:outline-none focus:border-[var(--brand-cyan)] text-xs font-mono" 
                      placeholder="analyst@firm.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-1.5 font-bold">
                      Target Ticker / CIK / Transaction Name *
                    </label>
                    <input 
                      required
                      disabled={formState !== 'idle'} 
                      type="text" 
                      name="cikOrTicker" 
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 focus:outline-none focus:border-[var(--brand-cyan)] text-xs font-mono" 
                      placeholder="e.g. FSEA, IMAQ, or First Bancorp" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-1.5 font-bold">
                    Deal Size / Transaction Value (Optional)
                  </label>
                  <input 
                    disabled={formState !== 'idle'} 
                    type="text" 
                    name="transactionValue" 
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 focus:outline-none focus:border-[var(--brand-cyan)] text-xs font-mono" 
                    placeholder="e.g. $100M - $1B+" 
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-1.5 font-bold">
                    Strategic Focus Areas (Optional)
                  </label>
                  <textarea 
                    disabled={formState !== 'idle'} 
                    name="additionalDetails" 
                    rows={3} 
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 focus:outline-none focus:border-[var(--brand-cyan)] text-xs font-mono resize-none" 
                    placeholder="e.g. MAE carveout analysis, proxy voting pass-through, regulatory capital threshold drag..." 
                  />
                </div>
              </div>

              {/* Institutional Cryptographic Proof-of-Human Security Challenge */}
              <InstitutionalSecurityChallenge 
                onVerify={(verified) => {
                  setIsSecurityVerified(verified);
                  if (verified) setSecurityError(null);
                }}
                isVerified={isSecurityVerified}
              />

              {securityError && (
                <div className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 p-3 font-mono">
                  {securityError}
                </div>
              )}

              {formState === 'error' && (
                <div className="text-xs text-red-500 bg-red-500/10 border border-red-500/20 p-3 font-mono">
                  There was an error submitting your intake. Please try again.
                </div>
              )}

              {/* Zero MNPI notice */}
              <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center gap-2 text-[10px] font-mono text-[var(--text-tertiary)]">
                <Lock className="w-3.5 h-3.5 text-[var(--brand-cyan)] shrink-0" />
                <span>Zero MNPI Policy: Operating exclusively on public SEC filings, Call Reports, and court dockets.</span>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className="w-full bg-[var(--text-primary)] text-[var(--bg-primary)] py-4 text-xs font-mono font-bold uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {formState === 'submitting' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Verifying Coverage & Conflict Screen...</>
                ) : (
                  'Submit Transaction for Conflict Clearance & Review ($10K)'
                )}
              </button>
            </form>
          )}

          <div className="text-center font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-wider">
            Standard turnaround: 72 hours ($10,000) • Expedited priority desk: 24-48 hours ($25,000)
          </div>

        </div>
      </section>

      {/* VIDEO MODAL */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsVideoModalOpen(false)}></div>
          <div className="relative w-full max-w-5xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-2xl overflow-hidden glass-panel z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/50">
              <div className="font-mono text-xs font-bold tracking-widest text-[var(--text-secondary)]">RAVEN ADVERSARY // OPERATIONAL BRIEFING</div>
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

      {/* INTERACTIVE BOARDROOM BRIEFING MODAL */}
      <InteractiveBoardroomBriefing
        isOpen={isBriefingModalOpen}
        onClose={() => setIsBriefingModalOpen(false)}
      />
    </>
  );
}
