import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Linkedin } from 'lucide-react';
import { Corvus } from './components/Corvus';
import Home from './pages/Home';
import IntelligenceFeed from './pages/IntelligenceFeed';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Security from './pages/Security';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isDark, setIsDark] = useState(true);

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
              <div className="absolute top-[-20%] w-[1000px] h-[500px] bg-[var(--brand-purple)]/10 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[var(--brand-cyan)]/5 rounded-full blur-[120px]"></div>
              
              {/* Background Watermark Logo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <img 
                  src="/logo.png?v=3" 
                  alt="" 
                  className="w-[100vw] max-w-[1200px] object-contain mix-blend-screen contrast-125 brightness-110" 
                />
              </div>
            </>
          )}
          {!isDark && (
             <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <img 
                src="/logo.png?v=3" 
                alt="" 
                className="w-[100vw] max-w-[1200px] object-contain mix-blend-multiply hover:opacity-80" 
                style={{ filter: 'invert(1) contrast(300%) brightness(120%)' }}
              />
            </div>
          )}
        </div>

        {/* Navbar */}
        <nav className="fixed w-full z-40 border-b border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 hover:opacity-100 transition-opacity group/logo relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--brand-cyan)]/10 to-transparent opacity-0 group-hover/logo:opacity-100 blur-xl transition-opacity pointer-events-none"></div>
              <div className="relative flex items-center h-12 md:h-16 w-auto shrink-0 overflow-visible group">
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

                {/* Focus Mode Add: Small intelligence metadata badge on hover/always near logo */}
                <div className="absolute -right-20 top-2 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col gap-0.5">
                  <span className="text-[7px] font-mono tracking-widest uppercase text-[var(--text-tertiary)] border border-[var(--border-color)] bg-[var(--bg-primary)] px-1 py-0.5 leading-none shadow-sm">Sys: ON</span>
                  <span className="text-[7px] font-mono tracking-widest uppercase text-[var(--brand-cyan)] border border-[var(--border-color)] border-t-0 bg-[var(--bg-primary)] px-1 py-0.5 leading-none shadow-sm">Net: SECURE</span>
                </div>
              </div>
              
              <div className="hidden lg:flex flex-col gap-1.5 items-start justify-center ml-2 border-l border-[var(--brand-cyan)]/20 pl-4 py-1">
                <div className="px-2 py-0.5 rounded-sm border border-[var(--border-color)] font-mono text-[9px] tracking-[0.15em] text-[var(--text-primary)] bg-[var(--bg-secondary)]/50 group-hover/logo:border-[var(--brand-cyan)]/30 transition-colors">
                  INSTITUTIONAL PRESSURE INTELLIGENCE
                </div>
                <div className="px-2 font-mono text-[8px] tracking-[0.2em] text-[var(--text-tertiary)] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                  Node Array Online <span className="text-[var(--border-highlight)]">|</span> Auth: Valid
                </div>
                <div className="px-2 font-mono text-[7px] tracking-widest text-[var(--brand-cyan)]/70 uppercase">
                  SESSION_ID: 0x{Math.random().toString(16).substr(2, 8).toUpperCase()} // ROOT
                </div>
              </div>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/intelligence" className="text-xs font-bold uppercase tracking-wider hover:text-[var(--brand-cyan)] transition-colors hidden sm:block">
                Intelligence Feed
              </Link>
              <a 
                href="https://www.linkedin.com/in/abhishek-tanwar-raven-adversary/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[#0a66c2] transition-colors glass-panel"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors glass-panel"
                title="Toggle Institutional Theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </nav>

        <main className="relative z-10 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intelligence" element={<IntelligenceFeed />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/security" element={<Security />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t border-[var(--border-color)] py-12 bg-[var(--bg-primary)] relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center lg:text-left flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-[var(--text-tertiary)] tracking-[0.2em] uppercase">
            <p className="opacity-70">&copy; {new Date().getFullYear()} RAVEN ADVERSARY INTEL. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6 items-center">
              <a href="https://www.linkedin.com/in/abhishek-tanwar-raven-adversary/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--brand-cyan)] transition-colors flex items-center gap-2"><Linkedin className="w-3 h-3" /> INTEL_FEED</a>
              <span className="w-px h-3 bg-[var(--border-color)] hidden md:block"></span>
              <Link to="/privacy" className="hover:text-[var(--text-primary)] transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[var(--text-primary)] transition-colors">Terms of Service</Link>
              <Link to="/security" className="hover:text-[var(--text-primary)] transition-colors">Security & Compliance</Link>
            </div>
          </div>
        </footer>

        {/* Interactive Raven Bot */}
        <Corvus />
      </div>
    </Router>
  );
}
