import LearningModuleItem from "../LearningModuleItem";
import { learningModulesList } from "@/app/components/LearningModules/LearningModulesList";
import "../LearningModules.scss";

export default function SafetyOperationsPlan() {
  const learningModulesListFiltered = learningModulesList.filter((module) =>
    module.sku.includes("SOPP")
  );

  return (
    <div>
      <p className="learning-modules-category-title">
        Safety Operations Plan Learning Modules
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
          href="https://eptoolkit.uscenterforsafesport.org/?_gl=1*1xn5xul*_ga*MTY0NzE1Nzg1MS4xNjg2NTAzNTI0*_ga_MBN6TFWKW0*MTcxMDY5OTYyMy4yODAuMS4xNzEwNjk5NzA3LjU1LjAuMA..&_ga=2.183058022.1791187406.1710699624-1647157851.1686503524"
          target="_blank"
          style={{
            textDecoration: "underline",
            color: "#0000EE",
          }}
        >
          U.S. Center for Safe Sport Emotional & Physical Abuse & Misconduct
          Toolkit
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
