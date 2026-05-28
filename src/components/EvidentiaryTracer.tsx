import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Link as LinkIcon, CheckCircle, AlertCircle, Eye, CornerDownRight } from 'lucide-react';

interface FilingExcerpt {
  id: string;
  source: string;
  type: string;
  excerptTitle: string;
  rawText: string;
  highlightedPhrase: string;
  analysis: {
    epistemicStatus: 'VERIFIED_FACT' | 'STRUCTURAL_INFERENCE' | 'ADVERSARIAL_HYPOTHESIS';
    confidence: string;
    consequenceChain: string;
    unpricedRisk: string;
  };
}

const EXCERPTS: FilingExcerpt[] = [
  {
    id: "FITB-CMA-EXCERPT",
    source: "SEC Form S-4, Section VII, Page 114 // FITB-CMA",
    type: "FORM S-4 AMENDMENT",
    excerptTitle: "Regulated Capital Threshold Migrations",
    rawText: "Upon completion of the transaction, the combined company will exceed $250 billion in total consolidated assets. Accordingly, the regulatory framework governing the combined organization will transition from Category IV to Category III standards as set forth under the Federal Reserve board Tailoring Rules. While management does not anticipate a material disruption to immediate operational capital, the transition mandates compliance with daily Liquidity Coverage Ratio (LCR) reporting...",
    highlightedPhrase: "transition mandates compliance with daily Liquidity Coverage Ratio (LCR) reporting...",
    analysis: {
      epistemicStatus: 'VERIFIED_FACT',
      confidence: "98% Deterministic Alignment",
      consequenceChain: "Surpassing asset threshold triggers transition to daily LCR reporting. Imposes strict obligations to hold massive high-quality liquid asset (HQLA) pools within 90 days post-close.",
      unpricedRisk: "~15% structural drag on investable asset allocation, leading to hidden margin compression completely absent from current sponsor pro-forma projections."
    }
  },
  {
    id: "BOXABL-EXCERPT",
    source: "SEC Form S-4/A, Exhibit 10.4, Section 2.1 // BOXABL-FG",
    type: "EXHIBIT 10.4 LOCK-UP AMENDMENT",
    excerptTitle: "Accelerated Float Release Mechanisms",
    rawText: "Notwithstanding the general 12-month lock-up period defined in Section 1.8, in the event the daily VWAP of the Common Stock equals or exceeds $12.00 per share (adjusted for splits, dividends, and recapitalizations) for any 20 trading days within any 30-trading day period post-closing, 50% of the aggregate Sponsor and Class B shares shall satisfy the release condition and transition instantly into full public float...",
    highlightedPhrase: "daily VWAP equals or exceeds $12.00 for 20 trading days... 50% of shares transition instantly to public float...",
    analysis: {
      epistemicStatus: 'STRUCTURAL_INFERENCE',
      confidence: "94% Mathematical Constraint",
      consequenceChain: "Price threshold trigger acts as a massive supply-absorption bottleneck. The immediate release of 15.2M shares into a thin, retail-heavy ADTV (Average Daily Trading Volume) creates downstream liquidation cascade.",
      unpricedRisk: "Structural mismatch between retail float absorption limits and locked-up insider supply, causing high probability of structural de-SPAC collapse upon threshold breach."
    }
  },
  {
    id: "TWO-CCM-EXCERPT",
    source: "Form DEFM14A, Def. Merger Agreement, Clause 8.2 // TWO-CCM",
    type: "FORM DEFM14A",
    excerptTitle: "Asymmetric Break-Fee Deterrences",
    rawText: "Section 8.2(b). In the event this Agreement is terminated by the Seller to accept a Superior Proposal, or by the Purchaser pursuant to an Adverse Recommendation Change, the Company shall pay to Purchaser a non-refundable termination fee of $75,400,000 within twenty-four (24) hours of termination, representing 6.36% of current aggregate capital value, as a mutually agreed liquidated damages settlement...",
    highlightedPhrase: "termination fee of $75,400,000... representing 6.36% of current aggregate capital value...",
    analysis: {
      epistemicStatus: 'ADVERSARIAL_HYPOTHESIS',
      confidence: "88% Behavioral Risk Profile",
      consequenceChain: "Defensive merger architecture intentionally raises break-fee hurdle to 212% of traditional market standards. The magnitude of this fee structurally deters premium alternative bidders.",
      unpricedRisk: "Board fiduciary misalignment: The proxy serves to entrench legacy management by making alternative bids economically irrational, forcing shareholders into asymmetric vote dynamics."
    }
  }
];

export default function EvidentiaryTracer() {
  const [activeExcerptId, setActiveExcerptId] = useState(EXCERPTS[0].id);
  const activeExcerpt = EXCERPTS.find(e => e.id === activeExcerptId) || EXCERPTS[0];
  const [highlightActive, setHighlightActive] = useState(true);

  return (
    <section className="py-28 px-6 border-t border-[var(--border-color)] bg-[var(--bg-primary)] relative" id="traceability">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--brand-purple)_0%,transparent_40%)] opacity-[0.02]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
              <Search className="w-3 h-3 text-[var(--brand-cyan)]" />
              Section 03 // Audit & Traceability
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 tracking-tight">Evidentiary Traceability</h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              We do not present unverified AI generalizations. Every pressure claim we map traces directly back to precise clauses, S-4 exclusions, and SEC statements. Our platform preserves absolute verification integrity.
            </p>
          </div>
          <div className="text-right font-mono text-xs text-[var(--text-tertiary)] hidden md:block">
            <span className="text-[var(--brand-cyan)]">// EVIDENCE CONTROL LAYER: ACTIVE</span>
          </div>
        </div>

        {/* Dynamic Filing Tracer Console */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Excerpt Selector & Raw Legal Document */}
          <div className="lg:col-span-7 flex flex-col border border-[var(--border-color)] bg-[var(--bg-secondary)]/10">
            
            {/* Filing Selector Tab Bar */}
            <div className="flex border-b border-[var(--border-color)] overflow-x-auto shrink-0 bg-[var(--bg-secondary)]/30">
              {EXCERPTS.map(ex => (
                <button
                  key={ex.id}
                  onClick={() => {
                    setActiveExcerptId(ex.id);
                    setHighlightActive(true);
                  }}
                  className={`px-4 py-3 font-mono text-[10px] uppercase tracking-wider shrink-0 transition-colors border-r border-[var(--border-color)] ${
                    activeExcerptId === ex.id 
                      ? 'bg-[var(--bg-primary)] text-[var(--brand-cyan)] font-semibold border-t-2 border-t-[var(--brand-cyan)]' 
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]/50'
                  }`}
                >
                  {ex.type}
                </button>
              ))}
            </div>

            {/* Document Header Metadata */}
            <div className="p-4 border-b border-[var(--border-color)]/60 bg-[var(--bg-primary)] flex justify-between items-center text-[10px] font-mono text-[var(--text-tertiary)] uppercase">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse"></span>
                <span>{activeExcerpt.source}</span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setHighlightActive(!highlightActive)}
                  className={`hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 ${highlightActive ? 'text-[var(--brand-cyan)]' : 'text-[var(--text-tertiary)]'}`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{highlightActive ? 'HIGHLIGHT: ON' : 'HIGHLIGHT: OFF'}</span>
                </button>
              </div>
            </div>

            {/* Simulated Live Filings Reader Window */}
            <div className="p-8 md:p-12 font-mono text-xs md:text-sm text-left leading-relaxed text-[var(--text-secondary)] overflow-y-auto max-h-[360px] bg-[var(--bg-primary)] flex-1 relative custom-scroll">
              <div className="absolute top-0 left-0 w-8 h-full bg-[var(--bg-secondary)]/20 border-r border-[var(--border-color)]/30 select-none flex flex-col items-center py-8 text-[9px] text-[var(--text-tertiary)] font-mono pointer-events-none space-y-3">
                {Array.from({ length: 11 }).map((_, index) => (
                  <span key={index}>{(index + 1) * 10}</span>
                ))}
              </div>
              
              <div className="pl-10 space-y-6 text-justify">
                <div className="text-[10px] text-[var(--text-tertiary)] tracking-widest">{`[SEC TRANSACT RECORD ENTRY: #${activeExcerpt.id.slice(0, 8)}]`}</div>
                <h4 className="text-[var(--text-primary)] font-bold uppercase text-sm tracking-wide">{activeExcerpt.excerptTitle}</h4>
                <p>
                  {(() => {
                    const parts = activeExcerpt.rawText.split(activeExcerpt.highlightedPhrase);
                    if (parts.length === 2) {
                      return (
                        <>
                          {parts[0]}
                          <span 
                            className={`p-0.5 transition-all duration-300 font-medium cursor-pointer ${
                              highlightActive 
                                ? 'bg-[var(--brand-cyan)]/20 border-b border-[var(--brand-cyan)] text-[var(--text-primary)] shadow-[0_0_8px_rgba(0,184,217,0.1)]' 
                                : ''
                            }`}
                          >
                            {activeExcerpt.highlightedPhrase}
                          </span>
                          {parts[1]}
                        </>
                      );
                    }
                    return activeExcerpt.rawText;
                  })()}
                </p>
                <div className="text-[9px] text-[var(--text-tertiary)] border-t border-[var(--border-color)]/50 pt-4 flex gap-4">
                  <span>FORMAT: UNSECURED_STREAM</span>
                  <span>ENCODING: UTF-8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tracer Analytics Insight Card */}
          <div className="lg:col-span-5 flex flex-col justify-between border border-[var(--border-color)] bg-[var(--bg-primary)] relative overflow-hidden p-6 md:p-8">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(ellipse_at_top_right,var(--brand-cyan)_0%,transparent_60%)] opacity-10 pointer-events-none"></div>
            
            <div className="space-y-8">
              
              {/* Epistemic Status Banner */}
              <div className="flex items-center justify-between border-b border-[var(--border-color)]/60 pb-4">
                <div className="space-y-1">
                  <div className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-wider">EPISTEMIC STATE MATRIX</div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-none ${
                      activeExcerpt.analysis.epistemicStatus === 'VERIFIED_FACT' 
                        ? 'bg-[var(--text-primary)]' 
                        : activeExcerpt.analysis.epistemicStatus === 'STRUCTURAL_INFERENCE' 
                        ? 'bg-[var(--brand-cyan)]' 
                        : 'bg-[var(--brand-purple)]'
                    }`}></span>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]">
                      {activeExcerpt.analysis.epistemicStatus.replace('_', ' ')}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-wider">VERIFICATION RATING</div>
                  <div className="text-xs font-mono font-bold text-[var(--brand-cyan)]">{activeExcerpt.analysis.confidence}</div>
                </div>
              </div>

              {/* Analytical Extract Node */}
              <div className="space-y-3">
                <div className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-[0.2em] flex items-center gap-1.5">
                  <CornerDownRight className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> 
                  Operational Influence Pathway
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {activeExcerpt.analysis.consequenceChain}
                </p>
              </div>

              {/* Unpriced Consequence Block */}
              <div className="p-5 border border-red-500/10 bg-red-500/5 space-y-3">
                <div className="font-mono text-[10px] text-red-500/90 uppercase tracking-[0.2em] flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                  Unpriced Risk Exposure
                </div>
                <p className="text-sm font-medium text-[var(--text-primary)] leading-relaxed">
                  {activeExcerpt.analysis.unpricedRisk}
                </p>
              </div>

            </div>

            <div className="pt-6 border-t border-[var(--border-color)]/60 mt-8 flex justify-between items-center">
              <div className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-wider">
                WE DO THE READING. YOU EXECUTE THE LEVERAGE.
              </div>
              <CheckCircle className="w-4 h-4 text-[var(--brand-cyan)] opacity-70" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
