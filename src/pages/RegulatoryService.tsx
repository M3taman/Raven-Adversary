import React from 'react';
import { Terminal, Brain, Shield, ChevronRight, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RegulatoryService() {
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
              "name": "What is regulatory threshold pressure?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Regulatory threshold pressure refers to the sudden capital, liquidity, and compliance burdens that are triggered when a financial institution or merger entity surpasses critical regulatory asset asset-size tiers (such as Category III thresholds, daily LCR reporting, and Dodd-Frank requirements)."
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
          Regulatory Threshold Pressure
        </h1>
        
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          Model systemic capital drags, high-quality liquid asset (HQLA) expansion triggers, and Category III compliance thresholds before post-close integration begins.
        </p>

        <div className="pt-4 flex gap-4 text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
          <div>KEY TARGET: TREASURY DEPARTMENTS, CHIEF RISK OFFICERS, BANK BOARDS</div>
          <span>|</span>
          <div>CORE TERMS: REGULATORY THRESHOLD PRESSURE, LIQUIDITY COVERAGE RATIO MODELING</div>
        </div>
      </header>

      <article className="prose prose-invert max-w-none space-y-12 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
        
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">The Latent Cost of Regulatory Scaling</h2>
          <p>
            When financial institutions consolidate, deal teams calculate transaction synergies based on cost reductions, branch consolidations, and technical efficiencies.
          </p>
          <p>
            However, scaling across asset-size thresholds carries non-linear structural overhead. For example, crossing a Category III transition threshold triggers daily Liquidity Coverage Ratio (LCR) reporting, requiring immediate and permanent allocations to low-yield high-quality liquid asset (HQLA) reserves.
          </p>
          <p>
            This regulatory drag erodes pro-forma Net Interest Margin (NIM) overnight, neutralizing cost synergies on Day One.
          </p>
          <p>
            Raven Adversary models these regulatory escalation paths. We parse draft filings, consolidated balance sheets, and regulatory guidelines to isolate unpriced compliance friction points before agreements bind.
          </p>
        </section>

        {/* Feature list */}
        <section className="grid md:grid-cols-2 gap-8 pt-6">
          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 space-y-4">
            <h3 className="font-bold text-lg text-[var(--text-primary)] font-heading">HQLA Expansion Modeling</h3>
            <p className="text-sm">
              We calculate precise post-close HQLA targets based on pro-forma deposit volatility profiles, mapping the margin impact of asset-size shifts.
            </p>
          </div>

          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 space-y-4">
            <h3 className="font-bold text-lg text-[var(--text-primary)] font-heading">Reporting Escalation Pathways</h3>
            <p className="text-sm">
              We audit potential reporting cliffs, including daily liquidity reporting triggers, Dodd-Frank stress testing obligations, and capital-buffer requirements.
            </p>
          </div>
        </section>

        {/* Case in-point Callout */}
        <section className="p-8 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 relative">
          <span className="absolute top-4 right-4 font-mono text-[8px] text-[var(--text-tertiary)] tracking-widest uppercase">CASE PROFILE // RECENT</span>
          <h3 className="text-xl font-bold font-heading text-[var(--text-primary)] mb-4">Fifth Third / Comerica Category III Audit</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Our threshold compliance modeling mapped the post-close impact of Category III transition rules on consolidations. The analysis successfully demonstrated that NIM erosion from the mandatory $1.2B increase in reserves exceeded projected transactional synergies by 14%.
          </p>
          <div className="pt-4">
            <Link to="/#live-pressure" className="font-mono text-[9px] tracking-widest uppercase text-[var(--brand-cyan)] flex items-center gap-1 hover:opacity-85 transition-opacity">
              REVIEW EVIDENCE CHAIN ON HOMEPAGE <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-10 border-t border-[var(--border-color)] flex flex-col items-center text-center space-y-6">
          <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">Map Your Regulatory Compliance Cliffs</h3>
          <p className="text-sm max-w-xl mx-auto">
            Secure pro-forma balance sheet alignment and model your margin impact before scaling across critical regulatory categories.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
            Request Regulatory Transition Model <ChevronRight className="w-4 h-4" />
          </Link>
        </section>

      </article>

    </div>
  );
}
