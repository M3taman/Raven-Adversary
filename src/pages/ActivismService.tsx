import React from 'react';
import { Terminal, Brain, Shield, ChevronRight, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ActivismService() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto space-y-16">
      
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is shareholder activism risk modeling?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Shareholder activism risk modeling identifies structural, operational, and governance fracture points inside a public company that make it vulnerable to activist slates. This includes analyzing voting concentration, board entrenchment patterns, and proxy language drift in public filings."
              }
            }
          ]
        })}
      </script>

      <header className="space-y-6 border-b border-[var(--border-color)] pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em]">
          Service Offering // Tier 2 Environment
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.1]">
          Shareholder Activism Risk Modeling
        </h1>
        
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          Identify and map board-level instability, proxy leverage points, and voting concentration exposures before campaigns launch.
        </p>

        <div className="pt-4 flex gap-4 text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
          <div>KEY TARGET: CORPORATE BOARDS, DEFENSE COUNSEL, INSURGENT FUNDS</div>
          <span>|</span>
          <div>CORE TERMS: SHAREHOLDER ACTIVISM RISK MODELING, PROXY LEVERAGE</div>
        </div>
      </header>

      <article className="prose prose-invert max-w-none space-y-12 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
        
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">The Structural Asymmetry of Activist Offense</h2>
          <p>
            An activist campaign does not begin with an open letter. It begins months prior in the silent interrogation of corporate documentation. 
          </p>
          <p>
            Activists search for the mismatch between corporate policy and institutional behavior. If a board has established defensive "poison pills" but is exposed to massive index funds with strict voting mandates regarding board tenure or overboarding, the defensive castle is built on sand.
          </p>
          <p>
            Raven Adversary models these fracture points before the first draft of an activist 13D is filed. We trace how voting power is concentrated and identify which board chairs are functionally isolated.
          </p>
        </section>

        {/* Capabilities Grid */}
        <section className="grid md:grid-cols-2 gap-8 pt-6">
          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 space-y-4">
            <h3 className="font-bold text-lg text-[var(--text-primary)] font-heading">Proxy Vulnerability Audits</h3>
            <p className="text-sm">
              We model index fund policy alignment across your top 20 institutional holders to calculate the explicit probability that key directors will be unseated during a contested vote.
            </p>
          </div>

          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 space-y-4">
            <h3 className="font-bold text-lg text-[var(--text-primary)] font-heading">Leverage Migration Simulation</h3>
            <p className="text-sm">
              We map how pressure migrates between public filings, social sentiment shifts, and non-binding advisory votes to let board advisors formulate defensible strategic moves.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-10 border-t border-[var(--border-color)] flex flex-col items-center text-center space-y-6">
          <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">Map Your Governance Moat</h3>
          <p className="text-sm max-w-xl mx-auto">
            Audit your voting concentration exposure and secure defensive alignment before activist slates initiate action.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
            Request Activism Vulnerability Scan <ChevronRight className="w-4 h-4" />
          </Link>
        </section>

      </article>

    </div>
  );
}
