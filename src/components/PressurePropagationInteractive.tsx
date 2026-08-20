import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GitBranch, Shield, AlertCircle, FileText, ArrowRight, CornerDownRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface PressureNetwork {
  id: string;
  dealName: string;
  dealType: string;
  targetSector: string;
  dealValue: string;
  summary: string;
  nodes: {
    id: string;
    label: string;
    tier: 'FACT' | 'DERIVED' | 'INFERENCE' | 'HYPOTHESIS';
    adjudication: 'VERIFIED' | 'DERIVED' | 'INFERRED' | 'DISPUTED';
    filingRef: string;
    details: string;
    consequence: string;
  }[];
}

const NETWORKS: PressureNetwork[] = [
  {
    id: 'first-bancorp',
    dealName: 'First Bancorp / First Carolina',
    dealType: 'Bank M&A Consolidation',
    targetSector: 'Regional Banking & CRE',
    dealValue: '$166.4M',
    summary: 'Reconstruction of target CRE loan book quality vs buyer CET1 pro-forma capital cushion under post-merger rate stress.',
    nodes: [
      {
        id: 'node-1',
        label: 'CRE Concentration Disparity',
        tier: 'FACT',
        adjudication: 'VERIFIED',
        filingRef: 'Form 10-K Item 7 (MD&A), Page 54',
        details: 'Target loan book has $842M in CRE loans representing 312% of risk-based capital, well above regulatory benchmark of 300%.',
        consequence: 'Establishes elevated baseline sensitivity to commercial real estate refinancing friction in 2026–2027.'
      },
      {
        id: 'node-2',
        label: 'ACL Coverage Lag',
        tier: 'DERIVED',
        adjudication: 'DERIVED',
        filingRef: 'S-4 Pro Forma Financial Statements, Schedule IV',
        details: 'Target Allowance for Credit Losses (ACL) stands at 1.08% vs Regional Peer group mean of 1.42%, leaving a $4.1M normalized reserve gap.',
        consequence: 'Pre-closing credit markdowns must be absorbed directly by buyer pro-forma tangible common equity.'
      },
      {
        id: 'node-3',
        label: 'MAE Exclusion Trapdoor',
        tier: 'FACT',
        adjudication: 'VERIFIED',
        filingRef: 'Merger Agreement Ex 2.1, Section 8.02',
        details: 'Standard Material Adverse Effect definition expressly excludes general CRE market valuation write-downs from triggering buyer walk-away rights.',
        consequence: 'Buyer cannot terminate for asset-quality degradation unless disproportionate to entire southeastern US banking sector.'
      },
      {
        id: 'node-4',
        label: 'CET1 Ratio Dilution',
        tier: 'INFERENCE',
        adjudication: 'INFERRED',
        filingRef: 'Raven Capital Stress Simulation RAV-FB-01',
        details: 'Simulated 250 bps stress mark on $842M CRE loan assets causes an estimated 132 bps compression on pro-forma CET1 to 10.10%.',
        consequence: 'Increases regulatory scrutiny during Federal Reserve approval window and potentially triggers capital conservation requirements.'
      }
    ]
  },
  {
    id: 'fsea-cambridge',
    dealName: 'First Seacoast Bancorp / Cambridge',
    dealType: 'Bank Defense & ESOP Voting',
    targetSector: 'Community Banking / Proxy Contest',
    dealValue: '$28.5M',
    summary: 'Forensic audit of ESOP pass-through voting mechanics revealing an active 47,058-share governance inversion gap against activist block.',
    nodes: [
      {
        id: 'node-1',
        label: 'Gross ESOP Holdings (8.80%)',
        tier: 'FACT',
        adjudication: 'VERIFIED',
        filingRef: 'Schedule 13G filed Feb 10, 2026',
        details: 'ESOP Trust reports gross ownership of 414,733 shares of Common Stock (8.80% of 4,716,923 total shares outstanding).',
        consequence: 'Superficially appears to exceed activist DAB Financial stake (8.16%) to form an unassailable management defensive block.'
      },
      {
        id: 'node-2',
        label: 'Pass-Through Voting Bifurcation',
        tier: 'FACT',
        adjudication: 'VERIFIED',
        filingRef: 'Form DEF 14A, ESOP Trust Agreement Sec 4.2',
        details: 'Trustee possesses sole voting power over only 337,789 shares (7.16%). Remaining 76,944 shares pass through to employee participants.',
        consequence: 'Neutralizes 18.5% of the defensive buffer in a contested vote where employee sentiment is uncommitted.'
      },
      {
        id: 'node-3',
        label: 'Active Governance Inversion Gap',
        tier: 'DERIVED',
        adjudication: 'DERIVED',
        filingRef: 'Schedule 13D (DAB Financial) & Schedule 13G Comparison',
        details: 'DAB Financial holds 384,847 shares (8.16%), creating an immediate 47,058 share deficit against the Trustee’s assured 337,789 block.',
        consequence: 'The board is mathematically underwater in a contested proxy solicitation unless retail turnout exceeds 85%.'
      },
      {
        id: 'node-4',
        label: 'Unpriced Failed-Merger Surcharge',
        tier: 'INFERENCE',
        adjudication: 'INFERRED',
        filingRef: 'Item 1A Risk Factors, 10-K 2026',
        details: 'A delayed or scuttled Cambridge merger forces standalone FSEA to incur $5.2M in cumulative regulatory penalties, fees, and valuation adjustments.',
        consequence: 'Converts what was treated as an 8% structural hedge into an active strategic vulnerability.'
      }
    ]
  },
  {
    id: 'imaq-vci',
    dealName: 'IMAQ / VCI Holdings',
    dealType: 'Cross-Border De-SPAC',
    targetSector: 'Biofuels & International Energy',
    dealValue: '$1.0B',
    summary: 'Audit deadline cliff and zero-survival liability shift placing 100% of latent overseas operating risk on the buyer.',
    nodes: [
      {
        id: 'node-1',
        label: 'IFRS Audit Delivery Cliff',
        tier: 'FACT',
        adjudication: 'VERIFIED',
        filingRef: 'Form S-4 Business Combination Agreement Sec 9.01(b)',
        details: 'Agreement stipulates a hard June 30, 2026 deadline for audited IFRS financials for Vietnamese operating entities with no cure mechanism.',
        consequence: 'Provides IMAQ a free unilateral termination right if local bureaucratic or accounting audits encounter friction.'
      },
      {
        id: 'node-2',
        label: '0% Survival of Reps & Warranties',
        tier: 'FACT',
        adjudication: 'VERIFIED',
        filingRef: 'Merger Agreement Article X, Section 10.01',
        details: 'All representations and warranties expire immediately upon closing. Zero post-closing indemnification escrow or survival period.',
        consequence: 'Once 100M consideration shares are issued, 100% of latent environmental, tax, and labor liabilities in Vietnam remain with buyer.'
      },
      {
        id: 'node-3',
        label: 'Missing Transition Agreements (TSA)',
        tier: 'FACT',
        adjudication: 'VERIFIED',
        filingRef: 'Exhibits Index, Form S-4 Schedule VII',
        details: 'No binding Transition Services Agreements or executive retention lockups are executed for key Vietnamese operational leads (EQN/VNB).',
        consequence: 'Creates an immediate post-closing talent cliff where operational continuity on a $1B asset relies entirely on discretionary pool pledges.'
      },
      {
        id: 'node-4',
        label: 'Terminal Fiduciary Risk State',
        tier: 'INFERENCE',
        adjudication: 'INFERRED',
        filingRef: 'Raven Clarity Framework Assessment',
        details: 'Combination of audit deadline binary risk and zero-recourse structure places deal architecture in terminal governance category.',
        consequence: 'Demands deterministic remediation: procurement of RWI insurance or a 10% indemnity escrow before closing.'
      }
    ]
  }
];

export function PressurePropagationInteractive() {
  const [activeNetworkId, setActiveNetworkId] = useState(NETWORKS[0].id);
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);

  const activeNetwork = NETWORKS.find(n => n.id === activeNetworkId) || NETWORKS[0];
  const selectedNode = activeNetwork.nodes[selectedNodeIndex] || activeNetwork.nodes[0];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'FACT':
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
      case 'DERIVED':
        return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10';
      case 'INFERENCE':
        return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
      case 'HYPOTHESIS':
        return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
      default:
        return 'text-gray-400 border-gray-500/30 bg-gray-500/10';
    }
  };

  return (
    <div className="border border-[var(--border-color)] bg-[var(--bg-primary)] p-6 md:p-10 space-y-8">
      
      {/* Header with Deal Selector */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[var(--border-color)] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-[0.2em] mb-2">
            <GitBranch className="w-3.5 h-3.5" /> INTERACTIVE PRESSURE TOPOLOGY
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
            {activeNetwork.dealName}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
            {activeNetwork.summary}
          </p>
        </div>

        {/* Deal Tab Switcher */}
        <div className="flex flex-wrap gap-2 shrink-0">
          {NETWORKS.map(net => (
            <button
              key={net.id}
              onClick={() => {
                setActiveNetworkId(net.id);
                setSelectedNodeIndex(0);
              }}
              className={`px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider font-bold transition-all border ${
                activeNetworkId === net.id
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-transparent shadow-md'
                  : 'bg-[var(--bg-secondary)]/50 text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--border-highlight)]'
              }`}
            >
              {net.dealName.split('/')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Propagation Chain */}
      <div className="space-y-4">
        <div className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest flex items-center justify-between">
          <span>PROPAGATION SEQUENCE // CLICK ANY NODE TO INSPECT EVIDENCE</span>
          <span className="text-[var(--brand-cyan)] font-bold">4 NODES MAPPED</span>
        </div>

        {/* Responsive Grid of Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeNetwork.nodes.map((node, idx) => (
            <button
              key={node.id}
              onClick={() => setSelectedNodeIndex(idx)}
              className={`p-5 text-left border transition-all duration-300 relative flex flex-col justify-between ${
                selectedNodeIndex === idx
                  ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5 shadow-[0_0_20px_rgba(0,184,217,0.1)]'
                  : 'border-[var(--border-color)] bg-[var(--bg-secondary)]/30 hover:border-[var(--border-highlight)]'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold text-[var(--brand-cyan)]">
                    NODE 0{idx + 1}
                  </span>
                  <span className={`px-1.5 py-0.5 border text-[8px] font-mono uppercase font-semibold ${getTierColor(node.tier)}`}>
                    {node.tier}
                  </span>
                </div>
                <div className="text-sm font-bold font-heading text-[var(--text-primary)] leading-snug">
                  {node.label}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--border-color)]/60 flex items-center justify-between text-[9px] font-mono text-[var(--text-tertiary)]">
                <span className="truncate max-w-[140px]">{node.filingRef.split(',')[0]}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${selectedNodeIndex === idx ? 'text-[var(--brand-cyan)] translate-x-0.5' : ''}`} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Node Deep Dive Inspection Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeNetwork.id}-${selectedNode.id}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="p-6 md:p-8 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 grid lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left: Claim & Filing Citation */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
                NODE 0{selectedNodeIndex + 1}: {selectedNode.label}
              </span>
              <span className={`px-2 py-0.5 border text-[9px] font-mono tracking-widest uppercase font-semibold ${getTierColor(selectedNode.tier)}`}>
                EPISTEMIC TIER: {selectedNode.tier}
              </span>
              <span className="px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[9px] font-mono uppercase font-semibold">
                STATUS: {selectedNode.adjudication}
              </span>
            </div>

            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-2">
              <div className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> PRIMARY SOURCE FILING PROVENANCE
              </div>
              <div className="font-mono text-xs text-[var(--text-primary)] font-bold">
                {selectedNode.filingRef}
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed pt-1">
                {selectedNode.details}
              </p>
            </div>
          </div>

          {/* Right: Structural Consequence */}
          <div className="lg:col-span-5 p-5 border border-amber-500/20 bg-amber-500/5 space-y-3">
            <div className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" /> STRUCTURAL PRESSURE CASCADE
            </div>
            <p className="text-xs text-[var(--text-primary)] leading-relaxed font-medium">
              {selectedNode.consequence}
            </p>
            <div className="pt-2 text-[9px] font-mono text-[var(--text-tertiary)] border-t border-amber-500/20">
              AUDITED CLAIM RECORD // 100% PUBLIC FILING TRACEABILITY
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
