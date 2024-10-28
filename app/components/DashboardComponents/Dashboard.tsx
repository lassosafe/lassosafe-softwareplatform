"use client";

import "./Dashboard.scss";

import awardlogo from "../../../public/images/award.png";
import Image from "next/image";
import { ReactNode, useCallback, useEffect, useState } from "react";
import ReportingDashboard from "@/app/components/DashboardComponents/ReportingDashboard";
import Methodology from "@/app/components/Methodology/Methodology";
import NewEvaluation from "@/app/components/Evaluations/CreateNewEvaluation/NewEvaluation";
import LearningModules from "@/app/components/LearningModules/LearningModules";
import { DashboardHeader } from "@/app/components/DashboardComponents/DashboardHeader";
import { useSession } from "next-auth/react";
import EvaluationInstructions from "../EvaluationInstructions/EvaluationInstructions";
import { SelectOption } from "../Dropdown/SelectDropdown";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Footer from "../Footer/Footer";
import { useSearchParams } from "next/navigation";

export type Evaluation = {
  name: string;
  userId: string;
  categoryIds: string[];
  expirationDate: Date;
  _id: string;
};

export default function Dashboard() {
  // const [navBarOpen, setNavBarOpen] = useState<boolean>(true);

  // let evaluationOptions: SelectOption<string>[] = [];
  // let userEvaluations: Evaluation[] = [];
  // const [selectedEvaluation, setSelectedEvaluation] = useState<Evaluation>({
  //   name: "",
  //   userId: "",
  //   categoryIds: [],
  //   expirationDate: new Date(),
  //   _id: "",
  // });

  // const [componentToShow, setComponentToShow] = useState<ReactNode>(
  //   <ReportingDashboard
  //     selectedEvaluation={selectedEvaluation}
  //     evaluationOptions={evaluationOptions}
  //     onChangeDisplayedEvaluation={onChangeDisplayedEvaluation}
  //   />
  // );

  const { data: session } = useSession();
  console.log("session: ");
  console.log(session);

  const searchParams = useSearchParams();
  const isViewer = searchParams.get("isViewer") === "true" ? true : false;

  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu isViewer={isViewer} />
        <div className="home-page-components">
          <p className="welcome-text">Welcome to your LassoSafe Dashboard!</p>
          <p className="welcome-sub-text">
            Head to the tabs on the left or select one of the quick buttons
            below.
          </p>
          <div className="quick-go-to">
            <a className="quick-button" href="/pages/reportingDashboard">
              Reporting Dashboard
            </a>
            <a className="quick-button" href="/pages/newEvaluation">
              Create New Evaluation
            </a>
            <a className="quick-button" href="/pages/learningModules">
              Learning Modules
            </a>
            <a className="quick-button" href="/pages/viewerSharing">
              Viewer Sharing
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
