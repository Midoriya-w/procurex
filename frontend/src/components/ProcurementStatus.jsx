import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Building2,
  FileCheck,
  Download,
  ExternalLink,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ProcurementStatus = () => {
  const {
    procurement,
    role,
    triggerGeMProcurement,
    showToast
  } = useApp();

  const handleIssueGeMOrder = () => {
    triggerGeMProcurement();
    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.5 }
      });
    } catch (e) {
      // fallback
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">GeM Direct Procurement & Commercial Scale-Up</span>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-400" /> GeM Scale-Up Conversion Hub
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Converting validated sandbox pilot evidence into compliant public procurement orders under GFR Rule 194.
          </p>
        </div>

        <button
          onClick={() => showToast("Downloading official GeM Scale-Up Compliance Dossier PDF...")}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition flex items-center gap-2"
        >
          <Download className="w-4 h-4 text-cyan-400" /> Download GeM Dossier PDF
        </button>
      </div>

      {/* Main Readiness Certificate Banner */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 border border-amber-500/30 relative overflow-hidden space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                {procurement.id}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> GFR Audit Passed
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-white">
              {procurement.startupName} — GeM Scale Readiness Score: <span className="text-amber-400 font-black">98 / 100</span>
            </h2>
            <p className="text-xs text-slate-400">
              Challenge: <strong className="text-slate-200">{procurement.challengeTitle}</strong> ({procurement.department})
            </p>
          </div>

          <div className="flex flex-col items-end shrink-0 space-y-2">
            <span className="text-xs text-slate-400 font-mono">Status:</span>
            <span className="px-3.5 py-1.5 rounded-xl text-xs font-black bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20">
              {procurement.status.replace('_', ' ')}
            </span>
          </div>
        </div>

        {/* Legal Waiver Exemption */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
          <h4 className="font-bold text-amber-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Legal Procurement Exemption Clause
          </h4>
          <p className="text-slate-300 leading-relaxed font-mono text-[11px]">
            "{procurement.exemptionRule}"
          </p>
        </div>
      </div>

      {/* Scale-Up Procurement Package */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel rounded-xl p-5 border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Recommended Deployment Volume</span>
          <span className="text-3xl font-black text-white">{procurement.scalePackage.recommendedUnits} <span className="text-xs font-normal text-slate-400">Sensor Stations</span></span>
          <p className="text-[11px] text-slate-400">Covering 5 major river basin districts</p>
        </div>

        <div className="glass-panel rounded-xl p-5 border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Estimated Contract Value</span>
          <span className="text-3xl font-black text-amber-400">₹{(procurement.scalePackage.estimatedOrderValue / 10000000).toFixed(2)} Cr</span>
          <p className="text-[11px] text-slate-400">Approved by Joint Secretary</p>
        </div>

        <div className="glass-panel rounded-xl p-5 border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Rollout Timeline</span>
          <span className="text-3xl font-black text-emerald-400">{procurement.scalePackage.deploymentTimelineMonths} Months</span>
          <p className="text-[11px] text-slate-400">Phased district deployment</p>
        </div>
      </div>

      {/* Target Districts Map / List */}
      <div className="glass-panel rounded-xl p-6 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Globe className="w-5 h-5 text-cyan-400" /> Target Scale-Up Expansion Districts
        </h3>
        <div className="flex flex-wrap gap-3">
          {procurement.scalePackage.targetDistricts.map((dist, idx) => (
            <div key={idx} className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              {dist} District WTP
            </div>
          ))}
        </div>
      </div>

      {/* Government Officer Action Trigger */}
      {role === 'government' && (
        <div className="glass-panel rounded-2xl p-6 border border-amber-500/40 bg-gradient-to-r from-slate-900 to-amber-950/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white">Authorized Officer Action</h4>
            <p className="text-xs text-slate-300 mt-1">
              Issue official direct procurement order on GeM Startup Runway 2.0 portal for AeroSens Technologies.
            </p>
          </div>
          <button
            onClick={handleIssueGeMOrder}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs shadow-xl shadow-amber-500/25 transition shrink-0 flex items-center gap-2"
          >
            <Award className="w-4 h-4" /> Issue GeM Direct Purchase Order
          </button>
        </div>
      )}
    </div>
  );
};
