import { learningModulesList } from "@/app/components/LearningModules/LearningModulesList";
import LearningModuleItem from "../LearningModuleItem";
import "../LearningModules.scss";

export default function MentalHealthAthlete() {
  const learningModulesListFiltered = learningModulesList.filter((module) =>
    module.sku.includes("MEHA")
  );

  return (
    <div>
      <p className="learning-modules-category-title">
        Mental Health Athlete Learning Modules
      </p>
      <p style={{ fontWeight: "bold" }}>Resource Partners:</p>
      <a
        href="https://assets-global.website-files.com/63ed5a01637c0a8457bc74cf/655290101ec99aa1e59910bb_090123_Expert%20Playbook.pdf"
        target="_blank"
        style={{
          textDecoration: "underline",
          marginBottom: "100",
          color: "#0000EE",
        }}
      >
        Player's Health Expert Playbook on Athlete Safety and Risk Management
      </a>
      <div style={{ marginBottom: "2rem" }}>
        <a
          href="https://uscenterforsafesport.org/training-and-education/safesport-courses-for-all/"
          target="_blank"
          style={{
            textDecoration: "underline",
            color: "#0000EE",
          }}
        >
          U.S. Center for Safe Sport
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
