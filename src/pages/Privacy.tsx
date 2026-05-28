import React from 'react';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto space-y-12 min-h-screen">
      <div className="space-y-4 mt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
          <Shield className="w-3 h-3" /> Note 14.8.2
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-heading">Privacy Policy</h1>
        <p className="text-[var(--text-secondary)] font-mono text-sm">LAST UPDATED: CURRENT</p>
      </div>

      <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">1. Institutional Restraint</h2>
          <p>
            Raven Adversary operates under a strict principle of institutional restraint. We process only the minimum viable data necessary to verify institutional standing, qualify transaction pressure, and execute requested intelligence operations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">2. Public-Domain Superiority</h2>
          <p>
            Our core intelligence engine requires zero Material Non-Public Information (MNPI). We strictly utilize public filings—SEC schedules, proxy statements, and definitive merger agreements. Therefore, we do not require, nor do we accept, confidential customer data for algorithmic processing.
          </p>
        </section>

        <section className="space-y-4 border-l-2 border-[var(--brand-cyan)] pl-6 py-2 bg-[var(--bg-secondary)]/10">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] hover:text-[var(--brand-cyan)] transition-colors">3. Lead Filtration Data</h2>
          <p>
            Information submitted via the initial terminal, including CIK modifiers, counterparty identities, and exposure figures, is utilized strictly for intent qualification. This data is sequestered from the core machine learning pipeline. 
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">4. Telemetry & Signals</h2>
          <p>
            For system integrity and defense against automated scraping, we monitor connection signatures, latency metrics, and interaction flows. This operational telemetry is anonymized and auto-purged following a 90-day retention cycle.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">5. Extraterritorial Compliance</h2>
          <p>
            Our infrastructure maintains compliant gating mechanisms that align with both CCPA and GDPR constraints, structurally ensuring that institutional representatives engaging our services are afforded full opt-out capabilities regarding any auxiliary communications.
          </p>
        </section>
      </div>
    </div>
  );
}
