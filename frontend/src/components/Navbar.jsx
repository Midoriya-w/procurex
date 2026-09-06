import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  Building2,
  Award,
  Search,
  User,
  LayoutDashboard,
  FileCheck,
  Rocket,
  PlusCircle,
  FileSpreadsheet,
  CheckCircle2,
  Layers,
  ChevronRight
} from 'lucide-react';

export const Navbar = () => {
  const {
    role,
    setRole,
    activeTab,
    setActiveTab,
    toastMessage,
    startupProfile
  } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-slate-300 text-xs py-1.5 px-4 flex items-center justify-between border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-cyan-400 font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            SIH26136
          </span>
          <span className="text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-400">Startup-Friendly Public Procurement Controller v1.0</span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
            <CheckCircle2 className="w-3 h-3" /> DPIIT & GeM Runway Integrated
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400 hidden md:inline">Current Mode:</span>
          {/* Role Switcher Pill */}
          <div className="flex bg-slate-950 p-0.5 rounded-lg border border-slate-800">
            <button
              onClick={() => setRole('startup')}
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                role === 'startup'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Startup (ST)
            </button>
            <button
              onClick={() => setRole('government')}
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                role === 'government'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Govt Officer (GO)
            </button>
            <button
              onClick={() => setRole('expert')}
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                role === 'expert'
                  ? 'bg-purple-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Expert / Jury (EV)
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-slate-950 font-black text-xl tracking-tighter">
              PX
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white">Procure<span className="text-cyan-400">X</span></span>
                <span className="bg-slate-800 text-slate-300 text-[10px] uppercase font-mono px-2 py-0.5 rounded font-semibold border border-slate-700">Gov-Tech</span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Demands meets friction-free innovation</p>
            </div>
          </div>

          {/* Navigation Links based on Role */}
          <nav className="hidden lg:flex items-center gap-1">
            {role === 'startup' && (
              <>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'dashboard' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" /> Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'profile' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <User className="w-4 h-4" /> Profile
                </button>
                <button
                  onClick={() => setActiveTab('discovery')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'discovery' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Search className="w-4 h-4" /> Challenges
                </button>
                <button
                  onClick={() => setActiveTab('status-tracker')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'status-tracker' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Layers className="w-4 h-4" /> Applications
                </button>
                <button
                  onClick={() => setActiveTab('pilot')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'pilot' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Rocket className="w-4 h-4" /> Sandbox Pilot
                </button>
                <button
                  onClick={() => setActiveTab('procurement')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'procurement' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Award className="w-4 h-4" /> GeM Scale-Up
                </button>
              </>
            )}

            {role === 'government' && (
              <>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'dashboard' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Building2 className="w-4 h-4" /> GO Portal
                </button>
                <button
                  onClick={() => setActiveTab('discovery')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'discovery' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <PlusCircle className="w-4 h-4" /> Post Challenge
                </button>
                <button
                  onClick={() => setActiveTab('pilot')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'pilot' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Rocket className="w-4 h-4" /> Pilot Approvals
                </button>
                <button
                  onClick={() => setActiveTab('procurement')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'procurement' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Award className="w-4 h-4" /> Issue GeM Order
                </button>
              </>
            )}

            {role === 'expert' && (
              <>
                <button
                  onClick={() => setActiveTab('evaluation')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'evaluation' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30' : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <FileSpreadsheet className="w-4 h-4" /> Scoring Rubrics
                </button>
                <button
                  onClick={() => setActiveTab('status-tracker')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'status-tracker' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30' : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <FileCheck className="w-4 h-4" /> Applicant Proposals
                </button>
              </>
            )}
          </nav>

          {/* User Profile Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5 bg-slate-900 border border-slate-800 rounded-lg p-1.5 pr-3">
              <div className="w-8 h-8 rounded-md bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold flex items-center justify-center text-xs">
                {role === 'startup' ? 'ST' : role === 'government' ? 'GO' : 'EV'}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-xs font-semibold text-white leading-tight">
                  {role === 'startup' ? startupProfile.companyName : role === 'government' ? 'Min. of Jal Shakti' : 'Expert Evaluation Panel'}
                </p>
                <p className="text-[10px] text-slate-400 leading-tight">
                  {role === 'startup' ? startupProfile.dpiitId : role === 'government' ? 'Department Approver' : 'Jury Member #4'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subnav for Mobile / Quick View switcher */}
      <div className="lg:hidden bg-slate-900/90 border-t border-slate-800 px-4 py-2 flex items-center justify-around text-xs overflow-x-auto">
        <button onClick={() => setActiveTab('dashboard')} className={`px-2 py-1 rounded ${activeTab === 'dashboard' ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>Dashboard</button>
        <button onClick={() => setActiveTab('profile')} className={`px-2 py-1 rounded ${activeTab === 'profile' ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>Profile</button>
        <button onClick={() => setActiveTab('discovery')} className={`px-2 py-1 rounded ${activeTab === 'discovery' ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>Challenges</button>
        <button onClick={() => setActiveTab('status-tracker')} className={`px-2 py-1 rounded ${activeTab === 'status-tracker' ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>Status</button>
        <button onClick={() => setActiveTab('pilot')} className={`px-2 py-1 rounded ${activeTab === 'pilot' ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>Pilot</button>
        <button onClick={() => setActiveTab('procurement')} className={`px-2 py-1 rounded ${activeTab === 'procurement' ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>GeM Scale</button>
      </div>

      {/* Toast Alert Banner */}
      {toastMessage && (
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-2 px-4 text-center text-sm font-semibold shadow-lg flex items-center justify-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" /> {toastMessage.message}
        </div>
      )}
    </header>
  );
};
