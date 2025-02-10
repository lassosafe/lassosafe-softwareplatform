"use client";
/**
 * Component for creating a new evaluation
 */
import { useState } from "react";
import { useSession } from "next-auth/react";
import { FormProvider, useForm } from "react-hook-form";
import { TextInput } from "../../Inputs/SingleLineTextInput";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePickerElement } from "react-hook-form-mui/date-pickers";
import { categoryOptions } from "@/app/constants/categoryOptions";
import { MultiCheckboxInput } from "../../Inputs/MultiCheckboxInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

import "./NewEvaluation.scss";
import EvaluationEmailTemplate from "./EvaluationEmailTemplate";
import { DashboardHeader } from "../../DashboardComponents/DashboardHeader";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";
import Footer from "../../Footer/Footer";
import { useSearchParams } from "next/navigation";

type AddEmailsFormProps = {
  evaluationTitle: string;
  expirationDate: Date;
  categoryIds: string[];
};

export default function NewEvaluation() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const isUmbrella = searchParams.get("isUmbrella") === "true" ? true : false;

  const [evaluationCreated, setEvaluationCreated] = useState<boolean>(false);
  const [newEvaluationURL, setNewEvaluationURL] = useState<string>("");
  const [evaluationTitle, setEvaluationTitle] = useState<string>("");
  const [creatorName, setCreatorName] = useState<string>("");
  const [evaluationExpirationDate, setEvaluationExpirationDate] =
    useState<Date>(new Date());

  const formMethods = useForm<AddEmailsFormProps>();
  const {
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = formMethods;

  // send out evaluation emails here
  const onSubmit = async (formData: AddEmailsFormProps) => {
    //console.log(formData);

    //const emails = separateStrings(formData.emails);
    // TODO: add email validator
    const creatorEmail = session?.user?.email;
    const creatorName = session?.user?.name || "";
    //const userId = session;
    const { expirationDate, evaluationTitle, categoryIds } = formData;
    //console.log(creatorName);
    categoryIds.sort();

    setEvaluationTitle(evaluationTitle);
    setCreatorName(creatorName);
    setEvaluationExpirationDate(expirationDate);

    const newEvaluation = await fetch("../api/newEvaluation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        expirationDate,
        evaluationTitle,
        categoryIds,
        creatorEmail,
      }),
    });

    const { newEvaluationDbEntry } = await newEvaluation.json();
    const evaluationId = newEvaluationDbEntry._id;

    const domain = process.env.NEXT_PUBLIC_AUTH_URL;
    setNewEvaluationURL(
      `${domain}/pages/evalIntro?evalId=${evaluationId}&cids=${categoryIds.toString()}`
    );

    // const emailData = {
    //   emails,
    //   userName,
    //   evaluationTitle,
    //   categoryIds,
    //   evaluationId,
    //   expirationDate,
    // };

    // await fetch("../api/send", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ emailData }),
    // });

    setEvaluationCreated(true);
    reset({});
  };

  return (
    <div className="new-evaluation-page">
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu isUmbrella={isUmbrella} />
        <div className="new-evaluation-container">
          {!evaluationCreated && (
            <>
              <div className="new-evaluation-title">Send New Evaluation</div>
              <div className="new-evaluation-body">
                <div className="add-emails-box">
                  <FormProvider {...formMethods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <TextInput
                        className="evaluation-title"
                        inputName="evaluationTitle"
                        label="Evaluation Title: Please enter a name that represents the evaluation."
                        rules={{
                          required: "Please enter a name.",
                        }}
                      />
                      <div className="evaluation-category-selector">
                        <MultiCheckboxInput
                          inputName="categoryIds"
                          label="Select one, two, or all three categories to include in this evaluation."
                          options={categoryOptions}
                          rules={{
                            required:
                              "Category Options: Please select at least one category.",
                          }}
                        />
                      </div>
                      <div className="expiration-date-selector">
                        <p className="enter-date-instructions">
                          Enter date you'd like all evaluations to be completed
                          by:
                        </p>
                        <div className="expiration-date-dropdown">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePickerElement
                              name="expirationDate"
                              label="Evaluation Completion Date"
                              disablePast
                              required
                              className="date-picker"
                            />
                          </LocalizationProvider>
                        </div>
                      </div>
                      {/* <h2 className="evaluation-header">Enter Emails:</h2>
                  <p className="add-email-instructions">
                    Add one or more emails to whom you'd like to send this
                    evaluation. <br />
                    Valid separators: comma, semicolon, space, tab, or new line.
                  </p>
                  <MultilineTextInput
                    className="add-emails-text-box"
                    inputName="emails"
                    label=""
                    rules={{ required: "Please specify emails." }}
                  /> */}
                      <div className="form-footer">
                        <button
                          type="submit"
                          className="create-evaluation-button"
                        >
                          Create Evaluation
                        </button>
                      </div>
                    </form>
                  </FormProvider>
                </div>
              </div>
            </>
          )}
          {evaluationCreated && (
            <div className="evaluation-created-container">
              <h2 className="evaluation-created-title">
                <b>Your evaluation has been created!</b>{" "}
              </h2>
              <p className="copy-instructions">
                Please copy and paste this evaluation URL when sending an email
                to your athletes or copy our recommended email content below.
              </p>
              <button
                onClick={async () => {
                  navigator.clipboard.writeText(newEvaluationURL);
                }}
              >
                <FontAwesomeIcon className="copy-icon" icon={faCopy} />
                Copy URL
              </button>
              <h2 className="new-eval-url">{newEvaluationURL}</h2>
              <p>
                <br />
                Check your dashboard after the evaluation completion date to see
                results. Thank you from the Lasso Safe team.
              </p>
              <p className="email-template-title">Recommended Email Content:</p>
              <EvaluationEmailTemplate
                senderName={creatorName}
                evaluationTitle={evaluationTitle}
                expirationDate={evaluationExpirationDate}
                evaluationURL={newEvaluationURL}
              />
              {/* <Button
            className="new-evaluation-button"
            onClick={() => setEvaluationCreated(false)}
          >
            Create Another Evaluation
          </Button> */}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
