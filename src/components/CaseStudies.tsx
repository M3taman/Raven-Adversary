import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, Target, FileText } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: "WBD-PARAMOUNT",
    title: "Streaming Consolidation Friction",
    target: "WBD / Paramount / Netflix",
    exposureLabel: "CONTENT LIQUIDITY",
    exposure: "$4,200,000,000",
    summary: "Cross-licensing agreements create asymmetrical exit barriers.",
    consequence: "Paramount's legacy carriage deals have 'change of control' puts that trigger immediate renegotiation of tier-1 content.",
    pressurePathway: "Activist hedge funds accumulate floating stock while shorting the potential acquirers, creating a squeeze on the proxy vote.",
    leverageOption: "Target board is forced to shop the studio library separately from the linear assets, effectively capping the total acquisition premium."
  },
  {
    id: "ACTIVIST-BANK",
    title: "Activist Bank Campaign",
    target: "Regional Bank Consortium",
    exposureLabel: "UNFUNDED LIQUIDITY EXPOSURE",
    exposure: "$1,800,000,000",
    summary: "Held-to-maturity capital holes used to force board seat rotation.",
    consequence: "A 5% activist position triggers regulatory scrutiny over the commercial real estate loan book, accelerating DFAST stress testing.",
    pressurePathway: "Public letter release correlates with targeted options buying, forcing the legacy board to preemptively cut the dividend.",
    leverageOption: "Dissident slate is installed without an expensive proxy fight by cornering the institutional ISS vote base."
  },
  {
    id: "PROXY-CONTEST",
    title: "Proxy Contest Escalation",
    target: "Consumer Conglomerate",
    exposureLabel: "VOTE INSTABILITY",
    exposure: "$12,000,000",
    summary: "Universal proxy rules enable single-issue directors to hijack the ballot.",
    consequence: "An ESG-focused activist weaponizes the new universal proxy card to isolate the weakest two legacy directors on climate transition metrics.",
    pressurePathway: "Index funds (BlackRock, Vanguard) are pressured by their own LP bases to vote out the targeted directors, violating historical default patterns.",
    leverageOption: "The activist gains veto power over the strategic review committee, effectively stalling the spin-off of the legacy cash cow."
  },
  {
    id: "DE-SPAC",
    title: "Distressed de-SPAC PIPEs",
    target: "EV Infrastructure Corp",
    exposureLabel: "REDEMPTION RISK",
    exposure: "$450,000,000",
    summary: "Forward-purchase agreements masquerade as true committed capital.",
    consequence: "95% redemption forces the sponsor to rely on a 'backstop' facility that contains toxic convertible preferred stock.",
    pressurePathway: "The backstop provider begins aggressive short-selling of the common stock post-closing, driving the price into the floor reset.",
    leverageOption: "The target company faces immediate going-concern qualification and is forced into a restructuring led by the backstop provider."
  }
];

export default function CaseStudies() {
  const [activeCaseId, setActiveCaseId] = useState(CASE_STUDIES[0].id);
  const activeCase = CASE_STUDIES.find(c => c.id === activeCaseId) || CASE_STUDIES[0];

  return (
    <section className="py-24 px-6 relative border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/10" id="case-studies">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[11px] uppercase tracking-widest mb-4">
            <FileText className="w-3 h-3" />
            Active Institutional Pressure Situations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Live Pressure Events</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl text-lg">
            Not testimonials. Real-time execution analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            {CASE_STUDIES.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveCaseId(study.id)}
                className={`p-4 text-left border rounded transition-all duration-300 ${
                  activeCaseId === study.id 
                    ? 'bg-[var(--glass-panel)] border-[var(--brand-cyan)] shadow-[0_0_15px_rgba(0,212,255,0.1)]' 
                    : 'glass-card hover:border-[var(--border-highlight)]'
                }`}
              >
                <div className="font-mono text-[10px] tracking-widest uppercase mb-1 opacity-70">
                  {study.target}
                </div>
                <div className={`font-bold font-heading ${activeCaseId === study.id ? 'text-[var(--brand-cyan)]' : 'text-[var(--text-primary)]'}`}>
                  {study.title}
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCaseId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-lg overflow-hidden border border-[var(--border-color)]"
              >
                <div className="p-6 md:p-8 space-y-8">
                  <div className="relative border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-6 rounded-md">
                    <h3 className="font-mono text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-3">
                      Identified Structure
                    </h3>
                    <p className="text-xl md:text-2xl font-bold font-heading leading-tight text-[var(--text-primary)] mb-6">
                      "{activeCase.summary}"
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-[var(--border-color)]">
                      <div>
                        <h4 className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest mb-2">Consequence</h4>
                        <p className="text-sm font-medium text-[var(--text-secondary)] leading-relaxed">
                          {activeCase.consequence}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest mb-2">Pressure Pathway</h4>
                        <p className="text-sm font-medium text-[var(--text-secondary)] leading-relaxed">
                          {activeCase.pressurePathway}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest mb-2">Leverage Option</h4>
                        <p className="text-sm font-medium text-[var(--text-secondary)] leading-relaxed">
                          {activeCase.leverageOption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
