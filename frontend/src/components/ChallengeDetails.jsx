import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  MessageSquare,
  Send,
  Rocket,
  AlertTriangle
} from 'lucide-react';

export const ChallengeDetails = () => {
  const { selectedChallenge, setActiveTab, setIsAppModalOpen } = useApp();
  const [questionText, setQuestionText] = useState('');
  const [qaList, setQaList] = useState([
    {
      q: "Can startups apply with prototype sensors in TRL 6 stage?",
      a: "Yes, TRL 5 and above are eligible. Sandbox testing will validate field accuracy.",
      by: "Joint Secretary, Ministry of Jal Shakti",
      date: "2026-08-15"
    },
    {
      q: "Is there any EMD deposit required for application?",
      a: "No, EMD is waived for DPIIT-recognized startups under GFR Rule 194.",
      by: "ProcureX Nodal Officer",
      date: "2026-08-18"
    }
  ]);

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!questionText.trim()) return;
    setQaList(prev => [
      ...prev,
      {
        q: questionText,
        a: "Awaiting officer clarification. Response will be posted within 24 hours.",
        by: "Department Nodal Officer",
        date: new Date().toISOString().split('T')[0]
      }
    ]);
    setQuestionText('');
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => setActiveTab('discovery')}
        className="text-xs font-semibold text-slate-400 hover:text-cyan-400 flex items-center gap-1.5 transition"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Challenge Discovery
      </button>

      {/* Main Challenge Banner */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-800 space-y-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {selectedChallenge.id}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-800 text-slate-300">
                {selectedChallenge.sector}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> {selectedChallenge.matchScore}% Capability Match
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {selectedChallenge.title}
            </h1>
            <p className="text-sm font-medium text-slate-400 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-cyan-400" /> {selectedChallenge.department}
            </p>
          </div>

          <button
            onClick={() => setIsAppModalOpen(true)}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <Rocket className="w-4 h-4" /> Apply for Challenge
          </button>
        </div>

        {/* Grant & Scale Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Sandbox Pilot Grant</span>
            <span className="text-xl font-extrabold text-emerald-400">₹{(selectedChallenge.budgetGrant / 100000).toFixed(1)} Lakhs</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Scale Procurement</span>
            <span className="text-xl font-extrabold text-amber-400">₹{(selectedChallenge.procurementScale / 10000000).toFixed(2)} Cr</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Sandbox Duration</span>
            <span className="text-base font-bold text-slate-200">{selectedChallenge.sandboxDuration}</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Submission Deadline</span>
            <span className="text-base font-bold text-slate-200">{selectedChallenge.deadline}</span>
          </div>
        </div>
      </div>

      {/* 2-Column Content: Details vs Eligibility */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Problem Statement */}
          <div className="glass-panel rounded-xl p-6 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" /> Operational Problem Statement
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedChallenge.problemDescription}
            </p>
          </div>

          {/* Expected Outcomes */}
          <div className="glass-panel rounded-xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Expected Pilot Sandbox Outcomes & KPIs
            </h3>
            <div className="space-y-2.5">
              {selectedChallenge.expectedOutcomes.map((outcome, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-xs text-slate-300 font-medium">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Q&A Portal */}
          <div className="glass-panel rounded-xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" /> Department Clarification Q&A
            </h3>
            <div className="space-y-3">
              {qaList.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <p className="text-xs font-bold text-white">Q: {item.q}</p>
                  <p className="text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                    <strong className="text-cyan-400">{item.by}:</strong> {item.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Ask Question Form */}
            <form onSubmit={handleAddQuestion} className="flex gap-2 pt-2">
              <input
                type="text"
                placeholder="Ask a technical question to the department officer..."
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition flex items-center gap-1 shrink-0"
              >
                <Send className="w-3.5 h-3.5" /> Submit Question
              </button>
            </form>
          </div>
        </div>

        {/* Right Col: Eligibility & Location */}
        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" /> Eligibility Criteria
            </h3>
            <div className="space-y-2">
              {selectedChallenge.eligibility.map((crit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{crit}</span>
                </div>
              ))}
            </div>
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-400 leading-relaxed font-medium">
              ✓ Rule 194 Relaxations Enabled: Prior turnover & prior experience waived for eligible DPIIT startups.
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" /> Designated Sandbox Site
            </h3>
            <p className="text-xs text-slate-300">{selectedChallenge.location}</p>
            <p className="text-[11px] text-slate-400">
              Department provides sandbox access, raw test feeds, and field security clearances for the pilot duration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
