import React from 'react';
import { Shield, Brain, Terminal, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IntelligenceFeed() {
  return (
    <div className="pt-24 pb-20 px-6 max-w-4xl mx-auto space-y-16">
      <header className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/5 text-[var(--brand-cyan)] font-mono text-[11px] uppercase tracking-widest mb-4">
          <Terminal className="w-3 h-3" />
          Intelligence Feed
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-heading">
          Why Raven Outperforms Legacy AI in Banking M&A Due Diligence
        </h1>
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
          The structural limitations of generalized legal AI tools (like Kira Systems and Harvey AI) when deployed in high-stakes financial sector transactions.
        </p>
      </header>

      <article className="prose prose-invert prose-lg max-w-none space-y-8 text-[var(--text-primary)]">
        <p>
          In the specialized field of <strong>AI due diligence in banking M&A</strong>, the margin for error is zero. 
          When analyzing massive filing stacks—merger agreements, proxy statements, S-4s, and regulatory disclosures—traditional 
          legal AI tools like Kira and Harvey often fall short. They are designed for generalized document review, extraction, 
          and summarization, not for the adversarial pressure-testing required in live financial transactions.
        </p>

        <h2 className="text-2xl font-bold font-heading border-b border-[var(--border-color)] pb-3 mt-12 mb-6">
          The Precision Gap: Generalized Extraction vs. Adversarial Intelligence
        </h2>
        
        <p>
          Legacy platforms such as <strong>Kira Systems</strong> popularized the concept of machine learning in due diligence by automating the extraction of standard clauses (e.g., change of control, governing law). More recently, platforms built on large language models, such as <strong>Harvey AI</strong>, have elevated the natural language capabilities of legal research.
        </p>

        <p>
          However, <em>AI due diligence in banking M&A</em> requires a fundamentally different paradigm. Bank mergers are uniquely complex, heavily regulated, and structurally fragile. A generic summary of a "Termination Fee" clause is insufficient. Practitioners need to know if the interplay between a termination fee, an esoteric non-solicitation carve-out, and regulatory approval thresholds creates a structural moat that severely limits superior bids.
        </p>

        <div className="glass-card p-6 my-8 border-l-2 border-[var(--brand-cyan)]">
          <h3 className="font-bold font-heading mb-3 flex items-center gap-2 text-[var(--brand-cyan)]">
            <Brain className="w-5 h-5" /> Raven Adversary's Approach
          </h3>
          <p className="text-sm">
            Raven Adversary is explicitly designed for the adversarial nature of M&A. Instead of asking, "What does this document say?" Raven asks, "Where is the buyer exposed? Where is the seller protected? And what is the quantified threat?"
          </p>
        </div>

        <h2 className="text-2xl font-bold font-heading border-b border-[var(--border-color)] pb-3 mt-12 mb-6">
          Where Legacy Tools (Kira, Harvey) Struggle in Banking Deals
        </h2>

        <div className="space-y-6 mt-6">
          <div className="flex gap-4">
            <Shield className="w-6 h-6 text-[var(--brand-purple)] shrink-0" />
            <div>
              <h4 className="font-bold text-lg">1. Cross-Document Dependency Mapping</h4>
              <p className="text-[var(--text-secondary)] mt-2">
                Legacy tools typically analyze documents in isolation. If a contingency is defined in the initial merger agreement, modified in an 8-K, and triggered by a dynamic SEC threshold, generalized AI misses the connection. Raven maps these cross-dependencies explicitly.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Shield className="w-6 h-6 text-[var(--brand-purple)] shrink-0" />
            <div>
              <h4 className="font-bold text-lg">2. "Hallucination" in Critical Numbers</h4>
              <p className="text-[var(--text-secondary)] mt-2">
                While LLMs are excellent at language, they struggle with exact mathematical constraints. Bank M&A involves specific asset thresholds (e.g., the $10B Durbin Amendment threshold), exact ADTV percentage caps on lock-ups, and complex exchange ratios. Raven acts as a deterministic verification engine for these figures, providing citation-anchored intelligence rather than probabilistic summaries.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Shield className="w-6 h-6 text-[var(--brand-purple)] shrink-0" />
            <div>
              <h4 className="font-bold text-lg">3. Lack of "Offense vs. Defense" Context</h4>
              <p className="text-[var(--text-secondary)] mt-2">
                A tool like Kira will tell you a termination fee exists. It will not tell you that the termination fee, when combined with a unique reimbursement clause, creates a $75.4M liability barrier that represents 6.36% of the target's equity value—a trapdoor preventing competitive bids.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold font-heading border-b border-[var(--border-color)] pb-3 mt-12 mb-6">
          The Future of AI Due Diligence in Banking M&A
        </h2>

        <p>
          The future of transaction diligence does not lie in faster summarization. It lies in deterministic risk quantification. Institutional investors, M&A litigators, and boutique advisory firms require an adversarial layer that stress-tests the transaction framework before capital is committed. 
        </p>

        <p>
          By moving beyond the extraction-centric models of Harvey and Kira, Raven Adversary equips dealmakers with targeted, pre-analyzed exposure reports, significantly reducing the first-pass review workload while increasing structural security.
        </p>
      </article>

      {/* Internal Link / CTA */}
      <div className="mt-16 p-8 glass-panel rounded-lg border border-[var(--border-highlight)] text-center space-y-6">
        <h3 className="text-2xl font-bold font-heading">Secure Your Deal Ecosystem</h3>
        <p className="text-[var(--text-secondary)]">Request a live demonstration of Raven analyzing a recent public transaction.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-3 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity rounded-sm">
          Return to Platform <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
