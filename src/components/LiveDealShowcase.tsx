import React, { useState } from 'react';
import { FileText, Download, ExternalLink, ShieldAlert, Scale, ChevronRight, X, AlertTriangle, Layers, Eye, CheckCircle2 } from 'lucide-react';

interface DealArtifact {
  id: string;
  ticker: string;
  targetName: string;
  acquirerName: string;
  dealSize: string;
  dealStructure: string;
  auditId: string;
  compositeRisk: number;
  riskRating: 'ELEVATED' | 'HIGH' | 'CRITICAL';
  primaryRiskSummary: string;
  operativeClause: string;
  statutoryTrap: string;
  clauseCardPdf: string;
  executiveBriefPdf: string;
  forensicAuditPdf: string;
  keyStats: { label: string; value: string }[];
}

const LIVE_DEALS: DealArtifact[] = [
  {
    id: 'bwin',
    ticker: 'BWIN',
    targetName: 'The Baldwin Insurance Group, Inc.',
    acquirerName: 'Square Acquisition Parent (Sequence AI & Dell Family Office)',
    dealSize: '$7.7B Take-Private',
    dealStructure: 'Up-C Dual-Class Take-Private',
    auditId: '#RAVEN-AUDIT-THEB-SQUA-20261018-REV1',
    compositeRisk: 61,
    riskRating: 'ELEVATED',
    primaryRiskSummary: 'Omission of non-waivable majority-of-the-minority stockholder condition in an Up-C structure where insiders roll over ~7.3% equity and extract $298.45M TRA cash settlement.',
    operativeClause: 'Requisite Company Vote / Omission of MFW Condition (PREM14A Section 1)',
    statutoryTrap: 'Exposes the buyout to Delaware Entire Fairness review rather than deferential Business Judgment Review under Kahn v. M&F Worldwide Corp. (MFW).',
    clauseCardPdf: '/assets/aistudio/Raven_Clause_Cards_AUDIT-THEB-SQUA-20261018-REV1_a1b79e84.pdf',
    executiveBriefPdf: '/assets/aistudio/Raven_Executive_Brief_AUDIT-THEB-SQUA-20261018-REV1_8470355a.pdf',
    forensicAuditPdf: '/assets/aistudio/Raven_Forensic_Audit_16Ch_AUDIT-THEB-SQUA-20261018-REV1_0720a34f.pdf',
    keyStats: [
      { label: 'Insider Voting Power', value: '~30% (Class B)' },
      { label: 'TRA Cash Payout Cap', value: '$298.45M' },
      { label: 'Unaffiliated Float', value: 'Class A Squeeze-Out' },
      { label: 'Appraisal Exposure', value: 'DGCL § 262' }
    ]
  },
  {
    id: 'opch',
    ticker: 'OPCH',
    targetName: 'Option Care Health, Inc.',
    acquirerName: 'Onyx Bidco LLC (Clayton, Dubilier & Rice Fund XII & McKesson)',
    dealSize: '$5.8B All-Cash Buyout',
    dealStructure: 'Consortium Leveraged Buyout ($32.05/sh)',
    auditId: '#RAVEN-AUDIT-OPTI-ONYX-20261019-REV1',
    compositeRisk: 66,
    riskRating: 'ELEVATED',
    primaryRiskSummary: 'Section 8.03(c) several (non-joint) liability between CD&R and McKesson on the $291.93M Parent Breakup Fee, intersecting asymmetric HSR "reasonable best efforts" antitrust standard.',
    operativeClause: 'Section 8.03(c) Parent Termination Fee & Limited Guarantees (Form 8-K Item 1.01)',
    statutoryTrap: 'Target lacks step-in guarantee if one sponsor defaults; McKesson (~48.72% equity check) distribution overlaps create FTC/DOJ vertical foreclosure scrutiny without divestiture mandate.',
    clauseCardPdf: '/assets/aistudio/Raven_Clause_Cards_AUDIT-OPTI-ONYX-20261019-REV1_d9affd94.pdf',
    executiveBriefPdf: '/assets/aistudio/Raven_Executive_Brief_AUDIT-OPTI-ONYX-20261019-REV1_d4cf15f2.pdf',
    forensicAuditPdf: '/assets/aistudio/Raven_Forensic_Audit_16Ch_AUDIT-OPTI-ONYX-20261019-REV1_23df2cf4.pdf',
    keyStats: [
      { label: 'Parent Breakup Fee', value: '$291.93M (5.0%)' },
      { label: 'Sponsor Guarantee', value: 'Several & NOT Joint' },
      { label: 'McKesson Equity Stake', value: '$1.40B (48.72%)' },
      { label: 'Antitrust Standard', value: 'Reasonable Best Efforts' }
    ]
  },
  {
    id: 'itgr',
    ticker: 'ITGR',
    targetName: 'Integer Holdings Corporation',
    acquirerName: 'Armstrong Parent, Inc. (Kohlberg Kravis Roberts & Co. / KKR)',
    dealSize: '$4.3B All-Cash Merger',
    dealStructure: 'Private Equity Takeover ($127.00/sh)',
    auditId: '#RAVEN-AUDIT-INTE-ARMS-20261020-REV1',
    compositeRisk: 58,
    riskRating: 'ELEVATED',
    primaryRiskSummary: 'Final auction escalation compressed into an abrupt 60-minute blind window on July 30, 2026, paired with $154.0M break fee drag ($4.53/sh) and KKR 14.0% voting accumulation.',
    operativeClause: 'Section 5.03 Non-Solicitation & Section 8.03 Termination Break Fee',
    statutoryTrap: 'Revlon market-check exposure on auction pacing; DGCL § 251 absolute majority vote requirement where uninstructed broker non-votes count as votes AGAINST adoption.',
    clauseCardPdf: '/assets/aistudio/Raven_Clause_Cards_AUDIT-INTE-ARMS-20261020-REV1_403f41ad.pdf',
    executiveBriefPdf: '/assets/aistudio/Raven_Executive_Brief_AUDIT-INTE-ARMS-20261020-REV1_20a1cac1.pdf',
    forensicAuditPdf: '/assets/aistudio/Raven_Forensic_Audit_16Ch_AUDIT-INTE-ARMS-20261020-REV1_0c66a743.pdf',
    keyStats: [
      { label: 'Company Break Fee', value: '$154.0M ($4.53/sh)' },
      { label: 'Blind Auction Window', value: '60 Minutes (Revlon)' },
      { label: 'KKR Tarheel Voting Stake', value: '13.98% Physical' },
      { label: 'DGCL § 251 Threshold', value: '16,998,535 Votes' }
    ]
  },
  {
    id: 'pag',
    ticker: 'PAG',
    targetName: 'Penske Automotive Group, Inc.',
    acquirerName: 'Motown Acquisition Corp. (Roger Penske & Mitsui & Co.)',
    dealSize: '$212.00/sh Controller Buyout',
    dealStructure: 'Controller Going-Private (~72.6% Existing Stake)',
    auditId: '#RAVEN-AUDIT-PENS-MOTO-20261020-REV1',
    compositeRisk: 54,
    riskRating: 'ELEVATED',
    primaryRiskSummary: 'Defective MFW cleansing formulation conditioning minority approval on a "majority of votes cast by disinterested stockholders" under DGCL § 144 rather than outstanding shares.',
    operativeClause: 'Merger Agreement Section 1.01 & Form 8-K Item 1.01 (Disinterested Voting Standard)',
    statutoryTrap: 'Low-turnout sensitivity: Under 30% minority turnout, transaction can be approved by affirmative votes representing only 15.0% of the public float (4.1% of common stock).',
    clauseCardPdf: '/assets/aistudio/Raven_Clause_Cards_AUDIT-PENS-MOTO-20261020-REV1_856fb5ca.pdf',
    executiveBriefPdf: '/assets/aistudio/Raven_Executive_Brief_AUDIT-PENS-MOTO-20261020-REV1_8a28f6ef.pdf',
    forensicAuditPdf: '/assets/aistudio/Raven_Forensic_Audit_16Ch_AUDIT-PENS-MOTO-20261020-REV1_a6df9b4a.pdf',
    keyStats: [
      { label: 'Controller Control', value: '72.6% Locked Up' },
      { label: 'Minority Standard', value: 'Votes Cast (DGCL 144)' },
      { label: 'Passage Vulnerability', value: '15% of Public Float' },
      { label: 'Judicial Standard', value: 'Entire Fairness Risk' }
    ]
  }
];

export function LiveDealShowcase() {
  const [activeDealId, setActiveDealId] = useState<string>('bwin');
  const [modalPdf, setModalPdf] = useState<{ title: string; url: string } | null>(null);

  const activeDeal = LIVE_DEALS.find((d) => d.id === activeDealId) || LIVE_DEALS[0];

  return (
    <section className="py-12 border-y border-[var(--border-color)] bg-[var(--bg-secondary)]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/30 text-[10px] font-mono font-bold text-[var(--brand-cyan)] uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live October 2026 Engine Byproducts
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] font-heading">
              Live Transaction Forensic Teardowns
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-2xl font-sans">
              Inspect actual client-delivered forensic deliverables generated by the Raven Engine from definitive SEC EDGAR filings (Forms 8-K, PREM14A, Schedule 13D/E-3).
            </p>
          </div>

          <div className="text-right hidden sm:block font-mono text-[11px] text-[var(--text-tertiary)]">
            <div>DELIVERABLE SUITE: 1-PAGE CLAUSE CARD + 2-PAGE BRIEF + 16-CH AUDIT</div>
            <div className="text-emerald-400 font-semibold mt-0.5">TURNAROUND SLA: 60-MINUTES FOR RAPID DOSSIER</div>
          </div>
        </div>

        {/* Deal Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
          {LIVE_DEALS.map((deal) => {
            const isSelected = deal.id === activeDealId;
            return (
              <button
                key={deal.id}
                onClick={() => setActiveDealId(deal.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-[var(--card-bg)] border-[var(--brand-cyan)] shadow-lg shadow-[var(--brand-cyan)]/10'
                    : 'bg-[var(--card-bg)]/40 border-[var(--border-color)] hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--brand-cyan)]">
                    {deal.ticker}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
                    RISK {deal.compositeRisk}/100
                  </span>
                </div>
                <div className="text-xs font-semibold text-[var(--text-primary)] mt-1 truncate">
                  {deal.targetName}
                </div>
                <div className="text-[10px] font-mono text-[var(--text-tertiary)] mt-0.5">
                  {deal.dealSize}
                </div>
                {isSelected && (
                  <div className="absolute -bottom-px left-4 right-4 h-0.5 bg-[var(--brand-cyan)]"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Deal Intelligence Station */}
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 7 Cols: Deal Anatomy & Risk Vectors */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Target & Acquirer Title Block */}
              <div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--text-tertiary)] mb-1">
                  <span>AUDIT IDENTIFIER:</span>
                  <span className="text-[var(--brand-cyan)] font-bold">{activeDeal.auditId}</span>
                  <span className="text-slate-600">•</span>
                  <span>{activeDeal.dealStructure}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-heading">
                  {activeDeal.targetName} ({activeDeal.ticker})
                </h3>
                <div className="text-xs text-[var(--text-secondary)] mt-1">
                  Acquirer / Consortium: <span className="text-slate-200 font-medium">{activeDeal.acquirerName}</span>
                </div>
              </div>

              {/* Core Material Vulnerability Callout */}
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 text-left space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                  Primary Contractual / Statutory Exposure
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-medium">
                  "{activeDeal.primaryRiskSummary}"
                </p>
                <div className="pt-1 text-[11px] font-mono text-slate-400">
                  <span className="text-rose-300 font-bold">Judicial Consequence:</span> {activeDeal.statutoryTrap}
                </div>
              </div>

              {/* Operative Clause Reference */}
              <div className="p-3.5 rounded-lg bg-[var(--bg-primary)]/80 border border-[var(--border-color)] text-xs font-mono space-y-1">
                <div className="text-[10px] text-[var(--text-tertiary)] uppercase font-semibold">Operative Contractual Clause:</div>
                <div className="text-[var(--brand-cyan)]">{activeDeal.operativeClause}</div>
              </div>

              {/* 4 Quantitative Data Benchmarks */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {activeDeal.keyStats.map((stat, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] text-left">
                    <div className="text-[9px] font-mono text-[var(--text-tertiary)] uppercase leading-tight">{stat.label}</div>
                    <div className="text-xs font-bold font-mono text-slate-100 mt-1">{stat.value}</div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right 5 Cols: Tangible Artifact Previews & Downloads */}
            <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-[var(--bg-primary)]/90 border border-[var(--border-color)] space-y-5">
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[var(--brand-cyan)]" /> Client Deliverable Artifacts
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">100% UNREDACTED</span>
                </div>
                <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                  These verified PDF byproducts were compiled directly from SEC EDGAR filings for this transaction. Inspect the clause card or executive brief instantly.
                </p>
              </div>

              {/* Interactive Artifact Buttons */}
              <div className="space-y-2.5">
                
                {/* 1. View Clause Card */}
                <button
                  onClick={() => setModalPdf({ title: `${activeDeal.ticker} • Contractual Clause Card`, url: activeDeal.clauseCardPdf })}
                  className="w-full p-3 rounded-xl bg-[var(--card-bg)] hover:bg-slate-800/80 border border-[var(--border-color)] hover:border-[var(--brand-cyan)]/70 transition-all flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-[var(--brand-cyan)] group-hover:scale-105 transition-transform">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--text-primary)] font-heading">
                        1-Page Contractual Clause Card
                      </div>
                      <div className="text-[10px] font-mono text-[var(--text-tertiary)]">
                        Trigger mechanics, financial exposure & amplifiers
                      </div>
                    </div>
                  </div>
                  <Eye className="w-4 h-4 text-[var(--brand-cyan)] opacity-70 group-hover:opacity-100 transition-opacity" />
                </button>

                {/* 2. View Executive Brief */}
                <button
                  onClick={() => setModalPdf({ title: `${activeDeal.ticker} • 2-Page Executive Risk Brief`, url: activeDeal.executiveBriefPdf })}
                  className="w-full p-3 rounded-xl bg-[var(--card-bg)] hover:bg-slate-800/80 border border-[var(--border-color)] hover:border-[var(--brand-purple)]/70 transition-all flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-[var(--brand-purple)] group-hover:scale-105 transition-transform">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--text-primary)] font-heading">
                        2-Page Executive Transaction Brief
                      </div>
                      <div className="text-[10px] font-mono text-[var(--text-tertiary)]">
                        Cascade analysis, negative knowledge & lead mandates
                      </div>
                    </div>
                  </div>
                  <Eye className="w-4 h-4 text-[var(--brand-purple)] opacity-70 group-hover:opacity-100 transition-opacity" />
                </button>

                {/* 3. Download Full 16-Chapter Audit */}
                <a
                  href={activeDeal.forensicAuditPdf}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-3 rounded-xl bg-[var(--card-bg)] hover:bg-slate-800/80 border border-[var(--border-color)] hover:border-emerald-500/70 transition-all flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Download className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--text-primary)] font-heading">
                        16-Chapter Forensic Audit Dossier
                      </div>
                      <div className="text-[10px] font-mono text-emerald-400">
                        Full statutory citation ledger & stress tests (PDF)
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>

              </div>

              {/* Bottom Guarantee */}
              <div className="pt-2 border-t border-[var(--border-color)]/60 text-[10px] font-mono text-[var(--text-tertiary)] flex items-center justify-between">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> SHA-256 Verified Ingestion
                </span>
                <span>$2,499 RAPID DOSSIER SLA</span>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* PDF Modal Viewer */}
      {modalPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-secondary)]/50">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[var(--brand-cyan)]" />
                <span className="font-heading font-bold text-sm sm:text-base text-[var(--text-primary)]">
                  {modalPdf.title}
                </span>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={modalPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] hover:bg-slate-700 text-xs font-mono font-semibold text-[var(--brand-cyan)] border border-[var(--border-color)] flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Open in</span> New Tab
                </a>
                <a
                  href={modalPdf.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] hover:bg-slate-700 text-xs font-mono font-semibold text-slate-200 border border-[var(--border-color)] flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
                <button
                  onClick={() => setModalPdf(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded IFrame / Object */}
            <div className="flex-1 w-full bg-slate-950 p-1 relative flex flex-col">
              <iframe
                src={`${modalPdf.url}#toolbar=0&navpanes=0`}
                title={modalPdf.title}
                className="w-full h-full border-0 rounded-b-xl"
              />
              <div className="sm:hidden p-2 text-center text-[10px] font-mono text-slate-400 bg-slate-900 border-t border-slate-800">
                PDF not rendering on your mobile browser? <a href={modalPdf.url} target="_blank" rel="noopener noreferrer" className="text-[var(--brand-cyan)] underline font-bold">Tap here to open full PDF</a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
