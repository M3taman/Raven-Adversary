import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, Pause, ChevronRight, ChevronLeft, ShieldCheck, AlertTriangle, 
  FileText, CheckCircle2, RotateCcw, X, ExternalLink, GitBranch, 
  Cpu, Copy, Check, Terminal, Layers, ArrowRight, ShieldAlert
} from 'lucide-react';

interface ClaimItem {
  id: number;
  statement: string;
  type: 'FACT' | 'INFERENCE' | 'UNRESOLVED' | 'COMPUTATION';
  confidence: string;
  source: string;
}

interface DebateRound {
  round: number;
  sellerArgument: string;
  sellerEvidence: string;
  buyerCritique: string;
  actionableRecommendation: string;
}

interface CognitiveGate {
  name: string;
  status: 'PASSED' | 'FLAGGED';
  description: string;
}

interface ClausePressureCard {
  deal: string;
  clause: string;
  calculation: string;
  trigger: string;
  impact: string;
  deviation: string;
  source: string;
}

interface BriefingSession {
  sessionId: string;
  targetDeal: string;
  dealName: string;
  auditType: string;
  stage: string;
  integrityScore: number;
  timestamp: string;
  slides: {
    // Slide 1
    ingestion: {
      hashCheck: string;
      chunking: string;
      guardrails: { title: string; date: string; detail: string }[];
    };
    // Slide 2
    claims: ClaimItem[];
    // Slide 3
    debateRounds: DebateRound[];
    // Slide 4
    cognitiveGates: CognitiveGate[];
    // Slide 5
    fiduciaryGate: {
      riskVerdict: string;
      boardRecommendation: string;
      clauseCard: ClausePressureCard;
    };
    // Slide 6
    passthroughMemo: {
      summary: string;
      trigger: string;
      amplifier: string;
      propagationPaths: string[];
    };
  };
}

const BRIEFING_SESSIONS: Record<string, BriefingSession> = {
  'inmed-mentari': {
    sessionId: "1787059198678",
    targetDeal: "InMed / Mentari Reverse Merger ($490M PIPE)",
    dealName: "InMed Pharmaceuticals / Mentari Therapeutics",
    auditType: "Class B: Control Topology & Series A Multi-Vote",
    stage: "PRE-EVENT",
    integrityScore: 95,
    timestamp: "2026-08-18T18:50:48.000Z",
    slides: {
      ingestion: {
        hashCheck: "PASSED (SHA-256 Validated: 200bee763ab...)",
        chunking: "COMPLETE (Form 8-K & Form S-4 Definitive Disclosures)",
        guardrails: [
          {
            title: "Series A 30% Outstanding Retention Threshold",
            date: "Contractual",
            detail: "Preferred Directors retain 3 votes per seat (60%-85.7% board control) as long as >=30% of Series A Preferred remains outstanding."
          },
          {
            title: "Ontario Commercial Arbitration Hearing",
            date: "Active 2026",
            detail: "$5.7M total claims ($3.4M historical + $2.3M future royalties) against InMed's $5.2M standalone cash buffer."
          },
          {
            title: "12-Month Rule 144 / Form S-3 Lockout",
            date: "12-Month Post-Close",
            detail: "Former holding company / shell entity classification under Rule 12b-2 restricts secondary shelf registration agility."
          }
        ]
      },
      claims: [
        {
          id: 1,
          statement: "Series A Preferred Directors hold 3 votes per seat, granting Fairmount designees 85.71% of initial active board voting power (6 of 7 votes) and 60.00% fully seated (6 of 10 votes).",
          type: "FACT",
          confidence: "0.99",
          source: "SEC Form 8-K (May 19, 2026) & Form S-4 (July 2, 2026)"
        },
        {
          id: 2,
          statement: "Legacy Mentari securityholders and PIPE syndicate will hold 98.49% to 98.85% of pro forma fully diluted equity, diluting legacy InMed holders to ~1.15% to 1.51%.",
          type: "FACT",
          confidence: "0.98",
          source: "Merger Agreement Valuation Matrix & $490M PIPE Amendment"
        },
        {
          id: 3,
          statement: "Series A Preferred holds mandatory class negative veto rights over fundamental transactions, board expansions, authority delegations, and auditor/counsel selections at >=30% outstanding.",
          type: "FACT",
          confidence: "0.95",
          source: "Nevada Certificate of Designation & Articles of Amendment"
        },
        {
          id: 4,
          statement: "Coordinated PIPE financing ($490M), voting support agreements (~49.8% of capital stock), and joint registration rights require legal review for Section 13(d) group formation under Rule 13d-5(b)(1).",
          type: "INFERENCE",
          confidence: "0.88",
          source: "Raven Control Adjudication Desk"
        }
      ],
      debateRounds: [
        {
          round: 1,
          sellerArgument: "The post-merger governance structure reflects the fundamental economic alignment of the transaction: legacy Mentari stockholders and PIPE investors contribute $125M base valuation and $490M committed cash, commanding 98.5% pro forma equity. Series A Preferred Directors (2 seats @ 3 votes each) represent ~60% of the fully seated board, aligning corporate steering with capital commitments while all directors owe statutory fiduciary duties under British Columbia and Nevada law. Beneficial ownership blockers (9.99%/19.99%) prevent unintended individual concentration.",
          sellerEvidence: "Form 8-K (2026-05-19) & Form S-4 (2026-07-02): 'For so long as at least 30% of the originally issued Convertible Preferred Shares remain outstanding, the holders... will be entitled to elect two directors... and each Preferred Director will be entitled to three votes... These two Preferred Directors will represent approximately 60% of the total votes...'",
          buyerCritique: "The dual-class super-voting architecture creates acute governance asymmetry: on the initial 3-member board, Fairmount designees wield 6 of 7 active votes (85.71% control). Furthermore, mandatory class vetoes over auditor replacements, board expansions, and authority matrices operate independently of general board fiduciary duties. Representations and warranties extinguish entirely at closing with zero indemnity recourse, while InMed faces a $400k break fee against tight cash ($5.2M) and $5.7M in pending arbitration claims.",
          actionableRecommendation: "Condition approval of Proposal No. 1 on legal review of Section 13(d) group formation across the PIPE syndicate, verification of multi-vote board compliance under Nasdaq listing standards, and insertion of independent minority committee protections."
        },
        {
          round: 2,
          sellerArgument: "Protective negative covenants requiring class consent at the 30% threshold are standard and necessary to ring-fence $490M in committed capital for Phase 2a clinical trials (MT-001/MT-002) into 2029. Pre-funded warrants ($0.0001 strike) are express contractual terms to respect regulatory caps, not an illicit statutory bypass. The 10x break-fee disparity ($4M Mentari vs $400k InMed) heavily penalizes the seller for financing failures.",
          sellerEvidence: "Form 8-K (2026-07-22) upsized financing amendment & CVR Agreement granting legacy holders 90%-100% net proceeds on legacy assets.",
          buyerCritique: "The pre-funded warrants bifurcate economic ownership (~98.5%) from visible beneficial ownership, creating potential Section 13(d) group coordination friction among the $490M syndicate. If arbitration claims ($5.7M) are awarded pre-closing, InMed standalone cash ($5.2M) is exhausted, triggering going-concern default.",
          actionableRecommendation: "Perform ring-fenced escrow analysis for the active $5.7M Ontario arbitration liabilities and verify that pre-funded warrants carry zero indirect voting agreements."
        }
      ],
      cognitiveGates: [
        { name: "Temporal Collapse Prevention", status: "PASSED", description: "Audited 12-month Rule 144 lockout and Ontario arbitration milestones." },
        { name: "Absolute Recovery Eradication", status: "PASSED", description: "Suppressed 100% CVR monetization recovery assumptions on discontinued assets." },
        { name: "Multi-Vote Board Compliance Gate (Nasdaq Rule 5640)", status: "PASSED", description: "Evaluated 3-votes-per-director preference against exchange voting rights policies." },
        { name: "Section 13(d) Group Aggregation Detector", status: "PASSED", description: "Identified coordinated voting support (~49.8%) and joint registration covenants." },
        { name: "Non-Survival Indemnity Shield Gate", status: "PASSED", description: "Verified total extinguishment of representations and warranties at closing." }
      ],
      fiduciaryGate: {
        riskVerdict: "Disproportionate board voting concentration where Series A Preferred Directors hold three votes per seat (6 of 7 active votes, or 85.71% initially; 60.00% fully seated) combined with mandatory class veto rights over fundamental corporate actions.",
        boardRecommendation: "Condition approval on legal review of Section 13(d) group formation across the PIPE syndicate, verification of multi-vote board compliance under Nasdaq listing standards and Nevada corporate law, and the insertion of independent minority protections.",
        clauseCard: {
          deal: "InMed Pharmaceuticals / Mentari Therapeutics",
          clause: "Series A Preferred Multi-Vote & Class Negative Veto (>=30% Threshold)",
          calculation: "6 of 7 Active Board Votes (85.71%) + $5.7M Arbitration + $400k Break Fee vs $5.2M Cash",
          trigger: "Execution of Nevada Certificate of Designation & Closing of $490M PIPE.",
          impact: "Fairmount unilateral governance steering and elimination of post-closing indemnity recourse.",
          deviation: "Standard reverse mergers maintain 1-vote-per-director and proportional board representation.",
          source: "Form 8-K (May 19, 2026) & Form S-4 (July 2, 2026)"
        }
      },
      passthroughMemo: {
        summary: "Mentari Therapeutics is executing a reverse merger into InMed Pharmaceuticals backed by an upsized $490.0M PIPE financing, resulting in legacy Mentari and PIPE investors holding 98.49% to 98.85% of pro forma fully diluted equity. Governance is concentrated in Fairmount-affiliated designees (wielding 6 of 7 active initial board votes and mandatory class negative vetoes), balance-sheet encumbrances from an active $5.7M Ontario arbitration, and 12-month Rule 144/Form S-3 shell restrictions.",
        trigger: "Failure to satisfy conditions precedent including the $150.0M minimum financing condition, Nasdaq $4.00 minimum bid reverse split, or an adverse $5.7M arbitration award.",
        amplifier: "InMed standalone liquidity vulnerability ($5.2M cash vs $5.7M total arbitration exposure), asymmetric break fees ($400k InMed vs $4.0M Mentari), and 12-month post-merger Rule 144/S-3 restrictions.",
        propagationPaths: [
          "Pre-closing condition failure triggers $400k break fee amidst tight cash ($5.2M) and $5.7M arbitration liabilities",
          "Series A Preferred multi-vote designees assume ~85.71% active board power, enabling unilateral governance steering",
          "Class-level negative covenants block fundamental transactions, auditor replacements, and board expansions at >=30% threshold",
          "Former shell entity status under Rule 12b-2 restricts Rule 144 resale and eliminates Form S-3 shelf agility for 12 months"
        ]
      }
    }
  },
  'nextcure-avere': {
    sessionId: "1787057137934",
    targetDeal: "NextCure / Avere Reverse Merger ($320M PIPE)",
    dealName: "NextCure, Inc. / Avere Therapeutics",
    auditType: "Class B: Control Topology & Floating Exchange Ratio",
    stage: "PRE-EVENT",
    integrityScore: 94,
    timestamp: "2026-08-18T18:16:33.000Z",
    slides: {
      ingestion: {
        hashCheck: "PASSED (SHA-256 Validated: c7566796a8...)",
        chunking: "COMPLETE (Form 8-K & Form 10-Q SEC Filings)",
        guardrails: [
          {
            title: "PIPE Financing Critical Path Floor",
            date: "$150M Minimum",
            detail: "Merger conditioned on receiving >=$150M PIPE proceeds, allowing closing even with a $170M (53%) shortfall from $320M commitment."
          },
          {
            title: "NextCure Standalone Cash Runway Cliff",
            date: "Q4 2026",
            detail: "$20.1M cash balance facing immediate exhaustion under Going Concern qualification if transaction fails."
          },
          {
            title: "Parent Net Cash Calculation Trigger",
            date: "Closing Drop-Dead",
            detail: "Exchange ratio downwards-adjusts the 1.89% minority stake if closing cash is less than Parent Target Cash Amount."
          }
        ]
      },
      claims: [
        {
          id: 1,
          statement: "Avere stockholders and PIPE participants command 98.11% pro forma equity, reducing NextCure stockholders to a 1.89% minority interest.",
          type: "FACT",
          confidence: "0.99",
          source: "SEC Form 8-K Merger Agreement Summary (July 14, 2026)"
        },
        {
          id: 2,
          statement: "The 1.89% minority stake functions as a fixed ceiling subject to downward adjustment based on Parent Net Cash deficits at closing.",
          type: "INFERENCE",
          confidence: "0.92",
          source: "Exchange Ratio Formula Schedule"
        },
        {
          id: 3,
          statement: "Avere designates 100% of the reconstituted 4-member Board of Directors and entire executive management team.",
          type: "FACT",
          confidence: "0.99",
          source: "Form 8-K Board Governance Disclosures"
        },
        {
          id: 4,
          statement: "Out-of-the-money NextCure options are cancelled for zero consideration; in-the-money options cashed out based on 5-day VWAP.",
          type: "FACT",
          confidence: "0.98",
          source: "Merger Agreement Section 2.04"
        }
      ],
      debateRounds: [
        {
          round: 1,
          sellerArgument: "The 98.11% / 1.89% pro forma split is a mathematical reflection of Avere's clinical pipeline valuation and the $320M PIPE commitment relative to NextCure's distressed going-concern state ($20.1M cash). Avere designates all 4 board members to execute its new clinical strategy. An asymmetric break fee ($2.0M Avere vs $330k NextCure) protects the seller, while CVRs preserve 90% gross proceeds on legacy oncology assets.",
          sellerEvidence: "Form 8-K (2026-07-14) & Form 10-Q (2026-08-06): Exchange ratio formula, 4-member board designation, $150M minimum financing condition, and binary option cash-out/cancellation terms.",
          buyerCritique: "The 1.89% minority interest is a ceiling, not a floor, subject to further dilution if Net Cash targets are missed. The critical path condition allows the transaction to close on only $150M in PIPE proceeds—a 53% ($170M) shortfall against the $320M commitment—potentially leaving the post-merger entity undercapitalized. Large stakeholders use pre-funded warrants ($0.001 strike) to decouple economic exposure from 9.99%/19.99% voting and Section 13(d) caps.",
          actionableRecommendation: "Perform forensic reconciliation of NextCure's cash burn against the Parent Target Cash Amount and audit pre-funded warrant blocker terms for Section 13(d) group compliance."
        }
      ],
      cognitiveGates: [
        { name: "Temporal Collapse Prevention", status: "PASSED", description: "Tracked Q4 2026 liquidity exhaustion against merger closing milestones." },
        { name: "Absolute Recovery Eradication", status: "PASSED", description: "Discounted non-transferable CVR value following LNCB74 program opt-out." },
        { name: "Cap Table Cleansing Verification", status: "PASSED", description: "Audited binary cancellation of out-of-the-money options for zero value." },
        { name: "Beneficial Ownership Blocker Adjudicator", status: "PASSED", description: "Verified $0.001 pre-funded warrant mechanics and 19.99% Nasdaq caps." }
      ],
      fiduciaryGate: {
        riskVerdict: "The 1.89% minority interest of pre-merger NextCure stockholders acts as a fixed ceiling subject to downward adjustment if 'Parent Net Cash' at closing is less than the 'Parent Target Cash Amount', or if the $320M PIPE financing deviates from anticipated amounts.",
        boardRecommendation: "Perform a forensic reconciliation of NextCure’s Q2 2026 cash position ($20.1M) against the Parent Target Cash Amount to determine the exact cash deficit threshold that triggers downward exchange ratio adjustments.",
        clauseCard: {
          deal: "NextCure, Inc. / Avere Therapeutics",
          clause: "Section 1.5 Exchange Ratio Net Cash Formula & $150M Financing Floor",
          calculation: "98.11% / 1.89% Ceiling Split; $150M PIPE Minimum vs $320M Commitment; $20.1M Cash Runway",
          trigger: "Parent Net Cash falling below Parent Target Cash Amount at closing or PIPE proceeds arriving at $150M floor.",
          impact: "Complete minority marginalization (<1.00% stake) and capital shortfall for surviving entity.",
          deviation: "Floating downward-only exchange ratio without a reciprocal floor protection for distressed parent.",
          source: "Form 8-K (July 14, 2026) & Form 10-Q (August 6, 2026)"
        }
      },
      passthroughMemo: {
        summary: "NextCure is undergoing a reverse merger with Avere Therapeutics necessitated by a Q2 2026 going concern warning and imminent liquidity exhaustion in Q4 2026. Avere captures 98.11% equity, 100% board designation, and executive control, reducing NextCure stockholders to a 1.89% minority stake subject to downward cash adjustments.",
        trigger: "Merger consummation contingent on $150M minimum PIPE proceeds floor amidst $320M stated commitment.",
        amplifier: "Downward exchange ratio adjustments from net cash deficits, $5.1M impairment charges, and $3.2M severance/lease termination liabilities.",
        propagationPaths: [
          "NextCure cash burn depletes reserves toward Q4 2026 exhaustion",
          "Closing cash falls below Parent Target Cash Amount, driving minority stake below 1.89%",
          "Avere captures 100% of board seats and executive management",
          "PIPE closes near $150M floor, creating post-closing runway friction"
        ]
      }
    }
  },
  'fbnc-fcbm': {
    sessionId: "1787055469330",
    targetDeal: "FBNC / First Carolina Bancshares ($166M)",
    dealName: "First Bancorp / First Carolina Bancshares (Florence, SC)",
    auditType: "Class C: Debt & Liquidity / Target Entity Discontinuity",
    stage: "PRE-EVENT",
    integrityScore: 91,
    timestamp: "2026-08-18T17:48:33.000Z",
    slides: {
      ingestion: {
        hashCheck: "PASSED (SHA-256 Validated: 630c0af3a9...)",
        chunking: "COMPLETE (Form 8-K & Form 10-Q Disclosures)",
        guardrails: [
          {
            title: "Target Entity Discontinuity Check",
            date: "Forensic Discovery",
            detail: "Target is First Carolina Bancshares Corp (Florence, SC; $831M assets), NOT First Carolina Financial Services (Raleigh, NC; $3.4B + BM Tech)."
          },
          {
            title: "Rate Sensitivity EVE Decline Horizon",
            date: "+200 bps Shift",
            detail: "6.4% Economic Value of Equity (EVE) projected decline under higher-for-longer interest rate scenario."
          }
        ]
      },
      claims: [
        {
          id: 1,
          statement: "Acquisition target is First Carolina Bancshares Corporation (Florence, SC) with $831M in assets, $596M in gross loans, and $714M in deposits.",
          type: "FACT",
          confidence: "0.99",
          source: "Agreement & Plan of Merger, SEC Form 8-K (July 14, 2026)"
        },
        {
          id: 2,
          statement: "FBNC reports $4.6 billion in uninsured deposits, representing 41.1% of total deposit funding.",
          type: "FACT",
          confidence: "0.95",
          source: "FBNC Form 10-Q (June 30, 2026)"
        },
        {
          id: 3,
          statement: "FBNC faces a 6.4% Economic Value of Equity (EVE) decline in a +200 bps parallel interest rate shift scenario.",
          type: "COMPUTATION",
          confidence: "0.95",
          source: "FBNC Item 3 Rate Sensitivity Simulation"
        },
        {
          id: 4,
          statement: "Audit record contains zero audited financial statements (10-Q/10-K) for the Florence-based target, creating an unquantified RWA/CRE credit risk gap.",
          type: "UNRESOLVED",
          confidence: "0.98",
          source: "Raven Forensic Data Integrity Desk"
        }
      ],
      debateRounds: [
        {
          round: 1,
          sellerArgument: "The acquisition of First Carolina Bancshares (Florence, SC) for $166M (1.97M shares + $40M cash) expands FBNC's high-margin community banking franchise in South Carolina. FBNC's $550.3M cash easily covers the $40M cash consideration (13.7x coverage), while FBNC's 16.06% Total Risk-Based Capital Ratio provides a 556 bps buffer above regulatory well-capitalized minimums. Rising rates enhance net interest income (+3.9% at +100bps).",
          sellerEvidence: "Form 8-K (2026-07-14) & Form 10-Q (2026-06-30): $831M target assets, $550.3M FBNC cash, 16.06% RBC ratio, $2.4B off-balance sheet borrowing capacity.",
          buyerCritique: "A critical forensic intelligence gap exists: the audit record lacks audited financial statements for the actual Florence target. All prior assumptions regarding 448% CRE concentration, $63.5M sub notes, and BM Tech digital fraud belonged to an unrelated Raleigh entity. The Florence target's credit marks, non-performing loans, and CRE concentrations remain unquantified, while FBNC bears a 6.4% EVE decline and 41.1% ($4.6B) uninsured deposit flight risk under rate stress.",
          actionableRecommendation: "Strictly withhold final deal validation until the target's audited financial statements are extracted to establish baseline CRE concentrations and loan-to-deposit ratios."
        }
      ],
      cognitiveGates: [
        { name: "Entity Discontinuity Checker", status: "PASSED", description: "Disentangled Florence community bank target from Raleigh fintech entity." },
        { name: "Interest Rate Shock Matrix (EVE vs NII)", status: "PASSED", description: "Reconciled +3.9% NII asset sensitivity against -6.4% EVE capital decline." },
        { name: "Uninsured Deposit Flight Stress", status: "PASSED", description: "Audited 41.1% ($4.6B) uninsured deposit ratio at FBNC." },
        { name: "Purchase Price Cash Coverage", status: "PASSED", description: "Validated 13.7x cash coverage ($550.3M cash vs $40.0M cash consideration)." }
      ],
      fiduciaryGate: {
        riskVerdict: "Information vacuum regarding the $831 million target asset pool's credit quality and Risk-Weighted Assets (RWA), creating an unquantified pro forma capital impact despite First Bancorp's (FBNC) 16.06% Total Risk-Based Capital Ratio.",
        boardRecommendation: "Strictly withhold final deal validation until the target's audited March 31, 2026 financial statements are extracted to establish baseline CRE concentrations and loan-to-deposit ratios.",
        clauseCard: {
          deal: "First Bancorp / First Carolina Bancshares (Florence, SC)",
          clause: "Merger Agreement Section 1.01 Asset & Consideration Schedule",
          calculation: "$166.0M Consideration ($40M Cash + Stock) against Unverified $831M Asset Pool & 41.1% Uninsured Deposits",
          trigger: "Discovery of unreserved credit marks in Florence loan book ($596M gross loans).",
          impact: "Erosion of FBNC's 556 bps capital buffer and 6.4% EVE decline under rate stress.",
          deviation: "Substituting non-party fintech metrics for target community bank due diligence.",
          source: "Form 8-K (July 14, 2026) & Form 10-Q (June 30, 2026)"
        }
      },
      passthroughMemo: {
        summary: "First Bancorp is exposed to valuation risk in its $166M acquisition of First Carolina Bancshares (Florence, SC) due to missing audited target financials, while absorbing an $831M asset pool with unquantified credit marks into an entity with 41.1% ($4.6B) uninsured deposits.",
        trigger: "Failure to extract and verify the Florence target's audited financial statements prior to closing.",
        amplifier: "High-interest-rate environment driving 6.4% EVE decline and accelerating deposit flight risks.",
        propagationPaths: [
          "Information gap in target audited filings prevents accurate pro forma capital modeling",
          "$166M purchase price remains fixed while credit quality of $596M loan pool is unverified",
          "Post-close credit marks erode FBNC's 16.06% risk-based capital buffer faster than modeled",
          "Integration of unverified deposit base into FBNC's 41.1% uninsured deposit structure during rate crunch"
        ]
      }
    }
  },
  'verifyme-openworld': {
    sessionId: "1786963441067",
    targetDeal: "VerifyMe / OpenWorld ($42.67M SAFE Combination)",
    dealName: "VerifyMe, Inc. / OpenWorld",
    auditType: "Class B: Control Topology & Timeline Collision",
    stage: "PRE-EVENT",
    integrityScore: 89,
    timestamp: "2026-08-17T16:15:16.000Z",
    slides: {
      ingestion: {
        hashCheck: "PASSED (SHA-256 Validated: 649025e3c7...)",
        chunking: "COMPLETE (Form 8-K & Tender Offer Exhibits)",
        guardrails: [
          {
            title: "Offer Expiration vs Deficit Disclosure Window",
            date: "July 20-21, 2026",
            detail: "Offer expiration on July 20 immediately followed by financing deficit disclosure on July 21 and joint termination on July 24."
          },
          {
            title: "Outside Termination Drop-Dead Date",
            date: "2026-08-31",
            detail: "Hard terminal trigger for transaction collapse if regulatory/financing conditions fail."
          },
          {
            title: "Nasdaq Delisting Notice Cure Timeline",
            date: "April 17, 2026 Notice",
            detail: "Sector pivot to crypto-finance (SIC 6199) pursued as strategic remediation for continued listing non-compliance."
          }
        ]
      },
      claims: [
        {
          id: 1,
          statement: "Transaction executes a strategic pivot to crypto-finance (SIC 6199) following an April 17, 2026 Nasdaq delisting notice.",
          type: "FACT",
          confidence: "0.99",
          source: "SEC Form 8-K Disclosures"
        },
        {
          id: 2,
          statement: "A $500,000 termination fee is payable by a party in the event the merger agreement is terminated due to willful breach under Section 8.5(c).",
          type: "FACT",
          confidence: "0.98",
          source: "Merger Agreement Section 8.5(c)"
        },
        {
          id: 3,
          statement: "Amendment No. 2 establishes a floor for SAFE conversion fixing OpenWorld equity participation at approximately 15% to 20% under a $42.671M cap.",
          type: "COMPUTATION",
          confidence: "0.92",
          source: "Rights Agreement Amendment No. 2 & SAFE Schedules"
        },
        {
          id: 4,
          statement: "Financing Deficit Disclosure on July 21, 2026 following July 20 Offer Expiration triggers timeline collision and joint termination path.",
          type: "INFERENCE",
          confidence: "0.85",
          source: "Chronological Sequence Reconciliation"
        }
      ],
      debateRounds: [
        {
          round: 1,
          sellerArgument: "The business combination with OpenWorld allows VerifyMe to cure Nasdaq listing deficiencies and execute a high-upside pivot into digital asset finance. Rights Agreement Amendment No. 2 ensures the Poison Pill is not triggered, while consideration is structured around stock issuance and SAFE conversions capped at $42.671M.",
          sellerEvidence: "Merger Agreement Section 1.1, Rights Agreement Amendment No. 2 Section 2.1, Form 8-K Tender Offer exhibits.",
          buyerCritique: "Chronological reconstruction exposes a lethal timeline collision: the Offer Expiration occurred on July 20, 2026, followed by a Financing Deficit Disclosure on July 21 and joint termination on July 24. If the deficit was known prior to expiration, Section 8.5(c) exposes the breaching party to a $500,000 willful breach fee.",
          actionableRecommendation: "Execute formal verification of the financing deficit timeline; if known prior to July 20, leverage Section 8.5(c) to claim the $500,000 willful breach fee."
        }
      ],
      cognitiveGates: [
        { name: "Temporal Timeline Collision Gate", status: "PASSED", description: "Disentangled July 20 expiration, July 21 deficit disclosure, and July 24 termination." },
        { name: "Section 8.5(c) Willful Breach Identifier", status: "PASSED", description: "Identified $500,000 termination fee liability under breach conditions." },
        { name: "SAFE Conversion Dilution Floor Check", status: "PASSED", description: "Audited 15%-20% post-close equity participation against $42.671M cap." }
      ],
      fiduciaryGate: {
        riskVerdict: "Temporal misalignment between the July 20, 2026 Offer Expiration and the July 21, 2026 Financing Deficit Disclosure, coupled with an August 31 outside date, creates a specific window where a 'willful breach' determination could trigger the $500,000 termination fee under Section 8.5(c).",
        boardRecommendation: "Execute a formal verification of the 'Financing Deficit' status prior to the July 20 expiration; if the deficit is known and undisclosed, leverage Section 8.5(c) to claim the $500,000 willful breach fee rather than a no-fault termination.",
        clauseCard: {
          deal: "VerifyMe, Inc. / OpenWorld",
          clause: "Section 8.5(c) Willful Breach Termination Fee & Amendment No. 2 SAFE Floor",
          calculation: "$500,000 Termination Fee vs $42,671,288 Aggregate SAFE Valuation Cap",
          trigger: "Financing Deficit Disclosure on July 21 immediately following July 20 Offer Expiration.",
          impact: "Transaction failure, delisting exposure, and liability claim under Section 8.5(c).",
          deviation: "Chronological mismatch between tender expiration and financing deficit disclosure.",
          source: "Form 8-K (July 2026) & Merger Agreement Section 8.5"
        }
      },
      passthroughMemo: {
        summary: "VerifyMe is attempting a high-risk sector pivot to crypto-finance (SIC 6199) through the acquisition of OpenWorld following an April 17 delisting notice. Institutional fragility centers on a tight temporal collision between the July 20 offer expiration, July 21 financing deficit disclosure, and August 31 outside date.",
        trigger: "August 31, 2026 Outside Date and July 21 Financing Deficit Disclosure.",
        amplifier: "Nasdaq listing non-compliance and $500,000 willful breach termination fee under Section 8.5(c).",
        propagationPaths: [
          "Nasdaq delisting notice forces rushed crypto sector combination",
          "Financing deficit disclosed on July 21 after July 20 tender expiration",
          "Transaction collapses into joint termination filing on July 24",
          "Potential $500k willful breach liability under Section 8.5(c)"
        ]
      }
    }
  },
  'nims-gravitics': {
    sessionId: "1787070786933",
    targetDeal: "NIMS / Gravitics Reverse Triangular Merger",
    dealName: "NIMS (Non-Invasive Monitoring Systems) / Gravitics, Inc.",
    auditType: "Class B: Control Topology & Financing Condition Precedent",
    stage: "PRE-EVENT",
    integrityScore: 88,
    timestamp: "2026-08-18T16:36:16.354Z",
    slides: {
      ingestion: {
        hashCheck: "PASSED (SHA-256 Validated)",
        chunking: "COMPLETE (Logical Sentence Boundary Chunking)",
        guardrails: [
          {
            title: "Merger Outside Closing Date & Note Maturity",
            date: "2026-09-30",
            detail: "Merger agreement terminable by either party; Frost/Hsiao promissory notes ($225K–$300K principal + accrued interest) mature immediately."
          },
          {
            title: "Defender Bridge Note Coupon Step-Up Date",
            date: "2026-11-12",
            detail: "Defender Opportunity LLC $809,705.75 bridge note interest rate escalates from 11.0% to 22.0% default penalty rate if closing delayed."
          },
          {
            title: "FBCA § 607.0147 Statutory Validation Window",
            date: "120-Day Limit",
            detail: "Statutory challenge window for Series B Preferred Stock corporate defect ratification elapses post-filing."
          }
        ]
      },
      claims: [
        {
          id: 1,
          statement: "Pre-merger voting concentration totaled 63.4% between Dr. Phillip Frost (~35.1%) and Dr. Jane Hsiao (~27.9%), executing approvals via FBCA § 607.0704 written consents.",
          type: "FACT",
          confidence: "0.98",
          source: "Primary Transaction Document / SEC Form 8-K"
        },
        {
          id: 2,
          statement: "Post-closing governance topology transitions control to Gravitics with a 7-member board and 96.5% undiluted equity ownership (91.19% fully diluted).",
          type: "INFERENCE",
          confidence: "0.91",
          source: "Global Deal Memorandum (Sections 2 & 4)"
        },
        {
          id: 3,
          statement: "Potential control implications cannot be quantified until the voting treatment of 4,794,604 escrow-held / earn-out shares is established in primary documentation.",
          type: "UNRESOLVED",
          confidence: "0.89",
          source: "Audit Finding / Raven Claim Desk"
        }
      ],
      debateRounds: [
        {
          round: 1,
          sellerArgument: "Under the analytical path of Control Topology, the proposed reverse triangular merger architecture strategically reallocates equity and board governance to reflect the fundamental commercial reality of the transaction while preserving legacy protections. Pre-merger voting concentration at NIMS—comprising a 63.4% voting bloc held by Dr. Phillip Frost (~35.1%) and Dr. Jane Hsiao (~27.9%)—enabled requisite corporate authorizations via FBCA § 607.0704 written consents. Upon closing, control topology transitions completely to Gravitics, with legacy Gravitics stockholders receiving 96.5% pro-forma undiluted equity (91.19% fully diluted including the $40M raise) and legacy NIMS stockholders retaining 3.5% (4.30% fully diluted). The governance topology is formalized through a full board reconstituting under a 7-member slate nominated by Gravitics (5 meeting Nasdaq Rule 5605(a)(2) independence standards), led by Colin A. Doughan as Chairman and CEO. Furthermore, bridge convertible note structures (such as Defender Opportunity LLC's note) incorporate standard 4.99% and 9.99% beneficial ownership blocker provisions to regulate derivative conversion pacing, establishing a compliant, clear, and stable control transition as a condition precedent to closing.",
          sellerEvidence: "NIMS pre-merger voting control was dominated by Dr. Phillip Frost (~35.1% voting power via Frost Gamma Investments Trust) and Dr. Jane Hsiao (~27.9% voting power via Hsu Gamma LP and Family Trust)... Together, this 63.4% voting bloc passed all merger approvals and corporate actions via FBCA § 607.0704 written consents... Post-closing governance: Incoming 7-member slate nominated by Gravitics, with 5 independent directors satisfying Nasdaq Rule 5605(a)(2)... Legacy Gravitics Stockholders hold 96.5% undiluted / 91.19% fully diluted equity... Conversion is subject to a 4.99% blocker (expandable to 9.99% at the holder's option). (GLOBAL DEAL MEMORANDUM (Sections 2 & 4))",
          buyerCritique: "A rigorous audit of the transaction documents reveals critical structural, legal, and operational vulnerabilities in the pending reverse recapitalization between Non-Invasive Monitoring Systems, Inc. (NIMS) and Gravitics, Inc. NIMS is an SEC-reporting shell company (Rule 12b-2) with no operations, an accumulated deficit of $29.57 million, negative working capital, and going-concern qualifications. Pre-closing risk is exacerbated by severe binary financing conditions: closing is strictly contingent upon a concurrent $40.0 million underwritten public equity offering and Nasdaq Capital Market listing clearance prior to the September 30, 2026 outside date. Failure to satisfy these conditions by the outside date triggers an aggressive step-up in Defender Opportunity LLC's $809,705.75 convertible bridge note to a 22% p.a. default interest rate, coupled with $300,000 in insider promissory note maturities (Frost and Hsiao) due September 30, 2026.",
          actionableRecommendation: "Maintain an adversarial, conditional negotiating posture and withhold closing authorization until: (i) the $40.0 million underwritten public offering and Nasdaq uplisting are fully confirmed; (ii) the 120-day challenge window under FBCA Section 607.0147 for Series B validation expires without challenge; and (iii) Axiom Space provides binding, non-terminable milestone validation or CDR sign-off."
        },
        {
          round: 2,
          sellerArgument: "From a legal and structural perspective under Class B: Control Topology, the buyer's assertion that the transaction suffers from an unstable governance architecture or unmitigated pre-closing risk is directly refuted by the primary transaction mechanics. First, the pre-merger voting topology provided absolute contractual authority to approve the reorganization via FBCA § 607.0704 written consents. Second, the post-closing governance transition establishes clear, unambiguous control by Gravitics designees. Third, pre-closing maturity risk is fully mitigated through formal contract amendments: on June 30, 2026, NIMS executed Fourth Amendments to the promissory notes held by Frost Gamma Investments Trust and Dr. Jane Hsiao, legally extending their maturity dates to September 30, 2026, aligning precisely with the Merger Agreement's Outside Closing Date.",
          sellerEvidence: "On June 30, 2026, Non-Invasive Monitoring Systems, Inc. entered into the Fourth Amendment to that certain Promissory Note dated October 4, 2021 in principal amount of $75,000 with Frost Gamma Investments Trust... amended to September 30, 2026. (Source: [8-K] form8-k.htm | Part 2); Fourth Amendment with Dr. Jane Hsiao amended to September 30, 2026. (Source: [8-K] form8-k.htm | Part 3).",
          buyerCritique: "The seller's defense ignores that extending note maturities to September 30, 2026 does not eliminate risk—it concentrates risk by creating a concurrent maturity cliff where $300,000 in aggregate insider principal matures simultaneously on the exact Outside Date. If public equity markets soften and the $40M offering cannot price, NIMS has only ~$160,000 in cash against $300,000 in immediate notes and faces an insolvent liquidation state.",
          actionableRecommendation: "Withhold transaction closing authorization and maintain strict pre-closing covenants until: (i) SEC Form S-4 registration effectiveness and Nasdaq Capital Market uplisting approval are formally confirmed; (ii) gross proceeds of at least $40.0 million are fully escrowed; and (iii) the 120-day FBCA Section 607.0147 window elapses."
        },
        {
          round: 3,
          sellerArgument: "The transaction architecture establishes a fully compliant and contractually secured transition of control. Pre-merger voting authority was decisively established by a 63.4% majority bloc legally authorizing all corporate actions without proxy delay. Post-closing control shifts entirely to Gravitics designees with 5 independent directors satisfying Nasdaq Rule 5605(a)(2). Derivative conversion pacing is strictly bounded by enforceable 4.99% and 9.99% beneficial ownership blockers on bridge instruments.",
          sellerEvidence: "GLOBAL DEAL MEMORANDUM (Sections 2 & 4); [8-K] form8-k.htm (Parts 2 & 3).",
          buyerCritique: "The public shell status (Rule 12b-2) with no operations and an accumulated deficit of $29.57M means there is zero operational buffer. If closing fails to occur prior to outside deadlines, Defender Opportunity LLC's $809,705.75 convertible bridge note steps up from 11% to a 22% penalty interest rate on November 12, 2026 (maturing December 31, 2026).",
          actionableRecommendation: "Withhold transaction closing authorization until the $40.0M public equity offering and Nasdaq uplisting are executed, debt instruments resolved, and FBCA § 607.0147 validation window expires without adverse claims."
        },
        {
          round: 4,
          sellerArgument: "The reverse triangular merger architecture presents an insulated, compliant transition of corporate control supported by pre-merger voting concentration and synchronized note maturity dates.",
          sellerEvidence: "GLOBAL DEAL MEMORANDUM (Sections 2 & 4); [8-K] form8-k.htm (Parts 2 & 3).",
          buyerCritique: "Frost Gamma Investments Trust (controlled by director Dr. Phillip Frost) and Dr. Jane Hsiao each beneficially own in excess of 10% of NIMS common stock. These insiders executed Fourth Amendments extending three notes ($75K 2021 Frost Note, $75K 2022 Frost Note, $75K 2021 Hsiao Note) to September 30, 2026, creating a $225K–$300K concurrent cliff. Furthermore, the voting treatment of 4,794,604 closing-contingent earn-out / escrow shares remains unresolved in primary documentation.",
          actionableRecommendation: "Withhold transaction closing authorization and maintain strict pre-closing covenants until: (i) Form S-4 effectiveness and Nasdaq listing clearances; (ii) primary documentation confirms discharge/conversion of insider notes; (iii) voting treatment of derivative instruments is verified; and (iv) Section 13(d) control group implications are formally reviewed."
        }
      ],
      cognitiveGates: [
        { name: "Temporal Collapse Prevention", status: "PASSED", description: "Verifies all contract milestone drop-dead dates against current calendar state." },
        { name: "Absolute Recovery Eradication", status: "PASSED", description: "Suppresses unrealistic 100% asset recovery assumptions under liquidation stress." },
        { name: "Domain Creep Isolation (ERISA / Control)", status: "PASSED", description: "Prevents mixing unrelated statutory trust frameworks into corporate merger analysis." },
        { name: "Inter-Document Contradiction Checker", status: "PASSED", description: "Cross-audits 8-K exhibits against Form S-4 registration schedules for terms drift." },
        { name: "Shell Entity Going-Concern Isolation (Rule 12b-2)", status: "PASSED", description: "Audits public shell company financial standing and working capital deficits." },
        { name: "Section 13(d) Group Coordination Detector", status: "PASSED", description: "Detects concerted voting patterns and simultaneous debt amendment actions." },
        { name: "Beneficial Ownership Blocker Adjudicator", status: "PASSED", description: "Verifies 4.99% and 9.99% conversion caps on bridge convertible instruments." },
        { name: "Statutory Validation Window Boundary (FBCA § 607.0147)", status: "PASSED", description: "Validates 120-day legal challenge timeline for historical share defect cure." },
        { name: "Commercial Backlog Convenience-Termination Filter", status: "PASSED", description: "Discounts revenue backlog subject to unilateral pre-CDR customer cancellation." },
        { name: "Non-Accretive Liquidity Drag Gate", status: "PASSED", description: "Models cash burn against bridge loan penalty coupon step-up schedules." }
      ],
      fiduciaryGate: {
        riskVerdict: "Binary pre-closing financing and listing dependency requiring a concurrent $40.0M public offering and Nasdaq clearance prior to the September 30, 2026 outside date, coinciding with an insider promissory note maturity cliff of at least $225,000 to $300,000.",
        boardRecommendation: "Maintain a strict conditional pre-closing posture: withhold closing authorization until (i) Form S-4 registration effectiveness and Nasdaq Capital Market uplisting are confirmed, (ii) the concurrent $40.0M offering proceeds are fully escrowed to ensure insider note discharge, and (iii) the voting treatment of earn-out/escrow shares is verified in primary documentation.",
        clauseCard: {
          deal: "NIMS / Gravitics Reverse Triangular Merger",
          clause: "Financing & Listing Condition Precedent; Outside Closing Date",
          calculation: "$40,000,000 Public Equity Offering + $809,705.75 Bridge Note + $300,000 Insider Notes = $41,109,705.75 exposure",
          trigger: "Failure to obtain Nasdaq listing or close $40.0M offering by September 30, 2026 outside date.",
          impact: "Termination of merger agreement, immediate maturity of $225K-$300K insider notes, and step-up to 22% default interest on Defender bridge note.",
          deviation: "Standard reverse mergers include 30-60 day mutual cure extensions; this structure creates hard binary maturity cliffs on the outside date.",
          source: "GLOBAL DEAL MEMORANDUM & Form 8-K Filings"
        }
      },
      passthroughMemo: {
        summary: "Pre-closing recapitalization structure exhibits severe liquidity and governance fragility centered on an impending September 30, 2026 Outside Closing Date. The transaction is strictly conditioned on a mandatory $40.0 million underwritten public equity offering and Nasdaq uplisting. Failure to satisfy these conditions by the Outside Date creates an immediate debt cliff on $300,000 in insider notes (Frost/Hsiao) and exposes the shell acquirer to a coupon step-up to 22% p.a. on Defender Opportunity LLC's $809,705.75 convertible note, against a cash position of only ~$160,000.",
        trigger: "Failure to complete the mandatory $40.0 million public offering and achieve Nasdaq Capital Market listing clearance prior to the September 30, 2026 Outside Closing Date.",
        amplifier: "Defender Opportunity LLC's $809,705.75 bridge note penalty rate escalation from 11% to 22% p.a. post-November 12, 2026, combined with simultaneous maturity of $300,000 in Frost/Hsiao insider notes on September 30, 2026, and a $250,000 liquidated damages termination fee.",
        propagationPaths: [
          "Capital markets soften or Nasdaq listing clearance stalls prior to September 30, 2026",
          "Mandatory $40.0M public equity offering fails to close, breaching a condition precedent to merger completion",
          "Frost/Hsiao promissory notes ($300,000 aggregate principal + accrued interest) reach maturity cliff on September 30, 2026 without offering proceeds for repayment",
          "NIMS cash reserve (~$160,000 as of June 30, 2026) is exhausted, triggering immediate default and going-concern insolvency",
          "Defender Opportunity LLC bridge note coupon steps up to 22% penalty rate on November 12, 2026, maturing December 31, 2026 with no prepayment rights without lender consent"
        ]
      }
    }
  },
  'first-bancorp': {
    sessionId: "1787070786901",
    targetDeal: "First Bancorp / First Carolina ($166.4M)",
    dealName: "First Bancorp / First Carolina",
    auditType: "Class A: CRE Credit Exposure & Capital Cushion",
    stage: "PRE-EVENT",
    integrityScore: 92,
    timestamp: "2026-08-14T11:20:00.000Z",
    slides: {
      ingestion: {
        hashCheck: "PASSED (SHA-256 Validated)",
        chunking: "COMPLETE (Form S-4 & Call Report Schedules)",
        guardrails: [
          {
            title: "Merger Drop-Dead Date",
            date: "2026-12-31",
            detail: "Merger agreement outside closing date subject to regulatory clearance."
          },
          {
            title: "2026 CRE Refinancing Window",
            date: "Q3 2026 - Q2 2027",
            detail: "42% of target multi-family loan collateral matures for rate re-underwriting."
          }
        ]
      },
      claims: [
        {
          id: 1,
          statement: "Target commercial real estate loans total $842M, representing 312% of risk-based capital.",
          type: "FACT",
          confidence: "0.99",
          source: "Form 10-K Item 7, Page 54"
        },
        {
          id: 2,
          statement: "Target ACL (1.08%) trails regional bank average (1.42%) by $4.1M in reserve adequacy.",
          type: "COMPUTATION",
          confidence: "0.94",
          source: "S-4 Pro Forma Financial Schedules"
        },
        {
          id: 3,
          statement: "Merger Agreement Section 8.02 MAE carve-out excludes real estate asset-quality write-downs from triggering buyer walk-away rights.",
          type: "FACT",
          confidence: "0.98",
          source: "Agreement & Plan of Merger, Ex 2.1"
        }
      ],
      debateRounds: [
        {
          round: 1,
          sellerArgument: "The all-stock acquisition creates a premier regional banking franchise with $166M equity consideration, delivering immediate asset scale and earnings accretion.",
          sellerEvidence: "Form S-4 Registration Statement (May 2026)",
          buyerCritique: "The 312% CRE concentration combined with an ACL reserve deficit transfers $14.2M in unreserved credit marks onto the acquirer without contractual termination protection under Section 8.02.",
          actionableRecommendation: "Condition closing on a dedicated pre-closing credit indemnity escrow or require targeted loan re-underwriting."
        }
      ],
      cognitiveGates: [
        { name: "Temporal Collapse Prevention", status: "PASSED", description: "Verified against regulatory approval timeline." },
        { name: "Absolute Recovery Eradication", status: "PASSED", description: "Discounted collateral recovery values." },
        { name: "Inter-Document Contradiction Checker", status: "PASSED", description: "Reconciled Call Report against S-4 disclosures." }
      ],
      fiduciaryGate: {
        riskVerdict: "MAE carve-out shifts 100% of commercial real estate credit distress to buyer, compressing pro-forma CET1 by up to 132 bps.",
        boardRecommendation: "Negotiate pre-closing loan re-underwriting threshold and establish a $12M indemnity escrow.",
        clauseCard: {
          deal: "First Bancorp / First Carolina",
          clause: "Section 8.02(b) MAE Carve-Out",
          calculation: "$842M CRE Loans * 250 bps Stress Mark = $21.0M Capital Absorption (-132 bps CET1)",
          trigger: "Deterioration in regional commercial real estate valuations prior to closing.",
          impact: "Buyer unable to walk away; forced to absorb capital buffer compression.",
          deviation: "Carve-out fails to include proportional industry credit thresholds.",
          source: "Form S-4 Exhibit 2.1"
        }
      },
      passthroughMemo: {
        summary: "Target CRE concentration exceeds 300% regulatory threshold benchmark with an Allowance for Credit Losses lagging peer averages by 34 bps.",
        trigger: "Regulatory examination requiring higher day-one purchase accounting credit reserve allocation.",
        amplifier: "MAE definition eliminates buyer walk-away rights for general sector credit markdowns.",
        propagationPaths: [
          "Target CRE concentration exceeds regulatory guidance threshold",
          "ACL deficit triggers $4.1M immediate purchase accounting mark",
          "Combined CET1 ratio compresses from 11.4% to 10.1%",
          "Tangible book value earn-back period extends by 2.4 years"
        ]
      }
    }
  },
  'first-seacoast': {
    sessionId: "1787070786884",
    targetDeal: "First Seacoast Bancorp / Cambridge",
    dealName: "First Seacoast Bancorp (FSEA)",
    auditType: "Class C: Governance Inversion & ESOP Trust Voting Gap",
    stage: "PRE-EVENT",
    integrityScore: 94,
    timestamp: "2026-08-10T09:15:00.000Z",
    slides: {
      ingestion: {
        hashCheck: "PASSED (SHA-256 Validated)",
        chunking: "COMPLETE (Proxy Statement & Schedule 13G Reconciliation)",
        guardrails: [
          {
            title: "Annual Shareholder Meeting Proxy Date",
            date: "2026-05-15",
            detail: "Record date cutoff for participant voting instructions."
          }
        ]
      },
      claims: [
        {
          id: 1,
          statement: "Management reports 8.80% defensive ESOP block (414,733 shares) in public filings.",
          type: "FACT",
          confidence: "0.99",
          source: "Schedule 13G filed Feb 10, 2026"
        },
        {
          id: 2,
          statement: "76,944 shares pass through to participants, leaving only 337,789 trustee-controlled shares.",
          type: "FACT",
          confidence: "0.97",
          source: "DEF 14A Proxy, Trust Agreement Sec 4.2"
        },
        {
          id: 3,
          statement: "Activist DAB Financial (384,847 shares) holds an immediate 47,058-share voting advantage over trustee.",
          type: "COMPUTATION",
          confidence: "0.99",
          source: "Schedule 13D / 13G Reconciliation"
        }
      ],
      debateRounds: [
        {
          round: 1,
          sellerArgument: "The 8.80% ESOP trust forms an insurmountable defensive voting block against outside activist solicitation.",
          sellerEvidence: "Form DEF 14A Proxy Statement",
          buyerCritique: "Statutory trust rules pass voting through to participants on allocated shares. Activist solicitation of uninstructed participants inverts the defensive buffer by 47,058 shares.",
          actionableRecommendation: "Engage retail proxy solicitation firm immediately and prepare a negotiated settlement framework."
        }
      ],
      cognitiveGates: [
        { name: "Domain Creep Isolation (ERISA vs Corporate)", status: "PASSED", description: "Verified statutory ESOP pass-through voting mechanics." },
        { name: "Inter-Document Contradiction Checker", status: "PASSED", description: "Reconciled Schedule 13G against Trust Agreement Exhibit 10.2." }
      ],
      fiduciaryGate: {
        riskVerdict: "Defensive proxy wall is mathematically inverted by 47,058 shares due to statutory pass-through voting rules.",
        boardRecommendation: "Settle with activist for minority board representation before contested proxy vote exposes defense deficit.",
        clauseCard: {
          deal: "First Seacoast Bancorp / Cambridge",
          clause: "Section 4.2 ESOP Trustee Voting Mandate",
          calculation: "384,847 Activist Shares - 337,789 Trustee Discretion Shares = 47,058 Share Deficit",
          trigger: "Activist proxy solicitation targeting individual ESOP participants.",
          impact: "Loss of contested board seats at annual shareholder meeting.",
          deviation: "Assumed trustee discretionary voting without checking statutory pass-through provisions.",
          source: "Form DEF 14A Exhibit 10.2"
        }
      },
      passthroughMemo: {
        summary: "Management claimed an 8.80% defensive ESOP block, but statutory reconciliation revealed 76,944 shares pass through to participants, creating an immediate voting deficit against activist DAB Financial.",
        trigger: "Activist solicitation of allocated ESOP participant shares.",
        amplifier: "Passive participants failing to return instructions do not default to management control under revised trust provisions.",
        propagationPaths: [
          "Management claims 8.80% defensive block in public disclosures",
          "Reconciliation reveals 76,944 passed-through participant shares",
          "Activist stake (8.16%) mathematically exceeds trustee sole discretion block (7.16%)",
          "Defensive proxy slate forced into negotiated settlement"
        ]
      }
    }
  }
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialCaseId?: string;
}

export function InteractiveBoardroomBriefing({ isOpen, onClose, initialCaseId = 'nims-gravitics' }: Props) {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(initialCaseId);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [activeDebateRound, setActiveDebateRound] = useState<number>(1);
  const [copiedSession, setCopiedSession] = useState<boolean>(false);

  const session = BRIEFING_SESSIONS[selectedCaseId] || BRIEFING_SESSIONS['nims-gravitics'];

  const SLIDE_LABELS = [
    "SLIDE 1 // INGESTION & TEMPORAL GUARDRAILS",
    "SLIDE 2 // CLAIM VERIFICATION DESK",
    "SLIDE 3 // MULTI-AGENT ADVERSARIAL DEBATE",
    "SLIDE 4 // FALSIFICATION COGNITIVE GATES",
    "SLIDE 5 // FIDUCIARY RELEASE GATE & CLAUSE CARD",
    "SLIDE 6 // MD PASSTHROUGH MEMORANDUM"
  ];

  const handleCopyReport = () => {
    const reportText = `RAVEN ADVERSARY • BRIEFING PLAYBACK SESSION REPORT
SESSION ID     : ${session.sessionId}
TIMESTAMP      : ${session.timestamp}
TARGET DEAL    : ${session.targetDeal}
AUDIT TYPE     : ${session.auditType}
STAGE          : ${session.stage}
INTEGRITY SCORE: ${session.integrityScore}%

KEY RISK VERDICT:
${session.slides.fiduciaryGate.riskVerdict}

BOARD RECOMMENDATION:
${session.slides.fiduciaryGate.boardRecommendation}

CLAUSE CALCULATION:
${session.slides.fiduciaryGate.clauseCard.calculation}`;

    navigator.clipboard.writeText(reportText);
    setCopiedSession(true);
    setTimeout(() => setCopiedSession(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-2xl overflow-hidden flex flex-col h-[94vh] max-h-[950px]">
        
        {/* Top Header Bar */}
        <div className="p-3.5 md:px-6 bg-[var(--bg-secondary)]/90 border-b border-[var(--border-color)] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="px-2 py-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30 font-mono text-[9px] uppercase tracking-widest font-bold flex items-center gap-1.5 shrink-0">
              <Terminal className="w-3.5 h-3.5 text-[var(--brand-cyan)]" />
              BRIEFING PLAYBACK // 7-MIN PROTOCOL
            </div>
            
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[var(--text-tertiary)] truncate">
              <span className="text-[var(--text-secondary)] font-bold truncate">{session.dealName}</span>
              <span>•</span>
              <span className="text-[var(--brand-cyan)]">SESSION #{session.sessionId}</span>
              <span>•</span>
              <span className="text-emerald-400">INTEGRITY: {session.integrityScore}%</span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyReport}
              className="px-3 py-1 border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] hover:border-[var(--brand-cyan)] font-mono text-[9px] uppercase font-bold tracking-wider flex items-center gap-1 transition-colors"
              title="Copy session telemetry"
            >
              {copiedSession ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span className="hidden md:inline">{copiedSession ? 'COPIED' : 'EXPORT REPORT'}</span>
            </button>
            <button 
              onClick={onClose}
              className="p-1 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors border border-transparent hover:border-[var(--border-color)]"
              aria-label="Close debrief window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Case Selector Strip */}
        <div className="bg-[var(--bg-primary)] border-b border-[var(--border-color)] px-4 py-2 flex items-center gap-2 overflow-x-auto text-[9px] font-mono shrink-0">
          <span className="text-[var(--text-tertiary)] uppercase font-bold shrink-0">AUDIT DOSSIER:</span>
          {Object.entries(BRIEFING_SESSIONS).map(([key, s]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedCaseId(key);
                setCurrentSlideIndex(0);
                setActiveDebateRound(1);
              }}
              className={`px-3 py-1 border transition-all shrink-0 uppercase font-bold tracking-wider ${
                selectedCaseId === key
                  ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)]'
                  : 'border-[var(--border-color)] bg-[var(--bg-secondary)]/40 text-[var(--text-secondary)] hover:border-[var(--border-highlight)]'
              }`}
            >
              {s.targetDeal.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Slide Step Navigation Bar */}
        <div className="bg-[var(--bg-secondary)]/30 border-b border-[var(--border-color)] px-4 py-2 shrink-0">
          <div className="grid grid-cols-6 gap-1.5">
            {SLIDE_LABELS.map((label, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`text-left p-2 border transition-all ${
                  currentSlideIndex === idx
                    ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 text-[var(--text-primary)] shadow-sm'
                    : idx < currentSlideIndex
                    ? 'border-[var(--border-color)] bg-[var(--bg-primary)]/40 text-[var(--text-secondary)]'
                    : 'border-transparent text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
                }`}
              >
                <div className="font-mono text-[8px] tracking-widest text-[var(--brand-cyan)] uppercase font-bold">
                  SLIDE 0{idx + 1}
                </div>
                <div className="text-[9px] font-bold truncate hidden lg:block uppercase mt-0.5">
                  {label.split(' // ')[1]}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Slide Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCaseId}-${currentSlideIndex}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="space-y-6"
            >
              {/* SLIDE 1: INGESTION & TEMPORAL GUARDRAILS */}
              {currentSlideIndex === 0 && (
                <div className="space-y-6">
                  <div className="border-b border-[var(--border-color)] pb-4 space-y-1">
                    <div className="font-mono text-[9px] text-[var(--brand-cyan)] uppercase tracking-widest font-bold flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5" /> SLIDE 1 // INGESTION & IMMUTABILITY VERIFICATION
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
                      Filing Immutability & Temporal Guardrails
                    </h2>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Cryptographic accession checks and chronological boundary locks prevent forward-looking hindsight leakage.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 font-mono text-xs">
                    <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-2">
                      <div className="text-[10px] text-[var(--brand-cyan)] font-bold uppercase tracking-wider">
                        INGESTION CRYPTOGRAPHIC PROVENANCE
                      </div>
                      <div className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                        <div className="flex items-center justify-between py-1 border-b border-[var(--border-color)]/50">
                          <span>Source Filing Hash Check:</span>
                          <span className="text-emerald-400 font-bold">{session.slides.ingestion.hashCheck}</span>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b border-[var(--border-color)]/50">
                          <span>Sentence Boundary Chunking:</span>
                          <span className="text-emerald-400 font-bold">{session.slides.ingestion.chunking}</span>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b border-[var(--border-color)]/50">
                          <span>Audit Classification:</span>
                          <span className="text-[var(--brand-cyan)] font-bold">{session.auditType}</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span>Pre-Event Integrity Score:</span>
                          <span className="text-emerald-400 font-bold">{session.integrityScore}% Confirmed</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-2">
                      <div className="text-[10px] text-[var(--brand-cyan)] font-bold uppercase tracking-wider">
                        CRITICAL TEMPORAL BOUNDARIES
                      </div>
                      <div className="space-y-2.5">
                        {session.slides.ingestion.guardrails.map((g, i) => (
                          <div key={i} className="p-2.5 bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-1">
                            <div className="flex items-center justify-between text-[10px] font-bold">
                              <span className="text-[var(--text-primary)]">{g.title}</span>
                              <span className="text-amber-400">[{g.date}]</span>
                            </div>
                            <p className="text-[11px] font-sans text-[var(--text-secondary)] leading-relaxed">
                              {g.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 2: CLAIM VERIFICATION DESK */}
              {currentSlideIndex === 1 && (
                <div className="space-y-6">
                  <div className="border-b border-[var(--border-color)] pb-4 space-y-1">
                    <div className="font-mono text-[9px] text-[var(--brand-cyan)] uppercase tracking-widest font-bold flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> SLIDE 2 // THE CLAIM VERIFICATION DESK
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
                      Epistemic Claim Adjudication Matrix
                    </h2>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Every material transaction assertion is mathematically categorized with verified accession numbers.
                    </p>
                  </div>

                  <div className="space-y-3 font-mono">
                    {session.slides.claims.map((claim) => (
                      <div 
                        key={claim.id} 
                        className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-2"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-color)]/50 pb-2">
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 text-[9px] font-bold border ${
                              claim.type === 'FACT' 
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                                : claim.type === 'COMPUTATION'
                                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                                : claim.type === 'INFERENCE'
                                ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                                : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                            }`}>
                              [{claim.type}]
                            </span>
                            <span className="text-[10px] text-[var(--text-tertiary)]">
                              CLAIM #{claim.id} • CONFIDENCE: {claim.confidence}
                            </span>
                          </div>
                          <span className="text-[9px] text-[var(--brand-cyan)] uppercase">
                            SRC: {claim.source}
                          </span>
                        </div>

                        <p className="text-xs font-sans text-[var(--text-primary)] leading-relaxed pt-1">
                          {claim.statement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE 3: MULTI-AGENT ADVERSARIAL DEBATE */}
              {currentSlideIndex === 2 && (
                <div className="space-y-6">
                  <div className="border-b border-[var(--border-color)] pb-4 space-y-1">
                    <div className="font-mono text-[9px] text-[var(--brand-cyan)] uppercase tracking-widest font-bold flex items-center gap-2">
                      <GitBranch className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> SLIDE 3 // MULTI-AGENT ADVERSARIAL DEBATE
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
                          Red-Team Stress Simulation & Cross-Examination
                        </h2>
                        <p className="text-xs text-[var(--text-secondary)]">
                          Adversarial round debate exposing contractual blindspots and asymmetric risk shifts.
                        </p>
                      </div>

                      {/* Debate Round Buttons */}
                      <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold">
                        {session.slides.debateRounds.map((r) => (
                          <button
                            key={r.round}
                            onClick={() => setActiveDebateRound(r.round)}
                            className={`px-3 py-1.5 border transition-all ${
                              activeDebateRound === r.round
                                ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)] text-black'
                                : 'border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:border-[var(--brand-cyan)]'
                            }`}
                          >
                            ROUND 0{r.round}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Active Debate Round View */}
                  {(() => {
                    const round = session.slides.debateRounds.find(r => r.round === activeDebateRound) || session.slides.debateRounds[0];
                    return (
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6 items-stretch">
                          
                          {/* Seller's Position */}
                          <div className="p-5 border border-emerald-500/20 bg-emerald-500/5 space-y-3 flex flex-col justify-between">
                            <div className="space-y-2">
                              <div className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5" /> SELLER'S / PROMOTER'S POSITION
                              </div>
                              <p className="text-xs font-sans text-[var(--text-secondary)] leading-relaxed">
                                "{round.sellerArgument}"
                              </p>
                            </div>
                            <div className="p-3 bg-[var(--bg-primary)] border border-[var(--border-color)] font-mono text-[9px] text-[var(--text-tertiary)] mt-3">
                              <span className="text-[var(--brand-cyan)] font-bold block mb-1">CITED PRIMARY EVIDENCE:</span>
                              {round.sellerEvidence}
                            </div>
                          </div>

                          {/* Buyer's Counter-Position */}
                          <div className="p-5 border border-red-500/20 bg-red-500/5 space-y-3 flex flex-col justify-between">
                            <div className="space-y-2">
                              <div className="font-mono text-[10px] text-red-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                                <AlertTriangle className="w-3.5 h-3.5" /> RAVEN ADVERSARIAL CRITIQUE / COUNTER-AUDIT
                              </div>
                              <p className="text-xs font-sans text-[var(--text-secondary)] leading-relaxed">
                                "{round.buyerCritique}"
                              </p>
                            </div>
                            <div className="p-3 bg-red-950/20 border border-red-500/30 font-mono text-[10px] text-red-300 mt-3">
                              <span className="text-red-400 font-bold block mb-1">ACTIONABLE RECOMMENDATION:</span>
                              {round.actionableRecommendation}
                            </div>
                          </div>

                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* SLIDE 4: FALSIFICATION COGNITIVE GATES */}
              {currentSlideIndex === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-[var(--border-color)] pb-4 space-y-1">
                    <div className="font-mono text-[9px] text-[var(--brand-cyan)] uppercase tracking-widest font-bold flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> SLIDE 4 // FALSIFICATION COGNITIVE GATES
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
                      10 Algorithmic Anti-Hallucination Cognitive Checks
                    </h2>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Raven executes strict heuristic checks to eradicate false positives and enforce rigorous factual bounds.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 font-mono text-xs">
                    {session.slides.cognitiveGates.map((gate, i) => (
                      <div 
                        key={i} 
                        className="p-3.5 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 flex flex-col justify-between space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-[var(--text-primary)] uppercase">
                            Check 0{i + 1}: {gate.name}
                          </span>
                          <span className="px-2 py-0.5 text-[8px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            {gate.status}
                          </span>
                        </div>
                        <p className="text-[10px] text-[var(--text-tertiary)] font-sans leading-relaxed">
                          {gate.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE 5: FIDUCIARY RELEASE GATE & CLAUSE CARD */}
              {currentSlideIndex === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-[var(--border-color)] pb-4 space-y-1">
                    <div className="font-mono text-[9px] text-[var(--brand-cyan)] uppercase tracking-widest font-bold flex items-center gap-2">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-400" /> SLIDE 5 // THE FIDUCIARY RELEASE GATE
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
                      Vetted Risk Verdict & The Clause Pressure Card
                    </h2>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Only vetted, evidence-supported legal assertions are cleared for executive presentation.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Key Risk & Board Levers */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-5 border border-red-500/20 bg-red-500/5 space-y-2 font-mono">
                        <div className="text-[10px] text-red-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5" /> KEY STRUCTURAL RISK VERDICT
                        </div>
                        <p className="text-xs font-sans text-[var(--text-secondary)] leading-relaxed">
                          {session.slides.fiduciaryGate.riskVerdict}
                        </p>
                      </div>

                      <div className="p-5 border border-emerald-500/20 bg-emerald-500/5 space-y-2 font-mono">
                        <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5" /> ACTIONABLE BOARDROOM RECOMMENDATION
                        </div>
                        <p className="text-xs font-sans text-[var(--text-secondary)] leading-relaxed">
                          {session.slides.fiduciaryGate.boardRecommendation}
                        </p>
                      </div>
                    </div>

                    {/* ASCII Style Clause Pressure Card */}
                    <div className="p-5 border border-[var(--brand-cyan)]/40 bg-[var(--bg-primary)] space-y-4 font-mono text-xs">
                      <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2 text-[10px] text-[var(--brand-cyan)] font-bold uppercase tracking-wider">
                        <span>RAVEN TRANSACTION PRESSURE CARD (THE CLAUSE CARD)</span>
                        <span>OFFICIAL COMMIT ARTIFACT</span>
                      </div>

                      <div className="space-y-2 text-[11px] leading-relaxed">
                        <div className="grid sm:grid-cols-4 gap-2">
                          <span className="text-[var(--text-tertiary)] uppercase">DEAL:</span>
                          <span className="sm:col-span-3 text-[var(--text-primary)] font-bold">{session.slides.fiduciaryGate.clauseCard.deal}</span>
                        </div>
                        <div className="grid sm:grid-cols-4 gap-2">
                          <span className="text-[var(--text-tertiary)] uppercase">CLAUSE:</span>
                          <span className="sm:col-span-3 text-[var(--brand-cyan)] font-bold">{session.slides.fiduciaryGate.clauseCard.clause}</span>
                        </div>
                        <div className="grid sm:grid-cols-4 gap-2">
                          <span className="text-[var(--text-tertiary)] uppercase">CALCULATION:</span>
                          <span className="sm:col-span-3 text-amber-400 font-bold">{session.slides.fiduciaryGate.clauseCard.calculation}</span>
                        </div>
                        <div className="grid sm:grid-cols-4 gap-2">
                          <span className="text-[var(--text-tertiary)] uppercase">TRIGGER:</span>
                          <span className="sm:col-span-3 text-[var(--text-secondary)]">{session.slides.fiduciaryGate.clauseCard.trigger}</span>
                        </div>
                        <div className="grid sm:grid-cols-4 gap-2">
                          <span className="text-[var(--text-tertiary)] uppercase">IMPACT:</span>
                          <span className="sm:col-span-3 text-[var(--text-secondary)]">{session.slides.fiduciaryGate.clauseCard.impact}</span>
                        </div>
                        <div className="grid sm:grid-cols-4 gap-2">
                          <span className="text-[var(--text-tertiary)] uppercase">DEVIATION:</span>
                          <span className="sm:col-span-3 text-[var(--text-secondary)]">{session.slides.fiduciaryGate.clauseCard.deviation}</span>
                        </div>
                        <div className="grid sm:grid-cols-4 gap-2">
                          <span className="text-[var(--text-tertiary)] uppercase">SOURCE:</span>
                          <span className="sm:col-span-3 text-[var(--text-tertiary)] font-bold">{session.slides.fiduciaryGate.clauseCard.source}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 6: MD PASSTHROUGH MEMORANDUM */}
              {currentSlideIndex === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-[var(--border-color)] pb-4 space-y-1">
                    <div className="font-mono text-[9px] text-[var(--brand-cyan)] uppercase tracking-widest font-bold flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> SLIDE 6 // MD PASSTHROUGH MEMORANDUM
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
                      Managing Director Passthrough Synthesis & Cascade
                    </h2>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Direct executive briefing ready for investment committee and boardroom presentation.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-4">
                      <div className="font-mono text-[10px] text-[var(--brand-cyan)] font-bold uppercase tracking-wider">
                        EXECUTIVE TRANSACTION SYNTHESIS
                      </div>
                      <p className="text-xs md:text-sm font-sans text-[var(--text-primary)] leading-relaxed">
                        {session.slides.passthroughMemo.summary}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-[var(--border-color)] font-mono text-xs">
                        <div className="p-3 bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-1">
                          <div className="text-[9px] text-amber-400 font-bold uppercase">PRESSURE TRIGGER:</div>
                          <p className="text-[11px] font-sans text-[var(--text-secondary)] leading-relaxed">{session.slides.passthroughMemo.trigger}</p>
                        </div>
                        <div className="p-3 bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-1">
                          <div className="text-[9px] text-red-400 font-bold uppercase">PRESSURE AMPLIFIER:</div>
                          <p className="text-[11px] font-sans text-[var(--text-secondary)] leading-relaxed">{session.slides.passthroughMemo.amplifier}</p>
                        </div>
                      </div>
                    </div>

                    {/* Propagation Path */}
                    <div className="space-y-3 font-mono">
                      <div className="text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider font-bold">
                        PROPAGATION CASCADE STAGES:
                      </div>
                      <div className="space-y-2">
                        {session.slides.passthroughMemo.propagationPaths.map((path, idx) => (
                          <div key={idx} className="p-3 bg-[var(--bg-secondary)]/40 border border-[var(--border-color)] flex items-start gap-3 text-xs">
                            <span className="px-2 py-0.5 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] font-bold text-[9px] shrink-0">
                              STAGE 0{idx + 1}
                            </span>
                            <span className="text-[var(--text-secondary)] font-sans">{path}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Control & Action Bar */}
        <div className="p-3.5 md:px-6 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlideIndex(0)}
              className="p-2 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title="Reset slide to beginning"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <div className="font-mono text-xs text-[var(--text-tertiary)] pl-2">
              Slide {currentSlideIndex + 1} of {SLIDE_LABELS.length}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentSlideIndex(prev => Math.max(0, prev - 1))}
              disabled={currentSlideIndex === 0}
              className="px-3.5 py-2 border border-[var(--border-color)] text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Prev
            </button>
            
            {currentSlideIndex < SLIDE_LABELS.length - 1 ? (
              <button
                onClick={() => setCurrentSlideIndex(prev => prev + 1)}
                className="px-5 py-2 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-1.5"
              >
                Next Slide <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <a
                href="/transaction-review"
                onClick={onClose}
                className="px-5 py-2 bg-[var(--brand-cyan)] text-black text-xs font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-1.5"
              >
                Order Live Transaction Review <CheckCircle2 className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
