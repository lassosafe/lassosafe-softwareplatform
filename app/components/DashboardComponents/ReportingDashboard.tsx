"use client";
import Image from "next/image";
import infologo from "../../../public/images/infologo.png";
import { Tooltip } from "react-tooltip";
import DashboardGraphCard from "./DashboardGraphCard";

import "./Dashboard.scss";
import "./ReportingDashboard.scss";
import { Category } from "@/app/constants/tiers";
import { useCallback, useEffect, useState } from "react";
import { Evaluation } from "./Dashboard";
import { SelectDropdown, SelectOption } from "../Dropdown/SelectDropdown";
import { useSession } from "next-auth/react";
import { DashboardHeader } from "./DashboardHeader";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Footer from "../Footer/Footer";
import { Loader } from "@/app/components/Loader/Loader";
import { Suspense } from "react";

export default function ReportingDashboard() {
  console.log("in reporting dashboard");
  //console.log("cid", selectedEvaluation.categoryIds);
  //console.log("eid", selectedEvaluation._id);
  const { data: session } = useSession();

  const [isExpired, setIsExpired] = useState<boolean>();
  const [displayedEvaluation, setDisplayedEvaluation] = useState<Evaluation>();
  const [userId, setUserId] = useState<string>("");

  const [userEvaluations, setUserEvaluations] = useState<Evaluation[]>([]);
  const [userEvaluationOptions, setUserEvaluationOptions] = useState<
    SelectOption<string>[]
  >([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  //let userEvaluations: Evaluation[] = [];
  //let userEvaluationOptions: SelectOption<string>[] = [];
  console.log("user evaluation options: ", userEvaluationOptions);

  //console.log("evaluations", evaluations);
  // console.log("evaluationsOptions", evaluationOptions);
  // console.log("displayed evaluation", displayedEvaluation);

  const getEvaluations = useCallback(async (userId: string) => {
    console.log("here");
    console.log(userId);
    const res = await fetch("../api/getEvaluations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
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

  const getUserId = useCallback(async (userEmail: string) => {
    console.log("here 2");
    const res = await fetch("../api/userExists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail }),
    });
    const { user } = await res.json();
    const userId = user;
    setUserId(userId);
    return userId;
  }, []);

  useEffect(() => {
    const getEvaluationsFunction = async () => {
      console.log("in use effect dashboard");
      if (typeof session?.user?.email === "string") {
        console.log(session?.user?.email);
        const userId = await getUserId(session?.user?.email);
        console.log(userId);
        const evaluations = await getEvaluations(userId);
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
      }
    };
    getEvaluationsFunction();
  }, [session, getEvaluations, getUserId]);

  const onChangeDisplayedEvaluation = (selected: SelectOption<string>) => {
    console.log("in on change display ", selected);
    const newDisplayedEvaluation = userEvaluations.find(
      (e) => e._id === selected.id
    );
    if (newDisplayedEvaluation) setDisplayedEvaluation(newDisplayedEvaluation);
  };

  return (
    <div className="reporting-dashboard-container">
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu />
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
                    <p className="reporting-dashboard-title">
                      Reporting Dashboard
                    </p>
                    <SelectDropdown
                      options={userEvaluationOptions}
                      onSelectedChange={onChangeDisplayedEvaluation}
                      title="Select Evaluation to View"
                      initialValue={userEvaluationOptions.find(
                        (e) => e.id === displayedEvaluation?._id
                      )}
                    />
                  </div>

                  {/* {!isExpired && displayedEvaluation && (
                    <div className="temp-results">
                      Below are temporary results as the evaluation campaign is
                      not yet complete. Please check back on{" "}
                      {new Date(
                        displayedEvaluation.expirationDate
                      ).toLocaleDateString()}{" "}
                      for complete results.
                    </div>
                  )} */}
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
                                Safety/Wellness Graph
                              </h2>
                              <p className="tool-tip-box-description">
                                Environmental interaction with athletes as it
                                influences their ability to accept and manage
                                their emotions and cope with challenges in
                                sport.
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
                              <h2 className="tool-tip-box-title">
                                Development Graph
                              </h2>
                              <p className="tool-tip-box-description">
                                A place in which athletes are and feel
                                psychologically safe with access to basic mental
                                health support.
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
                              <h2 className="tool-tip-box-title">
                                Culture Graph
                              </h2>
                              <p className="tool-tip-box-description">
                                Monitoring, protection and nurturing of
                                athletes&apos; connection, sense of belonging
                                and well-developed support system.
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
                  You don&apos;t have any evaluation campaigns yet. Head to the
                  New Evaluation page to create your first evaluation.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
