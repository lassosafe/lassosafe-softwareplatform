import { connectMongoDB } from "../../../lib/mongodb";
import Individual from "../../../models/individual";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { individualData } = await req.json();
  const { evaluationId, ageMin, ageMax, athleteLevel, sportSeason, gender } =
    individualData;

  await connectMongoDB();

  // const individualExists = Individual.findOne({ _id: individualId });

  // if (individualExists) {
  //   Individual.updateOne(
  //     {
  //       _id: individualId,
  //     },
  //     {
  //       $set: {
  //         ageMin,
  //         ageMax,
  //         athleteLevel,
  //         sportSeason,
  //         gender,
  //       },
  //     }
  //   );
  // } else {
  const newIndividual = await Individual.create({
    evaluationId,
    ageMin,
    ageMax,
    athleteLevel,
    sportSeason,
    gender,
  });
  //}

  return NextResponse.json({ newIndividual });
}
