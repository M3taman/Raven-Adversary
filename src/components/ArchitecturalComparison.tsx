import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Minus, 
  Cpu, 
  Scale, 
  Database, 
  ShieldCheck, 
  FileText, 
  GitBranch, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ComparisonDimension {
  category: string;
  genericAI: string;
  traditionalVDR: string;
  legacyAdvisory: string;
  ravenEngine: string;
  institutionalImpact: string;
}

const COMPARISON_DATA: ComparisonDimension[] = [
  {
    category: "Analytical Paradigm",
    genericAI: "Passive text summarization & probabilistic chat generation",
    traditionalVDR: "Static document hosting & keyword/regex pattern indexing",
    legacyAdvisory: "Manual checklist review & qualitative narrative drafting",
    ravenEngine: "Deterministic State Machine Modeling across cross-covenant mechanics",
    institutionalImpact: "Eliminates narrative ambiguity and models prospective contractual state transitions under stress."
  },
  {
    category: "Dialectical Methodology",
    genericAI: "Consensus-seeking output averaging conflicting clauses",
    traditionalVDR: "None (Raw unweighted document retrieval)",
    legacyAdvisory: "Review deliverables structured around deal milestone support",
    ravenEngine: "Multi-Agent Adversarial Debate (Seller Advocate vs. Adversarial Buyer)",
    institutionalImpact: "Systematically exposes latent structural dilution, hold-up points, and litigation cash drag."
  },
  {
    category: "Epistemic Discipline",
    genericAI: "Probabilistic generation prone to unsupported assertions unless independently verified",
    traditionalVDR: "Uncategorized data dumps with zero analytical hierarchy",
    legacyAdvisory: "Variable associate/partner consistency across multi-firm deal teams",
    ravenEngine: "5-Tier Epistemic Standard (E1 Fact, E2 Computation, E3 Inference, E4 Hypothesis, E5 Unresolved)",
    institutionalImpact: "Strictly segregates line-numbered SEC facts from derivative mathematical consequences."
  },
  {
    category: "Downside Stress & Pressure Propagation",
    genericAI: "Treats legal agreements as static, isolated text fragments",
    traditionalVDR: "Requires external offline financial spreadsheets",
    legacyAdvisory: "Siloed coordination between banking and legal workstreams",
    ravenEngine: "6-Stage Pressure Cascade (Clause → Constraint → Behavior → Financial → Governance → Decision)",
    institutionalImpact: "Exposes how a minor $1M cash burn variance cascades into 100% board control reconstitutions."
  },
  {
    category: "Falsification & De-Biasing Gates",
    genericAI: "Accepts management claims and optimistic synergy projections",
    traditionalVDR: "Neutral data silo; no cognitive validation",
    legacyAdvisory: "Review scope frequently conditioned on management assumptions",
    ravenEngine: "Automated Falsification Gates (Temporal Collapse Prevention, Entity Discontinuity Eradication)",
    institutionalImpact: "Excludes uncollateralized CVR payouts, entity discontinuities, and unbacked synergy puffery."
  },
  {
    category: "Provenance & Fiduciary Accountability",
    genericAI: "Probabilistic token prediction with non-repeatable traces",
    traditionalVDR: "Basic user access and document download audit logs",
    legacyAdvisory: "Working papers subject to retrospective narrative interpretation",
    ravenEngine: "Cryptographic Commit Layer (SHA-256 state hashes frozen prior to deal outcomes)",
    institutionalImpact: "Creates a tamper-evident, timestamped record of the analytical state available at assessment."
  },
  {
    category: "Execution Sprint & Cost Structure",
    genericAI: "Instant unstructured text ($50–$300/user/mo SaaS) without transaction grounding",
    traditionalVDR: "Volume data room fees ($20K–$100K+/deal) requiring hundreds of associate hours",
    legacyAdvisory: "3 to 6 weeks review cycle ($150K–$1M+ in billable hours)",
    ravenEngine: "48 to 72 Hour Delivery ($10,000 Flat Fee / $25,000 Complex Sprint)",
    institutionalImpact: "Delivers an 8-part boardroom-ready intelligence dossier within active negotiation windows."
  }
];

export default function ArchitecturalComparison() {
  return (
    <div className="space-y-12">
      
      {/* SECTION HEADER */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
          <Scale className="w-3.5 h-3.5" />
          INSTITUTIONAL ARCHITECTURAL EVALUATION
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.15]">
          The Due Diligence Landscape: <br className="hidden sm:block" />
          <span className="text-[var(--brand-cyan)]">Architectural & Epistemic Matrix</span>
        </h2>
        
        <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
          How Raven Adversary Intelligence fundamentally departs from probabilistic legal chatbots, virtual data rooms, and legacy transaction advisory workstreams.
        </p>
      </div>

      {/* MATRIX TABLE (Desktop & Tablet) */}
      <div className="border border-[var(--border-color)] bg-[var(--bg-primary)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/50 text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">
                <th className="p-4 md:p-5 font-bold w-[18%]">Architectural Dimension</th>
                <th className="p-4 md:p-5 font-bold w-[20%] text-[var(--text-secondary)]">Generic Legal AI & LLMs</th>
                <th className="p-4 md:p-5 font-bold w-[18%] text-[var(--text-secondary)]">Legacy VDR & Search</th>
                <th className="p-4 md:p-5 font-bold w-[18%] text-[var(--text-secondary)]">Tier-1 Legal/Advisory</th>
                <th className="p-4 md:p-5 font-bold w-[26%] bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border-l border-[var(--brand-cyan)]/30">
                  Raven Adversary Engine
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)] text-xs font-sans">
              {COMPARISON_DATA.map((row, idx) => (
                <tr 
                  key={idx} 
                  className="hover:bg-[var(--bg-secondary)]/30 transition-colors"
                >
                  {/* Category Title */}
                  <td className="p-4 md:p-5 font-mono text-xs font-bold text-[var(--text-primary)] align-top bg-[var(--bg-secondary)]/10">
                    <div className="text-[9px] text-[var(--brand-cyan)] uppercase font-mono tracking-widest mb-1">
                      DIMENSION 0{idx + 1}
                    </div>
                    {row.category}
                  </td>

                  {/* Generic Legal AI */}
                  <td className="p-4 md:p-5 text-xs text-[var(--text-secondary)] align-top leading-relaxed">
                    <div className="font-mono text-[9px] text-rose-400 font-bold uppercase mb-1">PROBABILISTIC</div>
                    {row.genericAI}
                  </td>

                  {/* Traditional VDR */}
                  <td className="p-4 md:p-5 text-xs text-[var(--text-secondary)] align-top leading-relaxed">
                    <div className="font-mono text-[9px] text-[var(--text-tertiary)] font-bold uppercase mb-1">PASSIVE INDEX</div>
                    {row.traditionalVDR}
                  </td>

                  {/* Legacy Advisory */}
                  <td className="p-4 md:p-5 text-xs text-[var(--text-secondary)] align-top leading-relaxed">
                    <div className="font-mono text-[9px] text-amber-400 font-bold uppercase mb-1">MANUAL DRAFTING</div>
                    {row.legacyAdvisory}
                  </td>

                  {/* Raven Engine */}
                  <td className="p-4 md:p-5 text-xs text-[var(--text-primary)] align-top leading-relaxed bg-[var(--brand-cyan)]/5 border-l border-[var(--brand-cyan)]/30 font-medium">
                    <div className="font-mono text-[9px] text-emerald-400 font-bold uppercase mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" /> DETERMINISTIC
                    </div>
                    <div className="text-[var(--text-primary)] font-semibold mb-2">
                      {row.ravenEngine}
                    </div>
                    <div className="p-2 border border-[var(--border-color)] bg-[var(--bg-primary)] font-mono text-[10px] text-[var(--brand-cyan)] leading-snug">
                      <strong>Institutional Impact:</strong> {row.institutionalImpact}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CORE DIFFERENTIATION HIGHLIGHTS (Bento Strip) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
        
        <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3">
          <div className="flex items-center gap-2 text-[var(--brand-cyan)] font-bold text-xs">
            <GitBranch className="w-4 h-4" /> STATE MACHINE VS. SUMMARY
          </div>
          <h3 className="font-heading font-bold text-base text-[var(--text-primary)] font-sans">
            Contracts As Living State Networks
          </h3>
          <p className="text-[var(--text-secondary)] font-sans leading-relaxed text-xs">
            Generic LLMs read text in isolation. Raven connects covenants, financing milestones, and board triggers into an interlocked state machine that simulates how balance sheet stress alters control.
          </p>
        </div>

        <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
            <ShieldCheck className="w-4 h-4" /> 100% PUBLIC VERIFIABILITY
          </div>
          <h3 className="font-heading font-bold text-base text-[var(--text-primary)] font-sans">
            Zero MNPI & EDGAR Binding
          </h3>
          <p className="text-[var(--text-secondary)] font-sans leading-relaxed text-xs">
            Every analytical fact is bound to line-numbered SEC EDGAR filings. No confidential data ingestion, no model training on client input, and zero compliance exposure for deal teams.
          </p>
        </div>

        <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3">
          <div className="flex items-center gap-2 text-purple-400 font-bold text-xs">
            <Lock className="w-4 h-4" /> CRYPTOGRAPHIC FIDUCIARY COMMIT
          </div>
          <h3 className="font-heading font-bold text-base text-[var(--text-primary)] font-sans">
            SHA-256 Provenance Ledger
          </h3>
          <p className="text-[var(--text-secondary)] font-sans leading-relaxed text-xs">
            All analytical assertions, mathematical proofs, and risk ratings are frozen with SHA-256 cryptographic hashes prior to market execution, establishing an unalterable defense record for directors.
          </p>
        </div>

      </div>

      {/* ACTION BANNER */}
      <div className="p-8 border border-[var(--brand-cyan)]/40 bg-[var(--brand-cyan)]/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-1">
          <div className="font-bold text-base font-heading text-[var(--text-primary)]">
            Experience the Raven Epistemic Standard on Your Live Deal
          </div>
          <p className="text-xs text-[var(--text-secondary)] font-mono">
            Commission a 48–72 hour independent transaction assessment ($10K Flat Fee).
          </p>
        </div>
        <Link 
          to="/request-assessment" 
          className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shrink-0 inline-flex items-center gap-2"
        >
          Request Assessment <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
