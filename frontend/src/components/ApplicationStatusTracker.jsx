import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Layers,
  CheckCircle2,
  Clock,
  Rocket,
  Award,
  FileText,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Building2
} from 'lucide-react';

export const ApplicationStatusTracker = () => {
  const {
    applications,
    selectedApplication,
    setSelectedAppId,
    setActiveTab
  } = useApp();

  const app = selectedApplication || applications[0];

  const stages = [
    { name: "Proposal Submitted", desc: "Digital submission verified on ProcureX" },
    { name: "Eligibility & Document Screening", desc: "Automated DPIIT & GFR 194 audit" },
    { name: "Expert Panel Scoring", desc: "Jury rubric evaluation" },
    { name: "Sandbox Pilot Sanctioned", desc: "Grant & site allocation" },
    { name: "GeM Scale Procurement", desc: "Direct contract readiness" }
  ];

  return (
    <div className="space-y-8 animate-fadeIn max-w-6xl mx-auto">
      {/* Header & Application Switcher */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <Layers className="w-6 h-6 text-cyan-400" /> Application Status Tracker
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Real-time compliance tracking & lifecycle status for your submitted proposals.
          </p>
        </div>

        {/* Application Selector Pills */}
        <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
          {applications.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedAppId(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                item.id === app.id
                  ? 'bg-cyan-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {item.id}
            </button>
          ))}
        </div>
      </div>

      {/* Main Tracker Card */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-800 space-y-8">
        {/* Header Summary */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {app.id}
              </span>
              <span className="text-xs font-mono text-slate-400">Submitted: {app.submittedAt}</span>
            </div>
            <h2 className="text-xl font-extrabold text-white">{app.challengeTitle}</h2>
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" /> {app.department}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {app.status === 'PILOT_ACTIVE' && (
              <button
                onClick={() => setActiveTab('pilot')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition flex items-center gap-1.5"
              >
                <Rocket className="w-4 h-4" /> Go to Live Sandbox Pilot
              </button>
            )}
            <button
              onClick={() => setActiveTab('evaluation')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
            >
              View Expert Scorecard ({app.proposalScore.total}/100)
            </button>
          </div>
        </div>

        {/* Stepper Visualization */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-400">
            Lifecycle Progress Journey
          </h3>

          <div className="relative pl-6 md:pl-8 space-y-8 before:absolute before:left-3 md:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
            {stages.map((stg, idx) => {
              const isPassed = idx < app.currentStageIndex;
              const isCurrent = idx === app.currentStageIndex;

              return (
                <div key={idx} className="relative flex items-start gap-4 group">
                  {/* Step Circle */}
                  <div
                    className={`absolute -left-6 md:-left-8 top-0.5 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      isPassed
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                        : isCurrent
                        ? 'bg-emerald-500 text-slate-950 ring-4 ring-emerald-500/20 animate-pulse'
                        : 'bg-slate-900 text-slate-600 border border-slate-800'
                    }`}
                  >
                    {isPassed ? '✓' : idx + 1}
                  </div>

                  {/* Details Box */}
                  <div
                    className={`p-4 rounded-xl border flex-1 transition ${
                      isCurrent
                        ? 'bg-slate-900 border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                        : isPassed
                        ? 'bg-slate-900/60 border-slate-800'
                        : 'bg-slate-950/40 border-slate-900 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className={`text-sm font-bold ${isCurrent ? 'text-emerald-400' : isPassed ? 'text-white' : 'text-slate-400'}`}>
                        {stg.name}
                      </h4>
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                        isCurrent
                          ? 'bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30'
                          : isPassed
                          ? 'bg-cyan-500/10 text-cyan-400 font-semibold'
                          : 'bg-slate-950 text-slate-600'
                      }`}>
                        {isCurrent ? 'IN PROGRESS' : isPassed ? 'COMPLETED ✓' : 'UPCOMING'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{stg.desc}</p>

                    {/* Timeline Notes if passed */}
                    {app.timeline && app.timeline[idx] && (
                      <div className="mt-2 pt-2 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between">
                        <span>Note: {app.timeline[idx].note}</span>
                        <span className="font-mono text-slate-400">{app.timeline[idx].date}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
