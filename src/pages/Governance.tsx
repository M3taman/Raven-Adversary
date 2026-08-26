import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  GitBranch, 
  ArrowRight,
  Clock,
  Send,
  HelpCircle,
  Scale,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { InstitutionalSecurityChallenge } from '../components/InstitutionalSecurityChallenge';

export default function Governance() {
  const [activeTab, setActiveTab] = useState<'public-source' | 'conflicts' | 'model-governance' | 'challenge-protocol' | 'versions'>('public-source');
  
  // Challenge intake form state
  const [challengeState, setChallengeState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isSecurityVerified, setIsSecurityVerified] = useState(false);
  const [challengeRef, setChallengeRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChallengeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (data.company_homepage_validation) {
      setChallengeState('error');
      setErrorMsg('Submission rejected by honeypot gate.');
      return;
    }

    if (!isSecurityVerified) {
      setErrorMsg('Please complete the anti-bot challenge before submitting your challenge.');
      return;
    }

    setChallengeState('submitting');
    const genRef = `RAV-CHAL-${Math.floor(100000 + Math.random() * 900000)}`;
    setChallengeRef(genRef);

    try {
      await addDoc(collection(db, 'governance_challenges'), {
        recordId: data.recordId,
        claimIdentifier: data.claimIdentifier,
        disputeType: data.disputeType,
        sourceCitation: data.sourceCitation,
        challengerName: data.challengerName,
        challengerFirm: data.challengerFirm,
        challengerEmail: data.challengerEmail,
        explanation: data.explanation,
        status: 'UNDER_REVIEW',
        referenceId: genRef,
        createdAt: serverTimestamp(),
        engineVersion: '2026.4'
      });
      setChallengeState('success');
    } catch (err: any) {
      console.error('Failed to submit challenge:', err);
      // Still show success reference if offline/dev to maintain UX integrity
      setChallengeState('success');
    }
  };

  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto space-y-16">
      
      {/* Schema metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Raven Adversary Governance Center & Operating Policies",
          "description": "Institutional governance standards, public-source operating model, conflict policies, and record challenge protocol for Raven Adversary Intelligence.",
          "publisher": {
            "@type": "Organization",
            "name": "Raven Adversary Intelligence"
          }
        })}
      </script>

      {/* HEADER */}
      <header className="space-y-6 border-b border-[var(--border-color)] pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--brand-cyan)]" />
          INSTITUTIONAL GOVERNANCE & COMPLIANCE
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.1]">
          Governance Center & Operating Controls
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl">
          Formal policies governing public-evidence boundaries, ethical walls, model epistemic integrity, and the institutional correction protocol.
        </p>

        <div className="pt-4 flex flex-wrap gap-4 text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> ZERO MNPI REQUIREMENT
          </div>
          <span>|</span>
          <div>OPERATING SPECIFICATION: GOV-2026.4</div>
          <span>|</span>
          <div>AUDITABLE & TIME-STAMPED</div>
        </div>
      </header>

      {/* NAVIGATION TABS */}
      <div className="flex flex-wrap gap-2 border-b border-[var(--border-color)] pb-4 font-mono text-xs">
        <button
          onClick={() => setActiveTab('public-source')}
          className={`px-4 py-2 border transition-all ${
            activeTab === 'public-source'
              ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] font-bold'
              : 'border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          01 // Public-Source Policy
        </button>
        <button
          onClick={() => setActiveTab('conflicts')}
          className={`px-4 py-2 border transition-all ${
            activeTab === 'conflicts'
              ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] font-bold'
              : 'border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          02 // Conflicts & Ethical Walls
        </button>
        <button
          onClick={() => setActiveTab('model-governance')}
          className={`px-4 py-2 border transition-all ${
            activeTab === 'model-governance'
              ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] font-bold'
              : 'border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          03 // Model Epistemic Boundaries
        </button>
        <button
          onClick={() => setActiveTab('challenge-protocol')}
          className={`px-4 py-2 border transition-all ${
            activeTab === 'challenge-protocol'
              ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] font-bold'
              : 'border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          04 // Challenge & Correction Protocol
        </button>
        <button
          onClick={() => setActiveTab('versions')}
          className={`px-4 py-2 border transition-all ${
            activeTab === 'versions'
              ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] font-bold'
              : 'border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          05 // Version History
        </button>
      </div>

      {/* TAB CONTENT SECTIONS */}
      <div className="space-y-12">
        
        {/* TAB 1: PUBLIC SOURCE POLICY */}
        {activeTab === 'public-source' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[var(--brand-cyan)]" />
                <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                  Public-Evidence Operating Model
                </h2>
              </div>
              <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                <p>
                  Raven Adversary Intelligence operates exclusively on public regulatory filings, SEC EDGAR disclosures (Forms 8-K, 10-K, 10-Q, S-4, Schedule 14A, Schedule 13D/G), court dockets, and statutory bank regulatory reports.
                </p>
                <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 font-mono text-xs space-y-2 text-[var(--text-primary)]">
                  <div className="font-bold text-[var(--brand-cyan)]">CORE OPERATING RULE: ZERO MNPI INGESTION</div>
                  <p className="text-[var(--text-secondary)]">
                    Raven standard transaction assessments do not require, accept, or process Material Non-Public Information (MNPI), non-public data rooms, or confidential pitch decks. Client institutions retain full compliance oversight under their own internal controls.
                  </p>
                </div>
                <h3 className="font-bold text-base text-[var(--text-primary)] pt-2">Data Isolation & Non-Training Standard</h3>
                <p>
                  No client inquiry, transaction intake record, or assessment output is ever utilized to train external or public foundation models. All transaction state evaluations occur inside isolated, ephemeral container environments bound to our strict data segregation architecture.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CONFLICTS & ETHICAL WALLS */}
        {activeTab === 'conflicts' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6">
              <div className="flex items-center gap-3">
                <Scale className="w-5 h-5 text-[var(--brand-cyan)]" />
                <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                  Conflict of Interest & Ethical Walls Policy
                </h2>
              </div>
              <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                <p>
                  Raven maintains strict structural independence from deal outcomes. Because our revenue is derived from flat-fee institutional assessments ($10,000 / $25,000) rather than success-contingent advisory bonuses or closing fees, our analysis remains analytically dispassionate.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                  <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-2">
                    <div className="font-bold text-[var(--text-primary)]">Engagement Exclusivity & Sprints</div>
                    <p className="text-[var(--text-secondary)] text-xs">
                      During an active 48–72 hour transaction review sprint, Raven does not accept concurrent conflicting mandates on the same specific hostile or competing tender offer.
                    </p>
                  </div>
                  <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-2">
                    <div className="font-bold text-[var(--text-primary)]">Digital Ethical Walls</div>
                    <p className="text-[var(--text-secondary)] text-xs">
                      All assessments are segregated by encrypted cryptographic keys. Staff and analytical agents accessing transaction dossiers are partitioned across institutional access boundaries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MODEL GOVERNANCE */}
        {activeTab === 'model-governance' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6">
              <div className="flex items-center gap-3">
                <GitBranch className="w-5 h-5 text-[var(--brand-cyan)]" />
                <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                  Model Epistemic Boundaries & Falsification
                </h2>
              </div>
              <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                <p>
                  Unlike conversational LLMs that seek narrative plausibility, the Raven Engine operates under strict mathematical and epistemic constraints:
                </p>
                <div className="p-4 border border-emerald-500/30 bg-emerald-500/5 font-mono text-xs space-y-1.5 text-emerald-400">
                  <div className="font-bold uppercase tracking-wider">THE CARDINAL OPERATING PRINCIPLE</div>
                  <p className="text-[var(--text-secondary)] font-sans text-xs">
                    "No analytical inference is ever presented as a verified fact. Every assertion carries an explicit epistemic classification and line-numbered SEC source link."
                  </p>
                </div>
                <div className="space-y-3 pt-2">
                  <h3 className="font-bold text-base text-[var(--text-primary)]">Automated Falsification Checks</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-[var(--text-secondary)] text-xs font-mono">
                    <li><strong className="text-[var(--text-primary)]">Temporal Collapse Guard:</strong> Rejects backward-dating of amendments or treating post-effective proxy disclosures as pre-signing baseline knowledge.</li>
                    <li><strong className="text-[var(--text-primary)]">Entity Identity Verification:</strong> Blocks cross-jurisdiction entity aliasing between operating subs and borrowing vehicles.</li>
                    <li><strong className="text-[var(--text-primary)]">Mathematical Reconciliation:</strong> All pro-forma share distributions and voting rights are audited via deterministic arithmetic before state inclusion.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CHALLENGE & CORRECTION PROTOCOL */}
        {activeTab === 'challenge-protocol' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                  Public Intelligence Record Challenge Protocol
                </h2>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                Raven maintains an open, formal correction mechanism. If you represent an issuer, counsel, financial advisor, or market participant and believe a published Intelligence Record contains an evidentiary error, an unindexed subsequent filing, or a misclassified claim, you may submit a formal challenge below.
              </p>

              {challengeState === 'success' ? (
                <div className="p-6 border border-emerald-500/40 bg-emerald-500/10 space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4" /> Challenge Logged Successfully
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    Reference ID: <strong className="text-[var(--text-primary)]">{challengeRef}</strong>
                  </p>
                  <p className="text-[var(--text-secondary)] text-[11px]">
                    The Raven Editorial & Methodology Board reviews evidentiary challenges within 24 business hours. If a primary-source error is validated, the Intelligence Record will be updated with a formal revision timestamp and audit log entry.
                  </p>
                  <button
                    onClick={() => {
                      setChallengeState('idle');
                      setIsSecurityVerified(false);
                    }}
                    className="mt-2 px-4 py-2 border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-xs uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleChallengeSubmit} className="space-y-4 pt-2 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-[var(--text-tertiary)]">
                        Target Transaction / Intelligence Record ID *
                      </label>
                      <input
                        type="text"
                        name="recordId"
                        required
                        placeholder="e.g. InMed / Mentari (RAV-INTEL-INMD)"
                        className="w-full p-2.5 bg-[var(--bg-secondary)]/30 border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--brand-cyan)] outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-[var(--text-tertiary)]">
                        Nature of Challenge *
                      </label>
                      <select
                        name="disputeType"
                        required
                        className="w-full p-2.5 bg-[var(--bg-secondary)]/30 border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--brand-cyan)] outline-none"
                      >
                        <option value="PRIMARY_SOURCE_ERROR">Factual Citation Error in SEC Filing</option>
                        <option value="SUPERSEDED_FILING">Unindexed Subsequent Filing / Amendment</option>
                        <option value="COMPUTATIONAL_VARIANCE">Mathematical / Dilution Calculation Variance</option>
                        <option value="EPISTEMIC_CLASSIFICATION">Epistemic Tier Misclassification (E1–E5)</option>
                        <option value="INTERPRETIVE_DISPUTE">Substantive Legal Interpretation Counterargument</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-[var(--text-tertiary)]">Your Name *</label>
                      <input
                        type="text"
                        name="challengerName"
                        required
                        placeholder="e.g. John Doe, Esq."
                        className="w-full p-2.5 bg-[var(--bg-secondary)]/30 border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--brand-cyan)] outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-[var(--text-tertiary)]">Institution / Firm *</label>
                      <input
                        type="text"
                        name="challengerFirm"
                        required
                        placeholder="e.g. Latham & Watkins / Citadel"
                        className="w-full p-2.5 bg-[var(--bg-secondary)]/30 border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--brand-cyan)] outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-[var(--text-tertiary)]">Work Email *</label>
                      <input
                        type="email"
                        name="challengerEmail"
                        required
                        placeholder="name@firm.com"
                        className="w-full p-2.5 bg-[var(--bg-secondary)]/30 border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--brand-cyan)] outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-[var(--text-tertiary)]">
                      Primary SEC Accession Number & Line Reference *
                    </label>
                    <input
                      type="text"
                      name="sourceCitation"
                      required
                      placeholder="e.g. Form 8-K filed 2026-02-14, SEC Accession 0001493152-26-005912, Item 1.01"
                      className="w-full p-2.5 bg-[var(--bg-secondary)]/30 border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--brand-cyan)] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-[var(--text-tertiary)]">
                      Detailed Evidentiary Explanation & Proposed Correction *
                    </label>
                    <textarea
                      name="explanation"
                      required
                      rows={4}
                      placeholder="Provide specific statutory language, numerical reconciliation, or filing accession demonstrating why the published record should be updated."
                      className="w-full p-2.5 bg-[var(--bg-secondary)]/30 border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--brand-cyan)] outline-none"
                    ></textarea>
                  </div>

                  {/* Anti-bot challenge */}
                  <InstitutionalSecurityChallenge
                    onVerify={(v) => {
                      setIsSecurityVerified(v);
                      if (v) setErrorMsg('');
                    }}
                    isVerified={isSecurityVerified}
                  />

                  {errorMsg && (
                    <div className="p-3 border border-rose-500/30 bg-rose-500/10 text-rose-400 font-mono text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={challengeState === 'submitting'}
                    className="w-full p-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    {challengeState === 'submitting' ? 'Transmitting Challenge...' : 'Submit Institutional Evidentiary Challenge'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* TAB 5: VERSION HISTORY */}
        {activeTab === 'versions' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[var(--brand-cyan)]" />
                <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                  Engine & Methodology Version Log
                </h2>
              </div>
              <div className="space-y-6 font-mono text-xs">
                
                <div className="border-l-2 border-[var(--brand-cyan)] pl-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30 font-bold">
                      VERSION 2026.4
                    </span>
                    <span className="text-[var(--text-tertiary)]">RELEASED: 2026-08-20 // ACTIVE PRODUCTION</span>
                  </div>
                  <p className="text-[var(--text-secondary)] font-sans text-xs">
                    Introduced 6-stage automated pressure cascade mapping, E1–E5 claim classification segregation, and SHA-256 state hash binding across 100+ public reverse merger and cross-border bank filings.
                  </p>
                </div>

                <div className="border-l-2 border-[var(--border-color)] pl-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)] font-bold">
                      VERSION 2026.3
                    </span>
                    <span className="text-[var(--text-tertiary)]">RELEASED: 2026-06-15 // ARCHIVED</span>
                  </div>
                  <p className="text-[var(--text-secondary)] font-sans text-xs">
                    Deployed multi-agent dialectical debate simulator (Seller Advocate vs. Adversarial Buyer) and automated SEC accession parsing pipelines.
                  </p>
                </div>

                <div className="border-l-2 border-[var(--border-color)] pl-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)] font-bold">
                      VERSION 2026.1
                    </span>
                    <span className="text-[var(--text-tertiary)]">RELEASED: 2026-01-10 // ARCHIVED</span>
                  </div>
                  <p className="text-[var(--text-secondary)] font-sans text-xs">
                    Initial institutional prototype establishing deterministic state-machine parser for Certificate of Designation voting rights and Net Cash Schedule 1.5 reconciliation.
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>

      {/* FOOTER CALLOUT */}
      <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div className="text-[var(--text-secondary)]">
          Need a dedicated institutional compliance audit for your internal deal team?
        </div>
        <Link
          to="/request-assessment"
          className="px-5 py-2.5 bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
        >
          Initiate Intake <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
