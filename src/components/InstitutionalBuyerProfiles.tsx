import React, { useState } from 'react';
import { Target, TrendingUp, ShieldAlert, Scale, Briefcase, Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Profile {
  id: string;
  role: string;
  icon: React.ReactNode;
  mandate: string;
  triggerEvent: string;
  coreDilemma: string;
  ravenApplication: string;
  primaryDeliverable: string;
}

const PROFILES: Profile[] = [
  {
    id: 'merger-arb',
    role: 'Event-Driven & Merger Arbitrage Funds',
    icon: <TrendingUp className="w-5 h-5 text-[var(--brand-cyan)]" />,
    mandate: 'Pricing deal break risk, regulatory spread compression, and timing delay exposure on announced transactions.',
    triggerEvent: 'S-4 registration statement or definitive merger agreement filed on a high-spread transaction.',
    coreDilemma: 'Is the 14% merger spread reflecting real structural failure risk, or is the market mispricing standard regulatory process?',
    ravenApplication: 'Maps exact contractual walk-away rights, ticking fee schedules, antitrust carveouts, and interim covenant fragility to establish mathematical downside boundaries.',
    primaryDeliverable: 'Part 04 Pressure Propagation Map & Part 05 Adversarial Strategy Memo.'
  },
  {
    id: 'ma-advisory',
    role: 'M&A Advisory Desks & Investment Banks',
    icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
    mandate: 'Advising board special committees, structuring definitive agreements, and defending transaction valuations.',
    triggerEvent: 'Confirmatory diligence phase prior to definitive agreement signing or board fairness opinion delivery.',
    coreDilemma: 'Where are the latent post-closing balance sheet and contractual traps that could embarrass the deal committee post-announcement?',
    ravenApplication: 'Conducts an independent forensic red-team audit of TSA obligations, stranded overhead, and MAE carveout symmetry before board commitment.',
    primaryDeliverable: 'Part 03 Critical Clause Cards & Part 06 Executive Decision Brief.'
  },
  {
    id: 'transaction-lit',
    role: 'Transaction & Special Situations Litigators',
    icon: <Scale className="w-5 h-5 text-purple-400" />,
    mandate: 'Advising on MAC/MAE litigation, break-fee disputes, and shareholder breach of fiduciary duty claims.',
    triggerEvent: 'Disputed closing condition, adverse recommendation change, or demand letter asserting deal breach.',
    coreDilemma: 'Does the opposing party have a legally enforceable out under the definitive agreement, or is it bad-faith pretext?',
    ravenApplication: 'Builds an evidentiary ledger cross-referencing all SEC public disclosures, proxy timeline drift, and drafting history to establish binding contractual intent.',
    primaryDeliverable: 'Part 02 Forensic Evidence Ledger & Part 08 Immutable Commit Layer Artifact.'
  },
  {
    id: 'activist-defense',
    role: 'Activist Investors & Corporate Defense Teams',
    icon: <ShieldAlert className="w-5 h-5 text-amber-400" />,
    mandate: 'Identifying governance entrenchment, proxy solicitation vulnerabilities, and unlocking trapped balance sheet capital.',
    triggerEvent: 'Preliminary proxy filing, contested slate nomination, or Schedule 13D stake disclosure.',
    coreDilemma: 'How many actual votes can management reliably command under real-world trustee pass-through and retail abstention rules?',
    ravenApplication: 'Dissects ESOP trust deeds, dual-class pass-throughs, and index fund voting patterns to pinpoint the exact mathematical voting inflection point.',
    primaryDeliverable: 'Part 01 Transaction State Baseline & Part 05 Adversarial Strategy Memo.'
  },
  {
    id: 'bank-corpdev',
    role: 'Bank M&A & Corporate Development Leads',
    icon: <Landmark className="w-5 h-5 text-emerald-400" />,
    mandate: 'Executing bank acquisitions, credit portfolio integration, and regulatory capital threshold planning.',
    triggerEvent: 'Bank merger announcement, branch network acquisition, or crossing $100B / $250B asset tiers.',
    coreDilemma: 'Will the target loan book write-downs or Category III HQLA liquidity rules trigger regulatory capital dilution post-close?',
    ravenApplication: 'Simulates loan portfolio stress marks against pro-forma CET1 ratios and models daily LCR liquidity requirements from Call Report schedules.',
    primaryDeliverable: 'Part 04 Pressure Propagation Map & Part 07 7-Minute Boardroom Walkthrough.'
  }
];

export function InstitutionalBuyerProfiles() {
  const [activeProfileId, setActiveProfileId] = useState(PROFILES[0].id);
  const activeProfile = PROFILES.find(p => p.id === activeProfileId) || PROFILES[0];

  return (
    <section className="py-24 px-6 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30 font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
            <Target className="w-3 h-3" /> INSTITUTIONAL USE CASES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
            Engineered for High-Conviction Transaction Desks
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            Whether evaluating merger arbitrage spreads, preparing a board committee defense, or structuring definitive agreements, Raven provides actionable structural certainty.
          </p>
        </div>

        {/* Profile Selector Tabs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 border-b border-[var(--border-color)] pb-6">
          {PROFILES.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProfileId(p.id)}
              className={`p-4 text-left border transition-all flex flex-col justify-between space-y-3 ${
                activeProfileId === p.id
                  ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5 shadow-sm'
                  : 'border-[var(--border-color)] bg-[var(--bg-secondary)]/20 hover:border-[var(--border-highlight)]'
              }`}
            >
              <div className="flex items-center justify-between">
                {p.icon}
                <span className={`font-mono text-[8px] uppercase tracking-widest ${activeProfileId === p.id ? 'text-[var(--brand-cyan)] font-bold' : 'text-[var(--text-tertiary)]'}`}>
                  PROFILE
                </span>
              </div>
              <div className="text-xs font-bold font-heading text-[var(--text-primary)] leading-tight">
                {p.role}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Profile Detailed Dossier */}
        <div className="p-8 md:p-10 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Context & Trigger */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="font-mono text-[9px] text-[var(--brand-cyan)] uppercase tracking-widest font-bold">
                INSTITUTIONAL MANDATE
              </div>
              <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                {activeProfile.role}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {activeProfile.mandate}
              </p>
            </div>

            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-1.5">
              <div className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase font-bold">
                CATALYST / TRIGGER EVENT
              </div>
              <div className="text-xs text-[var(--text-primary)] font-medium">
                {activeProfile.triggerEvent}
              </div>
            </div>

            <div className="p-4 border border-amber-500/20 bg-amber-500/5 space-y-1.5">
              <div className="font-mono text-[9px] text-amber-400 uppercase font-bold">
                CORE DILEMMA FACED
              </div>
              <div className="text-xs text-[var(--text-primary)] font-medium italic">
                "{activeProfile.coreDilemma}"
              </div>
            </div>
          </div>

          {/* Right Column: Raven Application & Deliverable */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-3">
              <div className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-widest font-bold">
                HOW RAVEN RECONSTRUCTS THE STATE
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {activeProfile.ravenApplication}
              </p>
            </div>

            <div className="p-5 border border-emerald-500/20 bg-emerald-500/5 space-y-2">
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-400 uppercase tracking-widest font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> PRIMARY AUDIT ARTIFACT DELIVERED
              </div>
              <div className="text-xs font-bold text-[var(--text-primary)] font-heading">
                {activeProfile.primaryDeliverable}
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
              <span className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase">
                TYPICAL TURNAROUND: 48 TO 72 HOURS
              </span>
              <a
                href="/#contact"
                className="font-mono text-xs text-[var(--brand-cyan)] hover:underline font-bold flex items-center gap-1 uppercase tracking-wider"
              >
                Inquire For Mandate <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
