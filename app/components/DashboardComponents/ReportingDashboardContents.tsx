"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import infologo from "../../../public/images/infologo.png";
import { Tooltip } from "react-tooltip";
import DashboardGraphCard from "./DashboardGraphCard";
import {
  calculateFinalGrade,
  calculateFinalGradeColor,
} from "@/app/constants/helperFunctions";
import { Loader } from "@/app/components/Loader/Loader";
import { useCallback, useEffect, useState } from "react";
import { Evaluation } from "./Dashboard";
import { Category } from "@/app/constants/tiers";
import { SelectDropdown, SelectOption } from "../Dropdown/SelectDropdown";

import "./Dashboard.scss";
import "./ReportingDashboard.scss";

type ReportingDashboardContentProps = {
  clientId?: string;
  isViewer: boolean;
};

export function ReportingDashboardContents({
  clientId,
  isViewer,
}: ReportingDashboardContentProps) {
  const { data: session } = useSession();

  const [isExpired, setIsExpired] = useState<boolean>();
  const [displayedEvaluation, setDisplayedEvaluation] = useState<Evaluation>();

  const [userEvaluations, setUserEvaluations] = useState<Evaluation[]>([]);
  const [userEvaluationOptions, setUserEvaluationOptions] = useState<
    SelectOption<string>[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [finalScore, setFinalScore] = useState<string>("N/A");

  console.log("user evaluation options: ", userEvaluationOptions);
  console.log("clientId", clientId);
  //console.log("userId", userId);

  const getEvaluations = useCallback(async (clientId: string) => {
    console.log("here");
    console.log(clientId);
    const res = await fetch("../api/getEvaluations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: clientId }),
    });
    const { evaluations } = await res.json();
    setUserEvaluationOptions(
      evaluations.length > 0
        ? evaluations.map((e) => {
            return {
              id: e._id,
              name: e.name,
            };
          })
        : []
    );
    setUserEvaluations(evaluations);
    setDisplayedEvaluation(evaluations[0]);
    return evaluations;
  }, []);

  useEffect(() => {
    const getEvaluationsFunction = async () => {
      console.log("in use effect dashboard");
      if (clientId) {
        const evaluations = await getEvaluations(clientId);
        let evaluationsObj = [];
        let firstEvaluation = undefined;
        if (evaluations) {
          evaluationsObj = evaluations.map((e: Evaluation) => {
            return {
              name: e.name,
              userId: e.userId,
              categoryIds: e.categoryIds,
              expirationDate: e.expirationDate,
              _id: e._id,
            };
          });
          firstEvaluation = evaluations[0];
        }
        console.log("setting user evaluation options");
        setUserEvaluations(evaluations);
        setUserEvaluationOptions(
          evaluations.length > 0
            ? evaluations.map((e) => {
                return {
                  id: e._id,
                  name: e.name,
                };
              })
            : []
        );
        setIsLoading(false);
        console.log(
          "evaluation options use effect dashboard",
          userEvaluationOptions
        );
        setDisplayedEvaluation(firstEvaluation);
        const today = new Date();
        if (displayedEvaluation && today < displayedEvaluation.expirationDate) {
          setIsExpired(true);
        } else {
          setIsExpired(false);
        }
        await calculateFinalScore(firstEvaluation);
      }
    };
    getEvaluationsFunction();
  }, [session, getEvaluations, clientId]);

  const onChangeDisplayedEvaluation = (selected: SelectOption<string>) => {
    console.log("in on change display ", selected);
    const newDisplayedEvaluation = userEvaluations.find(
      (e) => e._id === selected.id
    );
    if (newDisplayedEvaluation) setDisplayedEvaluation(newDisplayedEvaluation);
    calculateFinalScore(newDisplayedEvaluation);
  };

  const calculateFinalScore = async (evaluation: Evaluation) => {
    console.log("in calculate final score");
    if (evaluation) {
      const categories = evaluation.categoryIds;
      const evaluationId = evaluation._id;
      let finalScoreTotal = 0.0;
      for (let i = 0; i < categories.length; i++) {
        const categoryId = parseInt(categories[i]);
        const getEvalScores = await fetch(
          "../api/getEvaluationScoreByCategory",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              evaluationId,
              categoryId,
            }),
          }
        );
        const { evaluationScores } = await getEvalScores.json();
        const { categoryScores } = evaluationScores;
        const avgCategoryScore =
          categoryScores.reduce((acc, num) => acc + num, 0) /
          categoryScores.length;
        finalScoreTotal += avgCategoryScore;
        console.log(finalScoreTotal.toFixed(2));
      }
      console.log("outside loop", finalScoreTotal);
      const finalScore2 = (finalScoreTotal / categories.length).toFixed(2);
      console.log("outside loop2", finalScore2);
      setFinalScore(finalScore2);
    }
  };

  return (
    <div className="reporting-dashboard">
      {isLoading ? (
        <div className="reporting-dashboard-loader">
          <Loader />
        </div>
      ) : (
        <div>
          {userEvaluationOptions.length > 0 ? (
            <div className="dashboard-objects">
              <div className="reporting-dashboard-title-objects">
                <p className="reporting-dashboard-title">Reporting Dashboard</p>
                <SelectDropdown
                  options={userEvaluationOptions}
                  onSelectedChange={onChangeDisplayedEvaluation}
                  title="Select Evaluation to View"
                  initialValue={userEvaluationOptions.find(
                    (e) => e.id === displayedEvaluation?._id
                  )}
                />
              </div>

              {!isExpired && displayedEvaluation && (
                <div className="temp-results">
                  Below are temporary results as the evaluation campaign is not
                  yet complete. Please check back on{" "}
                  {new Date(
                    displayedEvaluation.expirationDate
                  ).toLocaleDateString()}{" "}
                  for complete results.
                </div>
              )}
              <div className="title-elements">
                <div className="reporting-dashboard-title">
                  <p>
                    <b>Wellness Report for:</b> {displayedEvaluation?.name}
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
              <div>
                <b>Overall Wellness Score: </b> {parseFloat(finalScore) * 100}
                /100 ={" "}
                <span
                  style={{
                    backgroundColor: calculateFinalGradeColor(finalScore),
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    borderRadius: "5px",
                  }}
                >
                  <b>Grade {calculateFinalGrade(finalScore)}</b>
                </span>
              </div>
              <div className="dashboard-card-container">
                {displayedEvaluation &&
                  displayedEvaluation.categoryIds.includes(
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
                          <h2 className="tool-tip-box-title">
                            Safety & Wellness
                          </h2>
                          <p className="tool-tip-box-description">
                            An athlete&#39;s perception of their sense of
                            protection from danger, risk or injury and their
                            state of being in good health, especially as they
                            actively pursue their athletic goals.
                          </p>
                        </Tooltip>
                      </div>
                      <DashboardGraphCard
                        evaluationId={displayedEvaluation._id}
                        categoryId={Category.SAFETY_AND_WELLNESS}
                      />
                    </>
                  )}
                {displayedEvaluation &&
                  displayedEvaluation.categoryIds.includes(
                    Category.DEVELOPMENT.toString()
                  ) && (
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
                          <h2 className="tool-tip-box-title">Development</h2>
                          <p className="tool-tip-box-description">
                            An athlete’s subjective experience as it pertains to
                            their habitual development of athleticism over time
                            to improve their health and fitness, enhance
                            physical performance, reduce the relative risk of
                            injury and develop their confidence and competence
                            as an individual.
                          </p>
                        </Tooltip>
                      </div>
                      <DashboardGraphCard
                        evaluationId={displayedEvaluation._id}
                        categoryId={Category.DEVELOPMENT}
                      />
                    </>
                  )}
                {displayedEvaluation &&
                  displayedEvaluation.categoryIds.includes(
                    Category.CULTURE.toString()
                  ) && (
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
                          <h2 className="tool-tip-box-title">Culture</h2>
                          <p className="tool-tip-box-description">
                            How an athlete experiences shared attitudes, values,
                            goals, and practices that characterizes your
                            organization.
                          </p>
                        </Tooltip>
                      </div>
                      <DashboardGraphCard
                        evaluationId={displayedEvaluation._id}
                        categoryId={Category.CULTURE}
                      />
                    </>
                  )}
              </div>
            </div>
          ) : (
            <div className="no-evaluations">
              {isViewer
                ? "No evaluation campaigns yet for this client"
                : "You don't have any evaluation campaigns yet. Head to the New Evaluation page to create your first evaluation."}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
