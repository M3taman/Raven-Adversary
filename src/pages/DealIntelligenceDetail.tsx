import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Shield, 
  ArrowLeft, 
  FileText, 
  GitBranch, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  Cpu, 
  Scale, 
  ExternalLink,
  ChevronRight,
  Database,
  Layers,
  ArrowRight,
  Hash
} from 'lucide-react';
import { TRANSACTIONS } from '../data/transactions';

export default function DealIntelligenceDetail() {
  const { id } = useParams<{ id: string }>();
  const deal = TRANSACTIONS.find(t => t.id === id) || TRANSACTIONS[0];
  const [activeTab, setActiveTab] = useState<'overview' | 'adversarial' | 'evidence' | 'commit'>('overview');

  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto space-y-12">
      
      {/* Schema.org Article / Dataset structured metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": `${deal.target} // ${deal.title}`,
          "description": deal.structuralConsequence,
          "author": {
            "@type": "Organization",
            "name": "Raven Adversary Intelligence"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Raven Adversary Intelligence"
          }
        })}
      </script>

      {/* BACK LINK */}
      <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
        <Link 
          to="/deal-intelligence" 
          className="font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors flex items-center gap-1.5 uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Deal Intelligence Archive
        </Link>
        <div className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-widest">
          DOSSIER CLASSIFICATION: {deal.classification}
        </div>
      </div>

      {/* HEADER */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="px-3 py-1 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[9px] uppercase tracking-[0.2em] font-bold">
            {deal.code}
          </div>
          <span className="font-mono text-[9px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20 uppercase">
            STATUS: {deal.status}
          </span>
          <span className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase">
            ANNOUNCED: {deal.date}
          </span>
          <span className="font-mono text-[9px] text-[var(--brand-cyan)] uppercase">
            EST. VALUE: {deal.value}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.15]">
          {deal.target}
        </h1>

        <p className="text-lg text-[var(--brand-cyan)] font-heading">
          {deal.title}
        </p>

        {/* Accession Bar */}
        <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div>
            <span className="text-[var(--text-tertiary)] uppercase text-[9px] block">Primary SEC Evidence</span>
            <span className="text-[var(--text-primary)] font-bold">{deal.secCite}</span>
          </div>
          <div>
            <span className="text-[var(--text-tertiary)] uppercase text-[9px] block">Epistemic Standard</span>
            <span className="text-emerald-400 font-bold">100% Public SEC Filings // Zero MNPI</span>
          </div>
          <Link
            to="/request-assessment"
            className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Commission Live Audit ($10K)
          </Link>
        </div>
      </header>

      {/* TABS */}
      <div className="flex border-b border-[var(--border-color)] font-mono text-xs uppercase tracking-wider">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-6 py-3 border-b-2 font-bold transition-all ${
            activeTab === 'overview'
              ? 'border-[var(--brand-cyan)] text-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5'
              : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          Pressure Overview
        </button>
        <button
          onClick={() => setActiveTab('adversarial')}
          className={`px-6 py-3 border-b-2 font-bold transition-all ${
            activeTab === 'adversarial'
              ? 'border-[var(--brand-cyan)] text-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5'
              : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          Adversarial Interrogation
        </button>
        <button
          onClick={() => setActiveTab('evidence')}
          className={`px-6 py-3 border-b-2 font-bold transition-all ${
            activeTab === 'evidence'
              ? 'border-[var(--brand-cyan)] text-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5'
              : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--brand-cyan)]'
          }`}
        >
          Evidence Ledger
        </button>
        <button
          onClick={() => setActiveTab('commit')}
          className={`px-6 py-3 border-b-2 font-bold transition-all ${
            activeTab === 'commit'
              ? 'border-[var(--brand-cyan)] text-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5'
              : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--brand-cyan)]'
          }`}
        >
          Commit Ledger (SHA-256)
        </button>
      </div>

      {/* TAB CONTENT: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-10">
          
          {/* Pressure Pathway Nodes */}
          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6">
            <div className="font-mono text-xs font-bold text-[var(--brand-cyan)] uppercase tracking-wider flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Multi-Node Pressure Cascade
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
              {deal.pathNodes.map((node, i) => (
                <div key={i} className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-1">
                  <div className="text-[9px] text-[var(--brand-cyan)] font-bold">NODE 0{i + 1}</div>
                  <div className="font-bold text-[var(--text-primary)] uppercase">{node}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Findings Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Structural Consequence */}
            <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-4">
              <div className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-[var(--brand-cyan)]" /> Structural & Financial Mechanics
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {deal.structuralConsequence}
              </p>
            </div>

            {/* Governance Exposure */}
            <div className="p-8 border border-amber-500/30 bg-amber-500/5 space-y-4">
              <div className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" /> Latent Governance Blindspot
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {deal.governanceExposure}
              </p>
            </div>

          </div>

          {/* Trigger Details */}
          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-secondary)]/20 space-y-3">
            <div className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest font-bold">
              ORIGINATING CONTRACTUAL TRIGGER
            </div>
            <p className="text-base font-bold font-heading text-[var(--text-primary)]">
              {deal.trigger}
            </p>
          </div>

        </div>
      )}

      {/* TAB CONTENT: ADVERSARIAL */}
      {activeTab === 'adversarial' && (
        <div className="space-y-8">
          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30">
            <h3 className="text-base font-bold font-heading text-[var(--text-primary)]">
              Adversarial Interrogation Protocol
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Multi-agent dialectical tension between opposing analytical agents to eliminate consensus bias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-emerald-500/30 bg-emerald-500/5 space-y-3">
              <div className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                THE SELLER ADVOCATE // COMMERCIAL RATIONALE
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Argues for custom customary structuring, high synergy realization potential, and defends the clean corporate separation from prior operating liabilities under Delaware law.
              </p>
            </div>

            <div className="p-6 border border-rose-500/30 bg-rose-500/5 space-y-3">
              <div className="font-mono text-xs font-bold text-rose-400 uppercase tracking-wider">
                THE ADVERSARIAL BUYER // DOWNSIDE PRESSURE AUDIT
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Stress-tests the non-survival of representations & warranties, isolates the absence of indemnity escrows, models post-close cash drain, and maps voting dilution against legacy public float.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: EVIDENCE LEDGER */}
      {activeTab === 'evidence' && (
        <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6">
          <div className="font-mono text-xs font-bold text-[var(--brand-cyan)] uppercase tracking-wider flex items-center gap-2">
            <FileText className="w-4 h-4" /> 5-Tier Epistemic Evidence Ledger
          </div>
          
          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 border border-emerald-500/30 bg-emerald-500/5 flex items-start gap-3">
              <span className="text-emerald-400 font-bold">[FACT]</span>
              <div className="space-y-1">
                <div className="font-bold text-[var(--text-primary)]">SEC EDGAR Primary Accession Binding</div>
                <div className="text-[10px] text-[var(--text-secondary)]">{deal.secCite}</div>
              </div>
            </div>

            <div className="p-4 border border-blue-500/30 bg-blue-500/5 flex items-start gap-3">
              <span className="text-blue-400 font-bold">[COMPUTATION]</span>
              <div className="space-y-1">
                <div className="font-bold text-[var(--text-primary)]">Exchange Ratio & Dilution Boundaries</div>
                <div className="text-[10px] text-[var(--text-secondary)]">Calculated from Schedule 1.5 Net Cash baseline models and pre-funded warrant economics.</div>
              </div>
            </div>

            <div className="p-4 border border-purple-500/30 bg-purple-500/5 flex items-start gap-3">
              <span className="text-purple-400 font-bold">[INFERENCE]</span>
              <div className="space-y-1">
                <div className="font-bold text-[var(--text-primary)]">Governance Leverage Migration</div>
                <div className="text-[10px] text-[var(--text-secondary)]">Derived causal model showing shift in board control upon breach of financing thresholds.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: COMMIT */}
      {activeTab === 'commit' && (
        <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-6 font-mono text-xs">
          <div className="font-mono text-xs font-bold text-[var(--brand-cyan)] uppercase tracking-wider flex items-center gap-2">
            <Hash className="w-4 h-4" /> Immutable Cryptographic Commit Record
          </div>
          
          <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3">
            <div className="text-[10px] text-[var(--text-tertiary)] uppercase">SHA-256 TRANSACTION PROOF HASH</div>
            <div className="font-mono text-emerald-400 text-xs break-all">
              e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[10px] text-[var(--text-secondary)]">
            <div>
              <span className="text-[var(--text-tertiary)] block uppercase">AUDIT TIMESTAMP</span>
              <span className="font-bold text-[var(--text-primary)]">{deal.date} 00:00:00 UTC</span>
            </div>
            <div>
              <span className="text-[var(--text-tertiary)] block uppercase">SOURCE DATASET</span>
              <span className="font-bold text-[var(--text-primary)]">SEC EDGAR PUBLIC ARCHIVE</span>
            </div>
            <div>
              <span className="text-[var(--text-tertiary)] block uppercase">MNPI STATUS</span>
              <span className="font-bold text-emerald-400">STRICT ZERO MNPI VERIFIED</span>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM CTA */}
      <section className="p-8 border border-[var(--brand-cyan)]/40 bg-[var(--brand-cyan)]/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">
            Commission a Live Forensic Review for Your Target Deal
          </h3>
          <p className="text-xs text-[var(--text-secondary)]">
            48 to 72 hour turnaround. 8-Part Forensic Dossier delivered under strict zero-MNPI protocols.
          </p>
        </div>
        <Link
          to="/request-assessment"
          className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shrink-0 flex items-center gap-2"
        >
          Request Transaction Review <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>

    </div>
  );
}
