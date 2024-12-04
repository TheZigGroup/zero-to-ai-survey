import { questions } from './questions';

export function calculateScore(answers: Record<number, string>): number {
  return Object.entries(answers).reduce((total, [questionId, selectedValue]) => {
    const question = questions.find(q => q.id === parseInt(questionId));
    if (!question) return total;
    
    const selectedOption = question.options.find(opt => opt.value === selectedValue);
    return total + (selectedOption?.points || 0);
  }, 0);
}

export function getScoreCategory(score: number, maxScore: number): {
  category: string;
  description: string;
} {
  const percentage = (score / maxScore) * 100;

  if (percentage >= 80) {
    return {
      category: "Advanced AI Readiness",
      description: "Your organization demonstrates strong readiness for AI adoption with robust infrastructure, governance, and a supportive culture.",
    };
  } else if (percentage >= 60) {
    return {
      category: "Progressive AI Readiness",
      description: "You have a solid foundation for AI implementation but may need to strengthen specific areas for optimal results.",
    };
  } else if (percentage >= 40) {
    return {
      category: "Developing AI Readiness",
      description: "Your organization shows potential but requires significant improvements in key areas before full AI adoption.",
    };
  } else {
    return {
      category: "Early Stage AI Readiness",
      description: "Focus on building fundamental infrastructure, establishing governance frameworks, and fostering a more technology-friendly culture.",
    };
  }
}