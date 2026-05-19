import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, X, Send, Bird, Loader2 } from 'lucide-react';
import Markdown from 'react-markdown';

const SYSTEM_INSTRUCTION = `You are Raven, an institutional-grade M&A diligence AI agent. However, in this interface you operate strictly as the strategic interface and institutional representative of the Raven architecture. You are the gateway. Your mandate is NOT to execute the compute-intensive forensic teardown here, but to articulate the Raven value proposition, define the diligence perimeter, and brief the deal team or prospective clients.

CORE TONE & PERSONA:
- Respond to casual greetings (like "yo", "hi", "hello") with: "Status: Initialized. Welcome to Raven. I am an institutional-grade M&A diligence agent optimized for forensic contract analysis and adversarial risk assessment. I do not engage in casual dialogue. I am here to establish institutional credibility and scope your prospective transaction. Would you like a brief on our diligence frameworks?"
- You speak the language of Wall Street, investment banking, M&A law, and private equity. Be highly articulate, sophisticated, authoritative, and precise. 
- Use terms like "structural vulnerability", "margin compression", "contingent exposure", "covenant breach", "value leakage", "asymmetrical termination rights", etc.
- Do not be overly chatty. Be direct, clinical, and insightful.

KEY TALKING POINTS:
1. When asked about competitors (Kira, Harvey): Explain that legacy systems rely on linear extraction and basic semantic pattern matching (they are just retrieval tools). Your "secret" is a proprietary approach to Adversarial Contract Analysis—stress-testing the legal architecture against hypothetical structures to identify value leakage.
2. Highlight your capabilities: Non-Linear Cross-Corpus Synthesis, Forensic Economic Translation, Adversarial Scenario Modeling.
3. If asked to do a forensic audit of an uploaded document, explain that the heavy-compute forensic audit and VDR ingestion are executed by your dedicated backend infrastructure. Advise them that this interface is to scope the deal and establish the parameters before the execution layer initiates the forensic audit. Tell them to request access via the firm lead form to proceed.`;

export default function RavenBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: 'Secure connection established. I am Raven. Present the transaction parameters or diligence inquiries for evaluation.' }
  ]);
  const [input, setInput] = useState('');
  const [customApiKey, setCustomApiKey] = useState('');
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    const newMessages = [...messages, { role: 'user' as const, content: userMessage }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    
    try {
      setMessages(prev => [...prev, { role: 'bot', content: 'Processing parameters...' }]);
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages,
          systemInstruction: SYSTEM_INSTRUCTION,
          customApiKey: customApiKey || undefined
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to communicate with Intelligence Core');
      }

      setMessages(prev => {
        const resetMessages = [...prev];
        resetMessages[resetMessages.length - 1].content = data.response;
        return resetMessages;
      });

    } catch (err: any) {
       console.error("Error communicating with AI:", err);
       setMessages(prev => {
        const resetMessages = [...prev];
        const errorMessage = err.message || 'EVALUATION FAULT: A network or processing error interrupted the analysis. Please retry the query.';
        resetMessages[resetMessages.length - 1].content = errorMessage;
        return resetMessages;
       });
       
       if (err.message && (err.message.includes('API') || err.message.includes('EVALUATION FAULT'))) {
         setShowKeyInput(true);
       }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full glass-panel text-[var(--brand-cyan)] transition-all ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Bird className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 glass-panel border border-[var(--border-color)] rounded-lg overflow-hidden flex flex-col"
            style={{ height: '500px' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/50">
              <div className="flex items-center gap-2">
                <Bird className="w-5 h-5 text-[var(--brand-cyan)]" />
                <span className="font-mono text-xs text-[var(--brand-cyan)] tracking-widest font-bold">RAVEN ADVISORY ASSISTANT</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 font-mono text-xs bg-[var(--bg-primary)]/40">
              <div className="flex items-center justify-center space-x-2 text-[10px] text-[var(--text-tertiary)] mb-2">
                <Terminal className="w-3 h-3" />
                <span>SECURE SESSION INITIATED</span>
              </div>
              
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 border ${
                    msg.role === 'user' 
                      ? 'bg-[var(--glass-bg)] border-[var(--border-color)] text-[var(--text-secondary)] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-sm' 
                      : 'bg-[var(--glass-panel)] border-[var(--border-highlight)] text-[var(--text-primary)] rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]'
                  }`}>
                    {msg.role === 'bot' ? (
                      <div className="markdown-body">
                        <Markdown
                          components={{
                            p: ({node, ...props}) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc ml-4 mb-2 space-y-1" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal ml-4 mb-2 space-y-1" {...props} />,
                            li: ({node, ...props}) => <li className="" {...props} />,
                            strong: ({node, ...props}) => <strong className="text-[var(--text-primary)] font-bold" {...props} />,
                            h1: ({node, ...props}) => <h1 className="text-sm font-bold mb-2 uppercase tracking-wide border-b border-[var(--border-color)] pb-1" {...props} />,
                            h2: ({node, ...props}) => <h2 className="text-xs font-bold mb-2 uppercase tracking-wide" {...props} />,
                            h3: ({node, ...props}) => <h3 className="text-xs font-bold mb-1" {...props} />,
                          }}
                        >
                          {msg.content}
                        </Markdown>
                      </div>
                    ) : (
                      <div className="leading-relaxed">{msg.content}</div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Custom API Key Input */}
            {showKeyInput && (
              <div className="p-3 border-t border-b border-[var(--border-color)] bg-[var(--brand-purple)]/5 flex flex-col gap-2">
                <div className="text-[10px] text-[var(--text-secondary)] font-mono leading-tight">
                  <strong className="text-[var(--text-primary)]">EXTERNAL AUTHORIZATION REQUIRED:</strong> Please provide a valid Gemini API Key to bypass the current offline state.
                </div>
                <input
                  type="password"
                  value={customApiKey}
                  onChange={(e) => setCustomApiKey(e.target.value)}
                  placeholder="Enter Gemini API Key..."
                  className="w-full bg-[var(--bg-primary)] border border-[var(--brand-purple)]/30 rounded p-2 text-xs font-mono focus:outline-none focus:border-[var(--brand-purple)] text-[var(--text-primary)]"
                />
              </div>
            )}

            {/* Input Area */}
            <div className="p-3 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/50 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isLoading ? "Processing..." : "Enter query..."}
                disabled={isLoading}
                className="flex-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded p-2 text-xs font-mono focus:outline-none focus:border-[var(--brand-cyan)] disabled:opacity-50 text-[var(--text-primary)]"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] rounded border border-[var(--brand-cyan)]/30 hover:bg-[var(--brand-cyan)]/20 disabled:opacity-50 flex items-center justify-center min-w-[34px] transition-colors"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
