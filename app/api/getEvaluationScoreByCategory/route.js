import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Individual from "../../../models/individual";
import CategoryScore from "../../../models/categoryScore";
import PillarScore from "../../../models/pillarScore";
import AttributeScore from "../../../models/attributeScore";

const getCategoryScore = async (individualId, categoryId) => {
  const catScore = await CategoryScore.findOne({
    individualId,
    categoryId,
  }).select("score");
  console.log("in cat score");
  console.log(catScore);
  if (catScore) {
    console.log(catScore.score);
    return catScore.score;
  } else {
    return null;
  }
};

const getPillarScore = async (individualId, pillarId, categoryId) => {
  const pillarScore = await PillarScore.findOne({
    individualId,
    categoryId,
    pillarId,
  }).select("score");
  console.log("in pillar score");
  console.log(pillarScore);
  if (pillarScore) {
    console.log(pillarScore.score);
    return pillarScore.score;
  } else {
    return null;
  }
};

const getAttributeScore = async (individualId, attributeId) => {
  const attributeScore = await AttributeScore.findOne({
    individualId,
    attributeId,
  }).select("score");
  console.log("in attribute score");
  console.log(attributeScore);
  if (attributeScore) {
    console.log(attributeScore.score);
    return attributeScore.score;
  } else {
    return null;
  }
};

export async function POST(req) {
  try {
    const { evaluationId, categoryId } = await req.json();

    await connectMongoDB();

    const individuals = await Individual.find({
      evaluationId,
    }).select("_id");

    const individualIds = individuals.map((i) => i._id.toString());

    console.log("iids");
    console.log(individualIds);

    let categoryScores = [];
    let mentalEmotionalScores = [];
    let physicalScores = [];
    let socialScores = [];
    let mentalEmotionalAttribute1Scores = [];
    let mentalEmotionalAttribute2Scores = [];
    let physicalAttribute1Scores = [];
    let physicalAttribute2Scores = [];
    let socialAttribute1Scores = [];
    let socialAttribute2Scores = [];

    let attributeMultiplier = 0;
    if (categoryId === "1") attributeMultiplier = 0;
    else if (categoryId === "2") attributeMultiplier = 1;
    else if (categoryId === "3") attributeMultiplier = 2;

    for (let i = 0; i < individualIds.length; i++) {
      const individualId = individualIds[i];
      console.log("in for loop");
      console.log("iid", individualId);
      console.log("cid", categoryId);
      //console.log(getCategoryScore(individualId, categoryId));
      const categoryScore = await getCategoryScore(individualId, categoryId);
      console.log("returned category score");
      console.log(categoryScore);
      if (categoryScore) {
        categoryScores.push(categoryScore);
      }

      const mentalEmotionalScore = await getPillarScore(
        individualId,
        1,
        categoryId
      );
      if (mentalEmotionalScore) {
        mentalEmotionalScores.push(mentalEmotionalScore);
      }

      const physicalScore = await getPillarScore(individualId, 2, categoryId);
      if (physicalScore) {
        physicalScores.push(physicalScore);
      }

      const socialScore = await getPillarScore(individualId, 3, categoryId);
      if (socialScore) {
        socialScores.push(socialScore);
      }

      let attributeIdList;
      if (categoryId === 1) {
        attributeIdList = [1, 2, 7, 8, 13, 14];
      } else if (categoryId === 2) {
        attributeIdList = [3, 4, 9, 10, 15, 16];
      } else if (categoryId === 3) {
        attributeIdList = [5, 6, 11, 12, 17, 18];
      }

      const mentalEmotionalAttribute1Score = await getAttributeScore(
        individualId,
        attributeIdList[0]
      );
      if (mentalEmotionalAttribute1Score) {
        mentalEmotionalAttribute1Scores.push(mentalEmotionalAttribute1Score);
      }

      const mentalEmotionalAttribute2Score = await getAttributeScore(
        individualId,
        attributeIdList[1]
      );
      if (mentalEmotionalAttribute2Score) {
        mentalEmotionalAttribute2Scores.push(mentalEmotionalAttribute2Score);
      }

      const physicalAttribute1Score = await getAttributeScore(
        individualId,
        attributeIdList[2]
      );
      if (physicalAttribute1Score) {
        physicalAttribute1Scores.push(physicalAttribute1Score);
      }

      const physicalAttribute2Score = await getAttributeScore(
        individualId,
        attributeIdList[3]
      );
      if (physicalAttribute2Score) {
        physicalAttribute2Scores.push(physicalAttribute2Score);
      }

      const socialAttribute1Score = await getAttributeScore(
        individualId,
        attributeIdList[4]
      );
      if (socialAttribute1Score) {
        socialAttribute1Scores.push(socialAttribute1Score);
      }

      const socialAttribute2Score = await getAttributeScore(
        individualId,
        attributeIdList[5]
      );
      if (socialAttribute2Score) {
        socialAttribute2Scores.push(socialAttribute2Score);
      }
    }

    console.log("all cat scores: ", categoryScores);

    const evaluationScores = {
      categoryScores,
      mentalEmotionalScores,
      physicalScores,
      socialScores,
      mentalEmotionalAttribute1Scores,
      mentalEmotionalAttribute2Scores,
      physicalAttribute1Scores,
      physicalAttribute2Scores,
      socialAttribute1Scores,
      socialAttribute2Scores,
    };
    console.log(evaluationScores);

    return NextResponse.json({ evaluationScores });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error occurred while writing new category score to db" },
      { status: 500 }
    );
  }
}
