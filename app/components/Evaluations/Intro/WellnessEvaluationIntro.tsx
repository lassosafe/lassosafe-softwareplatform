"use client";

import { useSearchParams } from "next/navigation";
import { RadioInput } from "../../Inputs/RadioInput";
import { SelectInput } from "../../Inputs/SelectInput";
import { FormProvider, useForm } from "react-hook-form";
import Link from "next/link";
import {
  ageRangeOptions,
  athleteLevelOptions,
  genderOptions,
  sportSeasonOptions,
} from "@/app/constants/wellnessEvaluationIntroOptions";
import horizontallogowhite from "../../../../public/images/logo-horizontal-white.png";
import Image from "next/image";
import Footer from "../../Footer/Footer";

import "./WellnessEvaluationIntro.scss";
import { separateStrings } from "@/app/constants/helperFunctions";
import { Pillar } from "@/app/constants/tiers";

type WellnessEvaluationIntroFormProps = {
  athleteLevel: String;
  ageRange: String;
  sportSeason: String;
  gender: String;
};

export default function WellnessEvaluationIntro() {
  const searchParams = useSearchParams();

  const evaluationId = searchParams.get("evalId");
  const categoryIds = searchParams.get("cids");

  const formMethods = useForm<WellnessEvaluationIntroFormProps>();
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = formMethods;

  const onSubmit = async (formData: WellnessEvaluationIntroFormProps) => {
    //console.log("in on submit");
    //console.log(formData);

    const ageRange = ageRangeOptions.find((a) => a.value === formData.ageRange);
    const ageMin = ageRange!.ageMin;
    const ageMax = ageRange!.ageMax;

    const athleteLevel = athleteLevelOptions.find(
      (a) => a.value === formData.athleteLevel
    )?.optionLabel;
    const sportSeason = sportSeasonOptions.find(
      (a) => a.value === formData.sportSeason
    )?.optionLabel;
    const gender = genderOptions.find(
      (a) => a.value === formData.gender
    )?.optionLabel;

    const individualData = {
      evaluationId,
      ageMin,
      ageMax,
      athleteLevel,
      sportSeason,
      gender,
    };

    const newIndividualDBEntry = await fetch("../api/newIndividual", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ individualData }),
    });

    const { newIndividual } = await newIndividualDBEntry.json();
    const newIndividualId = newIndividual._id.toString();
    const isUnder18 = ageMax < 18 ? true : false;

    window.location.href = `/pages/wellnessQuestions?id=${newIndividualId}&minor=${isUnder18}&catIds=${categoryIds.toString()}`;
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
      <div className="wellness-evaluation-intro-container">
        <h2 className="title">Athlete Wellness Evaluation</h2>
        <p className="description">
          In this Athlete Wellness Evaluation, we will ask you about your
          environmental support of emotional, physical and social wellbeing.
        </p>
        <p className="description">
          We understand that all of the wellness pillars can equally influence
          your life and you may want to talk about an area that is not yet
          available on the Athlete Wellness Evaluation. We strongly encourage
          you to contact your{" "}
          <a
            className="athlete-helpline"
            href="https://www.athletehelpline.org/"
          >
            athlete helpline
          </a>{" "}
          (USA) or your organizational safeguarding agent.
        </p>
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="adjacent-selectors">
              <div className="selector">
                <SelectInput
                  label="Age Range"
                  inputName="ageRange"
                  options={ageRangeOptions}
                  rules={{ required: "Please select age range." }}
                ></SelectInput>
              </div>
              <div className="selector">
                <SelectInput
                  inputName="sportSeason"
                  options={sportSeasonOptions}
                  label="Sport Season"
                  rules={{ required: "Please select sport season." }}
                ></SelectInput>
              </div>
            </div>
            <p className="under-18-text">
              If you are under 18 years old, please have a parent assist in this
              evaluation of a minor.
            </p>
            <div className="adjacent-selectors">
              <div className="selector">
                <SelectInput
                  inputName="gender"
                  options={genderOptions}
                  label="Gender"
                  rules={{ required: "Please select gender." }}
                ></SelectInput>
              </div>
              <div className="selector">
                <SelectInput
                  inputName="athleteLevel"
                  options={athleteLevelOptions}
                  label="Athlete Level"
                  rules={{ required: "Please select athlete level." }}
                ></SelectInput>
              </div>
            </div>

            <div className="start-evaluation-container">
              <button type="submit" className="start-evaluation-button">
                Start Evaluation
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
      <Footer />
    </>
  );
}
