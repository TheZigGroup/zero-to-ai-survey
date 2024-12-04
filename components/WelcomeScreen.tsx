import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface WelcomeScreenProps {
  user: {
    fullName: string;
    company: string;
    role: string;
  };
  onStart: () => void;
}

export function WelcomeScreen({ user, onStart }: WelcomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-8 relative"
    >
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-light tracking-tight"
        >
          Welcome, {user.fullName}
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-600"
        >
          Let's understand your AI journey better
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-8"
        >
          <button
            onClick={onStart}
            className="group flex flex-col items-center gap-4 transition-opacity hover:opacity-70"
          >
            <span className="text-sm text-gray-500 uppercase tracking-wider">
              Press Enter to start
            </span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}