import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  Building,
  Award,
  FileText,
  Upload,
  CheckCircle2,
  ExternalLink,
  Edit2,
  Save,
  Globe,
  Mail,
  Phone,
  MapPin,
  Users,
  Briefcase,
  AlertCircle
} from 'lucide-react';

export const StartupProfile = () => {
  const { startupProfile, updateStartupProfile } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(startupProfile);

  const handleSave = (e) => {
    e.preventDefault();
    updateStartupProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-6xl mx-auto">
      {/* Header Profile Banner */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-800 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-2xl shadow-xl shadow-cyan-500/20 shrink-0">
              {startupProfile.companyName.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-extrabold text-white">{startupProfile.companyName}</h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> DPIIT Recognized
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> GeM Registered
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-1">{startupProfile.tagline}</p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-3 font-mono">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {startupProfile.location}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-cyan-400" /> {startupProfile.teamSize} Employees</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-cyan-400" /> Founded {startupProfile.foundedYear}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition flex items-center gap-2 shrink-0"
          >
            {isEditing ? <Save className="w-4 h-4 text-emerald-400" /> : <Edit2 className="w-4 h-4 text-cyan-400" />}
            {isEditing ? 'Cancel Edit' : 'Edit Profile'}
          </button>
        </div>
      </div>

      {isEditing ? (
        /* Edit Form Mode */
        <form onSubmit={handleSave} className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Edit2 className="w-5 h-5 text-cyan-400" /> Edit Startup Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Company Name</label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">DPIIT Recognition ID</label>
              <input
                type="text"
                value={formData.dpiitId}
                onChange={(e) => setFormData({ ...formData, dpiitId: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none font-mono"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">GeM Seller ID</label>
              <input
                type="text"
                value={formData.gemSellerId}
                onChange={(e) => setFormData({ ...formData, gemSellerId: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none font-mono"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">TRL Level</label>
              <select
                value={formData.trlLevel}
                onChange={(e) => setFormData({ ...formData, trlLevel: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="TRL 5 - Component Validation in Relevant Environment">TRL 5 - Prototype</option>
                <option value="TRL 6 - System Validation in Operational Environment">TRL 6 - Field Test</option>
                <option value="TRL 7 - System Prototype Validated in Operational Environment">TRL 7 - Fully Validated</option>
                <option value="TRL 8 - System Complete and Qualified">TRL 8 - Commercial Production</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Annual Turnover</label>
              <input
                type="text"
                value={formData.turnover}
                onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Company Overview / Pitch</label>
            <textarea
              rows={4}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition"
          >
            Save Profile Changes
          </button>
        </form>
      ) : (
        /* Standard View Mode */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Cols: Details & Past Performance */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <div className="glass-panel rounded-xl p-6 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-3">About {startupProfile.companyName}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{startupProfile.bio}</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-800/80">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">TRL Level</span>
                  <span className="text-sm font-bold text-cyan-400">{startupProfile.trlLevel.split('-')[0]}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">DPIIT Status</span>
                  <span className="text-sm font-bold text-emerald-400">Verified ✓</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Turnover Waiver</span>
                  <span className="text-sm font-bold text-amber-400">Applicable</span>
                </div>
              </div>
            </div>

            {/* Past Municipal & Public Pilots */}
            <div className="glass-panel rounded-xl p-6 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-400" /> Past Municipal & Public Pilots
              </h3>
              <div className="space-y-4">
                {startupProfile.pastPilots.map((pilot, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">{pilot.project}</h4>
                      <span className="text-xs text-cyan-400 font-medium">{pilot.client}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {pilot.outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Col: Verified Document Vault */}
          <div className="space-y-6">
            <div className="glass-panel rounded-xl p-6 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" /> Document Vault
                </h3>
                <span className="text-xs text-emerald-400 font-mono">100% Verified</span>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Automated document verification against DPIIT & MCA databases.
              </p>

              <div className="space-y-3">
                {startupProfile.certifications.map((cert, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                      <div>
                        <span className="text-xs font-semibold text-slate-200 block">{cert.name}</span>
                        <span className="text-[10px] text-slate-400 font-mono">{cert.docId}</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      VALID ✓
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800">
                <button
                  onClick={() => alert("Simulated document upload: File added to verified vault!")}
                  className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition flex items-center justify-center gap-2"
                >
                  <Upload className="w-3.5 h-3.5 text-cyan-400" /> Upload New Certificate / Patent
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
