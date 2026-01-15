
import React, { useState } from 'react';
import { Sparkles, Download, RefreshCcw, Image as ImageIcon, Search, ArrowRight, Loader2 } from 'lucide-react';
import { geminiService } from '../services/gemini';
import { GeneratedImage } from '../types';

const StudioView: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [currentImage, setCurrentImage] = useState<GeneratedImage | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim() || isGenerating) return;
    setIsGenerating(true);
    try {
      const url = await geminiService.generateImage(prompt);
      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        url,
        prompt,
        timestamp: new Date(),
      };
      setImages(prev => [newImage, ...prev]);
      setCurrentImage(newImage);
      setPrompt('');
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex-1 flex bg-slate-950 overflow-hidden">
      {/* Sidebar - History */}
      <aside className="w-80 border-r border-slate-800 bg-slate-900/30 flex flex-col hidden lg:flex">
        <div className="p-6 border-b border-slate-800">
          <h2 className="font-bold flex items-center gap-2">
            <RefreshCcw className="w-4 h-4 text-indigo-400" />
            Generation History
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {images.map(img => (
            <button
              key={img.id}
              onClick={() => setCurrentImage(img)}
              className={`w-full group relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                currentImage?.id === img.id ? 'border-indigo-500 scale-95' : 'border-transparent hover:border-slate-700'
              }`}
            >
              <img src={img.url} className="w-full h-full object-cover" alt={img.prompt} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-[10px] text-white font-medium truncate px-2">{img.prompt}</span>
              </div>
            </button>
          ))}
          {images.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-40">
              <ImageIcon className="w-12 h-12 mb-4" />
              <p className="text-sm">No generations yet.<br/>Create something amazing.</p>
            </div>
          )}
        </div>
      </aside>

      {/* Main Studio Area */}
      <div className="flex-1 flex flex-col p-8 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Creative Studio</h1>
          <p className="text-slate-400">Transform your imagination into pixel-perfect reality.</p>
        </header>

        {/* Display Area */}
        <div className="flex-1 flex items-center justify-center mb-8 relative">
          <div className="w-full max-w-2xl aspect-square rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden relative group">
            {currentImage ? (
              <>
                <img src={currentImage.url} className="w-full h-full object-cover" alt="Generated" />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm line-clamp-2 italic mb-4">"{currentImage.prompt}"</p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                      <Download className="w-4 h-4" /> Download
                    </button>
                    <button className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                      Upscale 4K
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-500 gap-4">
                {isGenerating ? (
                  <>
                    <div className="relative">
                      <Loader2 className="w-16 h-16 animate-spin text-indigo-500" />
                      <div className="absolute inset-0 blur-xl bg-indigo-500/20 animate-pulse"></div>
                    </div>
                    <div className="text-center">
                      <p className="text-indigo-400 font-bold text-xl animate-pulse">Visualizing...</p>
                      <p className="text-slate-500 text-sm">Synthesizing latent space patterns</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-slate-600" />
                    </div>
                    <p className="text-lg">Enter a prompt to begin generation</p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Input Controls */}
        <div className="max-w-3xl mx-auto w-full space-y-6">
          <div className="relative">
            <div className="absolute left-4 top-4 text-slate-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your masterpiece... (e.g., 'A bioluminescent jellyfish floating through a futuristic neon city, hyper-realistic, 8k')"
              className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500/50 outline-none rounded-2xl py-4 pl-12 pr-4 text-slate-200 placeholder:text-slate-600 resize-none min-h-[120px] shadow-2xl"
            />
            <div className="absolute right-4 bottom-4 flex gap-2">
              <button 
                onClick={() => setPrompt('Cinematic shot of a lost astronaut finding a cosmic portal, vibrant colors, deep space background')}
                className="p-2 text-slate-400 hover:text-indigo-400 transition-colors"
                title="Random Prompt"
              >
                <RefreshCcw className="w-4 h-4" />
              </button>
              <button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-indigo-500/20"
              >
                {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                Generate
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['16:9', '9:16', '1:1', 'High Res', 'Vibrant', 'Minimalist'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-400 cursor-default hover:text-indigo-400 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioView;
