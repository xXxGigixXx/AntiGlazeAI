import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Trash2, Cpu, User, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Message } from '../types';
import { cn } from '../lib/utils';
import { getGeminiResponse } from '../services/gemini';

export default function Chat() {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const history = messages.concat(userMessage).map(m => ({
      role: m.role,
      content: m.content
    }));

    const response = await getGeminiResponse(history);

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      content: response,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, botMessage]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-black">
      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-none"
      >
        <AnimatePresence initial={false}>
          {messages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              className="flex flex-col items-center justify-center h-full text-center"
            >
              <p className="max-w-sm text-xs font-bold uppercase tracking-widest leading-loose">
                [SYSTEM_IDLE]
                <br />
                AWAITING_INPUT_FROM_MEDIOCRE_USER_ENTITY
              </p>
            </motion.div>
          )}
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, x: m.role === 'user' ? 10 : -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={cn(
                "flex gap-4",
                m.role === 'user' ? "flex-row" : "flex-row-reverse"
              )}
            >
              <div className={cn(
                "w-8 h-8 flex-shrink-0 flex items-center justify-center text-[10px] font-bold border",
                m.role === 'user' ? "bg-zinc-800 border-zinc-700" : "bg-neon border-neon text-white"
              )}>
                {m.role === 'user' ? 'U' : 'AI'}
              </div>
              <div className={cn(
                "p-4 text-sm max-w-[85%]",
                m.role === 'user' 
                  ? "bg-zinc-900/40 border border-zinc-800 rounded-tr-xl rounded-b-xl" 
                  : "bg-red-950/10 border border-red-900/30 rounded-tl-xl rounded-b-xl"
              )}>
                <div className="markdown-body">
                  {m.role === 'model' && (
                    <span className="text-neon font-bold mr-2 uppercase tracking-tight">REPLY:</span>
                  )}
                  <ReactMarkdown>{m.content}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          ))}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-4 flex-row-reverse"
            >
              <div className="w-8 h-8 bg-neon flex-shrink-0 flex items-center justify-center text-[10px] text-white font-bold animate-pulse">
                AI
              </div>
              <div className="bg-red-950/10 border border-red-900/30 p-4 rounded-tl-xl rounded-b-xl">
                 <div className="flex gap-1">
                    <div className="w-1 h-1 bg-neon animate-pulse" />
                    <div className="w-1 h-1 bg-neon animate-pulse delay-75" />
                    <div className="w-1 h-1 bg-neon animate-pulse delay-150" />
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-line bg-black flex flex-col gap-2 shrink-0">
        <label className="text-[9px] font-bold uppercase text-zinc-600 tracking-widest px-1">
          [INPUT_BUFFER]
        </label>
        <div className="flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Stop making excuses and type..."
            className="flex-1 bg-zinc-900 border border-zinc-700 px-4 py-3 text-sm focus:outline-none focus:border-neon placeholder:text-zinc-700 placeholder:uppercase placeholder:font-bold placeholder:text-[10px] placeholder:tracking-tighter transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className={cn(
              "bg-neon text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neon/80 transition-colors border border-neon",
              (!input.trim() || loading) && "opacity-50 grayscale cursor-not-allowed"
            )}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}
