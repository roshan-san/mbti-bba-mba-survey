import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { quizQuestions, calculateMBTI } from "@/data/quiz-questions";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { getProfile } from "@/server/functions/profiles";
import { createResult } from "@/server/functions/results";
import { toast } from "sonner";
import { getProfileIdServerFn, setPersonalityTypeServerFn } from "@/lib/session";

export const Route = createFileRoute("/quizz")({
  component: RouteComponent,
  loader: async () => {
    const profileId = await getProfileIdServerFn();
    if (!profileId) {
      throw redirect({ to: "/" });
    }
    // Fetch profile in loader to get name
    const profile = await getProfile({ data: { id: profileId } });
    if (!profile) {
      throw redirect({ to: "/" });
    }
    return { profileId, profile };
  },
});

function RouteComponent() {
  const navigate = useNavigate();
  const { profileId, profile } = Route.useLoaderData();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; answer: number }[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  // Initialize selected answer when question changes
  useEffect(() => {
    const existingAnswer = answers.find((a) => a.questionId === currentQuestion.id);
    setSelectedAnswer(existingAnswer?.answer ?? null);
  }, [currentQuestionIndex, currentQuestion.id, answers]);

  const handleNext = () => {
    if (selectedAnswer === null) {
      toast.error("Please select an answer");
      return;
    }

    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(
      (a) => a.questionId === currentQuestion.id
    );

    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex] = {
        questionId: currentQuestion.id,
        answer: selectedAnswer,
      };
    } else {
      newAnswers.push({
        questionId: currentQuestion.id,
        answer: selectedAnswer,
      });
    }

    setAnswers(newAnswers);

    if (isLastQuestion) {
      handleSubmit(newAnswers);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      const nextQuestion = quizQuestions[currentQuestionIndex + 1];
      const nextAnswer = newAnswers.find((a) => a.questionId === nextQuestion.id);
      setSelectedAnswer(nextAnswer?.answer ?? null);
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const prevQuestion = quizQuestions[currentQuestionIndex - 1];
      const prevAnswer = answers.find((a) => a.questionId === prevQuestion.id);
      setSelectedAnswer(prevAnswer?.answer ?? null);
    }
  };

  const handleSubmit = async (finalAnswers: { questionId: number; answer: number }[]) => {
    try {
      const personalityType = calculateMBTI(finalAnswers);
      
      await createResult({
        data: {
          profile_id: profileId!,
          answers: finalAnswers,
          personality_type: personalityType,
        },
      });

      await setPersonalityTypeServerFn({ data: { type: personalityType } });
      
      toast.success("Quiz completed!");
      navigate({ to: "/result" });
    } catch (error) {
      toast.error("Failed to save results");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile App Header */}
      <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-lg font-bold text-foreground">
                MBTI Quiz
              </h1>
              <p className="text-sm text-muted-foreground">
                Welcome, {profile?.name || "User"}!
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground mb-1">
                Question {currentQuestionIndex + 1}/{quizQuestions.length}
              </div>
              <div className="text-xs font-semibold text-primary">
                {Math.round(progress)}%
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6 pb-24">
        <div className="bg-card rounded-3xl shadow-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-card-foreground mb-6 leading-tight">
            {currentQuestion.question}
          </h2>

          <RadioGroup
            value={selectedAnswer?.toString() ?? ""}
            onValueChange={(value: string) => setSelectedAnswer(parseInt(value))}
            className="space-y-3"
          >
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`relative flex items-start p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  selectedAnswer === index
                    ? "border-primary bg-primary/10"
                    : "border-border bg-muted/50 hover:border-primary/50"
                }`}
                onClick={() => setSelectedAnswer(index)}
              >
                <RadioGroupItem
                  value={index.toString()}
                  id={`option-${index}`}
                  className="mt-0.5"
                />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex-1 ml-3 cursor-pointer text-sm leading-relaxed text-foreground font-medium"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={isFirstQuestion}
              className="flex-1 h-12 rounded-xl font-semibold disabled:opacity-50"
            >
              ← Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="flex-1 h-12 rounded-xl font-semibold disabled:opacity-50"
            >
              {isLastQuestion ? "Submit ✓" : "Next →"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
