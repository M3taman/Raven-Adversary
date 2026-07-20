import React from 'react';
import { Terminal, Brain, Shield, ChevronRight, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GovernanceService() {
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
              "name": "What is governance fracture detection?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Governance fracture detection is the process of monitoring changes in proxy statement disclosures, committee restructurings, and institutional voting patterns to spot board-level misalignment and policy fractures before they become public governance disputes."
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
          Governance Fracture Detection
        </h1>
        
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          Track silent shifts in fiduciary posture, institutional vote alignments, and executive board-level exits from public statement drift.
        </p>

        <div className="pt-4 flex gap-4 text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
          <div>KEY TARGET: GENERAL COUNSEL, ASSET ALLOCATORS, LITIGATION TEAMS</div>
          <span>|</span>
          <div>CORE TERMS: GOVERNANCE FRACTURE DETECTION, FIDUCIARY ENTRENCHMENT RISK</div>
        </div>
      </header>

      <article className="prose prose-invert max-w-none space-y-12 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
        
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">Unmasking Latent Board Instability</h2>
          <p>
            Boards rarely announce disagreement. Behind closed doors, disagreements manifest in the subtle rewriting of internal charters, the gradual shuffling of compensation committee leads, and the systematic changing of executive transition clauses inside preliminary S-4 drafts.
          </p>
          <p>
            For traditional corporate analysts, these changes are noise. For Raven Adversary, they are structural indicators of <strong>governance fracture</strong>.
          </p>
          <p>
            By feeding historic proxy files, preliminary disclosures, and litigation records into our pressure-state engine, we extract semantic indicators of fiduciary entrenchment risk. We map the hidden alignments and trace which directors are contractually exposed.
          </p>
        </section>

        {/* Technical Capabilities List */}
        <section className="grid md:grid-cols-2 gap-8 pt-6">
          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 space-y-4">
            <h3 className="font-bold text-lg text-[var(--text-primary)] font-heading">Filing Drift Analysis</h3>
            <p className="text-sm">
              We track structural revisions in preliminary proxies (PRE14A) versus definitive copies (DEF14A) to pinpoint where institutional shareholders forced board concessions.
            </p>
          </div>

          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 space-y-4">
            <h3 className="font-bold text-lg text-[var(--text-primary)] font-heading">Fiduciary Exposure Audits</h3>
            <p className="text-sm">
              We audit potential litigation triggers, including 'No Survival' limitations and executive indemnity carve-outs, highlighting exposure profiles before corporate action completes.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-10 border-t border-[var(--border-color)] flex flex-col items-center text-center space-y-6">
          <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">Uncover Alignment Instability</h3>
          <p className="text-sm max-w-xl mx-auto">
            Audit board stability and secure fiduciary alignment before corporate friction disrupts transaction timelines.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
            Audit Governance Alignment <ChevronRight className="w-4 h-4" />
          </Link>
        </section>

      </article>

    </div>
  );
}
