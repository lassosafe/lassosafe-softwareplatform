"use client";
import { useState } from "react";
import "./NavigationMenu.scss";

export default function NavigationMenu() {
  const [navBarOpen, setNavBarOpen] = useState<boolean>(true);
  return (
    <nav className="navigation-bar">
      <ul className="navigation-bar-list">
        <li
          className="navigation-bar-header"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
        >
          Reporting
        </li>
        <li
          className="navigation-bar-page"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() => {
            window.location.href = "/pages/reportingDashboard";
          }}
        >
          <p>Reporting Dashboard</p>
        </li>
        <li
          className="navigation-bar-page"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() => {
            window.location.href = "/pages/methodology";
          }}
        >
          <p>Wellness Reports Methodology</p>
        </li>
        {/* <li
      className="navigation-bar-page"
      style={{ display: navBarOpen ? "inline-block" : "none" }}
    >
      <p>Data Insights</p>
    </li> */}
        <br />
        <br />
        <li
          className="navigation-bar-header"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
        >
          Evaluations
        </li>
        <br />
        <li
          className="navigation-bar-page"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() =>
            (window.location.href = "/pages/evaluationInstructions")
          }
        >
          <p>Instructions</p>
        </li>
        <li
          className="navigation-bar-page"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() => (window.location.href = "/pages/newEvaluation")}
        >
          <p>New Evaluation</p>
        </li>
        {/* <li
          className="navigation-bar-page"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() => (window.location.href = "/pages/evaluationsList")}
        >
          <p>My Evaluations List</p>
        </li> */}
        <li
          className="navigation-bar-page"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() => {
            window.location.href = "/pages/learningModules";
          }}
        >
          <div style={{ display: "flex" }}>
            <p>Learning Modules</p>
          </div>
        </li>
        <li
          className="navigation-bar-home"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() => (window.location.href = "/pages/accountInformation")}
        >
          <p>Account Settings</p>
        </li>
        <li
          className="navigation-bar-home"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() => (window.location.href = "/pages/dashboard")}
        >
          <p>Back to Home</p>
        </li>
      </ul>
    </nav>
  );
}
