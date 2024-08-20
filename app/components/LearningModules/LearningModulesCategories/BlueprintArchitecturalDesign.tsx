import { learningModulesList } from "@/app/components/LearningModules/LearningModulesList";
import LearningModuleItem from "../LearningModuleItem";
import "../LearningModules.scss";

export default function BlueprintArchitecturalDesign() {
  const learningModulesListFiltered = learningModulesList.filter((module) =>
    module.sku.includes("BPAD")
  );

  return (
    <div>
      <p className="learning-modules-category-title">
        Blueprint & Architectural Design Learning Modules
      </p>
      {learningModulesListFiltered.map((module) => {
        return (
          <LearningModuleItem
            key={module.sku}
            title={module.credit_title}
            description={module.credit_abstract || "N/A"}
            implementationTime={module.implementation_hours || "N/A"}
            impactValueScore={module.impact_value || "N/A"}
            companyValueScore={module.company_value || "N/A"}
            purchaseLink={`https://lassosafe.com/product/${module.sku}/`}
          />
        );
      })}
    </div>
  );
}
