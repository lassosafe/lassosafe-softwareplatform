"use client";
/**
 * Dashboard for the home page upon login
 */

import "./Dashboard.scss";

import { DashboardHeader } from "@/app/components/DashboardComponents/DashboardHeader";
import { useSession } from "next-auth/react";
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

  const { data: session } = useSession();
  console.log("session: ");
  console.log(session);

  const searchParams = useSearchParams();
  const isUmbrella = searchParams.get("isUmbrella") === "true" ? true : false;

  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu isUmbrella={isUmbrella} />
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
            <a className="quick-button" href="/pages/umbrellaSharing">
              Umbrella Sharing
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
