import React from 'react';
import { UserCheck, ShieldCheck, FileCheck2, Scale, ExternalLink, ArrowRight } from 'lucide-react';

export function LeadershipAccountability() {
  return (
    <section className="py-24 px-6 border-t border-[var(--border-color)] bg-[var(--bg-primary)]" id="leadership">
      <div className="max-w-6xl mx-auto space-y-14">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30 font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
            <UserCheck className="w-3 h-3" /> LEADERSHIP & OPERATIONAL GOVERNANCE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
            Founder Accountability & Analytical Review
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Institutional buyers do not buy from anonymous algorithms. Raven is a founder-led specialist practice combining quantitative transaction modeling with human-audited forensic rigor.
          </p>
        </div>

        {/* Founder & Operating Model Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Founder Profile Card (5 Cols) */}
          <div className="md:col-span-5 p-8 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="font-mono text-[10px] text-[var(--brand-cyan)] font-bold uppercase tracking-widest">
                  FOUNDER & PRINCIPAL ANALYST
                </div>
                <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                  Abhishek Tanwar
                </h3>
                <p className="font-mono text-xs text-[var(--text-secondary)]">
                  Architect of the Raven Adversary Epistemic Standard & Transaction Engine
                </p>
              </div>

              <div className="border-t border-[var(--border-color)]/60 pt-4 space-y-3 text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Specializes in deterministic transaction modeling, contractual vulnerability mapping, and multi-agent adversarial dialectics in contested public M&A.
                </p>
                <p>
                  Every transaction assessment delivered to clients undergoes direct analytical review and primary-source verification by Abhishek Tanwar prior to delivery.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)]/60 flex items-center justify-between font-mono text-xs">
              <a
                href="https://www.linkedin.com/in/abhishek-tanwar-raven-adversary/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-cyan)] hover:underline inline-flex items-center gap-1.5 font-bold"
              >
                LinkedIn Profile <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] text-[var(--text-tertiary)] uppercase">
                DIRECT ACCOUNTABILITY
              </span>
            </div>
          </div>

          {/* Right Column: Operational Quality Control Architecture (7 Cols) */}
          <div className="md:col-span-7 p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] flex items-center justify-between">
                <span>Human-In-The-Loop Quality Control Protocol</span>
                <span className="text-[10px] text-emerald-400 font-bold">FACT-CHECKED REVIEW</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                
                <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-1.5">
                  <div className="text-[var(--brand-cyan)] font-bold text-[11px] flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5" /> 1. Source Grounding
                  </div>
                  <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                    Every raw claim extracted by the engine is cross-checked against the definitive SEC EDGAR filing (Form S-4, 8-K, 10-K).
                  </p>
                </div>

                <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-1.5">
                  <div className="text-[var(--brand-cyan)] font-bold text-[11px] flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5" /> 2. Falsification Testing
                  </div>
                  <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                    Automated checks reject unverified assumptions, temporal collapse, and synthetic valuations before human review.
                  </p>
                </div>

                <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-1.5">
                  <div className="text-[var(--brand-cyan)] font-bold text-[11px] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> 3. Negative Knowledge
                  </div>
                  <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                    Terms missing from public disclosures are isolated in the Negative Knowledge Register, preventing false consensus.
                  </p>
                </div>

                <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-1.5">
                  <div className="text-[var(--brand-cyan)] font-bold text-[11px] flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5" /> 4. Principal Sign-Off
                  </div>
                  <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                    The final 16-chapter dossier, clause cards, and action directives are personally audited and released by Abhishek Tanwar.
                  </p>
                </div>

              </div>
            </div>

            {/* Factual Scope Note */}
            <div className="p-4 bg-[var(--bg-secondary)]/40 border border-[var(--border-color)] font-mono text-[11px] text-[var(--text-secondary)] leading-relaxed space-y-1">
              <div className="font-bold text-[var(--text-primary)]">Factual Distinction: Internal Research vs. Client Work</div>
              <div>
                Raven has compiled an internal proof corpus of over <strong>100 live transaction analyses</strong> to stress-test and refine the analytical framework. These represent academic research and analytical stress-testing, and are explicitly distinct from paid client engagements.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
