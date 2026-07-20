import React from 'react';
import { Terminal, Brain, Shield, ChevronRight, FileText, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MandAService() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto space-y-16">
      
      {/* FAQ Schema for MandA Due Diligence Keywords */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is M&A pressure analysis?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "M&A pressure analysis involves identifying latent, unpriced liabilities in public filings—such as S-4 registration statements, merger agreements, and debt covenants—to trace how regulatory delays, floating exchange ratios, and clinical or environmental holds erode transaction value and shift deal certainty."
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
          M&A Transaction Pressure Modeling
        </h1>
        
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          Identify unpriced, hidden liabilities, floating adjustment hazards, and contingent funding disconnects inside public filings before close.
        </p>

        <div className="pt-4 flex gap-4 text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
          <div>KEY TARGET: M&A BUYERS, SELLERS, EVENT-DRIVEN SPONSORS</div>
          <span>|</span>
          <div>CORE TERMS: M&A PRESSURE ANALYSIS, S-4 STATEMENT AUDITS</div>
        </div>
      </header>

      <article className="prose prose-invert max-w-none space-y-12 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
        
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">The Fallacy of Standard Deal Due Diligence</h2>
          <p>
            Traditional financial and legal due diligence operates on checklists. It lists covenants, verifies certificates of incorporation, and calculates historic EBITDA. 
          </p>
          <p>
            In high-stakes M&A, this creates an active blind spot. A transaction's real risk doesn't sit in isolated facts—it lives in the <strong>interdependency pathways</strong> of floating parameters. 
          </p>
          <p>
            For example, if a seller's special dividend pool is tied to a floating "Net Cash approximation" calculated at close, any delayed regulatory clearance or clinical trial hold cost directly erodes shareholder returns. If concurrent debt-raising agreements at the Operating Company level are not legally cross-guaranteed to the parent merger vehicle, a liquidity mismatch occurs post-signing.
          </p>
        </section>

        {/* Feature Highlights Grid */}
        <section className="grid md:grid-cols-2 gap-8 pt-6">
          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 space-y-4">
            <h3 className="font-bold text-lg text-[var(--text-primary)] font-heading">S-4 statement Risk audits</h3>
            <p className="text-sm">
              We dissect definitive proxies and S-4 filing modifications to identify asymmetric Material Adverse Effect (MAE) carve-outs, non-survival boundaries, and transaction overhead allocation schedules.
            </p>
          </div>

          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 space-y-4">
            <h3 className="font-bold text-lg text-[var(--text-primary)] font-heading">Floating Parameter Stressing</h3>
            <p className="text-sm">
              We simulate the mathematical impact of delay on floating exchange ratios, net cash formulas, and working capital collars, indicating precisely who absorbs timing risk.
            </p>
          </div>
        </section>

        {/* Real-world Reference Callout */}
        <section className="p-8 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 relative">
          <span className="absolute top-4 right-4 font-mono text-[8px] text-[var(--text-tertiary)] tracking-widest uppercase">CASE PROFILE // ACTIVE</span>
          <h3 className="text-xl font-bold font-heading text-[var(--text-primary)] mb-4">Vyne / Yarrow Transaction Analysis</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Our pressure modeling successfully identified the unhedged capital gap in the Vyne / Yarrow transaction architecture. Because the $100M pre-closing financing was contractually separate from the merger's closing parameters, delayed listing approvals triggered an active risk that left the combined entity to operate on a zeroed-out cash balance.
          </p>
          <div className="pt-4">
            <Link to="/#live-pressure" className="font-mono text-[9px] tracking-widest uppercase text-[var(--brand-cyan)] flex items-center gap-1 hover:opacity-85 transition-opacity">
              REVIEW EVIDENCE CHAIN ON HOMEPAGE <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-10 border-t border-[var(--border-color)] flex flex-col items-center text-center space-y-6">
          <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">Dissect Your Target's Pressure State</h3>
          <p className="text-sm max-w-xl mx-auto">
            Ensure transaction security before binding execution. Initiate a customized Raven S-4 audit and pressure pathway simulation on your upcoming combination.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
            Submit Transaction for Audit <ChevronRight className="w-4 h-4" />
          </Link>
        </section>

      </article>

    </div>
  );
}
