import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Layers,
  CheckCircle2,
  Clock,
  Upload,
  ExternalLink,
  DollarSign,
  AlertCircle,
  FileText,
  ShieldCheck,
  Building2,
  Send,
  XCircle,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const MilestoneTracking = () => {
  const {
    pilot,
    role,
    submitMilestoneEvidence,
    approveMilestoneByGO,
    showToast
  } = useApp();

  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [evidenceUrl, setEvidenceUrl] = useState('');
  const [evidenceNotes, setEvidenceNotes] = useState('');

  const handleEvidenceSubmit = (e) => {
    e.preventDefault();
    if (!selectedMilestone) return;
    submitMilestoneEvidence(selectedMilestone.id, evidenceUrl, evidenceNotes);
    setSelectedMilestone(null);
    setEvidenceUrl('');
    setEvidenceNotes('');
  };

  const handleApprove = (mId) => {
    approveMilestoneByGO(mId);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback if canvas-confetti non-blocking
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">Sandbox Pilot Escrow Milestone Management</span>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <Layers className="w-6 h-6 text-cyan-400" /> Milestone & Grant Release Tracker
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Track sandbox milestone execution, submit empirical evidence, and trigger Escrow grant disbursements.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-xs">
          <div>
            <span className="text-slate-500 block">Total Grant</span>
            <span className="font-extrabold text-white">₹{(pilot.totalGrant / 100000).toFixed(1)}L</span>
          </div>
          <div className="h-6 w-px bg-slate-800"></div>
          <div>
            <span className="text-slate-500 block">Disbursed</span>
            <span className="font-extrabold text-emerald-400">₹{(pilot.disbursedGrant / 100000).toFixed(1)}L</span>
          </div>
        </div>
      </div>

      {/* Role Alert Notice */}
      {role === 'government' ? (
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-amber-400 font-semibold">
            <Building2 className="w-4 h-4" /> Government Officer Mode: You have authorization to review evidence and release Escrow funds.
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold">
            <ShieldCheck className="w-4 h-4" /> Startup Mode: Submit milestone evidence documents for Government Officer verification.
          </div>
        </div>
      )}

      {/* Milestone Cards List */}
      <div className="space-y-4">
        {pilot.milestones.map((m, idx) => (
          <div
            key={m.id}
            className={`glass-panel rounded-2xl p-6 border transition-all ${
              m.status === 'APPROVED'
                ? 'border-emerald-500/30 bg-slate-900/90'
                : m.status === 'SUBMITTED'
                ? 'border-amber-500/40 bg-slate-900'
                : 'border-slate-800 bg-slate-950/60'
            }`}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-slate-800 text-slate-300">
                    {m.id}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Due: {m.dueDate}</span>
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                      m.status === 'APPROVED'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : m.status === 'SUBMITTED'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-pulse'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {m.status.replace('_', ' ')}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.description}</p>
              </div>

              <div className="flex flex-col items-end shrink-0 space-y-2">
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Grant Share</span>
                  <span className="text-base font-extrabold text-emerald-400">₹{(m.grantShare / 100000).toFixed(1)} Lakhs</span>
                </div>

                {/* Actions */}
                {role === 'startup' && m.status === 'PENDING_SUBMISSION' && (
                  <button
                    onClick={() => setSelectedMilestone(m)}
                    className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition flex items-center gap-1 shadow"
                  >
                    <Upload className="w-3.5 h-3.5" /> Submit Evidence
                  </button>
                )}

                {role === 'startup' && m.status === 'SUBMITTED' && (
                  <span className="text-xs text-amber-400 font-medium italic">Pending Officer Sign-off</span>
                )}

                {role === 'government' && m.status === 'SUBMITTED' && (
                  <button
                    onClick={() => handleApprove(m.id)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/20 transition flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Approve & Release Escrow Grant
                  </button>
                )}
              </div>
            </div>

            {/* Evidence & Remarks Details */}
            {m.evidenceDocUrl && (
              <div className="mt-4 pt-3 border-t border-slate-800/80 bg-slate-950/60 p-3 rounded-xl border border-slate-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-slate-400 font-semibold block">Evidence Submission Remarks:</span>
                  <span className="text-slate-300">{m.remarks}</span>
                </div>
                <a
                  href={m.evidenceDocUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-400 font-mono text-[11px] flex items-center gap-1 shrink-0"
                >
                  <FileText className="w-3.5 h-3.5" /> View Evidence Doc <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Evidence Submission Modal */}
      {selectedMilestone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg p-6 space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Upload className="w-5 h-5 text-cyan-400" /> Submit Milestone Evidence: {selectedMilestone.id}
            </h3>
            <p className="text-xs text-slate-400">{selectedMilestone.title}</p>

            <form onSubmit={handleEvidenceSubmit} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-300 font-semibold block mb-1">Evidence Document / Demo URL</label>
                <input
                  type="text"
                  required
                  placeholder="https://example.com/docs/milestone-proof.pdf"
                  value={evidenceUrl}
                  onChange={(e) => setEvidenceUrl(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:border-cyan-500 focus:outline-none font-mono"
                />
              </div>
              <div>
                <label className="text-slate-300 font-semibold block mb-1">Execution Remarks & Sensor Metrics</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Provide test run data, sensor accuracy percentage, and field inspector notes..."
                  value={evidenceNotes}
                  onChange={(e) => setEvidenceNotes(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedMilestone(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow"
                >
                  Submit Milestone Evidence
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
