export const INITIAL_CHALLENGES = [
  {
    id: "CHALLENGE-2026-01",
    title: "AI-Powered Real-Time Water Quality Monitoring for Smart Cities",
    department: "Ministry of Jal Shakti / Urban Development",
    sector: "Water & Sanitation",
    budgetGrant: 3500000,
    procurementScale: 25000000,
    sandboxDuration: "90 Days",
    location: "Varanasi Water Treatment Plant Sandbox",
    deadline: "2026-09-30",
    matchScore: 94,
    status: "Active",
    applicantsCount: 14,
    problemDescription: "Conventional water quality testing relies on delayed lab analysis, causing slow responses to industrial effluent spills and microbial spikes. Departments need real-time, low-power IoT optical sensors paired with AI edge anomaly detection.",
    expectedOutcomes: [
      "Sub-2-second alert latency for heavy metal spikes & pH anomalies",
      "Sensor uptime of >99.5% with solar back-up in field conditions",
      "Integration with central Command & Control Centre (ICCC) APIs"
    ],
    eligibility: [
      "DPIIT-recognized Startups (TRL 5 or higher)",
      "Patent or proprietary algorithm for optical spectroscopy / electrochemical sensing",
      "Zero turnover requirement (Relaxed per Startup India Procurement Guidelines)"
    ]
  },
  {
    id: "CHALLENGE-2026-02",
    title: "Autonomous Swarm Drone System for Critical Infrastructure Inspection",
    department: "Ministry of Defence & Oil Security Board",
    sector: "Aerospace & Defence",
    budgetGrant: 5000000,
    procurementScale: 80000000,
    sandboxDuration: "120 Days",
    location: "Jaisalmer Field Test Site",
    deadline: "2026-10-15",
    matchScore: 88,
    status: "Active",
    applicantsCount: 9,
    problemDescription: "Highways and oil pipelines require round-the-clock perimeter monitoring. Manual patrolling is hazardous and weather-restricted. Need coordinated multi-drone autonomous flight with thermal computer vision.",
    expectedOutcomes: [
      "Autonomous waypoint navigation without GPS lock (optical flow fallback)",
      "Real-time pipeline leakage detection with geotagged infrared overlay",
      "Secure encrypted telemetry compliant with CERT-In standards"
    ],
    eligibility: [
      "DGCA-compliant drone hardware architecture",
      "Indigenous manufacturing content > 50%",
      "Demonstrated flight endurance of at least 45 minutes"
    ]
  },
  {
    id: "CHALLENGE-2026-03",
    title: "Decentralized Microgrid Solar Load Balancer with Edge AI",
    department: "Ministry of New & Renewable Energy",
    sector: "Clean Energy",
    budgetGrant: 2500000,
    procurementScale: 18000000,
    sandboxDuration: "60 Days",
    location: "Leh Solar Microgrid Sandbox",
    deadline: "2026-10-05",
    matchScore: 76,
    status: "Active",
    applicantsCount: 22,
    problemDescription: "Remote rural microgrids suffer from frequency fluctuations and battery degradation due to uneven load spikes. Need an intelligent load balancing controller.",
    expectedOutcomes: [
      "Reduction in battery peak degradation by >25%",
      "Predictive load shedding based on local solar radiation forecasting",
      "Plug-and-play retrofit with legacy transformers"
    ],
    eligibility: [
      "TRL 6+ power electronics hardware prototype",
      "Open-standard Modbus/MQTT protocol compliance"
    ]
  },
  {
    id: "CHALLENGE-2026-04",
    title: "Automated Municipal Waste Sorting using Hyperspectral Computer Vision",
    department: "Swachh Bharat Mission (Urban)",
    sector: "Smart Municipalities",
    budgetGrant: 4000000,
    procurementScale: 32000000,
    sandboxDuration: "90 Days",
    location: "Indore Municipal Solid Waste Facility",
    deadline: "2026-09-20",
    matchScore: 82,
    status: "Active",
    applicantsCount: 18,
    problemDescription: "Manual waste segregation at material recovery facilities is unsafe and inefficient. Require robotic arm pickers guided by high-speed hyperspectral vision.",
    expectedOutcomes: [
      "Sorting throughput of at least 2.5 tonnes/hour",
      "Plastic polymer classification accuracy > 92%",
      "Continuous operation capability in high-dust environments"
    ],
    eligibility: [
      "DPIIT registered startup",
      "Demonstrated robotic actuator integration"
    ]
  }
];

export const INITIAL_STARTUP_PROFILE = {
  id: "ST-892341",
  companyName: "AeroSens Technologies Pvt Ltd",
  tagline: "Next-Gen Optical IoT & Edge AI for Public Infrastructure",
  dpiitId: "DPIIT-ST-892341",
  dpiitVerified: true,
  foundedYear: 2022,
  teamSize: 16,
  location: "Bengaluru, Karnataka",
  trlLevel: "TRL 7 - System Prototype Validated in Operational Environment",
  gemSellerId: "GEM-ST-449102",
  gemVerified: true,
  turnover: "₹1.4 Cr (Annual)",
  category: "DeepTech / Smart Cities / Environmental Sensing",
  pitchDeckUrl: "https://example.com/docs/aerosens-pitch.pdf",
  website: "https://aerosens.tech",
  contactEmail: "gov-relations@aerosens.tech",
  contactPhone: "+91 98765 43210",
  bio: "AeroSens develops low-cost, ultra-reliable optical spectroscopy sensors powered by edge AI models. Our technology enables continuous real-time monitoring of fluid purity, gas emissions, and industrial effluent without manual sampling.",
  certifications: [
    { name: "DPIIT Startup Recognition", verified: true, docId: "CERT-DPIIT-2022" },
    { name: "ISO 27001 Information Security", verified: true, docId: "CERT-ISO-9001" },
    { name: "CE & FCC Hardware Compliance", verified: true, docId: "CERT-HW-88" },
    { name: "GeM Startup Runway 2.0 Badge", verified: true, docId: "GEM-BADGE-2024" }
  ],
  pastPilots: [
    { client: "Pune Municipal Corporation", project: "River Water Toxicity Early Warning", outcome: "Succesfully reduced contamination alert delay by 85%" },
    { client: "Surat Smart City Development Ltd", project: "Industrial Effluent Channel Monitoring", outcome: "Deployed across 12 monitoring stations with 99.4% uptime" }
  ]
};

export const INITIAL_APPLICATIONS = [
  {
    id: "APP-901",
    challengeId: "CHALLENGE-2026-01",
    challengeTitle: "AI-Powered Real-Time Water Quality Monitoring for Smart Cities",
    department: "Ministry of Jal Shakti / Urban Development",
    startupId: "ST-892341",
    startupName: "AeroSens Technologies Pvt Ltd",
    submittedAt: "2026-08-10",
    status: "PILOT_ACTIVE", // Options: SUBMITTED, ELIGIBILITY_VERIFIED, EXPERT_REVIEW, PILOT_APPROVED, PILOT_ACTIVE, COMPLETED_SCALE_READY
    currentStageIndex: 4, // 0: Submitted, 1: Verification, 2: Expert Review, 3: Pilot Approved, 4: Pilot Active, 5: Scale Procurement
    grantAmount: 3500000,
    disbursedAmount: 2000000,
    proposedSolution: "Deploy 12 custom AeroSpectra-V3 multi-wavelength optical sensors across Varanasi WTP inlets with an edge Raspberry Pi CM4 AI node predicting BOD, COD, pH, and heavy metal concentrations continuously.",
    proposalScore: {
      total: 94,
      technicalFeasibility: 96,
      costEffectiveness: 92,
      publicImpact: 98,
      compliance: 100
    },
    expertReviews: [
      {
        expertName: "Dr. K. R. Ramanathan",
        role: "Chief Scientist, CSIR-NEERI",
        score: 95,
        remarks: "Outstanding sensor miniaturization. The edge neural network architecture compensates effectively for turbidity drift. Strong candidate for municipal pilot."
      },
      {
        expertName: "Smt. Sunita Verma",
        role: "Director of Digital Governance, MeitY",
        score: 93,
        remarks: "DPIIT and GeM compliance fully verified. Sandbox milestone breakdown is realistic and well-costed."
      }
    ],
    timeline: [
      { stage: "Proposal Submitted", date: "2026-08-10", status: "completed", note: "Submitted online via ProcureX portal" },
      { stage: "Eligibility & Document Verification", date: "2026-08-12", status: "completed", note: "DPIIT, GST, and TRL-7 credentials verified" },
      { stage: "Expert Panel Scoring", date: "2026-08-18", status: "completed", note: "Scored 94/100 across technical & compliance metrics" },
      { stage: "Sandbox Pilot Sanctioned", date: "2026-08-22", status: "completed", note: "Sanction Order #JAL-SANDBOX-2026/89 issued" },
      { stage: "Sandbox Deployment & KPI Execution", date: "2026-09-01", status: "in_progress", note: "Milestone #3 under technical review" },
      { stage: "GeM Direct Procurement Scale-Up", date: "Pending", status: "upcoming", note: "Subject to final pilot validation sign-off" }
    ]
  },
  {
    id: "APP-902",
    challengeId: "CHALLENGE-2026-02",
    challengeTitle: "Autonomous Swarm Drone System for Critical Infrastructure Inspection",
    department: "Ministry of Defence & Oil Security Board",
    startupId: "ST-771029",
    startupName: "CyberGuard India Solutions",
    submittedAt: "2026-08-25",
    status: "EXPERT_REVIEW",
    currentStageIndex: 2,
    grantAmount: 5000000,
    disbursedAmount: 0,
    proposedSolution: "Autonomous flight swarm using mesh network radios and thermal vision edge processing for leak detection.",
    proposalScore: {
      total: 87,
      technicalFeasibility: 88,
      costEffectiveness: 84,
      publicImpact: 90,
      compliance: 86
    },
    expertReviews: [
      {
        expertName: "Group Capt. R. S. Bhadauria (Retd.)",
        role: "Defence Drone Assessor",
        score: 87,
        remarks: "Solid hardware architecture. Need further testing under optical GPS-denied conditions."
      }
    ],
    timeline: [
      { stage: "Proposal Submitted", date: "2026-08-25", status: "completed", note: "Submission logged" },
      { stage: "Eligibility Verification", date: "2026-08-28", status: "completed", note: "DGCA registration verified" },
      { stage: "Expert Panel Scoring", date: "2026-09-02", status: "in_progress", note: "Review panel scoring underway" }
    ]
  }
];

export const INITIAL_PILOT = {
  id: "PILOT-2026-89",
  applicationId: "APP-901",
  challengeTitle: "AI-Powered Real-Time Water Quality Monitoring",
  department: "Ministry of Jal Shakti / Varanasi Smart City",
  location: "Varanasi Municipal Water Treatment Plant Sandbox Zone A",
  startDate: "2026-08-25",
  endDate: "2026-11-25",
  totalGrant: 3500000,
  disbursedGrant: 2000000,
  healthStatus: "Optimal",
  kpis: [
    { name: "Sensor Accuracy Rate", target: 95.0, current: 98.4, unit: "%", status: "exceeded" },
    { name: "Alert Latency", target: 5.0, current: 1.8, unit: "sec", status: "exceeded" },
    { name: "System Operational Uptime", target: 99.0, current: 99.7, unit: "%", status: "on_track" },
    { name: "Daily Water Samples Processed", target: 10000, current: 14400, unit: "samples", status: "exceeded" }
  ],
  milestones: [
    {
      id: "M1",
      title: "Baseline Setup & Hardware Calibration",
      description: "Installation of 12 AeroSpectra optical sensor nodes at plant inlet channels and solar battery integration.",
      dueDate: "2026-08-30",
      grantShare: 1000000,
      status: "APPROVED", // Options: PENDING_SUBMISSION, SUBMITTED, APPROVED, REJECTED
      submittedDate: "2026-08-28",
      approvedDate: "2026-08-30",
      evidenceDocUrl: "https://example.com/docs/milestone-1-calibration.pdf",
      remarks: "Field inspector confirmed all 12 nodes online with zero calibration drift."
    },
    {
      id: "M2",
      title: "Real-Time Telemetry & ICCC API Integration",
      description: "Establish SSL-encrypted MQTT stream to Varanasi Smart City Integrated Command & Control Centre.",
      dueDate: "2026-09-05",
      grantShare: 1000000,
      status: "APPROVED",
      submittedDate: "2026-09-04",
      approvedDate: "2026-09-05",
      evidenceDocUrl: "https://example.com/docs/milestone-2-api.pdf",
      remarks: "API integration validated by NIC software team. Push latency verified at 1.8s."
    },
    {
      id: "M3",
      title: "30-Day Stress Testing & Chemical Anomaly Detection",
      description: "Continuous 30-day autonomous monitoring with simulated heavy metal spike test runs.",
      dueDate: "2026-09-25",
      grantShare: 1000000,
      status: "SUBMITTED", // Pending review by GO
      submittedDate: "2026-09-05",
      approvedDate: null,
      evidenceDocUrl: "https://example.com/docs/milestone-3-stresstest.pdf",
      remarks: "Submitted by AeroSens. Awaiting Government Officer sign-off."
    },
    {
      id: "M4",
      title: "Final Independent Validation & Scale Blueprint",
      description: "Third-party audit by CSIR-NEERI & draft GeM direct procurement dossier creation.",
      dueDate: "2026-11-20",
      grantShare: 500000,
      status: "PENDING_SUBMISSION",
      submittedDate: null,
      approvedDate: null,
      evidenceDocUrl: null,
      remarks: "Scheduled following completion of Milestone 3."
    }
  ]
};

export const INITIAL_PROCUREMENT = {
  id: "PROC-2026-901",
  applicationId: "APP-901",
  startupName: "AeroSens Technologies Pvt Ltd",
  challengeTitle: "AI-Powered Real-Time Water Quality Monitoring",
  department: "Ministry of Jal Shakti",
  gemComplianceScore: 98,
  status: "SCALE_RECOMMENDED", // Options: IN_PILOT, SCALE_RECOMMENDED, GEM_LISTED, CONTRACT_AWARDED
  auditPassed: true,
  exemptionRule: "Rule 194 of GFR 2017 & GeM Startup Runway Direct Procurement Clause for Proven Pilots",
  scalePackage: {
    recommendedUnits: 150,
    estimatedOrderValue: 37500000, // ₹3.75 Cr
    targetDistricts: ["Varanasi", "Prayagraj", "Kanpur", "Haridwar", "Patna"],
    deploymentTimelineMonths: 6
  },
  certificate: {
    issueDate: "2026-09-05",
    certificateNo: "SIH-PROCUREX-CERT-2026/8901",
    signatory: "Joint Secretary, Ministry of Jal Shakti & CEO, GeM"
  }
};
