import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, Target, FileText } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: "TWO-CCM",
    title: "TWO / CCM Merger",
    target: "Two Harbors Investment Corp.",
    exposure: "$75,400,000",
    exposureLabel: "TRANSACTION VALUE AT RISK",
    trapdoor: "The 'UWM Termination Fee Refund' ($25.4M) plus the 'Company Termination Fee' ($50.0M) creates an aggregate $75.4M exit barrier, representing 6.36% of the common equity value, effectively shielding the deal from superior bidding pressure through a non-standard capital reimbursement mechanism.",
    threats: [
      { name: "The $75.4M Structural Moat", desc: "Combination of standard termination fee and unique UWM fee refund doubles the cost of a superior proposal, nearly twice the 3% market norm." },
      { name: "State Permit Binary Failure", desc: "Section 7.3(d) requires 100% permit completion. Failure of a single state (e.g., NY or CA) to approve allows CCM to walk while TWO is locked into the 'Outside Date'." },
      { name: "280G Excise Tax Absorption", desc: "The 'best net' provision shifts economic burden of nondeductible executive compensation to the post-merger entity, reducing available working capital." }
    ]
  },
  {
    id: "PEBO-CZNL",
    title: "PEBO / CZNL Acquisition",
    target: "Peoples Bancorp",
    exposure: "$78,300,000",
    exposureLabel: "UNFUNDED LIQUIDITY EXPOSURE",
    trapdoor: "Pro Forma asset scale of $9.73B leaves a critical $270M organic growth buffer before triggering the $10B regulatory Complexity Gap, invoking Durbin Amendment fee caps and heightened Dodd-Frank supervision without offset mechanisms.",
    threats: [
      { name: "Durbin Amendment Fee Compression", desc: "Target is dangerously close to the $10B asset threshold which will structurally impair interchange fee revenue." },
      { name: "Unfunded Overdraft Commitment Liability", desc: "The bank maintains $78.3 million in unfunded overdraft commitments, presenting an unhedged liquidity drain during macroeconomic stress." },
      { name: "Commercial Banking Succession Disruption", desc: "The planned April 2026 retirement of the Commercial Banking lead risks the 62.1% commercial loan portfolio." }
    ]
  },
  {
    id: "ZSQR-BSG",
    title: "Z Squared / BSG Merger",
    target: "Z Squared Inc.",
    exposure: "$677,212,011",
    exposureLabel: "EQUITY LIQUIDITY AT RISK",
    trapdoor: "Execution Bottleneck: The 5% Average Daily Trading Volume (ADTV) leak-out cap creates a structural impossibility for the majority shareholder to utilize its 1/18th monthly liquidity right (approx. 2.3M shares) unless the 10-day ADTV exceeds 46M shares—a 133x increase over the required float-adjusted liquidity for a thin-float reverse merger.",
    threats: [
      { name: "Regulatory 'Acting in Concert' Reclassification", desc: "Coordinated selling by BSG members upon breaching the $16.31 floor could trigger SEC Rule 13d-5(b)(1) 'group' status, creating unforeseen Section 16(b) short-swing profit liabilities for individual members." },
      { name: "Technical Default of Leak-Out Provisions", desc: "The mathematical friction between the 1/18th monthly right and the 5% ADTV cap leads to a structural breach if members attempt to sell their full monthly allotment in a low-liquidity environment." },
      { name: "Short Sale Prohibition Enforcement Gap", desc: "The prohibition on short selling by transferees is contractually stated but lacks a physical enforcement mechanism (e.g., restrictive legends or block trading controls) once shares are distributed to individual member accounts." }
    ]
  },
  {
    id: "PROSPERITY-STELLAR",
    title: "Prosperity / Stellar Merger",
    target: "Prosperity Bancshares",
    exposure: "$30,170,000",
    exposureLabel: "DAY-ONE CASH DRAIN",
    trapdoor: "The 19.9% Prosperity Stock Consideration Cap (Section 1.5(b)) acts as an uncapped liquidity liability, potentially forcing a massive cash gap-payment if Prosperity's stock price continues its 5.2% decline relative to the fixed exchange ratio.",
    threats: [
      { name: "Unfunded Executive Liquidity Drain", desc: "Full single-trigger vesting of Stellar Equity Awards, specifically the 200% multiplier on 2024 Performance Units, creates a $27.18M liability without long-term retention hooks." },
      { name: "Regulatory Liquidity Trap", desc: "The 19.9% share issuance cap to avoid NYSE approval forces a cash-settlement of any excess value, creating a liquidity squeeze if Prosperity shares depreciate further." },
      { name: "D&O Insurance Gap", desc: "The 300% premium cap on D&O insurance forces Prosperity to self-insure legacy Stellar board risks if insurance market pricing exceeds the threshold." }
    ]
  },
  {
    id: "UCB-PEACH",
    title: "UCB / Peach State Merger",
    target: "United Community Banks",
    exposure: "$2,379,800,000",
    exposureLabel: "CONTINGENT DEPOSIT RISK",
    trapdoor: "Contingent liquidity drain stemming from the GENIUS Act loophole threatening up to 10% of the deposit base.",
    threats: [
      { name: "GENIUS Act Liquidity Flight", desc: "Regulatory loophole allows stablecoins to pay interest, threatening 10% of industry deposits." },
      { name: "Integration Cost Leakage", desc: "Non-operating charges for M&A integration reached $10.2M in 2025, demonstrating integration friction." },
      { name: "Governance Vacuum", desc: "Vanguard's internal realignment leaves a 0% beneficial ownership gap, concentrating voting power." }
    ]
  }
];

export default function CaseStudies() {
  const [activeCaseId, setActiveCaseId] = useState(CASE_STUDIES[0].id);

  const activeCase = CASE_STUDIES.find(c => c.id === activeCaseId) || CASE_STUDIES[0];

  return (
    <section className="py-24 px-6 relative border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/10" id="case-studies">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--brand-cyan)]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[11px] uppercase tracking-widest mb-4">
            <FileText className="w-3 h-3" />
            Live Transaction Coverage
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Sample Intelligence</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl text-lg">
            Explore anonymized Raven intelligence reports showcasing structural and financial exposures identified across recent high-profile transactions. All intel is completely derived from public SEC EDGAR filings.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            {CASE_STUDIES.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveCaseId(study.id)}
                className={`p-4 text-left border rounded transition-all duration-300 ${
                  activeCaseId === study.id 
                    ? 'bg-[var(--glass-panel)] border-[var(--brand-cyan)] shadow-[0_0_15px_rgba(0,212,255,0.1)]' 
                    : 'glass-card hover:border-[var(--border-highlight)]'
                }`}
              >
                <div className="font-mono text-[10px] tracking-widest uppercase mb-1 opacity-70">
                  {study.target}
                </div>
                <div className={`font-bold font-heading ${activeCaseId === study.id ? 'text-[var(--brand-cyan)]' : 'text-[var(--text-primary)]'}`}>
                  {study.title}
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCaseId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-lg overflow-hidden border border-[var(--border-color)]"
              >
                <div className="p-6 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-xs text-[var(--text-tertiary)] mb-1">AUDIT TARGET</div>
                    <div className="text-xl font-bold font-heading">{activeCase.target}</div>
                  </div>
                  <div className="md:text-right">
                    <div className="font-mono text-xs text-[var(--brand-cyan)] tracking-widest mb-1">{activeCase.exposureLabel}</div>
                    <div className="text-3xl font-mono font-bold text-[var(--text-primary)] glow-cyan inline-block">
                      {activeCase.exposure}
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-8">
                  <div className="relative border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 p-6 rounded-md overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[var(--brand-cyan)]"></div>
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle className="w-5 h-5 text-[var(--brand-cyan)]" />
                      <h3 className="font-mono text-sm font-bold text-[var(--brand-cyan)] tracking-widest uppercase">
                        Critical Structural Exposure
                      </h3>
                    </div>
                    <p className="text-[var(--text-primary)] leading-relaxed font-medium italic">
                      "{activeCase.trapdoor}"
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Target className="w-5 h-5 text-[var(--brand-purple)]" />
                      <h3 className="font-bold text-lg font-heading">Primary Exposure Vectors</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {activeCase.threats.map((threat, idx) => (
                        <div key={idx} className="bg-[var(--bg-primary)]/50 border border-[var(--border-color)] p-5 rounded hover:border-[var(--brand-cyan)]/50 transition-colors">
                          <h4 className="font-bold mb-2 font-heading">{threat.name}</h4>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{threat.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
