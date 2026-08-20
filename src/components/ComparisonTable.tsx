import React from 'react';
import { Check, X, Shield, AlertTriangle, Layers, Cpu, Database, Eye } from 'lucide-react';

export function ComparisonTable() {
  const COMPARISONS = [
    {
      dimension: "Core Analytical Paradigm",
      genericAi: "Document search & text summarization ('What does clause 5.15 say?')",
      raven: "Transaction-state reconstruction ('How does leverage actually shift if conditions deteriorate?')"
    },
    {
      dimension: "Source Verification Standard",
      genericAi: "Probabilistic text generation without epistemic boundaries (hallucination prone)",
      raven: "5-Tier Epistemic Discipline (Fact, Derived, Inference, Hypothesis) with exact SEC accession citations"
    },
    {
      dimension: "Multi-Document Synthesis",
      genericAi: "Treats documents as isolated PDF text silos",
      raven: "Cross-filing reconciliation (reconciles 10-K loan schedules with S-4 MAE carveouts and 13D/G voting blocks)"
    },
    {
      dimension: "Adversarial Red-Teaming",
      genericAi: "Passive, affirmative responses without counter-tactic modeling",
      raven: "Forensic red-team pressure modeling from the perspective of hostile bidders, activists, and regulators"
    },
    {
      dimension: "Data Provenance & Audit Trail",
      genericAi: "Opaque 'black box' weights with unversioned output",
      raven: "Cryptographic Commit Layer preserving immutable timestamped claim ledgers"
    },
    {
      dimension: "Institutional Information Hygiene",
      genericAi: "Requires uploading private deal data into generic third-party LLM clouds",
      raven: "100% public filing ground truth; zero private customer deal data or MNPI required"
    },
    {
      dimension: "Decision Output Format",
      genericAi: "Lengthy chat transcripts and unranked bullet lists",
      raven: "8-Part Transaction Intelligence Package with 7-Minute Boardroom Briefing Protocol"
    }
  ];

  return (
    <section className="py-24 px-6 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30 font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
            <Cpu className="w-3 h-3" /> ARCHITECTURAL DIFFERENTIATION
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
            Why Document Chatbots Fail at Transaction Dilemmas
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            Standard legal AI tools index contracts to answer what is written. Raven reconstructs transaction states to expose who holds leverage when assumptions break down.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/60 font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
                <th className="p-5 font-bold text-[var(--text-primary)] w-1/4">Evaluation Vector</th>
                <th className="p-5 text-red-400/80 w-3/8">Generic AI / Legal Chatbots</th>
                <th className="p-5 text-[var(--brand-cyan)] font-bold w-3/8 bg-[var(--brand-cyan)]/5">Raven Transaction Intelligence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)] text-xs">
              {COMPARISONS.map((row, idx) => (
                <tr key={idx} className="hover:bg-[var(--bg-secondary)]/20 transition-colors">
                  <td className="p-5 font-mono text-[11px] font-bold text-[var(--text-primary)]">
                    {row.dimension}
                  </td>
                  <td className="p-5 text-[var(--text-secondary)] leading-relaxed flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{row.genericAi}</span>
                  </td>
                  <td className="p-5 text-[var(--text-primary)] leading-relaxed bg-[var(--brand-cyan)]/5 font-medium">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[var(--brand-cyan)] shrink-0 mt-0.5" />
                      <span>{row.raven}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
