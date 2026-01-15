
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Trash2 } from 'lucide-react';
import { Message } from '../types';
import { geminiService } from '../services/gemini';

const ChatView: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      
      const response = await geminiService.chat(input, history);
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: response || 'No response received.',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-950">
      {/* Header */}
      <div className="px-8 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
            <Bot className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h2 className="font-bold">Lumina Cognitive</h2>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">Thinking Protocol V3</span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setMessages([])}
          className="p-2 text-slate-400 hover:text-red-400 transition-colors"
          title="Clear Conversation"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-6 max-w-lg mx-auto">
            <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center border border-slate-800 shadow-2xl">
              <Bot className="w-10 h-10 text-indigo-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Initialize Reasoning Session</h3>
              <p className="text-slate-400">Ask Lumina to solve complex problems, write architecture code, or explain advanced scientific concepts. Powered by Gemini 3 with deep chain-of-thought processing.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              {['Quantum Physics Basics', 'Rust Architecture Design', 'Ethics of AGI', 'Complex Math Proofs'].map(q => (
                <button 
                  key={q} 
                  onClick={() => setInput(q)}
                  className="px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-sm text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {messages.map((m) => (
          <div key={m.id} className={`flex gap-4 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {m.role === 'model' && (
              <div className="w-10 h-10 shrink-0 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <Bot className="w-5 h-5 text-indigo-400" />
              </div>
            )}
            <div className={`max-w-[80%] rounded-2xl px-5 py-4 ${
              m.role === 'user' 
                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/20' 
                : 'bg-slate-900 border border-slate-800 text-slate-200'
            }`}>
              <div className="prose prose-invert max-w-none whitespace-pre-wrap leading-relaxed">
                {m.text}
              </div>
              <div className={`text-[10px] mt-2 opacity-40 font-mono ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                {m.timestamp.toLocaleTimeString()}
              </div>
            </div>
            {m.role === 'user' && (
              <div className="w-10 h-10 shrink-0 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                <User className="w-5 h-5 text-indigo-400" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-4">
            <div className="w-10 h-10 shrink-0 rounded-full bg-slate-800 flex items-center justify-center animate-pulse">
              <Bot className="w-5 h-5 text-slate-500" />
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 flex items-center gap-3">
              <Loader2 className="w-5 h-5 animate-spin text-indigo-500" />
              <span className="text-slate-400 text-sm italic">Lumina is processing with thinking budget...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-8 pt-0">
        <div className="max-w-4xl mx-auto relative group">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Prompt reasoning engine..."
            className="w-full bg-slate-900/80 border border-slate-800 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 outline-none rounded-2xl py-4 pl-6 pr-16 text-slate-200 placeholder:text-slate-600 resize-none transition-all shadow-2xl min-h-[60px]"
            rows={1}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-3 bottom-3 p-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-xl transition-all shadow-lg"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-center text-[10px] text-slate-600 mt-4 uppercase tracking-[0.2em] font-mono">
          Powered by Gemini 3 Pro with Chain of Thought Architecture
        </p>
      </div>
    </div>
  );
};

export default ChatView;
