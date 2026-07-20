import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist');

console.log('Starting Raven router-aware static page pre-rendering to eliminate SEO blank-page and 404 crawler errors...');

const sourceHtmlPath = path.join(distPath, 'index.html');

if (!fs.existsSync(sourceHtmlPath)) {
  console.error(`Error: Source file ${sourceHtmlPath} does not exist. Run vite build first.`);
  process.exit(1);
}

const originalHtml = fs.readFileSync(sourceHtmlPath, 'utf8');

// Rich Semantic Pre-rendered Content Templates for Indexing Engines & Search Crawlers
const templates = {
  home: `
    <div class="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <!-- Nav Placeholder -->
      <nav class="border-b border-[var(--border-color)] px-6 py-4 flex justify-between items-center">
        <div class="font-mono text-xs font-bold tracking-widest text-[var(--brand-cyan)]">RAVEN // ADVERSARY</div>
        <div class="flex gap-4 font-mono text-[10px]">
          <a href="/intelligence" class="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">INTELLIGENCE</a>
          <a href="/security" class="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">SECURITY</a>
        </div>
      </nav>

      <!-- Hero Section -->
      <main class="py-24 px-6 max-w-6xl mx-auto space-y-12">
        <header class="space-y-6 text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em]">
            Institutional M&A Due Diligence AI
          </div>
          <h1 class="text-4xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.1]">
            Raven maps how institutional pressure propagates through consequential transactions before the market prices it.
          </h1>
          <p class="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
            Pressure-state intelligence for M&A, activism, governance conflict, and regulatory exposure. Operating exclusively under absolute informational hygiene.
          </p>
        </header>

        <!-- Dynamic Pressure Environments -->
        <section class="py-12 border-t border-[var(--border-color)]">
          <h2 class="text-2xl font-bold font-heading mb-6">Live Pressure Environments & Tactical Observations</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10">
              <span class="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-wider">ENVIRI / VEOLIA // ACTIVE</span>
              <h3 class="text-lg font-bold mt-2">TSA Stranded-Cost Dependency Pathways</h3>
              <p class="text-sm text-[var(--text-secondary)] mt-1">
                The post-close overhead allocation mechanism creates an immediate stranded-cost risk. Enviri's liquidity profile is insufficient to absorb delayed facility migrations.
              </p>
            </div>
            <div class="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]/10">
              <span class="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-wider">FIFTH THIRD / COMERICA // ACTIVE</span>
              <h3 class="text-lg font-bold mt-2">Category III Threshold Compliance Drag</h3>
              <p class="text-sm text-[var(--text-secondary)] mt-1">
                Surpassing consolidated asset thresholds triggers transition to daily LCR reporting. Imposes strict obligations to hold massive high-quality liquid asset (HQLA) pools post-close.
              </p>
            </div>
          </div>
        </section>

        <!-- Case Studies -->
        <section class="py-12 border-t border-[var(--border-color)]">
          <h2 class="text-2xl font-bold font-heading mb-6">Decision-State Reconstruction Cases</h2>
          <div class="space-y-4">
            <div class="p-6 border border-[var(--border-color)]">
              <h3 class="text-xl font-bold">Unmitigated Deposit Concentration Hazard</h3>
              <p class="text-sm text-[var(--text-secondary)] mt-2">
                Operational leverage structured to be fully-dependent on volatile, single-source non-bank custodian accounts to satisfy PCA margins. Custodian status shifts trigger instant, irreversible multi-billion capital shortfalls.
              </p>
            </div>
          </div>
        </section>

        <!-- Trust Architecture & Proof of Capability -->
        <section class="py-12 border-t border-[var(--border-color)] space-y-4">
          <h2 class="text-2xl font-bold font-heading">Evidence Discipline & Traceability</h2>
          <p class="text-sm text-[var(--text-secondary)]">
            We do not present unverified AI generalizations. Every pressure claim we map traces directly back to precise clauses, S-4 exclusions, and SEC statements. Our platform preserves absolute verification standards.
          </p>
        </section>
      </main>
    </div>
  `,
  intelligence: `
    <div class="pt-24 pb-20 px-6 max-w-4xl mx-auto space-y-16">
      <header class="space-y-6">
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[11px] uppercase tracking-widest">
            Intelligence Feed
          </div>
          <div class="inline-flex items-center gap-2 px-2 py-1.5 border border-[var(--border-color)] text-[var(--text-tertiary)] font-mono text-[9px] uppercase tracking-widest rounded-sm">
            Classified: DECLASSIFIED / PUBLIC
          </div>
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-heading">
          Institutional Interpretation vs. Document Analysis
        </h1>
        <p class="text-xl text-[var(--text-secondary)] leading-relaxed">
          Why Raven Adversary rejects generic document summarization in favor of Pressure-State Modeling and Leverage Migration tracking for consequential transactions.
        </p>
      </header>

      <article class="prose prose-invert prose-lg max-w-none space-y-8 text-[var(--text-primary)]">
        <p>
          <strong>Raven does not sell AI analysis. Raven sells institutional interpretation under pressure.</strong> Generalized contract summarization tools focus on what a document says. We reconstruct the decision-state to determine <em>who accepted uncertainty, and under what conditions.</em> 
        </p>
        <p>
          Traditional compliance automation and generic AI governance platforms operate on policy-state—they summarize clauses in a vacuum. A high-stakes transaction is not a vacuum. It is a live environment characterized by asymmetrical disclosure and shifting negotiation leverage.
        </p>

        <h2 class="text-2xl font-bold font-heading border-b border-[var(--border-color)] pb-3 mt-12 mb-6">
          The Move from Language to Consequence
        </h2>
        <p>
          The margin for error in an activist proxy contest or a distressed de-SPAC is zero. Practitioners do not need a faster way to read a termination fee provision; they need to know if the interplay between that fee, an esoteric non-solicitation carve-out, and regulatory escalation pathways creates a structural moat restricting a targeted spin-off.
        </p>

        <h2 class="text-2xl font-bold font-heading border-b border-[var(--border-color)] pb-3 mt-12 mb-6">
          The Pressure-State Engine & Topology
        </h2>
        <p>
          Raven Adversary reconstructs Accountability Continuity. By mapping pressure propagation across institutional systems, we allow event-driven funds, M&A litigators, and restructuring advisors to trace how initial governance fracture points trigger cascading liquidity and proxy instability.
        </p>
        <p>
          We track Leverage Migration, conduct Governance Fracture Detection, and calculate Disclosure Detonation Scores to give institutional leaders a definitive, action-oriented trajectory.
        </p>
      </article>
    </div>
  `,
  privacy: `
    <div class="py-24 px-6 max-w-4xl mx-auto space-y-12 min-h-screen">
      <div class="space-y-4 mt-8">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
          Note 14.8.2
        </div>
        <h1 class="text-4xl md:text-5xl font-bold font-heading">Privacy Policy</h1>
        <p class="text-[var(--text-secondary)] font-mono text-sm">LAST UPDATED: CURRENT</p>
      </div>

      <div class="space-y-8 text-[var(--text-secondary)] leading-relaxed">
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-[var(--text-primary)]">1. Institutional Restraint</h2>
          <p>
            Raven Adversary operates under a strict principle of institutional restraint. We process only the minimum viable data necessary to verify institutional standing, qualify transaction pressure, and execute requested intelligence operations.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-[var(--text-primary)]">2. Public-Domain Superiority</h2>
          <p>
            Our core intelligence engine requires zero Material Non-Public Information (MNPI). We strictly utilize public filings—SEC schedules, proxy statements, and definitive merger agreements. Therefore, we do not require, nor do we accept, confidential customer data for algorithmic processing.
          </p>
        </section>

        <section class="space-y-4 border-l-2 border-[var(--brand-cyan)] pl-6 py-2 bg-[var(--bg-secondary)]/10">
          <h2 class="text-2xl font-bold text-[var(--text-primary)]">3. Lead Filtration Data</h2>
          <p>
            Information submitted via the initial terminal, including CIK modifiers, counterparty identities, and exposure figures, is utilized strictly for intent qualification. This data is sequestered from the core machine learning pipeline. 
          </p>
        </section>
      </div>
    </div>
  `,
  security: `
    <div class="py-24 px-6 max-w-4xl mx-auto space-y-12 min-h-screen">
      <div class="space-y-4 mt-8">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
          Operations Auth
        </div>
        <h1 class="text-4xl md:text-5xl font-bold font-heading">Security & Compliance</h1>
        <p class="text-[var(--text-secondary)] font-mono text-sm">INFRASTRUCTURE BRIEFING</p>
      </div>

      <div class="space-y-8 text-[var(--text-secondary)] leading-relaxed">
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2">Information Boundaries</h2>
          <p>
            Raven Adversary is architected to operate exclusively outside of the MNPI perimeter. By maintaining our intelligence engine strictly on public EDGAR feeds, judicial dockets, and structured regulatory filings, we eliminate the systemic contamination risk inherent to traditional investigative frameworks.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2">Access Control architecture</h2>
          <p>
            Zero-Trust access governs internal roles. Audit logging maintains cryptographically sealed records. Transport layer encryption enforces TLS 1.3, while data at rest is secured via AES-256.
          </p>
        </section>
      </div>
    </div>
  `,
  terms: `
    <div class="py-24 px-6 max-w-4xl mx-auto space-y-12 min-h-screen">
      <div class="space-y-4 mt-8">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
          Contract 01.A
        </div>
        <h1 class="text-4xl md:text-5xl font-bold font-heading">Terms of Service</h1>
        <p class="text-[var(--text-secondary)] font-mono text-sm">EFFECTIVE: CURRENT</p>
      </div>

      <div class="space-y-8 text-[var(--text-secondary)] leading-relaxed">
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-[var(--text-primary)]">1. Binding Agreement</h2>
          <p>
            By accessing Raven's public interfaces or submitting data via our terminal systems, you enter into a binding agreement structured for institutional engagement. This platform is not intended for retail utilization.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-[var(--text-primary)]">2. No Financial Advice & Disclaimers</h2>
          <p>
            All outputs, pressure event memos, and target structures generated by Raven Adversary constitute analytical observations derived from public data. They are expressly NOT investment, legal, or financial advice.
          </p>
        </section>
      </div>
    </div>
  `,
  'pressure-intelligence': `
    <div class="pt-28 pb-20 px-6 max-w-5xl mx-auto space-y-16">
      <header class="space-y-6 border-b border-[var(--border-color)] pb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em]">
          Knowledge Base // Category Pillar
        </div>
        <h1 class="text-4xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.1]">
          What is Institutional Pressure Intelligence?
        </h1>
        <p class="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          A definitive study on how modern M&A, shareholder activism, and complex regulatory thresholds propagate systemic unpriced risks.
        </p>
      </header>

      <section class="space-y-6 text-[var(--text-secondary)] text-base md:text-lg">
        <h2 class="text-2xl font-bold text-[var(--text-primary)] font-heading">The Multi-Variable Dependency Network</h2>
        <p>
          Institutional pressure is the systemic drag that occurs when floating contractual, regulatory, or governance boundaries intersect during a high-stakes transaction. Traditional advisors operate in silos, ignoring how modifications in one variable cascade across unrelated systems.
        </p>
        <p>
          By treating SEC disclosures as inputs to a mathematical dependency graph, Raven identifies structural tipping points before they materialize in the public markets.
        </p>
      </section>
    </div>
  `,
  'services/m-and-a': `
    <div class="pt-28 pb-20 px-6 max-w-5xl mx-auto space-y-16">
      <header class="space-y-6 border-b border-[var(--border-color)] pb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em]">
          Service Offering // Tier 2 Environment
        </div>
        <h1 class="text-4xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.1]">
          M&A Transaction Pressure
        </h1>
        <p class="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          Map post-close unabsorbed corporate overhead, TSA stranded-cost escalation traps, and capital-buffer degradation in corporate carve-outs.
        </p>
      </header>

      <section class="space-y-6 text-[var(--text-secondary)] text-base md:text-lg">
        <h2 class="text-2xl font-bold text-[var(--text-primary)] font-heading">Isolating Unabsorbed Support Overhead</h2>
        <p>
          Corporate carve-outs often assume simple operational transitions. However, unabsorbed parent corporate overhead frequently lingers, shifting massive post-close liabilities onto the transaction entities.
        </p>
        <p>
          Our models simulate TSA timeline drift to protect transaction value and define bulletproof operational boundaries before Definitive Agreements bind.
        </p>
      </section>
    </div>
  `,
  'services/activism': `
    <div class="pt-28 pb-20 px-6 max-w-5xl mx-auto space-y-16">
      <header class="space-y-6 border-b border-[var(--border-color)] pb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em]">
          Service Offering // Tier 2 Environment
        </div>
        <h1 class="text-4xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.1]">
          Shareholder Activism Risk
        </h1>
        <p class="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          Evaluate proxy language drift, voting blocs, and index fund alignment patterns before public proxy battles escalate.
        </p>
      </header>

      <section class="space-y-6 text-[var(--text-secondary)] text-base md:text-lg">
        <h2 class="text-2xl font-bold text-[var(--text-primary)] font-heading">Pre-Emptive Proxy Vulnerability Assessment</h2>
        <p>
          Public proxy campaigns represent the final stage of institutional misalignment. The latent indicators—such as subtle language modifications in proxy filings and shifting voting patterns of major index managers—propagate months prior.
        </p>
        <p>
          Raven maps these shifts to isolate board vulnerabilities and design defensive strategies.
        </p>
      </section>
    </div>
  `,
  'services/governance': `
    <div class="pt-28 pb-20 px-6 max-w-5xl mx-auto space-y-16">
      <header class="space-y-6 border-b border-[var(--border-color)] pb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em]">
          Service Offering // Tier 2 Environment
        </div>
        <h1 class="text-4xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.1]">
          Governance Fracture Detection
        </h1>
        <p class="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          Identify isolated directors, board voting divergence, and structural cracks in corporate governance frameworks.
        </p>
      </header>

      <section class="space-y-6 text-[var(--text-secondary)] text-base md:text-lg">
        <h2 class="text-2xl font-bold text-[var(--text-primary)] font-heading">Quantifying Board Disintegration</h2>
        <p>
          Isolated corporate governance structures represent latent risks for transaction failure. When individual directors diverge on core strategic votes, the board's operational cohesion collapses.
        </p>
        <p>
          We reconstruct historical voting histories and proxy language adjustments to track board fracture indices.
        </p>
      </section>
    </div>
  `,
  'services/regulatory': `
    <div class="pt-28 pb-20 px-6 max-w-5xl mx-auto space-y-16">
      <header class="space-y-6 border-b border-[var(--border-color)] pb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em]">
          Service Offering // Tier 2 Environment
        </div>
        <h1 class="text-4xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.1]">
          Regulatory Threshold Pressure
        </h1>
        <p class="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          Model systemic capital drags, high-quality liquid asset (HQLA) expansion triggers, and Category III compliance thresholds.
        </p>
      </header>

      <section class="space-y-6 text-[var(--text-secondary)] text-base md:text-lg">
        <h2 class="text-2xl font-bold text-[var(--text-primary)] font-heading">The Cost of Asset Consolidation</h2>
        <p>
          When financial institutions scale, crossing total consolidated asset size boundaries triggers abrupt regulatory changes. For bank consolidations, crossing the $250B Category III threshold mandates LCR compliance and high-quality liquid asset reserves.
        </p>
        <p>
          We model pro-forma deposit volatility profiles to map precise capital reserve requirements and preserve net interest margins.
        </p>
      </section>
    </div>
  `,
  methodology: `
    <div class="pt-28 pb-20 px-6 max-w-5xl mx-auto space-y-16">
      <header class="space-y-6 border-b border-[var(--border-color)] pb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[10px] uppercase tracking-[0.2em]">
          Operational Methodology // Core Architecture
        </div>
        <h1 class="text-4xl md:text-6xl font-bold font-heading tracking-tight text-[var(--text-primary)] leading-[1.1]">
          The Raven Methodology
        </h1>
        <p class="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          Four pipeline modules designed to eliminate low-context LLM summarization and deliver verifiable, actionable pressure-state intelligence.
        </p>
      </header>

      <section class="space-y-6 text-[var(--text-secondary)] text-base md:text-lg">
        <h2 class="text-2xl font-bold text-[var(--text-primary)] font-heading">Module-Driven Verification Protocols</h2>
        <p>
          We construct institutional certainty through Adversarial Debate Logic, Pressure-State Modeling, the Commit Layer, and strict Evidence Verification. No summaries. No opinions. Complete, document-backed truth.
        </p>
      </section>
    </div>
  `
};

// Helper function to replace <div id="root"></div> in html content with the target pre-rendered code
function prerenderRoute(originalHtml, routeContent) {
  const replacement = `<div id="root">${routeContent}</div>`;
  return originalHtml.replace('<div id="root"></div>', replacement);
}

// 1. Rewrite root index.html (Home) with pre-rendered home page
const homeHtml = prerenderRoute(originalHtml, templates.home);
fs.writeFileSync(sourceHtmlPath, homeHtml, 'utf8');
console.log('Successfully pre-rendered home page: dist/index.html');

// 2. Pre-render other paths statically for 200 OK indexation without requiring JavaScript
const routes = [
  'intelligence', 
  'privacy', 
  'security', 
  'terms',
  'pressure-intelligence',
  'services/m-and-a',
  'services/activism',
  'services/governance',
  'services/regulatory',
  'methodology'
];

routes.forEach(route => {
  const routeDir = path.join(distPath, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  
  const content = templates[route];
  const routeHtml = prerenderRoute(originalHtml, content);
  
  const targetHtmlPath = path.join(routeDir, 'index.html');
  fs.writeFileSync(targetHtmlPath, routeHtml, 'utf8');
  console.log(`Successfully created fully pre-rendered indexable page: /${route}/index.html`);
});

// 3. Create standard 404.html fallback
const fallbackPath = path.join(distPath, '404.html');
fs.writeFileSync(fallbackPath, homeHtml, 'utf8');
console.log('Successfully copied fallback file for wildcard paths to: dist/404.html');

console.log('Pre-rendering build process completed successfully. All SPA routes are now statically crawlable with fully-qualified content text!');
