import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import PillarScore from "../../../models/pillarScore";

export async function POST(req) {
  try {
    const { pillarScoreData } = await req.json();
    const { individualId, pillarId, pillarScore, categoryId } = pillarScoreData;

    await connectMongoDB();

    //console.log("in pillar score");
    //console.log(pillarScoreData);

    const individualIdExists = await PillarScore.findOne({
      individualId,
      pillarId,
      categoryId,
    }).select("_id");
    //console.log("ie");
    // console.log(individualIdExists);
    if (individualIdExists) {
      await PillarScore.updateOne(
        {
          individualId: individualId,
          pillarId: pillarId,
          categoryId: categoryId,
        },
        {
          $set: {
            score: pillarScore,
          },
        }
      );
    } else {
      //console.log("in new pillar score");
      const newPillarDbEntry = await PillarScore.create({
        score: pillarScore,
        pillarId: pillarId,
        individualId: individualId,
        categoryId: categoryId,
      });
    }

    return NextResponse.json({ message: "Success writing pillar score!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error occurred while writing new pillar score to db" },
      { status: 500 }
    );
  }
}
