import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Evaluation from "../../../models/evaluation";
import CategoryScore from "../../../models/categoryScore";

export async function POST(req) {
  try {
    const { userId } = await req.json();

    await connectMongoDB();

    const evaluations = await Evaluation.find({ userId });
    //console.log(userId);
    //console.log(evaluation);

    return NextResponse.json({ evaluations });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error occurred while getting evaluation" },
      { status: 500 }
    );
  }
}
