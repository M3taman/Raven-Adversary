import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, FileText, Scale, Database } from 'lucide-react';

export function FeasibilityMatrix() {
  return (
    <section className="py-24 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/10" id="feasibility">
      <div className="max-w-6xl mx-auto space-y-14">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30 font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
            <Scale className="w-3 h-3" /> TRANSACTION ELIGIBILITY // OPERATIONAL BOUNDARIES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
            Transaction Feasibility & Scope Framework
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            We define our analytical scope strictly by the quality of primary public disclosures. Before engaging, verify whether your transaction meets our evidence threshold.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Supported */}
          <div className="p-8 border border-emerald-500/40 bg-[var(--bg-primary)] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> 01 // SUPPORTED
                </span>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] font-bold">
                  HIGH-CONVICTION
                </span>
              </div>

              <p className="text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
                Transactions with definitive, unredacted public regulatory filings and verifiable debt schedules.
              </p>

              <ul className="space-y-3 font-mono text-xs text-[var(--text-secondary)]">
                <li className="space-y-1">
                  <strong className="text-[var(--text-primary)] block">• U.S. Public M&A Combinations</strong>
                  <span className="text-[11px] text-[var(--text-tertiary)]">Merger agreements filed under Form S-4, DEFM14A, or Form 8-K.</span>
                </li>
                <li className="space-y-1">
                  <strong className="text-[var(--text-primary)] block">• Bank Holding Company Consolidations</strong>
                  <span className="text-[11px] text-[var(--text-tertiary)]">Interagency bank applications, FDIC/Fed supervisory filings, Call Reports.</span>
                </li>
                <li className="space-y-1">
                  <strong className="text-[var(--text-primary)] block">• De-SPAC Business Combinations</strong>
                  <span className="text-[11px] text-[var(--text-tertiary)]">Form S-4/A, proxy disclosures, redemption thresholds, sponsor lockups.</span>
                </li>
                <li className="space-y-1">
                  <strong className="text-[var(--text-primary)] block">• Contested Shareholder Votes & Proxies</strong>
                  <span className="text-[11px] text-[var(--text-tertiary)]">Schedule 14A, Schedule 13D/G, activist demand letters, trust voting terms.</span>
                </li>
                <li className="space-y-1">
                  <strong className="text-[var(--text-primary)] block">• Hostile Tender Offers</strong>
                  <span className="text-[11px] text-[var(--text-tertiary)]">Schedule TO, Schedule 14D-9, break-fee disputes, matching rights.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)] font-mono text-[10px] text-emerald-400 font-bold uppercase">
              Full 16-Chapter Dossier Available
            </div>
          </div>

          {/* Column 2: Partially Supported */}
          <div className="p-8 border border-amber-500/40 bg-[var(--bg-primary)] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> 02 // PARTIALLY SUPPORTED
                </span>
                <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 font-mono text-[9px] font-bold">
                  CONDITIONAL SCOPE
                </span>
              </div>

              <p className="text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
                Transactions where public evidence is partial, evolving, or subject to jurisdictional variation.
              </p>

              <ul className="space-y-3 font-mono text-xs text-[var(--text-secondary)]">
                <li className="space-y-1">
                  <strong className="text-[var(--text-primary)] block">• Cross-Border Public Transactions</strong>
                  <span className="text-[11px] text-[var(--text-tertiary)]">Supported if primary English disclosures (SEC Form F-4, 20-F) are available.</span>
                </li>
                <li className="space-y-1">
                  <strong className="text-[var(--text-primary)] block">• Chapter 11 Reorganizations</strong>
                  <span className="text-[11px] text-[var(--text-tertiary)]">Supported if reorganization plans and disclosure statements are on public dockets.</span>
                </li>
                <li className="space-y-1">
                  <strong className="text-[var(--text-primary)] block">• Preliminary Draft Proxies (PREM14A)</strong>
                  <span className="text-[11px] text-[var(--text-tertiary)]">Baseline analysis conducted on preliminary filing; scope updated upon definitive filing.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)] font-mono text-[10px] text-amber-400 font-bold uppercase">
              Scope Evaluated During Feasibility Check
            </div>
          </div>

          {/* Column 3: Outside Scope */}
          <div className="p-8 border border-red-500/40 bg-[var(--bg-primary)] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-widest flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" /> 03 // OUTSIDE SCOPE
                </span>
                <span className="px-2 py-0.5 bg-red-500/10 text-red-400 font-mono text-[9px] font-bold">
                  REJECTED
                </span>
              </div>

              <p className="text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
                Transactions or tasks that cannot be responsibly executed using verifiable public evidence.
              </p>

              <ul className="space-y-3 font-mono text-xs text-[var(--text-secondary)]">
                <li className="space-y-1">
                  <strong className="text-[var(--text-primary)] block">• Pure Private-to-Private Deals</strong>
                  <span className="text-[11px] text-[var(--text-tertiary)]">Zero public SEC or regulatory disclosures available to audit.</span>
                </li>
                <li className="space-y-1">
                  <strong className="text-[var(--text-primary)] block">• Confidential Treatment Requests (CTRs)</strong>
                  <span className="text-[11px] text-[var(--text-tertiary)]">Transactions where key pricing formulas or covenants are legally withheld from public view.</span>
                </li>
                <li className="space-y-1">
                  <strong className="text-[var(--text-primary)] block">• Unannounced Market Rumors</strong>
                  <span className="text-[11px] text-[var(--text-tertiary)]">Situations lacking formal regulatory disclosure filings on EDGAR.</span>
                </li>
                <li className="space-y-1">
                  <strong className="text-[var(--text-primary)] block">• Statutory Legal or Fairness Opinions</strong>
                  <span className="text-[11px] text-[var(--text-tertiary)]">Raven provides transaction intelligence, not underwriting commitments or formal legal counsel.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)] font-mono text-[10px] text-red-400 font-bold uppercase">
              Strict Non-Ingestion Boundaries
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
