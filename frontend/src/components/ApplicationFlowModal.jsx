import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  CheckCircle2,
  Rocket,
  FileText,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Upload,
  AlertCircle
} from 'lucide-react';

export const ApplicationFlowModal = () => {
  const {
    isAppModalOpen,
    setIsAppModalOpen,
    selectedChallenge,
    submitApplication,
    startupProfile
  } = useApp();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    proposedSolution: '',
    techArchitecture: '',
    sandboxPlan: '',
    grantCosting: '',
    agreeCompliance: true
  });

  if (!isAppModalOpen) return null;

  const handleNext = () => {
    if (step === 1 && !formData.proposedSolution) {
      alert('Please provide a brief solution pitch.');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitApplication(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div>
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">Startup Proposal Application Flow</span>
            <h2 className="text-base font-bold text-white line-clamp-1">{selectedChallenge.title}</h2>
          </div>
          <button
            onClick={() => setIsAppModalOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress Bar */}
        <div className="px-6 py-3 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between text-xs font-semibold">
          <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-cyan-400' : 'text-slate-500'}`}>
            <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px]">1</span>
            Solution Pitch
          </div>
          <span className="text-slate-700">→</span>
          <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-cyan-400' : 'text-slate-500'}`}>
            <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px]">2</span>
            Sandbox Plan
          </div>
          <span className="text-slate-700">→</span>
          <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-cyan-400' : 'text-slate-500'}`}>
            <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px]">3</span>
            Compliance & Review
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" /> Proposed Technical Solution & Value Proposition
              </h3>

              <div>
                <label className="text-slate-300 font-semibold block mb-1">
                  Describe your solution pitch for this challenge *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Explain how your optical sensors / AI algorithms solve the department's operational problem..."
                  value={formData.proposedSolution}
                  onChange={(e) => setFormData({ ...formData, proposedSolution: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-300 font-semibold block mb-1">
                  Hardware / Software Architecture Overview
                </label>
                <textarea
                  rows={3}
                  placeholder="Details on sensors, edge AI microcontrollers, battery autonomy, data protocols (MQTT/HTTPS)..."
                  value={formData.techArchitecture}
                  onChange={(e) => setFormData({ ...formData, techArchitecture: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Rocket className="w-4 h-4 text-cyan-400" /> Sandbox Deployment & Milestone Execution Plan
              </h3>

              <div>
                <label className="text-slate-300 font-semibold block mb-1">
                  Proposed Sandbox Deployment Plan ({selectedChallenge.sandboxDuration})
                </label>
                <textarea
                  rows={4}
                  placeholder="Outline the field calibration, telemetry streaming, stress testing, and final validation schedule..."
                  value={formData.sandboxPlan}
                  onChange={(e) => setFormData({ ...formData, sandboxPlan: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-slate-400 font-semibold">Standard Sandbox Grant Share</span>
                <p className="text-emerald-400 font-bold text-sm">₹{(selectedChallenge.budgetGrant / 100000).toFixed(1)} Lakhs allocated in 4 Escrow Milestones</p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Automated Compliance Verification
              </h3>

              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">DPIIT Recognition ({startupProfile.dpiitId})</span>
                  <span className="text-emerald-400 font-bold">VERIFIED ✓</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">GeM Seller Registration ({startupProfile.gemSellerId})</span>
                  <span className="text-emerald-400 font-bold">VERIFIED ✓</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">GFR Rule 194 EMD Waiver Exemption</span>
                  <span className="text-cyan-400 font-bold">APPLIED ✓</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 space-y-1">
                <h4 className="font-bold text-cyan-400 text-xs">Self-Declaration Confirmation</h4>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  By submitting this proposal, {startupProfile.companyName} confirms that all attached documents, TRL 7 validation reports, and technical details are authentic and compliant with SIH26136 regulations.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(prev => prev - 1)}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" /> Previous
            </button>
          ) : <div></div>}

          {step < 3 ? (
            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow transition flex items-center gap-1"
            >
              Next Step <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/25 transition flex items-center gap-1"
            >
              Confirm & Submit Proposal <CheckCircle2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
