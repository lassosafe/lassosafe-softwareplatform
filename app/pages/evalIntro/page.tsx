import WellnessEvaluationIntro from "../../components/Evaluations/Intro/WellnessEvaluationIntro";
import { Suspense } from "react";

export default function evaluationIntroPage() {
  return (
    <Suspense>
      <WellnessEvaluationIntro />
    </Suspense>
  );
}
