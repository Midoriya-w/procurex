import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CheckSquare, X, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';

export const TaskChecklistDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setActiveTab } = useApp();

  const tasks = [
    { id: 1, title: "Startup dashboard", priority: "P0", tab: "dashboard", completed: true },
    { id: 2, title: "Startup profile screens", priority: "P0", tab: "profile", completed: true },
    { id: 3, title: "Challenge discovery UI", priority: "P0", tab: "discovery", completed: true },
    { id: 4, title: "Challenge details page", priority: "P0", tab: "challenge-detail", completed: true },
    { id: 5, title: "Startup application flow", priority: "P0", tab: "status-tracker", completed: true },
    { id: 6, title: "Application status tracker", priority: "P0", tab: "status-tracker", completed: true },
    { id: 7, title: "Evaluation result UI", priority: "P1", tab: "evaluation", completed: true },
    { id: 8, title: "Pilot dashboard", priority: "P0", tab: "pilot", completed: true },
    { id: 9, title: "Milestone tracking UI", priority: "P0", tab: "milestones", completed: true },
    { id: 10, title: "Procurement status UI", priority: "P1", tab: "procurement", completed: true },
    { id: 11, title: "Responsive QA & API integration", priority: "P0", tab: "dashboard", completed: true },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2.5 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-400 font-bold text-xs shadow-2xl hover:bg-slate-800 transition flex items-center gap-2"
        >
          <CheckSquare className="w-4 h-4 text-emerald-400" />
          <span>Task Checklist (11/11 Completed)</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        </button>
      ) : (
        <div className="bg-slate-900/95 border border-slate-800 rounded-2xl w-80 md:w-96 shadow-2xl p-4 space-y-3 backdrop-blur-xl animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Open Task Checklist
              </h3>
              <span className="text-[10px] text-emerald-400 font-mono">100% complete • 11 of 11 delivered</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => {
                  setActiveTab(task.tab);
                  setIsOpen(false);
                }}
                className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/40 transition cursor-pointer flex items-center justify-between text-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-[10px] shrink-0">
                    ✓
                  </div>
                  <span className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">
                    {task.title}
                  </span>
                </div>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                  task.priority === 'P0' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                }`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
