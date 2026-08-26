import React from 'react';
import { 
  BookOpen, 
  GitBranch, 
  ShieldCheck, 
  Scale, 
  Layers, 
  Cpu, 
  Lock, 
  ArrowRight,
  Database,
  Search,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface LexiconEntry {
  id: string;
  term: string;
  shortDef: string;
  formalSpec: string;
  practicalExample: string;
  relatedTerms: string[];
}

const LEXICON_ENTRIES: LexiconEntry[] = [
  {
    id: "pressure-intelligence",
    term: "Institutional Pressure Intelligence",
    shortDef: "The discipline of modeling live corporate transactions as dynamic state machines to map how contractual, financing, and governance pressures propagate under operational or market variance.",
    formalSpec: "Unlike conventional due diligence (which inventories static legal representations in past-tense documents), Institutional Pressure Intelligence forecasts prospective decision-states. It evaluates how contingent covenant thresholds, working capital adjustments, and regulatory approval gates interact under downside stress scenarios.",
    practicalExample: "Modeling how a $1.2M clinical development cash-burn deviation triggers a Net Cash downward adjustment under Section 4.2 of an S-4 merger agreement, causing pro-forma equity ownership to breach a 19.9% shareholder approval veto threshold.",
    relatedTerms: ["Decision-State Reconstruction", "Pressure Propagation", "Contractual State Machine"]
  },
  {
    id: "decision-state",
    term: "Decision-State Reconstruction",
    shortDef: "Rebuilding the exact legal, financial, and strategic boundary conditions governing an executive board or investment committee at a specific point in time.",
    formalSpec: "A decision-state is a snapshot of all enforceable rights, statutory obligations, financing dependencies, and governance constraints binding deal principals. Reconstruction maps the available payoff matrix and unilateral termination options available to buyer and seller.",
    practicalExample: "Evaluating whether a target board retains a unilateral walkaway right on the Outside Date without incurring a $5.0M break fee after the counterparty fails to secure Category III regulatory clearance.",
    relatedTerms: ["Institutional Pressure Intelligence", "Falsification Gate", "Cryptographic Commit Layer"]
  },
  {
    id: "pressure-propagation",
    term: "Pressure Propagation (6-Stage Cascade)",
    shortDef: "The multi-variable transmission of contractual tension across operational, financial, and governance covenants.",
    formalSpec: "The 6-Stage Pressure Cascade model defines how an initial contractual trigger propagates through systemic layers: Clause Trigger → Operating Constraint → Behavioral Reaction → Financial Impact → Governance Shift → Terminal Decision State.",
    practicalExample: "Clause (Schedule 1.5 Net Cash definition) → Constraint ($10M minimum closing cash) → Behavior (target delays R&D spending to preserve cash) → Financial (clinical pipeline delay impairs fair value) → Governance (buyer demands Series A super-voting board seat) → Decision State (target forced into distressed restructuring).",
    relatedTerms: ["Contractual State Machine", "Adversarial Interrogation Protocol"]
  },
  {
    id: "epistemic-standard",
    term: "5-Tier Epistemic Standard (E1–E5)",
    shortDef: "A strict categorization system that prevents analytical inferences, computations, or hypothetical stress models from being conflated with verified primary facts.",
    formalSpec: "All assertions in a Raven Intelligence Dossier are partitioned into five discrete epistemic tiers: E1 (Verified Primary SEC Fact), E2 (Derived Deterministic Computation), E3 (Structural Causal Inference), E4 (Adversarial Stress Hypothesis), and E5 (Unresolved Information Gap).",
    practicalExample: "E1: 'Section 4.1 specifies an exchange ratio of 0.852.' vs. E3: 'If target cash falls below $5M, the exchange ratio automatically compresses by 14% based on Schedule 1.5 calculations.'",
    relatedTerms: ["Claim Status Taxonomy", "Falsification Gate"]
  },
  {
    id: "claim-status",
    term: "Evidentiary Claim Status Taxonomy",
    shortDef: "The formal tracking state of an evidentiary assertion throughout the lifecycle of a transaction review.",
    formalSpec: "Distinct from the epistemic tier (which defines what KIND of knowledge an assertion represents), Claim Status defines the CURRENT AUDIT STATE: VERIFIED (corroborated by primary accession), DISPUTED (contested by adversarial dialectic), UNSUPPORTED (lacking primary line citations), SUPERSEDED (overwritten by subsequent SEC amendment), or SPECULATIVE (probabilistic hypothesis).",
    practicalExample: "A management synergy claim of $50M cost savings is initially classified as E4 (Hypothesis) and marked UNSUPPORTED until verified by line-numbered statutory filings.",
    relatedTerms: ["5-Tier Epistemic Standard (E1–E5)", "Falsification Gate"]
  },
  {
    id: "falsification-gate",
    term: "Automated Falsification Gate",
    shortDef: "Deterministic filter algorithms designed to identify and eliminate cognitive biases, uncollateralized synergy assumptions, and temporal errors.",
    formalSpec: "Falsification gates test candidate hypotheses against rigorous exclusion criteria, including Temporal Collapse Prevention (disallowing backward-dating of amendments), Entity Discontinuity Eradication (preventing parent/sub confusion), and Absolute Recovery Rejection (eliminating unsupported 100% earnout recovery assumptions).",
    practicalExample: "Rejecting a seller's argument that Contingent Value Rights (CVRs) guarantee $15M in value when SEC Form 8-K disclosures reveal the clinical milestone relies on an uncommenced Phase III trial.",
    relatedTerms: ["Adversarial Interrogation Protocol", "Epistemic Standard"]
  },
  {
    id: "commit-layer",
    term: "Cryptographic Commit Layer",
    shortDef: "A cryptographic timestamping protocol that freezes transaction state models using SHA-256 hashes prior to market execution.",
    formalSpec: "To provide an auditable fiduciary paper trail for boards and investment committees, every analytical dossier, evidentiary finding, and pressure rating is bound to a SHA-256 cryptographic commit hash and timestamped before market events unfold. This prevents retroactive reframing or hindsight bias in transaction litigation.",
    practicalExample: "Generating commit hash `a7f9...4c21` for an InMed/Mentari assessment on 2026-02-18, establishing irrefutable proof that governance fracture was identified 45 days before the tender offer was amended.",
    relatedTerms: ["Decision-State Reconstruction", "Governance Center"]
  },
  {
    id: "state-machine",
    term: "Contractual State Machine",
    shortDef: "A computational representation of a transaction agreement where clauses act as state transitions triggered by operational or economic inputs.",
    formalSpec: "Rather than reading a 150-page Merger Agreement as static text, the Raven Engine decomposes the contract into nodes (decision rights, board compositions, cash balances) and edges (covenants, outside dates, indemnification caps). When a trigger variable changes, the entire topology recalculates instantly.",
    practicalExample: "Simulating how a bank's CET1 ratio falling below 10.5% automatically transitions the merger state from 'Customary Regulatory Review' to 'Mandatory Capital Plan Cure Period'.",
    relatedTerms: ["Institutional Pressure Intelligence", "Pressure Propagation"]
  }
];

export default function Lexicon() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto space-y-16">
      
      {/* Schema metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          "name": "The Raven Adversary Epistemic Lexicon & Taxonomy",
          "description": "Authoritative institutional definitions for Institutional Pressure Intelligence, Decision-State Reconstruction, 5-Tier Epistemic Standard, and Contractual State Machines.",
          "publisher": {
            "@type": "Organization",
            "name": "Raven Adversary Intelligence"
          }
        })}
      </script>

      {/* HEADER */}
      <header className="space-y-6 border-b border-[var(--border-color)] pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
          <BookOpen className="w-3.5 h-3.5 text-[var(--brand-cyan)]" />
          CANONICAL TAXONOMY & DEFINITIONS
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.1]">
          The Raven Epistemic Lexicon
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl">
          The formal conceptual vocabulary defining Institutional Pressure Intelligence, deterministic state-machine modeling, and falsification engineering for corporate transactions.
        </p>

        <div className="pt-4 flex flex-wrap gap-4 text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> CANONICAL INDUSTRY STANDARD
          </div>
          <span>|</span>
          <div>TAXONOMY VERSION: LEX-2026.4</div>
          <span>|</span>
          <div>AUDITABLE & ANCHORED</div>
        </div>
      </header>

      {/* QUICK JUMP ANCHORS */}
      <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 font-mono text-xs space-y-2">
        <div className="text-[10px] text-[var(--text-tertiary)] uppercase font-bold tracking-wider">
          Quick Concept Index
        </div>
        <div className="flex flex-wrap gap-2">
          {LEXICON_ENTRIES.map((entry) => (
            <a
              key={entry.id}
              href={`#${entry.id}`}
              className="px-2.5 py-1 border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:border-[var(--brand-cyan)] hover:text-[var(--brand-cyan)] transition-colors text-[11px]"
            >
              {entry.term}
            </a>
          ))}
        </div>
      </div>

      {/* LEXICON DEFINITION BLOCKS */}
      <div className="space-y-12">
        {LEXICON_ENTRIES.map((entry, idx) => (
          <article 
            key={entry.id}
            id={entry.id}
            className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6 scroll-mt-32 hover:border-[var(--brand-cyan)]/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-color)] pb-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center font-mono font-bold text-xs bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                  {entry.term}
                </h2>
              </div>
              <span className="font-mono text-[10px] uppercase text-[var(--brand-cyan)] tracking-widest bg-[var(--brand-cyan)]/5 px-2.5 py-1 border border-[var(--brand-cyan)]/20">
                SPEC: {entry.id.toUpperCase()}
              </span>
            </div>

            {/* Short Definition */}
            <div className="p-4 border-l-2 border-[var(--brand-cyan)] bg-[var(--bg-secondary)]/30 text-sm font-medium text-[var(--text-primary)] leading-relaxed">
              {entry.shortDef}
            </div>

            {/* Formal Technical Specification */}
            <div className="space-y-2">
              <div className="font-mono text-[10px] uppercase font-bold text-[var(--text-tertiary)] tracking-wider">
                Technical Specification
              </div>
              <p className="text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
                {entry.formalSpec}
              </p>
            </div>

            {/* Practical Transaction Example */}
            <div className="space-y-2">
              <div className="font-mono text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                Live Transaction Mechanics
              </div>
              <div className="p-3 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 font-mono text-xs text-[var(--text-secondary)] leading-snug">
                {entry.practicalExample}
              </div>
            </div>

            {/* Related Terms */}
            <div className="pt-2 flex items-center gap-2 font-mono text-[10px] text-[var(--text-tertiary)]">
              <span>Related Concepts:</span>
              <div className="flex flex-wrap gap-1.5">
                {entry.relatedTerms.map((rt, rIdx) => (
                  <span key={rIdx} className="px-2 py-0.5 border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)]">
                    {rt}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA STRIP */}
      <div className="p-8 border border-[var(--brand-cyan)]/40 bg-[var(--brand-cyan)]/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-bold text-base font-heading text-[var(--text-primary)]">
            Apply the Epistemic Standard to Your Deal
          </div>
          <p className="text-xs text-[var(--text-secondary)] font-mono">
            48–72 hour adversarial pressure audit ($10,000 Flat Fee).
          </p>
        </div>
        <Link
          to="/request-assessment"
          className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2 shrink-0"
        >
          Request Assessment <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
