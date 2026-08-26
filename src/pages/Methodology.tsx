import React from 'react';
import { 
  Terminal, 
  Brain, 
  Shield, 
  ChevronRight, 
  Activity, 
  FileText, 
  CheckCircle2, 
  Scale, 
  GitBranch, 
  AlertTriangle, 
  Lock, 
  ArrowRight,
  BookOpen,
  Layers,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Methodology() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto space-y-20">
      
      {/* FAQ Schema for GEO/AI-Search crawling */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Raven Standard for Transaction Intelligence?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Raven Standard is a public, deterministic epistemic framework for auditing complex corporate transactions. It enforces strict claim classification, multi-agent adversarial debate, zero-temporal collapse validation, and cryptographic commit tracking across 100% public SEC filings."
              }
            },
            {
              "@type": "Question",
              "name": "How does Raven separate Verified Facts from Inferences?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Raven categorizes all analytical assertions into 5 strict tiers: Verified Facts (verbatim line citations), Derived Computations (deterministic arithmetic), Structural Inferences (causal consequence logic), Adversarial Hypotheses (stress simulations), and Unresolved Information Gaps."
              }
            }
          ]
        })}
      </script>

      {/* HEADER */}
      <header className="space-y-6 border-b border-[var(--border-color)] pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
          <BookOpen className="w-3 h-3 text-[var(--brand-cyan)]" />
          PUBLIC EPISTEMIC SPECIFICATION
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.1]">
          The Raven Standard for Transaction Intelligence
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl">
          The public methodology governing claim classification, adversarial interrogation, falsification gates, and decision-state reconstruction in complex M&A transactions.
        </p>

        <div className="pt-4 flex flex-wrap gap-4 text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 100% PUBLIC FILINGS // ZERO MNPI
          </div>
          <span>|</span>
          <div>SPECIFICATION VERSION: 2026.4</div>
          <span>|</span>
          <div>DETERMINISTIC & AUDITABLE</div>
        </div>
      </header>

      {/* THE 12 PILLARS OF THE RAVEN STANDARD */}
      <div className="space-y-16">
        
        {/* Section 1: Evidence Hierarchy & Claim Classification */}
        <section className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center font-mono font-bold text-xs bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30">
              01
            </span>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              Evidence Hierarchy & 5-Tier Claim Classification
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Generic LLMs blend raw contractual facts with speculative management optimism into single unstructured narratives. The Raven Standard strictly segregates every assertion into five deterministic epistemic categories:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2 font-mono text-xs">
            <div className="p-3 border border-emerald-500/30 bg-emerald-500/5 space-y-1">
              <div className="font-bold text-emerald-400">TIER 1: FACT</div>
              <div className="text-[10px] text-[var(--text-secondary)]">Verbatim SEC quote with EDGAR line accession. 100% confidence.</div>
            </div>
            <div className="p-3 border border-blue-500/30 bg-blue-500/5 space-y-1">
              <div className="font-bold text-blue-400">TIER 2: COMPUTATION</div>
              <div className="text-[10px] text-[var(--text-secondary)]">Deterministic mathematical calculation (dilution ratios, EVE shocks).</div>
            </div>
            <div className="p-3 border border-purple-500/30 bg-purple-500/5 space-y-1">
              <div className="font-bold text-purple-400">TIER 3: INFERENCE</div>
              <div className="text-[10px] text-[var(--text-secondary)]">Causal structural logic derived directly from cross-clause interplay.</div>
            </div>
            <div className="p-3 border border-amber-500/30 bg-amber-500/5 space-y-1">
              <div className="font-bold text-amber-400">TIER 4: HYPOTHESIS</div>
              <div className="text-[10px] text-[var(--text-secondary)]">Adversarial stress scenario modeling downside counterparty behaviors.</div>
            </div>
            <div className="p-3 border border-rose-500/30 bg-rose-500/5 space-y-1">
              <div className="font-bold text-rose-400">TIER 5: UNRESOLVED</div>
              <div className="text-[10px] text-[var(--text-secondary)]">Explicit information vacuum or unverified non-SEC target asset gap.</div>
            </div>
          </div>
        </section>

        {/* Section 2: Temporal Validation & Anti-Collapse Guards */}
        <section className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center font-mono font-bold text-xs bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30">
              02
            </span>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              Temporal Validation & Chronological Sequence Enforcement
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Transactions fail because events unfold sequentially over time, yet standard diligence tools treat entire document repositories as a single static point. The Raven Standard enforces:
          </p>
          <ul className="space-y-2 text-xs text-[var(--text-secondary)] list-disc pl-6 font-sans">
            <li><strong>Zero Temporal Collapse:</strong> Enforces distinct timestamp ordering between pre-signing negotiations, tender expiration cutoffs, financing disclosures, and regulatory drop-dead dates.</li>
            <li><strong>Willful Breach Chronology:</strong> Reconstructs exact 24-hour gaps (e.g. tender expiration before financing deficit disclosures) to establish actionable breach liabilities.</li>
            <li><strong>Lock-Up & Rule 144 Float Schedules:</strong> Models exact 180-day and VWAP-accelerated lock-up release cascades to predict float saturation.</li>
          </ul>
        </section>

        {/* Section 3: Multi-Agent Adversarial Debate Protocol */}
        <section className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center font-mono font-bold text-xs bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30">
              03
            </span>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              Multi-Agent Adversarial Interrogation
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Consensus-seeking AI creates blindspots by averaging contradictory positions. The Raven Standard enforces dialectical tension between opposing specialized reasoning agents:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
              <div className="font-bold text-[var(--brand-cyan)] uppercase">THE SELLER ADVOCATE</div>
              <p className="text-[var(--text-secondary)] font-sans text-xs">
                Defends deal rationale, aligns with standard customary drafting, highlights commercial growth synergies, and explains preferred governance ring-fencing.
              </p>
            </div>
            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
              <div className="font-bold text-rose-400 uppercase">THE ADVERSARIAL BUYER</div>
              <p className="text-[var(--text-secondary)] font-sans text-xs">
                Audits downside asymmetric exposure, tests non-survival of reps & warranties, calculates post-close litigation cash drag, and isolates minority shareholder marginalization.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Automated Falsification & Cognitive Rejection Gates */}
        <section className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center font-mono font-bold text-xs bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30">
              04
            </span>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              Automated Falsification & Cognitive Rejection Gates
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Before any strategic conclusion is approved, it must clear four automated falsification gates designed to eliminate confirmation bias and management puffery:
          </p>
          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 flex items-start gap-3">
              <span className="text-[var(--brand-cyan)] font-bold">GATE 1:</span>
              <div>
                <span className="font-bold text-[var(--text-primary)]">Absolute Recovery Eradication:</span> Rejects assertions assuming 100% CVR or earnout monetization without verified milestone capitalization.
              </div>
            </div>
            <div className="p-3 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 flex items-start gap-3">
              <span className="text-[var(--brand-cyan)] font-bold">GATE 2:</span>
              <div>
                <span className="font-bold text-[var(--text-primary)]">Entity Discontinuity Verification:</span> Cross-checks operating subsidiaries vs regional holding companies to prevent multi-billion dollar entity mix-ups.
              </div>
            </div>
            <div className="p-3 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 flex items-start gap-3">
              <span className="text-[var(--brand-cyan)] font-bold">GATE 3:</span>
              <div>
                <span className="font-bold text-[var(--text-primary)]">Section 13(d) Syndicate Coordination Gate:</span> Audits PIPE voting agreements to verify whether coordinated voting crosses statutory group thresholds.
              </div>
            </div>
            <div className="p-3 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 flex items-start gap-3">
              <span className="text-[var(--brand-cyan)] font-bold">GATE 4:</span>
              <div>
                <span className="font-bold text-[var(--text-primary)]">Fiduciary Non-Survival Check:</span> Flags any agreement where reps & warranties terminate at closing with zero indemnity escrow.
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Pressure Propagation & Decision-State Reconstruction */}
        <section className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center font-mono font-bold text-xs bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30">
              05
            </span>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              Pressure Propagation & Decision-State Reconstruction
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Legal contracts are dynamic state machines. A shift in one covenant ripples across balance sheets, voting thresholds, and executive authority. Raven maps the complete 6-stage cascade:
          </p>
          <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] font-mono text-xs text-[var(--text-primary)] leading-relaxed">
            CLAUSE (Schedule 1.5 Net Cash Downward Adjustment) <br/>
            &nbsp;&nbsp;↓ CONSTRAINT (Target clinical cash burn breaches Target Cash baseline) <br/>
            &nbsp;&nbsp;↓ COUNTERPARTY BEHAVIOR (Buyer refuses extension without equity haircut) <br/>
            &nbsp;&nbsp;↓ FINANCIAL CONSEQUENCE (Legacy float allocation diluted to sub-1.00%) <br/>
            &nbsp;&nbsp;↓ GOVERNANCE CONSEQUENCE (100% board control reconstitutes to buyer) <br/>
            &nbsp;&nbsp;↓ DECISION STATE (Target board loses walkaway leverage and must accept closing)
          </div>
        </section>

        {/* Section 6: Cryptographic Commit Layer & Immutable Provenance */}
        <section className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center font-mono font-bold text-xs bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30">
              06
            </span>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              Cryptographic Commit Layer & Fiduciary Accountability
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Traditional transaction advisors rewrite analytical records in hindsight. The Raven Standard freezes every fact, computational proof, and risk score with a SHA-256 cryptographic hash before deal outcomes are known. This creates an unalterable, time-stamped evidentiary paper trail protecting fiduciaries and investment committees.
          </p>
        </section>

      </div>

      {/* CTA SECTION */}
      <section className="p-8 md:p-12 border border-[var(--brand-cyan)]/40 bg-[var(--brand-cyan)]/5 text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
          Audit Your Live Transaction Under the Raven Standard
        </h3>
        <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
          Commission an independent, cryptographically committed 8-part adversarial transaction review within 48 to 72 hours.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <Link
            to="/request-assessment"
            className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Request Transaction Assessment <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/raven-engine"
            className="border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            Explore The Raven Engine <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
