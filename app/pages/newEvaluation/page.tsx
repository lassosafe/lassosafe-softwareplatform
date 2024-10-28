import NewEvaluation from "@/app/components/Evaluations/CreateNewEvaluation/NewEvaluation";
import { Suspense } from "react";

export default function NewEvaluationPage() {
  return (
    <Suspense>
      <NewEvaluation />
    </Suspense>
  );
}
