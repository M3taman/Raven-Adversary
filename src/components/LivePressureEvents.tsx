import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, FileText, ChevronRight, Calendar, AlertCircle, Bookmark, CheckSquare, Info } from 'lucide-react';

type EpistemicState = 'VERIFIED' | 'HIGH CONFIDENCE' | 'INFERRED' | 'SPECULATIVE' | 'UNRESOLVED';
type ResolutionStatus = 'ACTIVE' | 'MITIGATED' | 'REFINANCED' | 'RESOLVED' | 'RENEGOTIATED' | 'REPRICED';

interface EvolutionStep {
  date: string;
  event: string;
  status: EpistemicState | ResolutionStatus;
}

interface SourceMapping {
  filingType: string;
  section: string;
  page: string;
  excerpt: string;
  interpretation: string;
}

interface DealEvent {
  id: string;
  deal: string;
  trigger: string;
  pathway: string;
  evidenceState: EpistemicState;
  status: ResolutionStatus;
  evolution: EvolutionStep[];
  source: SourceMapping;
}

const EVENTS: DealEvent[] = [
  {
    id: "ENVIRI",
    deal: "Enviri / Veolia",
    trigger: "TSA stranded-cost dependency.",
    pathway: "Spin-off → stranded overhead migration → liquidity bridge dependence → post-close operational burden.",
    evidenceState: "HIGH CONFIDENCE",
    status: "ACTIVE",
    evolution: [
      { date: "MAY 4", event: "Transaction announced.", status: "VERIFIED" },
      { date: "MAY 12", event: "TSA stranded-cost propagation identified.", status: "INFERRED" },
      { date: "MAY 18", event: "Liquidity bridge timing dependency escalated.", status: "HIGH CONFIDENCE" },
      { date: "JUNE 1", event: "Awaiting post-close operational allocation disclosure.", status: "UNRESOLVED" }
    ],
    source: {
      filingType: "Form S-1 / S-4",
      section: "Section IV(b)",
      page: "Page 89",
      excerpt: "“Under the terms of the Transition Services Agreement, Enviri shall bear 100% of the newly unabsorbed corporate overhead for any shared facility that remains un-migrated after month 6 post-closing…”",
      interpretation: "The post-close overhead allocation mechanism creates an immediate stranded-cost risk. Enviri's liquidity profile is insufficient to absorb delayed facility migrations, meaning delayed integration transitions directly to liquidity constraints."
    }
  },
  {
    id: "FITB-CMA",
    deal: "Fifth Third / Comerica",
    trigger: "Category III threshold transition.",
    pathway: "Asset threshold migration → HQLA burden → liquidity reserve drag → integration pressure.",
    evidenceState: "VERIFIED",
    status: "ACTIVE",
    evolution: [
      { date: "MAY 8", event: "Merger discussion initialized.", status: "VERIFIED" },
      { date: "MAY 15", event: "Regulatory threshold migration analyzed.", status: "HIGH CONFIDENCE" },
      { date: "MAY 22", event: "HQLA capital integration friction identified.", status: "VERIFIED" },
      { date: "JUNE 3", event: "Board minutes confirm liquidity reserve allocation.", status: "VERIFIED" }
    ],
    source: {
      filingType: "Form S-4",
      section: "Section III(a)",
      page: "Page 142",
      excerpt: "“Promptly upon achieving Category III transition, pro forma high-quality liquid asset (HQLA) requirements mandate an immediate $1.2B increase in reserves, reducing net interest margin yield capacity during transition…”",
      interpretation: "Post-merger integration is secondary to the regulatory drag of Category III liquidity requirements. The post-close pro-forma margin compression begins on Day One, overriding synergies."
    }
  },
  {
    id: "BOXABL",
    deal: "BOXABL / FG Merger II",
    trigger: "Lock-up liquidity release mechanics.",
    pathway: "Float expansion → governance insulation → market instability → financing fragility.",
    evidenceState: "HIGH CONFIDENCE",
    status: "RENEGOTIATED",
    evolution: [
      { date: "MAY 2", event: "Definitive Agreement filed.", status: "VERIFIED" },
      { date: "MAY 10", event: "Lock-up release acceleration mechanics identified.", status: "HIGH CONFIDENCE" },
      { date: "MAY 20", event: "Dilution pathways and liquidity thresholds simulated.", status: "INFERRED" },
      { date: "JUNE 5", event: "Governance mitigation terms added via amendment.", status: "RENEGOTIATED" }
    ],
    source: {
      filingType: "Form S-4/A (Amendment 3)",
      section: "Section IX(h)",
      page: "Page 112",
      excerpt: "“The modified lock-up schedule restricts initial insider float to 15% of total outstanding common shares until the 120-day VWAP exceeds $15.50…”",
      interpretation: "Interim dilution pressure from the accelerated float expansion has been partially neutralized by the late-stage amendment, mitigating the risk of immediate market instability post-unlock."
    }
  },
  {
    id: "QXO",
    deal: "QXO / TopBuild",
    trigger: "MAE carveout asymmetry.",
    pathway: "Housing downturn sensitivity → integration pressure → renegotiation leverage migration.",
    evidenceState: "INFERRED",
    status: "ACTIVE",
    evolution: [
      { date: "MAY 6", event: "Letter of Intent transmitted.", status: "VERIFIED" },
      { date: "MAY 14", event: "Carveout asymmetry identified in draft merger agreement.", status: "INFERRED" },
      { date: "MAY 25", event: "Housing downturn exposure sensitivity calculated.", status: "HIGH CONFIDENCE" },
      { date: "JUNE 8", event: "Second round review on carve-out exemptions.", status: "UNRESOLVED" }
    ],
    source: {
      filingType: "Form 8-K",
      section: "Section 1.01",
      page: "Page 4",
      excerpt: "“Material Adverse Effect does not include shifts in macroeconomic conditions, except to the extent disproportionately impacting TopBuild…”",
      interpretation: "Asymmetric MAE carveouts provide substantial renegotiation leverage to QXO in the event of macro housing trends."
    }
  }
];

export default function LivePressureEvents() {
  const [activeId, setActiveId] = useState<string>(EVENTS[0].id);
  const [filter, setFilter] = useState<'ALL' | 'ACTIVE' | 'RESOLVED'>('ALL');

  const getEpistemicColor = (state: EpistemicState | ResolutionStatus) => {
    switch (state) {
      case 'VERIFIED':
        return 'text-sky-400 border-sky-500/30 bg-sky-500/5';
      case 'HIGH CONFIDENCE':
        return 'text-amber-400 border-amber-500/30 bg-amber-500/5';
      case 'INFERRED':
        return 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5';
      case 'SPECULATIVE':
        return 'text-orange-400 border-orange-500/30 bg-orange-500/5';
      case 'UNRESOLVED':
        return 'text-rose-400 border-rose-500/30 bg-rose-500/5';
      case 'RENEGOTIATED':
      case 'MITIGATED':
      case 'RESOLVED':
      case 'REFINANCED':
      case 'REPRICED':
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5';
      default:
        return 'text-gray-400 border-gray-500/30 bg-gray-500/5';
    }
  };

  const getResolutionColor = (status: ResolutionStatus) => {
    if (status === 'ACTIVE') {
      return 'text-red-400 border-red-500/20 bg-red-500/5';
    }
    return 'text- emerald-400 border-emerald-500/20 bg-emerald-500/5';
  };

  const filteredEvents = EVENTS.filter(evt => {
    if (filter === 'ACTIVE') return evt.status === 'ACTIVE';
    if (filter === 'RESOLVED') return evt.status !== 'ACTIVE';
    return true;
  });

  const activeEvent = EVENTS.find(e => e.id === activeId) || EVENTS[0];

  return (
    <section className="py-24 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/5 relative" id="live-pressure">
      <div className="max-w-6xl mx-auto">
        
        {/* Header and Filter Option */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
              <Activity className="w-3 h-3 animate-pulse" />
              PRIORITY OBSERVATIONS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading">Live Pressure Environments</h2>
          </div>

          {/* Filtering States: Active VS Resolutions */}
          <div className="flex items-center gap-2 border border-[var(--border-color)] p-1 bg-[var(--bg-primary)] self-start md:self-auto">
            {(['ALL', 'ACTIVE', 'RESOLVED'] as const).map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setFilter(opt);
                  // Auto-switch active tab to first item in filtered list if current active is filtered out
                  const filtered = EVENTS.filter(evt => {
                    if (opt === 'ACTIVE') return evt.status === 'ACTIVE';
                    if (opt === 'RESOLVED') return evt.status !== 'ACTIVE';
                    return true;
                  });
                  if (filtered.length > 0 && !filtered.some(e => e.id === activeId)) {
                    setActiveId(filtered[0].id);
                  }
                }}
                className={`px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider transition-colors ${
                  filter === opt
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] bg-transparent'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Target List Selection */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {filteredEvents.map((evt) => (
              <button
                key={evt.id}
                onClick={() => setActiveId(evt.id)}
                className={`text-left p-5 border transition-all duration-300 relative flex flex-col gap-2 ${
                  activeId === evt.id 
                  ? 'border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/5 shadow-[0_0_15px_rgba(0,184,217,0.05)] text-[var(--brand-cyan)]' 
                  : 'border-[var(--border-color)] text-[var(--text-secondary)] bg-[var(--bg-primary)] hover:border-[var(--border-highlight)]'
                }`}
              >
                <div className="flex justify-between items-center w-full">
                  <span className={`font-mono text-[9px] uppercase tracking-widest ${activeId === evt.id ? 'text-[var(--brand-cyan)]' : 'text-[var(--text-tertiary)]'}`}>
                    {evt.id} // ENVIRONMENT
                  </span>
                  
                  {/* Status Indicator (Active vs Mitigated/Renegotiated) */}
                  <span className={`px-2 py-0.5 border text-[8px] font-mono tracking-widest uppercase ${
                    evt.status === 'ACTIVE' 
                      ? 'text-red-400 border-red-500/20 bg-red-500/5' 
                      : 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5'
                  }`}>
                    {evt.status}
                  </span>
                </div>
                
                <div className="text-base font-bold font-heading text-[var(--text-primary)]">
                  {evt.deal}
                </div>
                
                {/* Epistemic state annotation */}
                <span className={`self-start px-2 py-0.5 border text-[7px] font-mono uppercase tracking-widest ${getEpistemicColor(evt.evidenceState)}`}>
                  {evt.evidenceState}
                </span>
                
                {activeId === evt.id && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--brand-cyan)] hidden md:block">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Detailed View */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid gap-px bg-[var(--border-color)] border border-[var(--border-color)] shadow-xl"
              >
                {/* Core Header info */}
                <div className="bg-[var(--bg-primary)] p-6 md:p-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-[0.2em]">Primary Trigger</span>
                    <span className="w-1 h-3 bg-[var(--brand-cyan)]"></span>
                    <span className={`px-2.5 py-0.5 border text-[8px] font-mono uppercase tracking-widest ${getEpistemicColor(activeEvent.evidenceState)}`}>
                      Confidence level: {activeEvent.evidenceState}
                    </span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold font-heading text-[var(--text-primary)]">{activeEvent.trigger}</div>
                </div>
                
                {/* Path Propagation */}
                <div className="bg-[var(--bg-primary)] p-6 md:p-8 space-y-3">
                  <div className="text-[9px] text-[var(--text-tertiary)] font-mono uppercase tracking-widest">Pressure Path Propagation</div>
                  <div className="text-sm font-mono text-[var(--text-secondary)] leading-relaxed border-l-2 border-[var(--brand-cyan)]/40 pl-4 py-1">
                    {activeEvent.pathway}
                  </div>
                </div>

                {/* Priority 4: Source-Target Evidence Mapping */}
                <div className="bg-[var(--bg-primary)] p-6 md:p-8 space-y-4 border-t border-[var(--border-color)]">
                  <div className="flex items-center gap-2 text-[9px] text-[var(--text-tertiary)] font-mono uppercase tracking-widest">
                    <FileText className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> Source-Target Verifiable Mapping
                  </div>
                  
                  <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 space-y-3 font-mono">
                    <div className="flex gap-4 text-[8px] text-[var(--text-tertiary)] uppercase tracking-wider pb-2 border-b border-[var(--border-color)]">
                      <div><span className="text-[var(--text-secondary)] font-bold">FILING:</span> {activeEvent.source.filingType}</div>
                      <div><span className="text-[var(--text-secondary)] font-bold">SECTION:</span> {activeEvent.source.section}</div>
                      <div><span className="text-[var(--text-secondary)] font-bold">PAGE:</span> {activeEvent.source.page}</div>
                    </div>
                    
                    <p className="text-xs text-[var(--text-secondary)] italic leading-relaxed">
                      {activeEvent.source.excerpt}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[8px] font-mono font-bold text-[var(--brand-cyan)] uppercase tracking-widest flex items-center gap-1">
                      <Bookmark className="w-3 h-3" /> Raven Analytical Interpretation:
                    </div>
                    <p className="text-xs text-[var(--text-primary)] leading-normal">
                      {activeEvent.source.interpretation}
                    </p>
                  </div>
                </div>

                {/* Priority 2: Chronological Dynamic Pressure Evolution */}
                <div className="bg-[var(--bg-primary)] p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[var(--brand-purple)]" />
                    <span className="text-[9px] text-[var(--text-tertiary)] font-mono uppercase tracking-widest">Historical Pressure Evolution Tracking</span>
                  </div>

                  {/* Vertically stacked chronological track */}
                  <div className="relative pl-6 space-y-6 border-l border-[var(--border-color)] ml-2">
                    {activeEvent.evolution.map((step, idx) => (
                      <div key={idx} className="relative group">
                        {/* Bullet Node */}
                        <div className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-[var(--bg-primary)] border border-[var(--border-highlight)] flex items-center justify-center transition-all group-hover:border-[var(--brand-cyan)]">
                          <div className="w-1 h-1 rounded-full bg-[var(--text-tertiary)] group-hover:bg-[var(--brand-cyan)]"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                          <span className="font-mono text-[9px] font-bold text-[var(--text-tertiary)] bg-[var(--bg-secondary)] px-1.5 py-0.5 shrink-0">
                            {step.date}
                          </span>
                          <span className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">
                            {step.event}
                          </span>
                          
                          {/* Mini Epistemic State Badge */}
                          <span className={`sm:ml-auto self-start px-2 py-0.5 border text-[7px] font-mono uppercase tracking-wider ${getEpistemicColor(step.status)}`}>
                            {step.status}
                          </span>
                        </div>
                      </div>
                    ))}
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
