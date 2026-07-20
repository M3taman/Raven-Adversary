import React, { useState } from 'react';
import { Shield, Brain, Terminal, ChevronRight, CheckCircle2, FileText, Calendar, User, Eye, ArrowLeft, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  keyword: string;
  author: string;
  commit: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

export default function IntelligenceFeed() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const ARTICLES: Article[] = [
    {
      id: "tsa-stranded-cost",
      title: "TSA Stranded-Cost Risk Analysis: Identifying Overhead Migration Traps in Corporate Carve-outs",
      summary: "An in-depth analysis of how unabsorbed corporate overhead in Transition Services Agreements (TSAs) triggers hidden balance sheet liabilities under post-close delays.",
      category: "POST-MERGER INTEGRATION",
      keyword: "TSA stranded-cost risk analysis",
      author: "Forensic Integration Team",
      commit: "tsa.908f2",
      date: "2026-07-18",
      readTime: "9 min read",
      content: (
        <div className="space-y-6">
          <p>
            In carve-outs and spin-offs, Transition Services Agreements (TSAs) are standard tools used to maintain operational continuity. They act as bridges, enabling the buyer to leverage the seller’s existing HR, IT, and facility infrastructures while building their own independent capacity.
          </p>
          <p>
            However, our forensic investigations show that TSAs carry an unpriced risk: <strong>unabsorbed corporate overhead</strong> (often referred to as <em>stranded-costs</em>).
          </p>
          
          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The Stranded-Cost Propagation Mechanism</h3>
          <p>
            When a corporate parent sells an operating division, it rarely reduces its corporate support overhead proportionally. The remaining parent entity inherits 100% of the executive, administrative, and systems costs that were previously allocated to the divested asset.
          </p>
          <div className="p-5 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 font-mono text-xs text-[var(--text-secondary)] space-y-2">
            <div className="font-bold text-[var(--brand-cyan)] uppercase">FORMULAIC OVERHEAD DRIFT:</div>
            <p>Parent Stranded-Cost = Total Shared Support Overhead - (Buyer TSA Reimbursements + Post-divestiture Cost Reduction Program Outcomes)</p>
          </div>
          <p>
            If the transition timeline stretches, the seller faces dual exposure. First, they bear the actual operational friction of managing legacy systems. Second, the reimbursement parameters in the TSA often decline over time. If a shared facility remains un-migrated after month 6 post-closing, the seller might absorb 100% of newly unabsorbed corporate overhead without buyer subsidy.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Asymmetrical TSA Risk Factors</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Unrealistic Migration Windows:</strong> Standard agreements assume a 180-day transition window, but actual enterprise IT migration often averages 270 to 360 days.
            </li>
            <li>
              <strong>System Interdependencies:</strong> Disentangling legacy SAP/Oracle ERP instances frequently uncovers undocumented connections, stalling transition paths and inflating unabsorbed overhead.
            </li>
            <li>
              <strong>Labor Diseconomies:</strong> Parent entities are forced to retain duplicate back-office personnel during the TSA window, preventing the implementation of post-divestiture synergy reductions.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Strategic Defense Protocol</h3>
          <p>
            To hedge against stranded-costs, transaction teams must incorporate declining overhead collars and strict migration penalty clauses in Annex agreements. Raven’s <strong>Pressure-State Engine</strong> simulates TSA timeline drift, mapping cash impact on pro-forma margins before Definitive Agreements bind.
          </p>
        </div>
      )
    },
    {
      id: "category-iii-threshold",
      title: "Category III Threshold Migration Risk: Asset Growth and HQLA Capital Reserve Drags",
      summary: "Why crossing the $250B asset tier under bank consolidation rules triggers sudden capital constraints and Net Interest Margin (NIM) erosion.",
      category: "REGULATORY COMPLIANCE",
      keyword: "Category III threshold migration risk",
      author: "Regulatory Risk Advisory",
      commit: "reg.c3.882",
      date: "2026-07-14",
      readTime: "11 min read",
      content: (
        <div className="space-y-6">
          <p>
            Under federal bank prudential standards, crossing key asset-size thresholds is not just a compliance milestone—it is a balance-sheet restructuring trigger. The transition from Category IV to Category III prudential standards (triggered at $250B in total consolidated assets) introduces significant capital and liquidity burdens.
          </p>
          <p>
            When mid-tier banks consolidate, deal teams emphasize synergies. They model cost reductions and market expansion while frequently ignoring the <strong>Category III threshold compliance drag</strong>.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The High-Quality Liquid Asset (HQLA) Cost Curve</h3>
          <p>
            The primary regulatory cliff associated with Category III transition is the mandatory implementation of the <strong>Liquidity Coverage Ratio (LCR)</strong>. 
          </p>
          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 space-y-4">
            <h4 className="font-bold text-[var(--text-primary)] font-heading">Key Category III Rules:</h4>
            <ul className="list-decimal pl-6 space-y-2 text-xs font-mono text-[var(--text-secondary)]">
              <li>Mandatory daily calculation and reporting of Liquidity Coverage Ratios.</li>
              <li>A massive increase in required reserves, typically demanding an immediate allocation to low-yield cash or U.S. Treasuries.</li>
              <li>Incorporation of Accumulated Other Comprehensive Income (AOCI) into regulatory capital, exposing capital ratios to bond-portfolio volatility.</li>
            </ul>
          </div>
          <p>
            To achieve LCR compliance post-close, banks must shift assets away from high-yielding commercial loan portfolios and into low-yielding HQLA categories. This mandatory allocation compresses the pro-forma Net Interest Margin (NIM) overnight, neutralizing expected cost synergies.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Modeling the Regulatory Drag</h3>
          <p>
            In our Comerica / Fifth Third pro-forma study, LCR compliance demanded an immediate $1.2B expansion in high-quality liquid reserves. This asset shift compressed the combined entity's NIM yield by 14 basis points in the first quarter post-close, completely erasing the transaction's projected back-office savings.
          </p>
          <p>
            Raven’s <strong>Regulatory Modeling Pipeline</strong> parses historical deposit volatility models to calculate post-close LCR targets, allowing bank boards to evaluate the true capital cost of scale before signing merger agreements.
          </p>
        </div>
      )
    },
    {
      id: "asymmetric-termination-fee",
      title: "Asymmetric Termination Fee Risk & MAE Carveout Sensitivity in Volatile Markets",
      summary: "How structural asymmetries in Material Adverse Effect (MAE) clauses shift bargaining power and renegotiation leverage during macro downturns.",
      category: "M&A LEGAL STRATEGY",
      keyword: "asymmetric termination fee risk",
      author: "M&A Litigation Team",
      commit: "legal.mae.44",
      date: "2026-07-10",
      readTime: "8 min read",
      content: (
        <div className="space-y-6">
          <p>
            During market corrections, the interval between signing and closing a transaction becomes a high-risk zone. Economic trends can shift suddenly, testing the structural limits of merger agreements and shifting renegotiation leverage between buyers and sellers.
          </p>
          <p>
            In these environments, two legal concepts interact to determine deal certainty: <strong>Asymmetric Termination Fees</strong> and <strong>Material Adverse Effect (MAE) carve-outs</strong>.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The Leverage Shift Mechanism</h3>
          <p>
            Most merger agreements include a reverse termination fee that a buyer must pay if they walk away from a transaction due to financing failures. If this fee is low relative to the deal size (typically 3-5%), the buyer functionally holds a unilateral <strong>call option</strong> on the target company.
          </p>
          <p>
            If macroeconomic conditions degrade, the buyer can threaten to walk away and pay the fee, forcing the seller to renegotiate the purchase price.
          </p>
          <div className="p-5 border border-l-2 border-[var(--brand-cyan)] bg-[var(--bg-secondary)]/30 font-mono text-xs text-[var(--text-secondary)] space-y-2">
            <div className="font-bold text-[var(--brand-cyan)] uppercase">CRITICAL PATH ANALYSIS:</div>
            <p>If (Value Loss under Macro Downturn) &gt; (Reverse Termination Fee), then the strategic buyer holds a rational economic incentive to break the deal or force a repricing concession.</p>
          </div>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">MAE Carveout Asymmetries</h3>
          <p>
            Sellers try to insulate themselves by drafting broad MAE exceptions, stating that general macroeconomic downturns do not constitute a Material Adverse Effect unless they <em>disproportionately impact</em> the target company relative to peers.
          </p>
          <p>
            However, defining "disproportionate impact" is highly subjective and frequently contested in litigation. If the target company depends on a single supplier or operates with high operating leverage, a general downturn can trigger disproportionate balance-sheet degradation, providing the buyer with legal grounds to terminate the transaction.
          </p>
          <p>
            Raven’s <strong>Adversarial Debate Logic</strong> tests MAE carve-outs against historical economic shocks, letting sellers establish defensible terms and protect transaction value.
          </p>
        </div>
      )
    },
    {
      id: "lock-up-trigger-analysis",
      title: "Conditional Lock-Up Trigger Analysis: Predicting Post-Merger Dilution and Float Collapse",
      summary: "An investigation into how Volume Weighted Average Price (VWAP) accelerated lock-up release schedules trigger market instability and sponsor capital flight.",
      category: "EQUITY CAPITAL MARKETS",
      keyword: "conditional lock-up trigger analysis",
      author: "Capital Markets Group",
      commit: "ecm.lup.02",
      date: "2026-07-05",
      readTime: "10 min read",
      content: (
        <div className="space-y-6">
          <p>
            In modern corporate transactions—particularly in SPAC, De-SPAC, and high-growth IPO listings—insider and sponsor shares are subject to lock-up restrictions that prevent immediate sales post-listing.
          </p>
          <p>
            However, to align incentives, modern agreements incorporate <strong>conditional lock-up triggers</strong>. These provisions accelerate share release if the company's Volume Weighted Average Price (VWAP) exceeds specified levels (e.g., $12.50 or $15.00) for 20 out of 30 consecutive trading days.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The Float Collapse Paradox</h3>
          <p>
            While intended to reward positive performance, conditional lock-up triggers often create a structural paradox. When a listing near-approaches the VWAP threshold, short-term investors anticipate a massive float expansion.
          </p>
          <div className="p-5 border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 space-y-4 font-mono text-xs text-[var(--text-secondary)]">
            <div className="font-bold text-[var(--brand-cyan)] uppercase">DILUTION THRESHOLD PROGRESSION:</div>
            <ul className="space-y-1">
              <li>1. Stock trades near $12.40 (approaching the lock-up release threshold).</li>
              <li>2. Institutional short interest expands to hedge against upcoming supply.</li>
              <li>3. Triggers fire → 15,000,000 insider shares unlock instantly.</li>
              <li>4. Float expands by 300% in a single day, driving down prices.</li>
            </ul>
          </div>
          <p>
            This sudden float expansion creates market instability and can lead to a collapse in stock price, undermining subsequent capital-raising efforts and creating severe financing fragility.
          </p>

          <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Forensic Float Simulations</h3>
          <p>
            In our study of the BOXABL / FG Merger II transaction, late-stage amendments were required to modify lock-up release schedules to restrict initial insider float to 15% of total outstanding common shares. This structural modification prevented a severe post-listing float collapse.
          </p>
          <p>
            Raven’s <strong>Pressure-State Engine</strong> simulates post-close dilution paths, letting sponsors structure balanced incentives that preserve equity stability and avoid capital flight.
          </p>
        </div>
      )
    }
  ];

  const activeArticle = ARTICLES.find(a => a.id === selectedArticleId);

  return (
    <div className="pt-24 pb-20 px-6 max-w-5xl mx-auto space-y-16">
      
      {/* Dynamic FAQ Schema for GEO/AI-Search crawling */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": ARTICLES.map(a => ({
            "@type": "Question",
            "name": `What is ${a.keyword}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": a.summary
            }
          }))
        })}
      </script>

      {/* Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            Adversarial Intelligence Archive
          </div>
          <div className="inline-flex items-center gap-2 px-2 py-1.5 border border-[var(--border-color)] text-[var(--text-tertiary)] font-mono text-[8px] uppercase tracking-widest rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)]"></span>
            Classified: PUBLIC RESEARCH
          </div>
          <div className="inline-flex items-center gap-1 font-mono text-[8px] uppercase tracking-widest text-[var(--text-tertiary)]">
            EDGAR-SYNC: AUTOMATED // NODE ARRAY ACTIVE
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-heading text-[var(--text-primary)]">
          Adversarial Intelligence Feed
        </h1>
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          Deep-dives, post-close forensic analyses, and problem-focused research tracking institutional pressure, capital constraints, and unpriced transaction exposure.
        </p>

        <div className="pt-4 border-t border-[var(--border-color)] flex gap-6 text-[9px] font-mono tracking-widest text-[var(--text-tertiary)] uppercase flex-wrap">
          <div><span className="text-[var(--text-secondary)]">PUBLISHER:</span> RAVEN ADVERSARY ANALYTICAL GROUP</div>
          <div><span className="text-[var(--text-secondary)]">INTELLIGENCE TIER:</span> STRATEGIC RESEARCH DIVISION</div>
          <div><span className="text-[var(--text-secondary)]">ACCESSION NO:</span> AR-2026-904X</div>
        </div>
      </header>

      {selectedArticleId === null ? (
        <div className="space-y-12">
          {/* Main Original Article as Featured Memo */}
          <div className="p-8 border border-[var(--border-highlight)] bg-[var(--bg-secondary)]/10 space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 border-b border-l border-[var(--border-color)] bg-[var(--bg-primary)] font-mono text-[8px] text-[var(--brand-cyan)] uppercase tracking-wider font-bold">
              Featured Strategic Memo
            </div>
            
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-[var(--brand-cyan)] uppercase tracking-widest block">CORE EPISTEMIC POLICY</span>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">
                Institutional Interpretation vs. Document Analysis
              </h2>
            </div>
            
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              Why Raven Adversary rejects generic document summarization in favor of Pressure-State Modeling and Leverage Migration tracking for consequential transactions. Traditional compliance automation operates on policy-state in a vacuum. A high-stakes transaction is not a vacuum.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-6 text-[9px] font-mono text-[var(--text-tertiary)] uppercase">
              <div>AUTHOR: Raven Core</div>
              <div>COMMIT: e9f8a2b.44</div>
              <div>READ TIME: 5 min read</div>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => setSelectedArticleId("featured-memo-original")}
                className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Read Featured Memo <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Archive List of Tier 3 Problem-focused Articles */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono tracking-[0.25em] text-[var(--text-tertiary)] uppercase border-b border-[var(--border-color)] pb-3">
              Analytical Deep-Dives & Research Memos
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {ARTICLES.map((article) => (
                <div 
                  key={article.id} 
                  className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--brand-cyan)]/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[8px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
                      <span>{article.category}</span>
                      <span>{article.date}</span>
                    </div>
                    <h4 className="text-base font-bold font-heading text-[var(--text-primary)] group-hover:text-[var(--brand-cyan)] transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                  
                  <div className="pt-2 border-t border-[var(--border-color)]/50 flex justify-between items-center">
                    <span className="font-mono text-[8px] text-[var(--text-tertiary)] uppercase">
                      TERM: <strong className="text-[var(--text-secondary)]">{article.keyword}</strong>
                    </span>
                    <button 
                      onClick={() => setSelectedArticleId(article.id)}
                      className="font-mono text-[9px] text-[var(--brand-cyan)] uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      DISSECT MEMO <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Selected Article Reader View */
        <div className="space-y-8">
          <button 
            onClick={() => setSelectedArticleId(null)}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors pb-4 border-b border-[var(--border-color)] w-full"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Intelligence Archive
          </button>

          {selectedArticleId === "featured-memo-original" ? (
            /* Original Featured Article */
            <article className="prose prose-invert max-w-none space-y-8 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed relative">
              <div className="space-y-2 pb-6 border-b border-[var(--border-color)]">
                <span className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-widest block">FEATURED CORE MEMO</span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--text-primary)] leading-tight">
                  Institutional Interpretation vs. Document Analysis
                </h2>
                <p className="text-sm font-mono text-[var(--text-tertiary)] uppercase pt-1">
                  COMMIT_ID: e9f8a2b.44 // INFERENCE LEVEL: VERIFIED STRUCTURAL
                </p>
              </div>

              <p>
                <strong>Raven does not sell AI analysis. Raven sells institutional interpretation under pressure.</strong> Generalized contract summarization tools focus on what a document says. We reconstruct the decision-state to determine <em>who accepted uncertainty, and under what conditions.</em> 
              </p>

              <p>
                Traditional compliance automation and generic AI governance platforms operate on policy-state—they summarize clauses in a vacuum. A high-stakes transaction is not a vacuum. It is a live environment characterized by asymmetrical disclosure and shifting negotiation leverage.
              </p>

              <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The Move from Language to Consequence</h3>
              <p>
                The margin for error in an activist proxy contest or a distressed de-SPAC is zero. Practitioners do not need a faster way to read a termination fee provision; they need to know if the interplay between that fee, an esoteric non-solicitation carve-out, and regulatory escalation pathways creates a structural moat restricting a targeted spin-off.
              </p>

              <div className="p-6 border-l-2 border-[var(--brand-cyan)] bg-[var(--bg-secondary)]/30 space-y-2">
                <h4 className="font-bold font-heading text-sm text-[var(--text-primary)]">The Pressure-State Engine</h4>
                <p className="text-xs">
                  Raven Adversary reconstructs Accountability Continuity. By mapping pressure propagation across institutional systems, we allow event-driven funds, M&A litigators, and restructuring advisors to trace how initial governance fracture points trigger cascading liquidity and proxy instability.
                </p>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">Mapping the Institutional Pressure Topology</h3>
              <div className="space-y-4">
                <p>
                  <strong>1. Leverage Migration Tracking:</strong> Bargaining power shifts under stress. We track how leverage migrates between legacy boards, insurgent slates, counter-parties, and regulators, explicitly mapping the shift in decision-making authority based on SEC filings and covenant triggers.
                </p>
                <p>
                  <strong>2. Governance Fracture Detection:</strong> Isolated policy documents rarely betray board instability. By tracking proxy language drift and analyzing voting patterns of massive index funds, we establish a Governance Fracture Index that identifies isolated directors before contested elections climax.
                </p>
                <p>
                  <strong>3. Disclosure Detonation Scoring:</strong> We calculate the explicit probability that a required disclosure (e.g., a materialized contingent liability or a breached debt covenant) will trigger a catastrophic pressure escalation from regulators, activist holding blocks, or debt syndicate leads.
                </p>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mt-8">The Institutional Accountability Archive</h3>
              <p>
                Every inference, speculative vector, and adversarial hypothesis we generate is inherently bound to verifiable reality via a cryptographically anchored Commit Layer. We utilize rigorous evidence discipline, compartmentalizing verified fact from structural inference.
              </p>
              <p>
                You are given a tamper-evident accountability receipt. Not advice. Not a generic summary. Precise, citation-backed intelligence for when the institutional ground shifts.
              </p>
            </article>
          ) : (
            /* Selected Tier 3 Article */
            <article className="prose prose-invert max-w-none space-y-8 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
              <div className="space-y-2 pb-6 border-b border-[var(--border-color)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[10px] text-[var(--brand-cyan)] uppercase tracking-widest block">{activeArticle?.category}</span>
                  <span className="font-mono text-[9px] text-[var(--text-tertiary)]">{activeArticle?.date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--text-primary)] leading-tight">
                  {activeArticle?.title}
                </h2>
                <div className="pt-1 flex flex-wrap gap-4 font-mono text-[8px] uppercase tracking-wider text-[var(--text-tertiary)]">
                  <div>COMMIT: {activeArticle?.commit}</div>
                  <div>AUTHOR: {activeArticle?.author}</div>
                  <div>READ TIME: {activeArticle?.readTime}</div>
                  <div>HIGH-INTENT SEO TERM: <strong className="text-[var(--text-secondary)]">{activeArticle?.keyword}</strong></div>
                </div>
              </div>

              {activeArticle?.content}
            </article>
          )}

          <div className="pt-8 border-t border-[var(--border-color)]">
            <button 
              onClick={() => setSelectedArticleId(null)}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--brand-cyan)] hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Archive Index
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 p-8 border border-[var(--border-highlight)] bg-[var(--bg-secondary)]/10 text-center space-y-6 relative overflow-hidden group">
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-1.5 py-0.5 border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-tertiary)] font-mono text-[8px] uppercase tracking-widest rounded-sm">ARTIFACT: EXPORT</span>
        </div>
        <div className="relative z-10 flex flex-col items-center pt-4">
          <div className="inline-block px-3 py-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/20 text-[10px] font-mono tracking-widest uppercase mb-4">Export Hierarchy Access</div>
          <h3 className="text-3xl font-bold font-heading mb-4 text-[var(--text-primary)]">Submit Deal for Pressure Review</h3>
          <p className="text-[var(--text-secondary)] mb-8 max-w-xl text-center">Formulate an advisory trajectory. Map potential pathways of leverage migration and structural exposure in your targeted ecosystem.</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity rounded-none w-full sm:w-auto justify-center">
            Initiate Institutional Review <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
