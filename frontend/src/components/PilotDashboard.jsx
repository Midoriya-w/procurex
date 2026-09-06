import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Rocket,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Calendar,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  Activity,
  ArrowUpRight,
  Layers,
  ChevronRight
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

export const PilotDashboard = () => {
  const { pilot, setActiveTab } = useApp();

  const chartData = [
    { day: 'Day 1', accuracy: 92.1, latency: 4.2 },
    { day: 'Day 5', accuracy: 94.5, latency: 3.1 },
    { day: 'Day 10', accuracy: 96.0, latency: 2.5 },
    { day: 'Day 15', accuracy: 97.2, latency: 2.1 },
    { day: 'Day 20', accuracy: 98.0, latency: 1.9 },
    { day: 'Day 25', accuracy: 98.4, latency: 1.8 },
  ];

  return (
    <div className="space-y-8 animate-fadeIn max-w-6xl mx-auto">
      {/* Header Banner */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-800 relative overflow-hidden space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {pilot.id}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 animate-pulse" /> Health: {pilot.healthStatus}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {pilot.challengeTitle}
            </h1>
            <p className="text-xs text-slate-400 flex flex-wrap items-center gap-4 font-mono">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-amber-400" /> {pilot.location}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-cyan-400" /> {pilot.startDate} to {pilot.endDate}</span>
            </p>
          </div>

          <button
            onClick={() => setActiveTab('milestones')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition flex items-center gap-1.5 shrink-0"
          >
            <Layers className="w-4 h-4" /> Manage Pilot Milestones & Evidence <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grant Disbursal Progress */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Total Allocated Grant</span>
            <span className="text-xl font-extrabold text-white">₹{(pilot.totalGrant / 100000).toFixed(1)} Lakhs</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Escrow Funds Disbursed</span>
            <span className="text-xl font-extrabold text-emerald-400">₹{(pilot.disbursedGrant / 100000).toFixed(1)} Lakhs</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Remaining Escrow Balance</span>
            <span className="text-xl font-extrabold text-cyan-400">₹{((pilot.totalGrant - pilot.disbursedGrant) / 100000).toFixed(1)} Lakhs</span>
          </div>
        </div>
      </div>

      {/* KPI Performance Telemetry Cards */}
      <div>
        <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-cyan-400" /> Live Pilot KPI Telemetry & Targets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pilot.kpis.map((kpi, idx) => (
            <div key={idx} className="glass-panel rounded-xl p-5 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">{kpi.name}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                  {kpi.status}
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black text-white">{kpi.current} <span className="text-xs font-normal text-slate-400">{kpi.unit}</span></span>
                <span className="text-xs text-slate-400 font-mono">Target: {kpi.target}</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-400 rounded-full"
                  style={{ width: `${Math.min(100, (kpi.current / kpi.target) * 100)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Telemetry Chart View */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" /> Sensor Accuracy Telemetry Trend (30-Day Field Test)
            </h3>
            <p className="text-xs text-slate-400">Continuous optical spectroscopy precision data from Varanasi Sandbox</p>
          </div>
          <span className="text-xs font-mono text-cyan-400">Target Line: 95.0%</span>
        </div>

        <div className="h-64 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="accuracyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#64748b" fontSize={11} />
              <YAxis domain={[90, 100]} stroke="#64748b" fontSize={11} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '0.75rem', fontSize: '12px' }}
                labelStyle={{ color: '#94a3b8' }}
              />
              <Area type="monotone" dataKey="accuracy" stroke="#38bdf8" strokeWidth={3} fillOpacity={1} fill="url(#accuracyGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
