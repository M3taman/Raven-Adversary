import React, { useState } from 'react';
import { Shield, Brain, Terminal, ChevronRight, CheckCircle2, FileText, Calendar, User, Eye, ArrowLeft, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  keyword: string;
  author: string;
  commit: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

export default function IntelligenceFeed() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const ARTICLES: Article[] = [
    {
      id: "nims-gravitics-control-topology",
      title: "Class B Forensic Audit: Control Topology Inversion, Binary Financing Conditions, and $41.1M Liquidity Cliff in the NIMS / Gravitics Recapitalization",
      summary: "Forensic analysis of the NIMS / Gravitics reverse triangular merger exposing how a mandatory $40M public equity condition and synchronized note maturities create a lethal liquidity cliff on the September 30 outside date.",
      category: "CONTROL TOPOLOGY & CAPITAL MARKETS",
      keyword: "binary financing condition precedent",
      author: "Adversarial M&A Group",
      commit: "nims.2026.0818",
      date: "2026-08-18",
      readTime: "14 min read",
      content: (
        <div className="space-y-6">
          <p className="lead text-lg text-[var(--text-secondary)]">
            The pending reverse recapitalization between Non-Invasive Monitoring Systems, Inc. (NIMS) and Gravitics, Inc. exhibits acute structural fragility centered on an impending September 30, 2026 Outside Closing Date. While promoter marketing highlights a premier aerospace habitat commercial combination, transaction-state reconstruction reveals a high-probability binary execution trapdoor.
          </p>
          <p>
            Under Exchange Act Rule 12b-2, NIMS is a public shell company with discontinued operations since May 2019, zero operating revenue, and an accumulated deficit of $29.57 million. Pre-merger voting control rests entirely within a 63.4% insider bloc held by Dr. Phillip Frost (~35.1% via Frost Gamma Investments Trust) and Dr. Jane Hsiao (~27.9% via Hsu Gamma LP and Family Trust), which executed all merger approvals via Florida Business Corporation Act (FBCA) § 607.0704 written consents without minority shareholder proxy engagement.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The $41.1M Binary Financing Condition Precedent</h3>
          <p>
            Under Sections 2 and 4 of the definitive transaction documentation, the merger's consummation is strictly conditioned upon: (i) pricing and gross proceeds of not less than <strong>$40.0 million</strong> from an underwritten public equity offering, and (ii) Nasdaq Capital Market listing clearance of GVTX common stock prior to the <strong>September 30, 2026 Outside Date</strong>.
          </p>
          <p>
            Crucially, standard reverse triangular mergers include 30 to 60-day mutual cure and extension windows. In the NIMS architecture, Fourth Amendments executed on June 30, 2026 extended the maturity dates of three insider promissory notes held by Frost Gamma Investments Trust and Dr. Jane Hsiao ($300,000 aggregate principal) to mature simultaneously on September 30, 2026. This creates a concurrent maturity cliff where failure to close the public offering exhausts NIMS's meager cash reserves (~$160,000 as of June 30, 2026), triggering immediate debt default and insolvency.
          </p>

          <div className="overflow-x-auto my-8 border border-[var(--border-color)]">
            <table className="w-full border-collapse font-mono text-[11px] leading-relaxed">
              <thead>
                <tr className="bg-[var(--bg-secondary)]/50 border-b border-[var(--border-color)]">
                  <th className="p-3 text-left">Capital Instrument</th>
                  <th className="p-3 text-left">Holder / Counterparty</th>
                  <th className="p-3 text-left">Principal / Value</th>
                  <th className="p-3 text-left">Maturity / Cliff Trigger</th>
                  <th className="p-3 text-left">Raven Adversarial Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                <tr>
                  <td className="p-3 font-bold text-[var(--text-primary)]">Public Equity Offering</td>
                  <td className="p-3">Underwritten Syndicate</td>
                  <td className="p-3 text-emerald-400 font-bold">$40,000,000 min</td>
                  <td className="p-3">Sept 30, 2026 (Outside Date)</td>
                  <td className="p-3 text-[var(--text-secondary)]">Mandatory condition precedent; failure allows termination.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[var(--text-primary)]">Convertible Bridge Note</td>
                  <td className="p-3">Defender Opportunity LLC</td>
                  <td className="p-3 font-bold">$809,705.75</td>
                  <td className="p-3 text-amber-400">Nov 12, 2026 Step-Up</td>
                  <td className="p-3 text-[var(--text-secondary)]">Coupon escalates from 11% to 22% default penalty rate.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[var(--text-primary)]">Insider Promissory Notes</td>
                  <td className="p-3">Dr. Frost & Dr. Hsiao</td>
                  <td className="p-3 font-bold">$300,000.00</td>
                  <td className="p-3 text-red-400 font-bold">Sept 30, 2026 (Cliff)</td>
                  <td className="p-3 text-[var(--text-secondary)]">Immediate maturity cliff; exceeds shell cash reserves ($160K).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Unresolved Derivative & Escrow Voting Rights</h3>
          <p>
            Beyond liquidity mechanics, the forensic audit identified that the voting treatment of <strong>4,794,604 closing-contingent earn-out / escrow shares</strong> remains unclarified in primary documentation. While legacy Gravitics holders nominally hold 96.5% undiluted equity (91.19% fully diluted), the exercise pacing of derivative warrants and potential Section 13(d) group formation between related-party insiders require formal legal verification prior to committee closing sign-off.
          </p>

          <div className="p-4 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 font-mono text-xs space-y-2 my-6">
            <div className="font-bold text-[var(--brand-cyan)] uppercase">Fiduciary Release Verdict (Audit ID: 1787070786933)</div>
            <p className="text-[var(--text-secondary)]">
              Withhold transaction closing authorization and maintain strict pre-closing covenants until: (i) SEC Form S-4 effectiveness and Nasdaq uplisting are fully achieved, (ii) $40.0M public offering proceeds are fully escrowed to discharge insider debt, and (iii) the 120-day statutory challenge window under FBCA § 607.0147 elapses without adverse claims.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "fsea-governance-inversion",
      title: "Forensic Strategic Audit of Governance Inversion and Structural Trapdoor Vulnerabilities in the First Seacoast Bancorp Merger Architecture",
      summary: "Quantitative validation of a critical 47,058 share net voting power deficit for management in the contested FSEA/Cambridge merger, exposing an inverted governance buffer.",
      category: "GOVERNANCE & VOTING ANALYSIS",
      keyword: "governance inversion trapdoor",
      author: "Adversarial M&A Group",
      commit: "fsea.2026.0210",
      date: "2026-07-20",
      readTime: "12 min read",
      content: (
        <div className="space-y-6">
          <p className="lead text-lg text-[var(--text-secondary)]">
            The structural integrity of the announced merger between First Seacoast Bancorp and Cambridge Financial Group is fundamentally compromised by a quantitative misalignment in voting power known as a <strong>Governance Inversion Gap</strong>.
          </p>
          <p>
            This condition exists when a management-aligned defensive block, typically expected to be the primary deterrent against activist interference, is mathematically outweighed by a hostile or opportunistic concentration due to administrative or contractual fragmentation. In the specific context of First Seacoast Bancorp, the transaction architecture presented in recent regulatory filings reveals a lethal discrepancy where the DAB Financial activist block possesses higher immediate voting utility than the management-directed Employee Stock Ownership Plan block.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Validation of the Raven Forensic Intelligence Dossier (FSEA)</h3>
          <p>
            The Raven Forensic Dossier (Audit ID: FSEA-2026-0210-RAVEN) identifies three primary lethal threats for First Seacoast Bancorp: governance inversion, regulatory change-of-control trapdoors, and tactical intelligence asymmetry.
          </p>
          <p>
            The quantitative basis of this audit is corroborated by the First Seacoast Bancorp 10-K and 10-Q filings, which establish the total shares outstanding at <strong>4,716,923</strong>. Against this baseline, the activist group led by DAB Financial LLC holds <strong>384,847</strong> shares, representing an 8.16% stake. Simultaneously, the ESOP Trust identifies a gross holding of <strong>414,733</strong> shares, or approximately 8.80%.
          </p>
          <p>
            While a superficial review might suggest the ESOP provides a sufficient defensive buffer, the forensic audit of the ESOP’s voting mechanics reveals a critical fragmentation. The Trustee maintains sole voting power over only <strong>337,789</strong> shares. The remaining <strong>76,944</strong> shares are subject to shared voting power (pass-through voting), creating a <strong>net deficit of 47,058 shares</strong> for management in a contested proxy solicitation.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Institutional Rating of Transaction Architecture</h3>
          <p>
            When evaluated against institutional standards for bank merger defense, the First Seacoast Bancorp architecture receives a failing grade for structural resilience. Peer-group analysis indicates that 92% of peer-group ESOPs retain 100% sole voting power in the Trustee for contested matters. By allowing 18.5% of its primary defensive block to fragment through pass-through voting, First Seacoast management has effectively neutralized its most potent deterrent.
          </p>

          <div className="overflow-x-auto my-8 border border-[var(--border-color)]">
            <table className="w-full border-collapse font-mono text-[11px] leading-relaxed">
              <thead>
                <tr className="bg-[var(--bg-secondary)]/50 border-b border-[var(--border-color)]">
                  <th className="p-3 text-left font-bold uppercase text-[var(--text-primary)]">Component</th>
                  <th className="p-3 text-left font-bold uppercase text-[var(--text-primary)]">Current FSEA Metric</th>
                  <th className="p-3 text-left font-bold uppercase text-[var(--text-primary)]">Institutional Benchmark</th>
                  <th className="p-3 text-left font-bold uppercase text-[var(--text-primary)]">Rating</th>
                  <th className="p-3 text-left font-bold uppercase text-[var(--text-primary)]">Forensic Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]/40">
                <tr>
                  <td className="p-3 font-semibold text-[var(--text-primary)]">ESOP Voting Control</td>
                  <td className="p-3">81.5% Sole Power</td>
                  <td className="p-3">96.2% Sole Power</td>
                  <td className="p-3 text-red-500 font-bold">FAIL</td>
                  <td className="p-3 text-[var(--text-secondary)]">Lethal Trapdoor</td>
                </tr>
                <tr className="bg-[var(--bg-secondary)]/10">
                  <td className="p-3 font-semibold text-[var(--text-primary)]">Activist Concentration</td>
                  <td className="p-3">8.16% Ownership</td>
                  <td className="p-3">&lt; 5.0% Threshold</td>
                  <td className="p-3 text-red-500 font-bold">CRITICAL</td>
                  <td className="p-3 text-[var(--text-secondary)]">High Risk</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[var(--text-primary)]">Defensive Buffer</td>
                  <td className="p-3">-47,058 Share Deficit</td>
                  <td className="p-3">+150,000 Share Surplus</td>
                  <td className="p-3 text-red-500 font-bold">FAIL</td>
                  <td className="p-3 text-[var(--text-secondary)]">Inversion Gap</td>
                </tr>
                <tr className="bg-[var(--bg-secondary)]/10">
                  <td className="p-3 font-semibold text-[var(--text-primary)]">Regulatory Shielding</td>
                  <td className="p-3">13(d) Group Disclaimer</td>
                  <td className="p-3">Full Disclosure</td>
                  <td className="p-3 text-yellow-500 font-bold">MODERATE</td>
                  <td className="p-3 text-[var(--text-secondary)]">Shadow Block</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[var(--text-primary)]">13D Transparency</td>
                  <td className="p-3">Omnibus Reservation</td>
                  <td className="p-3">Specific Intent</td>
                  <td className="p-3 text-red-500 font-bold">POOR</td>
                  <td className="p-3 text-[var(--text-secondary)]">Intel Asymmetry</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm font-mono text-red-500 bg-red-500/5 p-4 border border-red-500/20">
            <strong>FINANCIAL EXPOSURE MODELING:</strong> The financial implications are quantified with a <strong>Total Dollar Risk Exposure of $5,249,313.08</strong>, representing the sum of potential regulatory surcharges, litigation costs, and the valuation delta if the merger fails under activist solicitation.
          </p>
        </div>
      )
    },
    {
      id: "imaq-vci-forensic-validation",
      title: "Forensic Validation of the IMAQ / VCI Holdings Business Combination: Audit Cliffs & Zero-Recourse Gaps",
      summary: "Forensic assessment of the $1B IMAQ/VCI transaction under the Clarity Framework, exposing a Terminal Clarity Score (< 40) and mapping a critical Strategic Remediation Playbook.",
      category: "BINARY TRANSACTION RISK",
      keyword: "IMAQ VCI audit validation",
      author: "Special Situations Desk",
      commit: "imaq.vci.2026",
      date: "2026-07-19",
      readTime: "15 min read",
      content: (
        <div className="space-y-6">
          <p className="lead text-lg text-[var(--text-secondary)]">
            The transaction architecture for the business combination between International Media Acquisition Corp (IMAQ) and VCI Holdings Limited is tethered to a high-velocity audit delivery window and a total non-survival of representations and warranties post-closing. This structure creates a binary risk profile where transaction integrity is compromised by unmitigated jurisdictional liabilities and terminal "Kill Shot" vulnerabilities.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Institutional Rating Against the Clarity Framework</h3>
          <p>
            Under institutional standards defined by the Clarity Framework, the IMAQ/VCI transaction is rated in the <strong>Terminal (0–39)</strong> range. This rating is triggered by \"Kill Shot\" detection—the mechanism for identifying terminal flaws such as physics violations, solvency crises, or governance failures that cause the score to collapse regardless of other factors.
          </p>
          
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Audit-Driven Transaction Collapse:</strong> The hard June 30, 2026, deadline for IFRS-compliant financials for FY2023 and FY2024 gives IMAQ a unilateral termination right. Failure to deliver these financials renders the entire reincorporation and restructuring process a sunk cost.
            </li>
            <li>
              <strong>Non-Survival Liability Gap:</strong> The \"Non-Survival of Reps\" clause shifts 100% of the risk of undisclosed Vietnamese operational liabilities to the buyer once the 100M share consideration is issued.
            </li>
            <li>
              <strong>Talent Cliff Risk:</strong> The absence of explicit Transition Services Agreements (TSA) or quantified retention bonuses for key Vietnamese operational leads (EQN/VNB) creates an operational vacuum.
            </li>
          </ul>

          <div className="overflow-x-auto my-8 border border-[var(--border-color)]">
            <table className="w-full border-collapse font-mono text-[11px] leading-relaxed">
              <thead>
                <tr className="bg-[var(--bg-secondary)]/50 border-b border-[var(--border-color)]">
                  <th className="p-3 text-left font-bold uppercase text-[var(--text-primary)]">Component</th>
                  <th className="p-3 text-left font-bold uppercase text-[var(--text-primary)]">IMAQ/VCI Metric</th>
                  <th className="p-3 text-left font-bold uppercase text-[var(--text-primary)]">Institutional Standard</th>
                  <th className="p-3 text-left font-bold uppercase text-[var(--text-primary)]">Rating</th>
                  <th className="p-3 text-left font-bold uppercase text-[var(--text-primary)]">Forensic Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]/40">
                <tr>
                  <td className="p-3 font-semibold text-[var(--text-primary)]">Clarity Score</td>
                  <td className="p-3">Terminal (&lt; 40)</td>
                  <td className="p-3">70-89 (Investable)</td>
                  <td className="p-3 text-red-500 font-bold">FAIL</td>
                  <td className="p-3 text-[var(--text-secondary)]">Kill Shot Detected</td>
                </tr>
                <tr className="bg-[var(--bg-secondary)]/10">
                  <td className="p-3 font-semibold text-[var(--text-primary)]">Audit Compliance</td>
                  <td className="p-3">June 30 Deadline</td>
                  <td className="p-3">60-Day Cure Period</td>
                  <td className="p-3 text-red-500 font-bold">CRITICAL</td>
                  <td className="p-3 text-[var(--text-secondary)]">Binary Risk</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[var(--text-primary)]">Liability Recourse</td>
                  <td className="p-3">0% (Non-Survival)</td>
                  <td className="p-3">Fundamental Survival</td>
                  <td className="p-3 text-red-500 font-bold">FAIL</td>
                  <td className="p-3 text-[var(--text-secondary)]">Liability Trap</td>
                </tr>
                <tr className="bg-[var(--bg-secondary)]/10">
                  <td className="p-3 font-semibold text-[var(--text-primary)]">Management Retention</td>
                  <td className="p-3">Discretionary Pool</td>
                  <td className="p-3">Quantified TSA/Retention</td>
                  <td className="p-3 text-red-500 font-bold">POOR</td>
                  <td className="p-3 text-[var(--text-secondary)]">Talent Cliff</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Building the Secure Target: Strategic Remediation Playbook</h3>
          <p>
            To \"build the target\" into a sovereign, investable entity, Raven identifies three key contract redlines and tactical maneuvers required to neutralize the unhedged structural risks.
          </p>
          
          <div className="space-y-4">
            <div className="p-5 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-2">
              <h4 className="text-sm font-bold text-[var(--text-primary)] font-mono uppercase">1. Hardening the Audit Delivery Window</h4>
              <p className="text-xs text-[var(--text-secondary)]">
                The current hard-stop on June 30, 2026, must be mitigated to prevent total transaction collapse.
              </p>
              <p className="text-xs font-mono text-[var(--brand-cyan)] bg-[var(--bg-primary)] p-2">
                REPLAY REDLINE: Section 9.01(b) shall be amended to include a 30-day cure period provided that a preliminary draft audit demonstrating substantial completion has been circulated by May 15.
              </p>
            </div>

            <div className="p-5 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-2">
              <h4 className="text-sm font-bold text-[var(--text-primary)] font-mono uppercase">2. Bridging the Non-Survival Liability Gap</h4>
              <p className="text-xs text-[var(--text-secondary)]">
                The acquisition of Vietnamese operating assets (Ethanol Quang Nam Production) without post-closing recourse is an institutional violation of fiduciary duty.
              </p>
              <p className="text-xs font-mono text-[var(--brand-cyan)] bg-[var(--bg-primary)] p-2">
                REPLAY REDLINE: Replace Section 10.01 with a survival clause for 'Fundamental Representations' (Tax, Environmental Laws, and Anti-Corruption) for a period of eighteen (18) months post-closing.
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                TACTICAL HEURISTIC: Procure Representations and Warranties Insurance (RWI) or condition closing on a pre-funded indemnity escrow (minimum 10% of upfront consideration) to cover latent Vietnamese asset risks.
              </p>
            </div>

            <div className="p-5 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-2">
              <h4 className="text-sm font-bold text-[var(--text-primary)] font-mono uppercase">3. Mitigating the Talent Cliff</h4>
              <p className="text-xs text-[var(--text-secondary)]">
                The $1 billion valuation of VCI Biofuels Group is predicated on operational continuity in the sustainable aviation fuel market.
              </p>
              <p className="text-xs font-mono text-[var(--brand-cyan)] bg-[var(--bg-primary)] p-2">
                REPLAY REDLINE: Amend Section 7.05 to require the delivery of executed Transition Services Agreements (TSAs) and Employment Agreements for Tier-1 Management of EQN and VNB as a Condition Precedent to closing.
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                TACTICAL HEURISTIC: Demand a detailed allocation schedule for the 10% Incentive Plan Pool to ensure it covers mission-critical technical staff in Vietnam.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Quantitative Stress Scenarios for the IMAQ Target</h3>
          <div className="overflow-x-auto my-8 border border-[var(--border-color)]">
            <table className="w-full border-collapse font-mono text-[11px] leading-relaxed">
              <thead>
                <tr className="bg-[var(--bg-secondary)]/50 border-b border-[var(--border-color)]">
                  <th className="p-3 text-left font-bold uppercase text-[var(--text-primary)]">Trigger Event</th>
                  <th className="p-3 text-left font-bold uppercase text-[var(--text-primary)]">Probability</th>
                  <th className="p-3 text-left font-bold uppercase text-[var(--text-primary)]">Financial Impact</th>
                  <th className="p-3 text-left font-bold uppercase text-[var(--text-primary)]">Leverage Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]/40">
                <tr>
                  <td className="p-3 font-semibold text-[var(--text-primary)]">Audit Delay (Post-June 30)</td>
                  <td className="p-3">MODERATE</td>
                  <td className="p-3">IMAQ Potential Liquidation</td>
                  <td className="p-3 text-red-500 font-bold">10/10</td>
                </tr>
                <tr className="bg-[var(--bg-secondary)]/10">
                  <td className="p-3 font-semibold text-[var(--text-primary)]">VWAP &lt; $15.00 (5 yrs)</td>
                  <td className="p-3">UNKNOWN</td>
                  <td className="p-3">$405M Value Unissued</td>
                  <td className="p-3 font-bold text-yellow-500">7/10</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[var(--text-primary)]">Non-Survival Breach</td>
                  <td className="p-3">HIGH</td>
                  <td className="p-3">Unquantifiable Liabilities</td>
                  <td className="p-3 text-red-500 font-bold">8/10</td>
                </tr>
                <tr className="bg-[var(--bg-secondary)]/10">
                  <td className="p-3 font-semibold text-[var(--text-primary)]">Revenue &lt; $500M</td>
                  <td className="p-3">HIGH</td>
                  <td className="p-3">15M Share Earnout Void</td>
                  <td className="p-3 font-bold text-yellow-500">6/10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: "tsa-stranded-cost",
      title: "TSA Stranded-Cost Risk Analysis: Identifying Overhead Migration Traps in Corporate Carve-outs",
      summary: "An in-depth analysis of how unabsorbed corporate overhead in Transition Services Agreements (TSAs) triggers hidden balance sheet liabilities under post-close delays.",
      category: "POST-MERGER INTEGRATION",
      keyword: "TSA stranded-cost risk analysis",
      author: "Forensic Integration Team",
      commit: "tsa.908f2",
      date: "2026-07-18",
      readTime: "9 min read",
      content: (
        <div className="space-y-6">
          <p>
            In carve-outs and spin-offs, Transition Services Agreements (TSAs) are standard tools used to maintain operational continuity. They act as bridges, enabling the buyer to leverage the seller’s existing HR, IT, and facility infrastructures while building their own independent capacity.
          </p>
          <p>
            However, our forensic investigations show that TSAs carry an unpriced risk: <strong>unabsorbed corporate overhead</strong> (often referred to as <em>stranded-costs</em>).
          </p>
          
          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The Stranded-Cost Propagation Mechanism</h3>
          <p>
            When a corporate parent sells an operating division, it rarely reduces its corporate support overhead proportionally. The remaining parent entity inherits 100% of the executive, administrative, and systems costs that were previously allocated to the divested asset.
          </p>
          <div className="p-5 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 font-mono text-xs text-[var(--text-secondary)] space-y-2">
            <div className="font-bold text-[var(--brand-cyan)] uppercase">FORMULAIC OVERHEAD DRIFT:</div>
            <p>Parent Stranded-Cost = Total Shared Support Overhead - (Buyer TSA Reimbursements + Post-divestiture Cost Reduction Program Outcomes)</p>
          </div>
          <p>
            If the transition timeline stretches, the seller faces dual exposure. First, they bear the actual operational friction of managing legacy systems. Second, the reimbursement parameters in the TSA often decline over time. If a shared facility remains un-migrated after month 6 post-closing, the seller might absorb 100% of newly unabsorbed corporate overhead without buyer subsidy.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Asymmetrical TSA Risk Factors</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Unrealistic Migration Windows:</strong> Standard agreements assume a 180-day transition window, but actual enterprise IT migration often averages 270 to 360 days.
            </li>
            <li>
              <strong>System Interdependencies:</strong> Disentangling legacy SAP/Oracle ERP instances frequently uncovers undocumented connections, stalling transition paths and inflating unabsorbed overhead.
            </li>
            <li>
              <strong>Labor Diseconomies:</strong> Parent entities are forced to retain duplicate back-office personnel during the TSA window, preventing the implementation of post-divestiture synergy reductions.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Strategic Defense Protocol</h3>
          <p>
            To hedge against stranded-costs, transaction teams must incorporate declining overhead collars and strict migration penalty clauses in Annex agreements. Raven’s <strong>Pressure-State Engine</strong> simulates TSA timeline drift, mapping cash impact on pro-forma margins before Definitive Agreements bind.
          </p>
        </div>
      )
    },
    {
      id: "category-iii-threshold",
      title: "Category III Threshold Migration Risk: Asset Growth and HQLA Capital Reserve Drags",
      summary: "Why crossing the $250B asset tier under bank consolidation rules triggers sudden capital constraints and Net Interest Margin (NIM) erosion.",
      category: "REGULATORY COMPLIANCE",
      keyword: "Category III threshold migration risk",
      author: "Regulatory Risk Advisory",
      commit: "reg.c3.882",
      date: "2026-07-14",
      readTime: "11 min read",
      content: (
        <div className="space-y-6">
          <p>
            Under federal bank prudential standards, crossing key asset-size thresholds is not just a compliance milestone—it is a balance-sheet restructuring trigger. The transition from Category IV to Category III prudential standards (triggered at $250B in total consolidated assets) introduces significant capital and liquidity burdens.
          </p>
          <p>
            When mid-tier banks consolidate, deal teams emphasize synergies. They model cost reductions and market expansion while frequently ignoring the <strong>Category III threshold compliance drag</strong>.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The High-Quality Liquid Asset (HQLA) Cost Curve</h3>
          <p>
            The primary regulatory cliff associated with Category III transition is the mandatory implementation of the <strong>Liquidity Coverage Ratio (LCR)</strong>. 
          </p>
          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 space-y-4">
            <h4 className="font-bold text-[var(--text-primary)] font-heading">Key Category III Rules:</h4>
            <ul className="list-decimal pl-6 space-y-2 text-xs font-mono text-[var(--text-secondary)]">
              <li>Mandatory daily calculation and reporting of Liquidity Coverage Ratios.</li>
              <li>A massive increase in required reserves, typically demanding an immediate allocation to low-yield cash or U.S. Treasuries.</li>
              <li>Incorporation of Accumulated Other Comprehensive Income (AOCI) into regulatory capital, exposing capital ratios to bond-portfolio volatility.</li>
            </ul>
          </div>
          <p>
            To achieve LCR compliance post-close, banks must shift assets away from high-yielding commercial loan portfolios and into low-yielding HQLA categories. This mandatory allocation compresses the pro-forma Net Interest Margin (NIM) overnight, neutralizing expected cost synergies.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Modeling the Regulatory Drag</h3>
          <p>
            In our Comerica / Fifth Third pro-forma study, LCR compliance demanded an immediate $1.2B expansion in high-quality liquid reserves. This asset shift compressed the combined entity's NIM yield by 14 basis points in the first quarter post-close, completely erasing the transaction's projected back-office savings.
          </p>
          <p>
            Raven’s <strong>Regulatory Modeling Pipeline</strong> parses historical deposit volatility models to calculate post-close LCR targets, allowing bank boards to evaluate the true capital cost of scale before signing merger agreements.
          </p>
        </div>
      )
    },
    {
      id: "asymmetric-termination-fee",
      title: "Asymmetric Termination Fee Risk & MAE Carveout Sensitivity in Volatile Markets",
      summary: "How structural asymmetries in Material Adverse Effect (MAE) clauses shift bargaining power and renegotiation leverage during macro downturns.",
      category: "M&A LEGAL STRATEGY",
      keyword: "asymmetric termination fee risk",
      author: "M&A Litigation Team",
      commit: "legal.mae.44",
      date: "2026-07-10",
      readTime: "8 min read",
      content: (
        <div className="space-y-6">
          <p>
            During market corrections, the interval between signing and closing a transaction becomes a high-risk zone. Economic trends can shift suddenly, testing the structural limits of merger agreements and shifting renegotiation leverage between buyers and sellers.
          </p>
          <p>
            In these environments, two legal concepts interact to determine deal certainty: <strong>Asymmetric Termination Fees</strong> and <strong>Material Adverse Effect (MAE) carve-outs</strong>.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The Leverage Shift Mechanism</h3>
          <p>
            Most merger agreements include a reverse termination fee that a buyer must pay if they walk away from a transaction due to financing failures. If this fee is low relative to the deal size (typically 3-5%), the buyer functionally holds a unilateral <strong>call option</strong> on the target company.
          </p>
          <p>
            If macroeconomic conditions degrade, the buyer can threaten to walk away and pay the fee, forcing the seller to renegotiate the purchase price.
          </p>
          <div className="p-5 border border-l-2 border-[var(--brand-cyan)] bg-[var(--bg-secondary)]/30 font-mono text-xs text-[var(--text-secondary)] space-y-2">
            <div className="font-bold text-[var(--brand-cyan)] uppercase">CRITICAL PATH ANALYSIS:</div>
            <p>If (Value Loss under Macro Downturn) &gt; (Reverse Termination Fee), then the strategic buyer holds a rational economic incentive to break the deal or force a repricing concession.</p>
          </div>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">MAE Carveout Asymmetries</h3>
          <p>
            Sellers try to insulate themselves by drafting broad MAE exceptions, stating that general macroeconomic downturns do not constitute a Material Adverse Effect unless they <em>disproportionately impact</em> the target company relative to peers.
          </p>
          <p>
            However, defining "disproportionate impact" is highly subjective and frequently contested in litigation. If the target company depends on a single supplier or operates with high operating leverage, a general downturn can trigger disproportionate balance-sheet degradation, providing the buyer with legal grounds to terminate the transaction.
          </p>
          <p>
            Raven’s <strong>Adversarial Debate Logic</strong> tests MAE carve-outs against historical economic shocks, letting sellers establish defensible terms and protect transaction value.
          </p>
        </div>
      )
    },
    {
      id: "inmed-mentari-control-topology",
      title: "Series A Multi-Vote Dominance & Ontario Arbitration Liquidity Drag in the InMed / Mentari Reverse Merger",
      summary: "Forensic analysis of the InMed/Mentari reverse triangular merger and $490M PIPE syndicate, exposing how a 3-vote-per-seat Series A preferred preference grants 85.71% active board control alongside $5.7M in pending arbitration exposure.",
      category: "CONTROL TOPOLOGY & REVERSE MERGERS",
      keyword: "Series A multi-vote governance preference",
      author: "Adversarial M&A Group",
      commit: "inm.2026.0820",
      date: "2026-08-20",
      readTime: "13 min read",
      content: (
        <div className="space-y-6">
          <p className="lead text-lg text-[var(--text-secondary)]">
            Mentari Therapeutics entered into a definitive merger agreement to acquire InMed Pharmaceuticals through a reverse triangular merger supported by an upsized $490.0 million PIPE financing commitment. While promoter releases highlight a premier clinical biotechnology platform, Raven’s forensic transaction-state reconstruction uncovers extreme governance concentration and acute pre-closing litigation exposure.
          </p>
          <p>
            Post-transaction, legacy Mentari stockholders and PIPE participants command between <strong>98.49% and 98.85%</strong> of fully diluted common stock, reducing legacy InMed public stockholders to a residual <strong>1.15% to 1.51%</strong> interest. However, true governance power is concentrated even further through a custom multi-class preferred structure.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The Series A Super-Voting Engine (3 Votes per Seat)</h3>
          <p>
            Under the Nevada Certificate of Designation, Series A Preferred Stock designates two board seats where each preferred director holds <strong>three (3) votes per seat</strong> on all corporate matters. With an initial active board of three directors, the two Fairmount designees control <strong>6 of 7 active votes (85.71%)</strong>, completely overriding legacy board oversight.
          </p>
          <p>
            Furthermore, for as long as at least 30% of the originally issued Series A Preferred remains outstanding, the preferred class holds unilateral negative covenant vetoes over: (i) charter/bylaw amendments, (ii) altering authorized board size, (iii) fundamental corporate transactions, and (iv) the appointment or replacement of the independent auditor.
          </p>

          <div className="p-4 border border-amber-500/30 bg-amber-500/5 font-mono text-xs space-y-2 my-6">
            <div className="font-bold text-amber-400 uppercase">LITIGATION & CASH TRAP: $5.7M ARBITRATION VS $5.2M CASH</div>
            <p className="text-[var(--text-secondary)]">
              All representations and warranties terminate at closing with zero indemnity escrow. Crucially, InMed disclosed $5.7M in pending Ontario commercial arbitration claims against its standalone cash position of $5.2M, creating an immediate post-closing balance sheet vulnerability for the combined entity.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "nextcure-avere-net-cash-cliff",
      title: "Asymmetric Downward Net Cash Adjustment & $150M Floor Shortfall in NextCure / Avere Therapeutics",
      summary: "Forensic breakdown of NextCure's reverse merger with Avere Therapeutics, revealing a one-directional Net Cash downward penalty formula and a $170M financing shortfall allowance.",
      category: "DISTRESSED BIOTECH RESTRUCTURING",
      keyword: "downward net cash exchange ratio adjustment",
      author: "Adversarial M&A Group",
      commit: "nxct.2026.0820",
      date: "2026-08-20",
      readTime: "12 min read",
      content: (
        <div className="space-y-6">
          <p className="lead text-lg text-[var(--text-secondary)]">
            NextCure entered into a reverse merger agreement with Avere Therapeutics backed by an anticipated $320M PIPE financing to resolve NextCure's Q4 2026 liquidity cliff ($20.1M cash reserves as of Q2 2026). Under the terms, legacy NextCure stockholders receive a nominal 1.89% minority interest while Avere captures 98.11% pro-forma equity, 100% board designation rights, and executive leadership.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The One-Directional Net Cash Penalty</h3>
          <p>
            Merger Agreement Schedule 1.5 establishes that if NextCure's closing Net Cash falls below the Parent Target Cash Amount, the 1.89% equity allocation is adjusted downwards pursuant to a punitive deficit formula. Because wind-down expenses, severance obligations, and clinical trial close-out costs burn cash daily, all interim cash drag is borne exclusively by legacy public stockholders without an upward collar.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The $150M Financing Floor Trap</h3>
          <p>
            While transaction headlines tout a $320M financing, Section 6.01 conditions closing on gross proceeds of not less than <strong>$150.0 million</strong>. This enables the buyer to consummate the combination despite a <strong>$170M (53%) financing shortfall</strong>, closing an undercapitalized platform while permanently locking legacy stockholders into sub-1.89% dilution.
          </p>
        </div>
      )
    },
    {
      id: "fbnc-fcbm-entity-discontinuity",
      title: "Target Entity Discontinuity, Unaudited Asset Gaps, and 41.1% Uninsured Deposit Sensitivity in FBNC / First Carolina (Florence, SC)",
      summary: "Forensic audit of First Bancorp's $166M acquisition revealing a critical entity misidentification between Florence, SC and Raleigh, NC targets, zero public 10-Q disclosures, and interest rate EVE sensitivity.",
      category: "BANK M&A & REGULATORY INTEGRATION",
      keyword: "bank target entity discontinuity audit",
      author: "Financial Institutions Desk",
      commit: "fbnc.2026.0820",
      date: "2026-08-20",
      readTime: "11 min read",
      content: (
        <div className="space-y-6">
          <p className="lead text-lg text-[var(--text-secondary)]">
            First Bancorp (FBNC) announced the acquisition of First Carolina Bancshares Corporation for $166.0M in mixed consideration ($40M cash + 1.97M shares). Consensus broker commentary mischaracterized the target as the larger Raleigh, NC institution ($3.4B assets). Raven's entity reconciliation proves the true target is the privately held Florence, SC entity ($831M assets, $596M loans, $714M deposits).
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The Unaudited Information Vacuum</h3>
          <p>
            Because First Carolina Bancshares (Florence, SC) is not an SEC reporting company, no audited Form 10-K/10-Q reports exist in the public domain. Acquirer shareholders are asked to validate a $166M consideration schedule without public loan-level CRE concentration benchmarks, ACL reserve adequacy data, or non-accrual migration tables.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">FBNC Balance Sheet Sensitivity</h3>
          <p>
            Simultaneously, FBNC's June 30, 2026 Form 10-Q reveals that <strong>$4.6 billion (41.1%)</strong> of its total deposit base is uninsured, and a +200 bps rate shock induces a <strong>6.4% decline in Economic Value of Equity (EVE)</strong>, compounding post-close balance sheet volatility.
          </p>
        </div>
      )
    },
    {
      id: "verifyme-openworld-willful-breach",
      title: "Chronological Tender Collision, July 21 Financing Deficit, and $500K Section 8.5(c) Willful Breach Liability in VerifyMe / OpenWorld",
      summary: "Forensic timeline reconstruction of VerifyMe's crypto-finance pivot combination with OpenWorld, establishing an evidentiary chronology for a $500,000 willful breach termination fee.",
      category: "SPECIAL SITUATIONS & LITIGATION",
      keyword: "tender offer willful breach termination fee",
      author: "M&A Litigation Team",
      commit: "vrme.2026.0820",
      date: "2026-08-20",
      readTime: "10 min read",
      content: (
        <div className="space-y-6">
          <p className="lead text-lg text-[var(--text-secondary)]">
            Facing an April 17, 2026 Nasdaq delisting notice, VerifyMe attempted a high-risk sector pivot to crypto-finance (SIC 6199) by executing a combination agreement and tender offer with OpenWorld backed by SAFE note conversions capped at $42.671M.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The 24-Hour Chronological Collapse</h3>
          <p>
            Raven reconstructed the definitive transaction timeline from Edgar filings:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-mono text-xs text-[var(--text-secondary)]">
            <li><strong>July 20, 2026 (5:00 PM ET):</strong> Tender Offer expiration timestamp passes without extension.</li>
            <li><strong>July 21, 2026:</strong> Filing of Financing Deficit Disclosure admitting failure to secure minimum capital.</li>
            <li><strong>July 24, 2026:</strong> Joint execution of Transaction Termination Agreement.</li>
          </ul>
          <p>
            Under Merger Agreement Section 8.5(c), if termination results from a party's Willful Breach (including withholding financing failure knowledge prior to tender expiration), the breaching party is liable for liquidated damages of <strong>$500,000</strong>.
          </p>
        </div>
      )
    },
    {
      id: "lock-up-trigger-analysis",
      title: "Conditional Lock-Up Trigger Analysis: Predicting Post-Merger Dilution and Float Collapse",
      summary: "An investigation into how Volume Weighted Average Price (VWAP) accelerated lock-up release schedules trigger market instability and sponsor capital flight.",
      category: "EQUITY CAPITAL MARKETS",
      keyword: "conditional lock-up trigger analysis",
      author: "Capital Markets Group",
      commit: "ecm.lup.02",
      date: "2026-07-05",
      readTime: "10 min read",
      content: (
        <div className="space-y-6">
          <p>
            In modern corporate transactions—particularly in SPAC, De-SPAC, and high-growth IPO listings—insider and sponsor shares are subject to lock-up restrictions that prevent immediate sales post-listing.
          </p>
          <p>
            However, to align incentives, modern agreements incorporate <strong>conditional lock-up triggers</strong>. These provisions accelerate share release if the company's Volume Weighted Average Price (VWAP) exceeds specified levels (e.g., $12.50 or $15.00) for 20 out of 30 consecutive trading days.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The Float Collapse Paradox</h3>
          <p>
            While intended to reward positive performance, conditional lock-up triggers often create a structural paradox. When a listing near-approaches the VWAP threshold, short-term investors anticipate a massive float expansion.
          </p>
          <div className="p-5 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 space-y-4 font-mono text-xs text-[var(--text-secondary)]">
            <div className="font-bold text-[var(--brand-cyan)] uppercase">DILUTION THRESHOLD PROGRESSION:</div>
            <ul className="space-y-1">
              <li>1. Stock trades near $12.40 (approaching the lock-up release threshold).</li>
              <li>2. Institutional short interest expands to hedge against upcoming supply.</li>
              <li>3. Triggers fire → 15,000,000 insider shares unlock instantly.</li>
              <li>4. Float expands by 300% in a single day, driving down prices.</li>
            </ul>
          </div>
          <p>
            This sudden float expansion creates market instability and can lead to a collapse in stock price, undermining subsequent capital-raising efforts and creating severe financing fragility.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Forensic Float Simulations</h3>
          <p>
            In our study of the BOXABL / FG Merger II transaction, late-stage amendments were required to modify lock-up release schedules to restrict initial insider float to 15% of total outstanding common shares. This structural modification prevented a severe post-listing float collapse.
          </p>
          <p>
            Raven’s <strong>Pressure-State Engine</strong> simulates post-close dilution paths, letting sponsors structure balanced incentives that preserve equity stability and avoid capital flight.
          </p>
        </div>
      )
    }
  ];

  const activeArticle = ARTICLES.find(a => a.id === selectedArticleId);

  return (
    <div className="pt-24 pb-20 px-6 max-w-5xl mx-auto space-y-16">
      
      {/* Dynamic FAQ Schema for GEO/AI-Search crawling */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": ARTICLES.map(a => ({
            "@type": "Question",
            "name": `What is ${a.keyword}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": a.summary
            }
          }))
        })}
      </script>

      {/* Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            Adversarial Intelligence Archive
          </div>
          <div className="inline-flex items-center gap-2 px-2 py-1.5 border border-[var(--border-color)] text-[var(--text-tertiary)] font-mono text-[8px] uppercase tracking-widest rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)]"></span>
            Classified: PUBLIC RESEARCH
          </div>
          <div className="inline-flex items-center gap-1 font-mono text-[8px] uppercase tracking-widest text-[var(--text-tertiary)]">
            EDGAR-SYNC: AUTOMATED // NODE ARRAY ACTIVE
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-heading text-[var(--text-primary)]">
          Adversarial Intelligence Feed
        </h1>
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          Deep-dives, post-close forensic analyses, and problem-focused research tracking institutional pressure, capital constraints, and unpriced transaction exposure.
        </p>

        <div className="pt-4 border-t border-[var(--border-color)] flex gap-6 text-[9px] font-mono tracking-widest text-[var(--text-tertiary)] uppercase flex-wrap">
          <div><span className="text-[var(--text-secondary)]">PUBLISHER:</span> RAVEN ADVERSARY ANALYTICAL GROUP</div>
          <div><span className="text-[var(--text-secondary)]">INTELLIGENCE TIER:</span> STRATEGIC RESEARCH DIVISION</div>
          <div><span className="text-[var(--text-secondary)]">ACCESSION NO:</span> AR-2026-904X</div>
        </div>
      </header>

      {selectedArticleId === null ? (
        <div className="space-y-12">
          {/* Main Original Article as Featured Memo */}
          <div className="p-8 border border-[var(--border-highlight)] bg-[var(--bg-secondary)]/10 space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 border-b border-l border-[var(--border-color)] bg-[var(--bg-primary)] font-mono text-[8px] text-[var(--brand-cyan)] uppercase tracking-wider font-bold">
              Featured Strategic Memo
            </div>
            
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-[var(--brand-cyan)] uppercase tracking-widest block">CORE EPISTEMIC POLICY</span>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
                Institutional Interpretation vs. Document Analysis
              </h2>
            </div>
            
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              Why Raven Adversary rejects generic document summarization in favor of Pressure-State Modeling and Leverage Migration tracking for consequential transactions. Traditional compliance automation operates on policy-state in a vacuum. A high-stakes transaction is not a vacuum.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-6 text-[9px] font-mono text-[var(--text-tertiary)] uppercase">
              <div>AUTHOR: Raven Core</div>
              <div>COMMIT: e9f8a2b.44</div>
              <div>READ TIME: 5 min read</div>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => setSelectedArticleId("featured-memo-original")}
                className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Read Featured Memo <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Archive List of Tier 3 Problem-focused Articles */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono tracking-[0.25em] text-[var(--text-tertiary)] uppercase border-b border-[var(--border-color)] pb-3">
              Analytical Deep-Dives & Research Memos
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {ARTICLES.map((article) => (
                <div 
                  key={article.id} 
                  className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--brand-cyan)]/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[8px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
                      <span>{article.category}</span>
                      <span>{article.date}</span>
                    </div>
                    <h4 className="text-base font-bold font-heading text-[var(--text-primary)] group-hover:text-[var(--brand-cyan)] transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                  
                  <div className="pt-2 border-t border-[var(--border-color)]/50 flex justify-between items-center">
                    <span className="font-mono text-[8px] text-[var(--text-tertiary)] uppercase">
                      TERM: <strong className="text-[var(--text-secondary)]">{article.keyword}</strong>
                    </span>
                    <button 
                      onClick={() => setSelectedArticleId(article.id)}
                      className="font-mono text-[9px] text-[var(--brand-cyan)] uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      DISSECT MEMO <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Selected Article Reader View */
        <div className="space-y-8">
          <button 
            onClick={() => setSelectedArticleId(null)}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors pb-4 border-b border-[var(--border-color)] w-full"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Intelligence Archive
          </button>

          {selectedArticleId === "featured-memo-original" ? (
            /* Original Featured Article */
            <article className="prose prose-invert max-w-none space-y-8 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed relative">
              <div className="space-y-2 pb-6 border-b border-[var(--border-color)]">
                <span className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-widest block">FEATURED CORE MEMO</span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--text-primary)] leading-tight">
                  Institutional Interpretation vs. Document Analysis
                </h2>
                <p className="text-sm font-mono text-[var(--text-tertiary)] uppercase pt-1">
                  COMMIT_ID: e9f8a2b.44 // INFERENCE LEVEL: VERIFIED STRUCTURAL
                </p>
              </div>

              <p>
                <strong>Raven does not sell AI analysis. Raven sells institutional interpretation under pressure.</strong> Generalized contract summarization tools focus on what a document says. We reconstruct the decision-state to determine <em>who accepted uncertainty, and under what conditions.</em> 
              </p>

              <p>
                Traditional compliance automation and generic AI governance platforms operate on policy-state—they summarize clauses in a vacuum. A high-stakes transaction is not a vacuum. It is a live environment characterized by asymmetrical disclosure and shifting negotiation leverage.
              </p>

              <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The Move from Language to Consequence</h3>
              <p>
                The margin for error in an activist proxy contest or a distressed de-SPAC is zero. Practitioners do not need a faster way to read a termination fee provision; they need to know if the interplay between that fee, an esoteric non-solicitation carve-out, and regulatory escalation pathways creates a structural moat restricting a targeted spin-off.
              </p>

              <div className="p-6 border-l-2 border-[var(--brand-cyan)] bg-[var(--bg-secondary)]/30 space-y-2">
                <h4 className="font-bold font-heading text-sm text-[var(--text-primary)]">The Pressure-State Engine</h4>
                <p className="text-xs">
                  Raven Adversary reconstructs Accountability Continuity. By mapping pressure propagation across institutional systems, we allow event-driven funds, M&A litigators, and restructuring advisors to trace how initial governance fracture points trigger cascading liquidity and proxy instability.
                </p>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Mapping the Institutional Pressure Topology</h3>
              <div className="space-y-4">
                <p>
                  <strong>1. Leverage Migration Tracking:</strong> Bargaining power shifts under stress. We track how leverage migrates between legacy boards, insurgent slates, counter-parties, and regulators, explicitly mapping the shift in decision-making authority based on SEC filings and covenant triggers.
                </p>
                <p>
                  <strong>2. Governance Fracture Detection:</strong> Isolated policy documents rarely betray board instability. By tracking proxy language drift and analyzing voting patterns of massive index funds, we establish a Governance Fracture Index that identifies isolated directors before contested elections climax.
                </p>
                <p>
                  <strong>3. Disclosure Detonation Scoring:</strong> We calculate the explicit probability that a required disclosure (e.g., a materialized contingent liability or a breached debt covenant) will trigger a catastrophic pressure escalation from regulators, activist holding blocks, or debt syndicate leads.
                </p>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The Institutional Accountability Archive</h3>
              <p>
                Every inference, speculative vector, and adversarial hypothesis we generate is inherently bound to verifiable reality via a cryptographically anchored Commit Layer. We utilize rigorous evidence discipline, compartmentalizing verified fact from structural inference.
              </p>
              <p>
                You are given a tamper-evident accountability receipt. Not advice. Not a generic summary. Precise, citation-backed intelligence for when the institutional ground shifts.
              </p>
            </article>
          ) : (
            /* Selected Tier 3 Article */
            <article className="prose prose-invert max-w-none space-y-8 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
              <div className="space-y-2 pb-6 border-b border-[var(--border-color)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-widest block">{activeArticle?.category}</span>
                  <span className="font-mono text-[9px] text-[var(--text-tertiary)]">{activeArticle?.date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--text-primary)] leading-tight">
                  {activeArticle?.title}
                </h2>
                <div className="pt-1 flex flex-wrap gap-4 font-mono text-[8px] uppercase tracking-wider text-[var(--text-tertiary)]">
                  <div>COMMIT: {activeArticle?.commit}</div>
                  <div>AUTHOR: {activeArticle?.author}</div>
                  <div>READ TIME: {activeArticle?.readTime}</div>
                  <div>HIGH-INTENT SEO TERM: <strong className="text-[var(--text-secondary)]">{activeArticle?.keyword}</strong></div>
                </div>
              </div>

              {activeArticle?.content}
            </article>
          )}

          <div className="pt-8 border-t border-[var(--border-color)]">
            <button 
              onClick={() => setSelectedArticleId(null)}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--brand-cyan)] hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Archive Index
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 p-8 border border-[var(--border-highlight)] bg-[var(--bg-secondary)]/10 text-center space-y-6 relative overflow-hidden group">
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-1.5 py-0.5 border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-tertiary)] font-mono text-[8px] uppercase tracking-widest rounded-sm">ARTIFACT: EXPORT</span>
        </div>
        <div className="relative z-10 flex flex-col items-center pt-4">
          <div className="inline-block px-3 py-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/20 text-[10px] font-mono tracking-widest uppercase mb-4">Export Hierarchy Access</div>
          <h3 className="text-3xl font-bold font-heading mb-4 text-[var(--text-primary)]">Submit Deal for Pressure Review</h3>
          <p className="text-[var(--text-secondary)] mb-8 max-w-xl text-center">Formulate an advisory trajectory. Map potential pathways of leverage migration and structural exposure in your targeted ecosystem.</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity rounded-none w-full sm:w-auto justify-center">
            Initiate Institutional Review <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
