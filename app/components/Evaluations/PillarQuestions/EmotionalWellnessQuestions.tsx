// "use client";

// import { useState } from "react";
// import {
//   emotionalAbuseQuestionsSingleAnswer,
//   emotionalAbuseQuestionsMultiAnswer,
//   emotionalWellnessConcernQuestions,
//   emotionalWellnessQuestions,
// } from "../../../constants/evaluationQuestions";
// import horizontallogowhite from "../../../../public/images/logo-horizontal-white.png";
// import Image from "next/image";

// import "./EmotionalWellnessQuestions.scss";
// import {
//   calculateAndWriteAttributeScores,
//   calculateAndWritePillarScore,
//   calculateScore,
//   triggersConcern,
//   writeAbuseScores,
//   writeConcernScores,
// } from "@/app/components/Evaluations/EvaluationHelperFunctions";
// import { Attribute, Category, Pillar } from "@/app/constants/tiers";
// import { useSearchParams } from "next/navigation";
// import { separateStrings } from "@/app/constants/helperFunctions";
// import { AbuseQuestions } from "../ConcernAndAbuseQuestions/AbuseQuestions";
// import ConcernQuestions from "../ConcernAndAbuseQuestions/ConcernQuestions";
// import { PossibleAbuseWarning } from "../ConcernAndAbuseQuestions/PossibleAbuseWarning";
// import WellnessQuestions from "./WellnessQuestions";
// import { useForm } from "react-hook-form";

// export default function EmotionalWellnessQuestions() {
//   const [showConcernQuestions, setShowConcernQuestions] =
//     useState<boolean>(false);
//   const [showAbuseQuestionsWarning, setShowAbuseQuestionsWarning] =
//     useState<boolean>(false);
//   const [showAbuseQuestions, setShowAbuseQuestions] = useState<boolean>(false);
//   const [showWellnessQuestions, setShowWellnessQuestions] =
//     useState<boolean>(true);
//   const [categoryScoresList, setCategoryScoresList] = useState<string>("");

//   const searchParams = useSearchParams();
//   const individualId = searchParams.get("id") || "";
//   const isUnder18 = searchParams.get("minor") === "true" ? true : false;
//   const categoryIds = searchParams.get("catIds");
//   const categoryIdList =
//     typeof categoryIds === "string" ? separateStrings(categoryIds) : [];
//   const pillarId = Pillar.MENTAL_EMOTIONAL;

//   const onSubmitWellnessQuestions = async (formData: unknown) => {
//     let categoryScores: string[] = [];
//     categoryIdList.forEach((categoryId) => {
//       let pillarResponses = [];
//       let categoryResponses = [];
//       for (const key in formData) {
//         const response = formData[key];
//         const questionId = key;
//         const question = emotionalWellnessQuestions.find(
//           (question) => question.id === Number(questionId)
//         );
//         if (question?.categoryId.toString() === categoryId) {
//           pillarResponses.push(response);
//           categoryResponses.push(response);
//         }
//       }
//       //console.log(pillarResponses);
//       //console.log(pillarId);
//       //console.log(categoryId);
//       calculateAndWritePillarScore(
//         pillarResponses,
//         individualId,
//         pillarId,
//         categoryId
//       );
//       const categoryTotal = categoryResponses.reduce((a, b) => {
//         return a + b;
//       });
//       const categoryTotalMax = categoryResponses.length * 7;
//       categoryScores.push(categoryTotal.toString());
//       categoryScores.push(categoryTotalMax.toString());
//     });
//     setCategoryScoresList(categoryScores.toString());

//     let allPillarResponses = [];
//     for (const key in formData) {
//       allPillarResponses.push(formData[key]);
//     }
//     const totalPillarScore = calculateScore(allPillarResponses);

//     calculateAndWriteAttributeScores(
//       formData,
//       emotionalWellnessQuestions,
//       individualId,
//       pillarId
//     );

//     if (triggersConcern(totalPillarScore)) {
//       console.log("in triggers abuse");
//       setShowConcernQuestions(true);
//       setShowWellnessQuestions(false);
//     } else {
//       window.location.href = `/pages/physicalWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${categoryIdList.toString()}&catScores=${categoryScores.toString()}`;
//       // if (nextCategoryIds.length === 0) {
//       //   window.location = "/pages/evaluationCompleted";
//       // } else if (nextCategoryIds) {
//       //   const nextCategoryId = nextCategoryIds[0];
//       //   nextCategoryIds.shift();
//       //   if (Number(nextCategoryId) === Pillar.PHYSICAL) {
//       //     window.location = `/pages/physicalWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${nextCategoryIds.toString()}`;
//       //   } else if (Number(nextCategoryId) === Pillar.SOCIAL) {
//       //     window.location = `/pages/socialWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${nextCategoryIds.toString()}`;
//       //   }
//       // }
//     }
//   };

//   const onSubmitConcernQuestions = async (formData: unknown) => {
//     console.log(formData);
//     for (const key in formData) {
//       const responseChoice = formData[key];
//       console.log(responseChoice);
//       if (responseChoice === 1) {
//         setShowAbuseQuestionsWarning(true);
//         setShowConcernQuestions(false);
//         return;
//       }
//     }
//     // writing pillar and category scores to be concern
//     writeConcernScores(pillarId, individualId, categoryIdList);

//     window.location.href = `/pages/physicalWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${categoryIds}&catScores=${categoryScoresList.toString()}`;

//     // if (nextCategoryIds.length === 0) {
//     //   window.location = "/pages/evaluationCompleted";
//     // } else if (nextCategoryIds) {
//     //   const nextCategoryId = nextCategoryIds[0];
//     //   nextCategoryIds.shift();
//     //   if (Number(nextCategoryId) === Pillar.PHYSICAL) {
//     //     window.location = `/pages/physicalWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${nextCategoryIds.toString()}`;
//     //   } else if (Number(nextCategoryId) === Pillar.SOCIAL) {
//     //     window.location = `/pages/socialWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${nextCategoryIds.toString()}`;
//     //   }
//     // }
//   };

//   const onContinueAbuseWarning = () => {
//     setShowAbuseQuestionsWarning(false);
//     setShowAbuseQuestions(true);
//   };

//   const onSkipAbuseWarning = () => {
//     // writing pillar and category scores to be concern
//     writeConcernScores(pillarId, individualId, categoryIdList);
//     window.location.href = `/pages/physicalWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${categoryIds}&catScores=${categoryScoresList.toString()}`;

//     // if (nextCategoryIds.length === 0) {
//     //   window.location = "/pages/evaluationCompleted";
//     // } else if (nextCategoryIds) {
//     //   const nextCategoryId = nextCategoryIds[0];
//     //   nextCategoryIds.shift();
//     //   if (Number(nextCategoryId) === Pillar.PHYSICAL) {
//     //     window.location = `/pages/physicalWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${nextCategoryIds.toString()}`;
//     //   } else if (Number(nextCategoryId) === Pillar.SOCIAL) {
//     //     window.location = `/pages/socialWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${nextCategoryIds.toString()}`;
//     //   }
//     // }
//   };

//   const onSubmitAbuseQuestions = async (formData: unknown) => {
//     console.log(formData);
//     // for (const key in formData) {
//     //   const responseChoice = formData[key];
//     //   console.log(responseChoice);
//     //   if (responseChoice === 1) {
//     //     setShowAbuseQuestionsWarning(true);
//     //     setShowConcernQuestions(false);
//     //     return;
//     //   }
//     // }
//     // no abuse answers if no form data
//     if (!formData) {
//       // writing pillar and category scores to be concern
//       writeConcernScores(pillarId, individualId, categoryIdList);
//     } else {
//       writeAbuseScores(pillarId, individualId, categoryIdList);
//       // TO DO: get attribute score and overwrite that
//     }

//     window.location.href = `/pages/physicalWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${categoryIds}&catScores=${categoryScoresList.toString()}`;

//     // if (nextCategoryIds.length === 0) {
//     //   window.location = "/pages/evaluationCompleted";
//     // } else if (nextCategoryIds) {
//     //   const nextCategoryId = nextCategoryIds[0];
//     //   nextCategoryIds.shift();
//     //   if (Number(nextCategoryId) === Pillar.PHYSICAL) {
//     //     window.location = `/pages/physicalWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${nextCategoryIds.toString()}`;
//     //   } else if (Number(nextCategoryId) === Pillar.SOCIAL) {
//     //     window.location = `/pages/socialWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${nextCategoryIds.toString()}`;
//     //   }
//     // }
//   };

//   const formMethods = useForm();
//   const {
//     handleSubmit,
//     setError,
//     formState: { errors },
//   } = formMethods;

//   return (
//     <>
//       <header className="evaluation-header">
//         <Image
//           src={horizontallogowhite}
//           alt="horizontallogo"
//           objectFit="contain"
//           className="header-logo"
//         ></Image>
//       </header>
//       <div className="emotional-wellness-questions-container">
//         <h2 className="evaluation-title">Athlete Wellness Evaluation</h2>
//         <h2 className="evaluation-title-2">Mental & Emotional Wellness</h2>
//         {showWellnessQuestions && (
//           <WellnessQuestions
//             onSubmit={onSubmitWellnessQuestions}
//             questions={emotionalWellnessQuestions.filter((question) =>
//               categoryIdList.includes(question.categoryId.toString())
//             )}
//             isUnder18={isUnder18}
//           />
//         )}
//         {showConcernQuestions && (
//           <ConcernQuestions
//             onSubmit={onSubmitConcernQuestions}
//             questions={emotionalWellnessConcernQuestions}
//           />
//         )}
//         {showAbuseQuestionsWarning && (
//           <PossibleAbuseWarning
//             onContinueAbuseQuestions={onContinueAbuseWarning}
//             onSkipAbuseQuestions={onSkipAbuseWarning}
//           />
//         )}
//         {showAbuseQuestions && (
//           <AbuseQuestions
//             onSubmit={onSubmitAbuseQuestions}
//             questionsSingleAnswer={emotionalAbuseQuestionsSingleAnswer}
//             questionsMultiAnswer={emotionalAbuseQuestionsMultiAnswer}
//           />
//         )}
//       </div>
//     </>
//   );
// }
