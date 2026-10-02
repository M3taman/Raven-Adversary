import React, { useState } from 'react';
import { 
  FileText, ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, 
  ExternalLink, Download, Scale, Search, Eye, ChevronRight, Lock,
  Activity, Layers, FileCode, Check, AlertOctagon, HelpCircle
} from 'lucide-react';

export function SampleAssessmentViewer() {
  const [activeTab, setActiveTab] = useState<'brief' | 'clauses' | 'vectors' | 'dossier' | 'debate'>('brief');
  const [activeClauseCard, setActiveClauseCard] = useState<number>(0);

  return (
    <section className="py-20 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/20" id="sample-assessment">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-color)] pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30 font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
              <Eye className="w-3 h-3" /> VERIFIED WORK PRODUCT // LIVE AUDIT ARTIFACTS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
              Inside a Raven Transaction Assessment
            </h2>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
              Inspect the exact deliverables, contractual clause cards, and quantitative stress tests produced for institutional investment committees and deal teams.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block font-mono text-[10px] text-[var(--text-tertiary)]">
              <div>SESSION AUDIT ID: inv_1789583158804</div>
              <div className="text-emerald-400 font-bold">AUTHENTICATED WORK PRODUCT</div>
            </div>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Order Review ($10K)
            </a>
          </div>
        </div>

        {/* Master Deliverable Frame */}
        <div className="border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-2xl relative overflow-hidden">
          
          {/* Top Dossier Meta Bar */}
          <div className="p-4 md:p-6 bg-[var(--bg-secondary)]/50 border-b border-[var(--border-color)] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-[var(--text-primary)] font-bold">TARGET: Tri-County Financial Group, Inc. (CIK: 0000775215)</span>
                <span>•</span>
                <span>ACQUIRER: HBT Financial, Inc. (CIK: 0001725262)</span>
                <span>•</span>
                <span className="text-amber-400 font-bold">STATUS: DEFINITIVE AGREEMENT</span>
              </div>
              <div className="text-xs font-mono text-[var(--text-secondary)]">
                Three-stage forward triangular merger, mid-tier upstream merger, and subsequent bank subsidiary consolidation.
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-3 py-1 border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-[10px] uppercase font-bold tracking-wider">
                Composite Risk: 75/100 (Severe)
              </div>
              <div className="px-3 py-1 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase font-bold tracking-wider">
                100% Public SEC Filings
              </div>
            </div>
          </div>

          {/* Dossier Navigation Tabs */}
          <div className="flex border-b border-[var(--border-color)] overflow-x-auto bg-[var(--bg-secondary)]/30 scrollbar-none">
            {[
              { id: 'brief', label: '1. Executive MD Brief (Page One Pass)' },
              { id: 'clauses', label: '2. Contractual Clause Cards' },
              { id: 'vectors', label: '3. Raven 6-Vector Risk Index' },
              { id: 'dossier', label: '4. 16-Chapter Dossier Index' },
              { id: 'debate', label: '5. Multi-Agent Debate & Falsification' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3.5 font-mono text-xs font-bold whitespace-nowrap transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'border-[var(--brand-cyan)] text-[var(--brand-cyan)] bg-[var(--bg-primary)]'
                    : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dossier Content Body */}
          <div className="p-6 md:p-10 space-y-8">
            
            {/* TAB 1: EXECUTIVE MD BRIEF */}
            {activeTab === 'brief' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                
                {/* 01. Transaction State & 02. Material Pressure */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-3">
                    <div className="font-mono text-[10px] text-[var(--brand-cyan)] font-bold uppercase tracking-wider">
                      01 // TRANSACTION STRUCTURE & CONSIDERATION
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-mono">
                      Acquisition of Tri-County Financial Group (TYFG) by HBT Financial (HBT) capped at <strong>$59,947,348.00 in cash</strong> and <strong>3,797,844 HBT shares</strong>, resulting in approximately <strong>9.0% pro forma target ownership</strong>.
                    </p>
                    <div className="pt-2 font-mono text-[11px] text-[var(--text-primary)] border-t border-[var(--border-color)]">
                      Fixed Proration Engine: Castle Creek locked to 100% cash ($39.98M).
                    </div>
                  </div>

                  <div className="p-6 border border-amber-500/30 bg-amber-500/5 space-y-3">
                    <div className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      02 // PRIMARY CLOSING VULNERABILITY
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-mono">
                      Pre-closing institutional exposure centers on the <strong>mandatory disposition and wind-down of First State Mortgage Services (FSM)</strong>, a strict <strong>5.0% DGCL § 262 appraisal ceiling</strong>, and tripartite regulatory clearances (Fed, FDIC, IDFPR).
                    </p>
                  </div>
                </div>

                {/* 03. Chain Analysis: Where Does the Pressure Propagate? */}
                <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 space-y-4">
                  <div className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]">
                    03 // WHERE DOES THE PRESSURE PROPAGATE? (VECTOR PATHWAY)
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3 font-mono text-xs">
                    <div className="p-4 border border-red-500/30 bg-red-500/5 space-y-1.5">
                      <span className="text-[10px] text-red-400 font-bold uppercase block">TRIGGER</span>
                      <p className="text-[11px] text-[var(--text-secondary)]">
                        Failure to complete mandatory wind-down of all FSM warehouse lines and operational liabilities prior to Effective Time.
                      </p>
                    </div>

                    <div className="p-4 border border-amber-500/30 bg-amber-500/5 space-y-1.5">
                      <span className="text-[10px] text-amber-400 font-bold uppercase block">AMPLIFIER</span>
                      <p className="text-[11px] text-[var(--text-secondary)]">
                        Castle Creek's contract lock for 563,064 shares absorbs $39.98M (66.7%) of cash pool, forcing retail cash proration.
                      </p>
                    </div>

                    <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-1.5">
                      <span className="text-[10px] text-[var(--brand-cyan)] font-bold uppercase block">MECHANISM</span>
                      <p className="text-[11px] text-[var(--text-secondary)]">
                        Step 1 reverse triangular merger of MergerCo into TYFG; Step 2 immediate upstream merger into HBT for IRC § 368(a) tax treatment.
                      </p>
                    </div>

                    <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-1.5">
                      <span className="text-[10px] text-[var(--text-tertiary)] font-bold uppercase block">EXPOSURE</span>
                      <p className="text-[11px] text-[var(--text-secondary)]">
                        Appraisal demands exceeding 5.0% under DGCL § 262 trigger HBT walk right, leaving target in standalone distress.
                      </p>
                    </div>

                    <div className="p-4 border border-emerald-500/30 bg-emerald-500/5 space-y-1.5">
                      <span className="text-[10px] text-emerald-400 font-bold uppercase block">CONSEQUENCE</span>
                      <p className="text-[11px] text-[var(--text-secondary)]">
                        9.0% pro forma equity disperses voting concentration below 10% rebuttable control threshold under Change in Bank Control Act.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 04. Key Contractual Exposures Table */}
                <div className="space-y-3">
                  <div className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]">
                    04 // WHAT CAN BREAK? (KEY CONTRACTUAL EXPOSURES)
                  </div>
                  <div className="border border-[var(--border-color)] overflow-x-auto">
                    <table className="w-full text-left font-mono text-xs">
                      <thead className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)] text-[var(--text-tertiary)] text-[10px] uppercase">
                        <tr>
                          <th className="p-3">Exposure Category</th>
                          <th className="p-3">Specific Condition / Balance</th>
                          <th className="p-3">Leverage Score</th>
                          <th className="p-3">Owner</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)] text-[var(--text-secondary)]">
                        <tr>
                          <td className="p-3 text-[var(--text-primary)] font-bold">FSM Asset & Liability Complete Release</td>
                          <td className="p-3">Failure to obtain complete indemnification release from mortgage asset purchaser.</td>
                          <td className="p-3 text-red-400 font-bold">8.5 / 10</td>
                          <td className="p-3">Legal</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-[var(--text-primary)] font-bold">Appraisal Notice Accumulation</td>
                          <td className="p-3">Appraisal demands exceeding 5.0% (121,385 shares) without negotiated settlement.</td>
                          <td className="p-3 text-amber-400 font-bold">7.0 / 10</td>
                          <td className="p-3">Financial</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-[var(--text-primary)] font-bold">Proration Election Cash Availability</td>
                          <td className="p-3">Retail cash demand significantly exceeding remaining $19.96M pool after Castle Creek.</td>
                          <td className="p-3 text-amber-400 font-bold">6.5 / 10</td>
                          <td className="p-3">Financial</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 05. Negative Knowledge Register (Restraint) */}
                <div className="p-5 border border-red-500/30 bg-red-500/5 space-y-2">
                  <div className="font-mono text-[10px] text-red-400 font-bold uppercase tracking-wider flex items-center gap-2">
                    <AlertOctagon className="w-4 h-4" />
                    05 // WHAT REMAINS UNKNOWN? (NEGATIVE KNOWLEDGE REGISTER)
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-mono">
                    <strong>Outside Termination Date Ambiguity:</strong> Outside dates of June 30, 2027 and September 30, 2027 appear in secondary deal summaries but are <strong>UNESTABLISHED IN THE FILED PROXY S-4/A TEXT</strong>, which targets closing in Q4 2026 or Q1 2027. Raven explicitly isolates this as unverified rather than assuming press summaries are accurate.
                  </p>
                </div>

                {/* 06. Actionable Mandates & Strategic Verdict */}
                <div className="p-6 border border-emerald-500/30 bg-emerald-500/10 space-y-3">
                  <div className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                    06 // ACTIONABLE MANDATES & STRATEGIC VERDICT FOR BOARD
                  </div>
                  <div className="text-xs text-[var(--text-primary)] font-mono space-y-2 leading-relaxed">
                    <p>
                      <strong>[1] FSM Disposition Audit:</strong> Conduct weekly tracking on First State Mortgage Services asset/liability disposition and complete release documentation.
                    </p>
                    <p>
                      <strong>[2] Appraisal Rights Ceiling:</strong> Monitor DGCL § 262 appraisal notices against the 5.0% threshold (max 121,385 shares) prior to the special meeting.
                    </p>
                    <p>
                      <strong>[3] Proration Risk Hedging:</strong> Model retail stock conversion dynamics given Castle Creek's $39.98M cash absorption to prevent post-close shareholder dissatisfaction.
                    </p>
                    <p>
                      <strong>[4] Regulatory Clearances:</strong> Verify filing and supervisory progress across Federal Reserve, FDIC, and IDFPR before drop-dead window.
                    </p>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: CONTRACTUAL CLAUSE CARDS */}
            {activeTab === 'clauses' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex gap-2 border-b border-[var(--border-color)] pb-3">
                  <button
                    onClick={() => setActiveClauseCard(0)}
                    className={`px-4 py-2 font-mono text-xs font-bold transition-all border ${
                      activeClauseCard === 0
                        ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)]'
                        : 'border-[var(--border-color)] text-[var(--text-secondary)]'
                    }`}
                  >
                    Card 01: Pre-Closing Covenants & Cash Mechanics
                  </button>
                  <button
                    onClick={() => setActiveClauseCard(1)}
                    className={`px-4 py-2 font-mono text-xs font-bold transition-all border ${
                      activeClauseCard === 1
                        ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)]'
                        : 'border-[var(--border-color)] text-[var(--text-secondary)]'
                    }`}
                  >
                    Card 02: Termination Fee & Fiduciary Non-Solicitation
                  </button>
                </div>

                {activeClauseCard === 0 ? (
                  <div className="border border-[var(--border-color)] p-6 bg-[var(--bg-secondary)]/10 space-y-5">
                    <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3 font-mono text-xs">
                      <div>
                        <span className="text-[var(--text-tertiary)] uppercase text-[10px]">SOURCE:</span> Form S-4/A (tm2623547-3_s4a.htm) | Section 1.01
                      </div>
                      <span className="px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold text-[10px]">
                        VERIFIED FACT
                      </span>
                    </div>

                    <div className="p-4 bg-[var(--bg-primary)] border-l-2 border-[var(--brand-cyan)] font-mono text-xs italic text-[var(--text-primary)]">
                      “Failure to dispose of FSM assets/liabilities, appraisal notices &gt;5.0%, regulatory denial/burdensome condition, or failure to receive IRC Section 368(a) tax opinions.”
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 font-mono text-xs">
                      <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-1">
                        <span className="text-[10px] text-red-400 font-bold uppercase">TRIGGER EVENT</span>
                        <p className="text-[var(--text-secondary)]">Failure to dispose of FSM assets/liabilities; appraisal notices &gt;5.0%; regulatory denial or burdensome condition.</p>
                      </div>

                      <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-1">
                        <span className="text-[10px] text-amber-400 font-bold uppercase">AMPLIFIER MECHANISM</span>
                        <p className="text-[var(--text-secondary)]">Right of HBT to terminate transaction or refuse to close; mandatory proration of cash elections into HBT stock.</p>
                      </div>

                      <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-1">
                        <span className="text-[10px] text-[var(--brand-cyan)] font-bold uppercase">FINANCIAL / LEGAL EXPOSURE</span>
                        <p className="text-[var(--text-secondary)]">$59,947,348.00 base cash pool - $39,983,174.64 Castle Creek allocation = $19,964,173.36 available cash pool for remaining 1,822,763 shares; Appraisal Threshold = 5.0% * Outstanding Shares.</p>
                      </div>

                      <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-1">
                        <span className="text-[10px] text-[var(--text-primary)] font-bold uppercase">CONTRACTUAL THRESHOLD</span>
                        <p className="text-[var(--text-secondary)]">Fixed consideration cap ($59.95M cash / 3,797,844 stock shares).</p>
                      </div>
                    </div>

                    <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-1.5 font-mono text-xs">
                      <span className="text-[10px] text-[var(--brand-cyan)] font-bold uppercase">RAVEN STRATEGIC INTERPRETATION</span>
                      <p className="text-[var(--text-secondary)]">Standard bank M&A structure, but contains custom closing conditions including mandatory mortgage sub divestiture and a specific 5% appraisal ceiling.</p>
                    </div>

                    <div className="p-3 bg-red-500/5 border border-red-500/20 font-mono text-xs text-red-400 flex items-center justify-between">
                      <span>UNRESOLVED VARIABLE // INFORMATION GAP: Third-party financing verification for buyer.</span>
                      <span className="text-[10px] font-bold">NEGATIVE REGISTER</span>
                    </div>
                  </div>
                ) : (
                  <div className="border border-[var(--border-color)] p-6 bg-[var(--bg-secondary)]/10 space-y-5">
                    <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3 font-mono text-xs">
                      <div>
                        <span className="text-[var(--text-tertiary)] uppercase text-[10px]">SOURCE:</span> Agreement and Plan of Merger Ex-2.1 | Section 8.02
                      </div>
                      <span className="px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold text-[10px]">
                        VERIFIED FACT
                      </span>
                    </div>

                    <div className="p-4 bg-[var(--bg-primary)] border-l-2 border-[var(--brand-cyan)] font-mono text-xs italic text-[var(--text-primary)]">
                      “If this Agreement is terminated pursuant to Section 8.01 due to a superior proposal or adverse board recommendation change, the terminating party shall pay the termination fee in immediately available funds.”
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 font-mono text-xs">
                      <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-1">
                        <span className="text-[10px] text-red-400 font-bold uppercase">TRIGGER EVENT</span>
                        <p className="text-[var(--text-secondary)]">Adverse change in board recommendation or entry into alternative acquisition transaction.</p>
                      </div>

                      <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-1">
                        <span className="text-[10px] text-amber-400 font-bold uppercase">AMPLIFIER MECHANISM</span>
                        <p className="text-[var(--text-secondary)]">Liquidated damages payable within 2 business days of written notice.</p>
                      </div>

                      <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-1">
                        <span className="text-[10px] text-[var(--brand-cyan)] font-bold uppercase">FINANCIAL / LEGAL EXPOSURE</span>
                        <p className="text-[var(--text-secondary)]">Contractual breakup fee obligation payable in immediately available funds.</p>
                      </div>

                      <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-1">
                        <span className="text-[10px] text-[var(--text-primary)] font-bold uppercase">CONTRACTUAL THRESHOLD</span>
                        <p className="text-[var(--text-secondary)]">Definitive fiduciary out termination.</p>
                      </div>
                    </div>

                    <div className="p-3 bg-red-500/5 border border-red-500/20 font-mono text-xs text-red-400 flex items-center justify-between">
                      <span>UNRESOLVED VARIABLE // INFORMATION GAP: Third-party unsolicited acquisition proposal existence NOT ESTABLISHED.</span>
                      <span className="text-[10px] font-bold">NEGATIVE REGISTER</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: RAVEN 6-VECTOR RISK INDEX */}
            {activeTab === 'vectors' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-red-500/30 bg-red-500/5">
                  <div>
                    <div className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider">
                      OVERALL COMPOSITE TRANSACTION RISK
                    </div>
                    <div className="text-3xl font-bold font-heading text-[var(--text-primary)] mt-1">
                      75 / 100 <span className="text-xs font-mono font-normal text-red-400 uppercase tracking-widest">[ Severe Risk Profile ]</span>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-[var(--text-secondary)] max-w-md">
                    Risk heavily weighted toward regulatory interagency approvals, mortgage sub wind-down conditionality, and cash proration constraints.
                  </div>
                </div>

                {/* 6 Vectors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
                  <div className="p-5 border border-red-500/40 bg-[var(--bg-secondary)]/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--text-primary)] font-bold">REGULATORY APPROVAL</span>
                      <span className="text-red-400 font-bold text-sm">100 / 100</span>
                    </div>
                    <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                      Change of control filings require affirmative tripartite clearances (Fed, FDIC, IDFPR) prior to drop-dead expiration.
                    </p>
                  </div>

                  <div className="p-5 border border-red-500/30 bg-[var(--bg-secondary)]/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--text-primary)] font-bold">FINANCING / LIQUIDITY</span>
                      <span className="text-red-400 font-bold text-sm">89 / 100</span>
                    </div>
                    <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                      Castle Creek absorbs 66.7% ($39.98M) of cash pool, creating tight retail cash proration and warehouse line wind-down cliffs.
                    </p>
                  </div>

                  <div className="p-5 border border-amber-500/30 bg-[var(--bg-secondary)]/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--text-primary)] font-bold">PRESSURE PROPAGATION</span>
                      <span className="text-amber-400 font-bold text-sm">84 / 100</span>
                    </div>
                    <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                      Mortgage divestiture condition failure directly activates HBT walk right, shifting total downside onto target equity.
                    </p>
                  </div>

                  <div className="p-5 border border-amber-500/30 bg-[var(--bg-secondary)]/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--text-primary)] font-bold">GOVERNANCE & VOTING</span>
                      <span className="text-amber-400 font-bold text-sm">72 / 100</span>
                    </div>
                    <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                      Pro-forma target ownership (~9.0%) confines board representation to single director seat with 2027 re-nomination covenant.
                    </p>
                  </div>

                  <div className="p-5 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--text-primary)] font-bold">LITIGATION & APPRAISAL</span>
                      <span className="text-[var(--text-secondary)] font-bold text-sm">61 / 100</span>
                    </div>
                    <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                      Standard DGCL § 262 appraisal risk, but capped by hard 5.0% closing condition ceiling (121,385 shares).
                    </p>
                  </div>

                  <div className="p-5 border border-emerald-500/30 bg-[var(--bg-secondary)]/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--text-primary)] font-bold">OPERATIONAL / INTEGRATION</span>
                      <span className="text-emerald-400 font-bold text-sm">45 / 100</span>
                    </div>
                    <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                      Branch consolidation follows established state-chartered templates from prior HBT acquisitions (Town & Country).
                    </p>
                  </div>
                </div>

                {/* Quantitative Stress Test Benchmarks */}
                <div className="space-y-3">
                  <div className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]">
                    QUANTITATIVE STRESS TEST BENCHMARKS
                  </div>
                  <div className="border border-[var(--border-color)] overflow-x-auto font-mono text-xs">
                    <table className="w-full text-left">
                      <thead className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)] text-[10px] text-[var(--text-tertiary)] uppercase">
                        <tr>
                          <th className="p-3">Stress Metric</th>
                          <th className="p-3">Current Disclosed Spec</th>
                          <th className="p-3">Stressed Downside Delta</th>
                          <th className="p-3">Breach Threshold</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)] text-[var(--text-secondary)]">
                        <tr>
                          <td className="p-3 text-[var(--text-primary)] font-bold">Castle Creek Cash Pool Absorption</td>
                          <td className="p-3">$39,983,174.64 (563,064 shares * $71.01)</td>
                          <td className="p-3 text-red-400">Consumes 66.697% of cash pool; leaves $19.96M for retail</td>
                          <td className="p-3">Fixed cash pool of $59,947,348.00</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-[var(--text-primary)] font-bold">DGCL 262 Appraisal Rights Ceiling</td>
                          <td className="p-3">0 shares formally perfected (pre-vote)</td>
                          <td className="p-3 text-amber-400">121,385 shares (5.0% of 2,427,703 record shares)</td>
                          <td className="p-3">Maximum 5.0% permitted before walk right</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-[var(--text-primary)] font-bold">Target Pro Forma Equity Concentration</td>
                          <td className="p-3">3,797,844 HBT shares (~9.0% pro forma)</td>
                          <td className="p-3 text-emerald-400">1.00% buffer below 10% regulatory control presumption</td>
                          <td className="p-3">10.00% Change in Bank Control Act threshold</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: 16-CHAPTER DOSSIER INDEX */}
            {activeTab === 'dossier' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-2">
                  <div className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-wider font-bold">
                    FULL INSTITUTIONAL WORK PRODUCT ARCHITECTURE
                  </div>
                  <h4 className="text-xl font-bold font-heading text-[var(--text-primary)]">
                    The 16-Chapter Forensic Risk Audit (Delivered in PDF)
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Every Raven transaction audit follows this standardized 16-chapter forensic structure, designed for immediate review by Investment Committees, General Counsel, and Managing Directors.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                  {[
                    { ch: 'CH 01', name: 'Cover & Statutory Authentication Block', desc: 'Official audit ID, SEC EDGAR CIK verification, and timestamp.' },
                    { ch: 'CH 02', name: 'Executive Brief & Transaction Thesis', desc: 'Core economics, pro-forma consideration, and strategic verdict.' },
                    { ch: 'CH 03', name: 'Transaction State & Statutory Classification', desc: 'Forward/reverse triangular structures, DGCL statutory rules.' },
                    { ch: 'CH 04', name: 'Transaction Timeline & Pre-Closing Dates', desc: 'Special meeting dates, outside termination dates, and extension milestones.' },
                    { ch: 'CH 05', name: 'Capital & Consideration Waterfall Table', desc: 'Cash/stock mix, option cash settlements, and proration formulas.' },
                    { ch: 'CH 06', name: 'Governance Topology & Control Deficits', desc: 'Board seats, voting thresholds, ERISA/ESOP pass-throughs, lockups.' },
                    { ch: 'CH 07', name: 'Structural Vulnerabilities & Deltas', desc: 'Ranked list of unhedged contractual risks with leverage scores (1-10).' },
                    { ch: 'CH 08', name: 'Pressure Propagation Pathways', desc: '5-stage cascade mechanics: Trigger → Amplifier → Mechanism → Exposure → Consequence.' },
                    { ch: 'CH 09', name: 'Contractual / Legal Covenant Analysis', desc: 'Direct clause cards with verified language, triggers, and impact.' },
                    { ch: 'CH 10', name: 'Quantitative Stress Tests & Deltas', desc: 'Cash pool drain, appraisal limits, deposit decay, and NIM compression.' },
                    { ch: 'CH 11', name: 'Regulatory & Litigation Exposure', desc: 'Fed, FDIC, IDFPR, antitrust, and Chancery Court appraisal appraisal petitions.' },
                    { ch: 'CH 12', name: 'Intelligence Gaps // Negative Knowledge Register', desc: 'Explicitly documents what is unestablished in the public record.' },
                    { ch: 'CH 13', name: 'Strategic Recommendations & Boardroom Redlines', desc: 'Proposed legal redline drafting for debt standstills and conversion floors.' },
                    { ch: 'CH 14', name: 'Evidence Desk // SEC Citation Registry', desc: 'Full accession numbers, filing dates, and line coordinates for every claim.' },
                    { ch: 'CH 15', name: 'Epistemic Confidence & Dispute Matrix', desc: 'Classification into Verified Facts, Inferences, and Negative Variables.' },
                    { ch: 'CH 16', name: 'Audit Methodology & Institutional Disclaimer', desc: 'Analytical boundaries: analytical intelligence, not formal legal opinion.' }
                  ].map((item) => (
                    <div key={item.ch} className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-1 hover:border-[var(--brand-cyan)] transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-[var(--brand-cyan)] font-bold">{item.ch}</span>
                        <span className="text-[10px] text-[var(--text-tertiary)] uppercase font-semibold">Forensic Module</span>
                      </div>
                      <div className="text-[var(--text-primary)] font-bold text-xs">{item.name}</div>
                      <div className="text-[11px] text-[var(--text-secondary)]">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 5: MULTI-AGENT DEBATE & FALSIFICATION */}
            {activeTab === 'debate' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-2">
                  <div className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-wider font-bold">
                    INTERNAL DIALECTICAL STRESS ENGINE
                  </div>
                  <h4 className="text-xl font-bold font-heading text-[var(--text-primary)]">
                    Seller Advocate vs. Buyer Critique Dialectic
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Raven pits opposing analytical models against each other over 4 iterative rounds before passing findings through automated falsification checks.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Seller Advocate Argument */}
                  <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-3 font-mono text-xs">
                    <div className="text-[10px] text-[var(--text-tertiary)] font-bold uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      ROUND 4 // SELLER ADVOCATE POSITION
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      “Outside closing date asserted as June 30, 2027 (extendable to September 30, 2027) bounds regulatory timetable; IRC § 368(a) reciprocal tax opinions preserve equity tax shielding; branch integration follows standardized Town & Country precedents.”
                    </p>
                  </div>

                  {/* Buyer Adversary Critique */}
                  <div className="p-6 border border-amber-500/30 bg-amber-500/5 space-y-3 font-mono text-xs">
                    <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      ROUND 4 // RAVEN ADVERSARY REBUTTAL
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      “Forensic audit rejects the June 30, 2027 date: <strong>extrinsic to filed S-4/A disclosures</strong>. S-4/A states closing in Q4 2026 / Q1 2027. Primary structural gating item remains unhedged FSM wind-down liability and Castle Creek's $39.98M cash drain.”
                    </p>
                  </div>
                </div>

                {/* Falsification Gates Checklist */}
                <div className="p-6 border border-emerald-500/30 bg-emerald-500/10 space-y-4">
                  <div className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Automated Falsification Cognitive Gates (All Passed)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-[var(--text-primary)]">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Temporal Collapse Prevention: Passed</span>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-primary)]">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Absolute Recovery Eradication: Passed</span>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-primary)]">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Domain Creep Isolation: Passed</span>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-primary)]">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Inter-Document Contradiction Checker: Passed</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Bottom Footer Callout with Disclaimer */}
          <div className="p-4 bg-[var(--bg-secondary)]/70 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-[var(--text-tertiary)]">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[var(--brand-cyan)]" />
              <span>Independent forensic research conducted strictly on public SEC filings. Not formal legal counsel or investment advice.</span>
            </div>
            <div>
              Deliverable Turnaround: Standard 72h ($10,000) • Expedited 24-48h ($25,000)
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
