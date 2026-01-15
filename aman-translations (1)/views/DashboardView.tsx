
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { View } from '../types';
import { ArrowRight, Sparkles, BrainCircuit, Mic, Shield } from 'lucide-react';

const data = [
  { name: 'Mon', value: 400, model: 240 },
  { name: 'Tue', value: 300, model: 139 },
  { name: 'Wed', value: 200, model: 980 },
  { name: 'Thu', value: 278, model: 390 },
  { name: 'Fri', value: 189, model: 480 },
  { name: 'Sat', value: 239, model: 380 },
  { name: 'Sun', value: 349, model: 430 },
];

const DashboardView: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-950 to-slate-950">
      <header className="max-w-6xl mx-auto flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome back, Architect</h1>
          <p className="text-slate-400 text-lg">Your multimodal workspace is primed and ready.</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium">System Secure</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quick Action Cards */}
        {[
          { id: View.CHAT, title: 'Cognitive Chat', desc: 'Deep reasoning & logic', icon: BrainCircuit, color: 'bg-indigo-500' },
          { id: View.STUDIO, title: 'Creative Studio', desc: 'Gen-AI high fidelity imagery', icon: Sparkles, color: 'bg-purple-500' },
          { id: View.LIVE, title: 'Real-time Live', desc: 'Sub-second voice interaction', icon: Mic, color: 'bg-pink-500' },
        ].map((action) => (
          <button
            key={action.id}
            onClick={() => onNavigate(action.id)}
            className="group relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 text-left overflow-hidden"
          >
            <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center mb-4 shadow-lg shadow-black/40 group-hover:scale-110 transition-transform`}>
              <action.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-1">{action.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{action.desc}</p>
            <div className="flex items-center text-indigo-400 font-medium text-sm gap-1 group-hover:gap-2 transition-all">
              Initialize Module <ArrowRight className="w-4 h-4" />
            </div>
            {/* Ambient Background Glow */}
            <div className={`absolute -right-10 -bottom-10 w-32 h-32 blur-3xl opacity-5 rounded-full ${action.color}`}></div>
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1 */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Model Convergence</h3>
            <span className="text-xs px-2 py-1 rounded bg-indigo-500/20 text-indigo-400 font-mono">LIVE FEED</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                  itemStyle={{ color: '#e2e8f0' }}
                />
                <Area type="monotone" dataKey="value" stroke="#6366f1" fillOpacity={1} fill="url(#colorValue)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2 */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Inference Latency</h3>
            <span className="text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 font-mono">OPTIMIZED</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: '#1e293b', opacity: 0.5 }}
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="model" fill="#a855f7" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
