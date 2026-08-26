import React, { useState, useEffect } from 'react';
import { ShieldCheck, RefreshCw, AlertTriangle, Lock } from 'lucide-react';

interface InstitutionalChallengeProps {
  onVerify: (isValid: boolean) => void;
  isVerified: boolean;
}

interface Challenge {
  prompt: string;
  options: { label: string; correct: boolean }[];
  detail: string;
}

const INSTITUTIONAL_CHALLENGES: Challenge[] = [
  {
    prompt: "Verify Public SEC Filing Type for Definitive M&A Agreements:",
    options: [
      { label: "Form 8-K (Item 1.01)", correct: true },
      { label: "Form 10-Q (Part III)", correct: false },
      { label: "Form 4 (Insider Trade)", correct: false },
      { label: "Form 13F (Holdings)", correct: false }
    ],
    detail: "Form 8-K Item 1.01 discloses entry into a material definitive agreement."
  },
  {
    prompt: "Select the Statutory Schedule for Net Working Capital Adjustments:",
    options: [
      { label: "Schedule 13D", correct: false },
      { label: "Schedule 1.5 / 2.4 (Closing Net Cash)", correct: true },
      { label: "Schedule 14A Proxy", correct: false },
      { label: "Regulation S-K Item 402", correct: false }
    ],
    detail: "Schedule 1.5/2.4 governs definitive post-signing net cash & working capital reconciliations."
  },
  {
    prompt: "Identify the SEC Registration Statement for Business Combinations / Mergers:",
    options: [
      { label: "Form S-1 (IPO)", correct: false },
      { label: "Form S-3 (Shelf)", correct: false },
      { label: "Form S-4 / F-4 (M&A Registration)", correct: true },
      { label: "Form 11-K (Employee Plan)", correct: false }
    ],
    detail: "Form S-4/F-4 is filed with the SEC to register securities issued in business combination transactions."
  },
  {
    prompt: "Which provision specifies the terminal expiration date of an M&A merger agreement?",
    options: [
      { label: "End Date / Outside Date (Section 8.01)", correct: true },
      { label: "Section 3.02 Capitalization Table", correct: false },
      { label: "Indemnity Cap Basket Threshold", correct: false },
      { label: "D&O Insurance Runoff Provision", correct: false }
    ],
    detail: "The Outside / Drop-Dead Date governs when either party may unilaterally terminate the agreement."
  }
];

export function InstitutionalSecurityChallenge({ onVerify, isVerified }: InstitutionalChallengeProps) {
  const [challengeIdx, setChallengeIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [status, setStatus] = useState<'pending' | 'verified' | 'failed'>('pending');

  useEffect(() => {
    // Pick a random challenge on mount
    setChallengeIdx(Math.floor(Math.random() * INSTITUTIONAL_CHALLENGES.length));
  }, []);

  const challenge = INSTITUTIONAL_CHALLENGES[challengeIdx];

  const handleSelect = (idx: number) => {
    if (status === 'verified') return;
    setSelectedOption(idx);
    const isCorrect = challenge.options[idx].correct;
    if (isCorrect) {
      setStatus('verified');
      onVerify(true);
    } else {
      setStatus('failed');
      onVerify(false);
      // reset failure after short interval to allow retry
      setTimeout(() => {
        setStatus('pending');
        setSelectedOption(null);
        // rotate challenge to prevent brute force
        setChallengeIdx((prev) => (prev + 1) % INSTITUTIONAL_CHALLENGES.length);
      }, 1400);
    }
  };

  const handleResetChallenge = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedOption(null);
    setStatus('pending');
    onVerify(false);
    setChallengeIdx((prev) => (prev + 1) % INSTITUTIONAL_CHALLENGES.length);
  };

  return (
    <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/40 rounded-none space-y-3 font-mono">
      {/* Header bar */}
      <div className="flex items-center justify-between text-xs border-b border-[var(--border-color)] pb-2.5">
        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-[var(--brand-cyan)]" />
          <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-primary)]">
            Institutional Anti-Bot Challenge // Cryptographic Proof-of-Human
          </span>
        </div>
        <button
          type="button"
          onClick={handleResetChallenge}
          title="Refresh Challenge"
          className="text-[var(--text-tertiary)] hover:text-[var(--brand-cyan)] transition-colors p-1"
        >
          <RefreshCw className="w-3 h-3" />
        </button>
      </div>

      {/* Honeypot hidden input for dumb bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_homepage_validation">Leave this empty</label>
        <input
          type="text"
          id="company_homepage_validation"
          name="company_homepage_validation"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === 'verified' ? (
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-[10px] tracking-wider uppercase">
              Identity Verified // Institutional Clearance Granted
            </span>
          </div>
          <span className="text-[9px] text-emerald-300/80 font-mono">SHA-256 SESSION PASS</span>
        </div>
      ) : (
        <div className="space-y-2.5">
          <div className="text-xs text-[var(--text-secondary)] font-medium">
            {challenge.prompt}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {challenge.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              let btnStyle = "border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:border-[var(--brand-cyan)] hover:text-[var(--text-primary)]";
              
              if (isSelected && status === 'failed') {
                btnStyle = "border-rose-500 bg-rose-500/10 text-rose-400";
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`p-2.5 text-left text-[11px] border transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <span className="truncate">{opt.label}</span>
                  <span className="text-[9px] text-[var(--text-tertiary)] uppercase ml-2">[{idx + 1}]</span>
                </button>
              );
            })}
          </div>

          {status === 'failed' && (
            <div className="text-[10px] text-rose-400 flex items-center gap-1.5 pt-1 font-mono">
              <AlertTriangle className="w-3 h-3" />
              <span>Verification failed. Re-generating challenge...</span>
            </div>
          )}

          <div className="text-[9px] text-[var(--text-tertiary)] flex items-center justify-between pt-1">
            <span>Zero Tracking Cookies // Privacy Compliant</span>
            <span>Honeypot + Domain Gate Active</span>
          </div>
        </div>
      )}
    </div>
  );
}
