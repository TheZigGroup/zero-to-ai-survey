import { motion } from "framer-motion";
import { getScoreCategory } from "@/lib/scoring";
import { getRecommendations } from "@/lib/recommendations";
import { Progress } from "@/components/ui/progress";
import { questions } from "@/lib/questions";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ScoreScreenProps {
  answers: Record<number, string>;
  score: number;
  totalPossibleScore: number;
  uuid: string;
}

export function ScoreScreen({ answers, score, totalPossibleScore, uuid }: ScoreScreenProps) {
  const percentage = (score / totalPossibleScore) * 100;
  const { category, description } = getScoreCategory(score, totalPossibleScore);
  const recommendations = getRecommendations(score, totalPossibleScore);

  const getQuestionScore = (questionId: number, selectedValue: string) => {
    const question = questions.find(q => q.id === questionId);
    return question?.options.find(opt => opt.value === selectedValue)?.points || 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-light"
          >
            Your AI Readiness Score
          </motion.h1>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-48 h-48 mx-auto my-8"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl font-light">{score}</span>
                <p className="text-sm text-gray-500 mt-2">out of {totalPossibleScore}</p>
              </div>
            </div>
            {/* <Progress value={percentage} className="h-2" /> */}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-medium">{category}</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Recommendations Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-light text-center">Recommendations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-lg font-medium mb-3">{rec.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{rec.description}</p>
                <ul className="space-y-2">
                  {rec.actionItems.map((item, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-start">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Survey Link */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <Link
            href={`/enhanced-survey?uuid=${uuid}`}
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Take Enhanced Assessment
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-sm text-gray-500 mt-2">
            Get a detailed migration roadmap based on your specific needs
          </p>
        </motion.div>

        {/* Score Breakdown */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="bg-gray-50 rounded-lg p-6"
        >
          <h3 className="text-lg font-medium mb-4">Score Breakdown</h3>
          <div className="space-y-4">
            {questions.map((question) => {
              const selectedValue = answers[question.id];
              const questionScore = getQuestionScore(question.id, selectedValue);
              const selectedOption = question.options.find(opt => opt.value === selectedValue);
              
              return (
                <div key={question.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{question.text}</p>
                    <p className="text-sm text-gray-500 mt-1">{selectedOption?.label}</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="text-lg font-medium">{questionScore}</span>
                    <span className="text-sm text-gray-500">/3</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}