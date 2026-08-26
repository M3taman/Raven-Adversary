import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Linkedin, ChevronDown, Menu, X, Shield, Layers, Cpu, BookOpen, Users, Database, FileText } from 'lucide-react';
import { Corvus } from './components/Corvus';
import Home from './pages/Home';
import IntelligenceFeed from './pages/IntelligenceFeed';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Security from './pages/Security';
import PressureIntelligencePillar from './pages/PressureIntelligencePillar';
import MandAService from './pages/MandAService';
import ActivismService from './pages/ActivismService';
import GovernanceService from './pages/GovernanceService';
import RegulatoryService from './pages/RegulatoryService';
import Methodology from './pages/Methodology';
import TransactionReview from './pages/TransactionReview';
import EvidenceStandard from './pages/EvidenceStandard';
import TrustCenter from './pages/TrustCenter';
import ConflictsPolicy from './pages/ConflictsPolicy';
import CaseStudyDetail from './pages/CaseStudyDetail';
import RavenEngine from './pages/RavenEngine';
import InstitutionalUse from './pages/InstitutionalUse';
import DealIntelligenceArchive from './pages/DealIntelligenceArchive';
import DealIntelligenceDetail from './pages/DealIntelligenceDetail';
import RequestAssessment from './pages/RequestAssessment';
import ComparisonPage from './pages/Comparison';

const METADATA: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Raven Adversary | Institutional Pressure Intelligence for Complex Transactions',
    description: 'We reconstruct dynamic M&A transaction state machines from public evidence, adversarially test claims, and map where contractual and governance leverage migrate.'
  },
  '/comparison': {
    title: 'Architectural Comparison // Due Diligence Landscape | Raven Adversary',
    description: 'Technical evaluation comparing traditional M&A advisory, virtual data rooms (VDRs), generic legal AI LLMs, and the Raven deterministic state machine.'
  },
  '/raven-engine': {
    title: 'The Raven Engine // 9-Stage Transaction State Pipeline | Raven Adversary',
    description: 'Explore the 9-stage deterministic intelligence architecture from raw SEC line parsing to the cryptographic commit layer.'
  },
  '/institutional-use': {
    title: 'Institutional Use Profiles // M&A, PE, Activism, Litigation | Raven Adversary',
    description: 'Tailored institutional pressure intelligence workflows for Investment Banking, Private Equity, Corporate Development, Governance Committees, and Litigation Counsel.'
  },
  '/deal-intelligence': {
    title: 'Deal Intelligence Archive // 100+ Live Transactions | Raven Adversary',
    description: 'Search and inspect verified pressure intelligence dossiers, critical covenants, and governance models across 100+ public corporate transactions.'
  },
  '/methodology': {
    title: 'The Raven Standard for Transaction Intelligence | Raven Adversary',
    description: 'The public epistemic standard governing claim classification, adversarial interrogation, falsification gates, and decision-state reconstruction in M&A.'
  },
  '/request-assessment': {
    title: 'Request Transaction Assessment // 48-72h Audit Sprint | Raven Adversary',
    description: 'Commission an independent, cryptographically committed 8-part adversarial transaction review under zero-MNPI protocols.'
  },
  '/transaction-review': {
    title: '8-Part Transaction Review Package ($10K / $25K) | Raven Adversary',
    description: 'Comprehensive 48-72 hour forensic transaction intelligence review for active M&A, contested shareholder votes, and bank consolidations.'
  },
  '/evidence-standard': {
    title: '5-Tier Evidence Standard & Claim Adjudication | Raven Adversary',
    description: 'Our mathematical framework strictly categorizes Verified Facts, Derived Computations, Structural Inferences, and Adversarial Hypotheses.'
  },
  '/trust': {
    title: 'Trust Center & Informational Hygiene | Raven Adversary',
    description: 'Zero MNPI guarantee, strict digital ethical walls, AES-256 encryption, and zero AI model training on client transaction queries.'
  },
  '/conflicts': {
    title: 'Transaction Conflict & Ethical Wall Policy | Raven Adversary',
    description: 'Formal policy governing pre-engagement conflict clearance, client isolation, and public-filings mandate for institutional M&A.'
  },
  '/intelligence': {
    title: 'Adversarial Intelligence Archive | Raven Adversary',
    description: 'Dissect memos, strategic briefs, and forensic analyses tracking institutional pressure, leverage migration, and unpriced exposure in M&A.'
  },
  '/privacy': {
    title: 'Information Hygiene & Privacy Policy | Raven Adversary',
    description: 'Raven Adversary is committed to strict public-domain analysis and data segregation. Review our privacy protocols and zero-MNPI policy.'
  },
  '/security': {
    title: 'Zero-Trust Security & Compliance Framework | Raven Adversary',
    description: 'Explore Raven Adversary\'s enterprise-grade zero-trust infrastructure, AES-256 encryption standards, and secure client isolation layers.'
  },
  '/terms': {
    title: 'Terms of Service & Institutional Engagement | Raven Adversary',
    description: 'Review the terms governing the use of Raven Adversary\'s institutional pressure-state analytics platform and professional services.'
  },
  '/pressure-intelligence': {
    title: 'What is Institutional Pressure Intelligence? | Raven Adversary',
    description: 'Learn how Raven Adversary models multi-variable dependency networks, legal covenants, and transaction stress to expose unpriced M&A risks.'
  },
  '/services/m-and-a': {
    title: 'M&A Transaction Pressure & TSA Modeling | Raven Adversary',
    description: 'Model post-close unabsorbed parent corporate overhead, transition services agreement (TSA) timeline drift, and stranded-cost assets.'
  },
  '/services/activism': {
    title: 'Shareholder Activism Risk & Proxy Defense | Raven Adversary',
    description: 'Evaluate proxy language drift, voting blocs, and index fund voting patterns to anticipate and mitigate hostile shareholder campaigns.'
  },
  '/services/governance': {
    title: 'Governance Fracture Detection & Board Stability | Raven Adversary',
    description: 'Quantify board cohesion, identify isolated directors, and analyze historical voting divergence to predict transaction disruption.'
  },
  '/services/regulatory': {
    title: 'Regulatory Threshold Pressure & HQLA Drag | Raven Adversary',
    description: 'Model capital reserves, pro-forma deposit volatility, and Net Interest Margin compression when crossing key Category III asset tiers.'
  }
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const meta = METADATA[pathname] || METADATA['/'];
    document.title = meta.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', meta.title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', meta.description);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden selection:bg-[var(--brand-cyan)] selection:text-white transition-colors duration-300">
        
        {/* Background Decorators */}
        <div className="pointer-events-none fixed inset-0 z-0 flex justify-center overflow-hidden">
          {isDark && (
            <>
              <div className="absolute top-[-20%] w-[1000px] h-[500px] bg-[var(--brand-purple)]/5 rounded-full blur-[140px]"></div>
              <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[var(--brand-cyan)]/5 rounded-full blur-[140px]"></div>
              
              {/* Background Watermark Logo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
                <img 
                  src="/logo.png?v=3" 
                  alt="Raven Adversary Background Watermark" 
                  className="w-[100vw] max-w-[1200px] object-contain mix-blend-screen contrast-125 brightness-110" 
                />
              </div>
            </>
          )}
          {!isDark && (
             <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
              <img 
                src="/logo.png?v=3" 
                alt="Raven Adversary Light Background Watermark" 
                className="w-[100vw] max-w-[1200px] object-contain mix-blend-multiply hover:opacity-80" 
                style={{ filter: 'invert(1) contrast(300%) brightness(120%)' }}
              />
            </div>
          )}
        </div>

        {/* Navbar */}
        <nav className="fixed w-full z-40 border-b border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 hover:opacity-100 transition-opacity group/logo relative shrink-0">
              <div className="relative flex items-center h-12 md:h-16 w-auto shrink-0 overflow-visible">
                <img 
                  src="/logo.png?v=3" 
                  alt="Raven Adversary" 
                  className="h-[140%] max-h-none w-auto object-contain hidden dark:block mix-blend-screen contrast-125 brightness-110 -ml-2"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('logo-fallback');
                    if (fallback) fallback.classList.remove('dark:hidden');
                  }}
                />
                
                <img 
                  src="/logo.png?v=3" 
                  alt="Raven Adversary" 
                  className="h-[140%] max-h-none w-auto object-contain dark:hidden mix-blend-multiply -ml-2"
                  style={{ filter: 'invert(1) contrast(300%) brightness(120%)' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                <div id="logo-fallback" className="font-bold text-2xl tracking-tight flex flex-col leading-none hidden relative z-10 p-2">
                  <span>RAVEN</span>
                  <span className="text-[10px] font-medium text-[var(--brand-cyan)] tracking-widest mt-0.5">ADVERSARY</span>
                </div>
              </div>
              
              <div className="hidden 2xl:flex flex-col gap-1 items-start justify-center ml-2 border-l border-[var(--border-color)] pl-4 py-1">
                <div className="font-mono text-[9px] tracking-[0.15em] text-[var(--text-secondary)] uppercase font-semibold">
                  PRESSURE INTELLIGENCE
                </div>
                <div className="font-mono text-[8px] tracking-[0.2em] text-[var(--text-tertiary)] uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  100% PUBLIC FILINGS // ZERO MNPI
                </div>
              </div>
            </Link>

            {/* Desktop Horizontal Navigation Bar */}
            <div className="hidden lg:flex items-center gap-6 font-mono text-[10px] tracking-widest uppercase font-bold text-[var(--text-secondary)]">
              
              <Link to="/deal-intelligence" className="hover:text-[var(--brand-cyan)] transition-colors py-2 flex items-center gap-1.5">
                <Database className="w-3 h-3 text-[var(--brand-cyan)]" /> Intelligence Archive
              </Link>

              <Link to="/raven-engine" className="hover:text-[var(--brand-cyan)] transition-colors py-2 flex items-center gap-1.5">
                <Cpu className="w-3 h-3" /> The Engine
              </Link>

              <Link to="/methodology" className="hover:text-[var(--brand-cyan)] transition-colors py-2 flex items-center gap-1.5">
                <BookOpen className="w-3 h-3" /> The Standard
              </Link>

              <Link to="/institutional-use" className="hover:text-[var(--brand-cyan)] transition-colors py-2 flex items-center gap-1.5">
                <Users className="w-3 h-3" /> Institutional Use
              </Link>

              {/* Trust & Standards Dropdown */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 hover:text-[var(--brand-cyan)] transition-colors font-mono text-[10px] uppercase font-bold tracking-widest">
                  Trust & Standards <ChevronDown className="w-3 h-3 text-[var(--text-tertiary)] group-hover:text-[var(--brand-cyan)] transition-colors" />
                </button>
                <div className="absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2 w-72 bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-auto">
                  <div className="space-y-1">
                    <Link to="/evidence-standard" className="block p-2 hover:bg-[var(--bg-secondary)] text-[10px] font-bold text-[var(--text-primary)]">
                      5-Tier Evidence Matrix
                    </Link>
                    <Link to="/trust" className="block p-2 hover:bg-[var(--bg-secondary)] text-[10px] font-bold text-[var(--text-primary)]">
                      Trust Center & Zero-MNPI
                    </Link>
                    <Link to="/conflicts" className="block p-2 hover:bg-[var(--bg-secondary)] text-[10px] font-bold text-[var(--text-primary)]">
                      Conflicts Policy & Ethical Walls
                    </Link>
                    <Link to="/security" className="block p-2 hover:bg-[var(--bg-secondary)] text-[10px] font-bold text-[var(--text-primary)]">
                      Zero-Trust Infrastructure
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* Desktop Action Area */}
            <div className="flex items-center gap-3 shrink-0">
              <a 
                href="https://www.linkedin.com/in/abhishek-tanwar-raven-adversary/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[#0a66c2] hover:border-[#0a66c2]/40 transition-colors hidden sm:inline-flex"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2.5 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors"
                title="Toggle Theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Request Assessment CTA */}
              <Link 
                to="/request-assessment" 
                className="hidden sm:inline-flex items-center justify-center bg-[var(--text-primary)] text-[var(--bg-primary)] border border-transparent px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Request Assessment
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                title="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-20 md:top-24 h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] bg-[var(--bg-primary)] border-t border-[var(--border-color)] z-50 overflow-y-auto p-6 flex flex-col justify-between space-y-6 font-mono text-xs tracking-widest uppercase font-bold text-left shadow-2xl">
              <div className="space-y-6">
                <Link 
                  to="/request-assessment" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-3.5 bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/30 text-[var(--brand-cyan)] text-center text-xs tracking-wider"
                >
                  Request Transaction Assessment
                </Link>

                <div className="space-y-3 border-b border-[var(--border-color)] pb-5">
                  <div className="text-[10px] text-[var(--text-tertiary)] uppercase font-normal tracking-widest">
                    Core Intelligence Surfaces
                  </div>
                  <Link to="/deal-intelligence" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-1.5 text-[var(--text-primary)] hover:text-[var(--brand-cyan)]">
                    <Database className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> Deal Intelligence Archive
                  </Link>
                  <Link to="/raven-engine" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-1.5 text-[var(--text-primary)] hover:text-[var(--brand-cyan)]">
                    <Cpu className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> The Raven Engine
                  </Link>
                  <Link to="/methodology" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-1.5 text-[var(--text-primary)] hover:text-[var(--brand-cyan)]">
                    <BookOpen className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> The Raven Standard
                  </Link>
                  <Link to="/institutional-use" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-1.5 text-[var(--text-primary)] hover:text-[var(--brand-cyan)]">
                    <Users className="w-3.5 h-3.5 text-[var(--brand-cyan)]" /> Institutional Profiles
                  </Link>
                </div>

                <div className="space-y-3 border-b border-[var(--border-color)] pb-5">
                  <div className="text-[10px] text-[var(--text-tertiary)] uppercase font-normal tracking-widest">
                    Standards, Hygiene & Trust
                  </div>
                  <Link to="/evidence-standard" onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 text-[var(--text-secondary)] hover:text-[var(--brand-cyan)]">
                    5-Tier Evidence Standard
                  </Link>
                  <Link to="/trust" onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 text-[var(--text-secondary)] hover:text-[var(--brand-cyan)]">
                    Trust Center & Zero-MNPI
                  </Link>
                  <Link to="/conflicts" onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 text-[var(--text-secondary)] hover:text-[var(--brand-cyan)]">
                    Conflicts Policy & Ethical Walls
                  </Link>
                  <Link to="/security" onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 text-[var(--text-secondary)] hover:text-[var(--brand-cyan)]">
                    Zero-Trust Infrastructure
                  </Link>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] space-y-3">
                <Link 
                  to="/request-assessment" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Initiate Assessment Intake
                </Link>
                <div className="text-center text-[9px] font-mono text-[var(--text-tertiary)] tracking-widest">
                  100% PUBLIC SEC FILINGS // ZERO MNPI
                </div>
              </div>
            </div>
          )}
        </nav>

        <main className="relative z-10 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/raven-engine" element={<RavenEngine />} />
            <Route path="/institutional-use" element={<InstitutionalUse />} />
            <Route path="/deal-intelligence" element={<DealIntelligenceArchive />} />
            <Route path="/deal-intelligence/:id" element={<DealIntelligenceDetail />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            <Route path="/request-assessment" element={<RequestAssessment />} />
            
            {/* Legacy & Specialized Routes for Backward-Compatibility & Deep Links */}
            <Route path="/transaction-review" element={<TransactionReview />} />
            <Route path="/evidence-standard" element={<EvidenceStandard />} />
            <Route path="/trust" element={<TrustCenter />} />
            <Route path="/conflicts" element={<ConflictsPolicy />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/intelligence" element={<IntelligenceFeed />} />
            <Route path="/pressure-intelligence" element={<PressureIntelligencePillar />} />
            <Route path="/services/m-and-a" element={<MandAService />} />
            <Route path="/services/activism" element={<ActivismService />} />
            <Route path="/services/governance" element={<GovernanceService />} />
            <Route path="/services/regulatory" element={<RegulatoryService />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/security" element={<Security />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-left pb-12 border-b border-[var(--border-color)]/50">
              
              {/* Brand Col */}
              <div className="col-span-2 md:col-span-1 space-y-3">
                <div className="font-bold text-lg tracking-tight font-heading text-[var(--text-primary)]">
                  RAVEN ADVERSARY
                </div>
                <p className="font-mono text-[9px] tracking-wider leading-relaxed text-[var(--text-tertiary)] uppercase">
                  Institutional pressure intelligence for complex transactions. Grounded strictly in public SEC filings.
                </p>
                <div className="pt-2 font-mono text-[9px] text-emerald-400 flex items-center gap-1.5">
                  <Shield className="w-3 h-3" /> ZERO MNPI // ETHICAL WALL PROTECTED
                </div>
              </div>

              {/* The Institution */}
              <div className="space-y-3">
                <div className="font-mono text-[9px] font-bold text-[var(--text-primary)] tracking-[0.2em] uppercase">
                  THE INSTITUTION
                </div>
                <ul className="space-y-2 font-mono text-[9px] tracking-wider uppercase">
                  <li>
                    <Link to="/raven-engine" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      The Raven Engine
                    </Link>
                  </li>
                  <li>
                    <Link to="/methodology" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      The Raven Standard
                    </Link>
                  </li>
                  <li>
                    <Link to="/deal-intelligence" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      Deal Archive (100+)
                    </Link>
                  </li>
                  <li>
                    <Link to="/institutional-use" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      Institutional Profiles
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Engagement Desk */}
              <div className="space-y-3">
                <div className="font-mono text-[9px] font-bold text-[var(--text-primary)] tracking-[0.2em] uppercase">
                  COMMERCIAL DESK
                </div>
                <ul className="space-y-2 font-mono text-[9px] tracking-wider uppercase">
                  <li>
                    <Link to="/request-assessment" className="text-[var(--brand-cyan)] hover:underline font-bold">
                      Request Assessment
                    </Link>
                  </li>
                  <li>
                    <Link to="/transaction-review" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      8-Part Review Package
                    </Link>
                  </li>
                  <li>
                    <Link to="/evidence-standard" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      5-Tier Evidence Matrix
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Solutions */}
              <div className="space-y-3">
                <div className="font-mono text-[9px] font-bold text-[var(--text-primary)] tracking-[0.2em] uppercase">
                  SOLUTIONS
                </div>
                <ul className="space-y-2 font-mono text-[9px] tracking-wider uppercase">
                  <li>
                    <Link to="/services/m-and-a" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      M&A Pressure & TSAs
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/activism" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      Shareholder Activism Risk
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/governance" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      Governance Fractures
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/regulatory" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      Regulatory Thresholds
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Trust & Governance Col */}
              <div className="space-y-3">
                <div className="font-mono text-[9px] font-bold text-[var(--text-primary)] tracking-[0.2em] uppercase">
                  GOVERNANCE & TRUST
                </div>
                <ul className="space-y-2 font-mono text-[9px] tracking-wider uppercase">
                  <li>
                    <Link to="/trust" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      Trust Center & Zero-MNPI
                    </Link>
                  </li>
                  <li>
                    <Link to="/conflicts" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      Conflicts Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/security" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      Zero-Trust Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                      Terms of Engagement
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom copyright row */}
            <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[var(--text-tertiary)] tracking-[0.2em] uppercase">
              <p className="opacity-70">&copy; {new Date().getFullYear()} RAVEN ADVERSARY INTELLIGENCE. ALL RIGHTS RESERVED.</p>
              <div className="flex gap-4 items-center">
                <a 
                  href="https://www.linkedin.com/in/abhishek-tanwar-raven-adversary/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[var(--brand-cyan)] transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3 h-3" /> INTEL_FEED
                </a>
              </div>
            </div>

          </div>
        </footer>

        {/* Interactive Raven Bot */}
        <Corvus />
      </div>
    </Router>
  );
}
