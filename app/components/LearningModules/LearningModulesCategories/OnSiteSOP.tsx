import LearningModuleItem from "../LearningModuleItem";
import { learningModulesList } from "@/app/components/LearningModules/LearningModulesList";
import "../LearningModules.scss";

export default function OnSiteSOP() {
  const learningModulesListFiltered = learningModulesList.filter((module) =>
    module.sku.includes("OSOP")
  );

  return (
    <div>
      <p className="learning-modules-category-title">
        On-Site SOP Learning Modules
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
            resourcePartners={module.resource_partners}
          />
        );
      })}
    </div>
  );
}
