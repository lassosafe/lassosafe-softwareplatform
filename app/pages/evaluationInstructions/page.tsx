import EvaluationInstructions from "@/app/components/EvaluationInstructions/EvaluationInstructions";
import { Suspense } from "react";

export default function EvaluationInstructionsPage() {
  return (
    <Suspense>
      <EvaluationInstructions />
    </Suspense>
  );
}
