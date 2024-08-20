import { AbuseQuestions } from "@/app/components/Evaluations/ConcernAndAbuseQuestions/AbuseQuestions";
import { Suspense } from "react";

export default function AbuseQuestionsPage() {
  return (
    <Suspense>
      <AbuseQuestions />
    </Suspense>
  );
}
