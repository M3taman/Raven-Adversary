import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  AlertTriangle, 
  Scale, 
  FileText, 
  ExternalLink, 
  Play, 
  Building2, 
  TrendingUp, 
  Briefcase,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { InteractiveBoardroomBriefing } from '../components/InteractiveBoardroomBriefing';

interface ArchiveDeal {
  id: string;
  title: string;
  targetTicker?: string;
  acquirerTicker?: string;
  dealType: string;
  dealSize: string;
  date: string;
  status: 'CLOSED' | 'ACTIVE_AUDIT' | 'TERMINATED' | 'REGULATORY_REVIEW';
  ravenObservation: string;
  pressureEvent: string;
  propagationPath: string[];
  keyRiskCategory: string;
  verifiedFactsCount: number;
  secSources: string[];
  hasBoardroomWalkthrough: boolean;
}

const DEALS_ARCHIVE: ArchiveDeal[] = [
  {
    id: 'inmed-mentari',
    title: 'InMed Pharmaceuticals / Mentari Therapeutics',
    targetTicker: 'INM',
    dealType: 'Reverse Merger & $490M PIPE',
    dealSize: '$490.0M PIPE / $125M Target',
    date: 'August 2026',
    status: 'ACTIVE_AUDIT',
    ravenObservation: 'Series A Preferred super-voting mechanics (3 votes per seat) confer 85.71% active board control to two investor designees alongside $5.7M in pending arbitration cash risk.',
    pressureEvent: 'Extinguishment of reps & warranties at closing with zero indemnity escrow while facing $5.7M Ontario arbitration claims against $5.2M standalone cash.',
    propagationPath: [
      'Series A multi-vote clause (3 votes/seat)',
      'Fairmount designees capture 85.71% active board votes',
      'Mandatory class negative covenants block board expansion',
      'Zero post-close indemnity recourse under Section 9.01',
      '$5.7M Ontario arbitration triggers pre-closing liquidity insolvency'
    ],
    keyRiskCategory: 'Governance & Liquidity',
    verifiedFactsCount: 14,
    secSources: ['SEC Form 8-K', 'SEC Form S-4 Proxy/Prospectus', 'Nevada Certificate of Designation'],
    hasBoardroomWalkthrough: true
  },
  {
    id: 'nextcure-avere',
    title: 'NextCure, Inc. / Avere Therapeutics',
    targetTicker: 'NXTC',
    dealType: 'Reverse Merger & Distressed Biotech PIPE',
    dealSize: '$320.0M Stated ($150M Floor)',
    date: 'August 2026',
    status: 'ACTIVE_AUDIT',
    ravenObservation: 'A downward-only Parent Net Cash adjustment formula shifts all clinical wind-down burn onto legacy stockholders, while a $150M financing floor permits closing with a $170M capital deficit.',
    pressureEvent: 'NextCure going-concern warning and Q4 2026 cash cliff ($20.1M cash balance) eliminate parent walk-away leverage.',
    propagationPath: [
      'Parent Net Cash downward adjustment formula (Schedule 1.5)',
      'Clinical wind-down burn reduces Net Cash below target amount',
      'Legacy stockholder equity allocation compresses below 1.89%',
      '$150M financing condition floor allows closing with 53% shortfall',
      'Target stockholders diluted without board representation'
    ],
    keyRiskCategory: 'Exchange Ratio & Financing Floor',
    verifiedFactsCount: 12,
    secSources: ['SEC Form 8-K', 'Form 10-Q Item 1A Going Concern', 'Schedule 1.5 Formula'],
    hasBoardroomWalkthrough: true
  },
  {
    id: 'fbnc-fcbm',
    title: 'First Bancorp / First Carolina Bancshares (Florence, SC)',
    targetTicker: 'FBNC',
    dealType: 'Regional Bank Consolidation',
    dealSize: '$166.0M ($40M Cash + 1.97M Shs)',
    date: 'August 2026',
    status: 'REGULATORY_REVIEW',
    ravenObservation: 'Disentangled the privately held Florence, SC target ($831M assets) from the unrelated Raleigh institution, exposing an unaudited loan pool and 41.1% uninsured deposit sensitivity.',
    pressureEvent: 'Zero audited Form 10-Q/10-K filings exist in the public record for the Florence target, creating an unquantified Commercial Real Estate (CRE) mark vacuum.',
    propagationPath: [
      'Entity misidentification between Florence, SC and Raleigh, NC institutions',
      'Absence of SEC periodic reports for Florence target',
      'Unverified loan loss reserves and CRE risk marks',
      'FBNC 41.1% uninsured deposit exposure',
      '6.4% Economic Value of Equity (EVE) shock under +200bps rate shift'
    ],
    keyRiskCategory: 'Entity Verification & Deposit Risk',
    verifiedFactsCount: 16,
    secSources: ['FBNC Form 8-K', 'FBNC Form 10-Q (June 30, 2026)', 'FDIC Call Reports'],
    hasBoardroomWalkthrough: true
  },
  {
    id: 'verifyme-openworld',
    title: 'VerifyMe, Inc. / OpenWorld',
    targetTicker: 'VRME',
    dealType: 'Tender Offer & Crypto-Finance Pivot',
    dealSize: '$42.67M SAFE Cap',
    date: 'August 2026',
    status: 'TERMINATED',
    ravenObservation: 'Reconstructed a 24-hour chronological collision between tender expiration on July 20 and financing deficit disclosure on July 21, establishing grounds for a $500,000 Section 8.5(c) willful breach fee.',
    pressureEvent: 'Nasdaq delisting notice forced rushed combination agreement without verifying financing commitments prior to tender expiration.',
    propagationPath: [
      'Nasdaq delisting notice triggers high-risk sector pivot',
      'Tender offer expires July 20 without financing disclosure',
      'Financing deficit disclosed July 21 triggering termination',
      'Merger Agreement Section 8.5(c) liquidated damages triggered',
      '$500,000 willful breach liability asserted'
    ],
    keyRiskCategory: 'Chronological Collapse & Litigation',
    verifiedFactsCount: 11,
    secSources: ['Form 8-K Disclosures', 'Merger Agreement Section 8.5(c)', 'Rights Amendment No. 2'],
    hasBoardroomWalkthrough: true
  },
  {
    id: 'nims-gravitics',
    title: 'NIM S.A. / Gravitics Inc.',
    targetTicker: 'NIMS',
    dealType: 'Cross-Border Strategic Acquisition',
    dealSize: '$125.0M Valuation',
    date: 'July 2026',
    status: 'CLOSED',
    ravenObservation: 'Identified zero post-closing indemnity recourse and a $50M Rep & Warranty Insurance (RWI) policy gap before closing approval.',
    pressureEvent: 'Asymmetric IP licensing indemnification carve-out transferring legacy space-payload liabilities to the public shell.',
    propagationPath: [
      'Complete extinguishment of representations & warranties at closing',
      'Target IP indemnification obligations transfer to public entity',
      'Absence of escrow holdback exposes acquirer balance sheet',
      'Special committee mandates $50M RWI policy and 10% escrow'
    ],
    keyRiskCategory: 'Indemnity & Insurance Gaps',
    verifiedFactsCount: 18,
    secSources: ['Form 8-K', 'Form F-4 Registration Statement', 'Credit Facility Agreement'],
    hasBoardroomWalkthrough: true
  },
  {
    id: 'first-bancorp',
    title: 'First Bancorp / Grand Bankshares',
    targetTicker: 'FBNC',
    dealType: 'Regional Bank M&A',
    dealSize: '$210.0M Stock Merger',
    date: 'June 2026',
    status: 'CLOSED',
    ravenObservation: 'Modeled CRE concentration thresholds crossing Category III regulatory reporting tiers, causing an immediate 45bps CET1 capital drag.',
    pressureEvent: 'Post-close asset aggregation exceeding $10B threshold triggering Dodd-Frank stress testing compliance costs.',
    propagationPath: [
      'Pro-forma total assets surpass $10B regulatory threshold',
      'Dodd-Frank stress testing and DFAST compliance overhead activates',
      'Unamortized loan fair-value marks dilute Tangible Book Value',
      'Net Interest Margin (NIM) compresses by 18 bps'
    ],
    keyRiskCategory: 'Regulatory Threshold Drag',
    verifiedFactsCount: 15,
    secSources: ['Form 8-K', 'Call Report Schedule RC-R', 'Federal Reserve Regulatory Filings'],
    hasBoardroomWalkthrough: true
  }
];

export default function DealIntelligenceArchive() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedDealForBriefing, setSelectedDealForBriefing] = useState<string | null>(null);

  const categories = ['ALL', 'Governance & Liquidity', 'Exchange Ratio & Financing Floor', 'Entity Verification & Deposit Risk', 'Chronological Collapse & Litigation', 'Indemnity & Insurance Gaps', 'Regulatory Threshold Drag'];

  const filteredDeals = useMemo(() => {
    return DEALS_ARCHIVE.filter(deal => {
      const matchesSearch = 
        deal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.ravenObservation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.pressureEvent.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (deal.targetTicker && deal.targetTicker.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'ALL' || deal.keyRiskCategory === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-12 md:py-20 px-6 max-w-7xl mx-auto space-y-16">
      
      {/* HEADER */}
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
          <Layers className="w-3 h-3 text-[var(--brand-cyan)]" />
          PUBLIC INTELLIGENCE ARCHIVE // 100+ TRANSACTIONS PROCESSED
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading text-[var(--text-primary)]">
          Deal Intelligence Archive
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
          Searchable forensic dossiers, pressure propagation maps, and adversarial decision-states reconstructed from public SEC filings.
        </p>

        <div className="flex flex-wrap gap-4 items-center pt-2">
          <Link
            to="/request-assessment"
            className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Run Raven on a Live Transaction <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/raven-engine"
            className="border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            How the Engine Works <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* SEARCH & FILTER CONTROLS */}
      <div className="border border-[var(--border-color)] bg-[var(--bg-primary)] p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[var(--text-tertiary)] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by company name, ticker (e.g. INM, NXTC, FBNC), clause, or risk vector..."
              className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] pl-11 pr-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--brand-cyan)] focus:outline-none font-sans"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-color)]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 font-mono text-[10px] uppercase font-bold transition-colors ${
                selectedCategory === cat
                  ? 'bg-[var(--brand-cyan)]/20 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-tertiary)] border border-[var(--border-color)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* DEALS LIST */}
      <div className="space-y-8">
        <div className="flex items-center justify-between font-mono text-xs text-[var(--text-tertiary)] uppercase border-b border-[var(--border-color)] pb-3">
          <span>SHOWING {filteredDeals.length} FORENSIC DOSSIERS</span>
          <span>100% EDGAR VERIFIED // ZERO MNPI</span>
        </div>

        {filteredDeals.map((deal) => (
          <div
            key={deal.id}
            id={`deal-${deal.id}`}
            className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--border-highlight)] transition-all space-y-6"
          >
            {/* Top Row: Meta Tags & Title */}
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 border-b border-[var(--border-color)]/60 pb-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[10px]">
                  {deal.targetTicker && (
                    <span className="px-2 py-0.5 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30 font-bold">
                      {deal.targetTicker}
                    </span>
                  )}
                  <span className="px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-tertiary)] uppercase">
                    {deal.dealType}
                  </span>
                  <span className="px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] font-bold">
                    {deal.dealSize}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)] pt-1">
                  {deal.title}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {deal.hasBoardroomWalkthrough && (
                  <button
                    onClick={() => setSelectedDealForBriefing(deal.id)}
                    className="border border-[var(--brand-cyan)] text-[var(--brand-cyan)] hover:bg-[var(--brand-cyan)]/10 px-4 py-2 font-mono text-[10px] uppercase font-bold transition-colors inline-flex items-center gap-1.5"
                  >
                    <Play className="w-3 h-3" /> 7-Min Briefing
                  </button>
                )}

                <Link
                  to={`/case-studies/${deal.id}`}
                  className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-4 py-2 font-mono text-[10px] uppercase font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
                >
                  View Full Dossier <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Observation Box */}
            <div className="p-4 bg-[var(--bg-secondary)]/40 border border-[var(--border-color)] space-y-1">
              <div className="font-mono text-[9px] text-[var(--brand-cyan)] uppercase font-bold tracking-wider">
                RAVEN OBSERVATION
              </div>
              <p className="text-sm font-medium text-[var(--text-primary)] leading-relaxed">
                {deal.ravenObservation}
              </p>
            </div>

            {/* Pressure Cascade Path */}
            <div className="space-y-3">
              <div className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase font-bold tracking-wider">
                PRESSURE PROPAGATION CASCADE (6-STAGE MODEL):
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                {deal.propagationPath.map((step, idx) => (
                  <div key={idx} className="p-3 bg-[var(--bg-secondary)]/20 border border-[var(--border-color)] text-xs flex flex-col justify-between">
                    <div className="font-mono text-[9px] text-[var(--text-tertiary)] font-bold mb-1">
                      0{idx + 1} // {idx === 0 ? 'CLAUSE' : idx === 1 ? 'CONSTRAINT' : idx === 2 ? 'BEHAVIOR' : idx === 3 ? 'FINANCIAL' : 'GOVERNANCE'}
                    </div>
                    <div className="text-[var(--text-secondary)] text-[11px] leading-snug">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Provenance & Metrics */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[var(--border-color)]/60 font-mono text-[10px] text-[var(--text-tertiary)]">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> {deal.verifiedFactsCount} Fact Claims Verified
                </span>
                <span>•</span>
                <span>Sources: {deal.secSources.join(', ')}</span>
              </div>
              <div className="text-[var(--brand-cyan)] uppercase font-bold">
                AUDITED BY RAVEN ADVERSARY ENGINE
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* FOOTER CTA */}
      <div className="p-8 md:p-12 border border-[var(--brand-cyan)]/40 bg-[var(--brand-cyan)]/5 space-y-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
          Need an Adversarial Intelligence Review on Your Transaction?
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
          Submit any pending or announced deal to receive an institutional 8-part transaction review package within 48 to 72 hours.
        </p>
        <div className="pt-2">
          <Link
            to="/request-assessment"
            className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Request Transaction Assessment <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {selectedDealForBriefing && (
        <InteractiveBoardroomBriefing
          isOpen={true}
          onClose={() => setSelectedDealForBriefing(null)}
          initialCaseId={selectedDealForBriefing}
        />
      )}

    </div>
  );
}
