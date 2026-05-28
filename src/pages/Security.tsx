import React from 'react';
import { Lock, Server, Cpu } from 'lucide-react';

export default function Security() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto space-y-12 min-h-screen">
      <div className="space-y-4 mt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
          <Lock className="w-3 h-3" /> Operations Auth
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-heading">Security & Compliance</h1>
        <p className="text-[var(--text-secondary)] font-mono text-sm">INFRASTRUCTURE BRIEFING</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[var(--bg-secondary)]/10 p-8 border border-[var(--border-color)]">
          <Server className="w-6 h-6 text-[var(--brand-cyan)] mb-4" />
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Ephemeral Sandboxing</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            All analysis runs within isolated, ephemeral container instances. Memory states are destroyed unconditionally upon process termination.
          </p>
        </div>
        
        <div className="bg-[var(--bg-secondary)]/10 p-8 border border-[var(--border-color)]">
          <Cpu className="w-6 h-6 text-[var(--brand-cyan)] mb-4" />
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Deterministic Inference</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Language model operations bypass multi-tenant API pooling where possible, utilizing dedicated inference nodes tailored for deterministic public-filing extraction.
          </p>
        </div>
      </div>

      <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2">Information Boundaries</h2>
          <p>
            Raven Adversary is architected to operate exclusively outside of the MNPI perimeter. By maintaining our intelligence engine strictly on public EDGAR feeds, judicial dockets, and structured regulatory filings, we eliminate the systemic contamination risk inherent to traditional investigative frameworks.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2">Access Control architecture</h2>
          <ul className="space-y-3 list-disc list-inside">
            <li><strong className="text-[var(--text-primary)]">Zero-Trust Principals:</strong> Internal access to user submission metadata is governed by strict, role-based, least-privilege protocols.</li>
            <li><strong className="text-[var(--text-primary)]">Audit Logging:</strong> All interactions with the database layer are permanently logged with cryptographic tamper-evident seals.</li>
            <li><strong className="text-[var(--text-primary)]">Communication Encryption:</strong> Transport layer security (TLS 1.3) encrypts all data in transit. At-rest data is AES-256 encrypted prior to persistence.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2">Vendor & LLM Compliance</h2>
          <p>
            We do not permit foundational models to dynamically train on client-submitted transaction metadata. Enterprise agreements with our LLM providers explicitly prohibit the retention of request payloads for foundation model weight updates.
          </p>
        </section>
      </div>
    </div>
  );
}
