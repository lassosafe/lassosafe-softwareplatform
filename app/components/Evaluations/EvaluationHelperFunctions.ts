/**
 * helper functions for calculcations and writes to the db
 */
import { WellnessQuestion } from "../../constants/evaluationQuestions";
import {
  Attribute,
  Pillar,
} from "../../constants/tiers";

export const calculateScore = (values: number[]) => {
  if (!values || values.length === 0) {
    return -1;
  }
  const maxScore = values.length * 7;
  const totalScore = values.reduce((a, b) => {
    return a + b;
  });
  const percentageScore = totalScore / maxScore;
  return percentageScore;
};

export const triggersConcern = (score: number) => {
  return score <= 0.7125;
};

export const writePillarScore = async (
  pillarScore: number,
  pillarId: Pillar,
  individualId: string,
  categoryId: string
) => {
  const pillarScoreData = {
    individualId,
    pillarId,
    pillarScore,
    categoryId,
  };

  await fetch("../../api/setPillarScore", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ pillarScoreData }),
  });
};

export const writeCategoryScore = async (
  individualId: string,
  categoryScore: number,
  categoryId: number
) => {
  await fetch("../../api/setCategoryScore", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ individualId, categoryScore, categoryId }),
  });
};

export const writeAttributeScore = async (
  individualId: string,
  attributeScore: number,
  attributeId: Attribute
) => {
  await fetch("../api/setAttributeScore", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ individualId, attributeScore, attributeId }),
  });
};

export const calculateAndWritePillarScore = (
  pillarResponses: any[],
  individualId: string,
  pillarId: Pillar,
  categoryId: string
) => {
  const totalPillarScore = calculateScore(pillarResponses);
  console.log("pillar score :", totalPillarScore);
  writePillarScore(totalPillarScore, pillarId, individualId, categoryId);
};

export const calculateAndWriteAttributeScores = (
  formData: any,
  wellnessQuestions: WellnessQuestion[],
  individualId: string,
  pillarId: Pillar
) => {
  let safetyAttribute1Scores = [];
  let safetyAttribute2Scores = [];
  let developmentAttribute1Scores = [];
  let developmentAttribute2Scores = [];
  let cultureAttribute1Scores = [];
  let cultureAttribute2Scores = [];

  //let attributeEnum;
  let attributeIdMultiplier;
  if (pillarId === Pillar.MENTAL_EMOTIONAL) {
    //attributeEnum = MentalEmotionalAttribute;
    attributeIdMultiplier = 0;
  } else if (pillarId === Pillar.PHYSICAL) {
    //attributeEnum = PhysicalAttribute;
    attributeIdMultiplier = 1;
  } else {
    //attributeEnum = SocialAttribute;
    attributeIdMultiplier = 2;
  }

  for (const key in formData) {
    const responseChoice = formData[key];
    const questionId = key;
    console.log(responseChoice);

    const currentAttributeIds = wellnessQuestions.find(
      (question) => question.id === Number(questionId)
    )?.attributeIds;
    if (
      currentAttributeIds?.includes(
        Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1
      ) ||
      currentAttributeIds?.includes(Attribute.PHYSICAL_SAFETY_WELLNESS_1) ||
      currentAttributeIds?.includes(Attribute.SOCIAL_SAFETY_WELLNESS_1)
    ) {
      safetyAttribute1Scores.push(responseChoice);
    }
    if (
      currentAttributeIds?.includes(
        Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2
      ) ||
      currentAttributeIds?.includes(Attribute.PHYSICAL_SAFETY_WELLNESS_2) ||
      currentAttributeIds?.includes(Attribute.SOCIAL_SAFETY_WELLNESS_2)
    ) {
      safetyAttribute2Scores.push(responseChoice);
    }
    if (
      currentAttributeIds?.includes(Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1) ||
      currentAttributeIds?.includes(Attribute.PHYSICAL_DEVELOPMENT_1) ||
      currentAttributeIds?.includes(Attribute.SOCIAL_DEVELOPMENT_1)
    ) {
      developmentAttribute1Scores.push(responseChoice);
    }
    if (
      currentAttributeIds?.includes(Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_2) ||
      currentAttributeIds?.includes(Attribute.PHYSICAL_DEVELOPMENT_2) ||
      currentAttributeIds?.includes(Attribute.SOCIAL_DEVELOPMENT_2)
    ) {
      developmentAttribute2Scores.push(responseChoice);
    }
    if (
      currentAttributeIds?.includes(Attribute.MENTAL_EMOTIONAL_CULTURE_1) ||
      currentAttributeIds?.includes(Attribute.PHYSICAL_CULTURE_1) ||
      currentAttributeIds?.includes(Attribute.SOCIAL_CULTURE_1)
    ) {
      cultureAttribute1Scores.push(responseChoice);
    }
    if (
      currentAttributeIds?.includes(Attribute.MENTAL_EMOTIONAL_CULTURE_2) ||
      currentAttributeIds?.includes(Attribute.PHYSICAL_CULTURE_2) ||
      currentAttributeIds?.includes(Attribute.SOCIAL_CULTURE_2)
    ) {
      cultureAttribute2Scores.push(responseChoice);
    }
  }

  if (safetyAttribute1Scores.length > 0) {
    const totalSafetyAttributeScore1 = calculateScore(safetyAttribute1Scores);
    writeAttributeScore(
      individualId,
      totalSafetyAttributeScore1,
      1 + attributeIdMultiplier * 6
    );
  }

  if (safetyAttribute2Scores.length > 0) {
    const totalSafetyAttributeScore2 = calculateScore(safetyAttribute2Scores);
    writeAttributeScore(
      individualId,
      totalSafetyAttributeScore2,
      2 + attributeIdMultiplier * 6
    );
  }

  if (developmentAttribute1Scores.length > 0) {
    const totalDevelopmentAttributeScore1 = calculateScore(
      developmentAttribute1Scores
    );
    writeAttributeScore(
      individualId,
      totalDevelopmentAttributeScore1,
      3 + attributeIdMultiplier * 6
    );
  }

  if (developmentAttribute2Scores.length > 0) {
    const totalDevelopmentAttributeScore2 = calculateScore(
      developmentAttribute2Scores
    );
    writeAttributeScore(
      individualId,
      totalDevelopmentAttributeScore2,
      4 + attributeIdMultiplier * 6
    );
  }

  if (cultureAttribute1Scores.length > 0) {
    const totalCultureAttributeScore1 = calculateScore(cultureAttribute1Scores);
    writeAttributeScore(
      individualId,
      totalCultureAttributeScore1,
      5 + attributeIdMultiplier * 6
    );
  }

  if (cultureAttribute2Scores.length > 0) {
    const totalCultureAttributeScore2 = calculateScore(cultureAttribute2Scores);
    writeAttributeScore(
      individualId,
      totalCultureAttributeScore2,
      6 + attributeIdMultiplier * 6
    );
  }
};

export const writeConcernScores = (
  pillarId: Pillar,
  individualId: string,
  categoryIdList: string[]
) => {
  categoryIdList.map((categoryId) => {
    //writeCategoryScore(individualId, 0.5, categoryId);
    writePillarScore(0.5, pillarId, individualId, categoryId.toString());
  });
};

export const writeAbuseScores = (
  pillarId: Pillar,
  individualId: string,
  categoryIdList: string[]
) => {
  categoryIdList.map((categoryId) => {
    //writeCategoryScore(individualId, 0.25, categoryId);
    writePillarScore(0.25, pillarId, individualId, categoryId);
  });
};
