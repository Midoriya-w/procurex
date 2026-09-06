import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Award,
  CheckCircle2,
  FileSpreadsheet,
  Download,
  UserCheck,
  Building2,
  Sparkles,
  TrendingUp,
  MessageSquare,
  ShieldCheck,
  Send
} from 'lucide-react';

export const EvaluationResult = () => {
  const {
    selectedApplication,
    role,
    submitExpertEvaluationScore,
    showToast
  } = useApp();

  const app = selectedApplication;
  const score = app.proposalScore;

  // Expert form state
  const [expertScoreData, setExpertScoreData] = useState({
    tech: 90,
    cost: 88,
    impact: 95,
    compliance: 100,
    remarks: 'Strong technical prototype with validated field sensor capability.'
  });

  const handleExpertSubmit = (e) => {
    e.preventDefault();
    submitExpertEvaluationScore(app.id, expertScoreData);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block">Jury Scorecard & Evaluation Matrix</span>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            Evaluation Scorecard: {app.id}
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Standardized technical, financial, and compliance rubric evaluation for {app.startupName}.
          </p>
        </div>

        <button
          onClick={() => showToast("Downloading official evaluation report PDF...")}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition flex items-center gap-2"
        >
          <Download className="w-4 h-4 text-cyan-400" /> Export Scorecard PDF
        </button>
      </div>

      {/* Total Score Summary Card */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="space-y-1">
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Total Composite Score</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl md:text-5xl font-black gradient-text">{score.total}</span>
            <span className="text-xl text-slate-400 font-bold">/ 100</span>
          </div>
          <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1 mt-2">
            <CheckCircle2 className="w-4 h-4" /> Recommended for Sandbox Pilot Award
          </p>
        </div>

        <div className="md:col-span-2 space-y-3 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-8">
          {/* Sub Score 1 */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">Technical Feasibility & Innovation</span>
              <span className="text-cyan-400 font-bold">{score.technicalFeasibility}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${score.technicalFeasibility}%` }}></div>
            </div>
          </div>

          {/* Sub Score 2 */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">Public & Departmental Impact</span>
              <span className="text-emerald-400 font-bold">{score.publicImpact}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${score.publicImpact}%` }}></div>
            </div>
          </div>

          {/* Sub Score 3 */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">Cost Effectiveness & Grant Budgeting</span>
              <span className="text-indigo-400 font-bold">{score.costEffectiveness}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-indigo-400 rounded-full" style={{ width: `${score.costEffectiveness}%` }}></div>
            </div>
          </div>

          {/* Sub Score 4 */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">GFR & DPIIT Compliance Checklist</span>
              <span className="text-amber-400 font-bold">{score.compliance}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full" style={{ width: `${score.compliance}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Reviews Section */}
      <div className="glass-panel rounded-xl p-6 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-purple-400" /> Independent Expert Jury Comments
        </h3>

        <div className="space-y-4">
          {app.expertReviews.length > 0 ? (
            app.expertReviews.map((rev, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{rev.expertName}</h4>
                    <span className="text-[10px] text-slate-400">{rev.role}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    Score: {rev.score}/100
                  </span>
                </div>
                <p className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 leading-relaxed">
                  "{rev.remarks}"
                </p>
              </div>
            ))
          ) : (
            <p className="text-xs text-slate-500 italic">No expert reviews recorded yet.</p>
          )}
        </div>
      </div>

      {/* Expert / Jury Interactive Input Form (Visible if Expert role) */}
      {role === 'expert' && (
        <form onSubmit={handleExpertSubmit} className="glass-panel rounded-xl p-6 border border-purple-500/30 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" /> Expert Jury Scoring Form
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="text-slate-300 font-semibold block mb-1">Technical Score (0-100)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={expertScoreData.tech}
                onChange={(e) => setExpertScoreData({ ...expertScoreData, tech: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white font-mono"
              />
            </div>
            <div>
              <label className="text-slate-300 font-semibold block mb-1">Cost Score (0-100)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={expertScoreData.cost}
                onChange={(e) => setExpertScoreData({ ...expertScoreData, cost: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white font-mono"
              />
            </div>
            <div>
              <label className="text-slate-300 font-semibold block mb-1">Impact Score (0-100)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={expertScoreData.impact}
                onChange={(e) => setExpertScoreData({ ...expertScoreData, impact: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white font-mono"
              />
            </div>
            <div>
              <label className="text-slate-300 font-semibold block mb-1">Compliance Score (0-100)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={expertScoreData.compliance}
                onChange={(e) => setExpertScoreData({ ...expertScoreData, compliance: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white font-mono"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-300 font-semibold block mb-1">Jury Assessment Remarks</label>
            <textarea
              rows={3}
              value={expertScoreData.remarks}
              onChange={(e) => setExpertScoreData({ ...expertScoreData, remarks: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-white"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs shadow transition flex items-center gap-1"
          >
            <Send className="w-4 h-4" /> Submit Scorecard & Recommendation
          </button>
        </form>
      )}
    </div>
  );
};
