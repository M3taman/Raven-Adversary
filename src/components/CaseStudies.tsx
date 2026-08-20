import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, AlertTriangle, GitBranch, Network, ShieldAlert, Cpu, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const CASE_STUDIES = [
  {
    id: "nims-gravitics",
    code: "NIMS-GVTX-2026",
    title: "Financing Condition Precedent & $41.1M Liquidity Cliff",
    target: "NIMS / Gravitics Reverse Triangular Merger",
    secCite: "Form 8-K / Global Deal Memorandum (Sections 2 & 4)",
    trigger: "Binary pre-closing $40M public equity offering and Nasdaq listing dependency",
    pathNodes: ["$40M Public Raise", "Sept 30 Outside Date", "$300K Insider Notes", "22% Default Coupon"],
    structuralConsequence: "Failure to close $40M underwritten offering triggers simultaneous maturity cliff on $300K Frost/Hsiao insider notes and escalates Defender bridge note to 22% default penalty against ~$160K shell cash.",
    governanceExposure: "63.4% insider voting bloc (Frost/Hsiao) executed approvals via FBCA § 607.0704 consents, but unresolved voting rights on 4.79M earn-out shares obscure post-closing governance stability.",
    classification: "CONTROL TOPOLOGY & REVERSE RECAPITALIZATION"
  },
  {
    id: "inmed-mentari",
    code: "INM-MNT-2026",
    title: "Series A Super-Voting & Mandatory Class Veto Lock",
    target: "InMed Pharmaceuticals / Mentari Therapeutics",
    secCite: "Form 8-K (May 19, 2026) & Form S-4 Registration",
    trigger: "$490M PIPE reverse merger with 3-vote-per-director Series A preferred preference",
    pathNodes: ["3 Votes Per Seat", "85.7% Board Control", ">=30% Class Veto", "$5.7M Arbitration"],
    structuralConsequence: "Series A Preferred Directors hold 3 votes each (commanding 6 of 7 active votes / 85.71% control) with mandatory class vetoes, while reps & warranties extinguish entirely at closing with zero indemnity recourse against $5.7M in pending arbitration claims.",
    governanceExposure: "Fairmount-affiliated designees secure unilateral corporate steering while legacy InMed securityholders are diluted to ~1.15%–1.51% fully diluted equity.",
    classification: "CONTROL TOPOLOGY & MULTI-VOTE GOVERNANCE"
  },
  {
    id: "nextcure-avere",
    code: "NXTC-AVR-2026",
    title: "Ceiling Exchange Ratio & $150M Financing Floor",
    target: "NextCure / Avere Therapeutics",
    secCite: "Form 8-K (July 14, 2026) & Form 10-Q Item 1A",
    trigger: "Reverse merger with downward-only Net Cash adjustment and $150M PIPE minimum",
    pathNodes: ["1.89% Ceiling Split", "$150M PIPE Floor", "100% Board Transition", "Going Concern Cliff"],
    structuralConsequence: "The 1.89% minority interest functions as a ceiling subject to downward adjustment if Net Cash targets are missed, while the $150M financing floor allows closing even with a $170M (53%) PIPE deficit.",
    governanceExposure: "Avere captures 100% of the 4-member board while pre-funded warrants decouple economic exposure from 9.99%/19.99% beneficial ownership caps.",
    classification: "VALUATION MECHANICS & CONTROL SHIFT"
  },
  {
    id: "fbnc-fcbm",
    code: "FBNC-FCBM-2026",
    title: "Target Entity Discontinuity & RWA Information Vacuum",
    target: "First Bancorp / First Carolina Bancshares (Florence, SC)",
    secCite: "Form 8-K (July 14, 2026) & Form 10-Q Balance Sheet",
    trigger: "$166M acquisition of unlisted Florence target with missing audited financial records",
    pathNodes: ["Entity Discontinuity", "Unverified $831M Pool", "41.1% Uninsured Deposits", "6.4% EVE Shock"],
    structuralConsequence: "Audit record lacked audited 10-Q/10-K filings for the Florence target ($831M assets, $596M loans), while FBNC absorbs unquantified credit marks amidst 41.1% ($4.6B) uninsured deposits and a 6.4% EVE decline under rate stress.",
    governanceExposure: "Buyer diligence conflated target with unrelated Raleigh entity, creating unquantified pro-forma capital adequacy risks despite a 16.06% RBC ratio.",
    classification: "ASSET QUALITY & INFORMATION INTEGRITY"
  },
  {
    id: "verifyme-openworld",
    code: "VRME-OW-2026",
    title: "Tender Expiration Timeline Collision & Willful Breach Fee",
    target: "VerifyMe / OpenWorld",
    secCite: "Form 8-K Filings & Merger Agreement Section 8.5(c)",
    trigger: "Tender offer expiration on July 20 followed by financing deficit disclosure on July 21",
    pathNodes: ["July 20 Expiration", "July 21 Deficit Disclosure", "$500K Breach Fee", "$42.7M SAFE Cap"],
    structuralConsequence: "Tight chronological collision between offer expiration and financing deficit disclosure exposed breaching party to a $500,000 willful breach fee under Section 8.5(c) rather than a no-fault mutual termination.",
    governanceExposure: "Rushed crypto sector pivot (SIC 6199) following Nasdaq delisting notice resulted in rapid deal collapse and potential damages exposure.",
    classification: "CHRONOLOGY CONFLICT & BREACH LIABILITY"
  },
  {
    id: "first-seacoast",
    code: "FSEA-2026",
    title: "Governance Inversion & ESOP Trust Voting Gap",
    target: "First Seacoast Bancorp / Cambridge Financial",
    secCite: "Schedule 13G (Feb 10, 2026) / Form DEF 14A",
    trigger: "Contested proxy defense against DAB Financial LLC (8.16% stake)",
    pathNodes: ["ESOP Fragmentation", "Pass-Through Voting", "47K Share Inversion", "Defense Neutralization"],
    structuralConsequence: "Management claimed 8.80% defensive ESOP block; statutory trust reconciliation uncovered that 76,944 shares pass through to participants, creating an immediate 47,058-share voting deficit against the activist.",
    governanceExposure: "Management assumed passive participants would default to trustee discretion, but activist solicitation peeled off 42,000 uninstructed shares.",
    classification: "GOVERNANCE INVERSION & PROXY DEFENSE"
  },
  {
    id: "imaq-vci",
    code: "IMAQ-VCI-2026",
    title: "IFRS Audit Cliff & Zero-Survival Indemnity Collapse",
    target: "IMAQ / VCI Holdings Business Combination",
    secCite: "Form S-4 Business Combination Agreement (Exhibit 2.1)",
    trigger: "Hard June 30, 2026 audit delivery deadline with 0% post-closing indemnity escrow",
    pathNodes: ["Audit Window Failure", "Article X Non-Survival", "Zero Indemnity", "Sponsor Equity Risk"],
    structuralConsequence: "Section 9.01(b) created unilateral termination risk, while Article X eliminated 100% of reps and warranties survival upon closing without any indemnity escrow on overseas assets.",
    governanceExposure: "SPAC sponsor entity faced total liability shift on foreign operating entities with zero post-closing recourse against seller consideration.",
    classification: "CROSS-BORDER DE-SPAC & INDEMNITY ARCHITECTURE"
  }
];

export default function CaseStudies() {
  const [activeCaseId, setActiveCaseId] = useState(CASE_STUDIES[0].id);
  const activeCase = CASE_STUDIES.find(c => c.id === activeCaseId) || CASE_STUDIES[0];

  return (
    <section className="py-24 px-6 relative border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/10" id="case-studies">
      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
            <FileText className="w-3 h-3 text-[var(--brand-cyan)]" />
            Section 06 // Forensic Case Archive
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-[var(--text-primary)]">
            Forensic Case Studies
          </h2>
          <p className="text-base text-[var(--text-secondary)]">
            Detailed case studies demonstrating how static contract summaries miss dynamic leverage shifts and latent liabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Selector Column */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {CASE_STUDIES.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveCaseId(study.id)}
                className={`text-left p-6 border transition-all ${
                  activeCaseId === study.id 
                  ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5 shadow-md' 
                  : 'bg-[var(--bg-primary)] border-[var(--border-color)] hover:border-[var(--border-highlight)]'
                }`}
              >
                <div className={`font-mono text-[9px] tracking-widest uppercase mb-1.5 font-bold ${activeCaseId === study.id ? 'text-[var(--brand-cyan)]' : 'text-[var(--text-tertiary)]'}`}>
                  {study.target}
                </div>
                <div className={`font-bold font-heading text-base ${activeCaseId === study.id ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                  {study.title}
                </div>
                <div className="mt-2 font-mono text-[9px] text-[var(--text-tertiary)]">
                  {study.secCite}
                </div>
              </button>
            ))}
          </div>

          {/* Right Detail Pane */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCaseId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="bg-[var(--bg-primary)] border border-[var(--border-color)] p-8 md:p-10 space-y-8 relative"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-color)] pb-4">
                  <div className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <Cpu className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> 
                    {activeCase.classification}
                  </div>
                  <span className="font-mono text-[9px] text-[var(--brand-cyan)] font-bold uppercase">
                    PROVENANCE: {activeCase.secCite}
                  </span>
                </div>

                {/* Trigger */}
                <div className="space-y-2">
                  <div className="font-mono text-[10px] text-red-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400" /> Trigger & Context
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-[var(--text-primary)] leading-tight">
                    {activeCase.trigger}
                  </h3>
                </div>

                {/* Pressure Pathway Map */}
                <div className="space-y-3 pt-4 border-t border-[var(--border-color)]">
                  <div className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <GitBranch className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> Pressure Cascade
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[10px]">
                    {activeCase.pathNodes.map((node, index) => (
                      <div key={index} className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-center space-y-1">
                        <div className="text-[8px] text-[var(--brand-cyan)] font-bold">NODE 0{index + 1}</div>
                        <div className="text-[var(--text-primary)] font-bold uppercase">{node}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Structural Consequence */}
                <div className="space-y-2 pt-4 border-t border-[var(--border-color)]">
                  <div className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <Network className="w-3.5 h-3.5 text-[var(--text-primary)]" /> Structural Consequence
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                    {activeCase.structuralConsequence}
                  </p>
                </div>

                {/* Governance Exposure */}
                <div className="p-5 border border-amber-500/20 bg-amber-500/5 space-y-1.5">
                  <div className="font-mono text-[10px] text-amber-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400" /> Analytical Blindspot
                  </div>
                  <p className="text-xs font-mono text-[var(--text-primary)] leading-relaxed">
                    {activeCase.governanceExposure}
                  </p>
                </div>

                {/* Action Link to Full Dossier */}
                <div className="pt-2 flex justify-end">
                  <Link
                    to={`/case-studies/${activeCase.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 font-mono text-xs uppercase font-bold tracking-wider transition-opacity"
                  >
                    View Full Forensic Dossier <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
