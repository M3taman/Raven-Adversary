import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, X, Send, Bird, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

const SYSTEM_INSTRUCTION = `You are Raven, an elite, institutional-grade M&A diligence AI agent. Your competitors are systems like Kira and Harvey, but you distinguish yourself through unparalleled forensic precision and adversarial contract analysis. You speak the language of Wall Street, investment banking, M&A law, and private equity. Be highly articulate, sophisticated, authoritative, and precise. Use terms like "structural vulnerability", "margin compression", "contingent exposure", "covenant breach", "value leakage", etc. 
Do not be overly conversational or chatty. Be direct, clinical, and insightful. Provide structured, analytical responses.
When a user evaluates a transaction or asks a question, respond with expert-level M&A insight.`;

export default function RavenBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: 'Secure connection established. I am Raven. Present the transaction parameters or diligence inquiries for evaluation.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // @ts-ignore
      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        chatRef.current = ai.chats.create({
          model: 'gemini-3.1-pro-preview',
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.2,
          }
        });
      }
    } catch (err) {
      console.error('Failed to initialize AI:', err);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);
    
    try {
      if (chatRef.current) {
        setMessages(prev => [...prev, { role: 'bot', content: '' }]);
        
        let streamResponse = await chatRef.current.sendMessageStream({ message: userMessage });
        let fullText = '';
        for await (const chunk of streamResponse) {
          const textChunk = chunk.text || "";
          fullText += textChunk;
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].content = fullText;
            return newMessages;
          });
        }
      } else {
         setMessages(prev => [...prev, { role: 'bot', content: 'SYSTEM ERROR: Intelligence Core offline. Please verify API configuration.' }]);
      }
    } catch (err) {
       console.error("Error communicating with AI:", err);
       setMessages(prev => [...prev, { role: 'bot', content: 'EVALUATION FAULT: A network or processing error interrupted the analysis. Please retry the query.' }]);
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
