import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import RavenBot from './components/RavenBot';
import Home from './pages/Home';
import IntelligenceFeed from './pages/IntelligenceFeed';

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
      <div className="relative min-h-screen font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden selection:bg-[var(--brand-cyan)] selection:text-white transition-colors duration-300">
        
        {/* Background Decorators */}
        <div className="pointer-events-none fixed inset-0 z-0 flex justify-center overflow-hidden">
          {isDark && (
            <>
              <div className="absolute top-[-20%] w-[1000px] h-[500px] bg-[var(--brand-purple)]/10 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[var(--brand-cyan)]/5 rounded-full blur-[120px]"></div>
            </>
          )}
        </div>

        {/* Navbar */}
        <nav className="fixed w-full z-40 border-b border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <div className="flex items-center relative gap-2">
                <img 
                  src="/logo.png" 
                  alt="Raven Adversary" 
                  className="h-8 md:h-11 object-contain hidden dark:block"
                  style={{ backgroundColor: '#2039ab' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('logo-fallback');
                    if (fallback) fallback.classList.remove('dark:hidden');
                  }}
                />
                <div id="logo-fallback" className="font-bold text-xl tracking-tight flex flex-col leading-none dark:hidden">
                  <span>RAVEN</span>
                  <span className="text-[9px] font-medium text-[var(--brand-cyan)] tracking-widest mt-0.5">ADVERSARY</span>
                </div>
              </div>
              <div className="hidden md:flex ml-4 px-2 py-0.5 rounded border border-[var(--border-color)] font-mono text-[9px] tracking-widest text-[var(--text-secondary)] bg-[var(--bg-secondary)]/50">
                LIVE TRANSACTION INTELLIGENCE
              </div>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/intelligence" className="text-xs font-bold uppercase tracking-wider hover:text-[var(--brand-cyan)] transition-colors hidden sm:block">
                Intelligence Feed
              </Link>
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
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t border-[var(--border-color)] py-8 bg-[var(--bg-secondary)]/30 backdrop-blur-md relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center lg:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[var(--text-tertiary)] tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} RAVEN ADVERSARY INTEL. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Terms</a>
              <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Security</a>
            </div>
          </div>
        </footer>

        {/* Interactive Raven Bot */}
        <RavenBot />
      </div>
    </Router>
  );
}
