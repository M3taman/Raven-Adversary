import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Loader2, 
  ArrowRight, 
  Building2, 
  Briefcase, 
  AlertCircle, 
  FileCode,
  Scale,
  Mail,
  Copy,
  Check
} from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { InstitutionalSecurityChallenge } from '../components/InstitutionalSecurityChallenge';

export default function RequestAssessment() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isSecurityVerified, setIsSecurityVerified] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Bot honeypot verification
    if (data.company_homepage_validation) {
      console.warn('Bot detected via honeypot field.');
      setFormState('error');
      setErrorMessage('Security challenge failed. Submission rejected.');
      return;
    }

    if (!isSecurityVerified) {
      setErrorMessage('Please complete the Institutional Anti-Bot Challenge before submitting your assessment request.');
      return;
    }

    setFormState('submitting');
    const generatedRef = `RAV-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(generatedRef);

    try {
      await addDoc(collection(db, 'leads'), {
        institution: data.institution as string,
        role: data.role as string,
        email: data.email as string,
        targetEntity: data.targetEntity as string,
        transactionType: data.transactionType as string,
        transactionStage: data.transactionStage as string,
        mandateTier: (data.mandateTier as string) || 'Tier II: Single Forensic Sprint ($10K Pilot / $15K Standard)',
        transactionValue: data.transactionValue as string,
        strategicObjective: data.strategicObjective as string,
        referenceId: generatedRef,
        status: 'new_institutional_request',
        createdAt: serverTimestamp()
      });

      setFormState('success');
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error('Submission error:', err);
      setFormState('error');
      setErrorMessage(err?.message || 'Failed to submit intelligence request. Please try again or reach out via official institutional channels.');
    }
  };

  return (
    <div className="py-12 md:py-20 px-6 max-w-5xl mx-auto space-y-16">
      
      {/* HEADER */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
          <ShieldCheck className="w-3 h-3 text-[var(--brand-cyan)]" />
          COMMERCIAL DESK // TRANSACTION ASSESSMENT INTAKE
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-heading text-[var(--text-primary)]">
          Request a Raven Transaction Assessment
        </h1>
        
        <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
          Submit the parameters of an announced, pending, or rumored transaction. Raven reconstructs the complete decision-state graph, tests deal claims, and maps pressure propagation within 60 minutes of target filing.
        </p>
      </div>

      {/* INTAKE FORM OR SUCCESS STATE */}
      {formState === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 md:p-12 border border-emerald-500/40 bg-emerald-500/5 space-y-6 text-center max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          
          <div className="space-y-2">
            <div className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">
              TRANSACTION INTAKE RECORDED
            </div>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              Assessment Request Confirmed
            </h2>
            <div className="font-mono text-xs text-[var(--brand-cyan)] font-bold pt-1">
              RECORD REFERENCE: {referenceId}
            </div>
          </div>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Your preliminary inquiry has been recorded. Our desk will verify SEC public filing depth and deliver preliminary feasibility confirmation within 1 business day.
          </p>

          <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-left font-mono text-xs space-y-1.5">
            <div className="text-[var(--text-tertiary)] uppercase text-[10px]">NEXT PROCEDURAL STEPS:</div>
            <div className="text-[var(--text-primary)]">1. Public filing & EDGAR accession depth validation</div>
            <div className="text-[var(--text-primary)]">2. Conflict clearance & scope confirmation agreement</div>
            <div className="text-[var(--text-primary)]">3. Delivery of Forensic Dossier Package (60-minute standard delivery SLA)</div>
          </div>

          <button
            onClick={() => setFormState('idle')}
            className="px-6 py-2.5 border border-[var(--border-color)] text-xs font-mono uppercase hover:border-[var(--text-primary)] transition-colors"
          >
            Submit Another Transaction
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Form (8 Cols) */}
          <div className="lg:col-span-8 p-8 md:p-10 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-8">
            <div className="border-b border-[var(--border-color)] pb-4 flex items-center justify-between">
              <div className="font-mono text-xs text-[var(--brand-cyan)] uppercase font-bold tracking-wider">
                TRANSACTION SPECIFICATION FORM
              </div>
              <div className="font-mono text-[9px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 100% PUBLIC // ZERO MNPI
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Institution & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-bold">
                    Institution / Firm Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    name="institution"
                    required
                    placeholder="e.g., Lazard / Carlyle / Kirkland & Ellis"
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--brand-cyan)] focus:outline-none font-sans"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-bold">
                    Role / Mandate <span className="text-rose-400">*</span>
                  </label>
                  <select
                    name="role"
                    required
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--brand-cyan)] focus:outline-none font-sans"
                  >
                    <option value="M&A Advisory / Investment Banking">M&A Advisory / Investment Banking</option>
                    <option value="Private Equity Sponsor / PIPE Syndicate">Private Equity Sponsor / PIPE Syndicate</option>
                    <option value="Corporate Development & Strategy">Corporate Development & Strategy</option>
                    <option value="Board Special Committee / Independent Director">Board Special Committee / Independent Director</option>
                    <option value="Event-Driven & Special Situations Fund">Event-Driven & Special Situations Fund</option>
                    <option value="M&A Litigation Counsel / Law Firm Partner">M&A Litigation Counsel / Law Firm Partner</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Target / Issuer & Value */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-bold">
                    Target / Issuer (Ticker, CIK, or Name) <span className="text-rose-400">*</span>
                  </label>
                  <input
                    name="targetEntity"
                    required
                    placeholder="e.g., NXTC (CIK: 0001661634) or InMed"
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--brand-cyan)] focus:outline-none font-sans"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-bold">
                    Approximate Transaction Value
                  </label>
                  <input
                    name="transactionValue"
                    placeholder="e.g., $320M PIPE / $1.2B Enterprise Value"
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--brand-cyan)] focus:outline-none font-sans"
                  />
                </div>
              </div>

              {/* Row 3: Transaction Type & Stage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-bold">
                    Transaction Structure
                  </label>
                  <select
                    name="transactionType"
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--brand-cyan)] focus:outline-none font-sans"
                  >
                    <option value="Public-Public Strategic Merger">Public-Public Strategic Merger</option>
                    <option value="Reverse Triangular Merger & PIPE">Reverse Triangular Merger & PIPE</option>
                    <option value="Bank / Regional Consolidation">Bank / Regional Consolidation</option>
                    <option value="Tender Offer & Hostile / Unsolicited Offer">Tender Offer & Hostile / Unsolicited Offer</option>
                    <option value="Distressed Carve-Out & Recapitalization">Distressed Carve-Out & Recapitalization</option>
                    <option value="Contested Shareholder Proxy / Activist Campaign">Contested Shareholder Proxy / Activist Campaign</option>
                  </select>
                </div>

                <div className="space-y-2 text-left">
                  <label className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-bold">
                    Transaction Stage
                  </label>
                  <select
                    name="transactionStage"
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--brand-cyan)] focus:outline-none font-sans"
                  >
                    <option value="Definitive Agreement Signed (Form 8-K Filed)">Definitive Agreement Signed (Form 8-K Filed)</option>
                    <option value="Preliminary Proxy / S-4 Registration Filed">Preliminary Proxy / S-4 Registration Filed</option>
                    <option value="Pre-Signing Rumor / Public Bid Evaluation">Pre-Signing Rumor / Public Bid Evaluation</option>
                    <option value="Pending Regulatory Review / Second Request">Pending Regulatory Review / Second Request</option>
                    <option value="Post-Signing Breach Dispute / Litigation">Post-Signing Breach Dispute / Litigation</option>
                  </select>
                </div>
              </div>

              {/* Row 3.5: Commercial Mandate Tier Selection */}
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between">
                  <label className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-wider font-bold">
                    Requested Commercial Mandate Tier <span className="text-rose-400">*</span>
                  </label>
                  <span className="font-mono text-[9px] text-[var(--text-tertiary)]">ZERO PAYMENT REQUIRED ON INTAKE</span>
                </div>
                <select
                  name="mandateTier"
                  defaultValue="Tier II: Single Forensic Sprint ($10K Pilot / $15K Standard)"
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--brand-cyan)] focus:outline-none font-sans font-medium"
                >
                  <option value="Tier I: Live-Deal Evaluation Pilot (Complimentary 48-Hour Forensic Stress Test)">
                    Tier I: Live-Deal Evaluation Pilot (Complimentary $0 • 48-Hour Forensic Stress Test)
                  </option>
                  <option value="Tier II: Single Forensic Sprint ($10K Pilot / $15K Standard)">
                    Tier II: Single-Transaction Forensic Sprint ($10,000 Pilot / $15,000 Standard • 60-Min SLA)
                  </option>
                  <option value="Tier III: Dedicated Desk Retainer ($150,000/Year | $37,500/Quarter)">
                    Tier III: Dedicated Desk Retainer ($37,500/Quarter | $150,000/Year • Up to 5 Active Transactions)
                  </option>
                </select>
              </div>

              {/* Row 4: Strategic Objective */}
              <div className="space-y-2 text-left">
                <label className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-bold">
                  What are you trying to determine? (Strategic Objective)
                </label>
                <textarea
                  name="strategicObjective"
                  rows={3}
                  placeholder="e.g., Audit downward Net Cash adjustment risk, verify Series A super-voting board control, or evaluate $500k willful breach termination fee exposure."
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--brand-cyan)] focus:outline-none font-sans"
                />
              </div>

              {/* Row 5: Work Email */}
              <div className="space-y-2 text-left">
                <label className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-bold">
                  Institutional Work Email <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="partner@firm.com"
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--brand-cyan)] focus:outline-none font-sans"
                />
              </div>

              {/* Institutional Anti-Bot Verification Challenge */}
              <InstitutionalSecurityChallenge 
                onVerify={(verified) => {
                  setIsSecurityVerified(verified);
                  if (verified) setErrorMessage('');
                }}
                isVerified={isSecurityVerified}
              />

              {errorMessage && (
                <div className="p-4 border border-rose-500/40 bg-rose-500/10 text-rose-400 font-mono text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-[var(--text-primary)] text-[var(--bg-primary)] py-4 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {formState === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    TRANSMITTING INTELLIGENCE SPECIFICATION...
                  </>
                ) : (
                  <>
                    Submit for Free Public Feasibility Check (1 Business Day) <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="font-mono text-[9px] text-[var(--text-tertiary)] text-center leading-relaxed">
                By submitting, you initiate a preliminary public-source feasibility check. All research is conducted exclusively using public SEC filings under zero-MNPI protocols. No payment is required until scope is mutually confirmed.
              </div>

            </form>
          </div>

          {/* Sidebar Institutional Assurances (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 space-y-4 text-left">
              <div className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase font-bold tracking-wider">
                COMMERCIAL MANDATE ARCHITECTURE
              </div>
              <div className="space-y-3 font-mono text-xs divide-y divide-[var(--border-color)]/60">
                <div className="pt-1">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[var(--text-primary)]">
                    <span>TIER I: LIVE EVALUATION</span>
                    <span className="text-emerald-400 font-bold">$0 (COMPLIMENTARY)</span>
                  </div>
                  <p className="text-[10px] text-[var(--text-secondary)] font-sans mt-0.5 leading-tight">
                    48-Hour Forensic Stress Test on 1 live public deal. 1-page clause card & 6-vector risk score.
                  </p>
                </div>

                <div className="pt-2.5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[var(--brand-cyan)]">
                    <span>TIER II: FORENSIC SPRINT</span>
                    <span className="text-[var(--text-primary)] font-bold">$10K - $15K</span>
                  </div>
                  <p className="text-[10px] text-[var(--text-secondary)] font-sans mt-0.5 leading-tight">
                    60-minute turnaround from filing. 16-chapter dossier, clause cards & adversarial directive testing.
                  </p>
                </div>

                <div className="pt-2.5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-purple-400">
                    <span>TIER III: DESK RETAINER</span>
                    <span className="text-[var(--text-primary)] font-bold">$37,500 / QTR</span>
                  </div>
                  <p className="text-[10px] text-[var(--text-secondary)] font-sans mt-0.5 leading-tight">
                    $150K/yr. Continuous watch-list coverage across up to 5 concurrent deals, delta alerts & priority SLA.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-4 text-left">
              <div className="font-mono text-[10px] text-emerald-400 uppercase font-bold tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> INFORMATION HYGIENE
              </div>
              <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono">✓</span>
                  <span><strong>Zero MNPI:</strong> Exclusively public EDGAR & regulatory filings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono">✓</span>
                  <span><strong>Zero Model Training:</strong> Submissions are never used to train AI models.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono">✓</span>
                  <span><strong>Cryptographic Provenance:</strong> SHA-256 state hashing and commit logs.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 border border-[var(--border-color)] hover:border-[var(--brand-cyan)]/50 bg-[var(--bg-secondary)]/30 space-y-3 text-left font-mono text-xs transition-colors shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-[var(--text-tertiary)] uppercase text-[9px] font-bold tracking-widest flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> DIRECT DESK DISPATCH
                </div>
                <span className="text-[8px] px-1.5 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold uppercase tracking-wider">
                  24/7 ACTIVE
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="text-[10px] text-[var(--text-secondary)]">
                  Direct inquiries to Transaction Desk:
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 bg-[var(--bg-primary)] border border-[var(--border-color)]">
                  <a 
                    href="mailto:desk@ravenadversary.com?subject=Institutional%20Transaction%20Inquiry%20//%20Raven%20Adversary"
                    className="text-[var(--brand-cyan)] hover:underline font-bold text-xs truncate"
                  >
                    desk@ravenadversary.com
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText('desk@ravenadversary.com');
                      setCopiedEmail(true);
                      setTimeout(() => setCopiedEmail(false), 2000);
                    }}
                    className="p-1 hover:text-[var(--text-primary)] text-[var(--text-tertiary)] transition-colors shrink-0"
                    title="Copy Direct Desk Email"
                    aria-label="Copy Direct Desk Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="text-[10px] text-[var(--text-tertiary)] leading-relaxed pt-1 border-t border-[var(--border-color)]/50">
                Monitored directly by Founder & Principal Analyst Abhishek Tanwar. For immediate 60-min SLA dispatch, submit your target ticker via the portal on this page.
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
