"use client";

import { QuestionScreen } from "@/components/QuestionScreen";
import React, { useState } from "react";
import { questions } from "@/lib/questions";

function Basic() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswerSelect = async (value: string) => {
    const currentQuestion = questions[currentScreen];
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));

    // Auto-advance after a brief delay
    setTimeout(() => {
      if (currentScreen < questions.length - 1) {
        setCurrentScreen((prev) => prev + 1);
      } else {
        // submitSurvey();
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

  return (
    <div>
      <QuestionScreen
        key={`question-${currentScreen}`}
        question={questions[currentScreen]}
        totalQuestions={questions.length}
        currentQuestion={currentScreen + 1}
        selectedValue={answers[questions[currentScreen].id]}
        onSelect={handleAnswerSelect}
        onPrevious={handlePrevious}
      />
    </div>
  );
}

export default Basic;
