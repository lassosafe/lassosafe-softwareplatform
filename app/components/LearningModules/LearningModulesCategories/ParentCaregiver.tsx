import LearningModuleItem from "../LearningModuleItem";
import { learningModulesList } from "@/app/components/LearningModules/LearningModulesList";
import "../LearningModules.scss";

export default function ParentCaregiver() {
  const learningModulesListFiltered = learningModulesList.filter((module) =>
    module.sku.includes("PACG")
  );

  return (
    <div>
      <p className="learning-modules-category-title">
        Parent/Caregiver Learning Modules
      </p>
      <p style={{ fontWeight: "bold" }}>Resource Partners:</p>
      <a
        href="https://assets-global.website-files.com/63ed5a01637c0a8457bc74cf/6552902542c27bd2ce3b1cbf_PH-ParentGuide%20(1).pdf"
        target="_blank"
        style={{
          textDecoration: "underline",
          marginBottom: "100",
          color: "#0000EE",
        }}
      >
        Player's Health Abuse Prevention Training Parent/Guardian Handbook
      </a>
      <div style={{ marginBottom: "2rem" }}>
        <a
          href="https://uscenterforsafesport.org/parent-and-guardian-handbook/"
          target="_blank"
          style={{
            textDecoration: "underline",
            marginBottom: "100",
            color: "#0000EE",
          }}
        >
          U.S. Center for Safe Sport Parent/Guardian Handbook
        </a>
      </div>
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
