export interface Recommendation {
    title: string;
    description: string;
    actionItems: string[];
  }
  
  export function getRecommendations(score: number, maxScore: number): Recommendation[] {
    const percentage = (score / maxScore) * 100;
  
    const recommendations: Recommendation[] = [
      {
        title: "Infrastructure Modernization",
        description: percentage < 60 
          ? "Your current infrastructure needs significant modernization to support AI initiatives."
          : "Consider further optimizing your infrastructure for AI workloads.",
        actionItems: [
          "Evaluate cloud migration opportunities",
          "Assess current data storage solutions",
          "Implement scalable computing resources"
        ]
      },
      {
        title: "Data Governance",
        description: percentage < 60
          ? "Establish core data governance practices to ensure data quality and compliance."
          : "Enhance existing data governance framework for AI readiness.",
        actionItems: [
          "Create data quality standards",
          "Implement data security measures",
          "Establish data access protocols"
        ]
      },
      {
        title: "Team Capability Building",
        description: percentage < 60
          ? "Focus on building fundamental AI/ML capabilities within your team."
          : "Advance your team's AI expertise through specialized training.",
        actionItems: [
          "Identify skill gaps",
          "Develop training programs",
          "Consider hiring AI specialists"
        ]
      }
    ];
  
    return recommendations;
  }