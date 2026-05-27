import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, AlertTriangle, GitBranch, Network, ShieldAlert, Cpu } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: "FITB-CMA",
    title: "Threshold Pressure in Regional Bank Consolidation",
    target: "Fifth Third / Comerica Merger",
    trigger: "Crossing $250B asset threshold",
    pathNodes: ["Category III migration", "HQLA expansion", "Liquidity reserve burden", "Integration drag"],
    structuralConsequence: "15% increase in required liquid asset holdings.",
    governanceExposure: "Board approved merger economics without equivalent disclosure emphasis on liquidity burden.",
    classification: "REGULATORY THRESHOLD PRESSURE"
  },
  {
    id: "BOXABL-FG",
    title: "Liquidity Pressure Propagation in De-SPAC Structures",
    target: "BOXABL / FG Merger II",
    trigger: "Stock trades at $12.00 for 20 of 30 days post-closing & transition to full reporting.",
    pathNodes: ["Accelerated lock-up release", "50% equity float increase", "Compliance-induced liquidity crunch"],
    structuralConsequence: "$225M contingent dilution & manual control intensity overhead.",
    governanceExposure: "Aggressive deviation from 12-month standard lock-up creates high-concentration retail liquidation risk.",
    classification: "DE-SPAC FRAGILITY & FLOAT DYNAMICS"
  },
  {
    id: "WEX-BANK",
    title: "Hidden Funding Fragility in Capital Adequacy Structures",
    target: "WEX Bank Capital Adequacy Audit",
    trigger: "Loss of Non-Bank Custodian Status.",
    pathNodes: ["FDIC Prompt Corrective Action", "Minimum capital breach", "Unmitigated deposit flight risk"],
    structuralConsequence: "Immediate $4,574,000,000 funding shortfall.",
    governanceExposure: "100% reliant on volatile HSA deposits to maintain operational leverage despite 413 bps above minimum.",
    classification: "FUNDING FRAGILITY INTELLIGENCE"
  },
  {
    id: "COLUMBIA-NORTHFIELD",
    title: "Regulatory Capital Pressure in Regional Bank M&A",
    target: "Columbia Financial / Northfield Bancorp",
    trigger: "Imposition of capital surcharges or growth restrictions by the OCC/Federal Reserve.",
    pathNodes: ["$419M portfolio exposed", "No walk-away right for Buyer", "Capital integration friction"],
    structuralConsequence: "Severe impairment of pro forma Return on Equity.",
    governanceExposure: "Materiality measured against Target standalone instead of Pro Forma combined entity.",
    classification: "REGULATORY CAPITAL PRESSURE"
  },
  {
    id: "Z-SQUARED-BSG",
    title: "Structural Liquidity Bottlenecks in Post-Merger Equity Unlocks",
    target: "Z Squared / BSG Series CM Merger",
    trigger: "10-day VWAP > $16.31.",
    pathNodes: ["Monthly liquidity allocation", "ADTV bottleneck", "$677.2M structural mismatch"],
    structuralConsequence: "Volume bottleneck permits only 1/20th of the intended monthly liquidity under standard trading conditions.",
    governanceExposure: "Misaligned lock-up architecture affecting $677.2M of aggregate equity.",
    classification: "STRUCTURAL LIQUIDITY ANALYSIS"
  },
  {
    id: "TWO-CCM",
    title: "Termination Fee Escalation as Defensive Deal Architecture",
    target: "TWO / CCM Merger",
    trigger: "Superior Proposal from UWMC or Material Breach.",
    pathNodes: ["212% fee increase", "Asymmetric break cost", "Immediate deterrence of alternative bids"],
    structuralConsequence: "$75,400,000 Total Break Cost (6.36% of market cap).",
    governanceExposure: "Coercive deal economics (82% above market standard break fee) explicitly designed to force favorable shareholder vote.",
    classification: "DEFENSIVE DEAL ARCHITECTURE"
  }
];

export default function CaseStudies() {
  const [activeCaseId, setActiveCaseId] = useState(CASE_STUDIES[0].id);
  const activeCase = CASE_STUDIES.find(c => c.id === activeCaseId) || CASE_STUDIES[0];

  return (
    <section className="py-24 px-6 relative border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/10" id="case-studies">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
            <FileText className="w-3 h-3" />
            Section 02
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Institutional Pressure Archive</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-3">
            {CASE_STUDIES.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveCaseId(study.id)}
                className={`text-left p-6 border transition-all duration-300 ${
                  activeCaseId === study.id 
                  ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5 shadow-[0_0_15px_rgba(0,184,217,0.1)]' 
                  : 'bg-[var(--bg-secondary)]/30 border-[var(--border-color)] hover:border-[var(--border-highlight)]'
                }`}
              >
                <div className={`font-mono text-[10px] tracking-[0.2em] uppercase mb-2 ${activeCaseId === study.id ? 'text-[var(--brand-cyan)]' : 'text-[var(--text-tertiary)]'}`}>
                  {study.target}
                </div>
                <div className={`font-bold font-heading text-lg ${activeCaseId === study.id ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
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
                className="bg-[var(--bg-primary)] border border-[var(--border-color)] relative"
              >
                <div className="absolute top-0 right-0 p-3 bg-[var(--bg-secondary)]/50 border-b border-l border-[var(--border-color)]">
                  <div className="font-mono text-[8px] text-[var(--text-tertiary)] uppercase tracking-widest flex items-center gap-1">
                    <Cpu className="w-3 h-3 text-[var(--text-secondary)]" /> 
                    {activeCase.classification}
                  </div>
                </div>

                <div className="p-8 md:p-10 space-y-10 mt-6 md:mt-0">
                  
                  {/* Trigger */}
                  <div>
                    <h4 className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-3 h-3 text-red-500/80" /> Trigger
                    </h4>
                    <p className="text-xl md:text-2xl font-bold font-heading text-[var(--text-primary)] leading-tight">
                      {activeCase.trigger}
                    </p>
                  </div>

                  {/* Pressure Pathway Map (Visual) */}
                  <div className="pt-6 border-t border-[var(--border-color)]/50">
                    <h4 className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <GitBranch className="w-3 h-3 text-[var(--brand-cyan)]" /> Pressure Pathway
                    </h4>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 relative py-4">
                      {/* Desktop connector line */}
                      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--border-highlight)] hidden sm:block -z-10 -translate-y-1/2"></div>
                      {/* Mobile connector line */}
                      <div className="absolute top-0 left-[15px] w-[1px] h-full bg-[var(--border-highlight)] sm:hidden -z-10"></div>
                      
                      {activeCase.pathNodes.map((node, index) => (
                        <React.Fragment key={index}>
                          <div className="relative bg-[var(--bg-primary)] px-4 py-2 border border-[var(--border-color)] z-10 flex-1 min-w-[120px] shadow-sm flex flex-col justify-center text-center group hover:border-[var(--brand-cyan)]/50 transition-colors">
                            <span className="font-mono text-[9px] text-[var(--brand-cyan)] mb-1 opacity-70">NODE 0{index + 1}</span>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-primary)]">{node}</span>
                          </div>
                          {index < activeCase.pathNodes.length - 1 && (
                            <div className="hidden sm:flex px-2 text-[var(--text-tertiary)] z-10 bg-[var(--bg-primary)] shrink-0">
                              →
                            </div>
                          )}
                          {index < activeCase.pathNodes.length - 1 && (
                            <div className="sm:hidden pl-3 py-1 text-[var(--text-tertiary)] z-10 bg-[var(--bg-primary)]">
                              ↓
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Structural Consequence */}
                  <div className="pt-6 border-t border-[var(--border-color)]/50">
                    <h4 className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                      <Network className="w-3 h-3 text-[var(--brand-purple)]" /> Structural Consequence
                    </h4>
                    <p className="text-base text-[var(--text-primary)] leading-relaxed border-l-2 border-[var(--brand-purple)]/50 pl-4 font-medium">
                      {activeCase.structuralConsequence}
                    </p>
                  </div>

                  {/* Governance Exposure */}
                  <div className="pt-6 border-t border-[var(--border-color)]/50 bg-red-500/5 -mx-8 sm:-mx-10 -mb-10 px-8 sm:px-10 py-8 border-b-4 border-b-red-500/20">
                    <h4 className="font-mono text-[10px] text-red-500/80 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                      <ShieldAlert className="w-3 h-3 text-red-500" /> Governance Exposure
                    </h4>
                    <p className="text-sm font-mono text-[var(--text-primary)] leading-relaxed font-bold">
                      {activeCase.governanceExposure}
                    </p>
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