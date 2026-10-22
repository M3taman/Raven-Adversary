import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, ShieldCheck, Clock, CheckCircle2, ArrowRight, FileText, Check, AlertCircle, HelpCircle, Lock, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InstitutionalBuyerGuide } from '../components/InstitutionalBuyerGuide';
import { FeasibilityMatrix } from '../components/FeasibilityMatrix';

export default function TransactionReview() {
  const [selectedPlan, setSelectedPlan] = useState<'pilot' | 'sprint' | 'retainer'>('sprint');
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
          <Layers className="w-3 h-3" /> COMMERCIAL ENGAGEMENT // LIVE TRANSACTION DESK
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
          Institutional Commercial Architecture
        </h1>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl">
          An institutional-grade forensic audit of transactional leverage, latent contractual liabilities, and unpriced regulatory dependencies. Select a mandate tier or commission a live evaluation on an active public filing.
        </p>
      </div>

      {/* Pricing & 3-Tier Selection Grid */}
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        
        {/* Tier I: Complimentary Pilot */}
        <div 
          onClick={() => setSelectedPlan('pilot')}
          className={`p-7 border cursor-pointer transition-all flex flex-col justify-between space-y-6 relative ${
            selectedPlan === 'pilot'
              ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5 shadow-xl'
              : 'border-[var(--border-color)] bg-[var(--bg-secondary)]/20 hover:border-[var(--border-highlight)]'
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">
                TIER I // LIVE EVALUATION
              </span>
              <span className="px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] font-bold">
                COMPLIMENTARY
              </span>
            </div>

            <div>
              <div className="text-3xl font-bold font-heading text-[var(--text-primary)]">
                $0 <span className="text-xs font-mono font-normal text-[var(--text-tertiary)]">/ Pilot Evaluation</span>
              </div>
              <div className="text-[11px] font-mono text-emerald-400 mt-1 font-semibold">
                48-Hour Forensic Stress Test
              </div>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Complimentary stress test on one active public transaction (8-K / S-4 / PREM14A) selected by the Managing Director or Litigation Partner.
            </p>

            <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-mono pt-2">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> 
                <span>1-Page Contractual Clause Card (top 2 fault lines)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> 
                <span>Raven 6-Vector Risk Index quantitative baseline</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> 
                <span>Exact line-numbered SEC EDGAR coordinates</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> 
                <span>Zero financial commitment or payment info required</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[var(--border-color)]/60 font-mono text-[10px] text-[var(--brand-cyan)] font-bold uppercase tracking-wider flex items-center justify-between">
            <span>SELECT EVALUATION PILOT</span>
            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedPlan === 'pilot' ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]' : 'border-[var(--border-color)]'}`}>
              {selectedPlan === 'pilot' && <div className="w-1.5 h-1.5 bg-[var(--brand-cyan)] rounded-full"></div>}
            </div>
          </div>
        </div>

        {/* Tier II: Single Forensic Sprint */}
        <div 
          onClick={() => setSelectedPlan('sprint')}
          className={`p-7 border cursor-pointer transition-all flex flex-col justify-between space-y-6 relative ${
            selectedPlan === 'sprint'
              ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 shadow-2xl ring-1 ring-[var(--brand-cyan)]'
              : 'border-[var(--border-color)] bg-[var(--bg-secondary)]/20 hover:border-[var(--border-highlight)]'
          }`}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[var(--brand-cyan)] text-black font-mono text-[9px] font-bold uppercase tracking-widest shadow">
            MOST POPULAR MANDATE
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--brand-cyan)]">
                TIER II // FORENSIC SPRINT
              </span>
              <span className="px-2 py-0.5 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/20 text-[var(--brand-cyan)] font-mono text-[9px] font-bold">
                60-MIN RAPID SLA
              </span>
            </div>

            <div>
              <div className="text-3xl font-bold font-heading text-[var(--text-primary)]">
                $15,000 <span className="text-xs font-mono font-normal text-[var(--text-tertiary)]">/ Deal Mandate</span>
              </div>
              <div className="text-[11px] font-mono text-[var(--brand-cyan)] mt-1 font-semibold">
                $10,000 First-Time Pilot Rate
              </div>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Rapid 60-minute turnaround from CIK/EDGAR filing. Full 8-part forensic review package with complete adversarial scenario testing.
            </p>

            <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-mono pt-2">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[var(--brand-cyan)] shrink-0 mt-0.5" /> 
                <span>16-Chapter Statutory Dossier & complete audit registry</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[var(--brand-cyan)] shrink-0 mt-0.5" /> 
                <span>Full Contractual Clause Card Deck (triggers & amplifiers)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[var(--brand-cyan)] shrink-0 mt-0.5" /> 
                <span>Custom Adversarial Directive Testing & scenario modeling</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[var(--brand-cyan)] shrink-0 mt-0.5" /> 
                <span>Page-One Boardroom MD Passthrough Brief</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[var(--brand-cyan)] shrink-0 mt-0.5" /> 
                <span>Immutable SHA-256 Commit Layer audit record</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[var(--border-color)]/60 font-mono text-[10px] text-[var(--brand-cyan)] font-bold uppercase tracking-wider flex items-center justify-between">
            <span>SELECT FORENSIC SPRINT</span>
            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedPlan === 'sprint' ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]' : 'border-[var(--border-color)]'}`}>
              {selectedPlan === 'sprint' && <div className="w-1.5 h-1.5 bg-black rounded-full"></div>}
            </div>
          </div>
        </div>

        {/* Tier III: Dedicated Desk Retainer */}
        <div 
          onClick={() => setSelectedPlan('retainer')}
          className={`p-7 border cursor-pointer transition-all flex flex-col justify-between space-y-6 relative ${
            selectedPlan === 'retainer'
              ? 'border-purple-400 bg-purple-500/10 shadow-xl ring-1 ring-purple-400'
              : 'border-[var(--border-color)] bg-[var(--bg-secondary)]/20 hover:border-[var(--border-highlight)]'
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-purple-400">
                TIER III // DESK RETAINER
              </span>
              <span className="px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-300 font-mono text-[9px] font-bold">
                5 ACTIVE DEALS
              </span>
            </div>

            <div>
              <div className="text-3xl font-bold font-heading text-[var(--text-primary)]">
                $150,000 <span className="text-xs font-mono font-normal text-[var(--text-tertiary)]">/ Year</span>
              </div>
              <div className="text-[11px] font-mono text-purple-300 mt-1 font-semibold">
                $37,500 / Quarter Billed
              </div>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Continuous watch-list coverage across up to 5 concurrent live transactions for hedge funds, litigation desks, and M&A advisory teams.
            </p>

            <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-mono pt-2">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /> 
                <span>Active coverage on up to 5 concurrent live transactions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /> 
                <span>Real-time filing delta alerts (PREM14A to DEFM14A, 8-K redlines)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /> 
                <span>Direct senior analyst redline & litigation consultation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /> 
                <span>Unlimited custom adversarial directive testing runs</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /> 
                <span>Priority 60-min rapid turnaround guarantee on all drops</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[var(--border-color)]/60 font-mono text-[10px] text-purple-400 font-bold uppercase tracking-wider flex items-center justify-between">
            <span>SELECT DESK RETAINER</span>
            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedPlan === 'retainer' ? 'border-purple-400 bg-purple-400' : 'border-[var(--border-color)]'}`}>
              {selectedPlan === 'retainer' && <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>}
            </div>
          </div>
        </div>

      </div>

      {/* Commercial Terms, Scope Boundaries & Exclusions */}
      <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 space-y-6">
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]">
            Institutional Scope, Eligibility & Engagement Standards
          </div>
          <span className="text-[10px] font-mono text-[var(--brand-cyan)] font-bold">ZERO MNPI MANDATE</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
          <div className="space-y-2">
            <div className="text-[var(--text-primary)] font-bold uppercase tracking-wider text-[11px]">
              01 // ELIGIBLE TRANSACTIONS
            </div>
            <p>
              U.S. & cross-border public mergers (S-4 / F-4 / DEFM14A), hostile proxy battles, de-SPAC combinations, bank holding company integrations crossing regulatory asset tiers, and public chapter 11 reorganizations.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-[var(--text-primary)] font-bold uppercase tracking-wider text-[11px]">
              02 // INCLUDED IN SPRINT
            </div>
            <p>
              All 8 parts of the review package, verbatim SEC citations with line-numbered accessions, 7-minute executive audio/video walkthrough, SHA-256 commit hash, and a 7-day post-delivery evidentiary challenge window.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-[var(--text-primary)] font-bold uppercase tracking-wider text-[11px]">
              03 // OPERATIONAL BOUNDARIES
            </div>
            <p>
              Exclusively public regulatory evidence. Raven does not enter virtual data rooms (VDRs) or accept MNPI. Raven delivers transaction pressure intelligence and adversarial scenario modeling, not statutory legal opinions or audit attestations.
            </p>
          </div>
        </div>

        {/* 3-Step Intake Bar */}
        <div className="pt-4 border-t border-[var(--border-color)] grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-3 bg-[var(--bg-primary)] border border-[var(--border-color)]">
            <span className="text-[var(--brand-cyan)] font-bold block mb-1">STEP 1: FEASIBILITY CHECK</span>
            Free public filing check within 1 business day. Zero payment required.
          </div>
          <div className="p-3 bg-[var(--bg-primary)] border border-[var(--border-color)]">
            <span className="text-[var(--brand-cyan)] font-bold block mb-1">STEP 2: SCOPE AGREEMENT</span>
            Confirm focal inquiry priorities. Fixed-fee invoice ($15,000 Sprint / $37,500 Quarterly Retainer) with zero hidden billables.
          </div>
          <div className="p-3 bg-[var(--bg-primary)] border border-[var(--border-color)]">
            <span className="text-[var(--brand-cyan)] font-bold block mb-1">STEP 3: 60-MIN RAPID DELIVERY</span>
            Full forensic dossier (Brief, Clause Card, 6-Vector Risk Index, 16-Chapter Citation Registry) delivered within 60 minutes.
          </div>
        </div>
      </div>

      {/* Feasibility Framework & Scope Boundaries */}
      <FeasibilityMatrix />

      {/* 10 Institutional Buyer Questions */}
      <InstitutionalBuyerGuide />

      {/* Order Intake Form */}
      <div className="border border-[var(--border-color)] bg-[var(--bg-primary)] p-8 md:p-12 space-y-8" id="intake-form">
        <div className="space-y-2 border-b border-[var(--border-color)] pb-6">
          <div className="font-mono text-xs text-[var(--brand-cyan)] uppercase tracking-widest font-bold">
            PRELIMINARY INQUIRY // PUBLIC-SOURCE FEASIBILITY CHECK
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
            Check Transaction Feasibility
          </h2>
          <p className="text-sm text-[var(--text-secondary)]">
            Submit public transaction identifiers. Our desk verifies public filing coverage and confirms transaction feasibility within 1 business day at zero cost.
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
              {selectedPlan === 'pilot' && 'Submit for Complimentary 48-Hour Live Evaluation Pilot ($0)'}
              {selectedPlan === 'sprint' && 'Commission Single-Deal Forensic Sprint ($10K Pilot / $15K Standard)'}
              {selectedPlan === 'retainer' && 'Request Dedicated Desk Retainer ($37,500/Qtr • 5 Concurrent Deals)'}
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-center font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider">
              {selectedPlan === 'pilot' 
                ? 'Zero financial obligation. 48-hour SLA partner delivery. Strictly public SEC filings under zero-MNPI protocols.'
                : 'Zero payment due now. Formal fixed-fee mandate agreement issued only after mutual scope & conflicts clearance.'}
            </div>
          </form>
        )}
      </div>

    </div>
  );
}
