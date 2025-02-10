"use client";
/**
 * shared reusable component for the response choices 
 * shown under each evaluation question
 */

import { RadioInput } from "../Inputs/RadioInput";
import { FormProvider, useForm } from "react-hook-form";

type EvaluationReponseChoicesProps = {
  responseId: number;
  onSubmitQuestions: (value: number) => void;
};

type EvaluationResponseChoiceFormProps = {
  response: number;
};

export default function EvaluationResponseChoices({
  responseId,
  onSubmitQuestions,
}: EvaluationReponseChoicesProps) {
  const choices = [
    {
      value: 1,
      optionLabel: "Strongly Disagree",
    },
    {
      value: 2,
      optionLabel: "Mostly Disagree",
    },
    {
      value: 3,
      optionLabel: "Somewhat Disagree",
    },
    {
      value: 4,
      optionLabel: "Neutral/No Opinion",
    },
    {
      value: 5,
      optionLabel: "Somewhat Agree",
    },
    {
      value: 6,
      optionLabel: "Mostly Agree",
    },
    {
      value: 7,
      optionLabel: "Strongly Agree",
    },
  ];

  const formMethods = useForm<EvaluationResponseChoiceFormProps>();
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = formMethods;

  const onSubmit = async (formData: EvaluationResponseChoiceFormProps) => {
    console.log("in on submit");
    onSubmitQuestions(formData.response);
  };

  return (
    <div>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RadioInput
            inputName={`responseChoice${responseId}`}
            options={choices}
          ></RadioInput>
        </form>
      </FormProvider>
    </div>
  );
}
