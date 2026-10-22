import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Terminal, ArrowRight, ShieldCheck, CheckCircle2, Scale, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  role: 'bot' | 'user';
  content: string;
  actionLink?: {
    text: string;
    url: string;
  };
}

export function Corvus() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'bot', 
      content: 'Terminal online. I am Corvus—Raven Adversary’s transaction intelligence desk. We omit marketing pleasantries: if you are evaluating an active M&A transaction, contested vote, covenant exposure, or arb spread, ask with precision. Time is enterprise value.' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateResponse = (text: string): { content: string; actionLink?: { text: string; url: string } } => {
    const lower = text.toLowerCase().trim();

    // 01. Baldwin Group (BWIN) / $7.7B Take-Private
    if (lower.includes('bwin') || lower.includes('baldwin') || lower.includes('square acquisition') || (lower.includes('tra') && lower.includes('settlement'))) {
      return {
        content: "In The Baldwin Group (BWIN / $7.7B Take-Private by Sequence AI & Dell Family Office), Raven identified an actionable structural vulnerability: (1) Omission of a non-waivable majority-of-the-minority stockholder condition in the PREM14A (Section 1), while Class B insiders roll over ~7.3% equity and extract an accelerated $298.45M TRA cash settlement; (2) Failure to secure MFW dual-cleansing from inception exposes the transaction to Delaware Entire Fairness review rather than deferential Business Judgment Review; (3) Creating acute DGCL § 262 appraisal arbitrage and shareholder breach of fiduciary duty exposure.",
        actionLink: { text: "Inspect BWIN Clause Card & Teardown", url: "/#live-deals" }
      };
    }

    // 02. Option Care Health (OPCH) / $5.8B Buyout
    if (lower.includes('opch') || lower.includes('option care') || lower.includes('onyx') || lower.includes('mckesson') || lower.includes('cd&r') || lower.includes('several liability') || lower.includes('8.03')) {
      return {
        content: "In Option Care Health (OPCH / $5.8B Buyout by CD&R & McKesson), Raven’s engine flagged two critical contract traps: (1) Section 8.03(c) establishes several (non-joint) liability on the $291.93M Parent Breakup Fee—if McKesson (~48.72% equity check) fails to fund or defaults, target has zero contractual step-in recourse against CD&R; (2) The transaction relies on a standard 'reasonable best efforts' antitrust covenant with no mandatory divestiture obligation, leaving the spread highly vulnerable to FTC/DOJ vertical foreclosure scrutiny.",
        actionLink: { text: "Inspect OPCH Clause Card & Teardown", url: "/#live-deals" }
      };
    }

    // 03. Integer Holdings (ITGR) / $4.3B KKR Buyout
    if (lower.includes('itgr') || lower.includes('integer') || lower.includes('kkr') || lower.includes('armstrong') || lower.includes('blind auction') || (lower.includes('revlon') && lower.includes('auction'))) {
      return {
        content: "In Integer Holdings (ITGR / $4.3B KKR Buyout), Raven detected: (1) An abrupt 60-minute exploding final auction window on July 30, 2026, compressing bidding and creating significant Revlon market-check exposure under Delaware law; (2) KKR locked up a $154.0M break fee ($4.53/sh) and a 13.98% physical voting position via Tarheel Parent; (3) Under DGCL § 251, adoption requires an absolute majority of all outstanding shares, meaning every uninstructed broker non-vote operates mathematically as a vote AGAINST the deal.",
        actionLink: { text: "Inspect ITGR Clause Card & Teardown", url: "/#live-deals" }
      };
    }

    // 04. Penske Automotive Group (PAG) / $440M / Roger Penske
    if (lower.includes('pag') || lower.includes('penske') || lower.includes('motown') || lower.includes('roger penske') || lower.includes('votes cast') || lower.includes('144')) {
      return {
        content: "In Penske Automotive Group (PAG / Motown Acquisition Corp. controller buyout), Raven revealed: (1) Defective MFW cleansing formulation conditioning minority approval on a 'majority of votes cast by disinterested stockholders' under DGCL § 144 rather than outstanding shares; (2) Under 30% minority turnout, the deal can pass with affirmative votes from just 15.0% of the public float (4.1% of common stock); (3) Exposes the transaction to Delaware Chancery Entire Fairness review regarding related-party dealership leasebacks and Mitsui equity commitments.",
        actionLink: { text: "Inspect PAG 16-Chapter Audit", url: "/#live-deals" }
      };
    }

    // 05. MFW Dual Cleansing & Delaware Entire Fairness
    if (lower.includes('mfw') || lower.includes('entire fairness') || lower.includes('kahn') || lower.includes('dual cleansing') || lower.includes('special committee')) {
      return {
        content: "Under Kahn v. M&F Worldwide Corp. (MFW), a controller buyout receives deferential Business Judgment Review only if the controller conditioned the transaction ab initio (from the very first offer) on BOTH: (1) negotiation and approval by an independent, fully empowered Special Committee, and (2) an uncoerced, non-waivable majority-of-the-minority vote. Raven audits Schedule 13E-3s, board minutes, and proxy timelines to catch the moment a controller slips—such as omitting the vote condition in the initial letter, extracting side-car TRA cash windfalls, or conditioning on 'votes cast' rather than outstanding shares.",
        actionLink: { text: "View Litigation & Appraisal Desk", url: "/#litigation-arbitrage" }
      };
    }

    // 06. Tax Receivable Agreements (TRA) & Side-Car Cash Windfalls
    if (lower.includes('tax receivable agreement') || lower.includes('tra') || lower.includes('side-car') || lower.includes('windfall') || lower.includes('up-c')) {
      return {
        content: "In Up-C structures, pre-IPO insiders hold Tax Receivable Agreements allowing them to capture 85%+ of future tax deductions. In a take-private, sponsors often pay tens or hundreds of millions in accelerated cash to extinguish the TRA (e.g., $298.45M in BWIN). Raven tests whether this cash constitutes a non-ratable benefit under Delaware Chancery precedent (e.g. Frank v. Elpaso, CBS Corp.) that breaches fiduciary parity relative to public Class A stockholders.",
        actionLink: { text: "Review TRA Forensic Mechanics", url: "/#litigation-arbitrage" }
      };
    }

    // 07. Appraisal Arbitrage (DGCL § 262)
    if (lower.includes('appraisal') || lower.includes('262') || lower.includes('dissent') || lower.includes('fair value')) {
      return {
        content: "DGCL § 262 entitles dissenting stockholders to seek a judicial appraisal of 'fair value' in cash, accruing statutory interest at 5.0% over the Federal Reserve discount rate compounded quarterly. Raven reconstructs: (1) Contractual appraisal condition caps (e.g. 5% in HBT/TYFG); (2) Perfection risks and beneficial holder signature strictures under amended DGCL § 262; and (3) Fundamental valuation floor vs. squeeze-out merger price deltas.",
        actionLink: { text: "Inspect Appraisal Arbitrage Desk", url: "/#litigation-arbitrage" }
      };
    }

    // 08. Revlon Duties & Truncated Auction Scrutiny
    if (lower.includes('revlon') || lower.includes('auction') || lower.includes('market check') || lower.includes('window shop') || lower.includes('go-shop')) {
      return {
        content: "Under Revlon, Inc. v. MacAndrews & Forbes Holdings, directors in a cash change-of-control transaction owe a fiduciary duty to maximize immediate shareholder value. Raven cross-references S-4 deal chronologies against Form 8-K exhibits to uncover: (1) Arbitrary compression of bidding rounds (e.g., ITGR's 60-minute window); (2) Favoritism shown to incumbent management-backed sponsors; and (3) Preclusive deal protections (breakup fees >3.75%, information matching rights, and non-solicit lockups).",
        actionLink: { text: "Inspect Litigation Benchmarks", url: "/#litigation-arbitrage" }
      };
    }

    // 09. Broker Non-Votes & DGCL § 251 Passage Drag
    if (lower.includes('broker non-vote') || lower.includes('251') || lower.includes('unvoted') || lower.includes('passage risk') || lower.includes('shareholder vote')) {
      return {
        content: "Unlike routine governance proposals where broker non-votes do not count toward the denominator, statutory mergers under DGCL § 251 require affirmative approval from an absolute majority of all outstanding shares. Therefore, every unvoted share or broker non-vote acts as a vote AGAINST the transaction. Raven models shareholder register composition, 13F concentration, retail percentage, and proxy solicitor voter turnout elasticity to identify silent deal failure risks.",
        actionLink: { text: "View Deal Pressure Models", url: "/deal-intelligence" }
      };
    }

    // 10. Regulatory & Antitrust Covenants (HSR, DOJ, FTC, CFIUS)
    if (lower.includes('antitrust') || lower.includes('hsr') || lower.includes('ftc') || lower.includes('doj') || lower.includes('cfius') || lower.includes('hell or high water') || lower.includes('burdensome condition')) {
      return {
        content: "Raven dissects the contractual regulatory risk allocation: (1) 'Hell or High Water' vs. 'Reasonable Best Efforts'; (2) Burdensome Condition covenants (capping divestitures at a fixed EBITDA or revenue threshold); and (3) Reverse Termination Fee triggers. In Option Care Health (OPCH), the absence of a mandatory divestiture commitment paired with McKesson's vertical market share creates severe unpriced timeline drag.",
        actionLink: { text: "Inspect OPCH Antitrust Profile", url: "/#live-deals" }
      };
    }

    // 11. Law Firm / Legal Counsel comparison (Objection B)
    if (lower.includes('law firm') || lower.includes('legal counsel') || lower.includes('lawyer') || lower.includes('wachtell') || lower.includes('skadden') || lower.includes('outside counsel') || lower.includes('cravath') || lower.includes('kirkland')) {
      return {
        content: "Raven does not replace your outside counsel or internal investment team. Your outside counsel provides legal analysis: contractual enforceability, Delaware DGCL statutory opinions, and negotiation tactics. Your investment team evaluates portfolio hurdle rates. Raven operates directly in the gap between them: we reconstruct the mathematical and regulatory state machine across dozens of public filings (S-4, 10-K, 13D, 8-K exhibits) to prove where covenants, debt maturities, proration math, and voting thresholds collide under stress. Litigators use Raven's line-numbered citation registry as instant work product.",
        actionLink: { text: "Review 10-Question Guide", url: "/#buyer-guide" }
      };
    }

    // 12. Bloomberg / AlphaSense comparison
    if (lower.includes('bloomberg') || lower.includes('alphasense') || lower.includes('factset') || lower.includes('bamsec') || lower.includes('tegus') || lower.includes('search tool')) {
      return {
        content: "Bloomberg shows you what the terms are. AlphaSense finds keywords across filings. Neither models how terms collide under stress. A search engine will not connect Note 7 of a 10-Q with Schedule 1.5 of an S-4 to prove Net Cash is mathematically negative, nor will it calculate that an anchor shareholder's cash lock forces a 66.7% retail proration squeeze. Raven reconstructs the transaction state machine from primary evidence.",
        actionLink: { text: "Inspect Technical Comparison", url: "/comparison" }
      };
    }

    // 13. Pricing / 3-Tier Commercial Architecture
    if (lower.includes('15,000') || lower.includes('15000') || lower.includes('150,000') || lower.includes('150000') || lower.includes('37,500') || lower.includes('37500') || lower.includes('10,000') || lower.includes('10000') || lower.includes('2,499') || lower.includes('2499') || lower.includes('tier') || lower.includes('cost') || lower.includes('pricing') || lower.includes('what do i get') || lower.includes('deliverable') || lower.includes('package') || lower.includes('price')) {
      return {
        content: "Raven operates across three institutional commercial tiers: (1) Tier I // Live-Deal Evaluation Pilot ($0 Complimentary): A 48-hour partner-level forensic stress test on 1 active public transaction (8-K / S-4 / PREM14A) selected by your Managing Director or Litigation Partner, delivering a 1-page clause card and 6-vector risk score; (2) Tier II // Single-Transaction Forensic Sprint ($15,000 standard / $10,000 first-time pilot rate): Rapid 60-minute turnaround from filing, delivering the full 8-part package including the 16-chapter statutory dossier, clause card deck, and custom adversarial directive testing; and (3) Tier III // Dedicated Desk Retainer ($150,000/year or $37,500/quarter): Continuous coverage on up to 5 concurrent live transactions, real-time filing delta alerts (PREM14A to DEFM14A), priority 60-min SLA, and direct senior analyst redline consultation.",
        actionLink: { text: "Review Commercial Architecture & Tiers", url: "/transaction-review" }
      };
    }

    // 14. Turnaround Time / SLA
    if (lower.includes('turnaround') || lower.includes('sla') || lower.includes('how fast') || lower.includes('speed') || lower.includes('time') || lower.includes('60 min') || lower.includes('hour')) {
      return {
        content: "Speed is deal capital. Raven delivers the 1-Page Contractual Clause Card and 2-Page Executive Risk Brief within 60 minutes of target SEC filing (Form 8-K Item 1.01, PREM14A, or S-4). The full 16-Chapter Statutory Forensic Dossier is delivered same-day. If you have an active ticker right now, drop it into the quick intake bar above.",
        actionLink: { text: "Run Quick Ticker Intake", url: "/#contact" }
      };
    }

    // 15. Tri-County / HBT Financial Real Finding
    if (lower.includes('tri-county') || lower.includes('hbt') || lower.includes('tyfg') || lower.includes('castle creek')) {
      return {
        content: "In our audit of the HBT / Tri-County Financial Group transaction (Audit ID: inv_1789583158804), Raven proved four critical findings: (1) Castle Creek Capital is contractually bound to elect 100% cash for its 563,064 shares, consuming $39.98M (66.7%) of the $59.95M cash pool and triggering acute retail proration; (2) Closing is conditioned on the complete disposition and liability release of First State Mortgage Services (FSM); (3) DGCL § 262 appraisal rights are capped at exactly 5.0% (121,385 shares); and (4) Secondary press summaries cited a June 30, 2027 outside date that is completely unestablished in the filed S-4/A proxy text.",
        actionLink: { text: "Open Interactive Dossier Viewer", url: "/#sample-assessment" }
      };
    }

    // 16. Confidentiality, Front-Running & Information Leakage
    if (lower.includes('front-run') || lower.includes('frontrun') || lower.includes('leak') || lower.includes('confidential') || lower.includes('ticker') || lower.includes('trade ahead') || lower.includes('privacy') || lower.includes('nda')) {
      return {
        content: "Raven enforces strict institutional informational hygiene: (1) Anti-Front-Running Policy: Raven never trades securities of companies under active client engagement; (2) Zero MNPI: we analyze only public regulatory disclosures. We never ask for, nor accept, non-public data room access; (3) Client confidentiality: search inquiries, tickers, and instructions are treated as strictly confidential and never published, shared, or commercialized.",
        actionLink: { text: "View Procurement & Compliance Policies", url: "/governance" }
      };
    }

    // 17. Case Studies (FSEA, NIMS)
    if (lower.includes('fsea') || lower.includes('seacoast') || lower.includes('esop')) {
      return {
        content: "In First Seacoast Bancorp (FSEA), management asserted an 8.80% defensive ESOP block (414,733 shares). Raven audited the Trust Agreement and discovered 76,944 shares pass through to participants, leaving only 337,789 trustee-controlled shares against activist DAB Financial’s 384,847 shares—exposing an unhedged 47,058-share voting deficit.",
        actionLink: { text: "View FSEA Case Study", url: "/case-studies/first-seacoast" }
      };
    }
    if (lower.includes('nims') || lower.includes('gravitics')) {
      return {
        content: "In NIMS / Gravitics (Session ID: 1787070786933), Raven identified a lethal $41.1M pre-closing liquidity cliff: closing was conditioned on a mandatory $40M public equity offering and Nasdaq listing by September 30, 2026, colliding with a $300,000 maturity cliff on insider notes and a 22% default coupon ratchet on Defender bridge notes.",
        actionLink: { text: "View NIMS Dossier", url: "/case-studies/nims-gravitics" }
      };
    }

    // 18. Who does the work / Key-Person Dependency
    if (lower.includes('who does the work') || lower.includes('who is doing the work') || lower.includes('team') || lower.includes('analyst') || lower.includes('abhishek') || lower.includes('founder')) {
      return {
        content: "Raven is a founder-led specialist intelligence firm. Analytical architecture, multi-agent debate pipelines, and final report sign-offs are conducted directly by founder and principal analyst Abhishek Tanwar. We do not invent fictional analyst desks or outsource audits. Every deliverable is governed by documented, repeatable workflows and claim-level SEC citations.",
        actionLink: { text: "Inspect Leadership & Accountability", url: "/#leadership" }
      };
    }

    // 19. How to Test Before Paying
    if (lower.includes('test') || lower.includes('free') || lower.includes('start') || lower.includes('how to start') || lower.includes('pilot') || lower.includes('try')) {
      return {
        content: "You do not need to wire funds to test Raven. Submit your target ticker, CIK, or deal identifier through our top quick-intake bar. Our desk will review SEC EDGAR filing depth and deliver a complimentary 1-Page Clause Card within 60 minutes. Zero cost, zero financial obligation.",
        actionLink: { text: "Submit for Complimentary Clause Card", url: "/#contact" }
      };
    }

    // 20. Corwin Cleansing & Disclosure Deficiencies
    if (lower.includes('corwin') || lower.includes('cleansing') || lower.includes('informed vote') || lower.includes('uncoerced')) {
      return {
        content: "Under Corwin v. KKR Financial Holdings, an uncoerced, fully informed vote of disinterested stockholders restores Business Judgment Review even in transactions subject to enhanced scrutiny (Revlon). However, Corwin cleansing fails if the proxy contains material disclosure deficiencies. Raven audits S-4 and DEFM14A proxies to uncover fatal omissions that defeat Corwin at the motion to dismiss stage: (1) Undisclosed financial advisor conflicts or contingent debt-placement fees; (2) Omitted management cash-flow projections or altered terminal growth rates; and (3) Concealed preliminary bid indications or side rollover discussions.",
        actionLink: { text: "Inspect M&A Litigation Desk", url: "/#litigation-arbitrage" }
      };
    }

    // 21. Reverse Termination Fees (RTF) & Specific Performance / Financing Outs
    if (lower.includes('reverse termination') || lower.includes('rtf') || lower.includes('specific performance') || lower.includes('debt financing') || lower.includes('snow phipps') || lower.includes('hexion')) {
      return {
        content: "In financial sponsor buyouts, reverse termination fee (RTF) and specific performance clauses dictate whether the buyer can walk away for a fee or be compelled to close. Raven audits the tripartite nexus between the Merger Agreement, Equity Commitment Letter (ECL), and Debt Commitment Letter (DCL): (1) Does the target have the right to seek specific performance of the equity check only if debt financing has funded (e.g. Snow Phipps v. KKR)?; (2) Is the RTF the target's exclusive remedy, effectively functioning as an unpriced walkaway call option (5%–7% fee)?; and (3) Are syndicate members bound by several or joint liability (e.g. OPCH Section 8.03(c))?",
        actionLink: { text: "Inspect OPCH Several Liability Teardown", url: "/#live-deals" }
      };
    }

    // 22. Deal Protections, Breakup Fees & Unocal / Preclusion Standard
    if (lower.includes('breakup fee') || lower.includes('break fee') || lower.includes('termination fee') || lower.includes('unocal') || lower.includes('preclusive') || lower.includes('deal protection') || lower.includes('3.75%') || lower.includes('fiduciary out')) {
      return {
        content: "Under Delaware Unocal/Unitrin review, deal protection devices cannot be preclusive or coercive. Delaware Chancery typically views target breakup fees between 2.5% and 3.75% of transaction equity value as standard. Raven flags structural deal protection traps: (1) Combined fees (target termination fee + expense reimbursement + commercial agreement breakage) exceeding 4.0%; (2) Sizing fees against enterprise value rather than equity value; and (3) Force-the-Vote provisions under DGCL § 146 compelling a shareholder meeting even if the board changes its recommendation for an Intervening Event.",
        actionLink: { text: "Review ITGR $154M Breakup Fee Audit", url: "/#live-deals" }
      };
    }

    // 23. Matching Rights & Superior Proposals
    if (lower.includes('match right') || lower.includes('matching right') || lower.includes('superior proposal') || lower.includes('topping bid') || lower.includes('window shop') || lower.includes('no-shop')) {
      return {
        content: "Information and matching rights can severely chill topping bids in contested M&A. Raven dissects the contractual match mechanism: (1) Initial match duration (typically 4–5 business days) vs. successive match periods (2–3 business days for each material price revision); (2) Mandatory disclosure of competitor identities and full unredacted financing packages to the incumbent; and (3) Whether the match right operates dynamically across cash-vs-stock alternative structures.",
        actionLink: { text: "Inspect Contractual Clause Benchmarks", url: "/transaction-review" }
      };
    }

    // 24. Material Adverse Effect (MAE / MAC) Standards
    if (lower.includes('mae') || lower.includes('mac') || lower.includes('material adverse effect') || lower.includes('material adverse change') || lower.includes('akorn') || lower.includes('fresenius') || lower.includes('ibp') || lower.includes('walkaway')) {
      return {
        content: "Under Delaware Supreme Court precedent (Akorn v. Fresenius, IBP v. Tyson), proving a Material Adverse Effect requires showing durationally significant deterioration affecting the long-term earning potential of the target over years, not months. Raven audits the MAE carve-outs and disproportionate impact qualifiers: (1) Exclusions for general economic, industry, or geopolitical downturns; (2) Cyberattack, clinical trial, or tariff carve-backs; and (3) Whether an interim breach of ordinary course covenants (DGCL § 251) gives the buyer termination leverage before closing.",
        actionLink: { text: "Inspect Regulatory Risk Index", url: "/raven-engine" }
      };
    }

    // 25. Fairness Opinions, DCF & Valuation Manipulation
    if (lower.includes('fairness opinion') || lower.includes('dcf') || lower.includes('discount rate') || lower.includes('wacc') || lower.includes('terminal growth') || lower.includes('valuation') || lower.includes('banker fee')) {
      return {
        content: "Raven conducts line-by-line financial forensic checks on investment banking fairness opinions in S-4/DEFM14A filings: (1) Recalculating Discounted Cash Flow (DCF) sensitivity across WACC and terminal growth rates (testing whether a 50 bps change swings fair value past the offer price); (2) Uncovering omitted peer comps or cherry-picked transaction multiples; and (3) Auditing whether the board excluded management's aggressive 5-year growth forecasts in favor of conservative proxy-cleansed numbers to make a low buyout premium appear adequate.",
        actionLink: { text: "Inspect Sample Assessment Ledger", url: "/#sample-assessment" }
      };
    }

    // 26. DGCL § 220 Books and Records Inspections
    if (lower.includes('220') || lower.includes('books and records') || lower.includes('credible basis') || lower.includes('pre-suit')) {
      return {
        content: "Under DGCL § 220, stockholders have the statutory right to inspect board books and records upon showing a 'credible basis' to suspect fiduciary wrongdoing or breach of duty of loyalty. M&A litigators use Raven’s 16-chapter forensic dossiers as primary evidentiary foundations: we isolate specific chronological gaps between board minutes, special committee deliberations, and Form 8-K disclosures that satisfy the Delaware Court of Chancery’s credible basis threshold.",
        actionLink: { text: "View Litigation & Appraisal Arbitrage Desk", url: "/#litigation-arbitrage" }
      };
    }

    // 27. Working Capital Pegs, Collars & Locked-Box True-Ups
    if (lower.includes('working capital') || lower.includes('collar') || lower.includes('locked box') || lower.includes('true-up') || lower.includes('net cash') || lower.includes('closing adjustment')) {
      return {
        content: "Purchase price adjustment mechanisms are frequent sources of post-closing leakage and deal arbitrage. Raven tests: (1) Net Working Capital target calculation methodology and seasonal debt treatment; (2) One-directional Net Cash downward adjustments that penalize the target without upside symmetry; and (3) Fixed vs. floating exchange ratio collars (including walkaway rights if buyer stock falls below a predefined floor).",
        actionLink: { text: "Inspect HBT / TYFG Cash Proration Model", url: "/#sample-assessment" }
      };
    }

    // 28. Standstills & Don't Ask, Don't Tell (DADT) Provisions
    if (lower.includes('standstill') || lower.includes('dadt') || lower.includes('dont ask') || lower.includes("don't ask")) {
      return {
        content: "In In re Complete Genomics and In re Celera Corp., the Delaware Court of Chancery scrutinized 'Don't Ask, Don't Tell' (DADT) standstill provisions that prevent bidders from privately approaching a target board to request a waiver. Raven inspects the S-4 background timeline to audit whether rival bidders were muzzled by non-waivable DADTs and whether the target board satisfied its fiduciary duty under Revlon by waiving standstills upon definitive agreement signing.",
        actionLink: { text: "Review Deal Intelligence Archive", url: "/deal-intelligence" }
      };
    }

    // 29. DGCL § 251(h) Two-Step Tender Offers
    if (lower.includes('251(h)') || lower.includes('tender offer') || lower.includes('two-step') || lower.includes('two step') || lower.includes('backend merger')) {
      return {
        content: "DGCL § 251(h) enables an acquirer to consummate a back-end merger immediately following a tender offer without requiring a separate stockholder vote or meeting, provided the tender acquires shares that would satisfy the voting threshold (typically majority of outstanding). Raven verifies: (1) Exclusion of rollover shares from the tender percentage calculation; (2) Strict compliance with prompt closing covenants; and (3) Preservation of statutory appraisal rights notices under DGCL § 262(d)(2).",
        actionLink: { text: "View Deal Pressure Models", url: "/deal-intelligence" }
      };
    }

    // 30. Banking Regulatory Clearances (Bank Merger Act, CRA, OCC, Fed, FDIC)
    if (lower.includes('bank merger') || lower.includes('cra') || lower.includes('occ') || lower.includes('fdic') || lower.includes('federal reserve') || lower.includes('banking regulatory')) {
      return {
        content: "In regional bank consolidation (e.g. HBT Financial / Tri-County TYFG), regulatory approval under the Bank Merger Act requires spotless Community Reinvestment Act (CRA) performance, pristine AML/BSA compliance, and Federal Reserve systemic risk clearances. Raven cross-references target consent decrees and supervisory orders against closing conditions to identify unpriced regulatory extension drag.",
        actionLink: { text: "Inspect HBT / TYFG Audit Case", url: "/#sample-assessment" }
      };
    }

    // 31. Greeting
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('greetings')) {
      return {
        content: "Connection established. Let us omit generic conversational formalities. State the active transaction ticker, contractual exposure (e.g., BWIN, OPCH, ITGR, PAG), or structural risk you are modeling today."
      };
    }

    // Default Fallback
    return {
      content: `Your inquiry regarding "${text.length > 35 ? text.substring(0, 35) + '...' : text}" requires greater institutional specificity. Ask about our live deal audits (PAG DGCL 144, BWIN $298M TRA, OPCH Several Liability, ITGR 60-Min Auction), Delaware Chancery standards (Corwin cleansing, MFW entire fairness, Revlon auctions, MAE/MAC), DGCL § 262 appraisal arbitrage, or our $15,000 Forensic Sprint & Retainer coverage.`
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const res = generateResponse(userText);
      setMessages(prev => [...prev, { role: 'bot', content: res.content, actionLink: res.actionLink }]);
    }, 400 + Math.random() * 300);
  };

  const handlePromptClick = (promptText: string) => {
    setMessages(prev => [...prev, { role: 'user', content: promptText }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const res = generateResponse(promptText);
      setMessages(prev => [...prev, { role: 'bot', content: res.content, actionLink: res.actionLink }]);
    }, 400);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 group z-50 flex items-center justify-center p-[1px] rounded-none focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Open Corvus Transaction Intelligence Desk"
      >
        <div className="absolute inset-0 bg-[var(--brand-cyan)] opacity-20 group-hover:opacity-40 transition-opacity blur-[1px]"></div>
        
        <div className="relative bg-[var(--bg-primary)]/95 backdrop-blur-md border border-[var(--border-color)] group-hover:border-[var(--brand-cyan)] rounded-none p-3.5 px-4 flex items-center gap-3.5 transition-all duration-300 shadow-2xl">
          <div className="relative flex items-center justify-center">
            <Terminal className="w-4 h-4 text-[var(--brand-cyan)]" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-cyan)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-cyan)]"></span>
            </span>
          </div>

          <div className="flex flex-col items-start text-left font-mono">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--text-primary)] uppercase flex items-center gap-1.5 leading-none">
              CORVUS // TRANSACTION DESK
            </span>
            <span className="text-[8px] tracking-wider text-[var(--brand-cyan)] uppercase mt-1 leading-none font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {isHovered ? 'ENGAGE INTELLIGENCE' : 'ONLINE // 100% PUBLIC EVIDENCE'}
            </span>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[430px] max-w-[calc(100vw-2rem)] h-[600px] bg-[var(--bg-primary)] border border-[var(--border-color)] flex flex-col shadow-2xl z-50 rounded-none overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
      {/* Header */}
      <div className="h-14 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/90 flex items-center justify-between px-4">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)]">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[11px] font-bold tracking-widest text-[var(--text-primary)] uppercase leading-none">
              CORVUS // TRANSACTION DESK
            </span>
            <span className="font-mono text-[8px] tracking-wider text-emerald-400 uppercase mt-1 leading-none flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> 
              ZERO MNPI // AUDITABLE ACCESSIONS
            </span>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors p-1"
          aria-label="Close Corvus Terminal"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs bg-[var(--bg-primary)]">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[90%] p-3.5 space-y-2.5 ${
                msg.role === 'user' 
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium shadow-md' 
                  : 'bg-[var(--bg-secondary)]/70 border border-[var(--border-color)] text-[var(--text-secondary)] shadow-sm'
              }`}
            >
              {msg.role === 'bot' && (
                <div className="text-[9px] uppercase tracking-widest text-[var(--brand-cyan)] font-bold flex items-center justify-between border-b border-[var(--border-color)]/40 pb-1">
                  <span>CORVUS ANALYTICAL DESK</span>
                  <span className="text-[8px] text-[var(--text-tertiary)]">DELAWARE SPEC</span>
                </div>
              )}
              <div className="leading-relaxed text-xs">
                {msg.content}
              </div>

              {msg.actionLink && (
                <div className="pt-2 border-t border-[var(--border-color)]/60">
                  <Link
                    to={msg.actionLink.url}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1 text-[10px] text-[var(--brand-cyan)] hover:underline font-bold tracking-wider uppercase"
                  >
                    {msg.actionLink.text} →
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-2.5 text-[var(--text-tertiary)] text-xs font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-cyan)] animate-ping"></span>
              <span className="animate-pulse">_ cross-referencing EDGAR accessions & state machine</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Institutional Quick Action Prompts */}
      <div className="px-3 py-2 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/40 flex items-center gap-1.5 overflow-x-auto text-[9px] font-mono text-[var(--text-secondary)] shrink-0 scrollbar-none">
        <span className="text-[var(--text-tertiary)] uppercase shrink-0 font-bold">ASK:</span>
        <button 
          onClick={() => handlePromptClick('What did you find on BWIN (The Baldwin Group)?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          BWIN MFW & TRA
        </button>
        <button 
          onClick={() => handlePromptClick('What is the Option Care Health (OPCH) several liability trap?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          OPCH Several Liability
        </button>
        <button 
          onClick={() => handlePromptClick('What is the Revlon risk in Integer Holdings (ITGR)?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          ITGR 60-Min Auction
        </button>
        <button 
          onClick={() => handlePromptClick('What is the DGCL 144 flaw in Penske Automotive Group (PAG)?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          PAG Minority Standard
        </button>
        <button 
          onClick={() => handlePromptClick('How do you identify DGCL § 262 appraisal arbitrage?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          DGCL § 262 Appraisal
        </button>
        <button 
          onClick={() => handlePromptClick('What is the $15,000 Forensic Sprint deliverable?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          $15K Sprint / Retainer
        </button>
        <button 
          onClick={() => handlePromptClick('How does Corwin cleansing fail in M&A?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)] text-amber-400/90 font-medium"
        >
          Corwin Cleansing
        </button>
        <button 
          onClick={() => handlePromptClick('What is the difference between Reverse Termination Fee and Specific Performance in sponsor buyouts?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          RTF vs Specific Perf
        </button>
        <button 
          onClick={() => handlePromptClick('What constitutes an MAE or MAC under Delaware law?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          MAE Carve-Outs
        </button>
        <button 
          onClick={() => handlePromptClick('How do investment bankers manipulate fairness opinions and DCF models?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          DCF Fairness Opinions
        </button>
        <button 
          onClick={() => handlePromptClick('How does Raven support DGCL § 220 books and records demand letters?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          § 220 Evidence
        </button>
        <button 
          onClick={() => handlePromptClick('Why use Raven instead of outside law firm?')} 
          className="px-2 py-1 border border-[var(--border-color)] hover:border-[var(--brand-cyan)] shrink-0 bg-[var(--bg-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Why Not Law Firm?
        </button>
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/60 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask regarding deal risk, covenants, or pricing..."
          className="flex-1 bg-[var(--bg-primary)] border border-[var(--border-color)] px-3 py-2 text-xs font-mono focus:outline-none focus:border-[var(--brand-cyan)] text-[var(--text-primary)] disabled:opacity-50 transition-colors"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-3 py-2 hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center justify-center font-mono text-xs font-bold"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
