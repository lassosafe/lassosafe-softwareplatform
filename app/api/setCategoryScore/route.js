import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import CategoryScore from "../../../models/categoryScore";

export async function POST(req) {
  try {
    const { individualId, categoryScore, categoryId } = await req.json();
    console.log("individual id:", individualId);
    console.log("category score: ", categoryScore);
    console.log("category id: ", categoryId);

    await connectMongoDB();

    const individualIdExists = await CategoryScore.findOne({
      individualId,
      categoryId,
    }).select("_id");
    console.log("id", individualId);
    console.log("does exist?", individualIdExists);
    if (individualIdExists) {
      console.log("in individual exists");
      console.log(individualId);
      console.log(categoryId);
      await CategoryScore.updateOne(
        { individualId, categoryId },
        {
          $set: {
            score: categoryScore,
          },
        }
      );
    } else {
      console.log("in individual does not exists");
      const newCategoryDbEntries = await CategoryScore.create({
        score: categoryScore,
        categoryId: categoryId,
        individualId: individualId,
      });
    }

    return NextResponse.json({ message: "Success writing category score!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error occurred while writing new category score to db" },
      { status: 500 }
    );
  }
}
