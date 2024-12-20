"use client";

import "../DashboardComponents/Dashboard.scss";

import Image from "next/image";
import { ReactNode, useCallback, useEffect, useState } from "react";
import ReportingDashboard from "@/app/components/DashboardComponents/ReportingDashboard";
import Methodology from "@/app/components/Methodology/Methodology";
import NewEvaluation from "@/app/components/Evaluations/CreateNewEvaluation/NewEvaluation";
import LearningModules from "@/app/components/LearningModules/LearningModules";
import { DashboardHeader } from "@/app/components/DashboardComponents/DashboardHeader";
import { useSession } from "next-auth/react";
import EvaluationInstructions from "../EvaluationInstructions/EvaluationInstructions";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Footer from "../Footer/Footer";

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

  console.log(" in dashboard");

  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu isViewer />
        <div className="home-page-components">
          <p className="welcome-text">
            Welcome to your LassoSafe SWP Umbrella Dashboard!
          </p>
          <p className="welcome-sub-text">
            Head to the tabs on the left or select one of the quick buttons
            below.
          </p>
          <div className="quick-go-to">
            <a className="quick-button" href="/pages/reportingDashboard">
              Reporting Dashboard
            </a>
            <a className="quick-button" href="/pages/methodology">
              Wellness Reports Methodology
            </a>
            <a className="quick-button" href="/pages/learningModules">
              Learning Modules
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
