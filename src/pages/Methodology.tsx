import React from 'react';
import { Terminal, Brain, Shield, ChevronRight, Activity, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Methodology() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto space-y-16">
      
      {/* FAQ Schema for GEO/AI-Search crawling */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How does Raven's Adversarial Debate Logic work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Adversarial Debate Logic processes disclosures from conflicting perspectives—buyer versus seller advocates—over four structured rounds of critical debate, stripping away promotional bias and highlighting hidden risks."
              }
            },
            {
              "@type": "Question",
              "name": "What is the Commit Layer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Commit Layer is Raven's strict accountability standard where we document, timestamps, and freeze all analytical risk assessments before transaction outcomes are known, eliminating hindsight bias."
              }
            }
          ]
        })}
      </script>

      {/* Header */}
      <header className="space-y-6 border-b border-[var(--border-color)] pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em]">
          Operational Methodology // Core Architecture
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.1]">
          The Raven Methodology
        </h1>
        
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          Four pipeline modules designed to eliminate low-context LLM summarization and deliver verifiable, actionable pressure-state intelligence.
        </p>

        <div className="pt-4 flex gap-4 text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
          <div>OPERATIONAL STATUS: ACTIVE</div>
          <span>|</span>
          <div>AUDIT INTEGRITY: LEVEL 04 CERTIFIED</div>
        </div>
      </header>

      {/* Modules Detailed Breakdown */}
      <div className="space-y-16">
        
        {/* Module 1: Adversarial Debate Logic */}
        <section className="grid md:grid-cols-12 gap-8 items-start border-b border-[var(--border-color)] pb-12">
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--brand-cyan)]"></span>
              MODULE 01
            </div>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              Adversarial Debate Logic
            </h2>
            <div className="px-2 py-1 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 inline-block font-mono text-[8px] uppercase tracking-wider text-[var(--text-tertiary)]">
              Anti-Hallucination Guard
            </div>
          </div>
          <div className="md:col-span-8 space-y-4">
            <p className="text-[var(--text-secondary)]">
              Generic corporate AI systems attempt to find an artificial "consensus" by averaging documents or compiling checklists. We reject this. M&A risk is discovered through opposition.
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Our system runs a four-round adversarial debate between distinct modeling states:
            </p>
            <ul className="space-y-2 font-mono text-xs text-[var(--text-primary)]">
              <li className="flex items-center gap-2">
                <span className="text-[var(--brand-cyan)]">▶</span> ROUND 1: Target Bull Hypothesis formulation (seller perspective)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--brand-cyan)]">▶</span> ROUND 2: Forensic Bear Critique (buyer pressure testing)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--brand-cyan)]">▶</span> ROUND 3: Rebuttal & evidentiary narrowing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--brand-cyan)]">▶</span> ROUND 4: Consensus synthesis & high-confidence residual risk isolation
              </li>
            </ul>
          </div>
        </section>

        {/* Module 2: Pressure-State Modeling */}
        <section className="grid md:grid-cols-12 gap-8 items-start border-b border-[var(--border-color)] pb-12">
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--brand-cyan)]"></span>
              MODULE 02
            </div>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              Pressure-State Modeling
            </h2>
            <div className="px-2 py-1 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 inline-block font-mono text-[8px] uppercase tracking-wider text-[var(--text-tertiary)]">
              Constraint Interdependencies
            </div>
          </div>
          <div className="md:col-span-8 space-y-4">
            <p className="text-[var(--text-secondary)]">
              Covenants, listing parameters, and asset sizing thresholds never exist in isolation. They form a dynamic network.
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Pressure-State Modeling treats public SEC disclosures as inputs to a multi-variable dependency graph. We map how changes in floating variables (like Net Cash limits, stock prices, interest rate collars, or closing delays) propagate across other contractual boundaries. 
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              This mathematical approach identifies exact tipping points where minor operational delays or clinical setbacks cascade into covenant breaches or massive reserve requirements before the market identifies the exposure.
            </p>
          </div>
        </section>

        {/* Module 3: Commit Layer Mechanics */}
        <section className="grid md:grid-cols-12 gap-8 items-start border-b border-[var(--border-color)] pb-12">
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--brand-cyan)]"></span>
              MODULE 03
            </div>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              Commit Layer Mechanics
            </h2>
            <div className="px-2 py-1 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 inline-block font-mono text-[8px] uppercase tracking-wider text-[var(--text-tertiary)]">
              No Hindsight Rewriting
            </div>
          </div>
          <div className="md:col-span-8 space-y-4">
            <p className="text-[var(--text-secondary)]">
              Corporate advisors are notorious for modifying their analytical history in hindsight. Once a transaction fails, advisors point to generic, catch-all "risk factors" in S-4 drafts to claim they predicted the collapse.
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              We enforce epistemic honesty. Every pressure pathway and vulnerability score is documented, timestamped, and frozen in our Commit Layer database before close. 
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              We lock in exact risk ownership profiles and accepted uncertainty vectors. You get an untamperable audit trail of what was known, what was inferred, and what was speculated, ensuring absolute alignment with actual historical outcomes.
            </p>
          </div>
        </section>

        {/* Module 4: Evidence Verification Standards */}
        <section className="grid md:grid-cols-12 gap-8 items-start border-b border-[var(--border-color)] pb-12">
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--brand-cyan)]"></span>
              MODULE 04
            </div>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              Evidence Verification Standards
            </h2>
            <div className="px-2 py-1 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 inline-block font-mono text-[8px] uppercase tracking-wider text-[var(--text-tertiary)]">
              Strict Verifiability
            </div>
          </div>
          <div className="md:col-span-8 space-y-4">
            <p className="text-[var(--text-secondary)]">
              Raven is built on a simple rule: <strong>If you cannot prove it, do not claim it.</strong>
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Every inference, vulnerability flag, or pressure trajectory generated by our model carries an evidentiary tag that binds it directly to public sources. This include specific SEC form numbers, accession codes, section clauses, and exact line counts.
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              We do not generate opinions. We unmask the direct, document-backed facts that target companies are legally obligated to disclose, but rely on complexity to hide.
            </p>
          </div>
        </section>

      </div>

      {/* Methodology Summary Map */}
      <section className="p-8 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 text-center space-y-6">
        <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">Experience the Integrity of Pressure-State Intel</h3>
        <p className="text-sm max-w-xl mx-auto">
          Our core architecture processes transactions with the highest degree of diligence. Begin your target profile review today.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
          Initiate Review Workflow <ChevronRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
