export interface Transaction {
  id: string;
  code: string;
  target: string;
  title: string;
  date: string;
  value: string;
  status: string;
  classification: string;
  secCite: string;
  trigger: string;
  pathNodes: string[];
  structuralConsequence: string;
  governanceExposure: string;
}

export const TRANSACTIONS: Transaction[] = [
  {
    id: "nims-gravitics",
    code: "NIMS-GVTX-2026",
    target: "NIMS / Gravitics Reverse Triangular Merger",
    title: "Financing Condition Precedent & $41.1M Liquidity Cliff",
    date: "2026-06-18",
    value: "$41.1M",
    status: "Closed / Reorganized",
    classification: "CONTROL TOPOLOGY & REVERSE RECAPITALIZATION",
    secCite: "Form 8-K / Global Deal Memorandum (Sections 2 & 4)",
    trigger: "Binary pre-closing $40M public equity offering and Nasdaq listing dependency",
    pathNodes: ["$40M Public Raise", "Outside Date", "$300K Insider Notes", "22% Default Coupon"],
    structuralConsequence: "Failure to close $40M underwritten offering triggers simultaneous maturity cliff on $300K Frost/Hsiao insider notes and escalates Defender bridge note to 22% default penalty against ~$160K shell cash.",
    governanceExposure: "63.4% insider voting bloc (Frost/Hsiao) executed approvals via FBCA § 607.0704 consents, but unresolved voting rights on 4.79M earn-out shares obscure post-closing governance stability."
  },
  {
    id: "inmed-mentari",
    code: "INM-MNT-2026",
    target: "InMed Pharmaceuticals / Mentari Therapeutics",
    title: "Series A Super-Voting & Mandatory Class Veto Lock",
    date: "2026-05-19",
    value: "$490M PIPE",
    status: "Active / Contested",
    classification: "CONTROL TOPOLOGY & MULTI-VOTE GOVERNANCE",
    secCite: "Form 8-K (May 19, 2026) & Form S-4 Registration",
    trigger: "$490M PIPE reverse merger with 3-vote-per-director Series A preferred preference",
    pathNodes: ["3 Votes Per Seat", "85.7% Board Control", ">=30% Class Veto", "$5.7M Arbitration"],
    structuralConsequence: "Series A Preferred Directors hold 3 votes each (commanding 6 of 7 active votes / 85.71% control) with mandatory class vetoes, while reps & warranties extinguish entirely at closing with zero indemnity recourse against $5.7M in pending arbitration claims.",
    governanceExposure: "Fairmount-affiliated designees secure unilateral corporate steering while legacy InMed securityholders are diluted to ~1.15%–1.51% fully diluted equity."
  },
  {
    id: "nextcure-avere",
    code: "NXTC-AVR-2026",
    target: "NextCure / Avere Therapeutics",
    title: "Ceiling Exchange Ratio & $150M Financing Floor",
    date: "2026-07-14",
    value: "$320M PIPE",
    status: "Pending Vote",
    classification: "VALUATION MECHANICS & CONTROL SHIFT",
    secCite: "Form 8-K (July 14, 2026) & Form 10-Q Item 1A",
    trigger: "Reverse merger with downward-only Net Cash adjustment and $150M PIPE minimum",
    pathNodes: ["1.89% Ceiling Split", "$150M PIPE Floor", "100% Board Transition", "Going Concern Cliff"],
    structuralConsequence: "The 1.89% minority interest functions as a ceiling subject to downward adjustment if Net Cash targets are missed, while the $150M financing floor allows closing even with a $170M (53%) PIPE deficit.",
    governanceExposure: "Avere captures 100% of the 4-member board while pre-funded warrants decouple economic exposure from 9.99%/19.99% beneficial ownership caps."
  },
  {
    id: "fbnc-fcbm",
    code: "FBNC-FCBM-2026",
    target: "First Bancorp / First Carolina Bancshares (Florence, SC)",
    title: "Target Entity Discontinuity & RWA Information Vacuum",
    date: "2026-07-14",
    value: "$166M",
    status: "Under Regulatory Review",
    classification: "ASSET QUALITY & INFORMATION INTEGRITY",
    secCite: "Form 8-K (July 14, 2026) & Form 10-Q Balance Sheet",
    trigger: "$166M acquisition of unlisted Florence target with missing audited financial records",
    pathNodes: ["Entity Discontinuity", "Unverified $831M Pool", "41.1% Uninsured Deposits", "6.4% EVE Shock"],
    structuralConsequence: "Audit record lacked audited 10-Q/10-K filings for the Florence target ($831M assets, $596M loans), while FBNC absorbs unquantified credit marks amidst 41.1% ($4.6B) uninsured deposits and a 6.4% EVE decline under rate stress.",
    governanceExposure: "Buyer diligence conflated target with unrelated Raleigh entity, creating unquantified pro-forma capital adequacy risks despite a 16.06% RBC ratio."
  },
  {
    id: "verifyme-openworld",
    code: "VRME-OW-2026",
    target: "VerifyMe / OpenWorld",
    title: "Tender Expiration Timeline Collision & Willful Breach Fee",
    date: "2026-07-20",
    value: "$42.7M SAFE",
    status: "Terminated / Litigation",
    classification: "CHRONOLOGY CONFLICT & BREACH LIABILITY",
    secCite: "Form 8-K Filings & Merger Agreement Section 8.5(c)",
    trigger: "Tender offer expiration on July 20 followed by financing deficit disclosure on July 21",
    pathNodes: ["July 20 Expiration", "July 21 Deficit Disclosure", "$500K Breach Fee", "$42.7M SAFE Cap"],
    structuralConsequence: "Tight chronological collision between offer expiration and financing deficit disclosure exposed breaching party to a $500,000 willful breach fee under Section 8.5(c) rather than a no-fault mutual termination.",
    governanceExposure: "Rushed crypto sector pivot (SIC 6199) following Nasdaq delisting notice resulted in rapid deal collapse and potential damages exposure."
  },
  {
    id: "first-seacoast",
    code: "FSEA-2026",
    target: "First Seacoast Bancorp / Cambridge Financial",
    title: "Governance Inversion & ESOP Trust Voting Gap",
    date: "2026-02-10",
    value: "Contested Proxy",
    status: "Activist Campaign",
    classification: "GOVERNANCE INVERSION & PROXY DEFENSE",
    secCite: "Schedule 13G (Feb 10, 2026) / Form DEF 14A",
    trigger: "Contested proxy defense against DAB Financial LLC (8.16% stake)",
    pathNodes: ["ESOP Fragmentation", "Pass-Through Voting", "47K Share Inversion", "Defense Neutralization"],
    structuralConsequence: "Management claimed 8.80% defensive ESOP block; statutory trust reconciliation uncovered that 76,944 shares pass through to participants, creating an immediate 47,058-share voting deficit against the activist.",
    governanceExposure: "Management assumed passive participants would default to trustee discretion, but activist solicitation peeled off 42,000 uninstructed shares."
  },
  {
    id: "imaq-vci",
    code: "IMAQ-VCI-2026",
    target: "IMAQ / VCI Holdings Business Combination",
    title: "IFRS Audit Cliff & Zero-Survival Indemnity Collapse",
    date: "2026-06-30",
    value: "$180M De-SPAC",
    status: "Restructured",
    classification: "CROSS-BORDER DE-SPAC & INDEMNITY ARCHITECTURE",
    secCite: "Form S-4 Business Combination Agreement (Exhibit 2.1)",
    trigger: "Hard June 30, 2026 audit delivery deadline with 0% post-closing indemnity escrow",
    pathNodes: ["Audit Window Failure", "Article X Non-Survival", "Zero Indemnity", "Sponsor Equity Risk"],
    structuralConsequence: "Section 9.01(b) created unilateral termination risk, while Article X eliminated 100% of reps and warranties survival upon closing without any indemnity escrow on overseas assets.",
    governanceExposure: "SPAC sponsor entity faced total liability shift on foreign operating entities with zero post-closing recourse against seller consideration."
  },
  {
    id: "horizon-summit",
    code: "HZNP-SMMT-2026",
    target: "Horizon Global / Summit Holdings",
    title: "Category III Asset Threshold & Daily LCR Drag",
    date: "2026-08-04",
    value: "$1.4B",
    status: "Pending Regulatory Clearance",
    classification: "BANK CONSOLIDATION & REGULATORY FRICTION",
    secCite: "Joint Form S-4 Registration & FR Y-9C Reports",
    trigger: "Pro-forma total consolidated assets crossing $100B Category III threshold",
    pathNodes: ["$100B Asset Breach", "Daily LCR Calculation", "HQLA Capital Drain", "ROE Compression"],
    structuralConsequence: "Crossing the statutory Category III threshold converts monthly liquidity monitoring to daily LCR calculations, mandating a $320M high-quality liquid asset (HQLA) reserve shift that erodes projected net interest margin by 18 bps.",
    governanceExposure: "Dual-charter supervisory overlap creates dual OCC/FDIC examination cycles, delaying closing outside date by estimated 120 days."
  },
  {
    id: "valens-therapeutics",
    code: "VLNS-TX-2026",
    target: "Valens Oncology / BioPeak Therapeutics",
    title: "Earn-Out Milestones & Insolvency Recapture Risk",
    date: "2026-07-28",
    value: "$280M + $120M CVR",
    status: "Closed",
    classification: "VALUATION MECHANICS & CVR MONETIZATION",
    secCite: "Form 8-K Contingent Value Rights Agreement",
    trigger: "Unfunded $120M Phase 3 clinical trial completion earnout milestone",
    pathNodes: ["Phase 3 CVR Cliff", "Unfunded R&D Deficit", "Clawback Clause", "Creditor Subordination"],
    structuralConsequence: "CVR payment mechanics lacked dedicated escrow backing; target parent R&D budget reallocation triggered constructive breach clause allowing former shareholders to accelerate $120M claim into unsecured creditor status.",
    governanceExposure: "Independent CVR Representative lacked audit subpoena powers under Section 4.2, leaving milestone verification entirely dependent on buyer-controlled internal records."
  },
  {
    id: "pacific-crest",
    code: "PCR-BNK-2026",
    target: "Pacific Crest Bancorp / Western Alliance Trust",
    title: "HTM Portfolio Fair Value Mark & Regulatory Capital Drag",
    date: "2026-08-11",
    value: "$740M",
    status: "Pending Shareholder Vote",
    classification: "CAPITAL ADEQUACY & BALANCE SHEET STRESS",
    secCite: "Form 10-Q Note 4 & Schedule 14A",
    trigger: "$182M unrealized loss in Held-to-Maturity (HTM) securities portfolio",
    pathNodes: ["$182M HTM Loss", "Purchase Accounting Mark", "CET1 Buffer Breach", "Subordinated Debt Reissue"],
    structuralConsequence: "Application of purchase accounting upon closing forces immediate realization of $182M pre-tax fair value marks against tangible common equity, reducing pro-forma CET1 ratio from 11.2% to 8.4% (approaching well-capitalized floor).",
    governanceExposure: "Buyer must issue $90M in expensive 9.5% subordinated Tier 2 debt within 30 days of closing or face formal consent decree from regional Federal Reserve Bank."
  }
];
