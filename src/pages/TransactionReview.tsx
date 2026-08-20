import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, ShieldCheck, Clock, CheckCircle2, ArrowRight, FileText, Check, AlertCircle, HelpCircle, Lock, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TransactionReview() {
  const [selectedPlan, setSelectedPlan] = useState<'standard' | 'expedited'>('standard');
  const [tickerOrCik, setTickerOrCik] = useState('');
  const [firmName, setFirmName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [transactionType, setTransactionType] = useState('M&A Merger / Acquisition');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `RAV-TRX-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(generatedId);
    setIsSubmitted(true);
  };

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto space-y-20">
      
      {/* Top Breadcrumb & Header */}
      <div className="space-y-4 border-b border-[var(--border-color)] pb-10">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
          <Layers className="w-3 h-3" /> COMMERCIAL ENGAGEMENT // LIVE TRANSACTION REVIEW
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
          The 8-Part Transaction Review Package
        </h1>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl">
          An institutional-grade forensic audit of transactional leverage, latent contractual liabilities, and unpriced regulatory dependencies delivered within 48 to 72 hours.
        </p>
      </div>

      {/* Pricing & Tier Selection Grid */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        
        {/* Standard Review Card */}
        <div 
          onClick={() => setSelectedPlan('standard')}
          className={`p-8 border cursor-pointer transition-all flex flex-col justify-between space-y-6 ${
            selectedPlan === 'standard'
              ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5 shadow-lg'
              : 'border-[var(--border-color)] bg-[var(--bg-secondary)]/20 hover:border-[var(--border-highlight)]'
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]">
                STANDARD ENGAGEMENT
              </span>
              <span className="px-2 py-0.5 border border-[var(--border-color)] bg-[var(--bg-primary)] font-mono text-[9px] text-[var(--text-secondary)]">
                72-HOUR SPRINT
              </span>
            </div>

            <div className="text-4xl font-bold font-heading text-[var(--text-primary)]">
              $10,000 <span className="text-xs font-mono font-normal text-[var(--text-tertiary)]">/ Transaction</span>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Complete 8-part forensic intelligence dossier for standard M&A combinations, tender offers, and proxy solicitations.
            </p>

            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] font-mono pt-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--brand-cyan)]" /> Full 8-part forensic intelligence dossier
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--brand-cyan)]" /> Complete SEC filing evidence ledger with page citations
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--brand-cyan)]" /> Red-team adversarial leverage and counter-tactic memo
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--brand-cyan)]" /> 7-Minute Boardroom Walkthrough delivery
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--brand-cyan)]" /> Immutable Raven Commit Layer audit record
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[var(--border-color)]/60 font-mono text-[10px] text-[var(--brand-cyan)] font-bold uppercase tracking-wider flex items-center justify-between">
            <span>SELECT STANDARD REVIEW</span>
            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedPlan === 'standard' ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]' : 'border-[var(--border-color)]'}`}>
              {selectedPlan === 'standard' && <div className="w-1.5 h-1.5 bg-black rounded-full"></div>}
            </div>
          </div>
        </div>

        {/* Expedited Priority Desk Card */}
        <div 
          onClick={() => setSelectedPlan('expedited')}
          className={`p-8 border cursor-pointer transition-all flex flex-col justify-between space-y-6 relative ${
            selectedPlan === 'expedited'
              ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 shadow-xl'
              : 'border-[var(--border-color)] bg-[var(--bg-secondary)]/20 hover:border-[var(--border-highlight)]'
          }`}
        >
          <div className="absolute top-0 right-0 px-3 py-1 bg-[var(--brand-cyan)] text-black font-mono text-[9px] font-bold uppercase tracking-widest">
            PRIORITY DESK
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--brand-cyan)]">
                EXPEDITED STRATEGIC DESK
              </span>
              <span className="px-2 py-0.5 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/20 font-mono text-[9px] text-[var(--brand-cyan)] font-bold">
                24-48 HOUR SPRINT
              </span>
            </div>

            <div className="text-4xl font-bold font-heading text-[var(--text-primary)]">
              $25,000 <span className="text-xs font-mono font-normal text-[var(--text-tertiary)]">/ Transaction</span>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Dedicated rapid-response execution for live hostile tenders, contested shareholder votes, and urgent closing condition disputes.
            </p>

            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] font-mono pt-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--brand-cyan)]" /> 24 to 48-hour expedited turnaround
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--brand-cyan)]" /> Direct interactive briefing with Raven transaction leads
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--brand-cyan)]" /> Real-time tracking of subsequent S-4/A and 8-K amendments
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--brand-cyan)]" /> Custom red-team scenario modeling for hostile counter-bids
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--brand-cyan)]" /> Complete 8-part dossier + immutable commit record
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[var(--border-color)]/60 font-mono text-[10px] text-[var(--brand-cyan)] font-bold uppercase tracking-wider flex items-center justify-between">
            <span>SELECT EXPEDITED DESK</span>
            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedPlan === 'expedited' ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]' : 'border-[var(--border-color)]'}`}>
              {selectedPlan === 'expedited' && <div className="w-1.5 h-1.5 bg-black rounded-full"></div>}
            </div>
          </div>
        </div>

      </div>

      {/* Order Intake Form */}
      <div className="border border-[var(--border-color)] bg-[var(--bg-primary)] p-8 md:p-12 space-y-8">
        <div className="space-y-2 border-b border-[var(--border-color)] pb-6">
          <div className="font-mono text-xs text-[var(--brand-cyan)] uppercase tracking-widest font-bold">
            TRANSACTION INTAKE & CONFLICT CHECK PROTOCOL
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
            Initiate Transaction Intelligence Request
          </h2>
          <p className="text-sm text-[var(--text-secondary)]">
            Submit public transaction identifiers. Our desk verifies public filing coverage and confirms zero conflicting mandates within 2 hours.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 border border-emerald-500/30 bg-emerald-500/5 space-y-6 text-center">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center rounded-full">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading">
                Transaction Intake Acknowledged
              </h3>
              <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto">
                Your request has been routed to our transaction execution team. You will receive conflict clearance and scope confirmation at <span className="text-[var(--text-primary)] font-bold">{workEmail}</span>.
              </p>
            </div>
            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] inline-block font-mono text-xs text-[var(--brand-cyan)]">
              AUDIT REFERENCE ID: {referenceId}
            </div>
            <div className="pt-2">
              <Link to="/" className="text-xs font-mono text-[var(--text-tertiary)] hover:text-[var(--text-primary)] uppercase underline">
                Return to Homepage
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-bold">
                  Target Company Ticker / CIK / Transaction Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. FSEA, IMAQ, or First Bancorp / First Carolina"
                  value={tickerOrCik}
                  onChange={(e) => setTickerOrCik(e.target.value)}
                  className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:border-[var(--brand-cyan)] focus:outline-none font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-bold">
                  Transaction Type *
                </label>
                <select
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                  className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:border-[var(--brand-cyan)] focus:outline-none font-mono"
                >
                  <option>M&A Merger / Acquisition (All-Stock or Cash/Stock)</option>
                  <option>Shareholder Activism & Proxy Contest Defense</option>
                  <option>De-SPAC Business Combination</option>
                  <option>Bank Merger & Regulatory Threshold Transition</option>
                  <option>Hostile Tender Offer / Break-Fee Dispute</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-bold">
                  Institutional Firm Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Citadel, Morgan Stanley, Wachtell Lipton"
                  value={firmName}
                  onChange={(e) => setFirmName(e.target.value)}
                  className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:border-[var(--brand-cyan)] focus:outline-none font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-bold">
                  Institutional Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@institution.com"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:border-[var(--brand-cyan)] focus:outline-none font-mono"
                />
              </div>

            </div>

            <div className="space-y-2">
              <label className="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-bold">
                Specific Strategic Inquiries / Key Focus Areas (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Specify any particular clauses, covenants, voting blocs, or regulatory thresholds of interest..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:border-[var(--brand-cyan)] focus:outline-none font-mono"
              />
            </div>

            {/* Zero MNPI and Public Record Covenant Notice */}
            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/40 flex items-start gap-3 text-xs text-[var(--text-secondary)]">
              <Lock className="w-4 h-4 text-[var(--brand-cyan)] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[var(--text-primary)]">Public Record Guarantee:</span> Raven Adversary relies exclusively on public SEC filings, disclosure schedules, call reports, and court records. Do not provide non-public or confidential deal materials.
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
            >
              Submit Intake for {selectedPlan === 'standard' ? 'Standard Review ($10,000)' : 'Expedited Desk ($25,000)'} <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
