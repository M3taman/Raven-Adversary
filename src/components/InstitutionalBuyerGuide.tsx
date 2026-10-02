import React, { useState } from 'react';
import { 
  HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Check, 
  ArrowRight, FileText, Lock, AlertCircle, Scale, Database, UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: string;
  number: string;
  question: string;
  shortSummary: string;
  detailedAnswer: React.ReactNode;
}

const BUYER_QUESTIONS: FAQItem[] = [
  {
    id: 'buying',
    number: '01',
    question: 'What exactly am I buying?',
    shortSummary: 'An analyst-led, transaction-specific forensic intelligence audit supported by Raven’s adversarial analytical engine.',
    detailedAnswer: (
      <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
        <p>
          You are not buying a generic SaaS software subscription or an automated document search bar. You are commissioning an <strong>analyst-led forensic audit sprint</strong> for a single live corporate transaction.
        </p>
        <p>
          Raven ingests the full universe of primary public regulatory disclosures (Forms S-4, 8-K, 10-K, Call Reports, debt indentures) and runs multi-agent adversarial debate rounds to map hidden contractual vulnerabilities, liquidity cliffs, and governance fractures before delivery.
        </p>
      </div>
    )
  },
  {
    id: 'deliverables',
    number: '02',
    question: 'What will I receive?',
    shortSummary: 'The 8-Part Transaction Review Package, anchored by a 16-chapter PDF dossier, 1-page MD brief, and clause cards.',
    detailedAnswer: (
      <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
        <p>
          You receive a complete, board-ready audit suite delivered in standardized PDF and structured data formats:
        </p>
        <ul className="space-y-1.5 list-disc pl-4 text-[var(--text-primary)]">
          <li><strong>Page One MD Passthrough Brief:</strong> 1-page executive summary with transaction state, material pressure, and actionable mandates.</li>
          <li><strong>16-Chapter Forensic Deal Risk Audit (PDF):</strong> Complete 9+ page forensic dossier from capital waterfall to strategic redlines.</li>
          <li><strong>Contractual Clause Cards:</strong> Exact verbatim disclosures with trigger events, amplifier mechanisms, and information gaps.</li>
          <li><strong>Raven 6-Vector Risk Index:</strong> Quantitative scoring (0–100) across Pressure, Financing, Regulatory, Governance, Litigation, and Operations.</li>
          <li><strong>Negative Knowledge Register:</strong> Explicit documentation of unestablished rumors and missing public terms.</li>
          <li><strong>Boardroom Walkthrough Presentation:</strong> High-conviction visual deck for Investment Committees and General Counsel.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'trust',
    number: '03',
    question: 'Why should I trust the output?',
    shortSummary: 'Every assertion is classified into 5 epistemic tiers with line-numbered SEC EDGAR citations and documented analyst review.',
    detailedAnswer: (
      <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
        <p>
          We do not ask you to trust a "black box" or generic AI summaries. We build trust through <strong>verifiable evidence provenance</strong>:
        </p>
        <ul className="space-y-1.5 list-disc pl-4">
          <li><strong>5-Tier Epistemic Standard:</strong> Verified Facts (E1), Derived Computations (E2), and Structural Inferences (E3) are never conflated.</li>
          <li><strong>Negative Knowledge Isolation:</strong> If a critical closing date or debt waiver is missing from public filings, we explicitly state it is NOT ESTABLISHED IN THE PUBLIC RECORD.</li>
          <li><strong>Documented Analyst Review:</strong> Every automated dialectic is checked against primary filings by responsible principal analyst Abhishek Tanwar prior to delivery.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'advantage',
    number: '04',
    question: 'What does Raven do that my team and counsel cannot?',
    shortSummary: 'Connects disjointed cross-document dependencies into an evidence-linked pressure model to stress-test your existing assumptions.',
    detailedAnswer: (
      <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
        <p>
          Raven is <strong>not intended to replace your external legal counsel, internal investment team, or financial advisors</strong>:
        </p>
        <ul className="space-y-1.5 list-disc pl-4 text-[var(--text-primary)]">
          <li><strong>Investment Team:</strong> Evaluates opportunity attractiveness within your portfolio strategy, hurdle rates, and risk framework.</li>
          <li><strong>External Legal Counsel:</strong> Advises on contractual enforceability, statutory Delaware/DGCL law, negotiation terms, and transaction execution.</li>
          <li><strong>Raven Adversary:</strong> Provides a separate, transaction-specific review that maps the collision between separate parts of the deal—connecting disclosed financing conditions, contractual termination rights, governance arrangements, liquidity cliffs, and proration math.</li>
        </ul>
        <p>
          Where legal interpretation is required, Raven identifies the relevant clause coordinates for review by qualified counsel rather than presenting itself as a substitute for a legal opinion.
        </p>
      </div>
    )
  },
  {
    id: 'verify',
    number: '05',
    question: 'Can I verify the work myself?',
    shortSummary: 'Yes. Every material finding includes exact SEC EDGAR accession numbers, filing dates, and line coordinates.',
    detailedAnswer: (
      <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
        <p>
          100% of our findings are auditable. The dossier includes a complete <strong>Evidence Desk & SEC Citation Registry (CH 14)</strong>. Your associates or outside counsel can open the exact SEC EDGAR filing link and verify every quote, calculation input, and contractual threshold in minutes.
        </p>
      </div>
    )
  },
  {
    id: 'who',
    number: '06',
    question: 'Who is actually doing the work?',
    shortSummary: 'Conducted and reviewed by founder & principal analyst Abhishek Tanwar, utilizing Raven’s proprietary multi-agent debate engine.',
    detailedAnswer: (
      <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
        <p>
          Raven is a founder-led specialist intelligence firm founded by <strong>Abhishek Tanwar</strong>. We do not hide behind an anonymous corporate facade or outsource analysis to junior staff.
        </p>
        <p>
          The analysis combines proprietary deterministic model pipelines (Seller's Advocate vs. Buyer Critique) with direct human sign-off. Every deliverable is audited against source documents by Abhishek Tanwar before client transmission.
        </p>
      </div>
    )
  },
  {
    id: 'privacy',
    number: '07',
    question: 'What happens to my information?',
    shortSummary: 'Zero MNPI required. We operate strictly on public filings. Inquiries are kept strictly confidential and never traded upon.',
    detailedAnswer: (
      <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
        <p>
          We enforce strict informational hygiene designed for institutional compliance:
        </p>
        <ul className="space-y-1.5 list-disc pl-4">
          <li><strong>Zero MNPI Substrate:</strong> We analyze only public SEC filings, Call Reports, and court dockets. We never request or accept non-public deal documents or virtual data room access.</li>
          <li><strong>Inquiry Confidentiality:</strong> Your search queries and ticker identifiers are treated as confidential. We never disclose, publish, or trade around client transaction inquiries.</li>
          <li><strong>No Model Training:</strong> Client inquiries and commissioned analyses are never used to train public commercial AI models.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'feasibility',
    number: '08',
    question: 'Will this work for my transaction?',
    shortSummary: 'Supported for U.S. public mergers, bank consolidations, de-SPACs, and proxy contests. Not supported for pure private deals.',
    detailedAnswer: (
      <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
        <p>
          Raven evaluates transaction feasibility based on the availability of definitive public filings:
        </p>
        <ul className="space-y-1.5 list-disc pl-4">
          <li><strong>Supported:</strong> U.S. Public M&A (S-4, 8-K, DEF 14A), Bank Holding Company consolidations (Call Reports), De-SPAC combinations, and contested proxy battles.</li>
          <li><strong>Partially Supported:</strong> Cross-border mergers with English regulatory disclosures (Form F-4, 20-F) and public Chapter 11 reorganizations.</li>
          <li><strong>Outside Scope:</strong> Private-to-private transactions with zero public disclosures, or transactions where core commercial terms are redacted under confidential treatment requests.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'terms',
    number: '09',
    question: 'What are the commercial terms & pilot structure?',
    shortSummary: 'Structured as a defined $10,000 transaction review pilot with a 72-hour delivery target on an agreed public transaction.',
    detailedAnswer: (
      <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
        <p>
          Our engagements are structured as <strong>defined transaction review pilots</strong> with clear scope prerequisites:
        </p>
        <ul className="space-y-1.5 list-disc pl-4 text-[var(--text-primary)]">
          <li><strong>Standard Pilot ($10,000):</strong> Comprehensive 8-part dossier and 16-chapter forensic report delivered against an agreed research cutoff date (72-hour delivery target).</li>
          <li><strong>Point-in-Time Baseline:</strong> The analysis establishes an auditable snapshot as of the agreed research cutoff date. Ordinary-course 8-Ks filed during the active 72h sprint are incorporated. Substantial transaction restructurings require mutual scope re-baselining.</li>
          <li><strong>Expedited Priority Desk ($25,000):</strong> Accelerated 24–48 hour delivery for imminent shareholder votes, hostile exchange offers, or drop-dead dates.</li>
          <li><strong>Zero Hidden Fees:</strong> 100% fixed fee. No hourly billables, no unexpected overages. Formal invoice issued only after mutual scope confirmation.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'next',
    number: '10',
    question: 'What do I do next?',
    shortSummary: 'Submit a target ticker for a free public-source feasibility check. No payment required upfront.',
    detailedAnswer: (
      <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
        <p>
          You do not need to spend $10,000 or make a commitment today.
        </p>
        <p>
          Simply submit the target company ticker, CIK, or deal name. Our desk will run a <strong>free public-source feasibility check</strong> to confirm whether the SEC filing record has sufficient depth to support a high-conviction assessment.
        </p>
        <div className="pt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[var(--brand-cyan)] font-bold hover:underline"
          >
            Submit Transaction for Free Feasibility Check <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    )
  }
];

export function InstitutionalBuyerGuide() {
  const [openId, setOpenId] = useState<string>('buying');

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section className="py-24 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/10" id="buyer-guide">
      <div className="max-w-6xl mx-auto space-y-14">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30 font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
            <HelpCircle className="w-3 h-3" /> INSTITUTIONAL BUYER’S GUIDE // DUE DILIGENCE ON RAVEN
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
            10 Questions Every Institutional Investor Asks
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Direct, factual answers for event-driven analysts, portfolio managers, general counsel, and procurement officers evaluating our service.
          </p>
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="border border-[var(--border-color)] bg-[var(--bg-primary)] divide-y divide-[var(--border-color)]">
          {BUYER_QUESTIONS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="transition-colors">
                <button
                  onClick={() => toggleOpen(item.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-[var(--bg-secondary)]/30 transition-colors"
                >
                  <div className="space-y-1.5 pr-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[var(--brand-cyan)]">
                        {item.number}
                      </span>
                      <h3 className="text-base font-bold font-heading text-[var(--text-primary)]">
                        {item.question}
                      </h3>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] font-mono pl-7">
                      {item.shortSummary}
                    </p>
                  </div>

                  <div className="pt-1 text-[var(--text-tertiary)] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[var(--brand-cyan)]" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 pl-14 border-t border-[var(--border-color)]/40 bg-[var(--bg-secondary)]/10 animate-in fade-in duration-150">
                    {item.detailedAnswer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase">
              Need to evaluate an active transaction with your investment committee?
            </div>
            <div className="font-mono text-xs text-[var(--text-tertiary)]">
              Submit the target ticker or deal name. We will confirm source availability within 1 business day with zero obligation.
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Start Free Feasibility Check
          </a>
        </div>

      </div>
    </section>
  );
}
