import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  ShieldCheck, 
  Search, 
  Scale, 
  GitBranch, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Terminal, 
  Lock, 
  ArrowRight, 
  Zap, 
  Layers, 
  ChevronRight,
  Database,
  Hash,
  Play,
  Flame,
  ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { InteractiveBoardroomBriefing } from '../components/InteractiveBoardroomBriefing';

interface EngineStage {
  step: string;
  title: string;
  subtitle: string;
  category: 'INGESTION' | 'VERIFICATION' | 'DEBATE' | 'PROPAGATION' | 'COMMIT';
  description: string;
  coreMechanism: string;
  sampleArtifact: {
    label: string;
    code: string;
    metrics?: { label: string; value: string }[];
  };
}

const ENGINE_STAGES: EngineStage[] = [
  {
    step: "01",
    title: "SOURCE INGESTION & HASH INTEGRITY",
    subtitle: "Cryptographic SEC & Regulatory Filing Ingestion",
    category: "INGESTION",
    description: "Raven ingests 100% public source documents (Forms 8-K, 10-K, S-4, Proxy Statements, Certificates of Designation, Credit Agreements). Every ingested artifact is partitioned into semantically addressable chunks and stamped with a SHA-256 cryptographic hash to guarantee tamper-proof evidentiary provenance.",
    coreMechanism: "Zero private investigation or MNPI. Direct EDGAR & regulatory ingestion with cryptographic origin timestamping.",
    sampleArtifact: {
      label: "SHA-256 INGESTION RECORD // RAV-INM-01",
      code: `[INGEST_HASH_VERIFY]
TARGET: InMed Pharmaceuticals / Mentari Therapeutics
SOURCE_1: SEC Form 8-K (Filed: 2026-05-19) -> SHA256: 200bee763ab7189...
SOURCE_2: SEC Form S-4 Proxy/Prospectus -> SHA256: e8190cf6182a441...
STATUS: HASH_CHECK_PASSED [100% EDGAR Verified // Zero Private MNPI]`
    }
  },
  {
    step: "02",
    title: "EVIDENTIARY EXTRACTION & CLAUSE MAPPING",
    subtitle: "Precision Parsing of Contractual & Governance Topology",
    category: "INGESTION",
    description: "The engine extracts defined contractual clauses, voting matrices, liquidation preferences, conversion triggers, closing conditions precedent, termination penalty schedules, and ongoing balance sheet encumbrances into structured logic graphs.",
    coreMechanism: "Isolates interdependent legal covenants from descriptive management narrative to expose binding contractual mechanics.",
    sampleArtifact: {
      label: "CLAUSE EXTRACTION MATRIX // SECTION 3.1 CERTIFICATE OF DESIGNATION",
      code: `EXTRACTED_NODES:
- node_01: Series A Preferred Multi-Vote (3 votes per seat)
- node_02: 30% Outstanding Retention Threshold
- node_03: Mandatory Class Veto over Board Size & Auditor Selection
- node_04: Representations & Warranties Non-Survival (Section 9.01)`
    }
  },
  {
    step: "03",
    title: "CLAIM VERIFICATION DESK",
    subtitle: "5-Tier Epistemic Claim Adjudication",
    category: "VERIFICATION",
    description: "Every statement generated within the transaction model is audited by an independent verification desk and classified into strict epistemic tiers: Verified Facts, Derived Computations, Structural Inferences, Unresolved Information Gaps, or Rejected Assertions.",
    coreMechanism: "Enforces mathematical and citation discipline. Suppresses ungrounded assertions before they reach strategic analysis.",
    sampleArtifact: {
      label: "EPISTEMIC ADJUDICATION LEDGER",
      metrics: [
        { label: "Confidence Tier", value: "0.99 FACT" },
        { label: "Verification Source", value: "Form 8-K Ex 3.1" },
        { label: "Mathematical Proof", value: "6 of 7 Active Votes = 85.71%" }
      ],
      code: `[CLAIM_AUDIT: ID-014]
STATEMENT: "Fairmount designees wield 85.71% active board voting control initially."
CLASSIFICATION: FACT (Confidence: 0.99)
PROOF: 2 Preferred Directors * 3 votes = 6 votes. Total active seats = 3 (7 votes). 6/7 = 85.71%.`
    }
  },
  {
    step: "04",
    title: "MULTI-AGENT ADVERSARIAL DEBATE",
    subtitle: "Seller Advocate vs. Adversarial Buyer Interrogation",
    category: "DEBATE",
    description: "Two specialized adversarial reasoning agents debate every critical risk vector across multiple rounds. The Seller Advocate defends deal rationale, economic alignment, and standard custom; the Adversarial Buyer stress-tests downside asymmetric exposure, hold-up points, and minority marginalization.",
    coreMechanism: "Dialectical stress-testing eliminates confirmation bias and models the aggressive litigation and proxy defenses counterparties will deploy.",
    sampleArtifact: {
      label: "ADVERSARIAL ROUND 2 DEBATE TRANSCRIPT",
      code: `[SELLER_ADVOCATE]: "Protective covenants at >=30% are standard to ring-fence $490M PIPE capital for Phase 2a clinical trials into 2029."
[ADVERSARIAL_BUYER]: "The multi-vote operates independently of general fiduciary duties. If $5.7M arbitration triggers pre-closing, InMed cash ($5.2M) is depleted, causing closing failure with a $400k break fee."`
    }
  },
  {
    step: "05",
    title: "FALSIFICATION & COGNITIVE GATES",
    subtitle: "Automated Rejection of Unsupported Synergies & Timelines",
    category: "VERIFICATION",
    description: "Raven passes all debate outputs through algorithmic falsification gates. These include Temporal Collapse Prevention, Absolute Recovery Eradication, Entity Discontinuity Checking, and Section 13(d) Group Aggregation Detectors.",
    coreMechanism: "Automated rejection of rosy deal narratives. Tests whether covenants can survive extreme market stress or timeline slippage.",
    sampleArtifact: {
      label: "FALSIFICATION GATE STATUS // DE-BIASING CHECKS",
      code: `GATE_01: Temporal Collapse Prevention -> PASSED (Audited 12-mo Rule 144 lockout)
GATE_02: Absolute Recovery Eradication -> PASSED (Suppressed 100% CVR monetization)
GATE_03: Entity Discontinuity Checker -> PASSED (Disentangled Florence from Raleigh)
GATE_04: Multi-Vote Compliance (Nasdaq 5640) -> ACTIVE_ALERT (Requires Special Counsel)`
    }
  },
  {
    step: "06",
    title: "PRESSURE PROPAGATION MATRIX",
    subtitle: "Dynamic Cascade Modeling Across Transaction State Graphs",
    category: "PROPAGATION",
    description: "The engine models how a failure or constraint at one node propagates throughout the entire deal: Clause → Constraint → Counterparty Behavior → Financial Consequence → Governance Consequence → Decision Consequence.",
    coreMechanism: "Identifies hidden leverage tipping points where small operational delays or capital deficits cause cascading governance shifts.",
    sampleArtifact: {
      label: "6-STAGE PRESSURE PROPAGATION CHAIN",
      code: `[TRIGGER]: Closing Cash falls below Parent Target Cash Amount
  ↓ [CONSTRAINT]: Schedule 1.5 Net Cash Downward Adjustment activates
  ↓ [BEHAVIOR]: Acquirer refuses to extend drop-dead date without equity haircut
  ↓ [FINANCIAL]: Legacy equity interest compresses from 1.89% to 0.74%
  ↓ [GOVERNANCE]: 100% board reconstitution proceeds without minority voice
  ↓ [DECISION]: Acquirer secures unilateral operational restructuring control`
    }
  },
  {
    step: "07",
    title: "DECISION-STATE RECONSTRUCTION",
    subtitle: "Synthesizing True Leverage & Fiduciary Vulnerability",
    category: "PROPAGATION",
    description: "Rather than providing a generic summary, Raven reconstructs the exact decision-state: what each principal must decide, who holds walking leverage, what the drop-dead alternatives are, and where latent litigation exposure resides.",
    coreMechanism: "Directly arms investment bankers, special committees, general counsel, and fund managers with asymmetric negotiation intelligence.",
    sampleArtifact: {
      label: "EXECUTIVE DECISION-STATE VERDICT",
      code: `DECISION_STATE_SUMMARY:
- Primary Walkaway Leverage: Acquirer holds 100% downside floor via $150M financing condition.
- Target Vulnerability: Imminent Q4 2026 cash cliff ($20.1M balance) prevents target from exercising walk-away rights.
- Core Recommendation: Collar the downward exchange ratio adjustment to prevent sub-1.00% dilution.`
    }
  },
  {
    step: "08",
    title: "INSTITUTIONAL FIDUCIARY REPORT",
    subtitle: "Boardroom-Ready Critical Clause Dossier & Walkthrough",
    category: "COMMIT",
    description: "Outputs an 8-part institutional intelligence package: Executive Brief, Evidence Ledger, Critical Clause Cards, Adversarial Debrief, Pressure Cascade Graph, and a 7-Minute Boardroom Walkthrough module for rapid fiduciary review.",
    coreMechanism: "Distills complex multi-hundred-page SEC filings into actionable, mathematically validated boardroom briefings.",
    sampleArtifact: {
      label: "INSTITUTIONAL DELIVERABLE ARTIFACTS",
      code: `GENERATED_DELIVERABLES:
1. Executive Decision Memo (2-Page Fiduciary Synthesis)
2. Epistemic Claim Ledger (100% SEC Line Citations)
3. Critical Clause Adversarial Cards (Verbatim Language vs Asymmetric Exposure)
4. Interactive 7-Minute Boardroom Walkthrough Deck (Playback Ready)`
    }
  },
  {
    step: "09",
    title: "CRYPTOGRAPHIC COMMIT LAYER",
    subtitle: "Immutable Audit Log & Epistemic Verification Record",
    category: "COMMIT",
    description: "Every generated claim, debate conclusion, and falsification gate verdict is hashed and committed to an immutable audit record. This creates an unalterable timestamped baseline of what was knowable from public disclosures at the exact time of the transaction.",
    coreMechanism: "Protects institutional fiduciaries with a cryptographically verifiable paper trail of public-filing due diligence.",
    sampleArtifact: {
      label: "COMMIT LEDGER // SHA-256 HASH VERIFICATION",
      code: `COMMIT_ID: commit_99a8b12f45c0918e
TIMESTAMP: 2026-08-20T18:50:48.000Z
EVIDENTIARY_HASH: d41d8cd98f00b204e9800998ecf8427e...
SIGNATURE: SEC_EDGAR_VERIFIED // ZERO_MNPI_CONFIRMED
STATUS: IMMUTABLY_COMMITTED`
    }
  }
];

export default function RavenEngine() {
  const [activeStage, setActiveStage] = useState(0);
  const [isBriefingOpen, setIsBriefingOpen] = useState(false);

  return (
    <div className="py-12 md:py-20 px-6 max-w-7xl mx-auto space-y-24">
      
      {/* HEADER / HERO */}
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
          <Cpu className="w-3 h-3 text-[var(--brand-cyan)]" />
          THE ARCHITECTURAL BLUEPRINT
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading text-[var(--text-primary)]">
          The Raven Engine
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
          How Raven reconstructs dynamic transaction decision-states from public SEC evidence, falsifies deal assumptions, and models pressure propagation across complex M&A agreements.
        </p>

        <div className="pt-2 flex flex-wrap gap-4 items-center">
          <button
            onClick={() => setIsBriefingOpen(true)}
            className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            <Play className="w-3.5 h-3.5" /> Launch Live Session Walkthrough
          </button>
          
          <Link
            to="/methodology"
            className="border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            The Raven Standard <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* QUICK ARCHITECTURE PIPELINE OVERVIEW */}
      <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 p-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-6">
          <div>
            <div className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-widest font-bold">
              9-STAGE DETERMINISTIC PIPELINE
            </div>
            <h2 className="text-xl font-bold font-heading text-[var(--text-primary)] mt-1">
              End-to-End Decision-State Reconstruction Flow
            </h2>
          </div>
          <div className="font-mono text-xs text-[var(--text-tertiary)] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            CRYPTOGRAPHIC PROVENANCE & ZERO MNPI
          </div>
        </div>

        {/* 9-Stage Progress Tabs */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
          {ENGINE_STAGES.map((stage, idx) => (
            <button
              key={stage.step}
              onClick={() => setActiveStage(idx)}
              className={`p-3 text-left border font-mono transition-all flex flex-col justify-between ${
                activeStage === idx
                  ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 text-[var(--text-primary)] shadow-sm'
                  : 'border-[var(--border-color)]/60 bg-[var(--bg-primary)] hover:border-[var(--border-color)] text-[var(--text-tertiary)]'
              }`}
            >
              <div className="text-xs font-bold">{stage.step}</div>
              <div className="text-[9px] tracking-tight uppercase line-clamp-2 mt-2 font-medium">
                {stage.title.split(' ')[0]} {stage.title.split(' ')[1] || ''}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* DETAILED ACTIVE STAGE INSPECTOR */}
      <div className="border border-[var(--border-color)] bg-[var(--bg-primary)] p-8 md:p-12 space-y-8">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 border-b border-[var(--border-color)] pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase font-bold text-[var(--brand-cyan)]">
              <span className="px-2 py-0.5 border border-[var(--brand-cyan)]/40 bg-[var(--brand-cyan)]/10">STAGE {ENGINE_STAGES[activeStage].step}</span>
              <span>// {ENGINE_STAGES[activeStage].category}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
              {ENGINE_STAGES[activeStage].title}
            </h2>
            <div className="text-sm font-mono text-[var(--text-tertiary)]">
              {ENGINE_STAGES[activeStage].subtitle}
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              disabled={activeStage === 0}
              onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
              className="px-3 py-1.5 border border-[var(--border-color)] disabled:opacity-30 hover:border-[var(--text-primary)] transition-colors"
            >
              PREV
            </button>
            <span className="text-[var(--text-tertiary)]">{activeStage + 1} / {ENGINE_STAGES.length}</span>
            <button
              disabled={activeStage === ENGINE_STAGES.length - 1}
              onClick={() => setActiveStage(prev => Math.min(ENGINE_STAGES.length - 1, prev + 1))}
              className="px-3 py-1.5 border border-[var(--border-color)] disabled:opacity-30 hover:border-[var(--text-primary)] transition-colors"
            >
              NEXT
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Stage Narrative Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider font-bold">
                OPERATIONAL MANDATE
              </div>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {ENGINE_STAGES[activeStage].description}
              </p>
            </div>

            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 space-y-2">
              <div className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase font-bold tracking-wider">
                CORE STRUCTURAL MECHANISM
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {ENGINE_STAGES[activeStage].coreMechanism}
              </p>
            </div>

            {ENGINE_STAGES[activeStage].sampleArtifact.metrics && (
              <div className="grid grid-cols-3 gap-3 pt-2">
                {ENGINE_STAGES[activeStage].sampleArtifact.metrics?.map((m, i) => (
                  <div key={i} className="p-3 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20">
                    <div className="font-mono text-[8px] text-[var(--text-tertiary)] uppercase">{m.label}</div>
                    <div className="font-mono text-xs font-bold text-[var(--text-primary)] mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Real Sanitized Engine Artifact Box */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center justify-between font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-wider border-b border-[var(--border-color)] pb-1.5">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Terminal className="w-3 h-3" /> {ENGINE_STAGES[activeStage].sampleArtifact.label}
              </span>
              <span>VERIFIED_OUTPUT</span>
            </div>
            
            <div className="p-5 border border-[var(--border-color)] bg-[var(--bg-secondary)] font-mono text-xs text-[var(--text-primary)] leading-relaxed overflow-x-auto whitespace-pre-wrap selection:bg-[var(--brand-cyan)]/30">
              {ENGINE_STAGES[activeStage].sampleArtifact.code}
            </div>
            
            <div className="font-mono text-[9px] text-[var(--text-tertiary)] text-right pt-1">
              PRODUCED BY RAVEN ADVERSARY ENGINE // EDGAR PARSER CORE
            </div>
          </div>

        </div>
      </div>

      {/* ALL 9 STAGES SEQUENTIAL EXPEDITION */}
      <div className="space-y-12">
        <div className="border-b border-[var(--border-color)] pb-4">
          <div className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-widest font-bold">
            FULL SYSTEM SPECIFICATION
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)] mt-1">
            Exhaustive 9-Stage Engine Blueprint
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-2">
            Explore how each module isolates leverage, eliminates hallucinations, and provides mathematical verification.
          </p>
        </div>

        <div className="space-y-8">
          {ENGINE_STAGES.map((stg, i) => (
            <div 
              key={stg.step}
              id={`stage-${stg.step}`}
              className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--border-highlight)] transition-colors space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-color)]/60 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center font-mono font-bold text-lg bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/30">
                    {stg.step}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest">{stg.category}</div>
                    <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">{stg.title}</h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-[var(--text-tertiary)] uppercase border border-[var(--border-color)] px-3 py-1">
                  {stg.subtitle}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm">
                <div className="lg:col-span-7 space-y-4 text-[var(--text-secondary)] leading-relaxed">
                  <p>{stg.description}</p>
                  <div className="font-mono text-xs text-[var(--text-primary)] bg-[var(--bg-secondary)]/40 p-3 border border-[var(--border-color)]">
                    <span className="text-[var(--brand-cyan)] font-bold">MECHANISM:</span> {stg.coreMechanism}
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] font-mono text-[11px] text-[var(--text-primary)] whitespace-pre-wrap">
                    {stg.sampleArtifact.code}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA: REQUEST TRANSACTION ASSESSMENT */}
      <div className="p-8 md:p-12 border border-[var(--brand-cyan)]/40 bg-[var(--brand-cyan)]/5 space-y-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] text-[var(--brand-cyan)] uppercase font-bold tracking-widest">
          <Flame className="w-3.5 h-3.5 text-[var(--brand-cyan)]" />
          TEST THE ENGINE ON A LIVE TRANSACTION
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--text-primary)]">
          Reconstruct the True Leverage of Your Active Transaction
        </h2>
        
        <p className="text-base text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          Submit the ticker, CIK, or target entity of any announced or rumored transaction. Raven reconstructs the complete 9-stage decision-state graph within 48 to 72 hours.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/request-assessment"
            className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Request Transaction Assessment
          </Link>
          <button
            onClick={() => setIsBriefingOpen(true)}
            className="border border-[var(--brand-cyan)] text-[var(--brand-cyan)] hover:bg-[var(--brand-cyan)]/10 px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
          >
            <Play className="w-3.5 h-3.5" /> Launch 7-Min Briefing
          </button>
        </div>
      </div>

      <InteractiveBoardroomBriefing
        isOpen={isBriefingOpen}
        onClose={() => setIsBriefingOpen(false)}
      />

    </div>
  );
}
