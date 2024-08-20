"use client";

import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { RadioInput } from "../../Inputs/RadioInput";
import { yesOrNoResponseOptions } from "@/app/constants/evaluationResponseOptions";
import { FormProvider, useForm } from "react-hook-form";
import {
  AbuseQuestion,
  AbuseQuestionMultiCheckbox,
  AbuseQuestionMultiCheckboxNew,
  AbuseQuestionNew,
  abuseQuestionsMultiAnswer,
  abuseQuestionsSingleAnswer,
} from "../../../constants/evaluationQuestions";
import infologo from "../../../../public/images/infologo.png";
import horizontallogowhite from "../../../../public/images/logo-horizontal-white.png";

import "./AbuseQuestions.scss";
import { MultiCheckboxInput } from "../../Inputs/MultiCheckboxInput";
import { useSearchParams } from "next/navigation";
import { separateStrings } from "@/app/constants/helperFunctions";
import { useEffect, useState } from "react";
import { PossibleAbuseWarning } from "./PossibleAbuseWarning";

// type AbuseQuestionsProps = {
//   onSubmit: (formData: any) => void;
//   questionsSingleAnswer: AbuseQuestion[];
//   questionsMultiAnswer: AbuseQuestionMultiCheckbox[];
// };

const arrayToOptionArray = (arr: string[]) => {
  return arr.map((a, index) => ({
    value: index,
    optionLabel: a,
  }));
};

export function AbuseQuestions() {
  const formMethods = useForm();
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = formMethods;
  const searchParams = useSearchParams();
  const abuseAttributes = searchParams.get("aa");
  const abuseAttributeList =
    typeof abuseAttributes === "string" ? separateStrings(abuseAttributes) : [];
  const [evalAbuseQuestionsSA, setEvalAbuseQuestionsSA] = useState<
    AbuseQuestionNew[]
  >([]);
  const [evalAbuseQuestionsMA, setEvalAbuseQuestionsMA] = useState<
    AbuseQuestionMultiCheckboxNew[]
  >([]);

  const [showAbuseQuestionsWarning, setShowAbuseQuestionsWarning] =
    useState<boolean>(true);

  useEffect(() => {
    let tempAbuseQuestionsSA: AbuseQuestionNew[] = [];
    let tempAbuseQuestionsMA: AbuseQuestionMultiCheckboxNew[] = [];
    abuseAttributeList.forEach((attribute) => {
      let questions = abuseQuestionsSingleAnswer.filter((q) =>
        q.attributeIds.includes(Number(attribute))
      );
      questions.forEach((question) => {
        if (!tempAbuseQuestionsSA.find((q) => q.id === question.id)) {
          tempAbuseQuestionsSA.push(question);
        }
      });
      let questionsMA = abuseQuestionsMultiAnswer.filter((q) =>
        q.attributeIds.includes(Number(attribute))
      );
      questionsMA.forEach((question) => {
        if (!tempAbuseQuestionsMA.find((q) => q.id === question.id)) {
          tempAbuseQuestionsMA.push(question);
        }
      });
    });
    setEvalAbuseQuestionsSA(tempAbuseQuestionsSA);
    setEvalAbuseQuestionsMA(tempAbuseQuestionsMA);
  }, []);

  const onSubmit = async (formData: any) => {
    window.location.href = "/pages/evaluationCompleted";
  };

  const onContinueAbuseQuestions = () => {
    setShowAbuseQuestionsWarning(false);
  };

  const onSkipAbuseQuestions = () => {
    window.location.href = "/pages/evaluationCompleted";
  };

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
      {showAbuseQuestionsWarning ? (
        <PossibleAbuseWarning
          onContinueAbuseQuestions={onContinueAbuseQuestions}
          onSkipAbuseQuestions={onSkipAbuseQuestions}
        />
      ) : (
        <div className="abuse-questions-container">
          {/* <h2 className="evaluation-title">Athlete Wellness Evaluation</h2> */}
          <h2 className="abuse-title">
            Your responses have caught our eye and we would like to hear more.
            Please check yes to any that apply.
          </h2>
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <MultiCheckboxInput
                checkboxOptionClassName="multi-checkbox-responses"
                inputName={`singleResponses`}
                options={arrayToOptionArray(
                  evalAbuseQuestionsSA.map((q) => q.question)
                )}
              />
              {/* {questionsSingleAnswer.map((question) => {
              return (
                <div key={question.id}>
                  <div className="question-and-help-text">
                    <p className="question">{question.question}</p>
                    {/* {question.helpText && (
                      <div>
                        <Image
                          id={`info-logo-${question.id}`}
                          src={infologo}
                          alt="infologo"
                          width={24}
                        ></Image>
                        <Tooltip anchorSelect={`#info-logo-${question.id}`}>
                          <p>{question.helpText}</p>
                        </Tooltip>
                      </div>
                    )} */}
              {/* <MultiCheckboxInput
                      checkboxOptionClassName="multi-checkbox-responses"
                      inputName={`multiResponseChoice${question.id}`}
                      options={arrayToOptionArray(question.checkboxes)}
                    ></MultiCheckboxInput>
                  </div> */}
              {/* <div className="response-options">
                    <RadioInput
                      inputName={`responseChoice${question.id}`}
                      options={yesOrNoResponseOptions}
                      rules={{ required: "Please select a choice." }}
                    ></RadioInput>
                  </div> */}
              {/* </div>
              );
            })} */}
              {evalAbuseQuestionsMA.map((question) => {
                return (
                  <div key={question.id}>
                    <div className="question-and-help-text">
                      <p className="question">{question.question}</p>
                      {question.helpText && (
                        <div>
                          <Image
                            id={`info-logo-${question.id}`}
                            src={infologo}
                            alt="infologo"
                            width={24}
                          ></Image>
                          <Tooltip anchorSelect={`#info-logo-${question.id}`}>
                            <p>{question.helpText}</p>
                          </Tooltip>
                        </div>
                      )}
                    </div>
                    <div className="response-options-multi-checkbox">
                      <MultiCheckboxInput
                        checkboxOptionClassName="multi-checkbox-responses"
                        inputName={`multiResponseChoice${question.id}`}
                        options={arrayToOptionArray(question.checkboxes)}
                      ></MultiCheckboxInput>
                    </div>
                  </div>
                );
              })}
              <div className="form-footer">
                <button type="submit" className="next-page-button">
                  Next Page
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      )}
    </>
  );
}
