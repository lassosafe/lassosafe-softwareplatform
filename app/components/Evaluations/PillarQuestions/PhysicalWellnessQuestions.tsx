// "use client";

// import {
//   physicalAbuseQuestionsMultiAnswer,
//   physicalAbuseQuestionsSingleAnswer,
//   physicalWellnessConcernQuestions,
//   physicalWellnessQuestions,
// } from "../../../constants/evaluationQuestions";

// import Image from "next/image";
// import horizontallogowhite from "../../../../public/images/logo-horizontal-white.png";
// import "./PhysicalWellnessQuestions.scss";
// import { Pillar } from "@/app/constants/tiers";
// import {
//   calculateAndWriteAttributeScores,
//   calculateAndWritePillarScore,
//   calculateScore,
//   triggersConcern,
//   writeAbuseScores,
//   writeConcernScores,
//   writePillarScore,
// } from "@/app/components/Evaluations/EvaluationHelperFunctions";
// import { useSearchParams } from "next/navigation";
// import { separateStrings } from "@/app/constants/helperFunctions";
// import { useState } from "react";
// import ConcernQuestions from "../ConcernAndAbuseQuestions/ConcernQuestions";
// import { AbuseQuestions } from "../ConcernAndAbuseQuestions/AbuseQuestions";
// import { PossibleAbuseWarning } from "../ConcernAndAbuseQuestions/PossibleAbuseWarning";
// import WellnessQuestions from "./WellnessQuestions";
// import { useForm } from "react-hook-form";

// export default function PhysicalWellnessQuestions() {
//   const [showConcernQuestions, setShowConcernQuestions] =
//     useState<boolean>(false);
//   const [showAbuseQuestionsWarning, setShowAbuseQuestionsWarning] =
//     useState<boolean>(false);
//   const [showAbuseQuestions, setShowAbuseQuestions] = useState<boolean>(false);
//   const [showWellnessQuestions, setShowWellnessQuestions] =
//     useState<boolean>(true);
//   const searchParams = useSearchParams();
//   const individualId = searchParams.get("id") || "";
//   const isUnder18 = searchParams.get("minor") === "true" ? true : false;
//   const categoryIds = searchParams.get("catIds");
//   const categoryIdList =
//     typeof categoryIds === "string" ? separateStrings(categoryIds) : [];

//   const categoryScores = searchParams.get("catScores");
//   const [categoryScoresList, setCategoryScoresList] = useState<string[]>(
//     typeof categoryScores === "string" ? separateStrings(categoryScores) : []
//   );

//   //console.log(isUnder18);

//   const pillarId = Pillar.PHYSICAL;

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
//     writeConcernScores(pillarId, individualId, categoryIdList);

//     window.location.href = `/pages/socialWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${categoryIds}&catScores=${categoryScoresList.toString()}`;
//     // if (nextCategoryIds.length === 0) {
//     //   window.location = "/pages/evaluationCompleted";
//     // } else if (nextCategoryIds) {
//     //   const nextCategoryId = nextCategoryIds[0];
//     //   nextCategoryIds.shift();
//     //   if (Number(nextCategoryId) === Pillar.SOCIAL) {
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

//     window.location.href = `/pages/socialWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${categoryIds}&catScores=${categoryScoresList.toString()}`;
//     // if (nextCategoryIds.length === 0) {
//     //   window.location = "/pages/evaluationCompleted";
//     // } else if (nextCategoryIds) {
//     //   const nextCategoryId = nextCategoryIds[0];
//     //   nextCategoryIds.shift();
//     //   if (Number(nextCategoryId) === Pillar.SOCIAL) {
//     //     window.location = `/pages/socialWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${nextCategoryIds.toString()}`;
//     //   }
//     // }
//   };

//   const onSubmitAbuseQuestions = async (formData: unknown) => {
//     console.log("submitting abuse questions");
//     if (formData) {
//       writeAbuseScores(pillarId, individualId, categoryIdList);
//       // TO DO: get attribute score and overwrite that
//     }

//     onSkipAbuseWarning();
//   };

//   const onSubmitWellnessQuestions = async (formData: unknown) => {
//     categoryIdList.forEach((categoryId) => {
//       let pillarResponses = [];
//       let categoryResponses = [];
//       for (const key in formData) {
//         const response = formData[key];
//         const questionId = key;
//         const question = physicalWellnessQuestions.find(
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
//       categoryScoresList.push(categoryTotal.toString());

//       categoryScoresList.push(categoryTotalMax.toString());
//     });

//     let allPillarResponses = [];
//     for (const key in formData) {
//       allPillarResponses.push(formData[key]);
//     }
//     const totalPillarScore = calculateScore(allPillarResponses);
//     calculateAndWriteAttributeScores(
//       formData,
//       physicalWellnessQuestions,
//       individualId,
//       pillarId
//     );

//     if (triggersConcern(totalPillarScore)) {
//       console.log("in triggers abuse");
//       setShowConcernQuestions(true);
//       setShowWellnessQuestions(false);
//     } else {
//       window.location.href = `/pages/socialWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${categoryIds}&catScores=${categoryScoresList.toString()}`;
//       // if (nextCategoryIds.length === 0) {
//       //   window.location = "/pages/evaluationCompleted";
//       // } else if (nextCategoryIds) {
//       //   const nextCategoryId = nextCategoryIds[0];
//       //   nextCategoryIds.shift();
//       //   if (Number(nextCategoryId) === Pillar.SOCIAL) {
//       //     window.location = `/pages/socialWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${nextCategoryIds.toString()}`;
//       //   }
//       // }
//     }
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
//       <div className="physical-wellness-questions-container">
//         <h2 className="evaluation-title">Athlete Wellness Evaluation</h2>
//         <h2 className="evaluation-title-2">Physical Wellness</h2>
//         {showWellnessQuestions && (
//           <WellnessQuestions
//             onSubmit={onSubmitWellnessQuestions}
//             questions={physicalWellnessQuestions.filter((question) =>
//               categoryIdList.includes(question.categoryId.toString())
//             )}
//             isUnder18={isUnder18}
//           />
//         )}

//         {showConcernQuestions && (
//           <ConcernQuestions
//             onSubmit={onSubmitConcernQuestions}
//             questions={physicalWellnessConcernQuestions}
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
//             questionsSingleAnswer={physicalAbuseQuestionsSingleAnswer}
//             questionsMultiAnswer={physicalAbuseQuestionsMultiAnswer}
//           />
//         )}
//       </div>
//     </>
//   );
// }
