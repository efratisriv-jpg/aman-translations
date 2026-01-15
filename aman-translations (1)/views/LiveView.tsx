
import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, PhoneOff, Settings, Volume2, Waves, Radio, Activity } from 'lucide-react';
import { geminiService, audioUtils } from '../services/gemini';

const LiveView: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const sessionRef = useRef<any>(null);

  const startSession = async () => {
    try {
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      audioContextRef.current = inputCtx;
      outputAudioContextRef.current = outputCtx;

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const sessionPromise = geminiService.connectLive({
        onopen: () => {
          const source = inputCtx.createMediaStreamSource(stream);
          const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
          
          scriptProcessor.onaudioprocess = (e) => {
            if (isMuted) return;
            const inputData = e.inputBuffer.getChannelData(0);
            
            // Visualizer logic
            let sum = 0;
            for(let i=0; i<inputData.length; i++) sum += inputData[i] * inputData[i];
            setVolume(Math.sqrt(sum / inputData.length) * 100);

            const int16 = new Int16Array(inputData.length);
            for (let i = 0; i < inputData.length; i++) int16[i] = inputData[i] * 32768;
            
            const pcmBlob = {
              data: audioUtils.encode(new Uint8Array(int16.buffer)),
              mimeType: 'audio/pcm;rate=16000',
            };

            sessionPromise.then(session => {
              session.sendRealtimeInput({ media: pcmBlob });
            });
          };

          source.connect(scriptProcessor);
          scriptProcessor.connect(inputCtx.destination);
          setIsActive(true);
        },
        onmessage: async (message: any) => {
          const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
          if (base64Audio) {
            const outCtx = outputAudioContextRef.current!;
            nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outCtx.currentTime);
            
            const audioBuffer = await audioUtils.decodeAudioData(
              audioUtils.decode(base64Audio),
              outCtx,
              24000,
              1
            );

            const source = outCtx.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(outCtx.destination);
            source.addEventListener('ended', () => sourcesRef.current.delete(source));
            source.start(nextStartTimeRef.current);
            nextStartTimeRef.current += audioBuffer.duration;
            sourcesRef.current.add(source);
          }

          if (message.serverContent?.interrupted) {
            sourcesRef.current.forEach(s => s.stop());
            sourcesRef.current.clear();
            nextStartTimeRef.current = 0;
          }
        },
        onerror: (e: any) => console.error("Live Error:", e),
        onclose: () => {
          setIsActive(false);
          stream.getTracks().forEach(t => t.stop());
        }
      });

      sessionRef.current = await sessionPromise;
    } catch (err) {
      console.error("Failed to start live session:", err);
    }
  };

  const endSession = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    if (audioContextRef.current) audioContextRef.current.close();
    if (outputAudioContextRef.current) outputAudioContextRef.current.close();
    setIsActive(false);
    setVolume(0);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] transition-all duration-1000 ${isActive ? 'bg-indigo-500/10 scale-100 opacity-100' : 'scale-50 opacity-0'}`}></div>
      </div>

      <div className="max-w-xl w-full text-center z-10 space-y-12">
        <header>
          <div className="flex justify-center mb-6">
            <div className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-full flex items-center gap-2">
              <Radio className={`w-4 h-4 ${isActive ? 'text-red-500 animate-pulse' : 'text-slate-500'}`} />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                {isActive ? 'Session Active' : 'Station Standby'}
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Lumina Live</h1>
          <p className="text-slate-400">Experience zero-latency voice interaction with multimodal context awareness.</p>
        </header>

        {/* Visualizer Circle */}
        <div className="relative flex justify-center">
          <div className="relative w-64 h-64 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden shadow-2xl">
            {/* Animated Rings */}
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="absolute inset-0 rounded-full border border-indigo-500/20"
                style={{ 
                  transform: `scale(${1 + (volume / 100) * (i + 1) * 0.2})`,
                  opacity: isActive ? 1 - (i * 0.3) : 0,
                  transition: 'transform 100ms ease-out'
                }}
              />
            ))}
            
            <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-indigo-600 shadow-lg shadow-indigo-500/50' : 'bg-slate-800'}`}>
              {isActive ? <Waves className="w-16 h-16 text-white" /> : <Mic className="w-16 h-16 text-slate-500" />}
            </div>

            {/* Signal Strength */}
            {isActive && (
              <div className="absolute bottom-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1 bg-white transition-all" 
                    style={{ height: `${Math.random() * volume + 5}px` }} 
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Action Overlay */}
          {!isActive && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 backdrop-blur-sm rounded-full">
              <button 
                onClick={startSession}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-xl shadow-indigo-500/20 transition-all active:scale-95"
              >
                Establish Connection
              </button>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className={`flex items-center justify-center gap-6 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className={`p-4 rounded-2xl border transition-all ${isMuted ? 'bg-red-500/20 border-red-500/50 text-red-400' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}`}
          >
            {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>
          
          <button 
            onClick={endSession}
            className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-xl shadow-red-500/20 transition-all active:scale-90"
          >
            <PhoneOff className="w-8 h-8" />
          </button>

          <button className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all">
            <Volume2 className="w-6 h-6" />
          </button>
        </div>

        {/* Latency Info */}
        <div className="grid grid-cols-3 gap-8 pt-8">
          <div className="text-center">
            <p className="text-[10px] text-slate-600 uppercase font-mono mb-1">Status</p>
            <div className="flex items-center justify-center gap-2">
               <Activity className={`w-3 h-3 ${isActive ? 'text-emerald-500' : 'text-slate-600'}`} />
               <p className="text-sm font-bold text-slate-300">{isActive ? 'Optimal' : 'Offline'}</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-slate-600 uppercase font-mono mb-1">Latency</p>
            <p className="text-sm font-bold text-slate-300">{isActive ? '120ms' : '0ms'}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-slate-600 uppercase font-mono mb-1">Uptime</p>
            <p className="text-sm font-bold text-slate-300">99.9%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveView;
