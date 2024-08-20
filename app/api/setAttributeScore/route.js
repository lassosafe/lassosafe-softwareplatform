import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import AttributeScore from "../../../models/attributeScore";

export async function POST(req) {
  try {
    const { individualId, attributeScore, attributeId } = await req.json();

    await connectMongoDB();

    const individualIdExists = await AttributeScore.findOne({
      individualId,
      attributeId,
    }).select("_id");
    if (individualIdExists) {
      console.log("in individual id exists");
      await AttributeScore.updateOne(
        {
          individualId: individualId,
          attributeId: attributeId,
        },
        {
          $set: {
            score: attributeScore,
          },
        }
      );
    } else {
      console.log("creating new attribute");
      const newAttributeDbEntries = await AttributeScore.create([
        {
          score: attributeScore,
          attributeId: attributeId,
          individualId: individualId,
        },
      ]);
    }

    // const reponse = NextResponse.json(newEvaluationId);
    // console.log("re:", reponse);
    return NextResponse.json({ message: "Success!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error occurred while writing new scores to db" },
      { status: 500 }
    );
  }
}
