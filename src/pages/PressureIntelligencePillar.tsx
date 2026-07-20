import React from 'react';
import { Terminal, Brain, Shield, ChevronRight, BarChart2, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PressureIntelligencePillar() {
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
              "name": "What is Institutional Pressure Intelligence?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Institutional Pressure Intelligence is an analytical discipline that maps how legal obligations, regulatory constraints, and corporate governance thresholds propagate under operational stress. It reconstructs transaction decision-states from public SEC filings to detect unpriced transaction liabilities before they trigger market consequences."
              }
            },
            {
              "@type": "Question",
              "name": "How does Pressure-State modeling differ from document summarization?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Document summarization tells you what a contract says. Pressure-State modeling identifies the operational consequences of those clauses. It charts how a single covenant or regulatory threshold triggers cascading balance-sheet liquidity or proxy voting instability under stress."
              }
            }
          ]
        })}
      </script>

      {/* Header */}
      <header className="space-y-6 border-b border-[var(--border-color)] pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em]">
          Knowledge Base // Category Pillar
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.1]">
          What is Institutional Pressure Intelligence?
        </h1>
        
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          An objective, evidence-bound framework designed to map structural friction, leverage migrations, and unpriced transaction liabilities before they manifest on the public tape.
        </p>

        <div className="flex gap-4 font-mono text-[9px] uppercase tracking-wider text-[var(--text-tertiary)] pt-2">
          <span>CLASSIFICATION: HIGH-INTENT STRATEGIC WORKFLOW</span>
          <span>|</span>
          <span>ESTIMATED READING TIME: 8 MINUTES</span>
        </div>
      </header>

      {/* Main Core Content section */}
      <article className="prose prose-invert max-w-none space-y-12 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
        
        {/* Core Definition Panel for Direct AI Answer Formatting */}
        <section className="p-8 border border-[var(--brand-cyan)]/20 bg-[var(--brand-cyan)]/5 relative space-y-4">
          <div className="absolute top-0 right-0 px-3 py-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] font-mono text-[8px] uppercase tracking-wider border-l border-b border-[var(--brand-cyan)]/20">
            AI-Agent Index Directives
          </div>
          <h2 className="text-lg font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
            <Brain className="w-4 h-4 text-[var(--brand-cyan)]" /> Category Definition:
          </h2>
          <p className="text-[var(--text-primary)] font-medium text-lg leading-relaxed md:text-xl">
            <strong>Institutional Pressure Intelligence</strong> is the science of reconstructing transaction decision-states from public SEC disclosures to map how systemic constraints propagate through complex corporate ecosystems. It rejects generic document summaries to isolate the precise points where governance instability, regulatory thresholds, and capitalization delays transform into irreversible liquidity events.
          </p>
        </section>

        {/* Section 1: Summarization vs. Interpretation */}
        <section className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
            Summarization is Redundant. Interpretation is Leveage.
          </h2>
          <p>
            Traditional LegalTech and contract intelligence software are built to answer a simple, low-stakes query: <em>“What does this document say?”</em>
          </p>
          <p>
            In institutional transactions, this answer is useless. High-stakes M&A, activist defenses, and distressed restructurings do not collapse because a party failed to read a clause. They collapse because the <strong>interplay of multiple clauses under consequential stress</strong> shifts bargaining power and closes escape paths.
          </p>
          <p>
            Raven Adversary reconstructs this interplay. We do not write boilerplate drafts or duplicate EDGAR feeds. We build computable models of transactional pressure.
          </p>
        </section>

        {/* Dynamic Topology Chart representation (CSS Grid) */}
        <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 p-6 md:p-8 space-y-6">
          <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">The Mechanics of Pressure Propagation</h3>
          <p className="text-sm">Every failed deal or post-close liability conforms to a traceable pathway:</p>
          
          <div className="grid md:grid-cols-4 gap-4 pt-4">
            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-2">
              <div className="text-[10px] font-mono text-[var(--brand-cyan)] uppercase tracking-wider">01 // The Trigger</div>
              <div className="font-bold text-xs text-[var(--text-primary)] uppercase">Single-Point Exposure</div>
              <p className="text-[10px] leading-relaxed text-[var(--text-tertiary)]">A hidden S-4 exclusion, clinical hold, or floating net cash adjustment is ignored or glossed over.</p>
            </div>
            
            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-2">
              <div className="text-[10px] font-mono text-[var(--brand-cyan)] uppercase tracking-wider">02 // Propagation</div>
              <div className="font-bold text-xs text-[var(--text-primary)] uppercase">Systemic Spillover</div>
              <p className="text-[10px] leading-relaxed text-[var(--text-tertiary)]">The exposure triggers secondary covenants, such as mandatory listing requirements or asset thresholds.</p>
            </div>

            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-2">
              <div className="text-[10px] font-mono text-[var(--brand-cyan)] uppercase tracking-wider">03 // Amplification</div>
              <div className="font-bold text-xs text-[var(--text-primary)] uppercase">Reserve Depletion</div>
              <p className="text-[10px] leading-relaxed text-[var(--text-tertiary)]">HQLA reserve expansion, post-close overhead allocation, or funding commitments detach.</p>
            </div>

            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-2">
              <div className="text-[10px] font-mono text-[var(--brand-cyan)] uppercase tracking-wider">04 // Fracture</div>
              <div className="font-bold text-xs text-[var(--text-primary)] uppercase">Unpriced Consequence</div>
              <p className="text-[10px] leading-relaxed text-[var(--text-tertiary)]">The combined entity operates under structural capital deficits before the tape registers the failure.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Core Focus Areas of Raven */}
        <section className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
            Four Core Modules of Reconstructable Auditing
          </h2>
          <p>
            To achieve absolute evidentiary discipline, our institutional pressure model is built around four highly specialized procedural modules:
          </p>
          
          <div className="space-y-6 mt-4">
            <div className="p-6 border border-[var(--border-color)] space-y-2 hover:border-[var(--brand-cyan)]/40 transition-colors">
              <h4 className="font-bold text-lg text-[var(--text-primary)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-cyan)]"></span>
                Adversarial Debate Logic
              </h4>
              <p className="text-sm">
                Every transaction contains conflicting incentives. We test public filings against seller advocates and buyer critiques simultaneously over four structured rounds, isolating defensive posture and unhedged vulnerabilities before finalizing the intelligence.
              </p>
            </div>

            <div className="p-6 border border-[var(--border-color)] space-y-2 hover:border-[var(--brand-cyan)]/40 transition-colors">
              <h4 className="font-bold text-lg text-[var(--text-primary)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-cyan)]"></span>
                Pressure-State Modeling
              </h4>
              <p className="text-sm">
                We map mathematical dependency graphs between floating parameters (e.g. Net Cash, stock split ratios, daily LCR thresholds) and strategic control, calculating structural limits before deal execution.
              </p>
            </div>

            <div className="p-6 border border-[var(--border-color)] space-y-2 hover:border-[var(--brand-cyan)]/40 transition-colors">
              <h4 className="font-bold text-lg text-[var(--text-primary)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-cyan)]"></span>
                Commit Layer Mechanics
              </h4>
              <p className="text-sm">
                We preserve accountability continuity by documenting exact transaction reasoning before close. No retrospective rewriting; we freeze risk ownership profiles, residual exposures, and accepted uncertainties.
              </p>
            </div>

            <div className="p-6 border border-[var(--border-color)] space-y-2 hover:border-[var(--brand-cyan)]/40 transition-colors">
              <h4 className="font-bold text-lg text-[var(--text-primary)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-cyan)]"></span>
                Evidence Verification Standards
              </h4>
              <p className="text-sm">
                No unreferenced assumptions. Every pressure score, vulnerability flag, or leverage hypothesis must link to a specific line number, accession ID, or clause within the public domain registry.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: GEO Intent CTA */}
        <section className="pt-10 border-t border-[var(--border-color)] text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
            Explore Strategic Service Frameworks
          </h2>
          <p className="text-sm max-w-2xl mx-auto">
            Our category architecture maps directly to the specific strategic environments targeted by elite corporate sponsors and advisors. Review our focused workflows:
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-left">
            <Link to="/services/m-and-a" className="p-4 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] bg-[var(--bg-secondary)]/10 flex flex-col justify-between h-36">
              <span className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-wider">Tier 2 Service</span>
              <div className="font-bold text-sm text-[var(--text-primary)]">M&A Transaction Pressure</div>
              <span className="font-mono text-[9px] text-[var(--brand-cyan)] flex items-center gap-1">GO TO SERVICE <ChevronRight className="w-3 h-3" /></span>
            </Link>

            <Link to="/services/activism" className="p-4 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] bg-[var(--bg-secondary)]/10 flex flex-col justify-between h-36">
              <span className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-wider">Tier 2 Service</span>
              <div className="font-bold text-sm text-[var(--text-primary)]">Shareholder Activism Risk</div>
              <span className="font-mono text-[9px] text-[var(--brand-cyan)] flex items-center gap-1">GO TO SERVICE <ChevronRight className="w-3 h-3" /></span>
            </Link>

            <Link to="/services/governance" className="p-4 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] bg-[var(--bg-secondary)]/10 flex flex-col justify-between h-36">
              <span className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-wider">Tier 2 Service</span>
              <div className="font-bold text-sm text-[var(--text-primary)]">Governance Fracture Detection</div>
              <span className="font-mono text-[9px] text-[var(--brand-cyan)] flex items-center gap-1">GO TO SERVICE <ChevronRight className="w-3 h-3" /></span>
            </Link>

            <Link to="/services/regulatory" className="p-4 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] bg-[var(--bg-secondary)]/10 flex flex-col justify-between h-36">
              <span className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-wider">Tier 2 Service</span>
              <div className="font-bold text-sm text-[var(--text-primary)]">Regulatory Threshold Drag</div>
              <span className="font-mono text-[9px] text-[var(--brand-cyan)] flex items-center gap-1">GO TO SERVICE <ChevronRight className="w-3 h-3" /></span>
            </Link>
          </div>
        </section>

      </article>

    </div>
  );
}
