import React from 'react';
import { Shield, Brain, Terminal, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IntelligenceFeed() {
  return (
    <div className="pt-24 pb-20 px-6 max-w-4xl mx-auto space-y-16">
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[11px] uppercase tracking-widest">
            <Terminal className="w-3 h-3" />
            Intelligence Feed
          </div>
          <div className="inline-flex items-center gap-2 px-2 py-1.5 border border-[var(--border-color)] text-[var(--text-tertiary)] font-mono text-[9px] uppercase tracking-widest rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)]"></span>
            Classified: DECLASSIFIED / PUBLIC
          </div>
          <div className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-[var(--text-tertiary)]">
            TS: {new Date().toISOString().split('T')[0]} // SEC: EDGAR-SYNC
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-heading">
          Institutional Interpretation vs. Document Analysis
        </h1>
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
          Why Raven Adversary rejects generic document summarization in favor of Pressure-State Modeling and Leverage Migration tracking for consequential transactions.
        </p>

        <div className="pt-4 border-t border-[var(--border-color)] flex gap-6 text-[10px] font-mono tracking-widest text-[var(--text-tertiary)] uppercase flex-wrap">
          <div><span className="text-[var(--text-secondary)]">AUTHOR:</span> Raven Core</div>
          <div><span className="text-[var(--text-secondary)]">COMMIT HASH:</span> e9f8a2b.44</div>
          <div><span className="text-[var(--text-secondary)]">INTELLIGENCE TIER:</span> STRATEGIC_MEMO</div>
          <div><span className="text-[var(--text-secondary)]">EVIDENCE HIERARCHY:</span> VERIFIED STRUCTURAL INFERENCE</div>
        </div>
      </header>

      <article className="prose prose-invert prose-lg max-w-none space-y-8 text-[var(--text-primary)] relative">
        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand-cyan)]/50 via-[var(--border-color)] to-transparent hidden md:block"></div>
        <p>
          <strong>Raven does not sell AI analysis. Raven sells institutional interpretation under pressure.</strong> Generalized contract summarization tools focus on what a document says. We reconstruct the decision-state to determine <em>who accepted uncertainty, and under what conditions.</em> 
        </p>

        <p>
          Traditional compliance automation and generic AI governance platforms operate on policy-state—they summarize clauses in a vacuum. A high-stakes transaction is not a vacuum. It is a live environment characterized by asymmetrical disclosure and shifting negotiation leverage.
        </p>

        <h2 className="text-2xl font-bold font-heading border-b border-[var(--border-color)] pb-3 mt-12 mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
          <span>The Move from Language to Consequence</span>
          <span className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-[0.2em] font-normal border border-[var(--border-color)] px-2 py-1 bg-[var(--bg-secondary)]/30 shrink-0">MODULE: CONSEQUENCE ENGINE</span>
        </h2>

        <p>
          The margin for error in an activist proxy contest or a distressed de-SPAC is zero. Practitioners do not need a faster way to read a termination fee provision; they need to know if the interplay between that fee, an esoteric non-solicitation carve-out, and regulatory escalation pathways creates a structural moat restricting a targeted spin-off.
        </p>

        <div className="glass-card p-6 my-8 border-l-2 border-[var(--brand-cyan)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 border-b border-l border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 transition-colors group-hover:bg-[var(--brand-cyan)]/10">
            <span className="font-mono text-[8px] text-[var(--brand-cyan)] uppercase tracking-[0.2em] font-bold">CORE DIRECTIVE: INSTITUTIONAL_LEGIBILITY</span>
          </div>
          <h3 className="font-bold font-heading mb-3 flex items-center gap-2 text-[var(--text-primary)] mt-2">
            <Brain className="w-5 h-5 text-[var(--brand-cyan)]" /> The Pressure-State Engine
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Raven Adversary reconstructs Accountability Continuity. By mapping pressure propagation across institutional systems, we allow event-driven funds, M&A litigators, and restructuring advisors to trace how initial governance fracture points trigger cascading liquidity and proxy instability.
          </p>
        </div>

        <h2 className="text-2xl font-bold font-heading border-b border-[var(--border-color)] pb-3 mt-12 mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
          <span>Mapping the Institutional Pressure Topology</span>
          <span className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-[0.2em] font-normal border border-[var(--border-color)] px-2 py-1 bg-[var(--bg-secondary)]/30 shrink-0">MODULE: TOPOLOGY GRAPH</span>
        </h2>

        <div className="space-y-6 mt-6 relative">
          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-[var(--border-highlight)] hidden sm:block"></div>
          
          <div className="flex gap-4 group relative z-10">
            <div className="w-6 h-6 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--border-highlight)] group-hover:border-[var(--brand-purple)] hidden sm:flex items-center justify-center shrink-0 mt-1 transition-colors">
              <div className="w-2 h-2 rounded-full bg-[var(--text-secondary)] group-hover:bg-[var(--brand-purple)] transition-colors"></div>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h4 className="font-bold text-lg text-[var(--text-primary)]">1. Leverage Migration Tracking</h4>
                <span className="px-1.5 py-0.5 border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 text-[var(--text-tertiary)] font-mono text-[8px] uppercase tracking-widest rounded-sm">VULNERABILITY IDENTIFIED</span>
              </div>
              <p className="text-[var(--text-secondary)] m-0">
                Bargaining power shifts under stress. We track how leverage migrates between legacy boards, insurgent slates, counter-parties, and regulators, explicitly mapping the shift in decision-making authority based on SEC filings and covenant triggers.
              </p>
            </div>
          </div>

          <div className="flex gap-4 group relative z-10">
            <div className="w-6 h-6 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--border-highlight)] group-hover:border-[var(--brand-purple)] hidden sm:flex items-center justify-center shrink-0 mt-1 transition-colors">
              <div className="w-2 h-2 rounded-full bg-[var(--text-secondary)] group-hover:bg-[var(--brand-purple)] transition-colors"></div>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h4 className="font-bold text-lg text-[var(--text-primary)]">2. Governance Fracture Detection</h4>
                <span className="px-1.5 py-0.5 border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 text-[var(--text-tertiary)] font-mono text-[8px] uppercase tracking-widest rounded-sm">STRUCTURAL INFERENCE</span>
              </div>
              <p className="text-[var(--text-secondary)] m-0">
                Isolated policy documents rarely betray board instability. By tracking proxy language drift and analyzing voting patterns of massive index funds, we establish a Governance Fracture Index that identifies isolated directors before contested elections climax.
              </p>
            </div>
          </div>

          <div className="flex gap-4 group relative z-10">
            <div className="w-6 h-6 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--brand-cyan)] border-[var(--border-highlight)] hidden sm:flex items-center justify-center shrink-0 mt-1 transition-colors shadow-[0_0_10px_rgba(0,184,217,0.3)] group-hover:shadow-[0_0_15px_rgba(0,184,217,0.5)]">
              <div className="w-2 h-2 rounded-full bg-[var(--brand-cyan)] transition-colors"></div>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h4 className="font-bold text-lg text-[var(--text-primary)]">3. Disclosure Detonation Scoring</h4>
                <span className="px-1.5 py-0.5 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[8px] uppercase tracking-widest rounded-sm">ADVERSARIAL HYPOTHESIS</span>
              </div>
              <p className="text-[var(--text-secondary)] m-0">
                We calculate the explicit probability that a required disclosure (e.g., a materialized contingent liability or a breached debt covenant) will trigger a catastrophic pressure escalation from regulators, activist holding blocks, or debt syndicate leads.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold font-heading border-b border-[var(--border-color)] pb-3 mt-12 mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
          <span>The Institutional Accountability Archive</span>
          <span className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-[0.2em] font-normal border border-[var(--border-color)] px-2 py-1 bg-[var(--bg-secondary)]/30 shrink-0">SYSTEM ARCHITECTURE</span>
        </h2>

        <p>
          Every inference, speculative vector, and adversarial hypothesis we generate is inherently bound to verifiable reality via a cryptographically anchored Commit Layer. We utilize rigorous evidence discipline, compartmentalizing verified fact from structural inference.
        </p>

        <p>
          You are given a tamper-evident accountability receipt. Not advice. Not a generic summary. Precise, citation-backed intelligence for when the institutional ground shifts.
        </p>
      </article>

      {/* Internal Link / CTA */}
      <div className="mt-16 p-8 glass-panel rounded-none border border-[var(--border-highlight)] text-center space-y-6 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[var(--bg-secondary)]/30 group-hover:bg-[var(--brand-cyan)]/5 transition-colors"></div>
        <div className="absolute top-4 left-4 flex gap-2">
           <span className="px-1.5 py-0.5 border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-tertiary)] font-mono text-[8px] uppercase tracking-widest rounded-sm">ARTIFACT: EXPORT</span>
        </div>
        <div className="relative z-10 flex flex-col items-center pt-4">
          <div className="inline-block px-3 py-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/20 text-[10px] font-mono tracking-widest uppercase mb-4">Export Hierarchy Access</div>
          <h3 className="text-3xl font-bold font-heading mb-4 text-[var(--text-primary)]">Request Your Pressure Event Memo</h3>
          <p className="text-[var(--text-secondary)] mb-8 max-w-xl text-center">Procure the flagship artifact. Examine clear pathways of leverage migration and structural exposure in your targeted ecosystem.</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity rounded-none w-full sm:w-auto justify-center">
            Review Sample Memo <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
