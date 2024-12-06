"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";
import { questions } from "@/lib/questions";
import { calculateScore } from "@/lib/scoring";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { QuestionScreen } from "@/components/QuestionScreen";
import { ScoreScreen } from "@/components/ScoreScreen";
import { toast } from "@/components/ui/use-toast";
import { BASE_URL } from "../config";

interface User {
  fullName: string;
  email: string;
  company: string;
  role: string;
}

export default function Survey() {
  const searchParams = useSearchParams();
  // const uuid = searchParams.get("uuid");
  const [user, setUser] = useState<User | null>(null);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>("");

  // useEffect(() => {
  //   if (!uuid) {
  //     toast({
  //       title: "Error",
  //       description: "No UUID provided",
  //       variant: "destructive",
  //     });
  //     setError("No UUID provided");
  //     setLoading(false);
  //     return;
  //   }

  //   const fetchUser = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/users/${uuid}`);
  //       if (!response.ok) {
  //         toast({
  //           title: "Error",
  //           description: "Failed to fetch user data",
  //           variant: "destructive",
  //         });
  //       }
  //       const userData = await response.json();
  //       setUser(userData);
  //     } catch (err) {
  //       setError((err as Error).message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUser();
  //   console.log({ showScore, userId, currentScreen, questions, answers });
  // }, [uuid]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  const handleAnswerSelect = async (value: string) => {
    const currentQuestion = questions[currentScreen];
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));

    // Auto-advance after a brief delay
    setTimeout(() => {
      if (currentScreen < questions.length - 1) {
        setCurrentScreen((prev) => prev + 1);
      } else {
        submitSurvey();
      }
    }, 500);
  };

  const handlePrevious = () => {
    if (currentScreen > 0) {
      setCurrentScreen((prev) => prev - 1);
    } else {
      setCurrentScreen(-1);
    }
  };

  const submitSurvey = async () => {
    // if (!uuid) return;
    // try {
    //   const score = calculateScore(answers);
    //   await fetch(`${BASE_URL}/survey/submit`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ uuid, answers, score }),
    //   });
    //   setShowScore(true);
    // } catch (error) {
    //   console.error("Error submitting survey:", error);
    // }
  };

  // useKeyboardNavigation({
  //   onNext: () => {
  //     if (currentScreen === -1) {
  //       setCurrentScreen(0);
  //     } else if (answers[questions[currentScreen].id]) {
  //       handleAnswerSelect(answers[questions[currentScreen].id]);
  //     }
  //   },
  //   onPrevious: handlePrevious,
  //   canProgress: currentScreen === -1 || !!answers[questions[currentScreen].id],
  // });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  // if (error || !user) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <p className="text-red-500">{error || "User not found"}</p>
  //     </div>
  //   );
  // }

  return (
    <main className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {showScore ? (
          <ScoreScreen
            answers={answers}
            score={calculateScore(answers)}
            totalPossibleScore={questions.length * 3}
            uuid={userId}
          />
        ) : (
          <QuestionScreen
            key={`question-${currentScreen}`}
            question={questions[currentScreen]}
            totalQuestions={questions.length}
            currentQuestion={currentScreen + 1}
            selectedValue={answers[questions[currentScreen].id]}
            onSelect={handleAnswerSelect}
            onPrevious={handlePrevious}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
