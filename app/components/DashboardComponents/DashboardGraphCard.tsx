import { PieChart, Pie, Cell, Label } from "recharts";
import HSBar from "react-horizontal-stacked-bar-chart";
import { useEffect, useState } from "react";
import Image from "next/image";
import infologo from "../../../public/images/infologo.png";

import "./DashboardGraphCard.scss";
import { Tooltip } from "react-tooltip";
import { Category, attributeNames } from "@/app/constants/tiers";
import {
  LearningModulesList,
  learningModulesList,
} from "../LearningModules/LearningModulesList";
import { adjustColor } from "@/app/constants/helperFunctions";
import { Loader } from "../Loader/Loader";

type graphDataPiece = {
  name: string;
  value: number;
  fill: string;
};

const getDataBreakdown = (scores: number[]): graphDataPiece[] => {
  let wellnessnumber = 0;
  let concernnumber = 0;
  let abusenumber = 0;

  scores.map((score) => {
    if (score > 0.71) wellnessnumber += 1;
    else if (score > 0.25) concernnumber += 1;
    else abusenumber += 1;
  });

  const categoryData: graphDataPiece[] = [];
  if (wellnessnumber > 0) {
    categoryData.push({
      name: "Grade A/B",
      value: wellnessnumber,
      fill: "#2ed8b6",
    });
  }
  if (concernnumber > 0) {
    categoryData.push({
      name: "Grade C",
      value: concernnumber,
      fill: "#ffc107",
    });
  }
  if (abusenumber > 0) {
    categoryData.push({ name: "Grade D", value: abusenumber, fill: "#ee4b2b" });
  }

  return categoryData;
};

const getDataBreakdownAttributes = (
  scores: number[],
  attributeId: number
): graphDataPiece[] => {
  let wellnessnumber = 0;
  let concernnumber = 0;
  let abusenumber = 0;

  scores.map((score) => {
    if (score > 0.71) wellnessnumber += 1;
    else if (score > 0.25) concernnumber += 1;
    else abusenumber += 1;
  });

  const attributeData: graphDataPiece[] = [];
  if (wellnessnumber > 0) {
    attributeData.push({
      name:
        attributeNames.find((name) => name.id === attributeId)?.wellnessName ||
        "",
      value: wellnessnumber,
      fill: "#2ed8b6",
    });
  }
  if (concernnumber > 0) {
    attributeData.push({
      name:
        attributeNames.find((name) => name.id === attributeId)?.concernName ||
        "",
      value: concernnumber,
      fill: "#ffc107",
    });
  }
  if (abusenumber > 0) {
    attributeData.push({
      name:
        attributeNames.find((name) => name.id === attributeId)?.abuseName || "",
      value: abusenumber,
      fill: "#ee4b2b",
    });
  }

  return attributeData;
};

const getStrategicSuggestions = (scores: number[], attributeId: number) => {
  let strategicSuggestions: LearningModulesList[] = [];
  const attributeData = getDataBreakdownAttributes(scores, attributeId);
  for (let i = 0; i < attributeData.length; i++) {
    const attributeName = attributeData[i].name;
    // learningModulesList.filter(
    //   (learningModule) =>
    //     learningModule.strategic_suggestions &&
    //     learningModule.strategic_suggestions.includes(attributeName)
    // )
    let ss = learningModulesList.filter(
      (learningModule) =>
        learningModule.strategic_suggestions &&
        learningModule.strategic_suggestions.includes(attributeName)
    );
    for (let i = 0; i < 1; i++) {
      if (i < ss.length) {
        strategicSuggestions.push(ss[i]);
      }
    }
  }

  return strategicSuggestions;
};

type DashboardGraphCardProps = {
  evaluationId: string;
  categoryId: number;
};

const getEvaluationScores = async (
  evaluationId: string,
  categoryId: Category
) => {
  const response = await fetch("../api/getEvaluationScoreByCategory", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      evaluationId,
      categoryId,
    }),
  });
  const { evaluationScores } = await response.json();
  console.log("in get evaluation scores");
  console.log(evaluationId);
  console.log(categoryId);
  console.log(evaluationScores);
  return evaluationScores;
};

export default function DashboardGraphCard({
  evaluationId,
  categoryId,
}: DashboardGraphCardProps) {
  const [categoryScores, setCategoryScores] = useState<number[]>([]);
  const [mentalEmotionalScores, setMentalEmotionalScores] = useState<number[]>(
    []
  );
  const [socialScores, setSocialScores] = useState<number[]>([]);
  const [physicalScores, setPhysicalScores] = useState<number[]>([]);
  const [mentalEmotionalAttribute1Scores, setMentalEmotionalAttribute1Scores] =
    useState<number[]>([]);
  const [mentalEmotionalAttribute2Scores, setMentalEmotionalAttribute2Scores] =
    useState<number[]>([]);
  const [physicalAttribute1Scores, setPhysicalAttribute1Scores] = useState<
    number[]
  >([]);
  const [physicalAttribute2Scores, setPhysicalAttribute2Scores] = useState<
    number[]
  >([]);
  const [socialAttribute1Scores, setSocialAttribute1Scores] = useState<
    number[]
  >([]);
  const [socialAttribute2Scores, setSocialAttribute2Scores] = useState<
    number[]
  >([]);

  const [showAttributeSection, setShowAttributeSection] =
    useState<boolean>(false);

  const [selectedPiece, setSelectedPiece] = useState<graphDataPiece>();
  const [selectedPieceClass, setSelectedPieceClass] =
    useState<string>("unclicked");

  const totalValue = getDataBreakdown(categoryScores).reduce(function (a, b) {
    return a + b.value;
  }, 0);

  const totalValueMentalEmotionalScore = getDataBreakdown(
    mentalEmotionalScores
  ).reduce(function (a, b) {
    return a + b.value;
  }, 0);

  const totalValuePhysicalScore = getDataBreakdown(physicalScores).reduce(
    function (a, b) {
      return a + b.value;
    },
    0
  );

  const totalValueSocialScore = getDataBreakdown(socialScores).reduce(function (
    a,
    b
  ) {
    return a + b.value;
  },
  0);

  const totalValueMentalEmotionalAttribute1Score = getDataBreakdown(
    mentalEmotionalAttribute1Scores
  ).reduce(function (a, b) {
    return a + b.value;
  }, 0);

  const totalValueMentalEmotionalAttribute2Score = getDataBreakdown(
    mentalEmotionalAttribute2Scores
  ).reduce(function (a, b) {
    return a + b.value;
  }, 0);

  const totalValuePhysicalAttribute1Score = getDataBreakdown(
    physicalAttribute1Scores
  ).reduce(function (a, b) {
    return a + b.value;
  }, 0);

  const totalValuePhysicalAttribute2Score = getDataBreakdown(
    physicalAttribute2Scores
  ).reduce(function (a, b) {
    return a + b.value;
  }, 0);

  const totalValueSocialAttribute1Score = getDataBreakdown(
    socialAttribute1Scores
  ).reduce(function (a, b) {
    return a + b.value;
  }, 0);

  const totalValueSocialAttribute2Score = getDataBreakdown(
    socialAttribute2Scores
  ).reduce(function (a, b) {
    return a + b.value;
  }, 0);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getEvalScores = async () => {
      console.log("in use effect");
      const evaluationScores = await getEvaluationScores(
        evaluationId,
        categoryId
      );
      console.log("evaluationScores", evaluationScores);
      const {
        categoryScores,
        mentalEmotionalScores,
        physicalScores,
        socialScores,
        mentalEmotionalAttribute1Scores,
        mentalEmotionalAttribute2Scores,
        physicalAttribute1Scores,
        physicalAttribute2Scores,
        socialAttribute1Scores,
        socialAttribute2Scores,
      } = evaluationScores;
      setCategoryScores(categoryScores);
      setMentalEmotionalScores(mentalEmotionalScores);
      setPhysicalScores(physicalScores);
      setSocialScores(socialScores);
      setMentalEmotionalAttribute1Scores(mentalEmotionalAttribute1Scores);
      setMentalEmotionalAttribute2Scores(mentalEmotionalAttribute2Scores);
      setPhysicalAttribute1Scores(physicalAttribute1Scores);
      setPhysicalAttribute2Scores(physicalAttribute2Scores);
      setSocialAttribute1Scores(socialAttribute1Scores);
      setSocialAttribute2Scores(socialAttribute2Scores);
      setSelectedPiece(
        getDataBreakdown(categoryScores).filter(
          (d) => d.name === "Grade A/B"
        )[0] ??
          getDataBreakdown(categoryScores).filter(
            (d) => d.name === "Grade C"
          )[0] ??
          getDataBreakdown(categoryScores).filter(
            (d) => d.name === "Grade D"
          )[0]
      );

      console.log(
        "ss",
        getStrategicSuggestions(
          mentalEmotionalAttribute1Scores,
          1 + 2 * (categoryId - 1)
        )
      );
      setIsLoading(false);
    };
    getEvalScores();
  }, [categoryId, evaluationId]);

  console.log(categoryScores);
  console.log(mentalEmotionalScores);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {categoryScores.length > 0 ? (
            <div className="dashboard-graph-card">
              <div className="chart-elements">
                <PieChart width={250} height={200} className="pie-chart">
                  <Pie
                    data={getDataBreakdown(categoryScores)}
                    cx={120}
                    cy={100}
                    innerRadius={55}
                    outerRadius={90}
                    //fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {getDataBreakdown(categoryScores).map((entry, index) => (
                      <Cell
                        style={{ outline: "none" }}
                        key={entry.name}
                        fill={entry.fill}
                        stroke={
                          selectedPiece?.name === entry?.name
                            ? adjustColor(entry.fill, -25)
                            : entry.fill
                        }
                        strokeWidth={5}
                        onClick={(e) => {
                          setSelectedPiece(entry);
                          setSelectedPieceClass("clicked");
                        }}
                        className={selectedPieceClass}
                      />
                    ))}

                    {selectedPiece && (
                      <Label
                        className="center-label"
                        width={25}
                        position="center"
                      >
                        {`${selectedPiece?.value} participant${
                          selectedPiece?.value > 1 ? `s` : ``
                        } \n ${Math.trunc(
                          (selectedPiece.value / totalValue) * 100
                        )}%`}
                      </Label>
                    )}
                  </Pie>
                </PieChart>

                <div className="horizontal-bar-charts">
                  <div className="pillar-row">
                    <div className="pillar-title">
                      <p className="pillar-text">Mental/Emotional</p>
                      {/* <Image
                        id="info-logo-mental"
                        src={infologo}
                        alt="infologo"
                        className="info-logo-dashboard-card"
                      ></Image> */}
                      {/* <Tooltip
                        anchorSelect="#info-logo-mental"
                        className="tool-tip-box"
                      >
                        <h2 className="tool-tip-box-title">TBD</h2>
                        <p className="tool-tip-box-description">TBD</p>
                      </Tooltip> */}
                    </div>

                    <div
                      className="hs-bar"
                      style={{
                        fontSize: "85%",
                        color: "gray",
                        textAlign: "center",
                      }}
                    >
                      <HSBar
                        id={"hs-bar"}
                        height={20}
                        width={200}
                        style={{ padding: 100 }}
                        showTextDown
                        data={getDataBreakdown(mentalEmotionalScores).map(
                          (d) => {
                            return {
                              value: d.value,
                              color: d.fill,
                              description: `${d.value} participant${
                                d.value > 1 ? "s" : ""
                              } (${Math.trunc(
                                (d.value / totalValueMentalEmotionalScore) * 100
                              )}%)`,
                            };
                          }
                        )}
                      />
                      {/* <Tooltip anchorSelect="#hs-bar" className="tool-tip-box">
            Test
          </Tooltip> */}
                    </div>
                  </div>
                  <div className="pillar-row">
                    <div className="pillar-title">
                      <p className="pillar-text">Physical</p>
                      {/* <Image
                        id="info-logo-physical"
                        src={infologo}
                        alt="infologo"
                        className="info-logo-dashboard-card"
                      ></Image> */}
                      {/* <Tooltip anchorSelect="#info-logo-physical" className="tool-tip-box">
            <h2 className="tool-tip-box-title">TBD</h2>
            <p className="tool-tip-box-description">TBD</p>
          </Tooltip> */}
                    </div>
                    <div
                      className="hs-bar"
                      style={{
                        fontSize: "85%",
                        color: "gray",
                      }}
                    >
                      <HSBar
                        id="#hs-bar-physical"
                        height={20}
                        width={200}
                        style={{ padding: 100 }}
                        showTextDown
                        data={getDataBreakdown(physicalScores).map((d) => {
                          return {
                            value: d.value,
                            color: d.fill,
                            description: `${d.value} participant${
                              d.value > 1 ? "s" : ""
                            } (${Math.trunc(
                              (d.value / totalValuePhysicalScore) * 100
                            )}%)`,
                          };
                        })}
                      />
                      {/* <Tooltip anchorSelect="#hs-bar-physical" className="tool-tip-box">
            Test
          </Tooltip> */}
                    </div>
                  </div>

                  <div className="pillar-row">
                    <div className="pillar-title">
                      <p className="pillar-text">Social</p>
                      {/* <Image
                        id="info-logo-social"
                        src={infologo}
                        alt="infologo"
                        className="info-logo-dashboard-card"
                      ></Image> */}
                      {/* <Tooltip anchorSelect="#info-logo-social" className="tool-tip-box">
            <h2 className="tool-tip-box-title">TBD</h2>
            <p className="tool-tip-box-description">TBD</p>
          </Tooltip> */}
                    </div>
                    <div
                      className="hs-bar"
                      style={{
                        fontSize: "85%",
                        color: "gray",
                      }}
                    >
                      <HSBar
                        id="hs-bar-social"
                        height={20}
                        width={250}
                        style={{
                          padding: 100,
                          //fontColor: "gray",
                          //fontSize: "70%",
                          //color: "gray",
                        }}
                        showTextDown
                        fontColor="rgb(128, 128, 128)"
                        data={getDataBreakdown(socialScores).map((d) => {
                          return {
                            value: d.value,
                            color: d.fill,
                            description: `${d.value} participant${
                              d.value > 1 ? "s" : ""
                            } (${Math.trunc(
                              (d.value / totalValueSocialScore) * 100
                            )}%)`,
                          };
                        })}
                      />
                      {/* <Tooltip anchorSelect="#hs-bar-social" className="tool-tip-box">
            Test
          </Tooltip> */}
                    </div>
                  </div>
                </div>
                {/* <div className="report-buttons">
        <button className="report-button">Full Report</button>
        <button className="report-button">Strategic Suggestions</button>
      </div> */}
              </div>
              <button
                className="expand-button"
                onClick={() => setShowAttributeSection(!showAttributeSection)}
              >
                {`${
                  showAttributeSection ? `Close` : `Expand for`
                } Attributes and Strategic Suggestions`}
              </button>
              {showAttributeSection && (
                <div className="attribute-section">
                  <div className="attribute">
                    <p className="attribute-label">
                      Mental & Emotional Attributes
                    </p>
                    <div
                      className="hs-bar"
                      style={{
                        fontSize: "85%",
                        color: "gray",
                      }}
                    >
                      {mentalEmotionalAttribute1Scores.length > 0 && (
                        <div>
                          <HSBar
                            id={"hs-bar"}
                            height={20}
                            width={200}
                            style={{ padding: 100 }}
                            showTextDown
                            data={getDataBreakdownAttributes(
                              mentalEmotionalAttribute1Scores,
                              1 + 2 * (categoryId - 1)
                            ).map((d) => {
                              return {
                                value: d.value,
                                color: d.fill,
                                name: d.name,
                                description: `${d.value} participant${
                                  d.value > 1 ? "s" : ""
                                } (${Math.trunc(
                                  (d.value /
                                    totalValueMentalEmotionalAttribute1Score) *
                                    100
                                )}%)`,
                              };
                            })}
                          />
                          {getStrategicSuggestions(
                            mentalEmotionalAttribute1Scores,
                            1 + 2 * (categoryId - 1)
                          ).length > 0 && (
                            <div className="strategic-suggestions">
                              <p className="strategic-suggestions-label">
                                Strategic Suggestions:{" "}
                              </p>
                              {getStrategicSuggestions(
                                mentalEmotionalAttribute1Scores,
                                1 + 2 * (categoryId - 1)
                              ).map((ss) => {
                                return (
                                  <div
                                    key={ss.sku}
                                    className="strategic-suggestions-item"
                                  >
                                    <a
                                      href={`https://lassosafe.com/product/${ss.sku}/`}
                                      target="_blank"
                                      className="strategic-suggestions-button"
                                    >
                                      {ss.credit_title}
                                    </a>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                      {mentalEmotionalAttribute2Scores.length > 0 && (
                        <div>
                          <HSBar
                            id={"hs-bar"}
                            height={20}
                            width={200}
                            style={{ padding: 100 }}
                            showTextDown
                            data={getDataBreakdownAttributes(
                              mentalEmotionalAttribute2Scores,
                              2 + 2 * (categoryId - 1)
                            ).map((d) => {
                              return {
                                value: d.value,
                                color: d.fill,
                                name: d.name,
                                description: `${d.value} participant${
                                  d.value > 1 ? "s" : ""
                                } (${Math.trunc(
                                  (d.value /
                                    totalValueMentalEmotionalAttribute2Score) *
                                    100
                                )}%)`,
                              };
                            })}
                          />
                          {getStrategicSuggestions(
                            mentalEmotionalAttribute2Scores,
                            2 + 2 * (categoryId - 1)
                          ).length > 0 && (
                            <div className="strategic-suggestions">
                              <p className="strategic-suggestions-label">
                                Strategic Suggestions:{" "}
                              </p>
                              {getStrategicSuggestions(
                                mentalEmotionalAttribute2Scores,
                                2 + 2 * (categoryId - 1)
                              ).map((ss) => {
                                return (
                                  <div
                                    key={ss.sku}
                                    className="strategic-suggestions-item"
                                  >
                                    <a
                                      href={`https://lassosafe.com/product/${ss.sku}/`}
                                      target="_blank"
                                      className="strategic-suggestions-button"
                                    >
                                      {ss.credit_title}
                                    </a>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="attribute">
                    <p className="attribute-label">Physical Attributes</p>
                    <div
                      style={{
                        fontSize: "85%",
                        color: "gray",
                      }}
                    >
                      {physicalAttribute1Scores.length > 0 && (
                        <div>
                          <HSBar
                            id={"hs-bar"}
                            height={20}
                            width={200}
                            style={{ padding: 100 }}
                            showTextDown
                            data={getDataBreakdownAttributes(
                              physicalAttribute1Scores,
                              3 + 2 * (categoryId - 1)
                            ).map((d) => {
                              return {
                                value: d.value,
                                color: d.fill,
                                name: d.name,
                                description: `${d.value} participant${
                                  d.value > 1 ? "s" : ""
                                } (${Math.trunc(
                                  (d.value /
                                    totalValuePhysicalAttribute1Score) *
                                    100
                                )}%)`,
                              };
                            })}
                          />
                          {getStrategicSuggestions(
                            physicalAttribute1Scores,
                            3 + 2 * (categoryId - 1)
                          ).length > 0 && (
                            <div className="strategic-suggestions">
                              <p className="strategic-suggestions-label">
                                Strategic Suggestions:{" "}
                              </p>
                              {getStrategicSuggestions(
                                physicalAttribute1Scores,
                                3 + 2 * (categoryId - 1)
                              ).map((ss) => {
                                return (
                                  <div
                                    key={ss.sku}
                                    className="strategic-suggestions-item"
                                  >
                                    <a
                                      href={`https://lassosafe.com/product/${ss.sku}/`}
                                      target="_blank"
                                      className="strategic-suggestions-button"
                                    >
                                      {ss.credit_title}
                                    </a>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                      {physicalAttribute2Scores.length > 0 && (
                        <div>
                          <HSBar
                            id={"hs-bar"}
                            height={20}
                            width={200}
                            style={{ padding: 100 }}
                            showTextDown
                            data={getDataBreakdownAttributes(
                              physicalAttribute2Scores,
                              4 + 2 * (categoryId - 1)
                            ).map((d) => {
                              return {
                                value: d.value,
                                color: d.fill,
                                name: d.name,
                                description: `${d.value} participant${
                                  d.value > 1 ? "s" : ""
                                } (${Math.trunc(
                                  (d.value /
                                    totalValuePhysicalAttribute2Score) *
                                    100
                                )}%)`,
                              };
                            })}
                          />
                          {getStrategicSuggestions(
                            physicalAttribute2Scores,
                            4 + 2 * (categoryId - 1)
                          ).length > 0 && (
                            <div className="strategic-suggestions">
                              <p className="strategic-suggestions-label">
                                Strategic Suggestions:{" "}
                              </p>
                              {getStrategicSuggestions(
                                physicalAttribute2Scores,
                                4 + 2 * (categoryId - 1)
                              ).map((ss) => {
                                return (
                                  <div
                                    key={ss.sku}
                                    className="strategic-suggestions-item"
                                  >
                                    <a
                                      href={`https://lassosafe.com/product/${ss.sku}/`}
                                      target="_blank"
                                      className="strategic-suggestions-button"
                                    >
                                      {ss.credit_title}
                                    </a>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="attribute">
                    <p className="attribute-label">Social Attributes</p>
                    <div
                      style={{
                        fontSize: "85%",
                        color: "gray",
                      }}
                    >
                      {socialAttribute1Scores.length > 0 && (
                        <div>
                          <HSBar
                            id={"hs-bar"}
                            height={20}
                            width={200}
                            style={{ padding: 100 }}
                            showTextDown
                            data={getDataBreakdownAttributes(
                              socialAttribute1Scores,
                              5 + 2 * (categoryId - 1)
                            ).map((d) => {
                              return {
                                value: d.value,
                                color: d.fill,
                                name: d.name,
                                description: `${d.value} participant${
                                  d.value > 1 ? "s" : ""
                                } (${Math.trunc(
                                  (d.value / totalValueSocialAttribute1Score) *
                                    100
                                )}%)`,
                              };
                            })}
                          />
                          {getStrategicSuggestions(
                            socialAttribute1Scores,
                            5 + 2 * (categoryId - 1)
                          ).length > 0 && (
                            <div className="strategic-suggestions">
                              <p className="strategic-suggestions-label">
                                Strategic Suggestions:{" "}
                              </p>
                              {getStrategicSuggestions(
                                socialAttribute1Scores,
                                5 + 2 * (categoryId - 1)
                              ).map((ss) => {
                                return (
                                  <div
                                    key={ss.sku}
                                    className="strategic-suggestions-item"
                                  >
                                    <a
                                      href={`https://lassosafe.com/product/${ss.sku}/`}
                                      target="_blank"
                                      className="strategic-suggestions-button"
                                    >
                                      {ss.credit_title}
                                    </a>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                      {socialAttribute2Scores.length > 0 && (
                        <div>
                          <HSBar
                            id={"hs-bar"}
                            height={20}
                            width={200}
                            style={{ padding: 100 }}
                            showTextDown
                            data={getDataBreakdownAttributes(
                              socialAttribute2Scores,
                              6 + 2 * (categoryId - 1)
                            ).map((d) => {
                              return {
                                value: d.value,
                                color: d.fill,
                                name: d.name,
                                description: `${d.value} participant${
                                  d.value > 1 ? "s" : ""
                                } (${Math.trunc(
                                  (d.value / totalValueSocialAttribute2Score) *
                                    100
                                )}%)`,
                              };
                            })}
                          />
                          {getStrategicSuggestions(
                            socialAttribute2Scores,
                            6 + 2 * (categoryId - 1)
                          ).length > 0 && (
                            <div className="strategic-suggestions">
                              <p className="strategic-suggestions-label">
                                Strategic Suggestions:{" "}
                              </p>
                              {getStrategicSuggestions(
                                socialAttribute2Scores,
                                6 + 2 * (categoryId - 1)
                              ).map((ss) => {
                                return (
                                  <div
                                    key={ss.sku}
                                    className="strategic-suggestions-item"
                                  >
                                    <a
                                      href={`https://lassosafe.com/product/${ss.sku}/`}
                                      target="_blank"
                                      className="strategic-suggestions-button"
                                    >
                                      {ss.credit_title}
                                    </a>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              No responses have been received for this evaluation yet. Please
              check back later!{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
