import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Building2,
  PlusCircle,
  CheckCircle2,
  Rocket,
  Award,
  Layers,
  Sparkles
} from 'lucide-react';

export const GovernmentOfficerView = () => {
  const { createChallengeByGO, challenges, applications, setActiveTab } = useApp();
  const [formData, setFormData] = useState({
    title: '',
    department: 'Ministry of Jal Shakti',
    sector: 'Water & Sanitation',
    budgetGrant: 3500000,
    procurementScale: 25000000,
    sandboxDuration: '90 Days',
    location: 'Varanasi Sandbox Centre',
    deadline: '2026-10-30',
    problemDescription: '',
    expectedOutcomes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.problemDescription) return;
    createChallengeByGO(formData);
    setFormData({
      title: '',
      department: 'Ministry of Jal Shakti',
      sector: 'Water & Sanitation',
      budgetGrant: 3500000,
      procurementScale: 25000000,
      sandboxDuration: '90 Days',
      location: 'Varanasi Sandbox Centre',
      deadline: '2026-10-30',
      problemDescription: '',
      expectedOutcomes: ''
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 border border-amber-500/30">
        <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
          <Building2 className="w-6 h-6 text-amber-400" /> Government Officer Operations Portal
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Publish public sector operational problems, review startup proposals, manage pilot milestones, and issue GeM direct procurement orders.
        </p>
      </div>

      {/* Publish Challenge Form */}
      <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-6">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-amber-400" /> Publish New Operational Challenge
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="text-slate-300 font-semibold block mb-1">Challenge Title *</label>
            <input
              type="text"
              required
              placeholder="e.g., AI-Powered Real-Time Water Quality Monitoring"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white focus:border-amber-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-slate-300 font-semibold block mb-1">Ministry / Department</label>
            <input
              type="text"
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white focus:border-amber-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-slate-300 font-semibold block mb-1">Sandbox Grant Budget (₹)</label>
            <input
              type="number"
              value={formData.budgetGrant}
              onChange={(e) => setFormData({ ...formData, budgetGrant: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white focus:border-amber-500 focus:outline-none font-mono"
            />
          </div>
          <div>
            <label className="text-slate-300 font-semibold block mb-1">Scale Procurement Potential (₹)</label>
            <input
              type="number"
              value={formData.procurementScale}
              onChange={(e) => setFormData({ ...formData, procurementScale: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white focus:border-amber-500 focus:outline-none font-mono"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-slate-300 font-semibold block mb-1">Operational Problem Description *</label>
          <textarea
            rows={3}
            required
            placeholder="Detailed description of the operational friction, current bottlenecks, and target outcomes..."
            value={formData.problemDescription}
            onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition flex items-center gap-1.5"
        >
          <Sparkles className="w-4 h-4" /> Publish Challenge to ProcureX Portal
        </button>
      </form>
    </div>
  );
};
