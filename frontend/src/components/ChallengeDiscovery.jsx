import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  Filter,
  Sparkles,
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  ArrowUpRight,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const ChallengeDiscovery = () => {
  const { challenges, setSelectedChallengeId, setActiveTab } = useApp();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [sortBy, setSortBy] = useState('matchScore');

  const sectors = ['All', 'Water & Sanitation', 'Aerospace & Defence', 'Clean Energy', 'Smart Municipalities'];

  const filteredChallenges = challenges.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.problemDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'All' || c.sector === selectedSector;
    return matchesSearch && matchesSector;
  }).sort((a, b) => {
    if (sortBy === 'matchScore') return b.matchScore - a.matchScore;
    if (sortBy === 'budget') return b.budgetGrant - a.budgetGrant;
    if (sortBy === 'deadline') return new Date(a.deadline) - new Date(b.deadline);
    return 0;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header & Search Bar */}
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            Government Challenge Discovery <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">SIH26136 Portal</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Discover verified public sector operational challenges matched against your startup's technical capabilities.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="glass-panel rounded-2xl p-4 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by challenge title, department, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          {/* Sector Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto py-1">
            {sectors.map(sector => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  selectedSector === sector
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-xs text-slate-400 shrink-0 w-full md:w-auto justify-end">
            <SlidersHorizontal className="w-4 h-4 text-cyan-400" /> Sort by:
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white font-medium focus:border-cyan-500 focus:outline-none"
            >
              <option value="matchScore">Highest Match %</option>
              <option value="budget">Highest Grant Value</option>
              <option value="deadline">Earliest Deadline</option>
            </select>
          </div>
        </div>
      </div>

      {/* Challenge Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredChallenges.map((challenge) => (
          <div
            key={challenge.id}
            className="glass-panel rounded-2xl p-6 border border-slate-800 glass-card-hover flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Match Score Badge */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{challenge.sector}</span>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {challenge.title}
                </h3>
              </div>
              <div className="flex flex-col items-end shrink-0">
                <span className="px-2.5 py-1 rounded-xl text-xs font-black bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> {challenge.matchScore}% Match
                </span>
                <span className="text-[10px] text-slate-500 font-mono mt-1">{challenge.id}</span>
              </div>
            </div>

            {/* Department */}
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium mb-3">
              <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{challenge.department}</span>
            </div>

            {/* Problem Snippet */}
            <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
              {challenge.problemDescription}
            </p>

            {/* Location & Grant Bar */}
            <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800/80 grid grid-cols-2 gap-2 text-xs mb-4">
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Sandbox Pilot Grant</span>
                <span className="font-extrabold text-emerald-400 text-sm">₹{(challenge.budgetGrant / 100000).toFixed(1)} Lakhs</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">GeM Scale Pipeline</span>
                <span className="font-extrabold text-amber-400 text-sm">₹{(challenge.procurementScale / 10000000).toFixed(2)} Cr</span>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
              <div className="flex items-center gap-1 text-slate-400 font-mono">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" /> Deadline: <span className="text-slate-200">{challenge.deadline}</span>
              </div>

              <button
                onClick={() => {
                  setSelectedChallengeId(challenge.id);
                  setActiveTab('challenge-detail');
                }}
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 font-bold border border-cyan-500/30 transition flex items-center gap-1 group-hover:border-cyan-400"
              >
                View Problem Brief <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
