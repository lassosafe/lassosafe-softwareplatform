"use client";

import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { RadioInput } from "../../Inputs/RadioInput";
import { yesOrNoResponseOptions } from "@/app/constants/evaluationResponseOptions";
import {
  calculateScore,
  triggersConcern,
  writeAttributeScore,
} from "@/app/components/Evaluations/EvaluationHelperFunctions";
import { FormProvider, useForm } from "react-hook-form";
import {
  ConcernQuestion,
  ConcernQuestionNew,
  concernQuestions,
  emotionalWellnessConcernQuestions,
} from "../../../constants/evaluationQuestions";
import infologo from "../../../../public/images/infologo.png";
import { useEffect, useState } from "react";
import { PossibleAbuseWarning } from "./PossibleAbuseWarning";
import horizontallogowhite from "../../../../public/images/logo-horizontal-white.png";

import "./ConcernQuestions.scss";
import "../PillarQuestions/EmotionalWellnessQuestions.scss";
import { useSearchParams } from "next/navigation";
import { separateStrings } from "@/app/constants/helperFunctions";
import { Attribute } from "@/app/constants/tiers";

// type ConcernQuestionsFormProps = {
//   response1: number;
//   response2: number;
//   response3: number;
//   response4: number;
// };

// type ConcernQuestionsProps = {
//   onSubmit: (formData: unknown) => void;
//   questions: ConcernQuestion[];
// };

export default function ConcernQuestions() {
  //const [showAbuseWarning, setShowAbuseWarning] = useState<boolean>(false);

  const formMethods = useForm();
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = formMethods;

  const searchParams = useSearchParams();
  const individualId = searchParams.get("id");
  const concernAttributes = searchParams.get("ca");
  const concernAttributeList =
    typeof concernAttributes === "string"
      ? separateStrings(concernAttributes)
      : [];
  const [evalConcernQuestions, setEvalConcernQuestions] = useState<
    ConcernQuestionNew[]
  >([]);

  useEffect(() => {
    let tempConcernQuestions: ConcernQuestionNew[] = [];
    concernAttributeList.forEach((attribute) => {
      let questions = concernQuestions.filter((q) =>
        q.attributeIds.includes(Number(attribute))
      );
      questions.forEach((question) => {
        if (!tempConcernQuestions.find((q) => q.id === question.id)) {
          tempConcernQuestions.push(question);
        }
      });
    });
    setEvalConcernQuestions(tempConcernQuestions);
  }, []);

  const onSubmit = async (formData: any) => {
    //console.log(formData);
    let abuseAttributes: Attribute[] = [];
    for (const key in formData) {
      const response = formData[key];
      const questionId = key;
      const question = evalConcernQuestions.find(
        (question) => question.id === Number(questionId)
      );
      if (response === 1) {
        question.attributeIds.forEach((attributeId) => {
          if (!abuseAttributes.includes(attributeId)) {
            abuseAttributes.push(attributeId);
          }
          writeAttributeScore(individualId, 0, attributeId);
        });
      }
    }
    if (abuseAttributes.length > 0) {
      window.location.href = `/pages/abuseQuestions?aa=${abuseAttributes.toString()}`;
    } else {
      window.location.href = "/pages/evaluationCompleted";
    }
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
      <div className="concern-questions-container">
        {/* <h2 className="evaluation-title">Athlete Wellness Evaluation</h2> */}
        <h2 className="concern-title">
          Your responses have caught our eye and we would like to hear more.
        </h2>
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {evalConcernQuestions.map((question) => {
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
                          className="info-logo-concern"
                        ></Image>
                        <Tooltip
                          anchorSelect={`#info-logo-${question.id}`}
                          className="tool-tip-box"
                        >
                          <p>{question.helpText}</p>
                        </Tooltip>
                      </div>
                    )}
                  </div>
                  <div className="response-options">
                    <RadioInput
                      inputName={`${question.id}`}
                      options={yesOrNoResponseOptions}
                      rules={{ required: "Please select a choice." }}
                    ></RadioInput>
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
    </>
  );
}
