import React from 'react';
import { Shield, FileCheck, CheckCircle2, AlertOctagon, HelpCircle, Layers, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EvidenceStandard() {
  return (
    <div className="py-24 px-6 max-w-6xl mx-auto space-y-20">
      
      {/* Top Header */}
      <div className="space-y-4 border-b border-[var(--border-color)] pb-10">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
          <Shield className="w-3 h-3" /> INSTITUTIONAL INTEGRITY // EPISTEMIC RULES
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
          The Raven Evidence Standard
        </h1>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl">
          A mathematically bounded framework for corporate transactions. We explicitly separate verbatim disclosure facts from deterministic calculations, structural inferences, and adversarial hypotheses.
        </p>
      </div>

      {/* Core Covenant Banner */}
      <div className="p-8 border border-[var(--brand-cyan)]/40 bg-[var(--brand-cyan)]/5 space-y-3">
        <div className="font-mono text-xs font-bold text-[var(--brand-cyan)] uppercase tracking-widest">
          THE FOUNDATIONAL COVENANT
        </div>
        <div className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
          "No analytical inference is ever presented as a verified fact."
        </div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          Every statement produced by Raven carries an immutable epistemic label. When a transaction analyst or general counsel reviews a Raven artifact, they know with 100% certainty whether an assertion is cited verbatim from an SEC schedule or derived through pressure modeling.
        </p>
      </div>

      {/* 5-Tier Detailed Breakdown */}
      <div className="space-y-8">
        <div className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] border-b border-[var(--border-color)] pb-3">
          THE FIVE EPISTEMIC TIERS
        </div>

        <div className="space-y-6">
          
          {/* Tier 1 */}
          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-color)] pb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-emerald-400">TIER 01</span>
                <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">Verified Fact</h3>
              </div>
              <span className="px-2.5 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] uppercase font-bold">
                100% PROVENANCE CERTAINTY
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              A verbatim quotation, statutory text, financial line item, or share count extracted directly from an official public filing (e.g., Form 10-K, 10-Q, 8-K, S-4, DEFM14A, Schedule 13D/G). Every verified fact must include the SEC Accession Number, filing date, and exact page or section coordinates.
            </p>
            <div className="p-4 bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] font-mono text-xs text-[var(--text-primary)]">
              <span className="text-[var(--text-tertiary)] block text-[10px] mb-1">CANONICAL EXAMPLE:</span>
              "The ESOP Trust holds an aggregate of 414,733 shares of Common Stock." (Schedule 13G, SEC Accession #0001437749-26-003412, Item 4).
            </div>
          </div>

          {/* Tier 2 */}
          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-color)] pb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-cyan-400">TIER 02</span>
                <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">Derived Computation</h3>
              </div>
              <span className="px-2.5 py-0.5 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-[9px] uppercase font-bold">
                DETERMINISTIC MATHEMATICS
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              A deterministic mathematical calculation combining two or more verified facts without subjective heuristics or estimated weighting. Given the inputs, the output produces exactly one mathematically inevitable result.
            </p>
            <div className="p-4 bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] font-mono text-xs text-[var(--text-primary)]">
              <span className="text-[var(--text-tertiary)] block text-[10px] mb-1">CANONICAL EXAMPLE:</span>
              414,733 total ESOP shares - 76,944 passed-through participant shares = 337,789 sole trustee voting shares (47,058 share deficit vs 384,847 activist shares).
            </div>
          </div>

          {/* Tier 3 */}
          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-color)] pb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-purple-400">TIER 03</span>
                <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">Structural Inference</h3>
              </div>
              <span className="px-2.5 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 font-mono text-[9px] uppercase font-bold">
                BOUNDED CAUSAL REASONING
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              An analytical deduction linking contract clauses, regulatory thresholds, or balance sheet structures to specific deal friction under stress. It models what happens if an operational, macroeconomic, or legal contingency occurs.
            </p>
            <div className="p-4 bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] font-mono text-xs text-[var(--text-primary)]">
              <span className="text-[var(--text-tertiary)] block text-[10px] mb-1">CANONICAL EXAMPLE:</span>
              The standard MAE carve-out precluding credit valuation write-downs forces the buyer to absorb a potential $14.2M unreserved loan mark directly into pro-forma tangible common equity.
            </div>
          </div>

          {/* Tier 4 */}
          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-color)] pb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-amber-400">TIER 04</span>
                <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">Adversarial Hypothesis</h3>
              </div>
              <span className="px-2.5 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-[9px] uppercase font-bold">
                TACTICAL STRESS SIMULATION
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              A tactical simulation of how an hostile acquirer, activist hedge fund, litigator, or regulatory agency would exploit identified structural vulnerabilities to maximize concessions or scuttle a transaction.
            </p>
            <div className="p-4 bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] font-mono text-xs text-[var(--text-primary)]">
              <span className="text-[var(--text-tertiary)] block text-[10px] mb-1">CANONICAL EXAMPLE:</span>
              Activist solicits non-management ESOP participants to withhold voting instructions, triggering pass-through neutralization and winning the board slate vote.
            </div>
          </div>

        </div>
      </div>

      {/* Claim Adjudication System */}
      <div className="p-8 md:p-12 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 space-y-8">
        <div className="space-y-2">
          <div className="font-mono text-xs text-[var(--brand-cyan)] uppercase tracking-widest font-bold">
            CROSS-DOCUMENT CLAIM ADJUDICATION
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
            How Raven Adjudicates Contradictory Filings
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            In complex corporate transactions, disclosure statements often drift across successive amendments (S-4 vs S-4/A vs 8-K). Raven automatically adjudicates claims against 5 distinct validation states:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 border border-emerald-500/20 bg-emerald-500/5 space-y-2">
            <div className="font-mono text-xs font-bold text-emerald-400 uppercase">VERIFIED</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Supported by consistent, uncontradicted evidence in active, primary SEC schedules.
            </p>
          </div>

          <div className="p-5 border border-red-500/20 bg-red-500/5 space-y-2">
            <div className="font-mono text-xs font-bold text-red-400 uppercase">DISPUTED</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Identifies direct substantive contradictions between separate disclosures or statements.
            </p>
          </div>

          <div className="p-5 border border-amber-500/20 bg-amber-500/5 space-y-2">
            <div className="font-mono text-xs font-bold text-amber-400 uppercase">UNSUPPORTED</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Claim asserted by market participants but lacking any official filing backing.
            </p>
          </div>

          <div className="p-5 border border-gray-500/20 bg-gray-500/5 space-y-2">
            <div className="font-mono text-xs font-bold text-gray-400 uppercase">SUPERSEDED</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Prior contract terms formally amended or replaced by an updated definitive agreement.
            </p>
          </div>

          <div className="p-5 border border-purple-500/20 bg-purple-500/5 space-y-2 md:col-span-2">
            <div className="font-mono text-xs font-bold text-purple-400 uppercase">SPECULATIVE</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Plausible scenario derived from sector analogies or tail-risk modeling, explicitly demarcated as unproven hypothesis.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-xl font-bold font-heading text-[var(--text-primary)]">
            Ready to audit a live transaction?
          </div>
          <div className="text-xs text-[var(--text-secondary)] font-mono mt-1">
            Order an 8-part forensic intelligence review on any announced transaction.
          </div>
        </div>

        <Link
          to="/transaction-review"
          className="px-6 py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 font-mono text-xs font-bold uppercase tracking-wider transition-opacity"
        >
          View Engagement Details ($10K)
        </Link>
      </div>

    </div>
  );
}
