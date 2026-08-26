import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  Scale, 
  FileSearch, 
  ArrowRight, 
  CheckCircle2, 
  AlertOctagon,
  Layers,
  Flame,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface InstitutionalProfile {
  id: string;
  role: string;
  category: string;
  icon: React.ReactNode;
  primaryMandate: string;
  blindspotsUncovered: string[];
  ravenWorkflow: string;
  keyDeliverable: string;
  caseReference: {
    title: string;
    link: string;
    finding: string;
  };
}

const PROFILES: InstitutionalProfile[] = [
  {
    id: 'investment-banking',
    role: 'M&A Investment Banking & Financial Advisory',
    category: 'BUY-SIDE & SELL-SIDE TEAMS',
    icon: <Briefcase className="w-5 h-5 text-[var(--brand-cyan)]" />,
    primaryMandate: 'Evaluating asymmetric contractual risk, collar break mechanics, and post-close stranded corporate overhead in live buy-side and sell-side mandates.',
    blindspotsUncovered: [
      'Unabsorbed Transition Services Agreement (TSA) cost drag persisting beyond Year 2',
      'One-directional Net Cash downward adjustments without reciprocal collars',
      'Asymmetric floor financing conditions enabling target closing with 50%+ capital shortfalls'
    ],
    ravenWorkflow: 'Ingests merger agreements and SEC disclosures to simulate drop-dead expiration states, Net Cash burn schedules, and collar sensitivity curves.',
    keyDeliverable: 'Transaction State Baseline & Adversarial Pressure Cascade Map within 48 hours of filing.',
    caseReference: {
      title: 'NextCure / Avere Therapeutics',
      link: '/case-studies/nextcure-avere',
      finding: 'Exposed a one-directional Net Cash downward penalty and a $150M floor permitting a $170M capital deficit.'
    }
  },
  {
    id: 'private-equity',
    role: 'Private Equity Sponsors & PIPE Syndicates',
    category: 'BUYOUTS & RECAPITALIZATIONS',
    icon: <Building2 className="w-5 h-5 text-emerald-400" />,
    primaryMandate: 'Auditing multi-class governance structures, super-voting director preferences, and liquidation seniority in complex carve-outs and reverse mergers.',
    blindspotsUncovered: [
      'Series A Preferred multi-vote clauses conferring 80%+ active board control with minority economic stakes',
      'Extinguishment of representations and warranties at closing without indemnity escrows',
      'Pre-closing litigation awards exceeding target standalone cash reserves'
    ],
    ravenWorkflow: 'Reconstructs shareholder control topologies, voting agreements, and Section 13(d) beneficial ownership aggregation risks across syndicate members.',
    keyDeliverable: 'Control Topology Dossier & Fiduciary Veto Risk Matrix.',
    caseReference: {
      title: 'InMed / Mentari Therapeutics',
      link: '/case-studies/inmed-mentari',
      finding: 'Uncovered 3-vote-per-seat Series A preferred mechanics (85.71% active board control) and $5.7M arbitration exposure.'
    }
  },
  {
    id: 'corporate-development',
    role: 'Corporate Development & Strategy Executives',
    category: 'STRATEGIC ACQUIRERS',
    icon: <Layers className="w-5 h-5 text-blue-400" />,
    primaryMandate: 'Stress-testing post-merger operational integration, entity verification, and undisclosed contingent liabilities before signing definitive documentation.',
    blindspotsUncovered: [
      'Target entity identity discontinuities between private operating subsidiaries and regional holding companies',
      'Unaudited loan pools and unquantified Commercial Real Estate (CRE) concentration marks',
      'Material customer concentration clauses masked behind confidential treatment requests'
    ],
    ravenWorkflow: 'Performs multi-entity Edgar and regulatory call report reconciliation to verify target financials, loan portfolios, and subsidiary structures.',
    keyDeliverable: 'Evidentiary Reconciliation Ledger & Information Vacuum Audit.',
    caseReference: {
      title: 'First Bancorp / First Carolina (Florence, SC)',
      link: '/case-studies/fbnc-fcbm',
      finding: 'Disentangled the unrated Florence, SC target ($831M assets) from the unrelated Raleigh institution.'
    }
  },
  {
    id: 'event-driven',
    role: 'Event-Driven & Special Situations Funds',
    category: 'M&A ARBITRAGE & CREDIT FUNDS',
    icon: <TrendingUp className="w-5 h-5 text-purple-400" />,
    primaryMandate: 'Determining deal-break probabilities, definitive termination fee triggers, and chronological tender offer validity.',
    blindspotsUncovered: [
      'Willful breach liquidated damages triggers ($500k+) buried in post-expiration disclosures',
      'Financing failure timelines preceding public tender expiration timestamps',
      'Regulatory clearance timelines exceeding merger agreement drop-dead dates'
    ],
    ravenWorkflow: 'Reconstructs chronological transaction event state trees to evaluate walkaway rights, specific performance remedies, and litigation odds.',
    keyDeliverable: 'Litigation Exposure & Willful Breach Chronology Reconstruction.',
    caseReference: {
      title: 'VerifyMe / OpenWorld',
      link: '/case-studies/verifyme-openworld',
      finding: 'Reconstructed 24-hr chronological collision between tender expiration and financing deficit disclosure.'
    }
  },
  {
    id: 'governance-committees',
    role: 'Board Special Committees & Independent Directors',
    category: 'BOARD GOVERNANCE & FIDUCIARY REVIEW',
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    primaryMandate: 'Obtaining an unconflicted, adversarial second opinion on fairness opinions, transaction pricing adjustments, and conflict-of-interest structures.',
    blindspotsUncovered: [
      'Asymmetric deal protections favoring controlling rollover shareholders over public float',
      'Executive retention carve-outs that reduce pro-rata consideration for common shareholders',
      'Advisory fee payout incentives conditioned strictly on consummation rather than shareholder value'
    ],
    ravenWorkflow: 'Adversarially stress-tests fairness opinion methodology, committee minutes disclosures, and special committee mandates.',
    keyDeliverable: '7-Minute Boardroom Walkthrough & Fiduciary Conflict Audit.',
    caseReference: {
      title: 'NIM S.A. / Gravitics Inc.',
      link: '/case-studies/nims-gravitics',
      finding: 'Identified zero post-closing indemnity recourse and $50M Rep & Warranty insurance gap.'
    }
  },
  {
    id: 'litigation-counsel',
    role: 'M&A Litigation Counsel & Special Counsel',
    category: 'LEGAL ADVISORS & LITIGATORS',
    icon: <Scale className="w-5 h-5 text-rose-400" />,
    primaryMandate: 'Building evidentiary records from public filings for Delaware Court of Chancery claims, appraisal rights disputes, and breach of fiduciary duty suits.',
    blindspotsUncovered: [
      'Contradictions between preliminary proxy S-4 narratives and definitive 8-K disclosure schedules',
      'Omitted material facts regarding pre-signing bidder outreach and superior proposals',
      'Material Adverse Effect (MAE) carve-outs that leave sellers exposed to sector-wide shocks'
    ],
    ravenWorkflow: 'Generates line-by-line verifiable SEC filing citations with verbatim quote extracts, provenance hashing, and epistemic truth ledgers.',
    keyDeliverable: 'Cryptographically Committed Evidentiary Brief with Line-Numbered SEC Filings.',
    caseReference: {
      title: 'Evidence Standard Framework',
      link: '/evidence-standard',
      finding: 'Enforces 5-tier classification separating verified facts from derivative hypotheses.'
    }
  }
];

export default function InstitutionalUse() {
  return (
    <div className="py-12 md:py-20 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* HERO SECTION */}
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
          <Briefcase className="w-3 h-3 text-[var(--brand-cyan)]" />
          INSTITUTIONAL ADVISORY & FIDUCIARY MANDATES
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading text-[var(--text-primary)]">
          Institutional Use Profiles
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
          How investment banks, private equity sponsors, corporate development teams, special committees, and litigators deploy Raven to uncover unpriced transaction risks.
        </p>

        <div className="pt-2 flex flex-wrap gap-4 items-center">
          <Link
            to="/request-assessment"
            className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Request Transaction Assessment <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          
          <Link
            to="/raven-engine"
            className="border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            Explore The Raven Engine <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* INSTITUTIONAL PROFILES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROFILES.map((profile) => (
          <div 
            key={profile.id}
            id={profile.id}
            className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--brand-cyan)]/50 transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 border border-[var(--border-color)] bg-[var(--bg-secondary)]">
                  {profile.icon}
                </div>
                <span className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-wider">
                  {profile.category}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">
                  {profile.role}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  {profile.primaryMandate}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[var(--border-color)]/60">
                <div className="font-mono text-[9px] text-[var(--brand-cyan)] uppercase font-bold tracking-wider">
                  PRIMARY BLINDSPOTS UNCOVERED:
                </div>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  {profile.blindspotsUncovered.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-mono mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-2 border-t border-[var(--border-color)]/60">
                <div className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase font-bold tracking-wider">
                  RAVEN ENGINE WORKFLOW:
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {profile.ravenWorkflow}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)] space-y-3">
              <div className="p-3 bg-[var(--bg-secondary)]/60 border border-[var(--border-color)] font-mono text-[10px]">
                <div className="text-[var(--text-tertiary)] uppercase">KEY DELIVERABLE:</div>
                <div className="font-bold text-[var(--text-primary)] mt-0.5">{profile.keyDeliverable}</div>
              </div>

              <Link
                to={profile.caseReference.link}
                className="block text-xs font-mono text-[var(--brand-cyan)] hover:underline pt-1 flex items-center justify-between"
              >
                <span>Proof: {profile.caseReference.title}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

          </div>
        ))}
      </div>

      {/* SECTION: ZERO MNPI GUARANTEE FOR INSTITUTIONS */}
      <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 p-8 md:p-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            ZERO MNPI // PUBLIC FILINGS MANDATE
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
            How Raven Protects Institutional Information Hygiene
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Every analysis generated by Raven relies exclusively on public SEC filings, definitive proxies, regulatory applications, and public court records. We do not accept, ingest, or train on Material Non-Public Information (MNPI), ensuring absolute compliance with securities regulations and ethical walls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[var(--border-color)]">
          <div className="p-5 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-2">
            <div className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase">100% SEC Line Provenance</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Every factual assertion links to exact line citations and EDGAR accession numbers.
            </p>
          </div>
          <div className="p-5 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-2">
            <div className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase">Zero AI Model Training</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Client transaction queries and assessment parameters are never used to train foundation models.
            </p>
          </div>
          <div className="p-5 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-2">
            <div className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase">Digital Ethical Walls</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Separate encrypted workspaces guarantee strict segregation between competing transactional advisory firms.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="p-8 md:p-12 border border-[var(--brand-cyan)]/40 bg-[var(--brand-cyan)]/5 space-y-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
          Request an Institutional Assessment for Your Mandate
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
          Receive a tailored 8-part adversarial transaction review within 48 to 72 hours.
        </p>
        <div className="pt-2">
          <Link
            to="/request-assessment"
            className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Submit Transaction Mandate <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}
