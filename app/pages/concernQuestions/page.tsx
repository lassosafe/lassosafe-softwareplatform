import ConcernQuestions from "@/app/components/Evaluations/ConcernAndAbuseQuestions/ConcernQuestions";
import { Suspense } from "react";

export default function ConcernQuestionPage() {
  return (
    <Suspense>
      <ConcernQuestions />
    </Suspense>
  );
}
