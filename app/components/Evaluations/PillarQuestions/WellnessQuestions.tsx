"use client";
import {
  WellnessQuestion,
  wellnessQuestions,
} from "@/app/constants/evaluationQuestions";
import { FormProvider, useForm } from "react-hook-form";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import { RadioInput } from "../../Inputs/RadioInput";
import { evaluationResponseOptions } from "@/app/constants/evaluationResponseOptions";
import infologo from "../../../../public/images/infologo.png";
import { useSearchParams } from "next/navigation";
import { separateStrings } from "@/app/constants/helperFunctions";
import horizontallogowhite from "../../../../public/images/logo-horizontal-white.png";
import {
  calculateScore,
  writeAttributeScore,
  writeCategoryScore,
  writePillarScore,
} from "../EvaluationHelperFunctions";
import { useEffect, useState } from "react";

import "./EmotionalWellnessQuestions.scss";

// type WellnessQuestionsProps = {
//   onSubmit: (formData: unknown) => void;
//   questions: WellnessQuestion[];
//   isUnder18: boolean;
// };

export default function WellnessQuestions() {
  const searchParams = useSearchParams();
  const individualId = searchParams.get("id") || "";
  const isUnder18 = searchParams.get("minor") === "true" ? true : false;
  const categoryIds = searchParams.get("catIds");
  const categoryIdList =
    typeof categoryIds === "string" ? separateStrings(categoryIds) : [];
  const responses = searchParams.get("res");
  const responsesList =
    typeof responses === "string" ? separateStrings(responses) : [];

  const [evaluationWellnessQuestions, setEvaluationWellnessQuestions] =
    useState<WellnessQuestion[]>([]);
  const [
    totalEvaluationWellnessQuestions,
    setTotalEvaluationWellnessQuestions,
  ] = useState<WellnessQuestion[]>([]);

  const [isFinalPage, setIsFinalPage] = useState<boolean>(false);
  const [showTimerMessage, setShowTimerMessage] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(50);

  useEffect(() => {
    let tempWellnessQuestions: WellnessQuestion[] = [];
    let numberQuestionsOnPage = 10;
    categoryIdList.forEach((category) => {
      let catWellnessQuestions = wellnessQuestions.filter((question) =>
        question.categoryIds.includes(Number(category))
      );
      catWellnessQuestions.forEach((question) => {
        if (!tempWellnessQuestions.find((q) => q.id === question.id)) {
          tempWellnessQuestions.push(question);
        }
      });
    });
    setTotalEvaluationWellnessQuestions(tempWellnessQuestions);

    // if only one page
    if (tempWellnessQuestions.length <= 10) {
      setEvaluationWellnessQuestions(tempWellnessQuestions);
      setIsFinalPage(true);
    } else {
      // if 1st page with more pages after
      if (responsesList.length === 0) {
        setEvaluationWellnessQuestions(tempWellnessQuestions.slice(0, 10));
      } else if (tempWellnessQuestions.length <= 20) {
        // if 2nd page is final page
        const questions = tempWellnessQuestions.filter(
          (element, index) => index >= 10
        );
        setEvaluationWellnessQuestions(questions);
        numberQuestionsOnPage = questions.length;
        setIsFinalPage(true);
      } else if (tempWellnessQuestions.length > 20) {
        // if 2nd page with one more page
        if (responsesList.length === 20) {
          setEvaluationWellnessQuestions(
            tempWellnessQuestions.filter(
              (element, index) => index >= 10 && index < 20
            )
          );
        }
        // if 3rd page
        else {
          const questions = tempWellnessQuestions.filter(
            (element, index) => index >= 20
          );
          setEvaluationWellnessQuestions(questions);
          numberQuestionsOnPage = questions.length;
          setIsFinalPage(true);
        }
      }
    }
    setTimer(numberQuestionsOnPage * 5);
    let timer = setInterval(() => {
      setTimer((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  }, []);

  const onSubmitWellnessQuestions = async (formData: any) => {
    // if timer not finished
    if (timer !== 0) {
      setShowTimerMessage(true);
    } else {
      setShowTimerMessage(false);
      if (isFinalPage) {
        const pillarIdList = [1, 2, 3];
        const attributeIdList = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        ];

        categoryIdList.forEach((categoryId) => {
          let categoryResponses = [];
          for (const key in formData) {
            const response = formData[key];
            const questionId = key;
            const question = totalEvaluationWellnessQuestions.find(
              (question) => question.id === Number(questionId)
            );
            if (question?.categoryIds.includes(Number(categoryId))) {
              categoryResponses.push(response);
            }
          }
          for (let i = 0; i < responsesList.length - 1; i += 2) {
            const questionId = responsesList[i];
            const response = Number(responsesList[i + 1]);
            const question = totalEvaluationWellnessQuestions.find(
              (question) => question.id === Number(questionId)
            );
            if (question?.categoryIds.includes(Number(categoryId))) {
              categoryResponses.push(response);
            }
          }
          const categoryScore = calculateScore(categoryResponses);
          writeCategoryScore(individualId, categoryScore, Number(categoryId));

          pillarIdList.forEach((pillarId) => {
            let pillarResponses = [];
            for (const key in formData) {
              const response = formData[key];
              const questionId = key;
              const question = totalEvaluationWellnessQuestions.find(
                (question) => question.id === Number(questionId)
              );
              if (
                question?.categoryIds.includes(Number(categoryId)) &&
                question?.pillarIds.includes(Number(pillarId))
              ) {
                pillarResponses.push(response);
              }
            }
            for (let i = 0; i < responsesList.length - 1; i += 2) {
              const questionId = responsesList[i];
              const response = Number(responsesList[i + 1]);
              const question = totalEvaluationWellnessQuestions.find(
                (question) => question.id === Number(questionId)
              );
              if (
                question?.categoryIds.includes(Number(categoryId)) &&
                question?.pillarIds.includes(Number(pillarId))
              ) {
                pillarResponses.push(response);
              }
            }
            const pillarScore = calculateScore(pillarResponses);
            writePillarScore(pillarScore, pillarId, individualId, categoryId);
          });
        });

        let concernAttributes = [];
        attributeIdList.forEach((attributeId) => {
          let attributeResponses = [];
          for (const key in formData) {
            const response = formData[key];
            const questionId = key;
            const question = totalEvaluationWellnessQuestions.find(
              (question) => question.id === Number(questionId)
            );
            if (question?.attributeIds.includes(attributeId)) {
              attributeResponses.push(response);
            }
          }
          for (let i = 0; i < responsesList.length - 1; i += 2) {
            const questionId = responsesList[i];
            const response = Number(responsesList[i + 1]);
            const question = totalEvaluationWellnessQuestions.find(
              (question) => question.id === Number(questionId)
            );
            if (question?.attributeIds.includes(attributeId)) {
              attributeResponses.push(response);
            }
          }
          if (attributeResponses.length > 0) {
            const attributeScore = calculateScore(attributeResponses);
            writeAttributeScore(individualId, attributeScore, attributeId);
            if (attributeScore < 0.5) {
              concernAttributes.push(attributeId);
            }
          }
        });

        if (concernAttributes.length > 0) {
          window.location.href = `/pages/concernQuestions?id=${individualId}&ca=${concernAttributes.toString()}`;
        } else {
          window.location.href = "/pages/evaluationCompleted";
        }
      } else {
        for (const key in formData) {
          const response = formData[key];
          const questionId = key;
          responsesList.push(questionId);
          responsesList.push(response);
        }
        window.location.href = `/pages/wellnessQuestions?id=${individualId}&minor=${isUnder18}&catIds=${categoryIds.toString()}&res=${responsesList.toString()}`;
      }
    }

    // if (triggersConcern(totalPillarScore)) {
    //   console.log("in triggers abuse");
    //   setShowConcernQuestions(true);
    //   setShowWellnessQuestions(false);
    // } else {
    //   window.location.href = `/pages/physicalWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${categoryIdList.toString()}&catScores=${categoryScores.toString()}`;
    //   // if (nextCategoryIds.length === 0) {
    //   //   window.location = "/pages/evaluationCompleted";
    //   // } else if (nextCategoryIds) {
    //   //   const nextCategoryId = nextCategoryIds[0];
    //   //   nextCategoryIds.shift();
    //   //   if (Number(nextCategoryId) === Pillar.PHYSICAL) {
    //   //     window.location = `/pages/physicalWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${nextCategoryIds.toString()}`;
    //   //   } else if (Number(nextCategoryId) === Pillar.SOCIAL) {
    //   //     window.location = `/pages/socialWellnessEvaluation?id=${individualId}&minor=${isUnder18}&catIds=${nextCategoryIds.toString()}`;
    //   //   }
    //   // }
    // }
  };
  const formMethods = useForm();
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = formMethods;
  return (
    <>
      <header className="evaluation-header">
        <Image
          src={horizontallogowhite}
          alt="horizontallogo"
          objectFit="contain"
          className="header-logo"
        ></Image>
      </header>
      <div className="emotional-wellness-questions-container">
        <h2 className="evaluation-title">Athlete Wellness Evaluation</h2>

        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmitWellnessQuestions)}>
            {evaluationWellnessQuestions.map((question) => {
              return (
                <div key={question.id}>
                  <div className="question-and-help-text">
                    <p className="question">
                      {isUnder18 && question.under18Question
                        ? question.under18Question
                        : question.question}
                    </p>
                    {!isUnder18 && question.helpText && (
                      <div>
                        <Image
                          id={`info-logo-${question.id}`}
                          src={infologo}
                          alt="infologo"
                          width={24}
                        ></Image>
                        <Tooltip
                          className="info-tool-tip"
                          anchorSelect={`#info-logo-${question.id}`}
                        >
                          <p>{question.helpText}</p>
                        </Tooltip>
                      </div>
                    )}
                    {isUnder18 && question.under18HelpText && (
                      <div>
                        <Image
                          id={`info-logo-${question.id}`}
                          src={infologo}
                          alt="infologo"
                          width={24}
                        ></Image>
                        <Tooltip
                          className="info-tool-tip"
                          anchorSelect={`#info-logo-${question.id}`}
                        >
                          <p>{question.under18HelpText}</p>
                        </Tooltip>
                      </div>
                    )}
                  </div>
                  <div className="response-options">
                    <RadioInput
                      inputName={`${question.id}`}
                      options={evaluationResponseOptions}
                      rules={{ required: "Please select a choice." }}
                    ></RadioInput>
                  </div>
                </div>
              );
            })}
            {showTimerMessage && (
              <p className="timer-message">
                Please make sure you are taking your time answer the questions.
                Review your answers and then click Next Page again, thanks!
              </p>
            )}
            <div className="form-footer">
              <button type="submit" className="next-page-button">
                Next Page
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
