"use client";
/**
 * Navigation component for home dashboard
 * Only certain values show depending on if account is Umbrella or Organization
 */
import { useState } from "react";
import "./NavigationMenu.scss";

type NavigationMenuProps = {
  isUmbrella: boolean;
};

export default function NavigationMenu({ isUmbrella }: NavigationMenuProps) {
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
            window.location.href = `/pages/reportingDashboard?isUmbrella=${isUmbrella}`;
          }}
        >
          <p>Reporting Dashboard</p>
        </li>
        <li
          className="navigation-bar-page"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() => {
            window.location.href = isUmbrella
              ? `/pages/umbrellaMethodology?isUmbrella=${isUmbrella}`
              : `/pages/methodology?isUmbrella=${isUmbrella}`;
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
        {!isUmbrella && (
          <>
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
                (window.location.href = `/pages/evaluationInstructions?isUmbrella=${isUmbrella}`)
              }
            >
              <p>Instructions</p>
            </li>
            <li
              className="navigation-bar-page"
              style={{ display: navBarOpen ? "inline-block" : "none" }}
              onClick={() =>
                (window.location.href = `/pages/newEvaluation?isUmbrella=${isUmbrella}`)
              }
            >
              <p>New Evaluation</p>
            </li>
            <li
              className="navigation-bar-page"
              style={{ display: navBarOpen ? "inline-block" : "none" }}
              onClick={() => (window.location.href = "/pages/evaluationsList")}
            >
              <p>My Evaluations List</p>
            </li>
          </>
        )}
        <li
          className="navigation-bar-header"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
        >
          Learning
        </li>
        <li
          className="navigation-bar-page"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() => {
            window.location.href = `/pages/learningModules?isUmbrella=${isUmbrella}`;
          }}
        >
          <div style={{ display: "flex" }}>
            <p>Learning Modules</p>
          </div>
        </li>
        {!isUmbrella && (
          <li
            className="navigation-bar-home"
            style={{ display: navBarOpen ? "inline-block" : "none" }}
            onClick={() =>
              (window.location.href = `/pages/umbrellaSharing?isUmbrella=${isUmbrella}`)
            }
          >
            <p>Umbrella Sharing</p>
          </li>
        )}
        <li
          className="navigation-bar-home"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() =>
            (window.location.href = `/pages/accountInformation?isUmbrella=${isUmbrella}`)
          }
        >
          <p>Account Settings</p>
        </li>
        <li
          className="navigation-bar-home"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() =>
            (window.location.href = isUmbrella
              ? `/pages/dashboard?isUmbrella=${isUmbrella}`
              : `/pages/umbrellaDashboard?isUmbrella=${isUmbrella}`)
          }
        >
          <p>Back to Home</p>
        </li>
      </ul>
    </nav>
  );
}
