"use client";
import { useState } from "react";
import "./NavigationMenu.scss";

type NavigationMenuProps = {
  isViewer: boolean;
};

export default function NavigationMenu({ isViewer }: NavigationMenuProps) {
  const [navBarOpen, setNavBarOpen] = useState<boolean>(true);
  //const [isViewerNav, setIsViewerNav] = useState<boolean>(isViewer ?? false);
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
            window.location.href = `/pages/reportingDashboard?isViewer=${isViewer}`;
          }}
        >
          <p>Reporting Dashboard</p>
        </li>
        <li
          className="navigation-bar-page"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() => {
            window.location.href = `/pages/methodology?isViewer=${isViewer}`;
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
        {!isViewer && (
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
                (window.location.href = `/pages/evaluationInstructions?isViewer=${isViewer}`)
              }
            >
              <p>Instructions</p>
            </li>
            <li
              className="navigation-bar-page"
              style={{ display: navBarOpen ? "inline-block" : "none" }}
              onClick={() =>
                (window.location.href = `/pages/newEvaluation?isViewer=${isViewer}`)
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
            window.location.href = `/pages/learningModules?isViewer=${isViewer}`;
          }}
        >
          <div style={{ display: "flex" }}>
            <p>Learning Modules</p>
          </div>
        </li>
        {!isViewer && (
          <li
            className="navigation-bar-home"
            style={{ display: navBarOpen ? "inline-block" : "none" }}
            onClick={() =>
              (window.location.href = `/pages/viewerSharing?isViewer=${isViewer}`)
            }
          >
            <p>Umbrella Sharing</p>
          </li>
        )}
        <li
          className="navigation-bar-home"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() =>
            (window.location.href = `/pages/accountInformation?isViewer=${isViewer}`)
          }
        >
          <p>Account Settings</p>
        </li>
        <li
          className="navigation-bar-home"
          style={{ display: navBarOpen ? "inline-block" : "none" }}
          onClick={() =>
            (window.location.href = `/pages/dashboard?isViewer=${isViewer}`)
          }
        >
          <p>Back to Home</p>
        </li>
      </ul>
    </nav>
  );
}
