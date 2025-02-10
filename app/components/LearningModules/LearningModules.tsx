"use client";
/**
 * All learning modules and the side navigation to choose which 
 * learning module category to view
 */
import "./LearningModules.scss";
import { useState, ReactNode } from "react";
import AthleteSupport from "./LearningModulesCategories/AthleteSupport";
import BlueprintArchitecturalDesign from "./LearningModulesCategories/BlueprintArchitecturalDesign";
import CommunityRelations from "./LearningModulesCategories/CommunityRelations";
import CustomerRentention from "./LearningModulesCategories/CustomerRetention";
import EventProtocol from "./LearningModulesCategories/EventProtocol";
import MediaPresenceMarketing from "./LearningModulesCategories/MediaPresenceMarketing";
import MentalHealthAthlete from "./LearningModulesCategories/MentalHealthAthlete";
import MultiSportComplex from "./LearningModulesCategories/MultiSportComplex";
import OnSiteSOP from "./LearningModulesCategories/OnSiteSOP";
import ParentCaregiver from "./LearningModulesCategories/ParentCaregiver";
import SafetyOperationsPlan from "./LearningModulesCategories/SafetyOperationsPlan";
import SafetyInformation from "./LearningModulesCategories/SafetyInformationPlan";
import SportAppTechnologyProtocol from "./LearningModulesCategories/SportAppTechnologyProtocol";
import SportsMedicineAthlete from "./LearningModulesCategories/SportsMedicineAthlete";
import StaffProtocol from "./LearningModulesCategories/StaffProtocol";
import TravelLeagueRelations from "./LearningModulesCategories/TravelLeagueRelations";
import { DashboardHeader } from "../DashboardComponents/DashboardHeader";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Footer from "../Footer/Footer";
import { useSearchParams } from "next/navigation";
import LearningModuleItem from "./LearningModuleItem";
import { learningModulesList } from "./LearningModulesList";

export default function LearningModules() {
  const searchParams = useSearchParams();
  const sku = searchParams.get("sku");
  const isUmbrella = searchParams.get("isUmbrella") === "true" ? true : false;

  const [componentToShow, setComponentToShow] = useState<ReactNode>(
    sku ? (
      learningModulesList
        .filter((module) => module.sku === sku)
        .map((m) => (
          <LearningModuleItem
            key={m.sku}
            title={m.credit_title}
            description={m.credit_abstract || "N/A"}
            implementationTime={m.implementation_hours || "N/A"}
            impactValueScore={m.impact_value || "N/A"}
            companyValueScore={m.company_value || "N/A"}
            purchaseLink={`https://lassosafe.com/product/${m.sku}/`}
            resourcePartners={m.resource_partners}
          />
        ))
    ) : (
      <AthleteSupport />
    )
  );
  const [selectedTab, setSelectedTab] = useState();

  return (
    <div className="learning-modules-page">
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu isUmbrella={isUmbrella} />
        <div className="learning-modules-container">
          <div>
            <div className="learning-modules-title">Learning Modules</div>
            <div className="learning-modules-card">
              <div>
                <h2 className="categories">Categories</h2>
                <nav className="navigation-bar-learning-module">
                  <ul className="navigation-bar-list active">
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() => setComponentToShow(<AthleteSupport />)}
                    >
                      Athlete Support
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() =>
                        setComponentToShow(<BlueprintArchitecturalDesign />)
                      }
                    >
                      Blueprint & Architectural Design
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() => setComponentToShow(<CommunityRelations />)}
                    >
                      Community Relations
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() => setComponentToShow(<CustomerRentention />)}
                    >
                      Customer Retention
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() => setComponentToShow(<EventProtocol />)}
                    >
                      Event Protocol
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() =>
                        setComponentToShow(<MediaPresenceMarketing />)
                      }
                    >
                      Media Presence & Marketing
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() =>
                        setComponentToShow(<MentalHealthAthlete />)
                      }
                    >
                      Mental Health Athlete
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() => setComponentToShow(<MultiSportComplex />)}
                    >
                      Multi-Sport Complex
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() => setComponentToShow(<OnSiteSOP />)}
                    >
                      On-Site SOP
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() => setComponentToShow(<ParentCaregiver />)}
                    >
                      Parent/Caregiver
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() => setComponentToShow(<SafetyInformation />)}
                    >
                      Safety Information Plan
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() =>
                        setComponentToShow(<SafetyOperationsPlan />)
                      }
                    >
                      Safety Operations Plan
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() =>
                        setComponentToShow(<SportAppTechnologyProtocol />)
                      }
                    >
                      Sport App Technology Protocol
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() =>
                        setComponentToShow(<SportsMedicineAthlete />)
                      }
                    >
                      Sports Medicine - Athlete
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() => setComponentToShow(<StaffProtocol />)}
                    >
                      Staff Protocol
                    </li>
                    <li
                      className="navigation-bar-page-learning-module"
                      onClick={() =>
                        setComponentToShow(<TravelLeagueRelations />)
                      }
                    >
                      Travel League Relations
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="learning-module-component">{componentToShow}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
