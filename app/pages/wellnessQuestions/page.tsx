import WellnessQuestions from "@/app/components/Evaluations/PillarQuestions/WellnessQuestions";
import { Suspense } from "react";

export default function wellnessEvaluationPage() {
  return (
    <Suspense>
      <WellnessQuestions />
    </Suspense>
  );
}
