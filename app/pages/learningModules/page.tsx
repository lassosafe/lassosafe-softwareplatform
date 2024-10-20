import LearningModules from "@/app/components/LearningModules/LearningModules";
import { Suspense } from "react";

export default function LearningModulesPage() {
  return (
    <Suspense>
      <LearningModules />
    </Suspense>
  );
}
