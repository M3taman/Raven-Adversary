import React from 'react';
import { AlertTriangle, TrendingDown, Layers, ShieldAlert, Coins } from 'lucide-react';

interface BlindspotItem {
  icon: React.ReactNode;
  category: string;
  metric: string;
  hazardTitle: string;
  pathwayDescription: string;
  exposureImpact: string;
}

const BLINDSPOTS: BlindspotItem[] = [
  {
    icon: <Layers className="w-5 h-5 text-[var(--brand-cyan)]" />,
    category: "REGULATORY THRESHOLD PRESSURE",
    metric: "REG-III TRANSITION",
    hazardTitle: "Category III Threshold Migration",
    pathwayDescription: "Crossing the $250B consolidated asset barrier triggers mandatory, high-frequency LCR compliance pipelines rather than biennial cycles.",
    exposureImpact: "Forces an immediate ~15% upward adjustment in dry-powder HQLA holdings, creating an unmodeled post-merger net-interest-margin (NIM) drag."
  },
  {
    icon: <TrendingDown className="w-5 h-5 text-[var(--brand-purple)]" />,
    category: "DE-SPAC FLOAT COLLAPSE",
    metric: "50% FLOAT RESET",
    hazardTitle: "Accelerated Insider Liquidation",
    pathwayDescription: "Structure implements conditional lock-up triggers based on short-term high trading targets rather than industry-standard 12-month durations.",
    exposureImpact: "Floods thin, retail-heavy ADTV depth with millions of newly unlocked insider shares, causing severe, predictable price degradation."
  },
  {
    icon: <ShieldAlert className="w-5 h-5 text-red-500/80" />,
    category: "FIDUCIARY ENTRENCHMENT RISK",
    metric: "82% FEE HUFF",
    hazardTitle: "Asymmetric Termination Fee Inflation",
    pathwayDescription: "Target board negotiates coercive break-fee formulas representing upwards of 6.36% of market capitalization to defend management slate.",
    exposureImpact: "Eliminates standard fiduciary 'walk-away' structures and premium counter-proposal interest by pricing out rival activist allocators."
  },
  {
    icon: <Coins className="w-5 h-5 text-amber-500/80" />,
    category: "LIQUIDITY RUN VOLATILITY",
    metric: "100% HSA RELIANCE",
    hazardTitle: "Unmitigated Deposit Concentration",
    pathwayDescription: "Operational leverage structured to be fully-dependent on volatile, single-source non-bank custodian accounts to satisfy PCA margins.",
    exposureImpact: "Custodian status shifts trigger instant, irreversible multi-billion capital shortfalls, inciting immediate regulatory intervention."
  }
];

export default function AnalyticalBlindspots() {
  return (
    <section className="py-28 px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/5 relative overflow-hidden" id="blindspots">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--border-highlight)_1px,transparent_1px)]" style={{ backgroundSize: '30px 30px', opacity: 0.15 }}></div>
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-red-500/30 bg-red-500/5 text-red-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-4">
            <AlertTriangle className="w-3 h-3 text-red-500" />
            Section 04 // Failure Mechanisms
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 tracking-tight">The Cost of Analytical Blindspots</h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Sponsors and traditional investment banks model pricing. Raven models structural pressure. When structural events fail to align with price projections, unpriced cash consequence propagates instantly.
          </p>
        </div>

        {/* Blindspots Bento-Style Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {BLINDSPOTS.map((bs, i) => (
            <div 
              key={i} 
              className="group p-8 bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-red-500/30 transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Outer grid metadata indicator */}
              <div className="absolute top-0 right-0 px-3 py-1 font-mono text-[8px] text-[var(--text-tertiary)] border-b border-l border-[var(--border-color)] group-hover:border-red-500/20 bg-[var(--bg-secondary)]/20 flex items-center gap-1.5">
                {bs.icon}
                <span>{bs.metric}</span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="font-mono text-[9px] text-[var(--text-tertiary)] tracking-widest uppercase mb-1">
                    {bs.category}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
                    {bs.hazardTitle}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    <span className="font-mono text-[10px] text-[var(--text-tertiary)] block uppercase mb-1">TRIGGER MECHANISM //</span>
                    {bs.pathwayDescription}
                  </div>

                  <div className="text-sm p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 leading-relaxed font-semibold text-[var(--text-primary)]">
                    <span className="font-mono text-[10px] text-red-500/80 block uppercase mb-1">UNPRICED EXPOSURE //</span>
                    {bs.exposureImpact}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--border-color)]/50 flex justify-between items-center text-[8px] font-mono text-[var(--text-tertiary)] tracking-wider">
                <span>AUDIT MATRIX CLASSIFIED</span>
                <span>FAIL_STATE: 14.8P</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
