import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { StartupDashboard } from './components/StartupDashboard';
import { StartupProfile } from './components/StartupProfile';
import { ChallengeDiscovery } from './components/ChallengeDiscovery';
import { ChallengeDetails } from './components/ChallengeDetails';
import { ApplicationFlowModal } from './components/ApplicationFlowModal';
import { ApplicationStatusTracker } from './components/ApplicationStatusTracker';
import { EvaluationResult } from './components/EvaluationResult';
import { PilotDashboard } from './components/PilotDashboard';
import { MilestoneTracking } from './components/MilestoneTracking';
import { ProcurementStatus } from './components/ProcurementStatus';
import { GovernmentOfficerView } from './components/GovernmentOfficerView';
import { TaskChecklistDrawer } from './components/TaskChecklistDrawer';

const MainContent = () => {
  const { activeTab, role } = useApp();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        if (role === 'government') return <GovernmentOfficerView />;
        if (role === 'expert') return <EvaluationResult />;
        return <StartupDashboard />;
      case 'profile':
        return <StartupProfile />;
      case 'discovery':
        return <ChallengeDiscovery />;
      case 'challenge-detail':
        return <ChallengeDetails />;
      case 'status-tracker':
        return <ApplicationStatusTracker />;
      case 'evaluation':
        return <EvaluationResult />;
      case 'pilot':
        return <PilotDashboard />;
      case 'milestones':
        return <MilestoneTracking />;
      case 'procurement':
        return <ProcurementStatus />;
      default:
        return <StartupDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950 font-sans">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderTabContent()}
      </main>
      <ApplicationFlowModal />
      <TaskChecklistDrawer />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-6 text-center text-xs text-slate-500 space-y-1">
        <p>ProcureX • Startup-Friendly Public Procurement Controller (SIH26136)</p>
        <p className="text-[11px] text-slate-600 font-mono">DPIIT & GeM Startup Runway 2.0 Direct Procurement Compliance Engine</p>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
