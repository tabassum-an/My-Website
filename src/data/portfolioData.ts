import {
  Project,
  SkillCategory,
  EducationItem,
  ExperienceItem,
  PublicationItem,
  CertificationItem,
  ExtracurricularItem,
} from '../types/portfolio';

export const personalInfo = {
  name: 'Anika Tabassum',
  title: 'Robotics & AI Engineer · Civil Engineering Graduate',
  honors: 'Graduated with Distinction · Queen Mary University of London',
  secondaryTitle: 'Researcher · STEM Educator · Humanitarian Volunteer',
  location: 'London, United Kingdom',
  email: 'tabassum.bidisha@gmail.com',
  phone: '+447466513135',
  github: 'https://github.com',
  linkedin: 'https://www.linkedin.com',
  cvPdfPath: '/assets/aistudio/Anika_Tabassum_CV_dd33be65.pdf',
  photoPath: '/assets/aistudio/anika_portrait.jpg',
  summary:
    'I am a Robotics & Artificial Intelligence graduate (MSc with Distinction) from Queen Mary University of London, with an undergraduate degree in Civil Engineering from RUET. I bring a multidisciplinary perspective to engineering — combining hands-on physical intuition with advanced machine learning, biomechanical estimation, and embedded sensor instrumentation.',
  bioParagraphs: [
    'My journey in engineering began with a curiosity about how physical structures stand and endure. Graduating with a BSc in Civil Engineering from Rajshahi University of Engineering & Technology, I spent years analyzing loads, materials, and concrete mechanics — publishing peer-reviewed research in transportation and environmental journals.',
    'As my passion for dynamic, intelligent systems evolved, I transitioned to the UK to complete an MSc in Robotics and Artificial Intelligence at Queen Mary University of London, graduating with Distinction. Here, I applied my physical principles to cognitive robotics, developing physics-structured machine learning models for sEMG muscle force estimation and designing space-rated lower-limb exoskeletons as an Airbus competition finalist.',
    'Outside the laboratory, I am an educator at heart. Having served as a STEM instructor preparing students for rigorous engineering entrance exams, I love breaking down daunting mathematical and physical concepts. I am also deeply committed to community welfare through humanitarian volunteerism and lifelong curiosity through literature and astronomy.',
  ],
  coreHighlights: [
    { label: 'Postgraduate Degree', value: 'MSc Robotics & AI (Distinction)', sub: 'Queen Mary University of London' },
    { label: 'Foundational Degree', value: 'BSc Civil Engineering', sub: 'RUET' },
    { label: 'Mentorship & Teaching', value: 'STEM Instructor', sub: 'Udvash Coaching Center (1.5 yrs)' },
    { label: 'Publications & Honors', value: '2 Journal Papers & Airbus Finalist', sub: 'Peer-reviewed research & R&D' },
  ],
};

export const personalStoryChapters = [
  {
    id: 'bridging-disciplines',
    title: 'Bridging Physical Structures with Intelligent Systems',
    tagline: 'Civil Engineering to Robotics & Cognitive AI',
    narrative:
      'Many ask why someone with a Civil Engineering degree transitions into Robotics and Artificial Intelligence. To me, the connection is profound: civil engineering teaches you to respect real-world forces, material constraints, structural equilibrium, and failure modes. When I entered robotics, this physical intuition allowed me to approach machine learning not as a black box, but as a discipline where physics-informed priors make models more robust, data-efficient, and mathematically grounded.',
  },
  {
    id: 'teaching-and-mentorship',
    title: 'Inspiring Future Engineers Through STEM',
    tagline: 'Teaching as a Craft of Empathy and Clarity',
    narrative:
      'For over a year, I stood before classrooms of ambitious students at Udvash Coaching Center, preparing them for highly competitive national engineering entrance examinations. Teaching advanced calculus and classical physics taught me that the truest test of understanding a concept is the ability to explain it simply and intuitively. Mentoring young minds and watching their confidence blossom remains one of my most rewarding experiences.',
  },
  {
    id: 'community-and-humanity',
    title: 'Community Welfare & Humanitarian Action',
    tagline: 'Engineering with a Human Heart',
    narrative:
      'Engineering ultimately exists to serve humanity. I have spent years volunteering with Quantum Foundation Bangladesh, supporting blood donation coordination and grassroots community initiatives. When the Covid-19 pandemic disrupted vulnerable livelihoods, I organized direct food and financial relief campaigns for low-income families.',
  },
  {
    id: 'curiosity-and-literature',
    title: 'Curiosity Beyond the Workbench',
    tagline: 'Literature, Astronomy & Lifelong Learning',
    narrative:
      'When I am not writing code, calibrating sensors, or reading research preprints, you will find me reading world literature (having completed the Bishwo Shahitto Kendro reading development program), exploring London, or looking up at the night sky as a member of the Astronomy & Science Society of RUET.',
  },
];

export const projectsData: Project[] = [
  {
    id: 'semg-grip-force',
    title: 'Physics-Structured sEMG Grip-Force Estimation',
    subtitle: 'Electrode Reduction & Subject-Independent Machine Learning',
    period: '2025 – 2026',
    institutionOrOrg: 'Queen Mary University of London',
    category: 'robotics-ai',
    shortDescription:
      'Developed a proof-of-concept physics-structured ML framework for subject-independent sEMG grip-force estimation, maturing theoretical concepts into an application-ready electrode-reduction pipeline.',
    fullDescription:
      'Electromyography (sEMG) interfaces often suffer from high channel counts and poor generalization across different subjects. This research developed a subject-independent machine learning pipeline that embeds physical biomechanical principles into neural representations. Validated on benchmark datasets, the model demonstrates how intelligent electrode subset selection maintains high estimation fidelity with drastically reduced computational and hardware footprint.',
    keyContributions: [
      'Engineered a physics-structured ML framework for subject-independent sEMG grip-force prediction.',
      'Executed a rigorous five-fold cross-validation testing programme on the benchmark Ninapro DB2 database.',
      'Achieved a mean held-out R² of 0.569, significantly outperforming the Random Forest baseline of 0.335 (+69.8% relative gain).',
      'Optimised hardware requirements by reducing electrode channel count by 50% (from 12 channels to 6 electrodes) with only a 0.019 drop in R², well within the strict 0.03 tolerance threshold.',
    ],
    metrics: [
      { label: 'Held-out R²', value: '0.569', detail: 'vs 0.335 Random Forest baseline' },
      { label: 'Electrode Reduction', value: '50%', detail: '12 down to 6 electrodes' },
      { label: 'Fidelity Retention', value: 'ΔR² = 0.019', detail: 'Within 0.03 strict tolerance' },
      { label: 'Benchmark', value: 'Ninapro DB2', detail: 'Five-fold cross-validation' },
    ],
    technologies: ['Python', 'Physics-Structured ML', 'Neural Networks', 'Ninapro DB2', 'PCA', 'Signal Processing'],
    interactiveDemoType: 'semg',
    highlights: ['Benchmarked on Ninapro DB2', '50% hardware sensor reduction', 'Physics-informed inductive bias'],
  },
  {
    id: 'ppg-sensor-rig',
    title: 'Electro-Optical PPG Sensor Rig',
    subtitle: 'Benchtop Assembly, Hardware Diagnostics & Calibration',
    period: '2025 – 2026',
    institutionOrOrg: 'Queen Mary University of London',
    category: 'hardware-sensing',
    shortDescription:
      'Assembled, wired, and commissioned a benchtop breadboard prototype for an electro-optical PPG sensing system from technical schematics in a collaborative team.',
    fullDescription:
      'Biomedical sensor integration requires rigorous benchtop hardware verification, continuity testing, and empirical baseline calibration. This project focused on bringing an electro-optical Photoplethysmogram (PPG) circuit from schematic diagram to a fully calibrated physical testing rig, conducting hardware fault diagnostics and characterizing optical sensor response curves against standard physical references.',
    keyContributions: [
      'Assembled, wired, and commissioned a benchtop breadboard prototype for an electro-optical PPG sensing system from technical schematics.',
      'Conducted exhaustive hardware diagnostics, continuity testing, and benchtop calibration by systematically varying circuit resistances.',
      'Performed empirical baseline calibration on optical proximity and ultrasonic sensors via physical reference standards.',
      'Collaborated within an engineering team to document commissioning protocols and baseline noise rejection strategies.',
    ],
    metrics: [
      { label: 'Circuit Verification', value: '100% Pass', detail: 'Continuity & resistance diagnostics' },
      { label: 'Sensor Modality', value: 'Electro-Optical', detail: 'Infrared & Photodetector pair' },
      { label: 'Secondary Sensors', value: 'Proximity & Ultrasonic', detail: 'Empirical reference calibrated' },
    ],
    technologies: ['Arduino', 'Breadboard Prototyping', 'PPG Circuits', 'Continuity Testing', 'Sensor Calibration', 'C++'],
    interactiveDemoType: 'ppg',
    highlights: ['Physical benchtop commissioning', 'Empirical noise calibration', 'Multi-sensor baseline validation'],
  },
  {
    id: 'universal-mobility-suite',
    title: 'Universal Mobility Suite (Lunar Exoskeleton)',
    subtitle: 'Airbus Defence and Space Competition Finalist',
    period: '2025',
    institutionOrOrg: 'Airbus Defence and Space Competition',
    category: 'space-biomechanics',
    shortDescription:
      'Led conceptual R&D of a space-rated lower-limb exoskeleton for an open-ended lunar mobility challenge, guiding the multidisciplinary proof-of-concept to the competition finals.',
    fullDescription:
      'Operating on the lunar surface imposes extreme metabolic strain on astronauts due to rigid pressurized suits and reduced gravity dynamics (1/6th g). As competition finalist in the Airbus Defence and Space lunar challenge, this project developed a lightweight, active-assistive lower-limb exoskeleton engineered to reduce metabolic cost during extravehicular activity (EVA).',
    keyContributions: [
      'Led conceptual R&D of a space-rated lower-limb exoskeleton, driving the multidisciplinary proof-of-concept through to the Airbus competition finals.',
      'Defined strict material and actuator requirements, selecting high-strength carbon-fibre composites, aerospace-grade Ti 6Al-4V titanium alloy, and series elastic actuators (SEAs) for compliant human-robot interaction.',
      'Formulated comprehensive system-level power budgets around a 2.1 kWh battery system for extended extravehicular sorties.',
      'Modeled biomechanical load profiles, projecting a 50% metabolic demand reduction during sustained lunar locomotion.',
    ],
    metrics: [
      { label: 'Metabolic Reduction', value: '50%', detail: 'Projected demand reduction on lunar regolith' },
      { label: 'System Power Budget', value: '2.1 kWh', detail: 'Space-rated battery pack sizing' },
      { label: 'Structural Materials', value: 'Carbon-Fibre & Ti 6Al-4V', detail: 'High specific strength & stiffness' },
      { label: 'Actuation Type', value: 'Series Elastic (SEA)', detail: 'Compliant robotic torque delivery' },
    ],
    technologies: ['Exoskeleton Mechanics', 'Biomechanics', 'Series Elastic Actuators', 'Ti 6Al-4V', 'Carbon-Fibre Composites', 'Power Systems'],
    interactiveDemoType: 'exoskeleton',
    highlights: ['Airbus Competition Finalist', '50% metabolic offloading', 'Space-rated systems architecture'],
  },
  {
    id: 'plastic-waste-roads',
    title: 'Utilization of Plastic Wastes in Road Construction',
    subtitle: 'Material R&D Literature Review & Structural Feasibility Study',
    period: '2021',
    institutionOrOrg: 'Rajshahi University of Engineering & Technology',
    category: 'civil-materials',
    shortDescription:
      'Comprehensive technical feasibility study evaluating polymer waste as a sustainable binder in flexible pavements, published in the Journal of Transportation Systems.',
    fullDescription:
      'Disposal of non-biodegradable plastics presents a massive global environmental challenge, while flexible asphalt pavements face rutting and cracking under increasing axle loads. This research evaluated the technology maturation of integrating high-density polymer waste as an asphalt modifier, analyzing lab-scale experimental datasets on thermal stability and mechanical flow behavior.',
    keyContributions: [
      'Conducted a comprehensive technical feasibility study evaluating the technology maturation of polymer waste as a sustainable binder in flexible pavements.',
      'Synthesised and analysed experimental lab-scale testing data from literature across multiple polymers, evaluating thermal characteristics and impact on Marshall Stability and structural flow.',
      'Determined that integrating 6% to 8% high-density polyethylene (HDPE) waste optimally enhances road durability, load-bearing resistance, and rutting resistance.',
      'Communicated technical findings clearly in a peer-reviewed academic publication.',
    ],
    metrics: [
      { label: 'Optimal Blend', value: '6% – 8%', detail: 'High-Density Polyethylene (HDPE)' },
      { label: 'Key Property', value: 'Marshall Stability', detail: 'Significant load-bearing enhancement' },
      { label: 'Publication', value: 'Peer-Reviewed', detail: 'Journal of Transportation Systems (2021)' },
    ],
    technologies: ['Material Selection', 'Marshall Stability', 'Polymer Science', 'Flexible Pavement Design', 'Technical Writing'],
    publicationRef: 'Rashid, G. M. H., Tabassum, A. & Mahfuj, R., "A Review Report on the Utilization of Plastic Wastes in Road Construction", Journal of Transportation Systems, Volume 6, Issue 2, 2021, 1-8.',
    highlights: ['Published in Journal of Transportation Systems', 'Circular economy engineering', 'Optimized 6-8% HDPE ratio'],
  },
  {
    id: 'post-disaster-shelter',
    title: 'Post-Disaster Shelter Model Construction',
    subtitle: 'Rapid-Assembly Resilient Structural Engineering Framework',
    period: '2021',
    institutionOrOrg: 'Rajshahi University of Engineering & Technology',
    category: 'civil-materials',
    shortDescription:
      'Defined structural and operational requirements for resilient emergency housing, published in the Journal of Environmental Engineering and Studies.',
    fullDescription:
      'In the aftermath of natural hazards, displaced communities urgently require rapidly deployable shelters that maintain structural integrity without excessive ecological footprint. This project engineered a paradoxical structural model that balances rapid assembly constraints with environmental sustainability and cyclic reuse.',
    keyContributions: [
      'Defined structural and operational requirements for resilient emergency housing, developing a conceptual proof-of-concept shelter model for rapid deployment.',
      'Balanced rapid assembly constraints with long-term environmental sustainability to deliver a robust engineering framework.',
      'Analyzed material lifecycle, transport packing efficiency, and structural wind/gravity load resistance.',
      'Published the resulting engineering methodology in a peer-reviewed environmental engineering journal.',
    ],
    metrics: [
      { label: 'Assembly Profile', value: 'Rapid Deployment', detail: 'Modular structural connection system' },
      { label: 'Framework Balance', value: 'Paradoxical Approach', detail: 'Speed vs Environmental Durability' },
      { label: 'Publication', value: 'Peer-Reviewed', detail: 'Journal of Environmental Eng & Studies (2021)' },
    ],
    technologies: ['AutoCAD', 'Structural Requirements', 'Emergency Architecture', 'Sustainable Materials', 'ETABS'],
    publicationRef: 'Rashid, G. M. H., Mahfuj, R. & Tabassum, A., "A Paradoxical Approach to Construct Post Disaster Shelter Model", Journal of Environmental Engineering and Studies, Volume-6, Issue-1, 2021, 39-49.',
    highlights: ['Published in peer-reviewed journal', 'Modular emergency structure', 'Sustainable lifecycle modeling'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'hardware',
    title: 'Hardware & Benchtop Testing',
    description: 'Physical prototyping, electronic breadboard commissioning, sensor diagnostics, and data acquisition.',
    skills: [
      { name: 'Breadboard Prototyping', level: 'Advanced', context: 'Rapid electronic assembly & layout' },
      { name: 'Hardware Diagnostics & Continuity', level: 'Advanced', context: 'Multimeter & benchtop verification' },
      { name: 'Sensor Calibration', level: 'Advanced', context: 'Baseline calibration against physical standards' },
      { name: 'PPG Circuits & Optical Sensing', level: 'Proficient', context: 'Photoplethysmography signal conditioning' },
      { name: 'Arduino Microcontrollers', level: 'Advanced', context: 'Embedded C++, I2C, SPI, analog telemetry' },
      { name: 'Commissioning Protocols', level: 'Proficient', context: 'Hardware test plans & diagnostic verification' },
    ],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning & Modelling',
    description: 'Biomechanics estimation, neural network architectures, few-shot algorithms, and statistical dimensionality reduction.',
    skills: [
      { name: 'Physics-Structured ML', level: 'Specialist', context: 'Integrating biomechanical inductive priors' },
      { name: 'Neural Networks (U-Net, MLP)', level: 'Advanced', context: 'Medical image segmentation & force estimation' },
      { name: 'Few-Shot Learning (Reptile)', level: 'Proficient', context: 'Meta-learning for low-sample medical imaging' },
      { name: 'Principal Component Analysis (PCA)', level: 'Advanced', context: 'Feature reduction & sensor channel selection' },
      { name: 'Adaptive Neuro-Fuzzy (ANFIS)', level: 'Proficient', context: 'Fuzzy logic inference & system identification' },
      { name: 'Cross-Validation & Benchmarking', level: 'Advanced', context: 'Subject-independent evaluation (Ninapro DB2)' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming & Computing',
    description: 'Computational scripting, algorithm development, scientific modeling, and web technologies.',
    skills: [
      { name: 'Python', level: 'Advanced', context: 'PyTorch, NumPy, SciPy, Pandas, Scikit-Learn' },
      { name: 'C++ & C', level: 'Proficient', context: 'Embedded robotics, Arduino, real-time control' },
      { name: 'MATLAB', level: 'Advanced', context: 'Numerical modeling, signal filtering, sim' },
      { name: 'JavaScript & Web Dev', level: 'Proficient', context: 'Interactive engineering dashboards & tools' },
      { name: 'Git & Version Control', level: 'Proficient', context: 'Collaborative codebases & documentation' },
    ],
  },
  {
    id: 'engineering-design',
    title: 'Engineering Design & CAD',
    description: 'Systems requirements engineering, 3D modeling, structural analysis, and material selection.',
    skills: [
      { name: 'Systems Requirements', level: 'Advanced', context: 'Power budgets, operational specs, trade studies' },
      { name: 'AutoCAD', level: 'Advanced', context: '2D technical schematics & structural drawings' },
      { name: 'SketchUp Pro', level: 'Proficient', context: '3D conceptual spatial modeling' },
      { name: 'ETABS & STAAD Pro', level: 'Advanced', context: 'Finite element structural & frame analysis' },
      { name: 'Material Selection', level: 'Advanced', context: 'Carbon-fibre, Ti 6Al-4V, polymers, composites' },
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'MSc Robotics and Artificial Intelligence',
    field: 'School of Electronic Engineering and Computer Science',
    institution: 'Queen Mary University of London',
    period: '2025 – 2026',
    location: 'London, United Kingdom',
    modules: [
      'Cognitive Robotics',
      'Machine Learning and Artificial Intelligence',
      'Medical Robotics and Surgical Techniques',
      'Deep Learning for Data and Image Analysis',
    ],
    keyProjects: [
      'Electro-optical PPG system benchtop assembly & calibration',
      'Few-Shot Learning in Medical Imaging (Reptile algorithm & U-Net architectures)',
      'Physics-Structured sEMG Grip-Force Estimation & Electrode Reduction',
    ],
    badge: 'Graduated with Distinction',
  },
  {
    degree: 'BSc Civil Engineering',
    field: 'Department of Civil Engineering',
    institution: 'Rajshahi University of Engineering & Technology (RUET)',
    period: 'Jan 2016 – Mar 2021',
    location: 'Rajshahi, Bangladesh',
    modules: [
      'Mathematics I and II (Calculus & Linear Algebra)',
      'Physics I and II (Classical Mechanics, Waves & Optics)',
      'Numerical Methods & Computer Programming',
      'Basic Electrical Engineering',
    ],
    keyProjects: [
      'Design of Water Supply and Sewerage Systems',
      'Structural Design of Reinforced Concrete and Balanced Cantilever Bridges',
      'Hydraulic Structure (Weir / Barrage) and Groundwater Resource Design',
    ],
    badge: 'First Degree',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'STEM Instructor',
    organization: 'Udvash Coaching Center',
    period: 'Jan 2022 – May 2023',
    location: 'Dhaka, Bangladesh',
    responsibilities: [
      'Tasked with preparing diverse cohorts for highly competitive engineering entrance examinations, communicating complex mathematics and physics concepts clearly to both technical and non-technical audiences, resulting in improved comprehension and strong analytical pass rates.',
      'Collaborated effectively with senior colleagues to plan, organise, and prioritise intensive lecture schedules and mock-testing programmes under tight timelines, successfully delivering structured academic support across multiple batches.',
      'Exercised people leadership in an inclusive classroom environment by adapting teaching methodologies in real time to troubleshoot open-ended analytical problems, building student confidence in tackling unfamiliar STEM challenges.',
    ],
    skillsApplied: ['Curriculum Design', 'Physics & Mathematics Pedagogy', 'Team Coordination', 'Communication'],
  },
];

export const publicationsData: PublicationItem[] = [
  {
    id: 'plastic-waste-paper',
    title: 'A Review Report on the Utilization of Plastic Wastes in Road Construction',
    authors: ['Rashid, G. M. H.', 'Tabassum, A.', 'Mahfuj, R.'],
    journal: 'Journal of Transportation Systems',
    volume: '6',
    issue: '2',
    year: 2021,
    pages: '1-8',
    abstract:
      'Non-biodegradable synthetic polymers constitute a severe environmental menace worldwide. This review investigates the feasibility of transforming discarded plastic wastes into an asphalt modifier for flexible pavement construction. Experimental literature data shows that an optimal dosage of 6% to 8% high-density polyethylene (HDPE) waste significantly increases Marshall Stability, retards rutting deformations, and optimizes binding cohesion in flexible pavements.',
    keyFinding: '6% to 8% HDPE waste significantly enhances pavement stability and rut resistance.',
    tags: ['Sustainable Materials', 'Flexible Pavement', 'Polymer Recycling', 'Marshall Stability'],
  },
  {
    id: 'disaster-shelter-paper',
    title: 'A Paradoxical Approach to Construct Post Disaster Shelter Model',
    authors: ['Rashid, G. M. H.', 'Mahfuj, R.', 'Tabassum, A.'],
    journal: 'Journal of Environmental Engineering and Studies',
    volume: '6',
    issue: '1',
    year: 2021,
    pages: '39-49',
    abstract:
      'Disaster-affected regions require rapid shelter deployment without neglecting ecological resilience and environmental safety. This paper puts forward a paradoxical structural methodology that optimizes assembly speed, light packing ratios, and structural stability against cyclonic and thermal forces, while maintaining environmental sustainability and cost economy.',
    keyFinding: 'Modular paradoxical structural system ensures rapid erection with sustainable material lifecycle.',
    tags: ['Emergency Housing', 'Structural Resilience', 'Environmental Engineering', 'Modular Design'],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    title: 'The Complete Python Bootcamp from Zero to Hero in Python',
    issuer: 'Udemy',
    focus: 'Data structures, OOP, functional programming, scripts & packages',
  },
  {
    title: 'Web Design and Development',
    issuer: 'Texlab IT',
    focus: 'Modern frontend development, responsive layouts, client-side state',
  },
  {
    title: 'Internet of Things (IOT)',
    issuer: 'Gobeshona Learning Academy',
    focus: 'Microcontrollers, sensor telemetry, wireless communications',
  },
  {
    title: 'AI in the Workplace',
    issuer: 'Northeastern University',
    focus: 'Machine learning applications, operational strategy, AI ethics',
  },
];

export const extracurricularsData: ExtracurricularItem[] = [
  {
    title: 'Community Welfare & Humanitarian Support',
    role: 'Volunteer',
    description:
      'Volunteered for several years with Quantum Foundation Bangladesh, supporting community welfare, blood donation coordination, and grassroots humanitarian initiatives.',
  },
  {
    title: 'Covid-19 Relief Donation Campaign',
    role: 'Organizer',
    description:
      'Mobilized and organised food relief and financial donations for low-income families critically affected during the pandemic lockdowns.',
  },
  {
    title: 'Astronomy & Science Society of RUET (ASSR)',
    role: 'Active Club Member & Olympiad Participant',
    description:
      'Organized scientific symposiums, stargazing workshops, and participated in the competitive 6th Bangladesh Chemistry Olympiad.',
  },
  {
    title: 'Developing the Reading Habit Program',
    role: 'Participant',
    description:
      'Completed the literature enrichment program arranged by the World-Literature Centre (Bishwo Shahitto Kendro), developing lifelong interdisciplinary reading depth.',
  },
];
