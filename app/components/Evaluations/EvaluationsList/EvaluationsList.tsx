"use client";

import NavigationMenu from "../../NavigationMenu/NavigationMenu";
import Footer from "../../Footer/Footer";
import { DashboardHeader } from "../../DashboardComponents/DashboardHeader";

import "./EvaluationsList.scss";

export default function EvaluationsList() {
  return (
    <div className="my-evaluations-list-page">
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu />
        <div className="evaluations-list-container">
          <b>My Evaluations List</b>
        </div>
      </div>
      <Footer />
    </div>
  );
}
