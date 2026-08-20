import React from 'react';
import { Shield, FileCheck, CheckCircle2, Lock, Scale, AlertOctagon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ConflictsPolicy() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="space-y-4 border-b border-[var(--border-color)] pb-8">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
          <Scale className="w-3 h-3" /> INSTITUTIONAL ETHICAL WALLS // CONFLICTS
        </div>
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
          Transaction Conflict & Ethical Wall Policy
        </h1>
        <p className="text-sm md:text-base text-[var(--text-secondary)] font-mono">
          Effective Date: August 2026 // Version 2.4 // Governance Clearance Protocol
        </p>
      </div>

      {/* Policy Content */}
      <div className="space-y-8 text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
        
        <section className="space-y-3">
          <h2 className="text-lg font-bold font-heading text-[var(--text-primary)]">1. Purpose & Scope</h2>
          <p>
            Raven Adversary provides transactional state reconstruction, covenant pressure modeling, and red-team strategic intelligence to institutional market participants, including event-driven funds, investment banking advisory desks, transaction litigators, and board special committees. Given the adversarial nature of M&A transactions, this policy establishes clear, binding mechanisms to screen for, isolate, and eliminate potential transactional conflicts of interest.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-heading text-[var(--text-primary)]">2. Mandatory Pre-Engagement Conflict Clearance</h2>
          <p>
            Prior to commencing any 8-Part Transaction Review ($10K or $25K engagement), Raven's automated intake system checks the target company CIK, ticker, and transaction counterparties against our active engagement registry.
          </p>
          <ul className="list-disc pl-5 space-y-2 font-mono text-xs text-[var(--text-primary)]">
            <li>If an active exclusive mandate exists on the same transaction for an opposing party, the prospective inquiry is immediately declined with zero disclosure of prior client identity.</li>
            <li>Conflict clearance is completed within two (2) hours of initial intake submission.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-heading text-[var(--text-primary)]">3. Digital Ethical Walls & Team Segregation</h2>
          <p>
            Where non-exclusive research licenses apply, Raven enforces strict digital ethical walls. Analysts and compute pipelines assigned to a transaction review are logically partitioned. Access controls, encryption keys, and deliverable repositories are segregated at the tenant level.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-heading text-[var(--text-primary)]">4. Sole Reliance on Public Filings (Zero MNPI)</h2>
          <p>
            Raven Adversary strictly operates under an immutable public-filings mandate. All analyses are grounded exclusively in documents filed with the U.S. Securities and Exchange Commission (SEC), Federal Reserve/FDIC Call Reports, state banking departments, and public court dockets. Raven does not solicit, accept, or store Material Non-Public Information (MNPI), ensuring that institutional clients can engage Raven without triggering information-sharing prohibitions or regulatory trading blackouts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-heading text-[var(--text-primary)]">5. Zero Model Training Covenant</h2>
          <p>
            Client strategic inquiries, specific area-of-focus directives, and customized red-team scenarios are strictly classified. Under no circumstances are client inputs or bespoke outputs utilized to train, fine-tune, or benchmark underlying AI foundation models.
          </p>
        </section>

      </div>

      <div className="pt-8 border-t border-[var(--border-color)] flex justify-between items-center text-xs font-mono">
        <Link to="/trust" className="text-[var(--brand-cyan)] hover:underline flex items-center gap-1">
          ← Back to Trust Center
        </Link>
        <Link to="/transaction-review" className="text-[var(--text-primary)] hover:underline">
          Initiate Transaction Intake →
        </Link>
      </div>

    </div>
  );
}
