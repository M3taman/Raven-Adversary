import React from 'react';
import { 
  Scale, 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  Cpu, 
  GitBranch, 
  CheckCircle2,
  Lock,
  Layers,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ArchitecturalComparison from '../components/ArchitecturalComparison';

export default function ComparisonPage() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      
      {/* FAQ Schema for GEO/AI-Search crawling */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Institutional M&A Due Diligence Landscape: Architectural Comparison",
          "description": "A technical specification comparing traditional M&A advisory, virtual data rooms (VDRs), generic legal AI LLMs, and the Raven Adversary deterministic pressure engine.",
          "author": {
            "@type": "Organization",
            "name": "Raven Adversary Intelligence"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Raven Adversary Intelligence"
          }
        })}
      </script>

      {/* HEADER */}
      <header className="space-y-6 border-b border-[var(--border-color)] pb-12 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
          <Scale className="w-3.5 h-3.5" />
          TECHNICAL & EPISTEMIC COMPARISON SPECIFICATION
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.1]">
          Institutional Diligence Architecture: <br />
          <span className="text-[var(--brand-cyan)]">The Epistemic Matrix</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
          A rigorous comparative evaluation of transaction due diligence architectures: evaluating probabilistic generative AI, document indexing platforms, legacy advisory firms, and the Raven deterministic state machine.
        </p>

        <div className="pt-4 flex flex-wrap gap-4 text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> ZERO MNPI REQUIRED
          </div>
          <span>|</span>
          <div>SPECIFICATION: M&A-ARCH-2026.1</div>
          <span>|</span>
          <div>DETERMINISTIC & CRYPTOGRAPHICALLY COMMITTED</div>
        </div>
      </header>

      {/* CORE MATRIX SECTION */}
      <section>
        <ArchitecturalComparison />
      </section>

      {/* DETAILED NARRATIVE BREAKDOWN */}
      <div className="space-y-16 max-w-5xl">
        
        <div className="border-t border-[var(--border-color)] pt-12 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
            Three Structural Flaws in Conventional Transaction Review
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Corporate M&A due diligence has historically oscillated between two extremes: labor-intensive manual human review that takes weeks, and superficial legal AI chatbots that generate agreeable summaries of isolated paragraphs. Both approaches harbor critical failure modes:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          
          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3">
            <div className="text-rose-400 font-bold uppercase text-[10px]">01 // THE STATIC FRAGMENT TRAP</div>
            <h3 className="font-heading font-bold text-base text-[var(--text-primary)] font-sans">
              Ignoring Dynamic Multi-Clause Interplay
            </h3>
            <p className="text-[var(--text-secondary)] font-sans text-xs leading-relaxed">
              Standard AI summarizes Section 4.2 (Net Cash Adjustment) without linking it to Section 8.1 (Outside Closing Date) or Schedule 1.5 (Working Capital Thresholds). In reality, transactions fail because small shifts in one clause ripple across voting rights and governance covenants.
            </p>
          </div>

          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3">
            <div className="text-amber-400 font-bold uppercase text-[10px]">02 // CONFIRMATION BIAS & CONSENSUS AI</div>
            <h3 className="font-heading font-bold text-base text-[var(--text-primary)] font-sans">
              Averaging Contradictory Positions
            </h3>
            <p className="text-[var(--text-secondary)] font-sans text-xs leading-relaxed">
              LLMs are trained to generate fluent, agreeable text. When fed a complex merger agreement, they blend management's optimistic synergy presentations with strict closing conditions, creating false comfort. Raven enforces dialectical tension via opposing specialized agents.
            </p>
          </div>

          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3">
            <div className="text-purple-400 font-bold uppercase text-[10px]">03 // HINDSIGHT RE-WRITING & LACK OF COMMITS</div>
            <h3 className="font-heading font-bold text-base text-[var(--text-primary)] font-sans">
              Unverifiable Diligence Trails
            </h3>
            <p className="text-[var(--text-secondary)] font-sans text-xs leading-relaxed">
              Traditional advisory working papers are easily reinterpreted after a transaction breaks down. The Raven Standard freezes every fact, computational proof, and pressure rating with a SHA-256 cryptographic hash before market execution, providing ironclad fiduciary defense.
            </p>
          </div>

        </div>

      </div>

      {/* ENGAGEMENT CALL TO ACTION */}
      <section className="p-8 md:p-12 border border-[var(--brand-cyan)]/40 bg-[var(--brand-cyan)]/5 text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
          Commission an Adversarial Review for Your Target Transaction
        </h3>
        <p className="text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          Receive a complete 8-Part Transaction Review Package—including decision memo, evidence ledger, adversarial debate transcript, and 7-minute boardroom walkthrough—within 48 to 72 hours.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <Link
            to="/request-assessment"
            className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Request Transaction Review <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/deal-intelligence"
            className="border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            Browse 100+ Analyzed Transactions <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
