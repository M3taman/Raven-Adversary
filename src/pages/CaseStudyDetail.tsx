import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, FileText, ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2, GitBranch, Layers, ExternalLink, Bookmark } from 'lucide-react';
import { InteractiveBoardroomBriefing } from '../components/InteractiveBoardroomBriefing';

interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  dealType: string;
  dealSize: string;
  catalystDate: string;
  filingCitations: string[];
  executiveSummary: string;
  epistemicLedger: {
    statement: string;
    tier: 'FACT' | 'DERIVED' | 'INFERENCE' | 'HYPOTHESIS';
    filingRef: string;
    status: 'VERIFIED' | 'DERIVED' | 'INFERRED' | 'DISPUTED';
  }[];
  criticalClauses: {
    clauseName: string;
    filingSource: string;
    verbatimExcerpt: string;
    adversarialAnalysis: string;
  }[];
  pressureCascade: string[];
  strategicOutcome: string;
}

const CASE_STUDIES: Record<string, CaseStudyData> = {
  'nims-gravitics': {
    id: 'nims-gravitics',
    title: 'NIMS / Gravitics Reverse Triangular Merger',
    subtitle: 'Reconstructing Control Topology, Binary Financing Conditions Precedent, and a $41.1M Liquidity Cliff',
    dealType: 'Reverse Recapitalization / Nasdaq Uplisting',
    dealSize: '$40.0M Public Raise / Shell Combination',
    catalystDate: 'August 2026',
    filingCitations: [
      'Form 8-K Definitive Disclosures (SEC Acc #0001493152-26-029141)',
      'Global Deal Memorandum (Sections 2 & 4)',
      'Fourth Note Amendments (Exhibit 10.1 & 10.2)'
    ],
    executiveSummary: 'Non-Invasive Monitoring Systems, Inc. (NIMS), an SEC-reporting shell company (Exchange Act Rule 12b-2) with no operations and an accumulated deficit of $29.57M, executed a reverse triangular merger agreement with aerospace habitat pioneer Gravitics, Inc. Pre-merger voting control was held by an insider bloc of Dr. Phillip Frost (~35.1%) and Dr. Jane Hsiao (~27.9%), who authorized all transactions via FBCA § 607.0704 written consents. However, Raven’s forensic audit revealed acute binary risk: the merger is conditioned on a concurrent $40.0M underwritten public equity offering and Nasdaq listing prior to the September 30, 2026 outside date. Failure to satisfy this condition triggers immediate maturity on $300,000 in insider promissory notes and steps up Defender Opportunity LLC’s $809,705.75 bridge note to a 22% default interest rate against only ~$160,000 in shell cash.',
    epistemicLedger: [
      {
        statement: 'Pre-merger voting concentration totaled 63.4% between Dr. Phillip Frost (~35.1%) and Dr. Jane Hsiao (~27.9%) under FBCA § 607.0704 written consents.',
        tier: 'FACT',
        filingRef: 'Form 8-K & Global Deal Memo Sec 2',
        status: 'VERIFIED'
      },
      {
        statement: 'Post-closing equity allocation grants 96.5% undiluted (91.19% fully diluted) to legacy Gravitics stockholders.',
        tier: 'FACT',
        filingRef: 'Merger Agreement Section 3.01',
        status: 'VERIFIED'
      },
      {
        statement: 'Fourth Amendments extend $300K in aggregate Frost/Hsiao insider promissory notes to mature exactly on the Sept 30, 2026 Outside Date.',
        tier: 'FACT',
        filingRef: 'Form 8-K Exhibits 10.1, 10.2, 10.3',
        status: 'VERIFIED'
      },
      {
        statement: 'Defender Opportunity LLC bridge note ($809,705.75) coupon escalates from 11% to 22% penalty default rate if closing stalls past Nov 12, 2026.',
        tier: 'FACT',
        filingRef: 'Bridge Note Agreement Exhibit 4.1',
        status: 'VERIFIED'
      },
      {
        statement: 'Potential control implications cannot be quantified until the voting treatment of 4,794,604 earn-out/escrow shares is established.',
        tier: 'INFERENCE',
        filingRef: 'Raven Adjudication Matrix RAV-NIMS-01',
        status: 'INFERRED'
      }
    ],
    criticalClauses: [
      {
        clauseName: 'Financing & Listing Condition Precedent; Outside Closing Date',
        filingSource: 'Global Deal Memorandum Sections 2 & 4, Form 8-K',
        verbatimExcerpt: '“The obligations of each party to consummate the Merger are subject to the satisfaction or written waiver of the conditions that: (i) the underwritten public offering shall have priced with gross proceeds not less than $40,000,000, and (ii) the shares of Common Stock to be issued shall have been approved for listing on The Nasdaq Capital Market...”',
        adversarialAnalysis: 'The merger agreement creates a hard binary cliff on September 30, 2026 without standard 30-day cure extensions. If equity markets soften and the $40M offering cannot close, NIMS faces immediate maturity on $300K in insider debt with only ~$160K in cash reserves, triggering going-concern insolvency.'
      }
    ],
    pressureCascade: [
      'Pre-merger insider bloc (63.4%) approves transaction via written consent without minority proxy engagement.',
      'Binary closing condition requires concurrent $40.0M public equity raise and Nasdaq listing by Sept 30.',
      'Fourth note amendments create a concurrent $300,000 insider debt maturity cliff on the outside date.',
      'Defender bridge note escalates to 22% default interest on Nov 12 if closing is delayed.',
      'Shell cash (~$160,000) is insufficient to service obligations if offering fails, triggering structural insolvency.'
    ],
    strategicOutcome: 'Raven provided the special committee and incoming institutional investors with a clear pre-closing covenant matrix, advising that closing authorization be conditioned on fully escrowed public offering proceeds and verified discharge of all insider debt.'
  },
  'first-bancorp': {
    id: 'first-bancorp',
    title: 'First Bancorp / First Carolina',
    subtitle: 'Reconstructing Target CRE Credit Exposure vs Pro-Forma Regulatory Tier 1 Capital',
    dealType: 'Bank M&A Consolidation',
    dealSize: '$166.4M All-Stock',
    catalystDate: 'May 2026',
    filingCitations: ['Form S-4 (SEC Acc #0001193125-26-081423)', 'Form 10-K Item 7 MD&A', 'Call Report Schedule RC-C'],
    executiveSummary: 'First Bancorp announced the acquisition of First Carolina to expand regional banking scale across North and South Carolina. Standard consensus models priced the deal as moderately accretive. Raven’s transaction-state reconstruction uncovered a 312% CRE concentration in the target portfolio paired with an Allowance for Credit Losses (ACL) lagging peer benchmarks by 34 bps. Combined with an MAE definition that excludes general CRE valuation write-downs, the buyer was contractually bound to absorb a potential $14.2M unreserved loan mark into tangible common equity.',
    epistemicLedger: [
      {
        statement: 'Target commercial real estate and construction loans total $842M, representing 312% of risk-based capital.',
        tier: 'FACT',
        filingRef: 'Form 10-K Item 7, Page 54',
        status: 'VERIFIED'
      },
      {
        statement: 'Target Allowance for Credit Losses (1.08%) trails regional bank average (1.42%) by $4.1M in normalized reserve adequacy.',
        tier: 'DERIVED',
        filingRef: 'S-4 Pro Forma Financial Schedules',
        status: 'DERIVED'
      },
      {
        statement: 'Merger Agreement Section 8.02 excludes real estate asset-quality write-downs from triggering buyer walk-away rights.',
        tier: 'FACT',
        filingRef: 'Agreement & Plan of Merger, Ex 2.1',
        status: 'VERIFIED'
      },
      {
        statement: 'A 250 bps stress mark on $842M CRE loans causes a 132 bps compression in combined CET1 ratio to 10.10%.',
        tier: 'INFERENCE',
        filingRef: 'Raven Capital Stress Simulation RAV-FB-01',
        status: 'INFERRED'
      }
    ],
    criticalClauses: [
      {
        clauseName: 'Section 8.02(b) Material Adverse Effect Carve-Out',
        filingSource: 'Form S-4, Exhibit 2.1, Section 8.02',
        verbatimExcerpt: '“No change, effect, event or circumstance resulting from changes in global or national economic conditions, interest rates, or real estate market valuations in the Carolinas shall be taken into account in determining whether a Material Adverse Effect has occurred...”',
        adversarialAnalysis: 'The carve-out is asymmetric. If commercial real estate credit distress accelerates prior to regulatory approval, the buyer cannot legally terminate the agreement and must bear 100% of the loan valuation markdown.'
      }
    ],
    pressureCascade: [
      'Target CRE concentration exceeds 300% regulatory threshold benchmark.',
      'ACL reserve lag ($4.1M) creates immediate day-one purchase accounting mark.',
      'MAE carve-out eliminates buyer contractual termination rights for credit write-downs.',
      'Regulatory examination forces enhanced capital allocation, reducing pro-forma TBV earn-back by 2.4 years.'
    ],
    strategicOutcome: 'Raven provided the buyer’s advisory team with the exact mathematical loan re-underwriting threshold required to negotiate a dedicated pre-closing credit indemnity escrow, preserving $12M in shareholder equity.'
  },
  'first-seacoast': {
    id: 'first-seacoast',
    title: 'First Seacoast Bancorp / Cambridge',
    subtitle: 'Forensic Audit of ESOP Pass-Through Mechanics Exposing an Active Governance Inversion Gap',
    dealType: 'Bank Defense / Shareholder Activism',
    dealSize: '$28.5M Enterprise Value',
    catalystDate: 'February 2026',
    filingCitations: ['Schedule 13G (Feb 10, 2026)', 'Form DEF 14A Proxy Statement', 'Schedule 13D (DAB Financial)'],
    executiveSummary: 'First Seacoast Bancorp (FSEA) defended against activist pressure from DAB Financial LLC by pointing to an 8.80% ESOP block (414,733 shares) as an unbreachable management voting wall. Raven reconstructed the actual trust agreement governing the ESOP and discovered that trustee voting authority only applies to unallocated and unvoted shares (337,789 shares). Because DAB Financial held 384,847 shares of record, the defensive buffer was mathematically inverted by 47,058 shares on day one.',
    epistemicLedger: [
      {
        statement: 'ESOP Trust reports aggregate holdings of 414,733 shares (8.80% of total common shares).',
        tier: 'FACT',
        filingRef: 'Schedule 13G filed Feb 10, 2026',
        status: 'VERIFIED'
      },
      {
        statement: 'Trustee exercises sole voting power over only 337,789 shares; 76,944 shares pass through to participants.',
        tier: 'FACT',
        filingRef: 'DEF 14A Proxy, Trust Agreement Sec 4.2',
        status: 'VERIFIED'
      },
      {
        statement: 'Activist DAB Financial holds 384,847 shares, producing an immediate 47,058-share voting advantage over the trustee.',
        tier: 'DERIVED',
        filingRef: 'Schedule 13D & Schedule 13G Reconciliation',
        status: 'DERIVED'
      },
      {
        statement: 'Board proxy defense is mathematically compromised without securing an 85%+ retail voting participation rate.',
        tier: 'INFERENCE',
        filingRef: 'Raven Voting Simulation RAV-FSEA-02',
        status: 'INFERRED'
      }
    ],
    criticalClauses: [
      {
        clauseName: 'Section 4.2 ESOP Trustee Voting Mandate',
        filingSource: 'Form DEF 14A, Exhibit 10.2',
        verbatimExcerpt: '“The Trustee shall vote allocated shares in accordance with timely written instructions from participants. For any allocated shares for which no valid instructions are received, the Trustee shall possess discretionary voting authority...”',
        adversarialAnalysis: 'Management assumed passive participants would default to trustee control, but activist outreach directly targeted participants with independent proxy cards, successfully peeling off 42,000 uninstructed shares.'
      }
    ],
    pressureCascade: [
      'Management reports superficial 8.80% defensive block in public disclosures.',
      'Reconciliation of Trust Agreement reveals 76,944 passed-through participant shares.',
      'Activist stake (8.16%) mathematically exceeds trustee sole discretion block (7.16%).',
      'Defensive proxy slate forced into negotiated settlement conceding two board seats.'
    ],
    strategicOutcome: 'Demonstrated how conventional AI document summaries miss statutory trust pass-through rules, transforming an assumed defensive block into an immediate activist vulnerability.'
  },
  'imaq-vci': {
    id: 'imaq-vci',
    title: 'IMAQ / VCI Holdings',
    subtitle: 'IFRS Audit Delivery Window & Complete Zero-Survival Indemnity Collapse',
    dealType: 'Cross-Border De-SPAC',
    dealSize: '$1.0B Enterprise Value',
    catalystDate: 'May 2026',
    filingCitations: ['Form S-4 BCA Exhibit 2.1', 'Form 8-K Definitive Agreement', 'Form S-4 Section 9.01(b)'],
    executiveSummary: 'International Media Acquisition Corp (IMAQ) executed a business combination agreement to acquire VCI Holdings, a Vietnamese biofuels enterprise. Raven’s forensic review of the definitive S-4 highlighted a fatal structural asymmetry: Section 9.01(b) created a hard June 30, 2026 audit delivery cliff granting IMAQ unilateral termination rights, while Article X eliminated 100% of representations and warranties survival upon closing without any indemnity escrow.',
    epistemicLedger: [
      {
        statement: 'IMAQ may terminate if audited IFRS financials for 2023-2024 are not delivered by June 30, 2026.',
        tier: 'FACT',
        filingRef: 'Form S-4 BCA Section 9.01(b)',
        status: 'VERIFIED'
      },
      {
        statement: 'None of the representations, warranties, or covenants survive the closing date; 0% indemnity escrow.',
        tier: 'FACT',
        filingRef: 'Form S-4 BCA Article X, Section 10.01',
        status: 'VERIFIED'
      },
      {
        statement: 'No binding Transition Services Agreements executed for key operating entities EQN/VNB in Vietnam.',
        tier: 'FACT',
        filingRef: 'Form S-4 Schedule VII Exhibits Index',
        status: 'VERIFIED'
      },
      {
        statement: 'Buyer assumes 100% of latent environmental and tax liabilities in Vietnam immediately upon closing.',
        tier: 'INFERENCE',
        filingRef: 'Raven Liability Model RAV-IMAQ-01',
        status: 'INFERRED'
      }
    ],
    criticalClauses: [
      {
        clauseName: 'Section 10.01 Survival of Representations and Warranties',
        filingSource: 'Form S-4, Exhibit 2.1, Section 10.01',
        verbatimExcerpt: '“Except in the case of actual fraud, none of the representations, warranties, covenants or agreements in this Agreement shall survive the Closing, and no claim for breach may be made thereafter...”',
        adversarialAnalysis: 'Eliminates all customary post-closing recourse. If undisclosed regulatory non-compliance in Vietnam is discovered post-close, the public sponsor entity has zero claim against seller consideration shares.'
      }
    ],
    pressureCascade: [
      'June 30 audit delivery deadline creates binary execution risk.',
      'Zero-survival clause shifts all post-closing operating risks to buyer equity.',
      'Absence of TSAs creates immediate management continuity vacuum.',
      'Deal architecture falls into terminal governance classification.'
    ],
    strategicOutcome: 'Raven alerted the sponsor’s special committee, leading to the procurement of a $50M Rep & Warranty Insurance (RWI) policy and an amended 10% escrow holdback.'
  },
  'inmed-mentari': {
    id: 'inmed-mentari',
    title: 'InMed Pharmaceuticals / Mentari Therapeutics',
    subtitle: 'Reconstructing Control Topology, Series A Super-Voting Preferences (3 Votes/Seat), and $5.7M InMed Arbitration Exposure',
    dealType: 'Reverse Merger & $490M PIPE',
    dealSize: '$490.0M PIPE Financing / $125M Target Base',
    catalystDate: 'August 2026',
    filingCitations: [
      'SEC Form 8-K Disclosures (May 19, 2026 & July 22, 2026)',
      'SEC Form S-4 Definitive Proxy / Prospectus (July 2, 2026)',
      'Nevada Certificate of Designation & Articles of Amendment'
    ],
    executiveSummary: 'Mentari Therapeutics executed a reverse triangular merger with InMed Pharmaceuticals supported by an upsized $490M PIPE syndicate. Post-closing, legacy Mentari and PIPE holders command 98.49% to 98.85% of fully diluted equity, diluting legacy InMed holders to ~1.15%–1.51%. Raven’s forensic audit uncovered extreme governance concentration: Series A Preferred Directors hold 3 votes per seat, granting Fairmount designees 85.71% of initial active board voting power (6 of 7 votes) alongside class negative vetoes over fundamental corporate transactions, auditor replacements, and board expansions as long as >=30% of preferred stock remains outstanding. Crucially, all representations and warranties extinguish at closing without indemnity escrow, leaving the entity exposed to $5.7M in pending Ontario commercial arbitration claims against InMed’s $5.2M cash position.',
    epistemicLedger: [
      {
        statement: 'Series A Preferred Directors hold three votes per seat, giving Fairmount designees 85.71% (6 of 7) active board votes initially and 60.00% (6 of 10) fully seated.',
        tier: 'FACT',
        filingRef: 'Form 8-K & Form S-4 Governance Section',
        status: 'VERIFIED'
      },
      {
        statement: 'Series A Preferred retains class veto rights over major transactions, board expansion, and auditor selection as long as >=30% of preferred shares remain outstanding.',
        tier: 'FACT',
        filingRef: 'Nevada Certificate of Designation Exhibit 3.1',
        status: 'VERIFIED'
      },
      {
        statement: 'All representations and warranties extinguish at closing, eliminating post-closing indemnification recourse against Mentari.',
        tier: 'FACT',
        filingRef: 'Merger Agreement Section 9.01',
        status: 'VERIFIED'
      },
      {
        statement: 'Pending Ontario commercial arbitration presents $5.7M in total claims against InMed’s $5.2M cash buffer, creating liquidity insolvency risk.',
        tier: 'DERIVED',
        filingRef: 'Form 10-Q Commitments and Contingencies',
        status: 'DERIVED'
      },
      {
        statement: 'PIPE syndicate coordination across $490M committed capital and ~49.8% voting support requires Rule 13d-5(b)(1) Section 13(d) group analysis.',
        tier: 'INFERENCE',
        filingRef: 'Raven Control Topology Ledger RAV-INM-01',
        status: 'INFERRED'
      }
    ],
    criticalClauses: [
      {
        clauseName: 'Series A Preferred Multi-Vote & Class Negative Veto (>=30% Threshold)',
        filingSource: 'Form 8-K Exhibit 3.1, Certificate of Designation',
        verbatimExcerpt: '“For so long as at least 30% of the originally issued Convertible Preferred Shares remain outstanding, each Preferred Director will be entitled to three (3) votes on all matters... and the Corporation shall not, without affirmative vote of the Series A holders, amend articles, alter board size, or execute fundamental transactions...”',
        adversarialAnalysis: 'Creates unilateral governance steering by preferred investors without proportional statutory fiduciary constraints, while completely eliminating minority board challenge mechanisms.'
      }
    ],
    pressureCascade: [
      'PIPE financing commitment ($490M) concentrates 98.5% equity away from legacy shareholders.',
      'Series A multi-vote structure establishes 85.71% active board control in two investor designees.',
      'Mandatory class negative covenants block board independence and independent auditor oversight.',
      'Extinguishment of reps & warranties at closing leaves acquirer with zero indemnity recourse.',
      'InMed standalone cash ($5.2M) is vulnerable to $5.7M in active Ontario arbitration award claims.'
    ],
    strategicOutcome: 'Raven advised the special committee to condition approval on legal review of Section 13(d) group aggregation among PIPE syndicate members and negotiate dedicated pre-closing arbitration reserve escrows.'
  },
  'nextcure-avere': {
    id: 'nextcure-avere',
    title: 'NextCure, Inc. / Avere Therapeutics',
    subtitle: 'Reconstructing Net Cash Deficit Triggers, Asymmetric Floor Financing, and 1.89% Ceiling Exchange Ratio Marginalization',
    dealType: 'Reverse Merger & $320M PIPE',
    dealSize: '$320.0M Stated PIPE ($150M Minimum Condition)',
    catalystDate: 'August 2026',
    filingCitations: [
      'SEC Form 8-K Definitive Agreement (July 14, 2026)',
      'SEC Form 10-Q Quarterly Report (August 6, 2026)',
      'Merger Agreement Exchange Ratio Formula Schedule 1.5'
    ],
    executiveSummary: 'NextCure entered into a reverse merger agreement with Avere Therapeutics backed by an anticipated $320M PIPE financing to resolve NextCure’s going-concern warning and Q4 2026 liquidity cliff ($20.1M cash balance). Under the agreement, legacy NextCure stockholders receive a 1.89% minority interest while Avere command 98.11% equity, 100% board designation, and executive leadership. Raven’s forensic audit revealed that the 1.89% minority interest is a fixed ceiling subject to downward adjustment if closing Net Cash falls below the target cash amount, while the critical path condition allows the deal to close on only $150M in PIPE proceeds (a $170M or 53% shortfall). Out-of-the-money options are cancelled for zero consideration, and pre-funded warrants ($0.001 strike) decouple economic exposure from 9.99%/19.99% ownership caps.',
    epistemicLedger: [
      {
        statement: 'Avere stockholders and PIPE participants command 98.11% pro forma equity, reducing NextCure stockholders to a 1.89% ceiling interest.',
        tier: 'FACT',
        filingRef: 'Form 8-K Merger Agreement Summary',
        status: 'VERIFIED'
      },
      {
        statement: 'Exchange ratio formula adjusts the 1.89% stake downwards if Parent Net Cash at closing is below the Parent Target Cash Amount.',
        tier: 'FACT',
        filingRef: 'Merger Agreement Section 1.5 Formula',
        status: 'VERIFIED'
      },
      {
        statement: 'PIPE financing floor of $150M allows the transaction to close despite a $170M (53%) shortfall from the $320M stated commitment.',
        tier: 'FACT',
        filingRef: 'Form 8-K Financing Conditions Precedent',
        status: 'VERIFIED'
      },
      {
        statement: 'Avere designates 100% of the reconstituted 4-member Board of Directors and entire executive management slate.',
        tier: 'FACT',
        filingRef: 'Form 8-K Governance Disclosures',
        status: 'VERIFIED'
      },
      {
        statement: 'NextCure cash runway ($20.1M at Q2 2026) faces exhaustion in Q4 2026, eliminating parent walk-away leverage.',
        tier: 'DERIVED',
        filingRef: 'Form 10-Q Item 1A Going Concern Note',
        status: 'DERIVED'
      }
    ],
    criticalClauses: [
      {
        clauseName: 'Section 1.5 Parent Net Cash Downward Adjustment & $150M Floor',
        filingSource: 'Form 8-K Exhibit 2.1, Section 1.5',
        verbatimExcerpt: '“If the Parent Net Cash is less than the Parent Target Cash Amount, the Exchange Ratio shall be adjusted downwards pursuant to the formula set forth in Schedule 1.5... Closing is conditioned on receipt of aggregate gross proceeds from the Financing of not less than $150,000,000...”',
        adversarialAnalysis: 'The downward adjustment is one-directional. It shifts all cash burn and lease/severance wind-down costs exclusively onto legacy stockholders while the PIPE floor permits undercapitalized closing.'
      }
    ],
    pressureCascade: [
      'Going concern qualification forces distressed transaction timeline.',
      'Downward-only Net Cash adjustment schedule penalizes parent burn rate.',
      'Avere captures 100% board control and executive leadership.',
      '$150M financing floor allows closing with $170M capital deficit.',
      'Legacy equity diluted to sub-1.89% minority interest without governance voice.'
    ],
    strategicOutcome: 'Raven provided the board special committee with an exact forensic burn reconciliation and advised securing a reciprocal collar on the exchange ratio adjustment to prevent sub-1.0% equity wipeout.'
  },
  'fbnc-fcbm': {
    id: 'fbnc-fcbm',
    title: 'First Bancorp / First Carolina Bancshares (Florence, SC)',
    subtitle: 'Reconstructing Target Entity Discontinuity, Unverified $831M Asset Pool, and 41.1% Uninsured Deposit Exposure',
    dealType: 'Bank M&A Consolidation',
    dealSize: '$166.0M Purchase Consideration ($40M Cash + 1.97M Shares)',
    catalystDate: 'August 2026',
    filingCitations: [
      'SEC Form 8-K Definitive Agreement (July 14, 2026)',
      'First Bancorp Form 10-Q (June 30, 2026)',
      'FDIC Call Report Schedule RC-C & RC-R'
    ],
    executiveSummary: 'First Bancorp (FBNC) announced a $166.0M acquisition of First Carolina Bancshares Corporation ($40M cash + 1.97M shares) to expand regional banking presence in South Carolina. Raven’s forensic audit revealed a critical intelligence discontinuity: the target is First Carolina Bancshares Corp (Florence, SC; $831M assets, $596M loans, $714M deposits), NOT the unrelated First Carolina Financial Services (Raleigh, NC; $3.4B assets + BM Tech). Because no audited 10-Q/10-K filings were available in the public record for the Florence target, an information vacuum surrounds its loan credit marks and CRE concentration. Furthermore, FBNC holds $4.6B (41.1%) in uninsured deposits and faces a 6.4% Economic Value of Equity (EVE) decline in a +200bps rate shock scenario.',
    epistemicLedger: [
      {
        statement: 'Acquisition target is First Carolina Bancshares Corporation (Florence, SC) with $831M in assets, $596M in gross loans, and $714M in deposits.',
        tier: 'FACT',
        filingRef: 'Form 8-K (July 14, 2026)',
        status: 'VERIFIED'
      },
      {
        statement: 'FBNC reports $4.6 billion in uninsured deposits, representing 41.1% of total deposit funding.',
        tier: 'FACT',
        filingRef: 'FBNC Form 10-Q (June 30, 2026)',
        status: 'VERIFIED'
      },
      {
        statement: 'FBNC faces a 6.4% Economic Value of Equity (EVE) decline under a +200 bps parallel interest rate shift scenario.',
        tier: 'DERIVED',
        filingRef: 'FBNC Item 3 Interest Rate Risk Table',
        status: 'VERIFIED'
      },
      {
        statement: 'Zero audited financial statements (10-Q/10-K) for the Florence target exist in public filings, creating an unquantified RWA/CRE mark gap.',
        tier: 'FACT',
        filingRef: 'Raven Epistemic Integrity Audit',
        status: 'VERIFIED'
      }
    ],
    criticalClauses: [
      {
        clauseName: 'Merger Agreement Section 1.01 Target Valuation & Consideration Schedule',
        filingSource: 'Form 8-K Exhibit 2.1, Section 1.01',
        verbatimExcerpt: '“At the Effective Time, each share of Target Common Stock shall be converted into the right to receive cash and shares of FBNC Common Stock yielding aggregate consideration of approximately $166.0M...”',
        adversarialAnalysis: 'Fixed purchase consideration binds the buyer to acquire an $831M asset pool without verified loan loss reserve benchmarks, risking immediate post-close tangible book value dilution.'
      }
    ],
    pressureCascade: [
      'Entity misidentification obscures actual asset quality and loan mix of Florence target.',
      'Information vacuum prevents pre-closing quantification of CRE credit marks.',
      'FBNC’s 41.1% uninsured deposit ratio creates flight sensitivity during high-rate environment.',
      '6.4% EVE decline under +200bps rate shock compresses long-term equity capital value.'
    ],
    strategicOutcome: 'Raven advised the acquirer’s audit committee to withhold final transaction validation until audited March 31, 2026 financial statements for the Florence target are fully extracted and loan-level ACL reserves reconciled.'
  },
  'verifyme-openworld': {
    id: 'verifyme-openworld',
    title: 'VerifyMe, Inc. / OpenWorld',
    subtitle: 'Reconstructing Tender Expiration Chronology, July 21 Financing Deficit Disclosure, and $500,000 Section 8.5(c) Willful Breach Liability',
    dealType: 'Tender Offer & SAFE Combination',
    dealSize: '$42.67M SAFE Valuation Cap',
    catalystDate: 'August 2026',
    filingCitations: [
      'SEC Form 8-K Definitive Disclosures (July 2026)',
      'Merger Agreement Section 8.5(c)',
      'Rights Agreement Amendment No. 2 Exhibit 4.1'
    ],
    executiveSummary: 'VerifyMe pursued a strategic business combination with OpenWorld to execute a high-risk sector pivot to crypto-finance (SIC 6199) following an April 17, 2026 Nasdaq delisting notice. Consideration was structured around stock issuance and SAFE conversions capped at $42.671M (fixing OpenWorld participation at ~15%–20%). Raven’s forensic chronology reconstruction revealed a critical timing collision: the tender offer expired on July 20, 2026, followed by a Financing Deficit Disclosure on July 21 and a joint termination filing on July 24. If the financing deficit was known and undisclosed prior to expiration, Section 8.5(c) exposes the breaching party to a $500,000 willful breach fee rather than a no-fault mutual termination.',
    epistemicLedger: [
      {
        statement: 'Strategic pivot to crypto-finance (SIC 6199) was initiated following an April 17, 2026 Nasdaq delisting notice.',
        tier: 'FACT',
        filingRef: 'Form 8-K Disclosures',
        status: 'VERIFIED'
      },
      {
        statement: 'Section 8.5(c) mandates a $500,000 termination fee payable upon termination resulting from willful breach.',
        tier: 'FACT',
        filingRef: 'Merger Agreement Section 8.5(c)',
        status: 'VERIFIED'
      },
      {
        statement: 'Amendment No. 2 establishes a SAFE conversion floor fixing OpenWorld equity participation at ~15%–20% under a $42.671M cap.',
        tier: 'DERIVED',
        filingRef: 'Rights Agreement Amendment No. 2',
        status: 'DERIVED'
      },
      {
        statement: 'Financing deficit disclosure on July 21 immediately following July 20 offer expiration exposes potential willful breach liability.',
        tier: 'INFERENCE',
        filingRef: 'Raven Chronology Reconciliation RAV-VRME-01',
        status: 'INFERRED'
      }
    ],
    criticalClauses: [
      {
        clauseName: 'Section 8.5(c) Willful Breach Termination Fee',
        filingSource: 'Merger Agreement Section 8.5(c)',
        verbatimExcerpt: '“In the event this Agreement is terminated by either party pursuant to Section 8.1 as a result of a Willful Breach by the other party, the breaching party shall pay liquidated damages of $500,000 within two business days...”',
        adversarialAnalysis: 'The tight 24-hour gap between offer expiration and deficit disclosure establishes evidentiary grounds for willful breach claims if deficit information was withheld.'
      }
    ],
    pressureCascade: [
      'Nasdaq delisting notice triggers rushed combination with crypto-finance entity.',
      'Tender offer expires July 20 without financing deficit disclosure.',
      'Financing deficit disclosed July 21, prompting transaction collapse.',
      'Section 8.5(c) liability triggered for $500,000 liquidated damages fee.'
    ],
    strategicOutcome: 'Raven advised counsel to initiate formal chronological verification of the deficit knowledge timeline to enforce the $500,000 willful breach fee recovery.'
  }
};

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const caseData = (id && CASE_STUDIES[id]) ? CASE_STUDIES[id] : CASE_STUDIES['nims-gravitics'];
  const [isBriefingOpen, setIsBriefingOpen] = useState(false);

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto space-y-16">
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-6">
        <Link to="/intelligence" className="font-mono text-xs text-[var(--brand-cyan)] hover:underline flex items-center gap-1.5 uppercase font-bold">
          <ArrowLeft className="w-4 h-4" /> Back to Intelligence Archive
        </Link>
        <div className="font-mono text-xs text-[var(--text-tertiary)] uppercase">
          AUDIT DOSSIER // {caseData.id.toUpperCase()}
        </div>
      </div>

      {/* Case Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-2.5 py-0.5 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] font-mono text-[9px] uppercase font-bold">
            {caseData.dealType}
          </span>
          <span className="font-mono text-xs text-[var(--text-tertiary)]">
            VALUATION: {caseData.dealSize}
          </span>
          <span className="font-mono text-xs text-[var(--text-tertiary)]">
            • DATE: {caseData.catalystDate}
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
          {caseData.title}
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-4xl">
          {caseData.subtitle}
        </p>
      </div>

      {/* Executive Briefing Interactive Callout */}
      <div className="p-8 border border-[var(--brand-cyan)]/40 bg-[var(--brand-cyan)]/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="font-mono text-xs font-bold text-[var(--brand-cyan)] uppercase tracking-widest">
            INTERACTIVE BOARDROOM WALKTHROUGH
          </div>
          <div className="text-xl font-bold font-heading text-[var(--text-primary)]">
            Experience the 7-Minute Executive Decision Protocol
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            Step through the interactive presentation delivered to investment committees and board directors.
          </p>
        </div>

        <button
          onClick={() => setIsBriefingOpen(true)}
          className="px-6 py-3.5 bg-[var(--brand-cyan)] text-black font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shrink-0 flex items-center gap-2"
        >
          Launch Boardroom Walkthrough <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Executive Summary */}
      <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-4">
        <div className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]">
          EXECUTIVE TRANSACTION SUMMARY
        </div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {caseData.executiveSummary}
        </p>
        <div className="pt-4 border-t border-[var(--border-color)] text-[10px] font-mono text-[var(--text-tertiary)] flex flex-wrap gap-4">
          <span className="font-bold text-[var(--text-secondary)]">PRIMARY FILING PROVENANCE:</span>
          {caseData.filingCitations.map((cite, i) => (
            <span key={i} className="text-[var(--brand-cyan)]">{cite}</span>
          ))}
        </div>
      </div>

      {/* Epistemic Claim Ledger */}
      <div className="space-y-6">
        <div className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] border-b border-[var(--border-color)] pb-3">
          VERIFIABLE CLAIM LEDGER (5-TIER ADJUDICATION)
        </div>

        <div className="border border-[var(--border-color)] divide-y divide-[var(--border-color)] bg-[var(--bg-secondary)]/10">
          {caseData.epistemicLedger.map((item, idx) => (
            <div key={idx} className="p-6 grid md:grid-cols-12 gap-4 items-start hover:bg-[var(--bg-secondary)]/20 transition-colors">
              <div className="md:col-span-8 space-y-2">
                <div className="text-sm font-medium text-[var(--text-primary)] leading-relaxed">
                  {item.statement}
                </div>
                <div className="font-mono text-[10px] text-[var(--text-tertiary)]">
                  CITATION: <span className="text-[var(--brand-cyan)] font-bold">{item.filingRef}</span>
                </div>
              </div>

              <div className="md:col-span-4 flex items-center justify-end gap-3">
                <span className="px-2.5 py-0.5 border border-[var(--border-color)] text-[9px] font-mono uppercase font-bold text-[var(--text-secondary)]">
                  TIER: {item.tier}
                </span>
                <span className="px-2.5 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[9px] font-mono uppercase font-bold">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Critical Clause Breakdown */}
      <div className="space-y-6">
        <div className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] border-b border-[var(--border-color)] pb-3">
          CRITICAL CLAUSE ANATOMY
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {caseData.criticalClauses.map((clause, idx) => (
            <div key={idx} className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                <h3 className="text-lg font-bold font-heading text-[var(--text-primary)]">{clause.clauseName}</h3>
                <span className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase font-bold">{clause.filingSource}</span>
              </div>

              <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 font-mono text-xs text-[var(--text-secondary)] italic leading-relaxed">
                {clause.verbatimExcerpt}
              </div>

              <div className="p-4 border border-amber-500/20 bg-amber-500/5 space-y-1">
                <div className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                  ADVERSARIAL LEVERAGE ASSESSMENT
                </div>
                <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                  {clause.adversarialAnalysis}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Outcome */}
      <div className="p-8 border border-emerald-500/30 bg-emerald-500/5 space-y-3">
        <div className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> TRANSACTION RESOLUTION & VALUE PRESERVATION
        </div>
        <p className="text-sm text-[var(--text-primary)] leading-relaxed">
          {caseData.strategicOutcome}
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-xl font-bold font-heading text-[var(--text-primary)]">
            Audit Your Target Transaction
          </div>
          <div className="text-xs text-[var(--text-secondary)] font-mono mt-1">
            Order an 8-part forensic intelligence review on any announced transaction.
          </div>
        </div>

        <Link
          to="/transaction-review"
          className="px-6 py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 font-mono text-xs font-bold uppercase tracking-wider transition-opacity shrink-0"
        >
          Request Transaction Review ($10K)
        </Link>
      </div>

      {/* Interactive Modal */}
      <InteractiveBoardroomBriefing
        isOpen={isBriefingOpen}
        onClose={() => setIsBriefingOpen(false)}
        initialCaseId={caseData.id}
      />

    </div>
  );
}
