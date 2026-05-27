import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity } from 'lucide-react';

const EVENTS = [
  {
    id: "QSEA",
    deal: "Quartzsea / Eight Directions",
    trigger: "SEC review of PRE 14A & ICFR restatement delays De-SPAC timeline.",
    pathway: "Regulatory scrutiny → Delay in proxy vote → Compression of 24-month liquidity clock → Increased redemption risk.",
    consequence: "Potential mandatory board restructuring and SEC Section 10D executive clawbacks.",
    leverageShift: "Leverage shifts entirely to SEC Division of Corporation Finance and public shareholders holding redemption rights."
  },
  {
    id: "ENVIRI",
    deal: "Enviri / Veolia",
    trigger: "Transaction closing triggers early repayment of $1.7B Intercompany Note.",
    pathway: "Divestiture proceeds satisfy primary debt → Stranded overhead settles on New Enviri → Executive 'Clawback' periods expire → Rail segment forward losses trigger liquidity breach.",
    consequence: "New Enviri inherits critical 'Strategic Intelligence Gap' following material internal control corrections without sufficient capital.",
    leverageShift: "Buyer (Veolia) commands outsized leverage via $150M reverse termination fee constraints and transition-service agreement sunset."
  },
  {
    id: "PNFP",
    deal: "Pinnacle Corp",
    trigger: "SEC challenges public policy violations via mandatory indemnification bylaws.",
    pathway: "SEC Challenge → Mandatory Advancement Liquidity Drain → Unsecured Credit Exposure Realization.",
    consequence: "Mandatory advancement of legal expenses transforms fiduciary misconduct into a direct corporate liquidity vulnerability.",
    leverageShift: "Institutional activist holders and SEC gain severe leverage over legacy board fiduciaries."
  }
];

export default function LivePressureEvents() {
  const [activeId, setActiveId] = useState(EVENTS[0].id);
  const activeEvent = EVENTS.find(e => e.id === activeId) || EVENTS[0];

  return (
    <section className="py-24 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/5 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
            <Activity className="w-3 h-3 animate-pulse" />
            Live Pressure Environments
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">Active Target Radar</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex flex-col justify-start">
            {EVENTS.map((evt) => (
              <button
                key={evt.id}
                onClick={() => setActiveId(evt.id)}
                className={`text-left p-5 border-l border-b border-t border-r-4 transition-all duration-300 font-mono text-xs uppercase tracking-widest ${
                  activeId === evt.id 
                  ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-bold' 
                  : 'border-[var(--border-color)] border-r-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]/30 hover:border-r-[var(--border-highlight)]'
                }`}
              >
                {evt.deal}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-px bg-[var(--border-color)] border border-[var(--border-color)]"
              >
                <div className="bg-[var(--bg-primary)] p-6 md:p-8">
                  <div className="text-[9px] text-[var(--text-tertiary)] font-mono uppercase tracking-widest mb-2 text-[var(--brand-cyan)]">Trigger</div>
                  <div className="text-lg md:text-xl font-bold font-heading text-[var(--text-primary)]">{activeEvent.trigger}</div>
                </div>
                
                <div className="bg-[var(--bg-primary)] p-6 md:p-8">
                  <div className="text-[9px] text-[var(--text-tertiary)] font-mono uppercase tracking-widest mb-2">Pressure Pathway</div>
                  <div className="text-sm font-mono text-[var(--text-secondary)] leading-relaxed">{activeEvent.pathway}</div>
                </div>

                <div className="grid md:grid-cols-2 gap-px bg-[var(--border-color)]">
                  <div className="bg-[var(--bg-primary)] p-6 md:p-8">
                    <div className="text-[9px] text-[var(--text-tertiary)] font-mono uppercase tracking-widest mb-2 text-red-500/80">Governance Consequence</div>
                    <div className="text-sm text-[var(--text-primary)] leading-relaxed flex items-center h-full pb-4">{activeEvent.consequence}</div>
                  </div>
                  <div className="bg-[var(--bg-primary)] p-6 md:p-8">
                    <div className="text-[9px] text-[var(--text-tertiary)] font-mono uppercase tracking-widest mb-2 text-[var(--brand-purple)]">Negotiation Leverage Shift</div>
                    <div className="text-sm text-[var(--text-primary)] leading-relaxed flex items-center h-full pb-4">{activeEvent.leverageShift}</div>
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
