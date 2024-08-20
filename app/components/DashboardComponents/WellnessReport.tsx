"use client";
import { useEffect, useState } from "react";
import { Evaluation } from "./Dashboard";
import { Category } from "@/app/constants/tiers";
import DashboardGraphCard from "./DashboardGraphCard";
import Image from "next/image";
import infologo from "../../../public/images/infologo.png";
import { Tooltip } from "react-tooltip";

import "./Dashboard.scss";
import "./ReportingDashboard.scss";
import "./WellnessReport.scss";

type WellnessReportProps = {
  evaluation: Evaluation;
};

export default function WellnessReport({ evaluation }: WellnessReportProps) {
  const [isExpired, setIsExpired] = useState<boolean>();

  useEffect(() => {
    const today = new Date();
    if (evaluation && today < evaluation.expirationDate) {
      setIsExpired(true);
    } else {
      setIsExpired(false);
    }
  }, []);
  return (
    <div>
      {!isExpired && evaluation && (
        <div className="temp-results">
          Below are temporary results as the evaluation campaign is not yet
          complete. Please check back on{" "}
          {new Date(evaluation.expirationDate).toLocaleDateString()} for
          complete results.
        </div>
      )}
      <div className="title-elements">
        <div className="reporting-dashboard-title">
          <p>
            <b>Wellness Report for:</b> {evaluation?.name}
          </p>
        </div>
        <div className="color-legend">
          <div className="gradeA">
            <div className="gradeAColor"></div>
            <p className="grade-text">
              <b>Grade A/B</b>
            </p>
          </div>
          <div className="gradeC">
            <div className="gradeCColor"></div>
            <p className="grade-text">
              <b>Grade C</b>
            </p>
          </div>
          <div className="gradeD">
            <div className="gradeDColor"></div>
            <p className="grade-text">
              <b>Grade D</b>
            </p>
          </div>
        </div>
      </div>
      <div className="dashboard-card-container">
        {evaluation &&
          evaluation.categoryIds.includes(
            Category.SAFETY_AND_WELLNESS.toString()
          ) && (
            <>
              <div className="category-title">
                <p className="category-text">Safety & Wellness </p>
                <Image
                  id="info-logo-safety"
                  src={infologo}
                  alt="infologo"
                  className="info-logo-category"
                ></Image>
                <Tooltip
                  anchorSelect="#info-logo-safety"
                  className="tool-tip-box"
                >
                  <h2 className="tool-tip-box-title">Safety/Wellness Graph</h2>
                  <p className="tool-tip-box-description">
                    Environmental interaction with athletes as it influences
                    their ability to accept and manage their emotions and cope
                    with challenges in sport.
                  </p>
                </Tooltip>
              </div>
              <DashboardGraphCard
                evaluationId={evaluation._id}
                categoryId={Category.SAFETY_AND_WELLNESS}
              />
            </>
          )}
        {evaluation &&
          evaluation.categoryIds.includes(Category.DEVELOPMENT.toString()) && (
            <>
              <div className="category-title">
                <p className="category-text">Development </p>
                <Image
                  src={infologo}
                  id="info-logo-development"
                  alt="infologo"
                  className="info-logo-category"
                ></Image>
                <Tooltip
                  anchorSelect="#info-logo-development"
                  className="tool-tip-box"
                >
                  <h2 className="tool-tip-box-title">Development Graph</h2>
                  <p className="tool-tip-box-description">
                    A place in which athletes are and feel psychologically safe
                    with access to basic mental health support.
                  </p>
                </Tooltip>
              </div>
              <DashboardGraphCard
                evaluationId={evaluation._id}
                categoryId={Category.DEVELOPMENT}
              />
            </>
          )}
        {evaluation &&
          evaluation.categoryIds.includes(Category.CULTURE.toString()) && (
            <>
              <div className="category-title">
                <p className="category-text">Culture</p>{" "}
                <Image
                  src={infologo}
                  id="info-logo-culture"
                  alt="infologo"
                  className="info-logo-category"
                ></Image>
                <Tooltip
                  anchorSelect="#info-logo-culture"
                  className="tool-tip-box"
                >
                  <h2 className="tool-tip-box-title">Culture Graph</h2>
                  <p className="tool-tip-box-description">
                    Monitoring, protection and nurturing of athletes&apos;
                    connection, sense of belonging and well-developed support
                    system.
                  </p>
                </Tooltip>
              </div>
              <DashboardGraphCard
                evaluationId={evaluation._id}
                categoryId={Category.CULTURE}
              />
            </>
          )}
      </div>
    </div>
  );
}
