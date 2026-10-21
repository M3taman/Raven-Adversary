# Implementation Plan: Institutional Conversion & Live Deal Integration

## 1. Executive Summary & Objective
Transform `ravenadversary.com` from an abstract analytical whitepaper into an urgent, high-converting commercial transaction intelligence desk. This plan implements the three approved strategic mandates:
1. **Commercial Pricing Realignment:** Replace the legacy $10,000 / $25,000 pricing with a frictionless **$2,499 Single-Transaction Forensic Dossier (60-Minute Turnaround)** and **$7,500/month Institutional Desk Retainer** across all UI touchpoints, forms, and the Corvus bot.
2. **Above-the-Fold Live Deal Showcase (4 Marquee Transactions):** Feature the 4 authentic Raven Engine live audit byproducts with interactive modal PDF previews and instant downloads:
   - **The Baldwin Insurance Group (NYSE: BWIN / $7.7B Take-Private):** Omission of *MFW* Majority-of-the-Minority & $298.45M TRA Insider Windfall.
   - **Option Care Health (NASDAQ: OPCH / $5.8B Buyout):** Section 8.03(c) Several (Non-Joint) Sponsor Guarantee Gap & Vertical Antitrust Asymmetry.
   - **Integer Holdings (NYSE: ITGR / $4.3B KKR Buyout):** 60-Minute Blind Auction *Revlon* Compression & DGCL § 251 Statutory Majority Vote Drag.
   - **Penske Automotive Group (NYSE: PAG / $212.00/sh Controller Take-Private):** Defective DGCL § 144 "Votes Cast" Cleansing Threshold (15% Float Approval Vulnerability).
3. **Dedicated Buyer Segment: M&A Litigators & Appraisal Arbitrage (DGCL § 262):** Deploy a dedicated, high-impact section tailored directly to plaintiff/defense M&A litigation counsel and special situations arbitrage desks.
4. **Hero Frictionless Intake Bar:** Add an instant ticker/CIK inquiry bar directly above the fold to capture warm institutional leads without multi-step form hurdles.

---

## 2. File & Component Architecture

### A. New & Enhanced Components
1. **`src/components/LiveDealShowcase.tsx` (New Component):**
   - Interactive, tabbed deal station displaying the 4 live October 2026 deals.
   - Live metrics per deal: Target Ticker, CIK, Deal Value, Lead Risk Vector, Composite Risk Score.
   - Actionable CTAs:
     - 📄 **View Clause Card** (opens embedded interactive PDF modal pointing directly to `/assets/aistudio/...`).
     - 📄 **View Executive Brief** (opens 2-page Board memo PDF).
     - ⬇️ **Download 16-Chapter Sample Audit**.
     - 🎙️ **Read Dialectic Debate Playback** (displays real Seller vs Buyer agent transcript).
   - Embedded PDF Modal Viewer enabling instant document inspection without leaving the page.

2. **`src/components/LitigationArbitrageDesk.tsx` (New Component):**
   - High-contrast institutional section: *"Engineered for M&A Fiduciary Litigators, Appraisal Arbitrage Desks (DGCL § 262), and Special Situations Funds"*.
   - 4 specific clinical forensic targets detected by Raven:
     1. **Defective MFW Cleansing & Entire Fairness Triggers:** Exposing "votes cast" loopholes (Penske PAG) and missing minority vote conditions (Baldwin BWIN).
     2. **Side-Car TRA & Insider Cash Windfalls:** Tracking Tax Receivable Agreement acceleration payouts that divert value from the public float (Baldwin's $298.5M cap).
     3. **Truncated Revlon Auctions & Post-Signing Locks:** Documenting 60-minute blind auction compression (Integer ITGR) and deal break fee drag.
     4. **Several-vs-Joint Sponsor Liability Gaps:** Isolating non-fungible sponsor guarantees (Option Care OPCH) where one party can default with zero cross-guarantee.

3. **`src/components/HeroQuickIntake.tsx` (New Component):**
   - Clean, zero-friction input bar placed directly beneath the hero headline:
     `[ Enter Target Ticker or CIK ] + [ Institutional Email ] -> [ Request 1-Page Clause Card (Complimentary) ]`.
   - Directly connects to Firestore `leads` collection with an expedited `tag: "rapid_clause_card"`.

### B. Page Updates & Commercial Realignment
1. **`src/pages/Home.tsx`:**
   - Mount `HeroQuickIntake` right below the hero value proposition.
   - Mount `LiveDealShowcase` prominently in the upper fold.
   - Mount `LitigationArbitrageDesk` directly preceding the buyer personas.
   - Update the commercial pricing block from $10,000 / $25,000 to:
     - **Card 1: Single-Transaction Forensic Dossier — $2,499** (60-Minute Turnaround from CIK / 8-K / PREM14A. Includes 2-Page Executive Risk Brief, Contractual Clause Card, 6-Vector Risk Index, and 16-Chapter Statutory Citation Registry).
     - **Card 2: Institutional Desk Retainer — $7,500 / month** (Unlimited live EDGAR deal runs, Schedule 13E-3 / PREM14A delta alerts, custom adversarial directive testing, and dedicated analyst hotline).
   - Update Schema.org FAQ structured data to reflect the $2,499 and $7,500 pricing model.

2. **`src/components/InstitutionalDeliverables.tsx` & `src/pages/TransactionReview.tsx`:**
   - Update pricing cards and checkout flows to $2,499 (Single Dossier) and $7,500/mo (Desk Retainer).
   - Clarify turnaround SLAs: 60-Minute Rapid Risk Memo & Clause Card delivery; 24-hour delivery for the complete 16-chapter forensic registry.

3. **`src/pages/RequestAssessment.tsx`:**
   - Update plan selection radio buttons:
     - $2,499 Single Dossier (Rapid 60-Minute Turnaround)
     - $7,500 / month Institutional Desk Retainer
     - Custom Enterprise / White-Glove Special Committee Engagement

4. **`src/components/Corvus.tsx` (AI Desk Chatbot):**
   - Update pricing prompt triggers:
     - When asked "What does it cost?", "Pricing", "What do I get for $10,000?", respond with the $2,499 Single Forensic Dossier (60-minute turnaround) and $7,500/mo Desk Retainer.
     - Add sample recommendations highlighting the 4 live deals (BWIN, OPCH, ITGR, PAG).

5. **`src/pages/Governance.tsx` & `src/pages/Lexicon.tsx`:**
   - Synchronize fee mentions from $10,000 to the $2,499 single assessment and $7,500/mo retainer.

---

## 3. Step-by-Step Execution Plan

- [ ] **Step 1: Create `src/components/HeroQuickIntake.tsx`**
  - Implement streamlined two-input bar (`ticker`, `workEmail`) with high-conversion institutional styling.
  - Connect submission to Firestore `leads` collection with instant feedback and reference ID.

- [ ] **Step 2: Create `src/components/LiveDealShowcase.tsx`**
  - Map the 4 authentic deals using the uploaded PDF and Markdown paths in `/public/assets/aistudio/`.
  - Include interactive modal viewer allowing direct reading of the Clause Cards, Executive Briefs, and Dialectic Playbacks.
  - Include direct download links for the 16-chapter forensic audits.

- [ ] **Step 3: Create `src/components/LitigationArbitrageDesk.tsx`**
  - Implement the fiduciary litigator & appraisal arbitrage section with technical legal detail (DGCL § 262, MFW dual-cleansing, TRAs, Revlon auction pacing).

- [ ] **Step 4: Update `src/pages/Home.tsx`**
  - Integrate `HeroQuickIntake`, `LiveDealShowcase`, and `LitigationArbitrageDesk`.
  - Update pricing cards and FAQ schema to $2,499 and $7,500/mo.

- [ ] **Step 5: Synchronize Pricing Across Supporting Pages & Corvus**
  - Update `src/components/InstitutionalDeliverables.tsx`.
  - Update `src/pages/TransactionReview.tsx`.
  - Update `src/pages/RequestAssessment.tsx`.
  - Update `src/components/Corvus.tsx` knowledge base and prompt chips.
  - Update `src/pages/Governance.tsx` and `src/pages/Lexicon.tsx`.

- [ ] **Step 6: Build Verification & Dev Server Validation**
  - Run `lint_applet` (`tsc --noEmit`) to verify zero type regressions.
  - Run `compile_applet` to confirm clean production build.
  - Refresh dev server and verify PDF rendering and modal interactivity.
