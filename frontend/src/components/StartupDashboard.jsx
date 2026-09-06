import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Rocket,
  ShieldCheck,
  TrendingUp,
  Award,
  Clock,
  ArrowRight,
  Sparkles,
  Layers,
  DollarSign,
  AlertCircle,
  FileCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const StartupDashboard = () => {
  const {
    startupProfile,
    challenges,
    applications,
    pilot,
    procurement,
    setActiveTab,
    setSelectedChallengeId,
    setSelectedAppId
  } = useApp();

  const activeApp = applications.find(a => a.id === "APP-901") || applications[0];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Welcome Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/80 border border-slate-800 p-6 md:p-8 shadow-2xl">
        <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 animate-spin" /> DPIIT Startup Runway Verified
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Welcome back, <span className="gradient-text">{startupProfile.companyName}</span>
            </h1>
            <p className="text-slate-400 text-sm max-w-2xl">
              {startupProfile.tagline}. You have <span className="text-cyan-400 font-semibold">1 active sandbox pilot</span> in progress with the Ministry of Jal Shakti.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('discovery')}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2"
            >
              Explore Challenges <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('pilot')}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
            >
              <Rocket className="w-4 h-4 text-cyan-400" /> Active Pilot Hub
            </button>
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="glass-panel rounded-xl p-5 border border-slate-800 glass-card-hover relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-slate-400">Active Applications</span>
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-extrabold text-white">{applications.length}</span>
            <span className="text-xs text-slate-400 ml-2">in evaluation</span>
          </div>
          <div className="mt-3 flex items-center text-xs text-cyan-400 font-medium">
            <span>APP-901 in Sandbox Pilot</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="glass-panel rounded-xl p-5 border border-slate-800 glass-card-hover relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-slate-400">Sandbox Pilot Status</span>
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <Rocket className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-extrabold text-emerald-400">Optimal</span>
            <span className="text-xs text-slate-400 ml-2">98.4% KPI</span>
          </div>
          <div className="mt-3 flex items-center text-xs text-emerald-400 font-medium">
            <span>2 of 4 Milestones Disbursed</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="glass-panel rounded-xl p-5 border border-slate-800 glass-card-hover relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-slate-400">Grant Funds Disbursed</span>
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-extrabold text-white">₹20 Lakhs</span>
            <span className="text-xs text-slate-400 ml-2">of ₹35L</span>
          </div>
          <div className="mt-3 flex items-center text-xs text-indigo-400 font-medium">
            <span>Escrow Payment Released</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="glass-panel rounded-xl p-5 border border-slate-800 glass-card-hover relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-slate-400">GeM Scale Opportunity</span>
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-extrabold text-amber-400">₹2.5 Cr</span>
            <span className="text-xs text-slate-400 ml-2">L1 Exempt</span>
          </div>
          <div className="mt-3 flex items-center text-xs text-amber-400 font-medium">
            <span>Rule 194 Compliance Ready</span>
          </div>
        </div>
      </div>

      {/* Actionable Urgent Banner */}
      <div className="rounded-xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Milestone #3 Evidence Submitted — Pending Officer Approval</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              30-Day Stress Testing report submitted for Varanasi WTP Pilot. ₹10 Lakhs grant release pending Government Officer sign-off.
            </p>
          </div>
        </div>
        <button
          onClick={() => setActiveTab('pilot')}
          className="px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 transition-all shadow"
        >
          Track Milestone #3
        </button>
      </div>

      {/* Main Grid: Active Application Journey + Matched Challenges */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Active Application Tracker */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-xl p-6 border border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-cyan-400" /> Active Application Lifecycle
                </h3>
                <p className="text-xs text-slate-400">Tracking APP-901 • Water Quality Monitoring</p>
              </div>
              <button
                onClick={() => {
                  setSelectedAppId(activeApp.id);
                  setActiveTab('status-tracker');
                }}
                className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-medium"
              >
                Full Tracker <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stepper Preview */}
            <div className="relative pt-2 pb-4">
              <div className="absolute top-6 left-0 right-0 h-1 bg-slate-800 -z-0"></div>
              <div className="absolute top-6 left-0 w-3/4 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 -z-0"></div>
              
              <div className="grid grid-cols-4 relative z-10 text-center gap-2">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center justify-center text-xs shadow-lg shadow-cyan-500/25">
                    ✓
                  </div>
                  <span className="text-[11px] font-semibold text-cyan-400 mt-2">Proposal Submitted</span>
                  <span className="text-[10px] text-slate-500">Aug 10</span>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center justify-center text-xs shadow-lg shadow-cyan-500/25">
                    ✓
                  </div>
                  <span className="text-[11px] font-semibold text-cyan-400 mt-2">DPIIT Verified</span>
                  <span className="text-[10px] text-slate-500">Aug 12</span>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center justify-center text-xs shadow-lg shadow-cyan-500/25">
                    94
                  </div>
                  <span className="text-[11px] font-semibold text-cyan-400 mt-2">Expert Score</span>
                  <span className="text-[10px] text-slate-500">Aug 18</span>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-xs shadow-lg shadow-emerald-500/25 ring-4 ring-emerald-500/20 animate-pulse">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 mt-2">Sandbox Pilot</span>
                  <span className="text-[10px] text-emerald-500 font-mono">ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Quick Summary Box */}
            <div className="mt-6 bg-slate-900/80 rounded-lg p-4 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-300">Target Sandbox Site:</span>
                  <span className="text-xs text-cyan-400 font-mono">Varanasi WTP Zone A</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-semibold text-slate-300">Sanctioned Grant:</span>
                  <span className="text-xs text-emerald-400 font-bold">₹35,00,000</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('evaluation')}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
                >
                  View Scorecard (94/100)
                </button>
                <button
                  onClick={() => setActiveTab('pilot')}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition shadow"
                >
                  Go to Pilot Dashboard
                </button>
              </div>
            </div>
          </div>

          {/* DPIIT Recognition & Verification Status Card */}
          <div className="glass-panel rounded-xl p-6 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white">DPIIT Recognition Active</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    VERIFIED ✓
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Certificate No: <span className="font-mono text-slate-200">{startupProfile.dpiitId}</span> • GeM Seller ID: <span className="font-mono text-slate-200">{startupProfile.gemSellerId}</span>
                </p>
                <p className="text-[11px] text-slate-500">
                  Eligible for GFR Rule 194 exemptions (No prior experience & EMD deposit waivers).
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveTab('profile')}
              className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 shrink-0 transition"
            >
              View Verified Profile
            </button>
          </div>
        </div>

        {/* Right Col: High-Match Recommended Challenges */}
        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-6 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" /> Matched Challenges
              </h3>
              <button
                onClick={() => setActiveTab('discovery')}
                className="text-xs text-cyan-400 hover:underline font-medium"
              >
                View All
              </button>
            </div>

            <div className="space-y-4">
              {challenges.slice(0, 3).map((ch) => (
                <div
                  key={ch.id}
                  onClick={() => {
                    setSelectedChallengeId(ch.id);
                    setActiveTab('challenge-detail');
                  }}
                  className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{ch.sector}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {ch.matchScore}% Match
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {ch.title}
                  </h4>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
                    <span>Grant: <strong className="text-emerald-400">₹{(ch.budgetGrant / 100000).toFixed(1)}L</strong></span>
                    <span>Deadline: <strong className="text-slate-300">{ch.deadline}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
