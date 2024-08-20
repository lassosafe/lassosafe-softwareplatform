import "./LearningModuleItem.scss";

type LearningModuleItemProps = {
  title: string;
  description: string;
  implementationTime: string;
  impactValueScore: string;
  companyValueScore: string;
  purchaseLink: string;
  attributes?: string;
};

export default function LearningModuleItem({
  title,
  description,
  implementationTime,
  impactValueScore,
  companyValueScore,
  purchaseLink,
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
      <div className="purchase-button-container">
        <a className="purchase-button" href={purchaseLink} target="_blank">
          Purchase Learning Module
        </a>
      </div>
    </div>
  );
}
