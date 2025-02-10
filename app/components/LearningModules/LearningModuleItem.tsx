/**
 * Reusable component for each Learning Module that includes
 * all the necessary fields to show the user
 */
import "./LearningModuleItem.scss";

type LearningModuleItemProps = {
  title: string;
  description: string;
  implementationTime: string;
  impactValueScore: string;
  companyValueScore: string;
  purchaseLink: string;
  attributes?: string;
  resourcePartners?: string;
};

export default function LearningModuleItem({
  title,
  description,
  implementationTime,
  impactValueScore,
  companyValueScore,
  purchaseLink,
  resourcePartners,
}: LearningModuleItemProps) {
  return (
    <div className="learning-module-item-container">
      <div className="learning-module-item-title">{title}</div>
      <div className="learning-module-item-description">{description}</div>
      <div>
        <b>Implementation Time:</b> {implementationTime}
      </div>
      <div>
        <b>Impact Value Score:</b> {impactValueScore}
      </div>
      <div>
        <b>Company Value Score:</b> {companyValueScore}{" "}
      </div>
      {resourcePartners && (
        <div>
          <b>Resource Partner: </b>
          <a
            href={resourcePartners}
            target="_blank"
            style={{ textDecoration: "underline", color: "#0000EE" }}
          >
            {" "}
            {resourcePartners}
          </a>
        </div>
      )}
      {/* <div className="purchase-button-container">
        <a className="purchase-button" href={purchaseLink} target="_blank">
          Purchase Learning Module
        </a>
      </div> */}
    </div>
  );
}
