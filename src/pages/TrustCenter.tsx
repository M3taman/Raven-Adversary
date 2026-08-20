import React from 'react';
import { ShieldCheck, Lock, EyeOff, Server, FileCheck, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrustCenter() {
  return (
    <div className="py-24 px-6 max-w-6xl mx-auto space-y-20">
      
      {/* Top Header */}
      <div className="space-y-4 border-b border-[var(--border-color)] pb-10">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
          <ShieldCheck className="w-3 h-3" /> INSTITUTIONAL GOVERNANCE // TRUST CENTER
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
          Trust, Security & Information Hygiene
        </h1>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl">
          Raven Adversary is engineered for the world's most demanding institutional standards. We operate with strict public-data boundaries, ethical wall conflict screening, and zero model training on client queries.
        </p>
      </div>

      {/* 4 Core Pillars of Trust */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Pillar 1 */}
        <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-4">
          <div className="w-10 h-10 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] flex items-center justify-center border border-[var(--brand-cyan)]/30">
            <EyeOff className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">
            100% Public Filings Only (Zero MNPI)
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Raven Adversary processes exclusively official SEC filings (Form 10-K, 10-Q, 8-K, S-4, DEFM14A, 13D/G, Call Reports, and Delaware Chancery Court dockets). We do not accept, request, or ingest private deal room documents or Material Non-Public Information (MNPI).
          </p>
          <div className="pt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> SEC & FINRA REGULATORY HYGIENE GUARANTEED
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-4">
          <div className="w-10 h-10 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] flex items-center justify-center border border-[var(--brand-cyan)]/30">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">
            Transaction Conflict Screening & Ethical Walls
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Every transaction review is subject to pre-engagement conflict verification. Once engaged on an active mandate, strict digital ethical walls and client-isolated audit ledgers guarantee zero leakage or representation overlap across opposing advisory teams.
          </p>
          <div className="pt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> FORMAL 2-HOUR CONFLICT CLEARANCE SLA
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-4">
          <div className="w-10 h-10 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] flex items-center justify-center border border-[var(--brand-cyan)]/30">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">
            Zero Model Training On Client Queries
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Institutional client queries, focus areas, and bespoke red-team directives are strictly confidential. Client inquiries are never logged for AI foundational model retraining, parameter fine-tuning, or cross-client benchmarking.
          </p>
          <div className="pt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> ENTERPRISE ZERO-DATA-RETENTION API PIPELINES
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-4">
          <div className="w-10 h-10 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] flex items-center justify-center border border-[var(--brand-cyan)]/30">
            <Server className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">
            AES-256 Encryption & SOC 2 Infrastructure
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            All analytical outputs, evidence ledgers, and commit layer artifacts are encrypted at rest using AES-256 and in transit via TLS 1.3. Infrastructure is provisioned in isolated SOC 2 Type II certified cloud environments with role-based access control.
          </p>
          <div className="pt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> FULL AUDIT LOGGING & VERSION RETENTION
          </div>
        </div>

      </div>

      {/* Compliance Policies Link Box */}
      <div className="p-8 md:p-12 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="font-mono text-xs text-[var(--brand-cyan)] uppercase tracking-widest font-bold">
            DETAILED GOVERNANCE POLICIES
          </div>
          <div className="text-xl font-bold font-heading text-[var(--text-primary)]">
            Need to review our formal ethical walls or security specs?
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/conflicts"
            className="px-5 py-2.5 border border-[var(--border-color)] text-xs font-mono uppercase font-bold hover:border-[var(--brand-cyan)] transition-colors"
          >
            Conflicts Policy
          </Link>
          <Link
            to="/security"
            className="px-5 py-2.5 border border-[var(--border-color)] text-xs font-mono uppercase font-bold hover:border-[var(--brand-cyan)] transition-colors"
          >
            Security Architecture
          </Link>
          <Link
            to="/privacy"
            className="px-5 py-2.5 border border-[var(--border-color)] text-xs font-mono uppercase font-bold hover:border-[var(--brand-cyan)] transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

    </div>
  );
}
