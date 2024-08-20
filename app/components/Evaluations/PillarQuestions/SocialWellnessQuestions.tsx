// "use client";

// import { useState } from "react";
// import {
//   socialAbuseQuestionsMultiAnswer,
//   socialAbuseQuestionsSingleAnswer,
//   socialWellnessConcernQuestions,
//   socialWellnessQuestions,
// } from "../../../constants/evaluationQuestions";
// import Image from "next/image";
// import { FormProvider, useForm } from "react-hook-form";
// import horizontallogowhite from "../../../../public/images/logo-horizontal-white.png";

// import "./SocialWellnessQuestions.scss";
// import { Pillar } from "@/app/constants/tiers";
// import {
//   calculateAndWriteAttributeScores,
//   calculateAndWritePillarScore,
//   calculateScore,
//   triggersConcern,
//   writeAbuseScores,
//   writeCategoryScore,
//   writeConcernScores,
// } from "@/app/components/Evaluations/EvaluationHelperFunctions";
// import { useSearchParams } from "next/navigation";
// import { separateStrings } from "@/app/constants/helperFunctions";
// import { AbuseQuestions } from "../ConcernAndAbuseQuestions/AbuseQuestions";
// import ConcernQuestions from "../ConcernAndAbuseQuestions/ConcernQuestions";
// import { PossibleAbuseWarning } from "../ConcernAndAbuseQuestions/PossibleAbuseWarning";
// import WellnessQuestions from "./WellnessQuestions";

// export default function SocialWellnessQuestions() {
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
//   const [categoryScoresList, setCategoryScoreList] = useState<string[]>(
//     typeof categoryScores === "string" ? separateStrings(categoryScores) : []
//   );

//   const pillarId = Pillar.SOCIAL;

//   const onSubmitWellnessQuestions = async (formData: any) => {
//     categoryIdList.forEach((categoryId) => {
//       let pillarResponses = [];
//       let categoryResponses = [];
//       for (const key in formData) {
//         const response = formData[key];
//         const questionId = key;
//         const question = socialWellnessQuestions.find(
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
//       socialWellnessQuestions,
//       individualId,
//       pillarId
//     );

//     console.log("cs list", categoryScoresList);
//     console.log("cat ids", categoryIdList);
//     const numberCategories = categoryIdList.length;
//     for (let i = 0; i < numberCategories; i++) {
//       const categoryId = categoryIdList[i];
//       const scoreTotal =
//         Number(categoryScoresList[0 + 2 * i]) +
//         Number(categoryScoresList[numberCategories * 2 + 2 * i]) +
//         Number(categoryScoresList[numberCategories * 4 + 2 * i]);
//       const scoreMax =
//         Number(categoryScoresList[1 + 2 * i]) +
//         Number(categoryScoresList[1 + numberCategories * 2 + 2 * i]) +
//         Number(categoryScoresList[1 + numberCategories * 4 + 2 * i]);
//       const categoryScore = scoreTotal / scoreMax;
//       writeCategoryScore(individualId, categoryScore, Number(categoryId));
//     }

//     if (triggersConcern(totalPillarScore)) {
//       console.log("in triggers abuse");
//       setShowConcernQuestions(true);
//       setShowWellnessQuestions(false);
//     } else {
//       window.location.href = "/pages/evaluationCompleted";
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
//     window.location.href = "/pages/evaluationCompleted";
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
//     window.location.href = "/pages/evaluationCompleted";
//   };

//   const onSubmitAbuseQuestions = async (formData: unknown) => {
//     // no abuse answers if no form data
//     if (!formData) {
//       // writing pillar and category scores to be concern
//       writeConcernScores(pillarId, individualId, categoryIdList);
//     } else {
//       writeAbuseScores(pillarId, individualId, categoryIdList);
//       // TO DO: get attribute score and overwrite that
//     }
//     onSkipAbuseWarning();
//   };

//   const formMethods = useForm();
//   const {
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
//       <div className="social-wellness-questions-container">
//         <h2 className="evaluation-title">Athlete Wellness Evaluation</h2>
//         <h2 className="evaluation-title-2">Social Wellness</h2>
//         {showWellnessQuestions && (
//           <WellnessQuestions
//             onSubmit={onSubmitWellnessQuestions}
//             questions={socialWellnessQuestions.filter((question) =>
//               categoryIdList.includes(question.categoryId.toString())
//             )}
//             isUnder18={isUnder18}
//           />
//         )}
//         {showConcernQuestions && (
//           <ConcernQuestions
//             onSubmit={onSubmitConcernQuestions}
//             questions={socialWellnessConcernQuestions}
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
//             questionsSingleAnswer={socialAbuseQuestionsSingleAnswer}
//             questionsMultiAnswer={socialAbuseQuestionsMultiAnswer}
//           />
//         )}
//       </div>
//     </>
//   );
// }
