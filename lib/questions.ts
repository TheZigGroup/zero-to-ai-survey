export interface Question {
  id: number;
  text: string;
  options: {
    value: string;
    label: string;
    points: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Current Data Infrastructure",
    options: [
      { value: "on-premises", label: "On-Premises: All data is stored and managed on local servers", points: 1 },
      { value: "cloud-based", label: "Cloud-Based: Data infrastructure is entirely in the cloud", points: 3 },
      { value: "hybrid", label: "Hybrid: A mix of on-premises and cloud-based data storage", points: 2 },
    ],
  },
  {
    id: 2,
    text: "Data Governance Framework",
    options: [
      { value: "mature", label: "Mature: Have a well-defined data governance strategy in place", points: 3 },
      { value: "developing", label: "Developing: Working towards a comprehensive data governance framework", points: 2 },
      { value: "none", label: "None: No formal data governance practices established", points: 1 },
    ],
  },
  {
    id: 3,
    text: "Experience with Cloud-Based Platforms",
    options: [
      { value: "experienced", label: "Experienced: Team is proficient with cloud platforms", points: 3 },
      { value: "some-experience", label: "Some Experience: Limited experience with cloud technologies", points: 2 },
      { value: "no-experience", label: "No Experience: Team has no experience with cloud platforms", points: 1 },
    ],
  },
  {
    id: 4,
    text: "Need for Real-Time Analytics",
    options: [
      { value: "critical", label: "Critical: Real-time analytics are essential for operations", points: 3 },
      { value: "important", label: "Important: Beneficial but not critical", points: 2 },
      { value: "not-important", label: "Not Important: Real-time analytics are not a priority", points: 1 },
    ],
  },
  {
    id: 5,
    text: "Organizational Culture Towards Technological Change",
    options: [
      { value: "proactive", label: "Proactive: Embraces new technologies and encourages innovation", points: 3 },
      { value: "adaptive", label: "Adaptive: Open to change but requires time to adjust", points: 2 },
      { value: "resistant", label: "Resistant: Prefers traditional methods and is hesitant about change", points: 1 },
    ],
  },
];