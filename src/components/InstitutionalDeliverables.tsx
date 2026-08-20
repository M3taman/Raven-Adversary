import React, { useState } from 'react';
import { Layers, FileCheck, GitFork, ArrowRight, ShieldCheck, Check, Clock, Calendar, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Deliverable {
  number: string;
  name: string;
  format: string;
  description: string;
  primaryValue: string;
}

const DELIVERABLES: Deliverable[] = [
  {
    number: "01",
    name: "Transaction State Baseline",
    format: "Executive Matrix",
    description: "Reconstruction of core transaction economics, consideration structures, exchange ratio collars, and debt-assumed profiles from primary S-4 / DEFM14A filings.",
    primaryValue: "Eliminates ambiguity on baseline economic commitments."
  },
  {
    number: "02",
    name: "Forensic Evidence Ledger",
    format: "Verifiable Claim Ledger",
    description: "Every material fact, balance sheet line item, and contractual right mapped to precise SEC accession numbers, filing dates, and page coordinates.",
    primaryValue: "100% auditable citation trail for legal and investment committees."
  },
  {
    number: "03",
    name: "Critical Clause Cards",
    format: "Structural Analysis Dossier",
    description: "Deep-dive analysis of MAE carveouts, non-solicitation, fiduciary outs, matching rights, regulatory ticking fees, and post-closing indemnity survival.",
    primaryValue: "Uncovers where contractual leverage actually rests if conditions deteriorate."
  },
  {
    number: "04",
    name: "Pressure Propagation Map",
    format: "Node Dependency Topology",
    description: "Multi-variable dependency network illustrating how balance sheet stress, regulatory thresholds, and covenants cascade into pro-forma capital ratios.",
    primaryValue: "Models 2nd and 3rd-order consequences before they are priced in."
  },
  {
    number: "05",
    name: "Adversarial Strategy Memo",
    format: "Confidential Red-Team Brief",
    description: "Stress-tested adversarial assessment detailing how a hostile acquirer, activist investor, or regulatory body would exploit transaction vulnerabilities.",
    primaryValue: "Exposes tactical counterparty attack vectors and leverage points."
  },
  {
    number: "06",
    name: "Executive Decision Brief",
    format: "C-Suite Strategic Summary",
    description: "Synthesized executive briefing highlighting the 3-5 pivotal decision gates, renegotiation levers, and risk-mitigation covenants.",
    primaryValue: "Board-ready clarity on actionable negotiation advantages."
  },
  {
    number: "07",
    name: "7-Minute Boardroom Walkthrough",
    format: "Structured Interactive Briefing",
    description: "Fast, high-conviction verbal and visual presentation protocol designed for investment committees, board members, and transaction partners.",
    primaryValue: "Conveys complex transaction fragility with extreme brevity and proof."
  },
  {
    number: "08",
    name: "Raven Commit Layer Artifact",
    format: "Immutable Audit Record",
    description: "Cryptographically verified, versioned audit trail preserving all source excerpts, claim statuses, and analytical hypotheses as of the analysis timestamp.",
    primaryValue: "Permanent institutional record ensuring zero revisionist drift."
  }
];

export function InstitutionalDeliverables() {
  const [selectedTier, setSelectedTier] = useState<'standard' | 'expedited'>('standard');

  return (
    <section className="py-24 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/10" id="deliverables">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-color)] pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30 font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
              <Layers className="w-3 h-3" /> COMMERCIAL ENGAGEMENT // CORE DELIVERABLE
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
              The 8-Part Transaction Review Package
            </h2>
            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
              When millions of dollars of enterprise value depend on contract-state nuances, Raven delivers a complete, forensic audit of transaction leverage and unpriced exposure within 48 to 72 hours.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 font-mono text-xs">
            <div className="text-[var(--brand-cyan)] font-bold">// STANDARD ENGAGEMENT: $10,000</div>
            <div className="text-[var(--text-tertiary)]">EXPEDITED (24-48 HR): $25,000</div>
          </div>
        </div>

        {/* 8 Deliverables Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DELIVERABLES.map((deliv) => (
            <div
              key={deliv.number}
              className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--brand-cyan)]/50 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--brand-cyan)]">
                    PART {deliv.number}
                  </span>
                  <span className="text-[8px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider border border-[var(--border-color)] px-1.5 py-0.5">
                    {deliv.format}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold font-heading text-[var(--text-primary)] group-hover:text-[var(--brand-cyan)] transition-colors">
                  {deliv.name}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {deliv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)]/60 text-[10px] font-mono text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors">
                <span className="text-[var(--brand-cyan)] font-bold block mb-0.5">PRIMARY VALUE:</span>
                {deliv.primaryValue}
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Engagement Options Box */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch pt-6">
          
          {/* Option 1: Standard Review */}
          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] flex flex-col justify-between space-y-8 relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest font-bold">
                  STANDARD TRANSACTION REVIEW
                </span>
                <span className="px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] font-mono text-[9px] text-[var(--text-secondary)]">
                  72-HOUR DELIVERY
                </span>
              </div>

              <div className="text-3xl font-bold font-heading text-[var(--text-primary)]">
                $10,000 <span className="text-xs font-normal font-mono text-[var(--text-tertiary)]">/ Live Transaction</span>
              </div>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Comprehensive 8-part forensic intelligence package for standard M&A transactions, proxy contests, or major capital re-structurings with 72-hour turnaround.
              </p>

              <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-mono">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> Full 8-part intelligence dossier
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> Complete SEC filing evidence ledger
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> Adversarial strategy and leverage memo
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> 7-Minute Boardroom Walkthrough delivery
                </li>
              </ul>
            </div>

            <Link
              to="/transaction-review"
              className="w-full py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] text-center font-mono text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Order Standard Review ($10K)
            </Link>
          </div>

          {/* Option 2: Expedited Strategic Review */}
          <div className="p-8 border border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5 flex flex-col justify-between space-y-8 relative">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[var(--brand-cyan)] text-black font-mono text-[9px] font-bold uppercase tracking-widest">
              PRIORITY DESK
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-widest font-bold">
                  EXPEDITED TRANSACTION REVIEW
                </span>
                <span className="px-2 py-0.5 bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/30 font-mono text-[9px] text-[var(--brand-cyan)] font-bold">
                  24-48 HOUR SPRINT
                </span>
              </div>

              <div className="text-3xl font-bold font-heading text-[var(--text-primary)]">
                $25,000 <span className="text-xs font-normal font-mono text-[var(--text-tertiary)]">/ Live Transaction</span>
              </div>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Immediate dedicated turnaround for active hostile bids, ticking-fee deadlines, breaking proxy developments, or imminent board votes.
              </p>

              <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-mono">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> 24-48 hour dedicated execution desk
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> Direct interactive briefing with executive leads
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> Live amendment tracking & dynamic updates
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> Custom red-team tactical defense scenarios
                </li>
              </ul>
            </div>

            <Link
              to="/transaction-review"
              className="w-full py-3.5 bg-[var(--brand-cyan)] text-black text-center font-mono text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Order Expedited Review ($25K)
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
