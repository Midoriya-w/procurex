import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_CHALLENGES,
  INITIAL_STARTUP_PROFILE,
  INITIAL_APPLICATIONS,
  INITIAL_PILOT,
  INITIAL_PROCUREMENT
} from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Roles: 'startup' | 'government' | 'expert'
  const [role, setRole] = useState('startup');
  
  // Active Navigation Tab
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // State Data
  const [challenges, setChallenges] = useState(() => {
    const saved = localStorage.getItem('procurex_challenges');
    return saved ? JSON.parse(saved) : INITIAL_CHALLENGES;
  });

  const [startupProfile, setStartupProfile] = useState(() => {
    const saved = localStorage.getItem('procurex_profile');
    return saved ? JSON.parse(saved) : INITIAL_STARTUP_PROFILE;
  });

  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem('procurex_applications');
    return saved ? JSON.parse(saved) : INITIAL_APPLICATIONS;
  });

  const [pilot, setPilot] = useState(() => {
    const saved = localStorage.getItem('procurex_pilot');
    return saved ? JSON.parse(saved) : INITIAL_PILOT;
  });

  const [procurement, setProcurement] = useState(() => {
    const saved = localStorage.getItem('procurex_procurement');
    return saved ? JSON.parse(saved) : INITIAL_PROCUREMENT;
  });

  // Selected State for Detail Pages & Modals
  const [selectedChallengeId, setSelectedChallengeId] = useState("CHALLENGE-2026-01");
  const [selectedAppId, setSelectedAppId] = useState("APP-901");
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('procurex_challenges', JSON.stringify(challenges));
  }, [challenges]);

  useEffect(() => {
    localStorage.setItem('procurex_profile', JSON.stringify(startupProfile));
  }, [startupProfile]);

  useEffect(() => {
    localStorage.setItem('procurex_applications', JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem('procurex_pilot', JSON.stringify(pilot));
  }, [pilot]);

  useEffect(() => {
    localStorage.setItem('procurex_procurement', JSON.stringify(procurement));
  }, [procurement]);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Helper getters
  const selectedChallenge = challenges.find(c => c.id === selectedChallengeId) || challenges[0];
  const selectedApplication = applications.find(a => a.id === selectedAppId) || applications[0];

  // Actions
  const updateStartupProfile = (updatedFields) => {
    setStartupProfile(prev => ({ ...prev, ...updatedFields }));
    showToast("Startup profile updated successfully!");
  };

  const submitApplication = (appData) => {
    const newApp = {
      id: `APP-${Math.floor(100 + Math.random() * 900)}`,
      challengeId: selectedChallenge.id,
      challengeTitle: selectedChallenge.title,
      department: selectedChallenge.department,
      startupId: startupProfile.id,
      startupName: startupProfile.companyName,
      submittedAt: new Date().toISOString().split('T')[0],
      status: "SUBMITTED",
      currentStageIndex: 0,
      grantAmount: selectedChallenge.budgetGrant,
      disbursedAmount: 0,
      proposedSolution: appData.proposedSolution,
      proposalScore: {
        total: 85,
        technicalFeasibility: 85,
        costEffectiveness: 85,
        publicImpact: 85,
        compliance: 100
      },
      expertReviews: [],
      timeline: [
        { stage: "Proposal Submitted", date: new Date().toISOString().split('T')[0], status: "completed", note: "Submitted via ProcureX" },
        { stage: "Eligibility & Document Verification", date: "Pending", status: "in_progress", note: "Verification automated screening" },
        { stage: "Expert Panel Scoring", date: "Pending", status: "upcoming", note: "Assigned to committee" },
        { stage: "Sandbox Pilot Sanctioned", date: "Pending", status: "upcoming", note: "Awaiting recommendation" }
      ]
    };

    setApplications(prev => [newApp, ...prev]);
    setSelectedAppId(newApp.id);
    setIsAppModalOpen(false);
    showToast("Application submitted successfully! Tracking number: " + newApp.id);
    setActiveTab("status-tracker");
  };

  const submitMilestoneEvidence = (milestoneId, evidenceDocUrl, notes) => {
    setPilot(prev => {
      const updatedMilestones = prev.milestones.map(m => {
        if (m.id === milestoneId) {
          return {
            ...m,
            status: "SUBMITTED",
            submittedDate: new Date().toISOString().split('T')[0],
            evidenceDocUrl: evidenceDocUrl || "https://example.com/docs/evidence-submitted.pdf",
            remarks: notes || "Submitted by startup. Pending government officer review."
          };
        }
        return m;
      });
      return { ...prev, milestones: updatedMilestones };
    });
    showToast(`Milestone ${milestoneId} evidence submitted for review!`);
  };

  const approveMilestoneByGO = (milestoneId) => {
    setPilot(prev => {
      let releasedGrant = 0;
      const updatedMilestones = prev.milestones.map(m => {
        if (m.id === milestoneId) {
          releasedGrant = m.grantShare;
          return {
            ...m,
            status: "APPROVED",
            approvedDate: new Date().toISOString().split('T')[0],
            remarks: "Approved by Government Officer. Funds released via Escrow."
          };
        }
        return m;
      });
      return {
        ...prev,
        disbursedGrant: prev.disbursedGrant + releasedGrant,
        milestones: updatedMilestones
      };
    });
    showToast(`Milestone ${milestoneId} approved! Funds disbursed.`, 'success');
  };

  const createChallengeByGO = (newChallengeData) => {
    const newChallenge = {
      id: `CHALLENGE-2026-0${challenges.length + 1}`,
      title: newChallengeData.title,
      department: newChallengeData.department || "Ministry of Innovation & Technology",
      sector: newChallengeData.sector || "Public Infrastructure",
      budgetGrant: Number(newChallengeData.budgetGrant) || 3000000,
      procurementScale: Number(newChallengeData.procurementScale) || 20000000,
      sandboxDuration: newChallengeData.sandboxDuration || "90 Days",
      location: newChallengeData.location || "National Sandbox Centre",
      deadline: newChallengeData.deadline || "2026-11-30",
      matchScore: 90,
      status: "Active",
      applicantsCount: 0,
      problemDescription: newChallengeData.problemDescription,
      expectedOutcomes: newChallengeData.expectedOutcomes ? newChallengeData.expectedOutcomes.split('\n') : ["Achieve 95%+ accuracy"],
      eligibility: ["DPIIT Registered Startup", "TRL 5+ Prototype"]
    };

    setChallenges(prev => [newChallenge, ...prev]);
    showToast("New Government Challenge published successfully!");
    setActiveTab("discovery");
  };

  const submitExpertEvaluationScore = (appId, scoreData) => {
    setApplications(prev => prev.map(app => {
      if (app.id === appId) {
        const total = Math.round((Number(scoreData.tech) + Number(scoreData.cost) + Number(scoreData.impact) + Number(scoreData.compliance)) / 4);
        return {
          ...app,
          status: total >= 80 ? "PILOT_APPROVED" : "EXPERT_REVIEW",
          currentStageIndex: total >= 80 ? 3 : 2,
          proposalScore: {
            total,
            technicalFeasibility: Number(scoreData.tech),
            costEffectiveness: Number(scoreData.cost),
            publicImpact: Number(scoreData.impact),
            compliance: Number(scoreData.compliance)
          },
          expertReviews: [
            ...app.expertReviews,
            {
              expertName: "Validator Panel Expert",
              role: "SIH Independent Jury Member",
              score: total,
              remarks: scoreData.remarks || "Evaluated against SIH26136 innovation criteria."
            }
          ]
        };
      }
      return app;
    }));
    showToast("Expert scorecard submitted successfully!");
  };

  const triggerGeMProcurement = () => {
    setProcurement(prev => ({
      ...prev,
      status: "GEM_LISTED",
      certificate: {
        ...prev.certificate,
        issueDate: new Date().toISOString().split('T')[0]
      }
    }));
    showToast("Scale-Up Order approved & listed on GeM Startup Runway!");
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        activeTab,
        setActiveTab,
        challenges,
        startupProfile,
        applications,
        pilot,
        procurement,
        selectedChallenge,
        setSelectedChallengeId,
        selectedApplication,
        setSelectedAppId,
        isAppModalOpen,
        setIsAppModalOpen,
        toastMessage,
        showToast,
        updateStartupProfile,
        submitApplication,
        submitMilestoneEvidence,
        approveMilestoneByGO,
        createChallengeByGO,
        submitExpertEvaluationScore,
        triggerGeMProcurement
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
