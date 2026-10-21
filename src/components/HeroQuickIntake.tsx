import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, CheckCircle2, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export function HeroQuickIntake() {
  const [ticker, setTicker] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [refId, setRefId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticker.trim() || !email.trim()) return;

    setStatus('submitting');
    const generatedRef = `FAST-${ticker.trim().toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      await addDoc(collection(db, 'leads'), {
        cikOrTicker: ticker.trim().toUpperCase(),
        email: email.trim().toLowerCase(),
        inquiryType: 'rapid_clause_card',
        referenceId: generatedRef,
        source: 'hero_quick_intake',
        status: 'new',
        createdAt: serverTimestamp()
      });

      setRefId(generatedRef);
      setStatus('success');
    } catch (err) {
      console.error('Quick Intake Error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-4">
      {status === 'success' ? (
        <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-5 text-left flex items-start gap-4 backdrop-blur-md animate-fade-in shadow-lg shadow-emerald-950/20">
          <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-sm font-bold text-emerald-300 font-heading">
              Audit Queued for Ticker/CIK: <span className="font-mono text-white underline">{ticker.toUpperCase()}</span>
            </div>
            <p className="text-xs text-slate-300 font-sans">
              Reference Token: <span className="font-mono text-emerald-400 font-bold">{refId}</span>. The Raven Engine is cross-referencing SEC EDGAR filings for this transaction. A preliminary 1-Page Clause Card will be transmitted to <span className="font-mono text-white">{email}</span> within 60 minutes.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button 
                onClick={() => { setStatus('idle'); setTicker(''); }}
                className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 underline"
              >
                ← Test Another Ticker
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--brand-cyan)]/30 to-[var(--brand-purple)]/30 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-[var(--card-bg)]/90 backdrop-blur-xl border border-[var(--border-color)] hover:border-[var(--brand-cyan)]/50 transition-all rounded-2xl p-2.5 sm:p-3 shadow-2xl flex flex-col sm:flex-row items-center gap-2.5">
            
            {/* Ticker / CIK Input */}
            <div className="relative flex-1 w-full">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-[var(--brand-cyan)]" />
              </div>
              <input
                type="text"
                required
                value={ticker}
                onChange={(e) => setTicker(e.target.value.toUpperCase())}
                placeholder="Enter Target Ticker or CIK (e.g. BWIN, OPCH, ITGR)"
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-transparent border-0 text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:ring-0 focus:outline-none font-mono uppercase tracking-wider font-semibold"
              />
            </div>

            {/* Institutional Email Input */}
            <div className="relative flex-1 w-full border-t sm:border-t-0 sm:border-l border-[var(--border-color)] pt-2 sm:pt-0 sm:pl-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Institutional Work Email"
                className="w-full px-3 py-2.5 text-xs sm:text-sm bg-transparent border-0 text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:ring-0 focus:outline-none font-sans"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)] text-white text-xs sm:text-sm font-semibold tracking-wide hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-[var(--brand-cyan)]/20 disabled:opacity-50 cursor-pointer"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Scanning EDGAR...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Request 1-Page Clause Card</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Subtext guarantees */}
          <div className="mt-2.5 px-2 flex flex-wrap items-center justify-between text-[10px] font-mono text-[var(--text-tertiary)] tracking-wider">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% PUBLIC FILINGS // ZERO MNPI
            </span>
            <span>60-MINUTE TURNAROUND FROM PREM14A / S-4</span>
            <span className="hidden sm:inline">ZERO CONFLICTS // NO ENGAGEMENT OVERHANG</span>
          </div>
        </form>
      )}

      {status === 'error' && (
        <div className="mt-2 p-2 bg-rose-950/40 border border-rose-500/40 rounded-lg text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Submission error. Please ensure a valid ticker/CIK and work email are provided.</span>
        </div>
      )}
    </div>
  );
}
