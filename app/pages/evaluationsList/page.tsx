import EvaluationsList from "@/app/components/Evaluations/EvaluationsList/EvaluationsList";
import { Suspense } from "react";

export default function EvaluationsListPage() {
  return (
    <Suspense>
      <EvaluationsList />
    </Suspense>
  );
}
