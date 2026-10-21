import React from 'react';
import { Scale, ShieldAlert, Gavel, FileCheck, ArrowRight, BookOpen, AlertOctagon, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LitigationArbitrageDesk() {
  const TARGET_VECTORS = [
    {
      title: 'Broken MFW Dual-Cleansing & Entire Fairness Triggers',
      statutoryBasis: 'Kahn v. M&F Worldwide Corp. // DGCL § 144',
      description: 'Detects defective minority voting conditions where targets define approvals on a "votes cast" basis rather than a majority of all outstanding unaffiliated shares (e.g. Penske Automotive PAG) or omit the condition entirely in Up-C rollover deals (e.g. Baldwin Group BWIN), triggering Delaware Entire Fairness review at the pleading stage.',
      targetLitigators: 'Plaintiff Fiduciary Counsel & Special Committee Defense'
    },
    {
      title: 'Tax Receivable Agreement (TRA) & Side-Car Cash Windfalls',
      statutoryBasis: 'Schedule 13E-3 Disclosures // Form 8-K Ex-10.1',
      description: 'Exposes accelerated lump-sum cash payouts to management insiders under historical TRAs concurrent with closing (e.g. Baldwin Group $298.45M TRA payout cap). Discloses disparate economic incentives where insiders participate in private topco equity while public float is cashed out.',
      targetLitigators: 'Shareholder Class Action & Derivative Litigators'
    },
    {
      title: 'Truncated Revlon Auctions & Post-Signing Frictional Locks',
      statutoryBasis: 'Revlon, Inc. v. MacAndrews & Forbes Holdings // Section 5.03',
      description: 'Isolates premature auction compression—such as 60-minute final blind auction windows (e.g. Integer Holdings ITGR)—coupled with aggressive non-solicitation covenants, asymmetrical match periods (5-day initial / 3-day revision), and outsized per-share termination fee drag ($4.53/share).',
      targetLitigators: 'Merger Arbitrage PMs & Interloper Bidders'
    },
    {
      title: 'Several (Non-Joint) Sponsor Guarantee Gaps & DGCL § 251 Vote Drag',
      statutoryBasis: 'DGCL § 251 // Section 8.03(c) Parent Termination Fees',
      description: 'Uncovers non-fungible several liability splits across private equity and strategic corporate co-investors (e.g. Option Care Health OPCH $291.93M fee split between CD&R and McKesson). Models statutory voting math where uninstructed broker non-votes operate strictly as votes AGAINST the merger.',
      targetLitigators: 'Event-Driven Risk Arbitrage & Appraisal Desks (DGCL § 262)'
    }
  ];

  return (
    <section className="py-16 border-b border-[var(--border-color)] bg-[var(--bg-primary)] relative overflow-hidden">
      
      {/* Background ambient gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--brand-purple)]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--brand-cyan)]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-indigo-950/40 border border-indigo-500/30 text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest mb-3">
            <Scale className="w-3.5 h-3.5" /> Fiduciary Litigation & Appraisal Arbitrage
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] font-heading">
            Built for M&A Litigators, Appraisal Desks (DGCL § 262), and Event-Driven Funds
          </h2>
          <p className="text-xs sm:text-base text-[var(--text-secondary)] mt-2 font-sans leading-relaxed">
            When a preliminary proxy (PREM14A), tender offer, or Schedule 13E-3 hits EDGAR, counsel has a narrow 14-to-21 day window to interrogate procedural fairness. Raven automatically parses contractual text into evidentiary trial exhibits within 60 minutes.
          </p>
        </div>

        {/* 4 Vector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {TARGET_VECTORS.map((vector, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-indigo-500/40 transition-all text-left space-y-4 shadow-xl relative group"
            >
              <div className="flex items-center justify-between border-b border-[var(--border-color)]/60 pb-3">
                <span className="text-[10px] font-mono font-bold text-indigo-400 tracking-wider">
                  STATUTORY BASIS: {vector.statutoryBasis}
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-800 text-[var(--text-tertiary)] uppercase font-semibold">
                  Vector 0{idx + 1}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-heading">
                {vector.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                {vector.description}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--brand-cyan)] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {vector.targetLitigators}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner: Litigation Response SLA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-[var(--card-bg)] to-slate-900/60 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-2xl">
          <div className="space-y-1.5">
            <div className="font-mono text-xs text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-2">
              <Gavel className="w-4 h-4" /> 60-Minute Turnaround for Active SEC Filing Drops
            </div>
            <div className="text-lg sm:text-xl font-bold text-[var(--text-primary)] font-heading">
              Need an Urgent 16-Chapter Forensic Risk Dossier for an Active S-4 or PREM14A?
            </div>
            <p className="text-xs text-[var(--text-secondary)] max-w-2xl font-sans">
              Transmit target CIK or transaction identifier. The Raven Desk delivers a complete 16-chapter forensic citation register, 2-page executive risk brief, and contractual clause cards for <span className="font-bold text-white">$2,499 Flat Fee</span> within 60 minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              to="/request-assessment"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-[var(--brand-cyan)] text-white text-xs sm:text-sm font-semibold tracking-wide hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
            >
              <span>Order $2,499 Single Dossier</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
