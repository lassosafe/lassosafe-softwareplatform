import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Evaluation from "../../../models/evaluation";
import User from "../../../models/user";

export async function POST(req) {
  try {
    const { expirationDate, creatorEmail, evaluationTitle, categoryIds } =
      await req.json();

    await connectMongoDB();

    console.log(expirationDate);
    console.log(creatorEmail);
    console.log(evaluationTitle);
    console.log(categoryIds);

    const user = await User.findOne({ email: creatorEmail }).exec();
    const userId = user._id.toString();

    console.log(user);
    console.log(userId);

    const newEvaluationDbEntry = await Evaluation.create({
      name: evaluationTitle,
      userId,
      categoryIds,
      expirationDate,
    });

    const newEvaluationId = newEvaluationDbEntry._id.toString();

    // const reponse = NextResponse.json(newEvaluationId);
    // console.log("re:", reponse);
    return NextResponse.json({ newEvaluationDbEntry });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occurred while creating new evaluation" },
      { status: 500 }
    );
  }
}
