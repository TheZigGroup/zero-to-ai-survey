import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Option {
  value: string;
  label: string;
  points: number;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface QuestionScreenProps {
  question: Question;
  totalQuestions: number;
  currentQuestion: number;
  selectedValue?: string;
  onSelect: (value: string) => void;
  onPrevious: () => void;
}

export function QuestionScreen({
  question,
  totalQuestions,
  currentQuestion,
  selectedValue,
  onSelect,
  onPrevious,
}: QuestionScreenProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col"
    >
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="p-4">
          <button
            onClick={onPrevious}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
        <Progress value={progress} className="h-1" />
      </header>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-2xl w-full space-y-12">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-4xl font-light"
          >
            {question.text}
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {question.options.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * (index + 1) }}
                onClick={() => onSelect(option.value)}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  selectedValue === option.value
                    ? "bg-black text-white"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{option.label}</span>
                  <span className={`text-sm font-medium ml-4 ${
                    selectedValue === option.value
                      ? "text-white"
                      : "text-gray-500"
                  }`}>
                    {option.points} {option.points === 1 ? 'point' : 'points'}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-4 text-center text-sm text-gray-500">
        <p>Press ↑↓ to navigate options, Enter to confirm</p>
      </footer>
    </motion.div>
  );
}